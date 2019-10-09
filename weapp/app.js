"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _eventHub = _interopRequireDefault(require('common/eventHub.js'));

var _x = _interopRequireDefault(require('vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

var APP_ID = 'wx2ff9336c8b22516d';
var APP_SECRET = '594abf8575bcf4dd1ca510b479554542';

_core["default"].app({
  hooks: {// App 级别 hook，对整个 App 生效
    // 同时存在 Page hook 和 App hook 时，优先执行 Page hook，返回值再交由 App hook 处
    // 'before-setData': function (dirty) {
    //   console.log('setData dirty: ', dirty);
    //   return dirty;
    // }
  },
  globalData: {
    userInfo: null,
    host: 'http://localhost:8000',
    //'https://tomcat.guoyingxu.com/share/',// www.guoyingxu.com
    openid: null
  },
  onLaunch: function onLaunch() {
    this.getOpenIdTap();
  },
  methods: {
    getOpenIdTap: function getOpenIdTap() {
      var that = this;
      wx.login({
        success: function success(res) {
          wx.request({
            //获取openid接口
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid: APP_ID,
              secret: APP_SECRET,
              js_code: res.code,
              grant_type: 'authorization_code'
            },
            method: 'GET',
            success: function success(res) {
              console.log(res.data);
              that.$options.globalData.openid = res.data.openid;
            }
          });
        }
      });
    }
  }
}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1}, {a: 1});