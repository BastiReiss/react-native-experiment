import React, { Component } from 'react';
import { StyleSheet, View, WebView } from 'react-native';
import {
	Container,
  Header,
  Button,
  Icon,
	Title,
  Left,
  Body,
  Right
} from 'native-base';

export default class MyWeb extends Component {

  onPressBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Header>
            <Left>
              <Button
                onPress={() => this.onPressBack()}
                transparent>
                <Icon name="ios-arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Instagram</Title>
            </Body>
            <Right />
          </Header>
          <View style={styles.content}>
            <WebView
              source={{uri: this.props.uri}}
              style={{marginTop: 20}}
            />
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	content: {
		padding: 0,
		flex: 1,
	}
});
