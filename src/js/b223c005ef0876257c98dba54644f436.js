module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "prompts": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/IPromptTemplate"
      }
    }
  },
  "required": [
    "prompts",
    "version"
  ],
  "definitions": {
    "IPromptTemplate": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "desc": {
          "type": "string"
        },
        "prompt": {
          "type": "string"
        },
        "enprompt": {
          "type": "string"
        },
        "entitle": {
          "type": "string"
        },
        "endesc": {
          "type": "string"
        }
      },
      "required": [
        "desc",
        "endesc",
        "enprompt",
        "entitle",
        "prompt",
        "title"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1774945877872
}