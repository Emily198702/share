"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  data: {
    item: {},
    isCollect: false,
    collectSrc: '../assets/images/collect1.png',
    userInfo: null,
    isLike: false,
    likeSrc: '../assets/images/like.png'
  },
  methods: {
    updateBrowse: function updateBrowse() {
      this.item.browse = this.item.browse + 1;
      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/update"),
        method: 'POST',
        data: this.item,
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode == '200') {
            console.log('保存浏览次数成功');
          } else {
            console.log("保存浏览次数失败：" + res.statusCode);
          }
        },
        fail: function fail() {
          console.log("fail：保存浏览次数失败");
        }
      });
    },
    gotomain: function gotomain() {
      console.log("click gotomain"); //this.$navigate( {url:'/pages/index2'})

      wx.switchTab({
        url: '/pages/index2'
      });
    },
    tapCollect: function tapCollect() {
      console.log("click collect");
      this.isCollect = !this.isCollect;
      var msg = '收藏成功';

      if (this.isCollect) {
        this.collectSrc = '../assets/images/collect2.png';
      } else {
        this.collectSrc = '../assets/images/collect1.png';
        msg = '取消收藏成功';
      }

      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/user/saveCollection?openid=").concat(this.userInfo.openid, "&goodsId=").concat(this.item.id, "&isCollect=").concat(this.isCollect),
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.data == 1) {
            console.log('保存收藏成功');
            wx.showToast({
              title: msg,
              icon: 'success',
              duration: 3000
            });
          } else {
            console.log("保存收藏信息异常" + res.statusCode);
          }
        },
        fail: function fail() {
          console.log("保存收藏信息失败");
        }
      });
    },
    remark: function remark() {
      console.log("click remark");
    },
    checkCollect: function checkCollect() {
      var _this = this;

      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/user/checkCollection?openid=").concat(this.userInfo.openid, "&goodsId=").concat(this.item.id),
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            console.log(res.data);

            if (res.data > 0) {
              _this.isCollect = true;
              _this.collectSrc = '../assets/images/collect2.png';
            } else {
              _this.isCollect = false;
              _this.collectSrc = '../assets/images/collect1.png';
            }
          } else {
            console.log("查询收藏异常" + res.statusCode);
          }
        },
        fail: function fail() {
          console.log("获取收藏信息失败");
        }
      });
    },
    checkLike: function checkLike() {
      var _this = this;

      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/user/checkLike?openid=").concat(this.userInfo.openid, "&goodsId=").concat(this.item.id),
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            console.log(res.data);

            if (res.data > 0) {
              _this.isLike = true;
              _this.likeSrc = '../assets/images/like3.png';
            } else {
              _this.isLike = false;
              _this.likeSrc = '../assets/images/like.png';
            }
          } else {
            console.log("查询是否点赞异常" + res.statusCode);
          }
        },
        fail: function fail() {
          console.log("查询是否点赞失败");
        }
      });
    },
    tapLike: function tapLike() {
      console.log('tapLike');

      if (this.isLike) {
        wx.showModal({
          title: '提醒',
          content: '点赞不能反悔哦...',
          showCancel: false
        });
        return;
      } else {
        this.isLike = true;
        this.likeSrc = '../assets/images/like3.png';
        this.item = Object.assign({}, _objectSpread({}, this.item), {
          likeMe: this.item.likeMe + 1
        });
      }

      var likeInfo = {};
      likeInfo.openid = this.userInfo.openid;
      likeInfo.avatarUrl = this.userInfo.avatarUrl;
      likeInfo.goodsId = this.item.id;
      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/user/saveLike"),
        method: 'POST',
        data: likeInfo,
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.data == 1) {
            console.log('保存点赞成功');
            wx.showToast({
              title: '点赞成功',
              icon: 'success',
              duration: 3000
            });
          } else {
            console.log("保存点赞异常" + res.statusCode);
          }
        },
        fail: function fail() {
          console.log("保存收藏信息失败");
        }
      });
    }
  },
  onLoad: function onLoad(options) {
    // 生命周期回调—监听页面加载
    wx.showShareMenu({
      // 要求小程序返回分享目标信息
      withShareTicket: true
    });
    this.item = this.$store.state.item;
    this.userInfo = this.$app.$options.globalData.userInfo;
    this.checkCollect();
    this.checkLike();
  },
  onShareAppMessage: function onShareAppMessage(ops) {
    if (ops.from === 'button') {
      console.log('button');
    }

    return {
      path: "/pages/index2",
      success: function success(res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function fail(res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    };
  },
  onShow: function onShow() {
    this.updateBrowse();
  }
}, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"../components/dateshow"},"imgshow":{"path":"../components/imgshow"},"category":{"path":"../components/category"}},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapLike($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomain($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapCollect($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.remark($event)
      })();
    
  }}}, models: {} });