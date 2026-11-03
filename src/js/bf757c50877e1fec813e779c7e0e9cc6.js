module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "checkList": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ICheckItem"
      }
    },
    "regList": {
      "type": "object",
      "additionalProperties": {}
    },
    "innerPluginAppidList": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "version"
  ],
  "definitions": {
    "ICheckItem": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "enabled": {
          "type": "boolean"
        },
        "desc": {
          "type": "string"
        },
        "descEn": {
          "type": "string"
        },
        "docURL": {
          "type": "string"
        },
        "level": {
          "type": "number"
        },
        "handlerText": {
          "type": "string"
        },
        "handlerTextEn": {
          "type": "string"
        },
        "text": {
          "type": "string"
        },
        "limit": {
          "type": "number"
        },
        "detail": {},
        "title": {
          "type": "string"
        },
        "titleEn": {
          "type": "string"
        },
        "typeName": {
          "type": "string"
        },
        "typeNameEn": {
          "type": "string"
        }
      },
      "required": [
        "desc",
        "descEn",
        "docURL",
        "enabled",
        "level",
        "title",
        "titleEn",
        "typeName",
        "typeNameEn"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148630
}