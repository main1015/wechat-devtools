module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "minCOSUploadSize": {
      "type": "number"
    },
    "maxRouteTimeout": {
      "type": "number"
    }
  },
  "required": [
    "maxRouteTimeout",
    "minCOSUploadSize",
    "version"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148630
}