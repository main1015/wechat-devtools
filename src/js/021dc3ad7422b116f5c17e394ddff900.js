module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "exposure": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/IIdepluginExposure"
      }
    },
    "tempalte": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/IIdepluginTemplate"
      }
    }
  },
  "required": [
    "exposure",
    "tempalte",
    "version"
  ],
  "definitions": {
    "IIdepluginExposure": {
      "type": "object",
      "properties": {
        "pluginid": {
          "type": "string"
        },
        "location": {
          "type": "array",
          "items": {
            "type": "string",
            "const": "afterUpload"
          }
        },
        "tip": {
          "type": "object",
          "properties": {
            "zh": {
              "type": "string"
            },
            "en": {
              "type": "string"
            }
          },
          "required": [
            "en",
            "zh"
          ]
        },
        "env": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/IIdepluginExposureEnv"
          }
        }
      },
      "required": [
        "location",
        "pluginid",
        "tip"
      ]
    },
    "IIdepluginExposureEnv": {
      "enum": [
        "miniGame",
        "miniProgram"
      ],
      "type": "string"
    },
    "IIdepluginTemplate": {
      "type": "object",
      "properties": {
        "pluginid": {
          "type": "string"
        },
        "templateSubTypeId": {
          "type": "number"
        },
        "projectType": {
          "type": "string"
        },
        "projectPrefix": {
          "type": "string"
        },
        "templateEnv": {
          "type": "string",
          "const": "hybird"
        },
        "projectTypeDesc": {
          "type": "object",
          "properties": {
            "zh": {
              "type": "string"
            },
            "en": {
              "type": "string"
            }
          },
          "required": [
            "en",
            "zh"
          ]
        }
      },
      "required": [
        "pluginid",
        "projectPrefix",
        "projectType",
        "projectTypeDesc",
        "templateEnv",
        "templateSubTypeId"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148630
}