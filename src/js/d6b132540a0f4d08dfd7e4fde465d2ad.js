module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "templateList": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ISingleTemplate"
      }
    }
  },
  "required": [
    "templateList",
    "version"
  ],
  "definitions": {
    "ISingleTemplate": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "template_cover_image": {
          "type": "string"
        },
        "template_name": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "template_cover_image",
        "template_name"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148631
}