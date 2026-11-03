module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "common": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "onlyMiniProgram": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "onlyMiniGame": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    }
  },
  "required": [
    "common",
    "onlyMiniGame",
    "onlyMiniProgram",
    "version"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148631
}