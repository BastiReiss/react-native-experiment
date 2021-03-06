export default class MarkerData {

  constructor(locationId) {
    this._locationId = locationId;
  }

  get locationId() {
    return this._locationId;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set thumbnailPath(path) {
    this._thumbnailPath = path;
  }

  get thumbnailPath() {
    return this._thumbnailPath;
  }

  set latitude(latitude) {
    this._latitude = latitude;
  }

  get latitude() {
    return this._latitude;
  }

  set longitude(longitude) {
    this._longitude = longitude;
  }

  get longitude() {
    return this._longitude;
  }
}
