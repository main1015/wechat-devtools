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
          "appid": {
            "type": "string"
          },
          "packages": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "appid",
          "packages"
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