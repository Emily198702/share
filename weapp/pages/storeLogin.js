"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  data: {
    userInfo: null
  },
  methods: {
    queryUserInfo: function queryUserInfo() {
      console.log("".concat(this.$app.$options.globalData.host, "/user/selectByOpenid?openid=").concat(this.$app.$options.globalData.openid));
      var that = this;
      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/user/selectByOpenid?openid=").concat(this.$app.$options.globalData.openid),
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log('查询出用户信息：', res);
          that.$app.$options.globalData.userInfo = res.data;
          wx.switchTab({
            url: '/pages/index2'
          });
        }
      });
    }
  },
  onLoad: function onLoad(options) {}
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} });