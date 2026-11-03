module.exports = {
  "type": "object",
  "properties": {
    "pageTS": {
      "type": "string"
    },
    "pageJS": {
      "type": "string"
    },
    "pageWXSS": {
      "type": "string"
    },
    "pageWXML": {
      "type": "string"
    },
    "pageJSON": {
      "type": "string"
    },
    "componentTS": {
      "type": "string"
    },
    "componentJS": {
      "type": "string"
    },
    "componentJSON": {
      "type": "string"
    },
    "componentWXML": {
      "type": "string"
    },
    "componentWXSS": {
      "type": "string"
    },
    "tcbIndexJS": {
      "type": "string"
    },
    "tcbCloudFunctionConfigJSON": {
      "type": "string"
    },
    "tcbCloudFunctionPackageJSON": {
      "type": "string"
    },
    "siteMap": {
      "type": "string"
    }
  },
  "required": [
    "componentJS",
    "componentJSON",
    "componentTS",
    "componentWXML",
    "componentWXSS",
    "pageJS",
    "pageJSON",
    "pageTS",
    "pageWXML",
    "pageWXSS",
    "siteMap",
    "tcbCloudFunctionConfigJSON",
    "tcbCloudFunctionPackageJSON",
    "tcbIndexJS"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148630
}