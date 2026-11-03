module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "list": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "number"
          },
          "displayName": {
            "type": "string"
          }
        },
        "required": [
          "displayName",
          "type"
        ]
      }
    }
  },
  "required": [
    "list",
    "version"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148630
}