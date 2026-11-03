module.exports = {
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "properties": {
      "version": {
        "type": "number"
      },
      "signature": {
        "type": "string"
      }
    },
    "required": [
      "signature",
      "version"
    ]
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148630
}