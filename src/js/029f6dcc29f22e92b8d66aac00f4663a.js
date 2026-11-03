module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "libs": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "properties": {
          "npm": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "doc": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "npm"
        ]
      }
    }
  },
  "required": [
    "libs",
    "version"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148630
}