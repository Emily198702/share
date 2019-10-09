"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var APP_ID = 'wx2ff9336c8b22516d';
var APP_SECRET = '594abf8575bcf4dd1ca510b479554542';

_core["default"].page({
  store: _store["default"],
  data: {
    userInfo: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  methods: {
    bindGetUserInfo: function bindGetUserInfo(e) {
      var userInfo = e.$wx.detail.userInfo;
      var that = this;
      var openid = this.$app.$options.globalData.openid;

      if (openid) {
        that.addUser(userInfo);
      } else {
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
                that.$app.$options.globalData.openid = res.data.openid;
                that.addUser(userInfo);
              }
            });
          }
        });
      }
    },
    addUser: function addUser(userInfo) {
      if (userInfo) {
        //用户按了允许授权按钮
        userInfo.openid = this.$app.$options.globalData.openid;
        var that = this; //插入登录的用户的相关信息到数据库

        wx.request({
          url: "".concat(that.$app.$options.globalData.host, "/user/add"),
          data: userInfo,
          method: 'POST',
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            //从数据库获取用户信息
            console.log(res.data);
            that.$app.$options.globalData.userInfo = res.data;
            console.log("插入小程序登录用户信息成功！");
          }
        }); //授权成功后，跳转进入小程序首页

        wx.switchTab({
          url: '/pages/index2'
        });
      } else {
        //用户按了拒绝按钮
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
          showCancel: false,
          confirmText: '返回授权',
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击了“返回授权”');
            }
          }
        });
      }
    },
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
  onLoad: function onLoad(options) {
    var that = this; // 查看是否授权

    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function success(res) {
              //从数据库获取用户信息
              var openid = that.$app.$options.globalData.openid;

              if (openid) {
                that.queryUserInfo();
              } else {
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
                        that.$app.$options.globalData.openid = res.data.openid;
                        that.queryUserInfo();
                      }
                    });
                  }
                });
              }
            }
          });
        }
      }
    });
  }
}, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'5-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event)
      })();
    
  }}}, models: {} });