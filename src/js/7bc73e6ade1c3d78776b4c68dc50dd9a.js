module.exports = {
  "type": "object",
  "properties": {
    "version": {
      "type": "number"
    },
    "setting": {
      "type": "object",
      "properties": {
        "MaxLocalstorageSize": {
          "type": "number"
        },
        "OpendataMaxLocalStorageSize": {
          "type": "number"
        },
        "OpendataMaxFileStorageSize": {
          "type": "number"
        },
        "MaxCodeSize": {
          "type": "number"
        },
        "MaxWebviewDepth": {
          "type": "number"
        },
        "ExpendedMaxWebviewDepth": {
          "type": "number"
        },
        "MaxBackgroundLifespan": {
          "type": "number"
        },
        "MaxRequestConcurrent": {
          "type": "number"
        },
        "MaxUploadConcurrent": {
          "type": "number"
        },
        "MaxDownloadConcurrent": {
          "type": "number"
        },
        "MaxFileStorageSize": {
          "type": "number"
        },
        "MinTabbarCount": {
          "type": "number"
        },
        "MaxTabbarCount": {
          "type": "number"
        },
        "MaxTabbarIconSize": {
          "type": "number"
        },
        "MaxDataSize": {
          "type": "number"
        },
        "MaxWebsocketConnect": {
          "type": "number"
        },
        "GameDownloadFileSizeLimit": {
          "type": "number"
        },
        "DownloadFileSizeLimit": {
          "type": "number"
        },
        "SubContextImgDomain": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "NavigateMiniprogramLimit": {
          "type": "number"
        },
        "MaxSubPackageLimit": {
          "type": "number"
        }
      },
      "required": [
        "DownloadFileSizeLimit",
        "ExpendedMaxWebviewDepth",
        "GameDownloadFileSizeLimit",
        "MaxBackgroundLifespan",
        "MaxCodeSize",
        "MaxDataSize",
        "MaxDownloadConcurrent",
        "MaxFileStorageSize",
        "MaxLocalstorageSize",
        "MaxRequestConcurrent",
        "MaxSubPackageLimit",
        "MaxTabbarCount",
        "MaxTabbarIconSize",
        "MaxUploadConcurrent",
        "MaxWebsocketConnect",
        "MaxWebviewDepth",
        "MinTabbarCount",
        "NavigateMiniprogramLimit",
        "OpendataMaxFileStorageSize",
        "OpendataMaxLocalStorageSize",
        "SubContextImgDomain"
      ]
    }
  },
  "required": [
    "setting",
    "version"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$version": 1761290148631
}