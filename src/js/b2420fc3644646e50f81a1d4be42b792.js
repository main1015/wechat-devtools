module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "weixinVersion": {
      "type": "string"
    },
    "defaultIndex": {
      "type": "number"
    },
    "devices": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "model": {
              "type": "string"
            },
            "os": {
              "enum": [
                "Android",
                "Windows",
                "iOS",
                "macOS",
                "ohos"
              ],
              "type": "string"
            },
            "ua": {
              "type": "string"
            },
            "dpr": {
              "type": "number"
            },
            "screenWidth": {
              "type": "number"
            },
            "screenHeight": {
              "type": "number"
            },
            "navigationbarHeightPortrait": {
              "type": "number"
            },
            "navigationbarHeightLandscape": {
              "type": "number"
            },
            "statusbarHeight": {
              "type": "number"
            },
            "tabbarHeight": {
              "type": "number"
            },
            "singlePageFootHeight": {
              "type": "number"
            },
            "hasNotch": {
              "type": "boolean"
            },
            "hasIsland": {
              "type": "boolean"
            },
            "safeAreaInsetBottom": {
              "type": "number"
            },
            "safeAreaInsetBottomLandscape": {
              "type": "number"
            },
            "isPad": {
              "type": "boolean"
            }
          },
          "required": [
            "dpr",
            "model",
            "os",
            "screenHeight",
            "screenWidth",
            "ua"
          ]
        }
      ],
      "minItems": 1,
      "maxItems": 1
    }
  },
  "required": [
    "defaultIndex",
    "devices",
    "version",
    "weixinVersion"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148630
}