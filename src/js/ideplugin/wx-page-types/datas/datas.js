"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WxmlTagDatas = void 0;
exports.WxmlTagDatas = {
    version: 1.1,
    tags: [
        {
            name: 'ad-custom',
            description: '\n(基础库 2.10.4+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n原生模板 广告。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'unit-id',
                    description: '*(string)*\n广告单元id，可在[小程序管理后台](https://mp.weixin.qq.com)的流量主模块新建',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html',
                        },
                    ],
                },
                {
                    name: 'ad-intervals',
                    description: '*(number)*\n广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 模板 广告不会自动刷新）',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html',
                        },
                    ],
                },
                {
                    name: 'bindload',
                    description: '*(eventhandle)*\n广告加载成功的回调',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n广告加载失败的回调，event.detail = {errCode: 1002}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html',
                },
            ],
        },
        {
            name: 'ad',
            description: '\n(基础库 1.9.94+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\nBanner 广告。\n\n',
            attributes: [
                {
                    name: 'unit-id',
                    description: '*(string)*\n广告单元id，可在[小程序管理后台](https://mp.weixin.qq.com)的流量主模块新建',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad.html',
                        },
                    ],
                },
                {
                    name: 'ad-intervals',
                    description: '*(number)*\n广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新）',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad.html',
                        },
                    ],
                },
                {
                    name: 'ad-type',
                    description: '*(string)*\n广告类型，默认为展示banner，可通过设置该属性为`video`展示视频广告, `grid`为格子广告',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad.html',
                        },
                    ],
                },
                {
                    name: 'ad-theme',
                    description: '*(string)*\n',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad.html',
                        },
                    ],
                },
                {
                    name: 'bindload',
                    description: '*(eventhandle)*\n广告加载成功的回调',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n广告加载失败的回调，event.detail = {errCode: 1002}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad.html',
                        },
                    ],
                },
                {
                    name: 'bindclose',
                    description: '*(eventhandle)*\n广告关闭的回调',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad.html',
                },
            ],
        },
        {
            name: 'aria-component',
            description: '\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n满足视障人士对于小程序的访问需求。\n\n## 无障碍访问\n\n为了更好地满足视障人士对于小程序的访问需求，基础库自2.7.1起，支持部分ARIA标签。\n\n无障碍特性在读屏模式下可以访问，iOS可通过设置->通用->辅助功能->旁白打开。\n\n以 [view]((view)) 组件为例，开发者可以增加`aria-role`和`aria-label`属性。\n其中`aria-role`表示组件的角色，当设置为\'img\'时，读屏模式下聚焦后系统会朗读出\'图像\'。设置为\'button\'时，聚焦后后系统朗读出\'按钮\'。\n`aria-label`表示组件附带的额外信息，聚焦后系统会自动朗读出来。\n\n小程序已经内置了一些无障碍的特性，对于非原生组件，开发者可以添加以下无障碍标签。\n\n|                       |                   |                   |                      |                   |\n| --------------------- | ----------------- | ----------------- | -------------------- | ----------------- |\n| aria-activedescendant | aria-atomic       | aria-autocomplete | aria-busy            | aria-checked      |\n| aria-colcount         | aria-colindex     | aria-colspan      | aria-controls        | aria-current      |\n| aria-describedby      | aria-details      | aria-disabled     | aria-dropeffect      | aria-errormessage |\n| aria-expanded         | aria-flowto       | aria-grabbed      | aria-haspopup        | aria-hidden       |\n| aria-invalid          | aria-keyshortcuts | aria-label        | aria-labelledby      | aria-level        |\n| aria-live             | aria-modal        | aria-multiline    | aria-multiselectable | aria-orientation  |\n| aria-owns             | aria-placeholder  | aria-posinset     | aria-pressed         | aria-readonly     |\n| aria-relevant         | aria-required     | aria-role         | aria-roledescription | aria-rowcount     |\n| aria-rowindex         | aria-rowspan      | aria-selected     | aria-setsize         | aria-sort         |\n| aria-valuemax         | aria-valuemin     | aria-valuenow     | aria-valuetext       |                   |\n\n## 示例代码\n\n```html\n<view aria-role="button" aria-label="提交表单">提交</view>\n```\n\n#### Tips\n1. 安卓和iOS读屏模式下设置`aria-role`后朗读的内容不同系统之间会有差异\n2. 可设置的`aria-role`可参看 [Using Aria](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)中的`Widget Roles`，部分role的设置在移动端可能无效。\n\n\n',
            attributes: [],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/aria-component.html',
                },
            ],
        },
        {
            name: 'audio',
            description: '\n<p class="wedoc-warning-tips">从基础库 {% version(1.6.0) %} 开始，本接口停止维护，请使用 [wx.createInnerAudioContext]((wx.createInnerAudioContext)) 代替</p>\n\n(基础库 1.0.0+)\n\n> 相关文档: [wx.createAudioContext]((wx.createAudioContext))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n音频。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'id',
                    description: '*(string)*\naudio 组件的唯一标识符',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'src',
                    description: '*(string)*\n要播放音频的资源地址',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'loop',
                    description: '*(boolean)*\n是否循环播放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'controls',
                    description: '*(boolean)*\n是否显示默认控件',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'poster',
                    description: '*(string)*\n默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'name',
                    description: '*(string)*\n默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'author',
                    description: '*(string)*\n默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n当发生错误时触发 error 事件，detail = {errMsg:MediaError.code}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'bindplay',
                    description: '*(eventhandle)*\n当开始/继续播放时触发play事件',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'bindpause',
                    description: '*(eventhandle)*\n当暂停播放时触发 pause 事件',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'bindtimeupdate',
                    description: '*(eventhandle)*\n当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
                {
                    name: 'bindended',
                    description: '*(eventhandle)*\n当播放到末尾时触发 ended 事件',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
                },
            ],
        },
        {
            name: 'button',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [聊天工具模式]((open-ability/chatTool))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n按钮。\n\n',
            attributes: [
                {
                    name: 'size',
                    description: '*(string)*\n按钮的大小',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                    values: [
                        {
                            name: 'default',
                            description: '默认大小',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'mini',
                            description: '小尺寸',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'type',
                    description: '*(string)*\n按钮的样式类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                    values: [
                        {
                            name: 'primary',
                            description: '绿色',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'default',
                            description: '白色',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'warn',
                            description: '红色',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'plain',
                    description: '*(boolean)*\n按钮是否镂空，背景色透明',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'disabled',
                    description: '*(boolean)*\n是否禁用',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'loading',
                    description: '*(boolean)*\n名称前是否带 loading 图标',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'form-type',
                    description: '*(string)*\n用于 [form]((form)) 组件，点击分别会触发 [form]((form)) 组件的 submit/reset 事件',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                    values: [
                        {
                            name: 'submit',
                            description: '提交表单',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'reset',
                            description: '重置表单',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'submitToGroup',
                            description: '转发文本到聊天',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'open-type',
                    description: '*(string)*\n微信开放能力',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                    values: [
                        {
                            name: 'contact',
                            description: '打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，[具体说明]((customer-message))。鸿蒙 OS 暂不支持',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'liveActivity',
                            description: '通过前端获取[新的一次性订阅消息下发机制](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message-2.html)使用的 code',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'share',
                            description: '触发用户转发，使用前建议先阅读[使用指引]((share#使用指引))',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'getPhoneNumber',
                            description: '手机号快速验证，向用户申请，并在用户同意后，快速填写和验证手机，[具体说明]((getPhoneNumber)) （*小程序插件中不能使用*）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'getRealtimePhoneNumber',
                            description: '手机号实时验证，向用户申请，并在用户同意后，快速填写和实时验证手机号。[具体说明]((getRealtimePhoneNumber)) （*小程序插件中不能使用*）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'getUserInfo',
                            description: '获取用户信息，可以从bindgetuserinfo回调中获取到用户信息 （*小程序插件中不能使用*）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'launchApp',
                            description: '打开APP，可以通过app-parameter属性设定向APP传的参数[具体说明]((launchApp))',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'openSetting',
                            description: '打开授权设置页',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'feedback',
                            description: '打开“意见反馈”页面，用户可提交反馈内容并上传[日志]((wx.getLogManager))，开发者可以登录[小程序管理后台](https://mp.weixin.qq.com/)后进入左侧菜单“客服反馈”页面获取到反馈内容',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'chooseAvatar',
                            description: '获取用户头像，可以从bindchooseavatar回调中获取到头像信息',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'agreePrivacyAuthorization',
                            description: '用户同意隐私协议按钮。用户点击一次此按钮后，所有已声明过的隐私接口可以正常调用。可通过 bindagreeprivacyauthorization 监听用户同意隐私协议事件。隐私合规开发指南详情可见[《小程序隐私协议开发指南》](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'hover-class',
                    description: '*(string)*\n指定按钮按下去的样式类。当 `hover-class="none"` 时，没有点击态效果',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'hover-stop-propagation',
                    description: '*(boolean)*\n指定是否阻止本节点的祖先节点出现点击态',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'hover-start-time',
                    description: '*(number)*\n按住后多久出现点击态，单位毫秒',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'hover-stay-time',
                    description: '*(number)*\n手指松开后点击态保留时间，单位毫秒',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'lang',
                    description: '*(string)*\n指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                    values: [
                        {
                            name: 'en',
                            description: '英文',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'zh_CN',
                            description: '简体中文',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                        {
                            name: 'zh_TW',
                            description: '繁体中文',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'session-from',
                    description: '*(string)*\n会话来源，open-type="contact"时有效，长度不超过 1024 个字符',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'send-message-title',
                    description: '*(string)*\n会话内消息卡片标题，open-type="contact"时有效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'send-message-path',
                    description: '*(string)*\n会话内消息卡片点击跳转小程序路径，open-type="contact"时有效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'send-message-img',
                    description: '*(string)*\n会话内消息卡片图片，open-type="contact"时有效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'app-parameter',
                    description: '*(string)*\n打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'show-message-card',
                    description: '*(boolean)*\n是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'phone-number-no-quota-toast',
                    description: '*(boolean)*\n当手机号快速验证或手机号实时验证额度用尽时，是否对用户展示“申请获取你的手机号，但该功能使用次数已达当前小程序上限，暂时无法使用”的提示，默认展示，open-type="getPhoneNumber" 或 open-type="getRealtimePhoneNumber" 时有效',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'need-show-entrance',
                    description: '*(boolean)*\n转发的文本消息是否要带小程序入口',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'entrance-path',
                    description: '*(string)*\n从消息小程序入口打开小程序的路径，默认为聊天工具启动路径',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'bindgetuserinfo',
                    description: '*(eventhandle)*\n用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与[wx.getUserInfo]((wx.getUserInfo))返回的一致，open-type="getUserInfo"时有效',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'bindcontact',
                    description: '*(eventhandle)*\n客服消息回调，open-type="contact"时有效。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'createliveactivity',
                    description: '*(eventhandle)*\n[新的一次性订阅消息下发机制](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message-2.html)回调，open-type=liveActivity时有效',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'bindgetphonenumber',
                    description: '*(eventhandle)*\n手机号快速验证回调，open-type=getPhoneNumber时有效。Tips：在触发 bindgetphonenumber 回调后应立即隐藏手机号按钮组件，或置为 disabled 状态，避免用户重复授权手机号产生额外费用。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'bindgetrealtimephonenumber',
                    description: '*(eventhandle)*\n手机号实时验证回调，open-type=getRealtimePhoneNumber 时有效。Tips：在触发 bindgetrealtimephonenumber 回调后应立即隐藏手机号按钮组件，或置为 disabled 状态，避免用户重复授权手机号产生额外费用。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n当使用开放能力时，发生错误的回调，open-type=launchApp时有效',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'bindopensetting',
                    description: '*(eventhandle)*\n在打开授权设置页后回调，open-type=openSetting时有效',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'bindlaunchapp',
                    description: '*(eventhandle)*\n打开 APP 成功的回调，open-type=launchApp时有效',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'bindchooseavatar',
                    description: '*(eventhandle)*\n获取用户头像回调，open-type=chooseAvatar时有效',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
                {
                    name: 'bindagreeprivacyauthorization',
                    description: '*(eventhandle)*\n用户同意隐私协议事件回调，open-type=agreePrivacyAuthorization时有效 （Tips: 如果使用 onNeedPrivacyAuthorization 接口，需要在 bindagreeprivacyauthorization 触发后再调用 `resolve({ event: "agree", buttonId })`）',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/button.html',
                },
            ],
        },
        {
            name: 'camera',
            description: '\n(基础库 1.6.0+)\n\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [wx.createCameraContext]((wx.createCameraContext))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n系统相机。扫码二维码功能，需升级微信客户端至6.7.3。需要[用户授权]((open-ability/authorize)) `scope.camera`。\n{%version(\'2.10.0\')%}起 initdone 事件返回 maxZoom，最大变焦范围，相关接口 [CameraContext.setZoom]((CameraContext.setZoom))。\n\n',
            attributes: [
                {
                    name: 'mode',
                    description: '*(string)*\n应用模式，只在初始化时有效，不能动态变更',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                        },
                    ],
                    values: [
                        {
                            name: 'normal',
                            description: '相机模式',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                        {
                            name: 'scanCode',
                            description: '扫码模式',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'resolution',
                    description: '*(string)*\n分辨率，不支持动态修改',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                        },
                    ],
                    values: [
                        {
                            name: 'low',
                            description: '低',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                        {
                            name: 'medium',
                            description: '中',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                        {
                            name: 'high',
                            description: '高',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'device-position',
                    description: '*(string)*\n摄像头朝向',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                        },
                    ],
                    values: [
                        {
                            name: 'front',
                            description: '前置',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                        {
                            name: 'back',
                            description: '后置',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'flash',
                    description: '*(string)*\n闪光灯，值为auto, on, off',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                        },
                    ],
                    values: [
                        {
                            name: 'auto',
                            description: '自动',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                        {
                            name: 'on',
                            description: '打开',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                        {
                            name: 'off',
                            description: '关闭',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                        {
                            name: 'torch',
                            description: '常亮',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'frame-size',
                    description: '*(string)*\n指定期望的相机帧数据尺寸',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                        },
                    ],
                    values: [
                        {
                            name: 'small',
                            description: '小尺寸帧数据',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                        {
                            name: 'medium',
                            description: '中尺寸帧数据',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                        {
                            name: 'large',
                            description: '大尺寸帧数据',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'bindstop',
                    description: '*(eventhandle)*\n摄像头在非正常终止时触发，如退出后台等情况',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n用户不允许使用摄像头时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                        },
                    ],
                },
                {
                    name: 'bindinitdone',
                    description: '*(eventhandle)*\n相机初始化完成时触发，`e.detail = {maxZoom}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                        },
                    ],
                },
                {
                    name: 'bindscancode',
                    description: '*(eventhandle)*\n在扫码识别成功时触发，仅在 mode="scanCode" 时生效',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
                },
            ],
        },
        {
            name: 'canvas',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [画布指南]((ability/canvas))、[Canvas 接口]((Canvas))、[旧版画布迁移指南]((ability/canvas-legacy-migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n画布。2.9.0 起支持一套新 Canvas 2D 接口（需指定 type 属性），同时支持[同层渲染]((native-component#原生组件同层渲染))，原有接口不再维护。旧版本可参考 [旧版画布迁移指南]((ability/canvas-legacy-migration)) 进行迁移。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'type',
                    description: '*(string)*\n指定 canvas 类型，支持 2d (2.9.0) 和 webgl (2.7.0)',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
                        },
                    ],
                },
                {
                    name: 'canvas-id',
                    description: '*(string)*\ncanvas 组件的唯一标识符，若指定了 type 则无需再指定该属性',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
                        },
                    ],
                },
                {
                    name: 'disable-scroll',
                    description: '*(boolean)*\n当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
                        },
                    ],
                },
                {
                    name: 'bindtouchstart',
                    description: '*(eventhandle)*\n手指触摸动作开始',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
                        },
                    ],
                },
                {
                    name: 'bindtouchmove',
                    description: '*(eventhandle)*\n手指触摸后移动',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
                        },
                    ],
                },
                {
                    name: 'bindtouchend',
                    description: '*(eventhandle)*\n手指触摸动作结束',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
                        },
                    ],
                },
                {
                    name: 'bindtouchcancel',
                    description: '*(eventhandle)*\n手指触摸动作被打断，如来电提醒，弹窗',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
                        },
                    ],
                },
                {
                    name: 'bindlongtap',
                    description: '*(eventhandle)*\n手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n当发生错误时触发 error 事件，detail = {errMsg}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html',
                },
            ],
        },
        {
            name: 'channel-live',
            description: '\n(基础库 2.29.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n\n> 相关文档: [视频号直播]((channels-live))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n小程序内嵌视频号直播组件，展示视频号直播状态和封面，并无弹窗跳转至视频号。注意：使用该组件打开的视频号视频需要与小程序的主体一致。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'feed-id',
                    description: '*(string)*\n视频 feedId',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-live.html',
                        },
                    ],
                },
                {
                    name: 'finder-user-name',
                    description: '*(string)*\n视频号 id，以“sph”开头的id，可在视频号助手获取。视频号必须与当前小程序相同主体。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-live.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-live.html',
                },
            ],
        },
        {
            name: 'channel-video',
            description: '\n(基础库 2.25.1+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n\n> 相关文档: [视频号视频]((channels-activity))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n小程序内嵌视频号视频组件，支持在小程序中播放视频号视频，并无弹窗跳转至视频号。注意：\n\n1. 若小程序与内嵌视频号视频为同主体，则内嵌视频号视频可支持自动播放；\n2. 基础库 2.31.1 起，对于非个人主体小程序，若小程序于内嵌视频号视频非同主体，则内嵌视频号视频不可自动播放，即强制 autoplay=false。\n\n',
            attributes: [
                {
                    name: 'feed-id',
                    description: '*(string)*\n仅视频号视频与小程序同主体时生效。若内嵌非同主体视频，请使用 feed-token。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                        },
                    ],
                },
                {
                    name: 'finder-user-name',
                    description: '*(string)*\n视频号 id，以“sph”开头的id，可在视频号助手获取。视频号必须与当前小程序相同主体。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                        },
                    ],
                },
                {
                    name: 'feed-token',
                    description: '*(string)*\n仅内嵌小程序非同主体视频号视频时使用，获取方式参考[本指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/channels-activity#feed-token)。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                        },
                    ],
                },
                {
                    name: 'autoplay',
                    description: '*(string)*\n是否自动播放。仅视频号视频与小程序同主体时支持设置为 true。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                        },
                    ],
                },
                {
                    name: 'loop',
                    description: '*(boolean)*\n是否循环播放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                        },
                    ],
                },
                {
                    name: 'muted',
                    description: '*(boolean)*\n是否静音播放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                        },
                    ],
                },
                {
                    name: 'object-fit',
                    description: '*(boolean)*\n当视频大小与 video 容器大小不一致时，视频的表现形式',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                        },
                    ],
                    values: [
                        {
                            name: 'contain',
                            description: '包含',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                                },
                            ],
                        },
                        {
                            name: 'fill',
                            description: '填充',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                                },
                            ],
                        },
                        {
                            name: 'cover',
                            description: '覆盖',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n视频播放出错时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html',
                },
            ],
        },
        {
            name: 'checkbox-group',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n多项选择器，内部由多个[checkbox]((checkbox))组成。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'bindchange',
                    description: '*(EventHandle)*\n[checkbox-group]((checkbox-group))中选中项发生改变时触发 change 事件，detail = {value:[选中的checkbox的value的数组]}',
                    attrType: 'EventHandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html',
                },
            ],
        },
        {
            name: 'checkbox',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n多选项目。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'value',
                    description: '*(string)*\n[checkbox]((checkbox))标识，选中时触发[checkbox-group]((checkbox-group))的 change 事件，并携带 [checkbox]((checkbox)) 的 value',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html',
                        },
                    ],
                },
                {
                    name: 'disabled',
                    description: '*(boolean)*\n是否禁用',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html',
                        },
                    ],
                },
                {
                    name: 'checked',
                    description: '*(boolean)*\n当前是否选中，可用来设置默认选中',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html',
                        },
                    ],
                },
                {
                    name: 'color',
                    description: '*(string)*\ncheckbox的颜色，同css的color',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html',
                },
            ],
        },
        {
            name: 'cover-image',
            description: '\n<p class="wedoc-warning-tips">目前[原生组件]((native-component))均已支持同层渲染，建议使用 [image]((image)) 替代</p>\n\n(基础库 1.4.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n覆盖在原生组件之上的图片视图。\n\n可覆盖的原生组件同[cover-view]((cover-view))，支持嵌套在[cover-view]((cover-view))里。\n\n',
            attributes: [
                {
                    name: 'src',
                    description: '*(string)*\n图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
                        },
                    ],
                },
                {
                    name: 'referrer-policy',
                    description: '*(string)*\n格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
                        },
                    ],
                    values: [
                        {
                            name: 'origin',
                            description: '发送完整的referrer',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
                                },
                            ],
                        },
                        {
                            name: 'no-referrer',
                            description: '不发送',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'bindload',
                    description: '*(eventhandle)*\n图片加载成功时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n图片加载失败时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
                },
            ],
        },
        {
            name: 'cover-view',
            description: '\n<p class="wedoc-warning-tips">目前[原生组件]((native-component))均已支持同层渲染，建议使用 [view]((view)) 替代</p>\n\n(基础库 1.4.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n覆盖在原生组件之上的文本视图。\n\n可覆盖的原生组件包括 [map]((map))、[video]((video))、[canvas]((canvas))、[camera]((camera))、[live-player]((live-player))、[live-pusher]((live-pusher))\n\n只支持嵌套 [cover-view]((cover-view))、[cover-image]((cover-image))，可在 [cover-view]((cover-view)) 中使用 [button]((button))。组件属性的长度单位默认为px，{%version(\'2.4.0\')%}起支持传入单位(rpx/px)。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'scroll-top',
                    description: '*(number/string)*\n设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html',
                },
            ],
        },
        {
            name: 'double-tap-gesture-handler',
            description: '\n> 相关文档: [手势系统]((skyline/gesture))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n双击时触发手势\n\n',
            attributes: [
                {
                    name: 'tag',
                    description: '*(string)*\n声明手势协商时的组件标识',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:ongesture',
                    description: '*(eventhandler)*\n手势识别成功的回调',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html',
                        },
                    ],
                    values: [
                        {
                            name: '',
                            description: '手势状态',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 X 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 Y 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'worklet:should-response-on-move',
                    description: '*(callback)*\n手指移动过程中手势是否响应',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:should-accept-gesture',
                    description: '*(callback)*\n手势是否应该被识别',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'simultaneous-handlers',
                    description: '*(Array.&lt;string&gt;)*\n声明可同时触发的手势节点',
                    attrType: 'Array.&lt;string&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'native-view',
                    description: '*(string)*\n代理的原生节点类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/double-tap-gesture-handler.html',
                },
            ],
        },
        {
            name: 'draggable-sheet',
            description: '\n(基础库 3.2.0+)\n\n> 相关文档: [Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n## 功能描述\n\n半屏可拖拽组件。该组件需配合 [DraggableSheetContext]((DraggableSheetContext)) 接口使用。 目前仅在 Skyline 渲染引擎下支持。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'initial-child-size',
                    description: '*(number)*\n初始时占父容器的比例',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html',
                        },
                    ],
                },
                {
                    name: 'min-child-size',
                    description: '*(number)*\n最小时占父容器的比例',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html',
                        },
                    ],
                },
                {
                    name: 'max-child-size',
                    description: '*(number)*\n最大时占父容器的比例',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html',
                        },
                    ],
                },
                {
                    name: 'snap',
                    description: '*(boolean)*\n拖拽后是否自动对齐关键点',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html',
                        },
                    ],
                },
                {
                    name: 'snap-sizes',
                    description: '*(Array.&lt;number&gt;)*\n拖拽后对齐的关键点，无需包含最小和最大值',
                    attrType: 'Array.&lt;number&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html',
                        },
                    ],
                },
                {
                    name: 'worklet:onsizeupdate',
                    description: '*(worklet)*\n尺寸发生变化时触发，仅支持 worklet 作为回调。event = {pixels, size}',
                    attrType: 'worklet',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html',
                },
            ],
        },
        {
            name: 'editor-portal',
            description: '\n(基础库 3.7.11+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n渲染 [editor]((component/editor)) 组件的自定义区块。相关接口 [EditorCtx.insertCustomBlock]((editor/EditorContext.insertCustomBlock))。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'key',
                    description: '*(string)*\n自定义区块的 blockId',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor-portal.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor-portal.html',
                },
            ],
        },
        {
            name: 'editor',
            description: '\n(基础库 2.7.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n富文本编辑器，可以对图片、文字进行编辑。\n\n编辑器导出内容支持带标签的 `html`和纯文本的 `text`，编辑器内部采用 `delta` 格式进行存储。\n\n通过`setContents`接口设置内容时，解析插入的 `html` 可能会由于一些非法标签导致解析错误，建议开发者在小程序内使用时通过 delta 进行插入。\n\n富文本组件内部引入了一些基本的样式使得内容可以正确的展示，开发时可以进行覆盖。需要注意的是，在其它组件或环境中使用富文本组件导出的html时，需要额外引入 <a :href="require(\'../resource/editor.zip\')">这段样式</a>，并维护`<ql-container><ql-editor></ql-editor></ql-container>`的结构。\n\n图片控件仅初始化时设置有效。\n\n相关 api：[EditorContext]((EditorContext))\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'read-only',
                    description: '*(boolean)*\n设置编辑器为只读',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'placeholder',
                    description: '*(string)*\n提示信息',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'show-img-size',
                    description: '*(boolean)*\n点击图片时显示图片大小控件',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'show-img-toolbar',
                    description: '*(boolean)*\n点击图片时显示工具栏控件',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'show-img-resize',
                    description: '*(boolean)*\n点击图片时显示修改尺寸控件',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'enable-formats',
                    description: '*(Array.&lt;string&gt;)*\n编辑器允许的名单内的格式',
                    attrType: 'Array.&lt;string&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'enterkeyhint',
                    description: '*(string)*\n定义虚拟键盘回车键的[操作标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/enterkeyhint)',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'confirm-hold',
                    description: '*(boolean)*\n点击键盘回车键时是否保持键盘不收起',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'bindready',
                    description: '*(eventhandle)*\n编辑器初始化完成时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'bindfocus',
                    description: '*(eventhandle)*\n编辑器聚焦时触发，event.detail = {html, text, delta}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'bindblur',
                    description: '*(eventhandle)*\n编辑器失去焦点时触发，detail = {html, text, delta}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'bindinput',
                    description: '*(eventhandle)*\n编辑器内容改变时触发，detail = {html, text, delta}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
                {
                    name: 'bindstatuschange',
                    description: '*(eventhandle)*\n通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/editor.html',
                },
            ],
        },
        {
            name: 'force-press-gesture-handler',
            description: '\n> 相关文档: [手势系统]((skyline/gesture))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\niPhone 设备重按时触发手势\n\n',
            attributes: [
                {
                    name: 'tag',
                    description: '*(string)*\n声明手势协商时的组件标识',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:ongesture',
                    description: '*(eventhandler)*\n手势识别成功的回调',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html',
                        },
                    ],
                    values: [
                        {
                            name: '',
                            description: '手势状态',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 X 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 Y 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '压力大小',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'worklet:should-accept-gesture',
                    description: '*(callback)*\n手势是否应该被识别',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'simultaneous-handlers',
                    description: '*(Array.&lt;string&gt;)*\n声明可同时触发的手势节点',
                    attrType: 'Array.&lt;string&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'native-view',
                    description: '*(string)*\n代理的原生节点类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/force-press-gesture-handler.html',
                },
            ],
        },
        {
            name: 'form',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [聊天工具模式]((open-ability/chatTool))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n表单。将组件内的用户输入的[switch]((switch)) [input]((input)) [checkbox]((checkbox)) [slider]((slider)) [radio]((radio)) [picker]((picker)) 提交。\n\n当点击 [form]((form)) 表单中 form-type 为 submit 的 [button]((button)) 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'report-submit',
                    description: '*(boolean)*\n是否返回 formId 用于发送[模板消息]((open-ability/template-message))',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/form.html',
                        },
                    ],
                },
                {
                    name: 'report-submit-timeout',
                    description: '*(number)*\n等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/form.html',
                        },
                    ],
                },
                {
                    name: 'bindsubmit',
                    description: '*(eventhandle)*\n携带 form 中的数据触发 submit 事件，event.detail = {value : {\'name\': \'value\'} , formId: \'\'}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/form.html',
                        },
                    ],
                },
                {
                    name: 'bindreset',
                    description: '*(eventhandle)*\n表单重置时会触发 reset 事件',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/form.html',
                        },
                    ],
                },
                {
                    name: 'bindsubmitToGroup',
                    description: '*(eventhandle)*\n用户发送文本到聊天后触发，但不代表最终发送成功',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/form.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/form.html',
                },
            ],
        },
        {
            name: 'functional-page-navigator',
            description: '\n(基础库 2.1.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n仅在插件中有效，用于跳转到插件功能页。\n\n',
            attributes: [
                {
                    name: 'version',
                    description: '*(string)*\n跳转到的小程序版本，**线上版本必须设置为 release**',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                        },
                    ],
                    values: [
                        {
                            name: 'develop',
                            description: '开发版',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'trial',
                            description: '体验版',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'release',
                            description: '正式版',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'name',
                    description: '*(string)*\n要跳转到的功能页',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                        },
                    ],
                    values: [
                        {
                            name: 'loginAndGetUserInfo',
                            description: '[用户信息功能页](../framework/plugin/functional-pages/user-info.md)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'requestPayment',
                            description: '[支付功能页](../framework/plugin/functional-pages/request-payment.md)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'chooseAddress',
                            description: '[收货地址功能页](../framework/plugin/functional-pages/choose-address.md)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'chooseInvoice',
                            description: '[获取发票功能页](../framework/plugin/functional-pages/choose-invoice.md)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'chooseInvoiceTitle',
                            description: '[获取发票抬头功能页](../framework/plugin/functional-pages/choose-invoice-title.md)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'args',
                    description: '*(object)*\n功能页参数，参数格式与具体功能页相关',
                    attrType: 'object',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                        },
                    ],
                },
                {
                    name: 'bindsuccess',
                    description: '*(eventhandler)*\n功能页返回，且操作成功时触发， detail 格式与具体功能页相关',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                        },
                    ],
                },
                {
                    name: 'bindfail',
                    description: '*(eventhandler)*\n功能页返回，且操作失败时触发， detail 格式与具体功能页相关',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                        },
                    ],
                },
                {
                    name: 'bindcancel',
                    description: '*(eventhandler)*\n因用户操作从功能页返回时触发',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
                },
            ],
        },
        {
            name: 'grid-builder',
            description: '\n(基础库 3.4.0+)\n\n> 相关文档: [Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n网格构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点。具体用法可参考 [scroll-view]((scroll-view#列表构造器使用方法))\n\n',
            attributes: [
                {
                    name: 'padding',
                    description: '*(Array)*\n长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                        },
                    ],
                },
                {
                    name: 'list',
                    description: '*(Array)*\n需要用于渲染的列表',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                        },
                    ],
                },
                {
                    name: 'child-count',
                    description: '*(Array)*\n完整列表的长度，如果不传则取 list 的长度作为其值',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                        },
                    ],
                },
                {
                    name: 'type',
                    description: '*(string)*\n布局方式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                        },
                    ],
                    values: [
                        {
                            name: 'aligned',
                            description: '每行高度由同一行中最大高度子节点决定',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                                },
                            ],
                        },
                        {
                            name: 'masonry',
                            description: '瀑布流，根据子元素高度自动布局',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'cross-axis-count',
                    description: '*(number)*\n交叉轴元素数量',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                        },
                    ],
                },
                {
                    name: 'max-cross-axis-extent',
                    description: '*(number)*\n交叉轴元素最大范围',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                        },
                    ],
                },
                {
                    name: 'main-axis-gap',
                    description: '*(number)*\n主轴方向间隔',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                        },
                    ],
                },
                {
                    name: 'cross-axis-gap',
                    description: '*(number)*\n交叉轴方向间隔',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                        },
                    ],
                },
                {
                    name: 'binditembuild',
                    description: '*(eventhandle)*\n列表项创建时触发，event.detail = {index}，index 即被创建的列表项序号',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                        },
                    ],
                },
                {
                    name: 'binditemdispose',
                    description: '*(eventhandle)*\n列表项回收时触发，event.detail = {index}，index 即被回收的列表项序号',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html',
                },
            ],
        },
        {
            name: 'grid-view',
            description: '\n(基础库 2.29.0+)\n\n> 相关文档: [Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\nSkyline 下网格布局容器 和 瀑布流布局容器。基础库版本 2.30.4 起提供 WebView 兼容实现。\n\n1. 仅支持作为 `<scroll-view type="custom">` 模式的直接子节点\n2. 按需渲染节点，比 WebView 兼容实现具备更好的性能。\n\n',
            attributes: [
                {
                    name: 'type',
                    description: '*(string)*\n布局方式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html',
                        },
                    ],
                    values: [
                        {
                            name: 'aligned',
                            description: '每行高度由同一行中最大高度子节点决定',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html',
                                },
                            ],
                        },
                        {
                            name: 'masonry',
                            description: '瀑布流，根据子元素高度自动布局',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'cross-axis-count',
                    description: '*(number)*\n交叉轴元素数量',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html',
                        },
                    ],
                },
                {
                    name: 'max-cross-axis-extent',
                    description: '*(number)*\n交叉轴元素最大范围',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html',
                        },
                    ],
                },
                {
                    name: 'main-axis-gap',
                    description: '*(number)*\n主轴方向间隔',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html',
                        },
                    ],
                },
                {
                    name: 'cross-axis-gap',
                    description: '*(number)*\n交叉轴方向间隔',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html',
                        },
                    ],
                },
                {
                    name: 'padding',
                    description: '*(Array)*\n长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html',
                },
            ],
        },
        {
            name: 'horizontal-drag-gesture-handler',
            description: '\n> 相关文档: [手势系统]((skyline/gesture))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n横向滑动时触发手势\n\n',
            attributes: [
                {
                    name: 'tag',
                    description: '*(string)*\n声明手势协商时的组件标识',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:ongesture',
                    description: '*(eventhandler)*\n手势识别成功的回调',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                        },
                    ],
                    values: [
                        {
                            name: '',
                            description: '手势状态',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 X 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 Y 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对上一次，X 轴方向移动的坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对上一次，Y 轴方向移动的坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '手指离开屏幕时的横向速度（pixel per second)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '手指离开屏幕时的纵向速度（pixel per second)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'worklet:should-response-on-move',
                    description: '*(callback)*\n手指移动过程中手势是否响应',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:should-accept-gesture',
                    description: '*(callback)*\n手势是否应该被识别',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'simultaneous-handlers',
                    description: '*(Array.&lt;string&gt;)*\n声明可同时触发的手势节点',
                    attrType: 'Array.&lt;string&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'native-view',
                    description: '*(string)*\n代理的原生节点类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/horizontal-drag-gesture-handler.html',
                },
            ],
        },
        {
            name: 'icon',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n图标组件\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'type',
                    description: '*(string)*\nicon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/icon.html',
                        },
                    ],
                },
                {
                    name: 'size',
                    description: '*(number/string)*\nicon的大小，单位默认为px，{%version(\'2.4.0\')%}起支持传入单位(rpx/px)，{%version(\'2.21.3\')%}起支持传入其余单位(rem 等)。',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/icon.html',
                        },
                    ],
                },
                {
                    name: 'color',
                    description: '*(string)*\nicon的颜色，同css的color',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/icon.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/icon.html',
                },
            ],
        },
        {
            name: 'image',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n图片。支持 JPG、PNG、SVG、WEBP、GIF 等格式，{%version(\'2.3.0\')%} 起支持云文件ID。\n\n1. 使用 svg 格式且 mode=scaleToFill 时，WebView 会居中（除非 svg 里加上 preserveAspectRatio="none"），Skyline 则会撑满 <br>\n2. svg 格式不支持百分比单位 <br>\n3. svg 格式不支持 &lt;style&gt; element\n\n',
            attributes: [
                {
                    name: 'src',
                    description: '*(string)*\n图片资源地址',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                        },
                    ],
                },
                {
                    name: 'mode',
                    description: '*(string)*\n图片裁剪、缩放的模式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                        },
                    ],
                    values: [
                        {
                            name: 'scaleToFill',
                            description: '缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'aspectFit',
                            description: '缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'aspectFill',
                            description: '缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'widthFix',
                            description: '缩放模式，宽度不变，高度自动变化，保持原图宽高比不变',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'heightFix',
                            description: '缩放模式，高度不变，宽度自动变化，保持原图宽高比不变',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'top',
                            description: '裁剪模式，不缩放图片，只显示图片的顶部区域。仅 Webview 支持。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'bottom',
                            description: '裁剪模式，不缩放图片，只显示图片的底部区域。仅 Webview 支持。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'center',
                            description: '裁剪模式，不缩放图片，只显示图片的中间区域。仅 Webview 支持。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'left',
                            description: '裁剪模式，不缩放图片，只显示图片的左边区域。仅 Webview 支持。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'right',
                            description: '裁剪模式，不缩放图片，只显示图片的右边区域。仅 Webview 支持。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'top left',
                            description: '裁剪模式，不缩放图片，只显示图片的左上边区域。仅 Webview 支持。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'top right',
                            description: '裁剪模式，不缩放图片，只显示图片的右上边区域。仅 Webview 支持。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'bottom left',
                            description: '裁剪模式，不缩放图片，只显示图片的左下边区域。仅 Webview 支持。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                        {
                            name: 'bottom right',
                            description: '裁剪模式，不缩放图片，只显示图片的右下边区域。仅 Webview 支持。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'show-menu-by-longpress',
                    description: '*(boolean)*\n长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n当错误发生时触发，event.detail = {errMsg}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                        },
                    ],
                },
                {
                    name: 'bindload',
                    description: '*(eventhandle)*\n当图片载入完毕时触发，event.detail = {height, width}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
                },
            ],
        },
        {
            name: 'index',
            description: '\n> 以下服务端接口可免 access_token 调用的场景：使用[微信云托管](https://developers.weixin.qq.com/miniprogram/dev/wxcloudrun/src/basic/intro.html)通过[微信令牌/开放接口服务](https://developers.weixin.qq.com/miniprogram/dev/wxcloudrun/src/guide/weixin/token.html)调用；使用[微信云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)通过云函数免服务器发起[云调用](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/openapi/openapi.html)。\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[cover-image]((cover-image)) </td>\n<td>覆盖在原生组件之上的图片视图</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[cover-view]((cover-view)) </td>\n<td>覆盖在原生组件之上的文本视图</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[match-media]((match-media)) </td>\n<td>media query 匹配检测节点</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[movable-area]((movable-area)) </td>\n<td>[movable-view]((movable-view))的可移动区域</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[movable-view]((movable-view)) </td>\n<td>可移动的视图容器，在页面中可以拖拽滑动</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[page-container]((page-container)) </td>\n<td>页面容器</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[root-portal]((root-portal)) </td>\n<td>使整个子树从页面中脱离出来，类似于在 CSS 中使用 fixed position 的效果</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[scroll-view]((scroll-view)) </td>\n<td>可滚动视图区域</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[swiper]((swiper)) </td>\n<td>滑块视图容器</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[swiper-item]((swiper-item)) </td>\n<td>仅可放置在[swiper]((swiper))组件中，宽高自动设置为100%</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[view]((view)) </td>\n<td>视图容器</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[icon]((icon)) </td>\n<td>图标组件</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[progress]((progress)) </td>\n<td>进度条</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[rich-text]((rich-text)) </td>\n<td>富文本</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[selection]((selection)) </td>\n<td>局部文本选区</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[text]((text)) </td>\n<td>文本</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[button]((button)) </td>\n<td>按钮</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[checkbox]((checkbox)) </td>\n<td>多选项目</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[checkbox-group]((checkbox-group)) </td>\n<td>多项选择器，内部由多个[checkbox]((checkbox))组成</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[editor]((editor)) </td>\n<td>富文本编辑器，可以对图片、文字进行编辑</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[editor-portal]((editor-portal)) </td>\n<td>渲染 [editor]((component/editor)) 组件的自定义区块</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[form]((form)) </td>\n<td>表单</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[input]((input)) </td>\n<td>输入框</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[keyboard-accessory]((keyboard-accessory)) </td>\n<td>设置 input / textarea 聚焦时键盘上方 cover-view / cover-image 工具栏视图</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[label]((label)) </td>\n<td>用来改进表单组件的可用性</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[picker]((picker)) </td>\n<td>从底部弹起的滚动选择器</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[picker-view]((picker-view)) </td>\n<td>嵌入页面的滚动选择器</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[picker-view-column]((picker-view-column)) </td>\n<td>滚动选择器子项</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[radio]((radio)) </td>\n<td>单选项目</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[radio-group]((radio-group)) </td>\n<td>单项选择器，内部由多个 [radio]((radio)) 组成</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[slider]((slider)) </td>\n<td>滑动选择器</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[switch]((switch)) </td>\n<td>开关选择器</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[textarea]((textarea)) </td>\n<td>多行输入框</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr show-children">\n<td><i class="toggle-children-table"></i></td>\n<td><b>手势系统</b></td>\n<td></td>\n</tr>\n<tr class="children-table">\n<td></td>\n<td colspan="3">\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[double-tap-gesture-handler]((double-tap-gesture-handler)) </td>\n<td>双击时触发手势</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[force-press-gesture-handler]((force-press-gesture-handler)) </td>\n<td>iPhone 设备重按时触发手势</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[horizontal-drag-gesture-handler]((horizontal-drag-gesture-handler)) </td>\n<td>横向滑动时触发手势</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[long-press-gesture-handler]((long-press-gesture-handler)) </td>\n<td>长按时触发手势</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[pan-gesture-handler]((pan-gesture-handler)) </td>\n<td>拖动（横向/纵向）时触发手势</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[scale-gesture-handler]((scale-gesture-handler)) </td>\n<td>多指缩放时触发手势</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[tap-gesture-handler]((tap-gesture-handler)) </td>\n<td>点击时触发手势</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[vertical-drag-gesture-handler]((vertical-drag-gesture-handler)) </td>\n<td>纵向滑动时触发手势</td>\n</tr>\n</tbody>\n</table>\n</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[draggable-sheet]((draggable-sheet)) </td>\n<td>半屏可拖拽组件</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[grid-builder]((grid-builder)) </td>\n<td>网格构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[grid-view]((grid-view)) </td>\n<td>Skyline 下网格布局容器 和 瀑布流布局容器</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[list-builder]((list-builder)) </td>\n<td>列表构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[list-view]((list-view)) </td>\n<td>列表布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点或 [sticky-section]((sticky-section)) 组件直接子节点</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[nested-scroll-body]((nested-scroll-body)) </td>\n<td>嵌套 scroll-view 场景中属于里层 scroll-view 的节点，仅支持作为 `<scroll-view type="nested">` 模式的直接子节点</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[nested-scroll-header]((nested-scroll-header)) </td>\n<td>嵌套 scroll-view 场景中属于外层 scroll-view 的节点，仅支持作为 `<scroll-view type="nested">` 模式的直接子节点</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[open-container]((open-container)) </td>\n<td>容器转场动画组件</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[open-data-item]((open-data-item)) </td>\n<td>展示微信开放数据，需配合 [open-data-list]((open-data-list)) 组件使用</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[open-data-list]((open-data-list)) </td>\n<td>展示微信开放数据</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[share-element]((share-element)) </td>\n<td>共享元素</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[snapshot]((snapshot)) </td>\n<td>截图组件</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[span]((span)) </td>\n<td>用于支持内联文本和 image / navigator 的混排</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[sticky-header]((sticky-header)) </td>\n<td>吸顶布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点或 [sticky-section]((sticky-section)) 组件直接子节点</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[sticky-section]((sticky-section)) </td>\n<td>吸顶布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[functional-page-navigator]((functional-page-navigator)) </td>\n<td>仅在插件中有效，用于跳转到插件功能页</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[navigator]((navigator)) </td>\n<td>页面链接</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[audio]((audio)) </td>\n<td>音频</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[camera]((camera)) </td>\n<td>系统相机</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[channel-live]((channel-live)) </td>\n<td>小程序内嵌视频号直播组件，展示视频号直播状态和封面，并无弹窗跳转至视频号</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[channel-video]((channel-video)) </td>\n<td>小程序内嵌视频号视频组件，支持在小程序中播放视频号视频，并无弹窗跳转至视频号</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[image]((image)) </td>\n<td>图片</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[live-player]((live-player)) </td>\n<td>实时音视频播放（v2.9.1 起支持[同层渲染]((native-component#原生组件同层渲染))）</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[live-pusher]((live-pusher)) </td>\n<td>实时音视频录制（v2.9.1 起支持[同层渲染]((native-component#原生组件同层渲染))）</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[video]((video)) </td>\n<td>视频（v2.4.0 起支持[同层渲染]((native-component#原生组件同层渲染))）</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[voip-room]((voip-room)) </td>\n<td>多人音视频对话</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[map]((map)) </td>\n<td>地图 v2.7.0 起支持[同层渲染]((native-component#原生组件同层渲染))</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[canvas]((canvas)) </td>\n<td>画布</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[web-view]((web-view)) </td>\n<td>承载网页的容器</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[ad]((ad)) </td>\n<td>Banner 广告</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[ad-custom]((ad-custom)) </td>\n<td>原生模板 广告</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[official-account]((official-account)) </td>\n<td>公众号关注组件</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[open-data]((open-data)) </td>\n<td>用于展示微信开放的数据</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[store-coupon]((store-coupon)) </td>\n<td>小程序内嵌微信小店优惠券，展示小店优惠券，并进行跳转交易</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[store-gift]((store-gift)) </td>\n<td>小程序送礼物接口支持小程序调用官方组件完成一次微信礼物的赠送，送礼后，用户可通过微信【我】-【订单与卡券】查看礼物订单详情</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[store-home]((store-home)) </td>\n<td>小程序内嵌微信小店首页，展示小店首页，并进行跳转交易</td>\n</tr>\n<tr class="have-children-tr">\n<td></td>\n<td>[store-product]((store-product)) </td>\n<td>小程序内嵌微信小店商品，展示小店商品，并进行跳转交易</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[native-component]((native-component)) </td>\n<td>小程序中的部分组件是由客户端创建的原生组件</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[aria-component]((aria-component)) </td>\n<td>满足视障人士对于小程序的访问需求</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n&nbsp;\n<table class="have-children-table">\n<thead>\n<tr>\n<th></th>\n<th>名称</th>\n<th>功能</th>\n</tr>\n</thead>\n<tbody>\n<tr class="have-children-tr">\n<td></td>\n<td>[navigation-bar]((navigation-bar)) </td>\n<td>页面导航条配置节点，用于指定导航栏的一些属性</td>\n</tr>\n</tbody>\n</table>\n&nbsp;\n',
            attributes: [
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
                {
                    name: '',
                    description: '',
                    attrType: '',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/index.html',
                },
            ],
        },
        {
            name: 'input',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n输入框。该组件是[原生组件]((native-component))，使用时请注意相关限制\n\n',
            attributes: [
                {
                    name: 'value',
                    description: '*(string)*\n输入框的初始内容',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'type',
                    description: '*(string)*\ninput 的类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                    values: [
                        {
                            name: 'text',
                            description: '文本输入键盘',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                        {
                            name: 'number',
                            description: '数字输入键盘',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                        {
                            name: 'idcard',
                            description: '身份证输入键盘',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                        {
                            name: 'digit',
                            description: '带小数点的数字键盘',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                        {
                            name: 'safe-password',
                            description: '密码安全输入键盘 [指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/safe-password.html)。仅 Webview 支持。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                        {
                            name: 'nickname',
                            description: '昵称输入键盘。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'password',
                    description: '*(boolean)*\n是否是密码类型',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'placeholder',
                    description: '*(string)*\n输入框为空时占位符',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'placeholder-style',
                    description: '*(string)*\n指定 placeholder 的样式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'disabled',
                    description: '*(boolean)*\n是否禁用',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'maxlength',
                    description: '*(number)*\n最大输入长度，设置为 -1 的时候不限制最大长度',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'cursor-spacing',
                    description: '*(number)*\n指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'auto-focus',
                    description: '*(boolean)*\n(即将废弃，请直接使用 focus )自动聚焦，拉起键盘',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'focus',
                    description: '*(boolean)*\n获取焦点',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'confirm-type',
                    description: '*(string)*\n设置键盘右下角按钮的文字，仅在type=\'text\'时生效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                    values: [
                        {
                            name: 'send',
                            description: '右下角按钮为“发送”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                        {
                            name: 'search',
                            description: '右下角按钮为“搜索”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                        {
                            name: 'next',
                            description: '右下角按钮为“下一个”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                        {
                            name: 'go',
                            description: '右下角按钮为“前往”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                        {
                            name: 'done',
                            description: '右下角按钮为“完成”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'always-embed',
                    description: '*(boolean)*\n强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'confirm-hold',
                    description: '*(boolean)*\n点击键盘右下角按钮时是否保持键盘不收起',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'cursor',
                    description: '*(number)*\n指定focus时的光标位置',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'cursor-color',
                    description: '*(string)*\n光标颜色。iOS 下的格式为十六进制颜色值 #000000，安卓下的只支持 default 和 green，Skyline 下无限制',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'selection-start',
                    description: '*(number)*\n光标起始位置，自动聚集时有效，需与selection-end搭配使用',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'selection-end',
                    description: '*(number)*\n光标结束位置，自动聚集时有效，需与selection-start搭配使用',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'adjust-position',
                    description: '*(boolean)*\n键盘弹起时，是否自动上推页面',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'hold-keyboard',
                    description: '*(boolean)*\nfocus时，点击页面的时候不收起键盘',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'safe-password-cert-path',
                    description: '*(string)*\n安全键盘加密公钥的路径，只支持包内路径。鸿蒙 OS 暂不支持',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'safe-password-length',
                    description: '*(number)*\n安全键盘输入密码长度。鸿蒙 OS 暂不支持',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'safe-password-time-stamp',
                    description: '*(number)*\n安全键盘加密时间戳。鸿蒙 OS 暂不支持',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'safe-password-nonce',
                    description: '*(string)*\n安全键盘加密盐值。鸿蒙 OS 暂不支持',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'safe-password-salt',
                    description: '*(string)*\n安全键盘计算hash盐值，若指定custom-hash 则无效。鸿蒙 OS 暂不支持',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'safe-password-custom-hash',
                    description: '*(string)*\n安全键盘计算hash的算法表达式，如 `md5(sha1(\'foo\' + sha256(sm3(password + \'bar\'))))`。鸿蒙 OS 暂不支持',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'bindinput',
                    description: '*(eventhandle)*\n键盘输入时或内容改变时触发。event.detail = { value: string, cursor?: number, keyCode?: number }，cursor 为光标位置，keyCode 为键值。2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'bindchange',
                    description: '*(eventhandle)*\n键盘非聚焦状态内容改变时触发。event.detail = { value: string }',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'bindfocus',
                    description: '*(eventhandle)*\n输入框聚焦时触发，event.detail = { value: string, height: number }，height 为键盘高度，在基础库 1.9.90 起支持',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'bindblur',
                    description: '*(eventhandle)*\n输入框失去焦点时触发，event.detail = { value: string, encryptedValue?: string, encryptError?: string }',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'bindconfirm',
                    description: '*(eventhandle)*\n点击完成按钮时触发，event.detail = { value: string, encryptedValue?: string, encryptError?: string }',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'bindkeyboardheightchange',
                    description: '*(eventhandle)*\n键盘高度发生变化的时候触发此事件，event.detail = {height: number, duration: number}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
                {
                    name: 'bindnicknamereview',
                    description: '*(eventhandle)*\n用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效，event.detail = { pass: boolean, timeout: boolean }',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/input.html',
                },
            ],
        },
        {
            name: 'keyboard-accessory',
            description: '\n(基础库 2.15.0+)\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n设置 input / textarea 聚焦时键盘上方 cover-view / cover-image 工具栏视图\n\n## Bug & Tip\n\n1. `tip`:  视图最大高度为 200px\n\n## 示例代码\n\n{% minicode(\'GKxGjkmG77o1\') %}\n\n```html\n<textarea hold-keyboard="{{true}}">\n<keyboard-accessory class="container" style="height: 50px;">\n<cover-view bindtap="tap" style="flex: 1; background: green;">1</cover-view>\n<cover-view bindtap="tap" style="flex: 1; background: red;">2</cover-view>\n</keyboard-accessory>\n</textarea>\n```\n\n\n',
            attributes: [],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/keyboard-accessory.html',
                },
            ],
        },
        {
            name: 'label',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n用来改进表单组件的可用性。\n\n使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。\nfor优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。\n目前可以绑定的控件有：[button]((button)), [checkbox]((checkbox)), [radio]((radio)), [switch]((switch)), [input]((input))。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'for',
                    description: '*(string)*\n绑定控件的 id',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/label.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/label.html',
                },
            ],
        },
        {
            name: 'list-builder',
            description: '\n(基础库 3.3.0+)\n\n> 相关文档: [Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n列表构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点。具体用法可参考 [scroll-view]((scroll-view#列表构造器使用方法))\n\n',
            attributes: [
                {
                    name: 'padding',
                    description: '*(Array)*\n长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                        },
                    ],
                },
                {
                    name: 'type',
                    description: '*(string)*\n类型，默认为定高模式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                        },
                    ],
                    values: [
                        {
                            name: 'static',
                            description: '定高模式，所有列表项等高，需要传入 child-height',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                                },
                            ],
                        },
                        {
                            name: 'dynamic',
                            description: '不定高模式',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'list',
                    description: '*(Array)*\n需要用于渲染的列表',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                        },
                    ],
                },
                {
                    name: 'child-count',
                    description: '*(Array)*\n完整列表的长度，如果不传则取 list 的长度作为其值',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                        },
                    ],
                },
                {
                    name: 'child-height',
                    description: '*(Array)*\n列表项的高度，当 type 为 static 时必须传入',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                        },
                    ],
                },
                {
                    name: 'binditembuild',
                    description: '*(eventhandle)*\n列表项创建时触发，event.detail = {index}，index 即被创建的列表项序号',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                        },
                    ],
                },
                {
                    name: 'binditemdispose',
                    description: '*(eventhandle)*\n列表项回收时触发，event.detail = {index}，index 即被回收的列表项序号',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                        },
                    ],
                },
                {
                    name: 'initial-child-count',
                    description: '*(number)*\n首次渲染时渲染的列表项数量，用于减少首次渲染时的白屏时长。不传则首屏也根据布局结果按需渲染',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html',
                },
            ],
        },
        {
            name: 'list-view',
            description: '\n(基础库 2.29.0+)\n\n> 相关文档: [Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n## 功能描述\n\n列表布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点或 [sticky-section]((sticky-section)) 组件直接子节点\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'padding',
                    description: '*(Array)*\n长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-view.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/list-view.html',
                },
            ],
        },
        {
            name: 'live-player',
            description: '\n(基础库 1.7.0+)\n\n> __小程序插件__：支持，需要小程序基础库版本不低于 {% version(2.3.0) %}\n>\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [wx.createLivePlayerContext]((wx.createLivePlayerContext))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n实时音视频播放（v2.9.1 起支持[同层渲染]((native-component#原生组件同层渲染))）。\n\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。\n\n| 一级类目/主体类型 | 二级类目                                                                                                                     | 小程序内容场景                                                                                                                          |\n| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |\n| 社交              | 直播                                                                                                                         | 涉及娱乐性质，如明星直播、生活趣事直播、宠物直播等。选择该类目后首次提交代码审核，需经当地互联网主管机关审核确认，预计审核时长 7 天左右 |\n| 教育              | 在线视频课程                                                                                                                 | 网课、在线培训、讲座等教育类直播                                                                                                        |\n| 医疗              | 互联网医院，公立医疗机构，三级私立医疗机构，其他私立医疗机构                                                                                                         | 问诊、大型健康讲座等直播                                                                                                              |\n| 金融              | 银行、信托、公募基金、私募基金、证券/期货、证券、期货投资咨询、保险、企业征信、新三板信息服务平台、股票信息服务平台、股票信息服务平台（港股/美股）、消费金融、融资担保、汽车金融/融资租赁 | 金融产品视频客服理赔、金融产品推广直播等                                                                                              |\n| 汽车              | 汽车预售                                                                                                                 | 汽车预售、推广直播                                                                                                                         |\n| 政府主体账号      | /                                                                                                                            | 政府相关工作推广直播、领导讲话直播等                                                                                                    |\n| IT科技            |  多方通信；音视频设备                                                                                                          | 为多方提供电话会议/视频会议等服务；智能家居场景下控制摄像头                                                                                                    |\n| 房地产服务         | 房地产营销 | 房地产营销直播服务、在线音视频带看等 |\n| 商业服务 | 公证 | 在线业务办理等 |\n\n',
            attributes: [
                {
                    name: 'src',
                    description: '*(string)*\n音视频地址。目前仅支持 `flv`, `rtmp` 格式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'mode',
                    description: '*(string)*\n模式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                    values: [
                        {
                            name: 'live',
                            description: '直播',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                        {
                            name: 'RTC',
                            description: '实时通话，该模式时延更低',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'autoplay',
                    description: '*(boolean)*\n自动播放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'muted',
                    description: '*(boolean)*\n是否静音',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'orientation',
                    description: '*(string)*\n画面方向',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                    values: [
                        {
                            name: 'vertical',
                            description: '竖直',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                        {
                            name: 'horizontal',
                            description: '水平',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'object-fit',
                    description: '*(string)*\n填充模式，可选值有 `contain`，`fillCrop`',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                    values: [
                        {
                            name: 'contain',
                            description: '图像长边填满屏幕，短边区域会被填充⿊⾊',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                        {
                            name: 'fillCrop',
                            description: '图像铺满屏幕，超出显示区域的部分将被截掉',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'background-mute',
                    description: '*(boolean)*\n进入后台时是否静音（已废弃，默认退后台静音）',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'min-cache',
                    description: '*(number)*\n最小缓冲区，单位s（RTC 模式推荐 0.2s）',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'max-cache',
                    description: '*(number)*\n最大缓冲区，单位s（RTC 模式推荐 0.8s）。缓冲区用来抵抗网络波动，缓冲数据越多，网络抗性越好，但时延越大。',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'sound-mode',
                    description: '*(string)*\n声音输出方式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                    values: [
                        {
                            name: 'speaker',
                            description: '扬声器',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                        {
                            name: 'ear',
                            description: '听筒',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'auto-pause-if-navigate',
                    description: '*(boolean)*\n当跳转到本小程序的其他页面时，是否自动暂停本页面的实时音视频播放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'auto-pause-if-open-native',
                    description: '*(boolean)*\n当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'picture-in-picture-mode',
                    description: '*(string/Array)*\n设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）',
                    attrType: 'string/Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                    values: [
                        {
                            name: '[]',
                            description: '取消小窗',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                        {
                            name: 'push',
                            description: '路由 push 时触发小窗',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                        {
                            name: 'pop',
                            description: '路由 pop 时触发小窗',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'picture-in-picture-init-position',
                    description: '*(string)*\n小窗模式下小窗的初始显示位置，格式为 (alignment, y)，其中 alignment 表示小窗吸附屏幕左侧还是右侧，可选值为 left、right，y 代表小窗最顶部所在的屏幕高度百分比',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'enable-auto-rotation',
                    description: '*(boolean)*\n是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'referrer-policy',
                    description: '*(string)*\n格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                    values: [
                        {
                            name: 'origin',
                            description: '发送完整的referrer',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                        {
                            name: 'no-referrer',
                            description: '不发送',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'enable-casting',
                    description: '*(boolean)*\n是否支持投屏。开启后，可以通过 [LivePlayerContext]((LivePlayerContext)) 上相关方法进行操作。',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'bindstatechange',
                    description: '*(eventhandle)*\n播放状态变化事件，detail = {code}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'bindfullscreenchange',
                    description: '*(eventhandle)*\n全屏变化事件，detail = {direction, fullScreen}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'bindnetstatus',
                    description: '*(eventhandle)*\n网络状态通知，detail = {info}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'bindaudiovolumenotify',
                    description: '*(eventhandler)*\n播放音量大小通知，detail = {}',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'bindenterpictureinpicture',
                    description: '*(eventhandler)*\n播放器进入小窗',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'bindleavepictureinpicture',
                    description: '*(eventhandler)*\n播放器退出小窗',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'bindcastinguserselect',
                    description: '*(eventhandler)*\n用户选择投屏设备时触发 detail = { state: "success"/"fail" }',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'bindcastingstatechange',
                    description: '*(eventhandler)*\n投屏成功/失败时触发 detail = { type, state: "success"/"fail" }',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
                {
                    name: 'bindcastinginterrupt',
                    description: '*(eventhandler)*\n投屏被中断时触发',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
                },
            ],
        },
        {
            name: 'live-pusher',
            description: '\n(基础库 1.7.0+)\n\n> __小程序插件__：支持，需要小程序基础库版本不低于 {% version(2.3.0) %}\n>\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [wx.createLivePusherContext]((wx.createLivePusherContext))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n实时音视频录制（v2.9.1 起支持[同层渲染]((native-component#原生组件同层渲染))）。需要[用户授权]((open-ability/authorize)) `scope.camera`、`scope.record`。\n\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。\n\n| 一级类目/主体类型 | 二级类目                                                                                                                     | 小程序内容场景                                                                                                                          |\n| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |\n| 社交              | 直播                                                                                                                         | 涉及娱乐性质，如明星直播、生活趣事直播、宠物直播等。选择该类目后首次提交代码审核，需经当地互联网主管机关审核确认，预计审核时长 7 天左右 |\n| 教育              | 在线视频课程                                                                                                                 | 网课、在线培训、讲座等教育类直播                                                                                                        |\n| 医疗              | 互联网医院，公立医疗机构，三级私立医疗机构，其他私立医疗机构                                                                                                         | 问诊、大型健康讲座等直播                                                                                                              |\n| 金融              | 银行、信托、公募基金、私募基金、证券/期货、证券、期货投资咨询、保险、企业征信、新三板信息服务平台、股票信息服务平台、股票信息服务平台（港股/美股）、消费金融、融资担保、汽车金融/融资租赁 | 金融产品视频客服理赔、金融产品推广直播等                                                                                              |\n| 汽车              | 汽车预售                                                                                                                 | 汽车预售、推广直播                                                                                                                         |\n| 政府主体账号      | /                                                                                                                            | 政府相关工作推广直播、领导讲话直播等                                                                                                    |\n| IT科技            |  多方通信；音视频设备                                                                                                          | 为多方提供电话会议/视频会议等服务；智能家居场景下控制摄像头                                                                                                    |\n| 房地产服务         | 房地产营销 | 房地产营销直播服务、在线音视频带看等 |\n| 商业服务 | 公证 | 在线业务办理等 |\n\n',
            attributes: [
                {
                    name: 'url',
                    description: '*(string)*\n推流地址。目前仅支持 `rtmp` 格式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'mode',
                    description: '*(string)*\n模式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                    values: [
                        {
                            name: 'QVGA',
                            description: 'Quarter VGA',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'HVGA',
                            description: 'Half-size VGA',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'SD',
                            description: '标清',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'HD',
                            description: '高清',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'FHD',
                            description: '超清',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'RTC',
                            description: '实时通话',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'autopush',
                    description: '*(boolean)*\n自动推流',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'enableVideoCustomRender',
                    description: '*(boolean)*\n自定义渲染，允许开发者自行处理所采集的视频帧，详见[LivePusherContext]((LivePusherContext))',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'muted',
                    description: '*(boolean)*\n是否静音。即将废弃，可用 `enable-mic` 替代',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'enable-camera',
                    description: '*(boolean)*\n开启摄像头',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'auto-focus',
                    description: '*(boolean)*\n自动聚集',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'orientation',
                    description: '*(string)*\n画面方向',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                    values: [
                        {
                            name: 'vertical',
                            description: '竖直',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'horizontal',
                            description: '水平',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'beauty',
                    description: '*(number)*\n美颜，取值范围 0-9 ，0 表示关闭。鸿蒙 OS 暂不支持',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'whiteness',
                    description: '*(number)*\n美白，取值范围 0-9 ，0 表示关闭',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'aspect',
                    description: '*(string)*\n宽高比，可选值有 `3:4`, `9:16`',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'min-bitrate',
                    description: '*(number)*\n最小码率',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'max-bitrate',
                    description: '*(number)*\n最大码率',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'audio-quality',
                    description: '*(string)*\n高音质(48KHz)或低音质(16KHz)，值为`high`, `low`',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'waiting-image',
                    description: '*(string)*\n进入后台时推流的等待画面',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'waiting-image-hash',
                    description: '*(string)*\n等待画面资源的MD5值',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'zoom',
                    description: '*(boolean)*\n调整焦距',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'device-position',
                    description: '*(string)*\n前置或后置，值为`front`, `back`',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'background-mute',
                    description: '*(boolean)*\n进入后台时是否静音（已废弃，默认退后台静音）',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'mirror',
                    description: '*(boolean)*\n设置推流画面是否镜像，产生的效果在 live-player 反应到',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'remote-mirror',
                    description: '*(boolean)*\n同 mirror 属性，后续 mirror 将废弃',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'local-mirror',
                    description: '*(string)*\n控制本地预览画面是否镜像',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                    values: [
                        {
                            name: 'auto',
                            description: '前置摄像头镜像，后置摄像头不镜像',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'enable',
                            description: '前后置摄像头均镜像',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'disable',
                            description: '前后置摄像头均不镜像',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'audio-reverb-type',
                    description: '*(number)*\n音频混响类型',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                    values: [
                        {
                            name: '0',
                            description: '关闭',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: '1',
                            description: 'KTV',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: '2',
                            description: '小房间',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: '3',
                            description: '大会堂',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: '4',
                            description: '低沉',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: '5',
                            description: '洪亮',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: '6',
                            description: '金属声',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: '7',
                            description: '磁性',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'enable-mic',
                    description: '*(boolean)*\n开启或关闭麦克风',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'enable-agc',
                    description: '*(boolean)*\n是否开启音频自动增益',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'enable-ans',
                    description: '*(boolean)*\n是否开启音频噪声抑制',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'audio-volume-type',
                    description: '*(string)*\n音量类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                    values: [
                        {
                            name: 'auto',
                            description: '自动',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'media',
                            description: '媒体音量',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'voicecall',
                            description: '通话音量',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'video-width',
                    description: '*(number)*\n上推的视频流的分辨率宽度',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'video-height',
                    description: '*(number)*\n上推的视频流的分辨率高度',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'beauty-style',
                    description: '*(string)*\n设置美颜类型。鸿蒙 OS 暂不支持',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                    values: [
                        {
                            name: 'smooth',
                            description: '光滑美颜',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'nature',
                            description: '自然美颜',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'filter',
                    description: '*(string)*\n设置色彩滤镜',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                    values: [
                        {
                            name: 'standard',
                            description: '标准',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'pink',
                            description: '粉嫩',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'nostalgia',
                            description: '怀旧',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'blues',
                            description: '蓝调',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'romantic',
                            description: '浪漫',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'cool',
                            description: '清凉',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'fresher',
                            description: '清新',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'solor',
                            description: '日系',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'aestheticism',
                            description: '唯美',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'whitening',
                            description: '美白',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'cerisered',
                            description: '樱红',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'picture-in-picture-mode',
                    description: '*(string/Array)*\n设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）',
                    attrType: 'string/Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                    values: [
                        {
                            name: '[]',
                            description: '取消小窗',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'push',
                            description: '路由 push 时触发小窗',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                        {
                            name: 'pop',
                            description: '路由 pop 时触发小窗',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'voice-changer-type',
                    description: '*(number)*\n0：关闭变声；1：熊孩子；2：萝莉；3：大叔；4：重金属；6：外国人；7：困兽；8：死肥仔；9：强电流；10：重机械；11：空灵',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'custom-effect',
                    description: '*(boolean)*\n是否启动自定义特效，设定后不能更改',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'skin-whiteness',
                    description: '*(number)*\n自定义特效美白效果，取值 0~1。需要开启 `custom-effect`',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'skin-smoothness',
                    description: '*(number)*\n自定义特效磨皮效果，取值 0~1。需要开启 `custom-effect`',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'face-thinness',
                    description: '*(number)*\n自定义特效瘦脸效果，取值 0~1。需要开启 `custom-effect`',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'eye-bigness',
                    description: '*(number)*\n自定义特效大眼效果，取值 0~1。需要开启 `custom-effect`',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'fps',
                    description: '*(number)*\n帧率，有效值为 1~30',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'bindstatechange',
                    description: '*(eventhandle)*\n状态变化事件，detail = {code}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'bindnetstatus',
                    description: '*(eventhandle)*\n网络状态通知，detail = {info}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n渲染错误事件，detail = {errMsg, errCode}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'bindbgmstart',
                    description: '*(eventhandle)*\n背景音开始播放时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'bindbgmprogress',
                    description: '*(eventhandle)*\n背景音进度变化时触发，detail = {progress, duration}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'bindbgmcomplete',
                    description: '*(eventhandle)*\n背景音播放完成时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'bindaudiovolumenotify',
                    description: '*(eventhandle)*\n返回麦克风采集的音量大小',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'bindenterpictureinpicture',
                    description: '*(eventhandler)*\n进入小窗',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
                {
                    name: 'bindleavepictureinpicture',
                    description: '*(eventhandler)*\n退出小窗',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
                },
            ],
        },
        {
            name: 'long-press-gesture-handler',
            description: '\n> 相关文档: [手势系统]((skyline/gesture))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n长按时触发手势\n\n',
            attributes: [
                {
                    name: 'tag',
                    description: '*(string)*\n声明手势协商时的组件标识',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:ongesture',
                    description: '*(eventhandler)*\n手势识别成功的回调',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                        },
                    ],
                    values: [
                        {
                            name: '',
                            description: '手势状态',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 X 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 Y 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于初始触摸点的 X 轴偏移量',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于初始触摸点的 Y 轴偏移量',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '手指离开屏幕时的横向速度（pixel per second)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '手指离开屏幕时的纵向速度（pixel per second)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'worklet:should-response-on-move',
                    description: '*(callback)*\n手指移动过程中手势是否响应',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:should-accept-gesture',
                    description: '*(callback)*\n手势是否应该被识别',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'simultaneous-handlers',
                    description: '*(Array.&lt;string&gt;)*\n声明可同时触发的手势节点',
                    attrType: 'Array.&lt;string&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'native-view',
                    description: '*(string)*\n代理的原生节点类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/long-press-gesture-handler.html',
                },
            ],
        },
        {
            name: 'map',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [wx.createMapContext]((wx.createMapContext))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n地图 v2.7.0 起支持[同层渲染]((native-component#原生组件同层渲染))。\n\nmap组件提供了地图展示、交互、叠加点线面及文字等功能，同时支持个性化地图样式，可结合地图服务 API 实现更丰富功能。\n\n为了更好的提供地图服务，请在调用 `map` 组件之前，先前往腾讯位置服务官网注册一个专属 `KEY`,在地图开发过程中，可以将这个专属 `KEY` 通过 `subkey` 参数传入；后续如遇到地图开发问题也可以在腾讯位置服务官网工单系统提交工单反馈解决；\n\n## 地图个性化样式组件\n\n地图个性化样式组件是腾讯位置服务为开发者提供的地图高级能力，开发者可以在法律允许的范围内定制地图风格，支持定制背景面、背景线、道路、POI等地图元素颜色、显示层级等内容；支持按照类型精细化管理POI的显示、隐藏；灵活地设计贴合业务场景的心仪地图。\n\n购买该能力后，您可以在 [MP平台](https://mp.weixin.qq.com/)「管理->付费管理->概览->地图个性化样式->去使用」中创建配置您的地图个性化样式，您可以选择我们提供的基础及高级模版，也可以通过在线编辑平台，对多种地图元素的样式进行自定义设置，以满足在不同场景下的个性化需求。\n\n<img src="https://res.wx.qq.com/op_res/pelP4oFZ9LkFT9w_JgBCBtA58OQV_-LHokhgp2TyK5MgIRRzPl4PuTy6UFbzQf5qNsiHrpqXivoLwnSPnMvsCw" alt="image-20221216093905347" style="zoom:50%;" />\n\n注意：\n1. 自2023年6月29日0点起，该能力需要先购买再使用。若未购买，届时将无法使用该能力。具体购买方式见 [付费管理]((charge/intro))。\n2. 自2023年6月29日0时起，个性化地图配置界面的入口统一为[微信公众平台-付费管理]((charge/intro))，请从此入口进入，腾讯位置服务官网入口不再使用。已经在小程序生效的个性化样式配置，将于2023年6月29日0时变更为默认样式，如有个性化样式配置需求，请于6月29日0时前，前往[微信公众平台-付费管理]((charge/intro))进行相关能力的开通和配置。\n\n## 地图服务API\n\n地图服务API 与map组件基于同一套数据体系，无缝贴合，叠加使用可实现更丰富的功能。\n提供：地点搜索、关键词输入提示、正/逆地址解析（经纬度与地址互转）驾车与步行路线规划等功能。\n\n<img src="https://res.wx.qq.com/op_res/mDhkD1MFudIDahOqDCxxeOkbP1RKOjoLlh0ebU2DGGnIPepi7nP8y9B7sIIUZ9U0U-9-ghujtCjqX4S8TJMdVQ" alt="image-20221216091852465" style="zoom:50%;" />\n\n详情见：[地图服务API在小程序中的使用方法](https://lbs.qq.com/service/webService/webServiceGuide/miniprogram?ref=miniprogram_component_map)\n\n若开发者使用通过LBS开放平台自行申请的服务账号，在小程序连接并调用位置服务产品用于商业行为（政府公共事务及公益组织事务除外），腾讯位置服务有权收取商业授权费，详细内容可以查看或咨询[腾讯微位置服务官网](https://lbs.qq.com/dev/console/authorization)\n\n## 深入控制地图\n\n通过微信小程序API中[wx.createMapContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html)方法，创建 [map](https://developers.weixin.qq.com/miniprogram/dev/component/map.html) 上下文 [MapContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.html) 对象，通过其实现更细粒度的地图交互和功能，包括：控制地图视野、获取地图位置与视角等信息、marker移动（轨迹回放）、动态创建个性化图层、拉起地图APP选择导航等\n\n## 小程序插件\n\n现成插件简单接入，提供：路线规划、地图选点、城市选择器、地铁图 常用功能。\n\n详情见：[小程序地图插件使用指南](https://lbs.qq.com/miniProgram/plugin/pluginGuide/pluginOverview?ref=miniprogram_component_map)\n\n## 开源示例中心\n\n包含Map组件、服务API、插件等功能使用方法，全面了解小程序下的所有地图能力。示例内容源码开放，降低各位开发者接入成本。\n\n<img src="../resource/map.jpg"  width="200" height="200"></img>\n\n## 地图基础属性\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'longitude',
                    description: '*(number)*\n中心经度',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'latitude',
                    description: '*(number)*\n中心纬度',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'scale',
                    description: '*(number)*\n缩放级别，取值范围为3-20',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'min-scale',
                    description: '*(number)*\n最小缩放级别',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'max-scale',
                    description: '*(number)*\n最大缩放级别',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'markers',
                    description: '*(Array.&lt;marker&gt;)*\n标记点',
                    attrType: 'Array.&lt;marker&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'covers',
                    description: '*(Array.&lt;cover&gt;)*\n**即将移除，请使用 markers**',
                    attrType: 'Array.&lt;cover&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'polyline',
                    description: '*(Array.&lt;polyline&gt;)*\n路线',
                    attrType: 'Array.&lt;polyline&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'circles',
                    description: '*(Array.&lt;circle&gt;)*\n圆',
                    attrType: 'Array.&lt;circle&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'controls',
                    description: '*(Array.&lt;control&gt;)*\n控件（即将废弃，建议使用 [cover-view]((cover-view)) 代替）',
                    attrType: 'Array.&lt;control&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'include-points',
                    description: '*(Array.&lt;point&gt;)*\n缩放视野以包含所有给定的坐标点',
                    attrType: 'Array.&lt;point&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'show-location',
                    description: '*(boolean)*\n显示带有方向的当前定位点',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'polygons',
                    description: '*(Array.&lt;polygon&gt;)*\n多边形',
                    attrType: 'Array.&lt;polygon&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'subkey',
                    description: '*(string)*\n地图能力【个性化地图】使用的key，不支持动态修改',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'layer-style',
                    description: '*(number)*\n地图能力【个性化地图】配置的 style',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'rotate',
                    description: '*(number)*\n旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'skew',
                    description: '*(number)*\n倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'enable-3D',
                    description: '*(boolean)*\n展示3D楼块',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'show-compass',
                    description: '*(boolean)*\n显示指南针',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'show-scale',
                    description: '*(boolean)*\n显示比例尺，工具暂不支持',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'enable-overlooking',
                    description: '*(boolean)*\n开启俯视',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'enable-auto-max-overlooking',
                    description: '*(boolean)*\n开启最大俯视角，俯视角度从 45 度拓展到 75 度',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'enable-zoom',
                    description: '*(boolean)*\n是否支持缩放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'enable-scroll',
                    description: '*(boolean)*\n是否支持拖动',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'enable-rotate',
                    description: '*(boolean)*\n是否支持旋转',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'enable-satellite',
                    description: '*(boolean)*\n是否开启卫星图',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'enable-traffic',
                    description: '*(boolean)*\n是否开启实时路况',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'enable-poi',
                    description: '*(boolean)*\n是否展示 POI 点',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'enable-building',
                    description: '*(boolean)*\n是否展示建筑物',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'setting',
                    description: '*(object)*\n配置项',
                    attrType: 'object',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindtap',
                    description: '*(eventhandle)*\n点击地图时触发，{%version(\'2.9.0\')%}起返回经纬度信息',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindmarkertap',
                    description: '*(eventhandle)*\n点击标记点时触发，`e.detail = {markerId}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindlabeltap',
                    description: '*(eventhandle)*\n点击label时触发，`e.detail = {markerId}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindcontroltap',
                    description: '*(eventhandle)*\n点击控件时触发，`e.detail = {controlId}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindcallouttap',
                    description: '*(eventhandle)*\n点击标记点对应的气泡时触发`e.detail = {markerId}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindupdated',
                    description: '*(eventhandle)*\n在地图渲染更新完成时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindregionchange',
                    description: '*(eventhandle)*\n视野发生变化时触发，',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindpoitap',
                    description: '*(eventhandle)*\n点击地图poi点时触发，`e.detail = {name, longitude, latitude}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindpolylinetap',
                    description: '*(eventhandle)*\n点击地图路线时触发，`e.detail = {longitude, latitude}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindabilitysuccess',
                    description: '*(eventhandle)*\n地图能力生效时触发，`e.detail = {ability, errCode, errMsg}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindabilityfail',
                    description: '*(eventhandle)*\n地图能力失败时触发，`e.detail = {ability, errCode, errMsg}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindauthsuccess',
                    description: '*(eventhandle)*\n地图鉴权结果成功时触发，`e.detail = {errCode, errMsg}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'bindinterpolatepoint',
                    description: '*(eventhandle)*\nMapContext.moveAlong 插值动画时触发。`e.detail = {markerId, longitude, latitude, animationStatus: "interpolating"',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n组件错误时触发，例如创建或鉴权失败，`e.detail = {longitude, latitude}`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
                },
            ],
        },
        {
            name: 'match-media',
            description: '\n(基础库 2.11.1+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\nmedia query 匹配检测节点。可以指定一组 media query 规则，满足时，这个节点才会被展示。\n\n通过这个节点可以实现“页面宽高在某个范围时才展示某个区域”这样的效果。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'min-width',
                    description: '*(number)*\n页面最小宽度（ px 为单位）',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html',
                        },
                    ],
                },
                {
                    name: 'max-width',
                    description: '*(number)*\n页面最大宽度（ px 为单位）',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html',
                        },
                    ],
                },
                {
                    name: 'width',
                    description: '*(number)*\n页面宽度（ px 为单位）',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html',
                        },
                    ],
                },
                {
                    name: 'min-height',
                    description: '*(number)*\n页面最小高度（ px 为单位）',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html',
                        },
                    ],
                },
                {
                    name: 'max-height',
                    description: '*(number)*\n页面最大高度（ px 为单位）',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html',
                        },
                    ],
                },
                {
                    name: 'height',
                    description: '*(number)*\n页面高度（ px 为单位）',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html',
                        },
                    ],
                },
                {
                    name: 'orientation',
                    description: '*(string)*\n屏幕方向（ `landscape` 或 `portrait` ）',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html',
                },
            ],
        },
        {
            name: 'movable-area',
            description: '\n(基础库 1.2.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n[movable-view]((movable-view))的可移动区域。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'scale-area',
                    description: '*(Boolean)*\n当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area',
                    attrType: 'Boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html',
                },
            ],
        },
        {
            name: 'movable-view',
            description: '\n(基础库 1.2.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n可移动的视图容器，在页面中可以拖拽滑动。[movable-view]((movable-view))必须在 [movable-area]((movable-area)) 组件中，并且必须是直接子节点，否则不能移动。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'direction',
                    description: '*(string)*\nmovable-view的移动方向，属性值有all、vertical、horizontal、none',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'inertia',
                    description: '*(boolean)*\nmovable-view是否带有惯性',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'out-of-bounds',
                    description: '*(boolean)*\n超过可移动区域后，movable-view是否还可以移动',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'x',
                    description: '*(number/string)*\n定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画；单位支持px（默认）、rpx；',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'y',
                    description: '*(number/string)*\n定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画；单位支持px（默认）、rpx；',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'damping',
                    description: '*(number)*\n阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'friction',
                    description: '*(number)*\n摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'disabled',
                    description: '*(boolean)*\n是否禁用',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'scale',
                    description: '*(boolean)*\n是否支持双指缩放，默认缩放手势生效区域是在movable-view内',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'scale-min',
                    description: '*(number)*\n定义缩放倍数最小值',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'scale-max',
                    description: '*(number)*\n定义缩放倍数最大值',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'scale-value',
                    description: '*(number)*\n定义缩放倍数，取值范围为 0.1 - 10',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'animation',
                    description: '*(boolean)*\n是否使用动画',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'bindchange',
                    description: '*(eventhandle)*\n拖动过程中触发的事件，event.detail = {x, y, source}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'bindscale',
                    description: '*(eventhandle)*\n缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在{%version(\'2.1.0\')%}之后支持',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'htouchmove',
                    description: '*(eventhandle)*\n初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
                {
                    name: 'vtouchmove',
                    description: '*(eventhandle)*\n初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
                },
            ],
        },
        {
            name: 'native-component',
            description: '\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n小程序中的部分组件是由客户端创建的原生组件。\n\n## 原生组件\n\n小程序中的部分组件是由客户端创建的原生组件，这些组件有：\n\n- [`camera`]((camera))\n- [`canvas`]((canvas))\n- [`input`]((input))（仅在focus时表现为原生组件）\n- [`live-player`]((live-player))\n- [`live-pusher`]((live-pusher))\n- [`map`]((map))\n- [`textarea`]((textarea))\n- [`video`]((video))\n\n## 原生组件同层渲染\n\n同层渲染是为了解决原生组件的层级问题，在支持同层渲染后，原生组件与其它组件可以随意叠加，有关层级的限制将不再存在。但需要注意的是，组件内部仍由原生渲染，样式一般还是对原生组件内部无效。\n\n注：\n- **当前所有原生组件（除 input 组件 focus 状态）均已支持同层渲染。**\n- **鸿蒙 OS 下只支持同层渲染。**\n\n## 原生组件的使用限制\n\n__除事件相关，同层渲染下已无以下限制__\n\n由于原生组件脱离在 WebView 渲染流程外，因此在使用时有以下限制：\n\n- 原生组件的层级是**最高**的，所以页面中的其他组件无论设置 `z-index` 为多少，都无法盖在原生组件上。\n- 后插入的原生组件可以覆盖之前的原生组件。\n- 原生组件还无法在 [picker-view]((picker-view)) 中使用。\n- 基础库 2.4.4 以下版本，原生组件不支持在 [scroll-view]((scroll-view))、[swiper]((swiper))、[movable-view]((movable-view)) 中使用。\n- 部分 CSS 样式无法应用于原生组件，例如：\n- 无法对原生组件设置 CSS 动画\n- 无法定义原生组件为 `position: fixed`\n- 不能在父级节点使用 `overflow: hidden` 来裁剪原生组件的显示区域\n- 原生组件的事件监听不能使用 `bind:eventname` 的写法，只支持 `bindeventname`。原生组件也不支持 catch 和 capture 的事件绑定方式。\n- 原生组件会遮挡 vConsole 弹出的调试面板。\n- 原生组件可通过 bindrendererror 事件监听同层渲染失败的情况并进行降级处理。 同层渲染失败通常由以下原因造成：\n- Android 端运行环境缺少同层渲染所需的内核\n- iOS 端由于实现方式的限制，在页面节点树不稳定的情况下存在一定的失败率\n\n__在工具上，原生组件是用web组件模拟的，因此很多情况并不能很好的还原真机的表现，建议开发者在使用到原生组件时尽量在真机上进行调试。__\n\n## cover-view 与 cover-image\n\n为了解决原生组件层级最高的限制。小程序专门提供了 [`cover-view`]((cover-view)) 和 [`cover-image`]((cover-image)) 组件，可以覆盖在**部分**原生组件上面。这两个组件也是原生组件，但是使用限制与其他原生组件有所不同。\n\n## 原生组件相对层级\n\n__同层渲染下已无以下问题__\n\n为了可以调整原生组件之间的相对层级位置，小程序在 v2.7.0 及以上版本支持在样式中声明 z-index 来指定原生组件的层级。该 z-index 仅调整原生组件之间的层级顺序，其层级仍**高于**其他非原生组件。\n\n\n',
            attributes: [],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html',
                },
            ],
        },
        {
            name: 'navigation-bar',
            description: '\n(基础库 2.9.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n页面导航条配置节点，用于指定导航栏的一些属性。只能是 [page-meta]((page-meta)) 组件内的第一个节点，需要配合它一同使用。\n\n通过这个节点可以获得类似于调用 [`wx.setNavigationBarTitle`]((wx.setNavigationBarTitle)) [`wx.setNavigationBarColor`]((wx.setNavigationBarColor)) 等接口调用的效果。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'title',
                    description: '*(string)*\n导航条标题',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html',
                        },
                    ],
                },
                {
                    name: 'loading',
                    description: '*(boolean)*\n是否在导航条显示 loading 加载提示',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html',
                        },
                    ],
                },
                {
                    name: 'front-color',
                    description: '*(string)*\n导航条前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 `#ffffff` 和 `#000000`',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html',
                        },
                    ],
                },
                {
                    name: 'background-color',
                    description: '*(string)*\n导航条背景颜色值，有效值为十六进制颜色',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html',
                        },
                    ],
                },
                {
                    name: 'color-animation-duration',
                    description: '*(number)*\n改变导航栏颜色时的动画时长，默认为 `0` （即没有动画效果）',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html',
                        },
                    ],
                },
                {
                    name: 'color-animation-timing-func',
                    description: '*(string)*\n改变导航栏颜色时的动画方式，支持 `linear` 、 `easeIn` 、 `easeOut` 和 `easeInOut`',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html',
                },
            ],
        },
        {
            name: 'navigator',
            description: '\n(基础库 1.0.0+)\n\n> __小程序插件__：支持，需要小程序基础库版本不低于 {% version(2.1.0) %}\n>\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n页面链接。\n\n1. navigator 在 Skyline 下视为文本节点，只能嵌套文本节点（如 text），不能嵌套 view、button 等普通节点，如 &lt;button&gt; &lt;navigator&gt;foo&lt;/navigator&gt; &lt;/button&gt;<br>\n2. 新增 span 组件用于内联文本和图片，如 &lt;span&gt; &lt;image&gt; &lt;/image&gt; &lt;navigator&gt;bar&lt;/navigator&gt; &lt;/span&gt;\n\n',
            attributes: [
                {
                    name: 'target',
                    description: '*(string)*\n在哪个目标上发生跳转，默认当前小程序',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                    values: [
                        {
                            name: 'self',
                            description: '当前小程序',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'miniProgram',
                            description: '其它小程序',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'url',
                    description: '*(string)*\n当前小程序内的跳转链接',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'open-type',
                    description: '*(string)*\n跳转方式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                    values: [
                        {
                            name: 'navigate',
                            description: '对应 [wx.navigateTo]((wx.navigateTo)) 或 [wx.navigateToMiniProgram]((wx.navigateToMiniProgram)) 的功能',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'redirect',
                            description: '对应 [wx.redirectTo]((wx.redirectTo)) 的功能',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'switchTab',
                            description: '对应 [wx.switchTab]((wx.switchTab)) 的功能',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'reLaunch',
                            description: '对应 [wx.reLaunch]((wx.reLaunch)) 的功能',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'navigateBack',
                            description: '对应 [wx.navigateBack]((wx.navigateBack)) 或 [wx.navigateBackMiniProgram]((wx.navigateBackMiniProgram)) （基础库 2.24.4 版本支持）的功能',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'exit',
                            description: '退出小程序，`target="miniProgram"`时生效',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'delta',
                    description: '*(number)*\n当 open-type 为 \'navigateBack\' 时有效，表示回退的层数',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'app-id',
                    description: '*(string)*\n当`target="miniProgram"`且`open-type="navigate"`时有效，要打开的小程序 appId',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'path',
                    description: '*(string)*\n当`target="miniProgram"`且`open-type="navigate"`时有效，打开的页面路径，如果为空则打开首页',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'extra-data',
                    description: '*(object)*\n当`target="miniProgram"`且`open-type="navigate/navigateBack"`时有效，需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch()`，`App.onShow()` 中获取到这份数据。[详情](../framework/app-service/app.md)',
                    attrType: 'object',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'version',
                    description: '*(string)*\n当`target="miniProgram"`且`open-type="navigate"`时有效，要打开的小程序版本',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                    values: [
                        {
                            name: 'develop',
                            description: '开发版',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'trial',
                            description: '体验版',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                        {
                            name: 'release',
                            description: '正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'short-link',
                    description: '*(string)*\n当`target="miniProgram"`时有效，当传递该参数后，可以不传 app-id 和 path。链接可以通过【小程序菜单】->【复制链接】获取。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'hover-class',
                    description: '*(string)*\n指定点击时的样式类，当`hover-class="none"`时，没有点击态效果',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'hover-stop-propagation',
                    description: '*(boolean)*\n指定是否阻止本节点的祖先节点出现点击态',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'hover-start-time',
                    description: '*(number)*\n按住后多久出现点击态，单位毫秒',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'hover-stay-time',
                    description: '*(number)*\n手指松开后点击态保留时间，单位毫秒',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'bindsuccess',
                    description: '*(string)*\n当`target="miniProgram"`且`open-type="navigate/navigateBack"`时有效时有效，跳转小程序成功',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'bindfail',
                    description: '*(string)*\n当`target="miniProgram"`且`open-type="navigate/navigateBack"`时有效时有效，跳转小程序失败',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
                {
                    name: 'bindcomplete',
                    description: '*(string)*\n当`target="miniProgram"`且`open-type="navigate/navigateBack"`时有效时有效，跳转小程序完成',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
                },
            ],
        },
        {
            name: 'nested-scroll-body',
            description: '\n(基础库 3.2.0+)\n\n> 相关文档: [Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n## 功能描述\n\n嵌套 scroll-view 场景中属于里层 scroll-view 的节点，仅支持作为 `<scroll-view type="nested">` 模式的直接子节点。不支持复数子节点，渲染时会取其第一个子节点来渲染。具体用法可参考 [scroll-view]((scroll-view#嵌套模式使用方法))\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'offset-top',
                    description: '*(number)*\n滚动目标距离顶部的距离(px)。在外层 scroll-view 滚动时此组件会在主轴方向会逐渐撑开，直到此组件顶部与视窗顶部距离为该属性值时才开始里层 scroll-view 的滚动。默认为 0，即表示此组件撑开到顶部与视窗顶部齐平时才开始里层 scroll-view 的滚动。',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-body.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-body.html',
                },
            ],
        },
        {
            name: 'nested-scroll-header',
            description: '\n(基础库 3.2.0+)\n\n> 相关文档: [Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n## 功能描述\n\n嵌套 scroll-view 场景中属于外层 scroll-view 的节点，仅支持作为 `<scroll-view type="nested">` 模式的直接子节点。不支持复数子节点，渲染时会取其第一个子节点来渲染。具体用法可参考 [scroll-view]((scroll-view#嵌套模式使用方法))\n\n## 使用方法\n\n```html\n<scroll-view\ntype="nested"\nscroll-y\n>\n<nested-scroll-header>\n<view>会渲染</view>\n<view>不会渲染，因为 nested-scroll-header 只会渲染第一个子节点</view>\n</nested-scroll-header>\n<nested-scroll-header>\n<view>如果存在多个头部节点，那么就使用多个 nested-scroll-header 来将其包裹</view>\n</nested-scroll-header>\n<nested-scroll-body>\n<view></view>\n</nested-scroll-body>\n</scroll-view>\n```\n\n\n',
            attributes: [],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-header.html',
                },
            ],
        },
        {
            name: 'official-account',
            description: '\n(基础库 2.3.0+)\n\n> __微信 Mac 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n公众号关注组件。当用户扫[小程序码](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html?t=19032815)打开小程序时，开发者可在小程序内配置公众号关注组件，方便用户快捷关注公众号，可嵌套在原生组件内。\n\n基础库 `2.18.1` 起，公众号关注组件显示场景值变更如下：\n\n小程序场景值命中以下值时，可展示关注公众号组件：\n1. 1011 扫描二维码\n2. 1017 前往小程序体验版的入口页\n3. 1025 扫描一维码\n4. 1047 扫描小程序码\n5. 1124 扫“一物一码”打开小程序\n\n小程序热启动场景值命中以下值时，冷启动场景值在【1011、1017、1025、1047、1124】中，可展示关注公众号组件：\n1. 1001 发现栏小程序主入口，「最近使用」列表\n2. 1038 从另一个小程序返回\n3. 1041 从插件小程序返回小程序\n4. 1089 微信聊天主界面下拉，「最近使用」栏\n5. 1090 长按小程序右上角菜单唤出最近使用历史\n6. 1104 微信聊天主界面下拉，「我的小程序」栏\n7. 1131 浮窗\n8. 1187 新版浮窗，微信8.0起\n\n## Tips\n\n1. 使用组件前，需前往小程序后台，在“设置”->“关注公众号”中设置要展示的公众号。**注：设置的公众号需与小程序为同主体或关联主体。**\n\n2. 在一个小程序的生命周期内，只有从以下场景进入小程序，才具有展示引导关注公众号组件的能力:\n- 当小程序从扫小程序码场景（场景值1047，场景值1124）打开时\n- 当小程序从聊天顶部场景（场景值1089）中的「最近使用」内打开时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态\n- 当从其他小程序返回小程序（场景值1038）时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态\n\n3. 为便于开发者调试，基础库 `2.7.3` 版本起开发版小程序增加以下场景展示公众号组件：\n- 开发版小程序从扫二维码（场景值 1011）打开\n— 体验版小程序打开\n\n4. 组件限定最小宽度为300px，高度为定值84px。\n\n5. 每个页面只能配置一个该组件。\n\n| 属性名    | 类型        | 说明               |\n| --------- | ----------- | ------------------ |\n| bindload  | EventHandle | 组件加载成功时触发 |\n| binderror | EventHandle | 组件加载失败时触发 |\n\n### detail 对象\n| 属性名 | 类型   | 说明     |\n| ------ | ------ | -------- |\n| status | Number | 状态码   |\n| errMsg | String | 错误信息 |\n\n##### status 有效值\n| 值  | 说明                           |\n| --- | ------------------------------ |\n| -2  | 网络错误                       |\n| -1  | 数据解析错误                   |\n| 0   | 加载成功                       |\n| 1   | 小程序关注公众号功能被封禁     |\n| 2   | 关联公众号被封禁               |\n| 3   | 关联关系解除或未选中关联公众号 |\n| 4   | 未开启关注公众号功能           |\n| 5   | 场景值错误                  |\n| 6   | 重复创建            |\n\n## 示例代码\n\n```html\n<official-account></official-account>\n```\n\n\n',
            attributes: [],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html',
                },
            ],
        },
        {
            name: 'open-container',
            description: '\n(基础库 3.4.0+)\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n容器转场动画组件。\n\n点击 `<open-container>` 组件，当使用 `wx.navigateTo` 跳转下一页面时，对其子节点和下一个页面进行过渡。\n\n下个页面从 `<open-container>` 所在位置大小渐显放大，同时 `<open-container>` 内容渐隐，过渡效果包含背景色、圆角和阴影。\n\n源页面 `<open-container>` 为 `closed` 状态，转场动画后为 `open` 状态。\n\n',
            attributes: [
                {
                    name: 'closed-color',
                    description: '*(string)*\n初始容器背景色',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                        },
                    ],
                },
                {
                    name: 'closed-elevation',
                    description: '*(number)*\n初始容器影深大小',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                        },
                    ],
                },
                {
                    name: 'closed-border-radius',
                    description: '*(number)*\n初始容器圆角大小',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                        },
                    ],
                },
                {
                    name: 'middle-color',
                    description: '*(string)*\n`fadeThrough` 模式下的过渡背景色',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                        },
                    ],
                },
                {
                    name: 'open-color',
                    description: '*(string)*\n打开状态下容器背景色',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                        },
                    ],
                },
                {
                    name: 'open-elevation',
                    description: '*(number)*\n打开状态下容器影深大小',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                        },
                    ],
                },
                {
                    name: 'open-border-radius',
                    description: '*(number)*\n打开状态下容器圆角大小',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                        },
                    ],
                },
                {
                    name: 'transition-duration',
                    description: '*(number)*\n动画时长',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                        },
                    ],
                },
                {
                    name: 'transition-type',
                    description: '*(string)*\n动画类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                        },
                    ],
                    values: [
                        {
                            name: 'fade',
                            description: '将传入元素淡入传出元素之上',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                                },
                            ],
                        },
                        {
                            name: 'fadeThrough',
                            description: '首先淡出传出元素，并在传出元素完全淡出后开始淡入传入元素',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                                },
                            ],
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html',
                },
            ],
        },
        {
            name: 'open-data-item',
            description: '\n(基础库 3.7.8+)\n\n> 相关文档: [聊天工具模式]((open-ability/chatTool))、[Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n展示微信开放数据，需配合 [open-data-list]((open-data-list)) 组件使用。\n\n',
            attributes: [
                {
                    name: 'type',
                    description: '*(string)*\n开放数据类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data-item.html',
                        },
                    ],
                    values: [
                        {
                            name: 'userNickName',
                            description: '用户昵称',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data-item.html',
                                },
                            ],
                        },
                        {
                            name: 'userAvatar',
                            description: '用户头像',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data-item.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'index',
                    description: '*(number)*\n序号',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data-item.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data-item.html',
                },
            ],
        },
        {
            name: 'open-data-list',
            description: '\n(基础库 3.7.8+)\n\n> 相关文档: [聊天工具模式]((open-ability/chatTool))、[Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n展示微信开放数据。\n\n',
            attributes: [
                {
                    name: 'type',
                    description: '*(string)*\n开放数据类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data-list.html',
                        },
                    ],
                    values: [
                        {
                            name: 'groupMembers',
                            description: '群成员信息',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data-list.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'members',
                    description: '*(Array.&lt;string&gt;)*\n群成员group_openid列表',
                    attrType: 'Array.&lt;string&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data-list.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data-list.html',
                },
            ],
        },
        {
            name: 'open-data',
            description: '\n<p class="wedoc-warning-tips">用户信息相关功能已进行调整，详见 [小程序用户信息相关接口调整公告](https://developers.weixin.qq.com/community/develop/doc/000e881c7046a8fa1f4d464105b001)</p>\n\n(基础库 1.4.0+)\n\n> __小程序插件__：不支持\n>\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n用于展示微信开放的数据。\n\n',
            attributes: [
                {
                    name: 'type',
                    description: '*(string)*\n开放数据类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                        },
                    ],
                    values: [
                        {
                            name: 'groupName',
                            description: '拉取群名称',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                        {
                            name: 'userNickName',
                            description: '用户昵称。不再返回，展示“微信用户”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                        {
                            name: 'userAvatarUrl',
                            description: '用户头像。不再返回，展示 [灰色头像](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                        {
                            name: 'userGender',
                            description: '用户性别。不再返回，将展示为空（“”）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                        {
                            name: 'userCity',
                            description: '用户所在城市。不再返回，将展示为空（“”）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                        {
                            name: 'userProvince',
                            description: '用户所在省份。不再返回，将展示为空（“”）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                        {
                            name: 'userCountry',
                            description: '用户所在国家。不再返回，将展示为空（“”）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                        {
                            name: 'userLanguage',
                            description: '用户的语言。不再返回，将展示为空（“”）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'open-gid',
                    description: '*(string)*\n当 type="groupName" 时生效, 群id',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                        },
                    ],
                },
                {
                    name: 'lang',
                    description: '*(string)*\n当 type="user*" 时生效，以哪种语言展示 userInfo',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                        },
                    ],
                    values: [
                        {
                            name: 'en',
                            description: '英文',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                        {
                            name: 'zh_CN',
                            description: '简体中文',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                        {
                            name: 'zh_TW',
                            description: '繁体中文',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'default-text',
                    description: '*(string)*\n数据为空时的默认文案',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                        },
                    ],
                },
                {
                    name: 'default-avatar',
                    description: '*(string)*\n用户头像为空时的默认图片，支持相对路径和网络图片路径',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n群名称或用户信息为空时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
                },
            ],
        },
        {
            name: 'page-container',
            description: '\n(基础库 2.16.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n页面容器。\n\n小程序如果在页面内进行复杂的界面设计（如在页面内弹出半屏的弹窗、在页面内加载一个全屏的子页面等），用户进行返回操作会直接离开当前页面，不符合用户预期，预期应为关闭当前弹出的组件。\n为此提供“假页”容器组件，效果类似于 `popup` 弹出层，页面内存在该容器时，当用户进行返回操作，关闭该容器不关闭页面。返回操作包括三种情形，右滑手势、安卓物理返回键和调用 `navigateBack` 接口。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'show',
                    description: '*(boolean)*\n是否显示容器组件',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'duration',
                    description: '*(number)*\n动画时长，单位毫秒',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'z-index',
                    description: '*(number)*\nz-index 层级',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'overlay',
                    description: '*(boolean)*\n是否显示遮罩层',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'position',
                    description: '*(string)*\n弹出位置，可选值为 `top` `bottom` `right` `center`',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'round',
                    description: '*(boolean)*\n是否显示圆角',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'close-on-slide-down',
                    description: '*(boolean)*\n是否在下滑一段距离后关闭',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'overlay-style',
                    description: '*(string)*\n自定义遮罩层样式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'custom-style',
                    description: '*(string)*\n自定义弹出层样式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'bind:beforeenter',
                    description: '*(eventhandle)*\n进入前触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'bind:enter',
                    description: '*(eventhandle)*\n进入中触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'bind:afterenter',
                    description: '*(eventhandle)*\n进入后触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'bind:beforeleave',
                    description: '*(eventhandle)*\n离开前触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'bind:leave',
                    description: '*(eventhandle)*\n离开中触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'bind:afterleave',
                    description: '*(eventhandle)*\n离开后触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
                {
                    name: 'bind:clickoverlay',
                    description: '*(eventhandle)*\n点击遮罩层时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html',
                },
            ],
        },
        {
            name: 'page-meta',
            description: '\n(基础库 2.9.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n页面属性配置节点，用于指定页面的一些属性、监听页面事件。只能是页面内的第一个节点。可以配合 [navigation-bar]((navigation-bar)) 组件一同使用。\n\n通过这个节点可以获得类似于调用 [`wx.setBackgroundTextStyle`]((wx.setBackgroundTextStyle)) [`wx.setBackgroundColor`]((wx.setBackgroundColor)) 等接口调用的效果。\n\n',
            attributes: [
                {
                    name: 'background-text-style',
                    description: '*(string)*\n下拉背景字体、loading 图的样式，仅支持 `dark` 和 `light`',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                        },
                    ],
                },
                {
                    name: 'background-color',
                    description: '*(string)*\n窗口的背景色，必须为十六进制颜色值',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                        },
                    ],
                },
                {
                    name: 'background-color-top',
                    description: '*(string)*\n顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                        },
                    ],
                },
                {
                    name: 'background-color-bottom',
                    description: '*(string)*\n底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                        },
                    ],
                },
                {
                    name: 'root-background-color',
                    description: '*(string)*\n页面内容的背景色，用于页面中的空白部分和页面大小变化 resize 动画期间的临时空闲区域',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                        },
                    ],
                },
                {
                    name: 'page-style',
                    description: '*(string)*\n页面根节点样式，页面根节点是所有页面节点的祖先节点，相当于 HTML 中的 body 节点',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                        },
                    ],
                },
                {
                    name: 'page-font-size',
                    description: '*(string)*\n页面 page 的字体大小，可以设置为 `system` ，表示使用当前用户设置的微信字体大小',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                        },
                    ],
                },
                {
                    name: 'root-font-size',
                    description: '*(string)*\n页面的根字体大小，页面中的所有 rem 单位，将使用这个字体大小作为参考值，即 `1rem` 等于这个字体大小；自小程序版本 2.11.0 起，也可以设置为 `system`',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                        },
                    ],
                },
                {
                    name: 'page-orientation',
                    description: '*(string)*\n页面的方向，可为 `auto` `portrait` 或 `landscape`',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                        },
                    ],
                },
                {
                    name: 'bindresize',
                    description: '*(eventhandle)*\n页面尺寸变化时会触发 `resize` 事件， `event.detail = { size: { windowWidth, windowHeight } }`',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html',
                },
            ],
        },
        {
            name: 'pan-gesture-handler',
            description: '\n> 相关文档: [手势系统]((skyline/gesture))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n拖动（横向/纵向）时触发手势\n\n',
            attributes: [
                {
                    name: 'tag',
                    description: '*(string)*\n声明手势协商时的组件标识',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:ongesture',
                    description: '*(eventhandler)*\n手势识别成功的回调',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                        },
                    ],
                    values: [
                        {
                            name: '',
                            description: '手势状态',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 X 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 Y 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对上一次，X 轴方向移动的坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对上一次，Y 轴方向移动的坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '手指离开屏幕时的横向速度（pixel per second)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '手指离开屏幕时的纵向速度（pixel per second)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'worklet:should-response-on-move',
                    description: '*(callback)*\n手指移动过程中手势是否响应',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:should-accept-gesture',
                    description: '*(callback)*\n手势是否应该被识别',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'simultaneous-handlers',
                    description: '*(Array.&lt;string&gt;)*\n声明可同时触发的手势节点',
                    attrType: 'Array.&lt;string&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'native-view',
                    description: '*(string)*\n代理的原生节点类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/pan-gesture-handler.html',
                },
            ],
        },
        {
            name: 'picker-view-column',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n滚动选择器子项。仅可放置于[picker-view]((picker-view))中，其孩子节点的高度会自动设置成与[picker-view]((picker-view))的选中框的高度一致\n\n## Bug & Tip\n\n1. `tip`: 若当前组件所在的页面或全局开启了 `enablePassiveEvent` 配置项，该内置组件可能会出现非预期表现（详情参考 [enablePassiveEvent 文档](../reference/configuration/app)）\n2. `tip`: 子节点建议添加 `aria-role=option` 和 `aria-label` 以增强无障碍支持。\n\n\n',
            attributes: [],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html',
                },
            ],
        },
        {
            name: 'picker-view',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n嵌入页面的滚动选择器。其中只可放置 [picker-view-column]((picker-view-column))组件，其它节点不会显示。\n\n目前滚动过程中 bindpickstart、bindpickend 会被触发多次，后续 skyline 升级会修复该问题\n\n',
            attributes: [
                {
                    name: 'value',
                    description: '*(Array.&lt;number&gt;)*\n数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。',
                    attrType: 'Array.&lt;number&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html',
                        },
                    ],
                },
                {
                    name: 'mask-class',
                    description: '*(string)*\n设置蒙层的类名',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html',
                        },
                    ],
                },
                {
                    name: 'indicator-style',
                    description: '*(string)*\n设置选择器中间选中框的样式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html',
                        },
                    ],
                },
                {
                    name: 'bindchange',
                    description: '*(eventhandle)*\n滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html',
                        },
                    ],
                },
                {
                    name: 'bindpickstart',
                    description: '*(eventhandle)*\n当滚动选择开始时候触发事件',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html',
                        },
                    ],
                },
                {
                    name: 'bindpickend',
                    description: '*(eventhandle)*\n当滚动选择结束时候触发事件',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html',
                },
            ],
        },
        {
            name: 'picker',
            attributes: [
                {
                    name: 'header-text',
                    description: '*(string)*\n选择器的标题，仅安卓可用',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'mode',
                    description: '*(string)*\n选择器类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                    values: [
                        {
                            name: 'selector',
                            description: '普通选择器',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                        {
                            name: 'multiSelector',
                            description: '多列选择器',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                        {
                            name: 'time',
                            description: '时间选择器',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                        {
                            name: 'date',
                            description: '日期选择器',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                        {
                            name: 'region',
                            description: '省市区选择器',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'disabled',
                    description: '*(boolean)*\n是否禁用',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'bindcancel',
                    description: '*(eventhandle)*\n取消选择时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'range',
                    description: 'mode 为 selector 或 multiSelector 时，range 有效',
                    attrType: 'array/object array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'range-key',
                    description: '当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'value',
                    description: 'mode="selector" 表示选择了 range 中的第几个（下标从 0 开始）；mode=“multiSelector”，value 是一个数字数组，表示选择了 range 中的第几个（下标从 0 开始）；mode=“time” 时，表示选中的时间，格式为"hh:mm"；mode=“date” 时，表示选中的日期，格式为"YYYY-MM-DD"',
                    attrType: 'number/array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'bindchange',
                    description: 'value 改变时触发 change 事件，event.detail = {value}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'bindcolumnchange',
                    description: '列改变时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'start',
                    description: 'mode="time" 时，表示有效时间范围的开始，字符串格式为"hh:mm"；mode="date" 时，表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'end',
                    description: 'mode="time" 时，表示有效时间范围的结束，字符串格式为"hh:mm"；mode="date" 时，表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'fields',
                    description: 'mode="date" 时有效，有效值 year,month,day，表示选择器的粒度',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                    values: [
                        {
                            name: 'year',
                            description: '选择器粒度为年',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                        {
                            name: 'month',
                            description: '选择器粒度为月',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                        {
                            name: 'day',
                            description: '选择器粒度为天',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'custom-item',
                    description: 'mode="region" 时有效, 可为每一列的顶部添加一个自定义的项',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                },
                {
                    name: 'level',
                    description: 'mode="region" 时有效，选择器层级',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                        },
                    ],
                    values: [
                        {
                            name: 'province',
                            description: '省级选择器',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                        {
                            name: 'city',
                            description: '市级选择器',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                        {
                            name: 'region',
                            description: '\t区级选择器',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                        {
                            name: 'sub-district',
                            description: '街道选择器',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                                },
                            ],
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/picker.html',
                },
            ],
        },
        {
            name: 'progress',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n进度条。组件属性的长度单位默认为px，{%version(\'2.4.0\')%}起支持传入单位(rpx/px)。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'percent',
                    description: '*(number)*\n百分比0~100',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'show-info',
                    description: '*(boolean)*\n在进度条右侧显示百分比',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'border-radius',
                    description: '*(number/string)*\n圆角大小',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'font-size',
                    description: '*(number/string)*\n右侧百分比字体大小',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'stroke-width',
                    description: '*(number/string)*\n进度条线的宽度',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'color',
                    description: '*(string)*\n进度条颜色（请使用activeColor）',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'activeColor',
                    description: '*(string)*\n已选择的进度条的颜色',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'backgroundColor',
                    description: '*(string)*\n未选择的进度条的颜色',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'active',
                    description: '*(boolean)*\n进度条从左往右的动画',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'active-mode',
                    description: '*(string)*\nbackwards: 动画从头播；forwards：动画从上次结束点接着播',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'duration',
                    description: '*(number)*\n进度增加1%所需毫秒数',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
                {
                    name: 'bindactiveend',
                    description: '*(eventhandle)*\n动画完成事件',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/progress.html',
                },
            ],
        },
        {
            name: 'radio-group',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n单项选择器，内部由多个 [radio]((radio)) 组成。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'bindchange',
                    description: '*(EventHandle)*\n[radio-group]((radio-group))中选中项发生改变时触发 change 事件，detail = {value:[选中的radio的value的数组]}',
                    attrType: 'EventHandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html',
                },
            ],
        },
        {
            name: 'radio',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n单选项目。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'value',
                    description: '*(string)*\n[radio]((radio)) 标识。当该[radio]((radio)) 选中时，[radio-group]((radio-group)) 的 change 事件会携带[radio]((radio))的value',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio.html',
                        },
                    ],
                },
                {
                    name: 'checked',
                    description: '*(boolean)*\n当前是否选中',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio.html',
                        },
                    ],
                },
                {
                    name: 'disabled',
                    description: '*(boolean)*\n是否禁用',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio.html',
                        },
                    ],
                },
                {
                    name: 'color',
                    description: '*(string)*\nradio的颜色，同css的color',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/radio.html',
                },
            ],
        },
        {
            name: 'rich-text',
            description: '\n(基础库 1.4.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n富文本。\n\n1. 自基础库 2.33.0 版本开始支持（3.0.0 除外）。\n2. 遵循 skyline 的样式和布局规则，html tag 被映射成类似 text/span/view 节点，因此存在 text 嵌套问题。\n3. 不支持 td/tr 等表格布局 tag，也不支持 bdo/bdi 等文字排版 tag。建议完全使用 flex 等 skyline 支持的布局方式来创建富文本内容。\n4. 提供了可选的兼容布局模式选项 `mode`，但仍不保证与 WebView 表现 100% 一致。\n5. 在 2.33.0 基础库下，请尽可能避免为 html tag 使用 wx-rich-text 开头的类名。\n\n',
            attributes: [
                {
                    name: 'nodes',
                    description: '*(array/string)*\n节点列表/HTML String',
                    attrType: 'array/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html',
                        },
                    ],
                },
                {
                    name: 'space',
                    description: '*(string)*\n显示连续空格',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html',
                        },
                    ],
                    values: [
                        {
                            name: 'ensp',
                            description: '中文字符空格一半大小',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html',
                                },
                            ],
                        },
                        {
                            name: 'emsp',
                            description: '中文字符空格大小',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html',
                                },
                            ],
                        },
                        {
                            name: 'nbsp',
                            description: '根据字体设置的空格大小',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'user-select',
                    description: '*(boolean)*\n文本是否可选，该属性会使节点显示为 block',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html',
                },
            ],
        },
        {
            name: 'root-portal',
            description: '\n(基础库 2.25.2+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n使整个子树从页面中脱离出来，类似于在 CSS 中使用 fixed position 的效果。主要用于制作弹窗、弹出层等。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'enable',
                    description: '*(boolean)*\n是否从页面中脱离出来',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html',
                        },
                    ],
                },
                {
                    name: 'externalClass',
                    description: '*(string)*\n外部样式类',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html',
                },
            ],
        },
        {
            name: 'scale-gesture-handler',
            description: '\n> 相关文档: [手势系统]((skyline/gesture))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n多指缩放时触发手势\n\n',
            attributes: [
                {
                    name: 'tag',
                    description: '*(string)*\n声明手势协商时的组件标识',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:ongesture',
                    description: '*(eventhandler)*\n手势识别成功的回调',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                        },
                    ],
                    values: [
                        {
                            name: '',
                            description: '手势状态',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '中心点相对于全局的X坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '中心点相对于全局的Y坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对上一次，中心点在X轴方向移动的坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对上一次，中心点在Y轴方向移动的坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '放大或缩小的比例',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: 'scale的横向分量',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: 'scale的纵向分量',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '旋转角（单位：弧度）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '手指离开屏幕时的横向速度（pixel per second)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '手指离开屏幕时的纵向速度（pixel per second)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '跟踪的手指数',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'worklet:should-response-on-move',
                    description: '*(callback)*\n手指移动过程中手势是否响应',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:should-accept-gesture',
                    description: '*(callback)*\n手势是否应该被识别',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'simultaneous-handlers',
                    description: '*(Array.&lt;string&gt;)*\n声明可同时触发的手势节点',
                    attrType: 'Array.&lt;string&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'native-view',
                    description: '*(string)*\n代理的原生节点类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scale-gesture-handler.html',
                },
            ],
        },
        {
            name: 'scroll-view',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n可滚动视图区域。使用竖向滚动时，需要给[scroll-view]((scroll-view))一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，{%version(\'2.4.0\')%}起支持传入单位(rpx/px)。\n\n1. 横向滚动需打开 enable-flex 以兼容 WebView，如 &lt;scroll-view scroll-x enable-flex style="flex-direction: row;"/&gt; <br>\n2. 滚动条的长度是预估的，若直接子节点的高度差别较大，则滚动条长度可能会不准确\n3. 使用 `worklet` 函数需要开启开发者工具 "将 JS 编译成 ES5" 或 "编译 worklet 函数" 选项。\n\n',
            attributes: [
                {
                    name: 'scroll-x',
                    description: '*(boolean)*\n允许横向滚动',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'scroll-y',
                    description: '*(boolean)*\n允许纵向滚动',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'upper-threshold',
                    description: '*(number/string)*\n距顶部/左边多远时，触发 scrolltoupper 事件',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'lower-threshold',
                    description: '*(number/string)*\n距底部/右边多远时，触发 scrolltolower 事件',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'scroll-top',
                    description: '*(number/string)*\n设置竖向滚动条位置',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'scroll-left',
                    description: '*(number/string)*\n设置横向滚动条位置',
                    attrType: 'number/string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'scroll-into-view',
                    description: '*(string)*\n值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'scroll-into-view-offset',
                    description: '*(number)*\n跳转到 scroll-into-view 目标节点时的额外偏移。skyline 自 3.1.0 版本开始支持，webview 自 3.6.0 版本开始支持。',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'scroll-with-animation',
                    description: '*(boolean)*\n在设置滚动条位置时使用动画过渡',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'enable-back-to-top',
                    description: '*(boolean)*\niOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向。自 2.27.3 版本开始，若非显式设置为 false，则在显示尺寸大于屏幕 90% 时自动开启。鸿蒙 OS 暂不支持',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'enable-passive',
                    description: '*(boolean)*\n开启 passive 特性，能优化一定的滚动性能',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'refresher-enabled',
                    description: '*(boolean)*\n开启自定义下拉刷新',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'refresher-threshold',
                    description: '*(number)*\n设置自定义下拉刷新阈值',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'refresher-default-style',
                    description: '*(string)*\n设置自定义下拉刷新默认样式，支持设置 `black | white | none`， none 表示不使用默认样式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'refresher-background',
                    description: '*(string)*\n设置自定义下拉刷新区域背景颜色，默认为透明',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'refresher-triggered',
                    description: '*(boolean)*\n设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'bounces',
                    description: '*(boolean)*\niOS 下 scroll-view 边界弹性控制 (同时开启 enhanced 属性后生效)',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'show-scrollbar',
                    description: '*(boolean)*\n滚动条显隐控制 (同时开启 enhanced 属性后生效)',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'fast-deceleration',
                    description: '*(boolean)*\n滑动减速速率控制, 仅在 iOS 下生效 (同时开启 enhanced 属性后生效)',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'binddragstart',
                    description: '*(eventhandle)*\n滑动开始事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'binddragging',
                    description: '*(eventhandle)*\n滑动事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'binddragend',
                    description: '*(eventhandle)*\n滑动结束事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft, velocity }',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'bindscrolltoupper',
                    description: '*(eventhandle)*\n滚动到顶部/左边时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'bindscrolltolower',
                    description: '*(eventhandle)*\n滚动到底部/右边时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'bindscroll',
                    description: '*(eventhandle)*\n滚动时触发，event.detail = { scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY }。skyline 从 3.6.6开始，额外具有 boundaryVelocity 字段：如果该次滚动会触碰到边界，从该次滚动触发起到下一个滚动事件发生或者当次滚动事件结束为止 boundaryVelocity 将被置为触碰边界时的速度，否则置为 NAN。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'bindrefresherpulling',
                    description: '*(eventhandle)*\n自定义下拉刷新控件被下拉',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'bindrefresherrefresh',
                    description: '*(eventhandle)*\n自定义下拉刷新被触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'bindrefresherrestore',
                    description: '*(eventhandle)*\n自定义下拉刷新被复位',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'bindrefresherabort',
                    description: '*(eventhandle)*\n自定义下拉刷新被中止',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
                {
                    name: 'scroll-anchoring',
                    description: '*(boolean)*\n开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，可参考 CSS `overflow-anchor` 属性。webview 仅在 iOS 下生效。skyline 自 3.6.2 版本开始支持，默认为 true 。',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
                },
            ],
        },
        {
            name: 'selection',
            description: '\n(基础库 3.6.4+)\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n局部文本选区。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'disable-context-menu',
                    description: '*(boolean)*\n是否隐藏客户端原生文本选区按钮',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/selection.html',
                        },
                    ],
                },
                {
                    name: 'bindselectionchange',
                    description: '*(eventhandle)*\n当选区发生变化时触发 selectionchange 事件 event.detail = { isCollapsed, selectedString, firstNodeId, firstOffset, lastNodeId, lastOffset, firstRangeRect }',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/selection.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/selection.html',
                },
            ],
        },
        {
            name: 'share-element',
            description: '\n(基础库 2.16.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n共享元素。\n\n共享元素是一种动画形式，类似于 [flutter Hero](https://flutterchina.club/animations/hero-animations/)动画，表现为元素像是在页面间穿越一样。该组件需与 [page-container]((page-container)) 组件结合使用。\n\n使用时需在当前页放置 `share-element` 组件，同时在 `page-container` 容器中放置对应的 `share-element` 组件，对应关系通过属性值 `key` 映射。当设置 `page-container` 显示时，`transform` 属性为 `true` 的共享元素会产生动画。当前页面容器退出时，会产生返回动画。\n\n1. 使用 `worklet` 函数需要开启开发者工具 "将 JS 编译成 ES5" 或 "编译 worklet 函数" 选项。\n\n',
            attributes: [
                {
                    name: 'key',
                    description: '*(string)*\n映射标记，页面内唯一',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html',
                        },
                    ],
                },
                {
                    name: 'transform',
                    description: '*(boolean)*\n是否进行动画',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html',
                        },
                    ],
                },
                {
                    name: 'duration',
                    description: '*(number)*\n动画时长，单位毫秒',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html',
                        },
                    ],
                },
                {
                    name: 'easing-function',
                    description: '*(string)*\n`css`缓动函数',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html',
                },
            ],
        },
        {
            name: 'slider',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n滑动选择器。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'min',
                    description: '*(number)*\n最小值',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'max',
                    description: '*(number)*\n最大值',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'step',
                    description: '*(number)*\n步长，取值必须大于 0，并且可被(max - min)整除',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'disabled',
                    description: '*(boolean)*\n是否禁用',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'value',
                    description: '*(number)*\n当前取值',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'color',
                    description: '*(color)*\n背景条的颜色（请使用 backgroundColor）',
                    attrType: 'color',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'selected-color',
                    description: '*(color)*\n已选择的颜色（请使用 activeColor）',
                    attrType: 'color',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'activeColor',
                    description: '*(color)*\n已选择的颜色',
                    attrType: 'color',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'backgroundColor',
                    description: '*(color)*\n背景条的颜色',
                    attrType: 'color',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'block-size',
                    description: '*(number)*\n滑块的大小，取值范围为 12 - 28',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'block-color',
                    description: '*(color)*\n滑块的颜色',
                    attrType: 'color',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'show-value',
                    description: '*(boolean)*\n是否显示当前 value',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'bindchange',
                    description: '*(eventhandle)*\n完成一次拖动后触发的事件，event.detail = {value}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
                {
                    name: 'bindchanging',
                    description: '*(eventhandle)*\n拖动过程中触发的事件，event.detail = {value}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/slider.html',
                },
            ],
        },
        {
            name: 'snapshot',
            description: '\n(基础库 3.0.1+)\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n截图组件。 支持将其子节点的渲染结果导出成图片，该组件需配合 [snapshot]((api/skyline/Snapshot)) 接口使用。 目前仅在 [Skyline 渲染引擎]((skyline/introduction)) 下支持。\n\n',
            attributes: [
                {
                    name: 'mode',
                    description: '*(string)*\n渲染模式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/snapshot.html',
                        },
                    ],
                    values: [
                        {
                            name: 'view',
                            description: '以真实节点渲染。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/snapshot.html',
                                },
                            ],
                        },
                        {
                            name: 'picture',
                            description: '对子节点生成的内容截图渲染。',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/snapshot.html',
                                },
                            ],
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/snapshot.html',
                },
            ],
        },
        {
            name: 'span',
            description: '\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n## 功能描述\n\n用于支持内联文本和 image / navigator 的混排\n\n\n',
            attributes: [],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/span.html',
                },
            ],
        },
        {
            name: 'sticky-header',
            description: '\n(基础库 2.29.0+)\n\n> 相关文档: [Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n## 功能描述\n\n吸顶布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点或 [sticky-section]((sticky-section)) 组件直接子节点\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'offset-top',
                    description: '*(number)*\n吸顶时与视窗顶部的距离(px)',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html',
                        },
                    ],
                },
                {
                    name: 'allow-overlapping',
                    description: '*(bool)*\n是否允许与前一个 sticky-header 重叠',
                    attrType: 'bool',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html',
                        },
                    ],
                },
                {
                    name: 'padding',
                    description: '*(Array)*\n长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距(px)',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html',
                        },
                    ],
                },
                {
                    name: 'bind:stickontopchange',
                    description: '*(eventhandle)*\n吸顶状态变化事件，仅支持非 worklet 的组件方法作为回调。event.detail = { isStickOnTop }，当 sticky-header 吸顶时为 true，否则为 false。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html',
                },
            ],
        },
        {
            name: 'sticky-section',
            description: '\n(基础库 2.29.0+)\n\n> 相关文档: [Skyline 渲染引擎]((skyline/introduction))、[Skyline 迁移起步]((skyline/migration))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n## 功能描述\n\n吸顶布局容器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'push-pinned-header',
                    description: '*(boolean)*\n吸顶元素重叠时是否继续上推',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/sticky-section.html',
                        },
                    ],
                },
                {
                    name: 'padding',
                    description: '*(Array)*\n长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距',
                    attrType: 'Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/sticky-section.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/sticky-section.html',
                },
            ],
        },
        {
            name: 'store-coupon',
            description: '\n(基础库 3.8.3+)\n\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [微信小店指引](https://developers.weixin.qq.com/doc/store/API/basics/component.html)\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n小程序内嵌微信小店优惠券，展示小店优惠券，并进行跳转交易。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'appid',
                    description: '*(string)*\n小店appid。获取方式：[小店后台](https://store.weixin.qq.com/shop/setting/home) - 店铺管理 - 基础信息 - 账号信息 - 微信小店ID。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-coupon.html',
                        },
                    ],
                },
                {
                    name: 'coupon-id',
                    description: '*(string)*\n优惠券id。获取小店优惠券id，可以通过[小店后台](https://store.weixin.qq.com/shop/marketing/coupon) - 营销中心 - 优惠券。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-coupon.html',
                        },
                    ],
                },
                {
                    name: 'custom-style',
                    description: '*(object)*\n自定义样式。支持自定义的样式请查看custom-style。',
                    attrType: 'object',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-coupon.html',
                        },
                    ],
                },
                {
                    name: 'promoter-share-link',
                    description: '*(string)*\n推客参数。对于「机构推广券」类型优惠券，通过该参数，支持推客染色，可以通过[接口](https://developers.weixin.qq.com/doc/store/leagueheadsupplier/API/promotion/content/coupon/getcouponpromotersharelink.html)获取。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-coupon.html',
                        },
                    ],
                },
                {
                    name: 'bindentersuccess',
                    description: '*(eventhandle)*\n跳转小店成功的回调。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-coupon.html',
                        },
                    ],
                },
                {
                    name: 'bindentererror',
                    description: '*(eventhandle)*\n跳转小店失败的回调，event.detail={code,message}。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-coupon.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-coupon.html',
                },
            ],
        },
        {
            name: 'store-gift',
            description: '\n(基础库 3.8.10+)\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n小程序送礼物接口支持小程序调用官方组件完成一次微信礼物的赠送，送礼后，用户可通过微信【我】-【订单与卡券】查看礼物订单详情。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'present-order-id',
                    description: '*(string)*\n礼物订单id，调用“创建并发送礼物”或通过“查询礼物订单列表”open api拿到，[open api文档链接](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/cooperation_shop/activity_present_cooperation_shop.html)。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-gift.html',
                        },
                    ],
                },
                {
                    name: 'open-id',
                    description: '*(string)*\n用户openid。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-gift.html',
                        },
                    ],
                },
                {
                    name: 'show-gift-card',
                    description: '*(boolean)*\n控制是否展示礼物卡片，默认展示礼物卡片。',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-gift.html',
                        },
                    ],
                },
                {
                    name: 'bindsuccess',
                    description: '*(eventhandle)*\n打开礼物成功的回调，event.detail={code,message}。【新特性支持】微信iOS / Android版本>=8.0.61，支持在成功打开礼物并回到小程序时，触发成功回调。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-gift.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n打开礼物失败的回调，event.detail={code,message}。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-gift.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-gift.html',
                },
            ],
        },
        {
            name: 'store-home',
            description: '\n(基础库 3.5.5+)\n\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [微信小店指引](https://developers.weixin.qq.com/doc/store/API/basics/component.html)\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n小程序内嵌微信小店首页，展示小店首页，并进行跳转交易。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'appid',
                    description: '*(string)*\n小店appid。获取方式：[小店后台](https://store.weixin.qq.com/shop/setting/home) - 店铺管理 - 基础信息 - 账号信息 - 微信小店ID。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-home.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-home.html',
                },
            ],
        },
        {
            name: 'store-product',
            description: '\n(基础库 3.5.5+)\n\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [微信小店指引](https://developers.weixin.qq.com/doc/store/API/basics/component.html)\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n小程序内嵌微信小店商品，展示小店商品，并进行跳转交易。支持小店优选联盟带货跟佣功能。\n\n',
            attributes: [
                {
                    name: 'appid',
                    description: '*(string)*\n小店appid。获取方式：[小店后台](https://store.weixin.qq.com/shop/setting/home) - 店铺管理 - 基础信息 - 账号信息 - 微信小店ID。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                        },
                    ],
                },
                {
                    name: 'product-id',
                    description: '*(string)*\n商品id。获取小店商品id，可以通过API获取([参考链接](https://developers.weixin.qq.com/doc/store/API/product/get.html))或通过[小店后台](https://store.weixin.qq.com/shop/goods/list) - 商品管理 - 商品列表 - 规格/编码获取。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                        },
                    ],
                },
                {
                    name: 'product-promotion-link',
                    description: '*(string)*\n带货商品跟佣信息。若需要商品售卖时使用小店优选联盟带货跟佣功能，可以通过API获取带货商品跟佣信息([参考链接](https://developers.weixin.qq.com/doc/channels/API/windowproduct/get.html))。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                        },
                    ],
                },
                {
                    name: 'media-id',
                    description: '*(string)*\n媒体文件id。可以通过API获取([参考链接](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/cooperation_shop/upload.html#%E4%B8%80%E3%80%81%E4%B8%8A%E4%BC%A0%E8%B5%84%E6%96%99))。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                        },
                    ],
                },
                {
                    name: 'custom-style',
                    description: '*(object)*\n自定义样式。支持自定义的样式请查看custom-style。',
                    attrType: 'object',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                        },
                    ],
                },
                {
                    name: 'custom-content',
                    description: '*(boolean)*\n开启自定义插槽。开启后可自行控制卡片内容。',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                        },
                    ],
                },
                {
                    name: 'open-page',
                    description: '*(string)*\n设置点击打开的页面(同时开启 custom-content 属性后生效)。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                        },
                    ],
                    values: [
                        {
                            name: 'product-detail',
                            description: '商品详情页',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                                },
                            ],
                        },
                        {
                            name: 'gift-product-detail',
                            description: '送礼商品详情页',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                                },
                            ],
                        },
                        {
                            name: 'buy',
                            description: '下单页',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'logo-position',
                    description: '*(string)*\n设置小店标识的位置，不允许隐藏(同时开启 custom-content 属性后生效)。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                        },
                    ],
                    values: [
                        {
                            name: 'bottom-left',
                            description: '左下方',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                                },
                            ],
                        },
                        {
                            name: 'bottom-right',
                            description: '右下方',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'bindentersuccess',
                    description: '*(eventhandle)*\n跳转小店成功的回调。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                        },
                    ],
                },
                {
                    name: 'bindentererror',
                    description: '*(eventhandle)*\n跳转小店失败的回调，event.detail={code,message}。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/store-product.html',
                },
            ],
        },
        {
            name: 'swiper-item',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n仅可放置在[swiper]((swiper))组件中，宽高自动设置为100%。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'item-id',
                    description: '*(string)*\n该 swiper-item 的标识符',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html',
                        },
                    ],
                },
                {
                    name: 'skip-hidden-item-layout',
                    description: '*(boolean)*\n是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html',
                },
            ],
        },
        {
            name: 'swiper',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n滑块视图容器。其中只可放置[swiper-item]((swiper-item))组件，否则会导致未定义的行为。\n\n1. 使用 `worklet` 函数需要开启开发者工具 "将 JS 编译成 ES5" 或 "编译 worklet 函数" 选项。\n\n',
            attributes: [
                {
                    name: 'indicator-dots',
                    description: '*(boolean)*\n是否显示面板指示点',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'indicator-color',
                    description: '*(color)*\n指示点颜色',
                    attrType: 'color',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'indicator-active-color',
                    description: '*(color)*\n当前选中的指示点颜色',
                    attrType: 'color',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'autoplay',
                    description: '*(boolean)*\n是否自动切换',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'current',
                    description: '*(number)*\n当前所在滑块的 index',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'interval',
                    description: '*(number)*\n自动切换时间间隔',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'duration',
                    description: '*(number)*\n滑动动画时长',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'circular',
                    description: '*(boolean)*\n是否采用衔接滑动',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'vertical',
                    description: '*(boolean)*\n滑动方向是否为纵向',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'display-multiple-items',
                    description: '*(number)*\n同时显示的滑块数量',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'previous-margin',
                    description: '*(string)*\n前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'next-margin',
                    description: '*(string)*\n后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值。skyline 于 3.5.1 版本支持',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'easing-function',
                    description: '*(string)*\n指定 swiper 切换缓动动画类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                    values: [
                        {
                            name: 'default',
                            description: '默认缓动函数',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                                },
                            ],
                        },
                        {
                            name: 'linear',
                            description: '线性动画',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                                },
                            ],
                        },
                        {
                            name: 'easeInCubic',
                            description: '缓入动画',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                                },
                            ],
                        },
                        {
                            name: 'easeOutCubic',
                            description: '缓出动画',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                                },
                            ],
                        },
                        {
                            name: 'easeInOutCubic',
                            description: '缓入缓出动画',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'direction',
                    description: '*(string)*\n指定 swiper 滑动方向',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                    values: [
                        {
                            name: 'all',
                            description: '默认',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                                },
                            ],
                        },
                        {
                            name: 'positive',
                            description: '如 vertical 为 true 时，允许用户下滑（swiper 内容向上滚动），为 false 时，允许用户右滑（swiper 内容向左滚动）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                                },
                            ],
                        },
                        {
                            name: 'negative',
                            description: '如 vertical 为 true 时，允许用户上滑（swiper 内容向下滚动），为 false 时，允许用户左滑（swiper 内容向右滚动）',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'bindchange',
                    description: '*(eventhandle)*\ncurrent 改变时会触发 change 事件，event.detail = {current, source}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'bindtransition',
                    description: '*(eventhandle)*\nswiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}。Skyline 仅支持非 worklet 的组件方法作为回调。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
                {
                    name: 'bindanimationfinish',
                    description: '*(eventhandle)*\n动画结束时会触发 animationfinish 事件，event.detail 同 bindchange。Skyline 仅支持非 worklet 的组件方法作为回调。',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
                },
            ],
        },
        {
            name: 'switch',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n开关选择器。\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'checked',
                    description: '*(boolean)*\n是否选中',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/switch.html',
                        },
                    ],
                },
                {
                    name: 'disabled',
                    description: '*(boolean)*\n是否禁用',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/switch.html',
                        },
                    ],
                },
                {
                    name: 'type',
                    description: '*(string)*\n样式，有效值：switch, checkbox',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/switch.html',
                        },
                    ],
                },
                {
                    name: 'color',
                    description: '*(string)*\nswitch 的颜色，同 css 的 color',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/switch.html',
                        },
                    ],
                },
                {
                    name: 'bindchange',
                    description: '*(eventhandle)*\n点击导致 checked 改变时会触发 change 事件，event.detail={ value}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/switch.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/switch.html',
                },
            ],
        },
        {
            name: 'tap-gesture-handler',
            description: '\n> 相关文档: [手势系统]((skyline/gesture))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n点击时触发手势\n\n',
            attributes: [
                {
                    name: 'tag',
                    description: '*(string)*\n声明手势协商时的组件标识',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:ongesture',
                    description: '*(eventhandler)*\n手势识别成功的回调',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html',
                        },
                    ],
                    values: [
                        {
                            name: '',
                            description: '手势状态',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 X 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 Y 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'worklet:should-response-on-move',
                    description: '*(callback)*\n手指移动过程中手势是否响应',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:should-accept-gesture',
                    description: '*(callback)*\n手势是否应该被识别',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'simultaneous-handlers',
                    description: '*(Array.&lt;string&gt;)*\n声明可同时触发的手势节点',
                    attrType: 'Array.&lt;string&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'native-view',
                    description: '*(string)*\n代理的原生节点类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/tap-gesture-handler.html',
                },
            ],
        },
        {
            name: 'text',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n文本。\n\n1. 内联文本只能用 text 组件，不能用 view，如 &lt;text&gt; foo &lt;text&gt;bar&lt;/text&gt; &lt;/text&gt;<br>\n2. 新增 span 组件用于内联文本和图片，如 &lt;span&gt; &lt;image&gt; &lt;/image&gt; &lt;text&gt;bar&lt;/text&gt; &lt;/span&gt;\n\n',
            attributes: [
                {
                    name: 'selectable',
                    description: '*(boolean)*\n文本是否可选 (已废弃)',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/text.html',
                        },
                    ],
                },
                {
                    name: 'user-select',
                    description: '*(boolean)*\n文本是否可选，该属性会使文本节点显示为 inline-block',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/text.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/text.html',
                },
            ],
        },
        {
            name: 'textarea',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n多行输入框。该组件是[原生组件]((native-component))，使用时请注意相关限制。\n\n',
            attributes: [
                {
                    name: 'value',
                    description: '*(string)*\n输入框的内容',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'placeholder',
                    description: '*(string)*\n输入框为空时占位符',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'placeholder-style',
                    description: '*(string)*\n指定 placeholder 的样式，目前仅支持color,font-size,font-weight,line-height',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'disabled',
                    description: '*(boolean)*\n是否禁用',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'maxlength',
                    description: '*(number)*\n最大输入长度，设置为 -1 的时候不限制最大长度',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'auto-focus',
                    description: '*(boolean)*\n自动聚焦，拉起键盘。',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'focus',
                    description: '*(boolean)*\n获取焦点',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'auto-height',
                    description: '*(boolean)*\n是否自动增高，设置auto-height时，style.height不生效',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'cursor-spacing',
                    description: '*(number)*\n指定光标与键盘的距离。取`textarea`距离底部的距离和`cursor-spacing`指定的距离的最小值作为光标与键盘的距离',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'cursor',
                    description: '*(number)*\n指定focus时的光标位置',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'selection-start',
                    description: '*(number)*\n光标起始位置，自动聚集时有效，需与`selection-end`搭配使用',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'selection-end',
                    description: '*(number)*\n光标结束位置，自动聚集时有效，需与`selection-start`搭配使用',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'adjust-position',
                    description: '*(boolean)*\n键盘弹起时，是否自动上推页面',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'hold-keyboard',
                    description: '*(boolean)*\nfocus时，点击页面的时候不收起键盘',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'disable-default-padding',
                    description: '*(boolean)*\n是否去掉 iOS 下的默认内边距',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'confirm-type',
                    description: '*(string)*\n设置键盘右下角按钮的文字',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                    values: [
                        {
                            name: 'send',
                            description: '右下角按钮为“发送”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                                },
                            ],
                        },
                        {
                            name: 'search',
                            description: '右下角按钮为“搜索”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                                },
                            ],
                        },
                        {
                            name: 'next',
                            description: '右下角按钮为“下一个”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                                },
                            ],
                        },
                        {
                            name: 'go',
                            description: '右下角按钮为“前往”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                                },
                            ],
                        },
                        {
                            name: 'done',
                            description: '右下角按钮为“完成”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                                },
                            ],
                        },
                        {
                            name: 'return',
                            description: '右下角按钮为“换行”',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'confirm-hold',
                    description: '*(boolean)*\n点击键盘右下角按钮时是否保持键盘不收起',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'adjust-keyboard-to',
                    description: '*(boolean)*\n键盘对齐位置。',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                    values: [
                        {
                            name: 'cursor',
                            description: '对齐光标位置',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                                },
                            ],
                        },
                        {
                            name: 'bottom',
                            description: '对齐输入框底部',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'bindfocus',
                    description: '*(eventhandle)*\n输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'bindblur',
                    description: '*(eventhandle)*\n输入框失去焦点时触发，event.detail = {value, cursor}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'bindlinechange',
                    description: '*(eventhandle)*\n输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'bindinput',
                    description: '*(eventhandle)*\n当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode}，keyCode 为键值，目前工具还不支持返回keyCode参数。**bindinput 处理函数的返回值并不会反映到 textarea 上**',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'bindconfirm',
                    description: '*(eventhandle)*\n点击完成时， 触发 confirm 事件，event.detail = {value: value}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
                {
                    name: 'bindkeyboardheightchange',
                    description: '*(eventhandle)*\n键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html',
                },
            ],
        },
        {
            name: 'vertical-drag-gesture-handler',
            description: '\n> 相关文档: [手势系统]((skyline/gesture))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）</p>\n\n\n纵向滑动时触发手势\n\n',
            attributes: [
                {
                    name: 'tag',
                    description: '*(string)*\n声明手势协商时的组件标识',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:ongesture',
                    description: '*(eventhandler)*\n手势识别成功的回调',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                        },
                    ],
                    values: [
                        {
                            name: '',
                            description: '手势状态',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 X 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对于全局的 Y 坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对上一次，X 轴方向移动的坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '相对上一次，Y 轴方向移动的坐标',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '手指离开屏幕时的横向速度（pixel per second)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                                },
                            ],
                        },
                        {
                            name: '',
                            description: '手指离开屏幕时的纵向速度（pixel per second)',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'worklet:should-response-on-move',
                    description: '*(callback)*\n手指移动过程中手势是否响应',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'worklet:should-accept-gesture',
                    description: '*(callback)*\n手势是否应该被识别',
                    attrType: 'callback',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'simultaneous-handlers',
                    description: '*(Array.&lt;string&gt;)*\n声明可同时触发的手势节点',
                    attrType: 'Array.&lt;string&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                        },
                    ],
                },
                {
                    name: 'native-view',
                    description: '*(string)*\n代理的原生节点类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/vertical-drag-gesture-handler.html',
                },
            ],
        },
        {
            name: 'video',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n> 相关文档: [wx.createVideoContext]((wx.createVideoContext))\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n\n视频（v2.4.0 起支持[同层渲染]((native-component#原生组件同层渲染))）。\n\n',
            attributes: [
                {
                    name: 'src',
                    description: '*(string)*\n要播放视频的资源地址，支持网络路径、本地临时路径、云文件ID（{%version(\'2.3.0\')%}）',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'duration',
                    description: '*(number)*\n指定视频时长',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'controls',
                    description: '*(boolean)*\n是否显示默认播放控件（播放/暂停按钮、播放进度、时间）',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'danmu-list',
                    description: '*(Array.&lt;object&gt;)*\n弹幕列表',
                    attrType: 'Array.&lt;object&gt;',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'danmu-btn',
                    description: '*(boolean)*\n是否显示弹幕按钮，只在初始化时有效，不能动态变更',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'enable-danmu',
                    description: '*(boolean)*\n是否展示弹幕，只在初始化时有效，不能动态变更',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'autoplay',
                    description: '*(boolean)*\n是否自动播放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'loop',
                    description: '*(boolean)*\n是否循环播放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'muted',
                    description: '*(boolean)*\n是否静音播放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'initial-time',
                    description: '*(number)*\n指定视频初始播放位置',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'page-gesture',
                    description: '*(boolean)*\n在非全屏模式下，是否开启亮度与音量调节手势（废弃，见 vslide-gesture）',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'direction',
                    description: '*(number)*\n设置全屏时视频的方向，不指定则根据宽高比自动判断',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                    values: [
                        {
                            name: '0',
                            description: '正常竖向',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                        {
                            name: '90',
                            description: '屏幕逆时针90度',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                        {
                            name: '-90',
                            description: '屏幕顺时针90度',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'show-progress',
                    description: '*(boolean)*\n若不设置，宽度大于240时才会显示',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'show-fullscreen-btn',
                    description: '*(boolean)*\n是否显示全屏按钮',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'show-play-btn',
                    description: '*(boolean)*\n是否显示视频底部控制栏的播放按钮',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'show-center-play-btn',
                    description: '*(boolean)*\n是否显示视频中间的播放按钮',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'enable-progress-gesture',
                    description: '*(boolean)*\n是否开启控制进度的手势',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'object-fit',
                    description: '*(string)*\n当视频大小与 video 容器大小不一致时，视频的表现形式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                    values: [
                        {
                            name: 'contain',
                            description: '包含',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                        {
                            name: 'fill',
                            description: '填充',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                        {
                            name: 'cover',
                            description: '覆盖',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'poster',
                    description: '*(string)*\n视频封面的图片网络资源地址或云文件ID（{%version(\'2.3.0\')%}）。若 controls 属性值为 false 则设置 poster 无效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'show-mute-btn',
                    description: '*(boolean)*\n是否显示静音按钮',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'title',
                    description: '*(string)*\n视频的标题，全屏时在顶部展示',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'play-btn-position',
                    description: '*(string)*\n播放按钮的位置',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                    values: [
                        {
                            name: 'bottom',
                            description: 'controls bar上',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                        {
                            name: 'center',
                            description: '视频中间',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'enable-play-gesture',
                    description: '*(boolean)*\n是否开启播放手势，即双击切换播放/暂停',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'auto-pause-if-navigate',
                    description: '*(boolean)*\n当跳转到本小程序的其他页面时，是否自动暂停本页面的视频播放',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'auto-pause-if-open-native',
                    description: '*(boolean)*\n当跳转到其它微信原生页面时，是否自动暂停本页面的视频',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'vslide-gesture',
                    description: '*(boolean)*\n在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'vslide-gesture-in-fullscreen',
                    description: '*(boolean)*\n在全屏模式下，是否开启亮度与音量调节手势',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'show-bottom-progress',
                    description: '*(boolean)*\n是否展示底部进度条',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'ad-unit-id',
                    description: '*(string)*\n视频前贴广告单元ID，更多详情可参考开放能力[视频前贴广告]((video-patch-ad))',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'poster-for-crawler',
                    description: '*(string)*\n用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'show-casting-button',
                    description: '*(boolean)*\n显示投屏按钮。安卓在同层渲染下生效，支持 DLNA 协议；iOS 支持 AirPlay 和 DLNA 协议；鸿蒙 OS 暂不支持。可以通过[VideoContext]((VideoContext))的相关方法进行操作。',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'picture-in-picture-mode',
                    description: '*(string/Array)*\n设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）。鸿蒙 OS 暂不支持',
                    attrType: 'string/Array',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                    values: [
                        {
                            name: '[]',
                            description: '取消小窗',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                        {
                            name: 'push',
                            description: '路由 push 时触发小窗',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                        {
                            name: 'pop',
                            description: '路由 pop 时触发小窗',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'picture-in-picture-show-progress',
                    description: '*(boolean)*\n是否在小窗模式下显示播放进度',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'picture-in-picture-init-position',
                    description: '*(string)*\n小窗模式下小窗的初始显示位置，格式为 (alignment, y)，其中 alignment 表示小窗吸附屏幕左侧还是右侧，可选值为 left、right，y 代表小窗最顶部所在的屏幕高度百分比',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'enable-auto-rotation',
                    description: '*(boolean)*\n是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'show-screen-lock-button',
                    description: '*(boolean)*\n是否显示锁屏按钮，仅在全屏时显示，锁屏后控制栏的操作',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'show-snapshot-button',
                    description: '*(boolean)*\n是否显示截屏按钮，仅在全屏时显示',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'show-background-playback-button',
                    description: '*(boolean)*\n是否展示后台音频播放按钮。鸿蒙 OS 暂不支持。基础库 3.6.0 开始默认值为 true。',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'background-poster',
                    description: '*(string)*\n进入后台音频播放后的通知栏图标（Android 独有）',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'referrer-policy',
                    description: '*(string)*\n格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                    values: [
                        {
                            name: 'origin',
                            description: '发送完整的referrer',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                        {
                            name: 'no-referrer',
                            description: '不发送',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'is-drm',
                    description: '*(boolean)*\n是否为 DRM 视频源',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'is-live',
                    description: '*(boolean)*\n是否为直播源',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'provision-url',
                    description: '*(string)*\nDRM 设备身份认证 url，仅 is-drm 为 true 时生效 (Android)',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'certificate-url',
                    description: '*(string)*\nDRM 设备身份认证 url，仅 is-drm 为 true 时生效 (iOS)',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'license-url',
                    description: '*(string)*\nDRM 获取加密信息 url，仅 is-drm 为 true 时生效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'preferred-peak-bit-rate',
                    description: '*(number)*\n指定码率上界，单位为比特每秒',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindplay',
                    description: '*(eventhandle)*\n当开始/继续播放时触发play事件',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindpause',
                    description: '*(eventhandle)*\n当暂停播放时触发 pause 事件',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindended',
                    description: '*(eventhandle)*\n当播放到末尾时触发 ended 事件',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindtimeupdate',
                    description: '*(eventhandle)*\n播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindfullscreenchange',
                    description: '*(eventhandle)*\n视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction 有效值为 vertical 或 horizontal',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindwaiting',
                    description: '*(eventhandle)*\n视频出现缓冲时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n视频播放出错时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindprogress',
                    description: '*(eventhandle)*\n加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindloadedmetadata',
                    description: '*(eventhandle)*\n视频元数据加载完成时触发。event.detail = {width, height, duration}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindcontrolstoggle',
                    description: '*(eventhandle)*\n切换 controls 显示隐藏时触发。event.detail = {show}',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindenterpictureinpicture',
                    description: '*(eventhandler)*\n播放器进入小窗',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindleavepictureinpicture',
                    description: '*(eventhandler)*\n播放器退出小窗',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindseekcomplete',
                    description: '*(eventhandler)*\nseek 完成时触发 (position iOS 单位 s, Android 单位 ms)',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindcastinguserselect',
                    description: '*(eventhandler)*\n用户选择投屏设备时触发 detail = { state: "success"/"fail" }。鸿蒙 OS 暂不支持',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindcastingstatechange',
                    description: '*(eventhandler)*\n投屏成功/失败时触发 detail = { type, state: "success"/"fail" }。鸿蒙 OS 暂不支持',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
                {
                    name: 'bindcastinginterrupt',
                    description: '*(eventhandler)*\n投屏被中断时触发。鸿蒙 OS 暂不支持',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
                },
            ],
        },
        {
            name: 'view',
            description: '\n(基础库 1.0.0+)\n\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：Skyline （使用最新 <a href="/miniprogram/dev/devtools/nightly.html">Nightly</a> 工具调试）、WebView</p>\n\n## 功能描述\n\n视图容器\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'hover-class',
                    description: '*(string)*\n指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/view.html',
                        },
                    ],
                },
                {
                    name: 'hover-stop-propagation',
                    description: '*(boolean)*\n指定是否阻止本节点的祖先节点出现点击态',
                    attrType: 'boolean',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/view.html',
                        },
                    ],
                },
                {
                    name: 'hover-start-time',
                    description: '*(number)*\n按住后多久出现点击态，单位毫秒',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/view.html',
                        },
                    ],
                },
                {
                    name: 'hover-stay-time',
                    description: '*(number)*\n手指松开后点击态保留时间，单位毫秒',
                    attrType: 'number',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/view.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/view.html',
                },
            ],
        },
        {
            name: 'voip-room',
            description: '\n(基础库 2.11.0+)\n\n> 相关文档: [wx.joinVoIPChat]((wx.joinVoIPChat))\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n\n多人音视频对话。需[用户授权]((open-ability/authorize)) `scope.camera`、`scope.record`。\n\n\n暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。\n\n| 一级类目/主体类型 | 二级类目             | 小程序内容场景                           |\n| ----------------- | -------------------- | ---------------------------------------- |\n| 教育              | 在线视频课程         | 网课、在线培训、讲座等教育类直播         |\n| 医疗              | 互联网医院，公立医院 | 问诊、大型健康讲座等直播                 |\n| 医疗              | 私立医疗机构         | /                                        |\n| 金融              | 银行、信托、基金、证券/期货、证券、期货投资咨询、保险、征信业务、新三板信息服务平台、股票信息服务平台（港股/美股）、消费金融  | 金融产品视频客服理赔、金融产品推广直播等 |\n| 汽车              | 汽车预售服务         | 汽车预售、推广直播                       |\n| 政府主体账号      | /                    | 政府相关工作推广直播、领导讲话直播等     |\n| IT 科技           | 多方通信             | 在线会议                                 |\n| 快递业与邮政       | 寄件/收件             | 视频客服                               |\n\n开通该组件权限后，开发者可在 `joinVoIPChat` 成功后，获取房间成员的 `openid`，传递给 `voip-room` 组件，以显示成员画面。\n\n',
            attributes: [
                {
                    name: 'openid',
                    description: '*(string)*\n进入房间用户的 openid',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                        },
                    ],
                },
                {
                    name: 'mode',
                    description: '*(string)*\n对话窗口类型',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                        },
                    ],
                    values: [
                        {
                            name: 'camera',
                            description: '自身传入 camera',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                                },
                            ],
                        },
                        {
                            name: 'video',
                            description: '其他用户传入 video',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'device-position',
                    description: '*(string)*\n摄像头方向，仅在 mode 为 camera 时有效',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                        },
                    ],
                    values: [
                        {
                            name: 'front',
                            description: '前置',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                                },
                            ],
                        },
                        {
                            name: 'back',
                            description: '后置',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'object-fit',
                    description: '*(string)*\n画面与容器比例不一致时，画面的表现形式',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                        },
                    ],
                    values: [
                        {
                            name: 'fill',
                            description: '填充',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                                },
                            ],
                        },
                        {
                            name: 'contain',
                            description: '包含',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                                },
                            ],
                        },
                        {
                            name: 'cover',
                            description: '覆盖，安卓暂未支持，iOS 生效',
                            references: [
                                {
                                    name: '微信开放文档',
                                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandle)*\n创建对话窗口失败时触发',
                    attrType: 'eventhandle',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html',
                },
            ],
        },
        {
            name: 'web-view',
            description: '\n(基础库 1.6.4+)\n\n> __小程序插件__：不支持\n>\n> __微信 Windows 版__：支持\n>\n> __微信 Mac 版__：支持\n>\n> __微信 鸿蒙 OS 版__：支持\n\n<p class="wedoc-support-tips">渲染框架支持情况：WebView</p>\n\n## 功能描述\n\n承载网页的容器。会自动铺满整个小程序页面，**个人类型的小程序暂不支持使用。**\n\n客户端 6.7.2 版本开始，[`navigationStyle: custom`](../reference/configuration/app.md) 对 [web-view]((web-view)) 组件无效\n\n## 属性说明\n\n',
            attributes: [
                {
                    name: 'src',
                    description: '*(string)*\nwebview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录[小程序管理后台](https://mp.weixin.qq.com/)配置业务域名。',
                    attrType: 'string',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html',
                        },
                    ],
                },
                {
                    name: 'bindmessage',
                    description: '*(eventhandler)*\n网页向小程序 postMessage 时，会在以下特定时机触发并收到消息：小程序后退、组件销毁、分享、复制链接（{%version(\'2.31.1\')%}）。e.detail = { data }，data是多次 postMessage 的参数组成的数组。',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html',
                        },
                    ],
                },
                {
                    name: 'bindload',
                    description: '*(eventhandler)*\n网页加载成功时候触发此事件。e.detail = { src }',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html',
                        },
                    ],
                },
                {
                    name: 'binderror',
                    description: '*(eventhandler)*\n网页加载失败的时候触发此事件。e.detail = { url, fullUrl }，其中 fullUrl 为加载失败时的完整 url',
                    attrType: 'eventhandler',
                    references: [
                        {
                            name: '微信开放文档',
                            url: 'https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html',
                        },
                    ],
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html',
                },
            ],
        },
        {
            name: 'wxs',
            description: {
                kind: 'markdown',
                value: 'WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。',
            },
            attributes: [
                {
                    name: 'src',
                    description: {
                        kind: 'markdown',
                        value: 'src of the script.',
                    },
                },
                {
                    name: 'module',
                    description: {
                        kind: 'markdown',
                        value: 'Module name of the script.',
                    },
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/',
                },
            ],
        },
        {
            name: 'template',
            description: {
                kind: 'markdown',
                value: 'WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。',
            },
            attributes: [
                {
                    name: 'name',
                    description: {
                        kind: 'markdown',
                        value: 'Name of the template.',
                    },
                },
                {
                    name: 'is',
                    description: {
                        kind: 'markdown',
                        value: 'template to use.',
                    },
                },
                {
                    name: 'id',
                    description: {
                        kind: 'markdown',
                        value: 'Identify the template.',
                    },
                },
                {
                    name: 'data',
                    description: {
                        kind: 'markdown',
                        value: 'Datas of the template.',
                    },
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/template.html',
                },
            ],
        },
        {
            name: 'import',
            description: {
                kind: 'markdown',
                value: 'import可以在该文件中使用目标文件定义的template',
            },
            attributes: [
                {
                    name: 'src',
                    description: {
                        kind: 'markdown',
                        value: 'Src of the template.',
                    },
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/import.html',
                },
            ],
        },
        {
            name: 'include',
            description: {
                kind: 'markdown',
                value: 'include 可以将目标文件除了 template/wxs 外的整个代码引入，相当于是拷贝到 include 位置',
            },
            attributes: [
                {
                    name: 'src',
                    description: {
                        kind: 'markdown',
                        value: 'Src of the template.',
                    },
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/import.html',
                },
            ],
        },
        {
            name: 'block',
            description: {
                kind: 'markdown',
                value: 'block 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。',
            },
            attributes: [],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/conditional.html',
                },
            ],
        },
        {
            name: 'slot',
            description: {
                kind: 'markdown',
                value: '<slot> 节点用于承载组件引用时提供的子节点。',
            },
            attributes: [
                {
                    name: 'name',
                    description: {
                        kind: 'markdown',
                        value: 'name of the slot.',
                    },
                },
            ],
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html',
                },
            ],
        },
    ],
    globalAttributes: [
        {
            name: 'class',
            description: {
                kind: 'markdown',
                value: 'A space-separated list of the classes of the element. Classes allows CSS to select and access specific elements via the [class selectors](/en-US/docs/Web/CSS/Class_selectors).',
            },
            references: [
                {
                    name: 'MDN Reference',
                    url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class',
                },
            ],
        },
        {
            name: 'hidden',
            description: {
                kind: 'markdown',
                value: 'A Boolean attribute indicates that the element is hidden or visible.',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/conditional.html',
                },
            ],
        },
        {
            name: 'wx:if',
            description: {
                kind: 'markdown',
                value: 'A Boolean attribute indicates that the element shall be rendered.',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/conditional.html',
                },
            ],
        },
        {
            name: 'wx:elif',
            description: {
                kind: 'markdown',
                value: 'A Boolean attribute indicates that the element shall be rendered. shall follow wx:if.',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/conditional.html',
                },
            ],
        },
        {
            name: 'wx:for',
            description: {
                kind: 'markdown',
                value: 'In a component, by binding an array using the wx:for control property, you can use the data of the array items to re-render this component. The subscript variable name of the current item of the default array defaults to index, and the variable name of the current item of the array defaults to item.',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html',
                },
            ],
        },
        {
            name: 'wx:for-item',
            description: {
                kind: 'markdown',
                value: 'use wx:for-item to specify the variable name of the array’s current element',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html',
                },
            ],
        },
        {
            name: 'wx:for-index',
            description: {
                kind: 'markdown',
                value: 'use wx:for-index to specify the variable name of the array’s current subscript',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html',
                },
            ],
        },
        {
            name: 'wx:key',
            description: {
                kind: 'markdown',
                value: 'If the positions of list items dynamically change or new items are added to the list and you want the items in the list to retain their features and statuses (such as the content input in input and the selection status of switch), you must use wx:key to specify the unique identifiers of the items in the list.',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html',
                },
            ],
        },
        {
            name: 'wx:else',
            description: {
                kind: 'markdown',
                value: 'The else condition of a if statement.',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html',
                },
            ],
        },
        {
            name: 'wx:scope-data',
            description: {
                kind: 'markdown',
                value: 'scope data of the element/component.',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/list.html',
                },
            ],
        },
        {
            name: 'slot',
            description: {
                kind: 'markdown',
                value: 'slot name',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html',
                },
            ],
        },
        {
            name: 'id',
            description: {
                kind: 'markdown',
                value: 'Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/component.html',
                },
            ],
        },
        {
            name: 'style',
            description: {
                kind: 'markdown',
                value: 'Contains [CSS](/en-US/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute has mainly the purpose of allowing for quick styling, for example for testing purposes.',
            },
            references: [
                {
                    name: 'MDN Reference',
                    url: 'https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style',
                },
            ],
        },
        {
            name: 'bind:touchstart',
            description: {
                kind: 'markdown',
                value: '手指触摸动作开始',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:touchstart',
            description: {
                kind: 'markdown',
                value: '手指触摸动作开始',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:touchstart',
            description: {
                kind: 'markdown',
                value: '手指触摸动作开始',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:touchstart',
            description: {
                kind: 'markdown',
                value: '手指触摸动作开始',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:touchstart',
            description: {
                kind: 'markdown',
                value: '手指触摸动作开始',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:touchmove',
            description: {
                kind: 'markdown',
                value: '手指触摸后移动',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:touchmove',
            description: {
                kind: 'markdown',
                value: '手指触摸后移动',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:touchmove',
            description: {
                kind: 'markdown',
                value: '手指触摸后移动',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:touchmove',
            description: {
                kind: 'markdown',
                value: '手指触摸后移动',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:touchmove',
            description: {
                kind: 'markdown',
                value: '手指触摸后移动',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:touchcancel',
            description: {
                kind: 'markdown',
                value: '手指触摸动作被打断，如来电提醒，弹窗',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:touchcancel',
            description: {
                kind: 'markdown',
                value: '手指触摸动作被打断，如来电提醒，弹窗',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:touchcancel',
            description: {
                kind: 'markdown',
                value: '手指触摸动作被打断，如来电提醒，弹窗',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:touchcancel',
            description: {
                kind: 'markdown',
                value: '手指触摸动作被打断，如来电提醒，弹窗',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:touchcancel',
            description: {
                kind: 'markdown',
                value: '手指触摸动作被打断，如来电提醒，弹窗',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:touchend',
            description: {
                kind: 'markdown',
                value: '手指触摸动作结束',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:touchend',
            description: {
                kind: 'markdown',
                value: '手指触摸动作结束',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:touchend',
            description: {
                kind: 'markdown',
                value: '手指触摸动作结束',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:touchend',
            description: {
                kind: 'markdown',
                value: '手指触摸动作结束',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:touchend',
            description: {
                kind: 'markdown',
                value: '手指触摸动作结束',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:tap',
            description: {
                kind: 'markdown',
                value: '手指触摸后马上离开',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:tap',
            description: {
                kind: 'markdown',
                value: '手指触摸后马上离开',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:tap',
            description: {
                kind: 'markdown',
                value: '手指触摸后马上离开',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:tap',
            description: {
                kind: 'markdown',
                value: '手指触摸后马上离开',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:tap',
            description: {
                kind: 'markdown',
                value: '手指触摸后马上离开',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:longpress',
            description: {
                kind: 'markdown',
                value: '手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:longpress',
            description: {
                kind: 'markdown',
                value: '手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:longpress',
            description: {
                kind: 'markdown',
                value: '手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:longpress',
            description: {
                kind: 'markdown',
                value: '手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:longpress',
            description: {
                kind: 'markdown',
                value: '手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:longtap',
            description: {
                kind: 'markdown',
                value: '手指触摸后，超过350ms再离开（推荐使用longpress事件代替）',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:longtap',
            description: {
                kind: 'markdown',
                value: '手指触摸后，超过350ms再离开（推荐使用longpress事件代替）',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:longtap',
            description: {
                kind: 'markdown',
                value: '手指触摸后，超过350ms再离开（推荐使用longpress事件代替）',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:longtap',
            description: {
                kind: 'markdown',
                value: '手指触摸后，超过350ms再离开（推荐使用longpress事件代替）',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:longtap',
            description: {
                kind: 'markdown',
                value: '手指触摸后，超过350ms再离开（推荐使用longpress事件代替）',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:transitionend',
            description: {
                kind: 'markdown',
                value: '会在 WXSS transition 或 wx.createAnimation 动画结束后触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:transitionend',
            description: {
                kind: 'markdown',
                value: '会在 WXSS transition 或 wx.createAnimation 动画结束后触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:transitionend',
            description: {
                kind: 'markdown',
                value: '会在 WXSS transition 或 wx.createAnimation 动画结束后触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:transitionend',
            description: {
                kind: 'markdown',
                value: '会在 WXSS transition 或 wx.createAnimation 动画结束后触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:transitionend',
            description: {
                kind: 'markdown',
                value: '会在 WXSS transition 或 wx.createAnimation 动画结束后触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:animationstart',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 动画开始时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:animationstart',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 动画开始时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:animationstart',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 动画开始时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:animationstart',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 动画开始时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:animationstart',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 动画开始时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:animationiteration',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 一次迭代结束时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:animationiteration',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 一次迭代结束时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:animationiteration',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 一次迭代结束时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:animationiteration',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 一次迭代结束时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:animationiteration',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 一次迭代结束时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:animationend',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 动画完成时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:animationend',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 动画完成时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:animationend',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 动画完成时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:animationend',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 动画完成时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:animationend',
            description: {
                kind: 'markdown',
                value: '会在一个 WXSS animation 动画完成时触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'bind:touchforcechange',
            description: {
                kind: 'markdown',
                value: '在支持 3D Touch 的 iPhone 设备，重按时会触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'catch:touchforcechange',
            description: {
                kind: 'markdown',
                value: '在支持 3D Touch 的 iPhone 设备，重按时会触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-bind:touchforcechange',
            description: {
                kind: 'markdown',
                value: '在支持 3D Touch 的 iPhone 设备，重按时会触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'capture-catch:touchforcechange',
            description: {
                kind: 'markdown',
                value: '在支持 3D Touch 的 iPhone 设备，重按时会触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
        {
            name: 'mut-bind:touchforcechange',
            description: {
                kind: 'markdown',
                value: '在支持 3D Touch 的 iPhone 设备，重按时会触发',
            },
            references: [
                {
                    name: '微信开放文档',
                    url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html',
                },
            ],
            attrType: 'eventhandle',
        },
    ],
};
//# sourceMappingURL=datas.js.map