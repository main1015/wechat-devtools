module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "miniProgram": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "miniGame": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "miniGame",
    "miniProgram",
    "version"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148630
}