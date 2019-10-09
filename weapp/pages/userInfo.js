"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(1);

var _store = _interopRequireDefault(require('../store/index.js'));

var _test = _interopRequireDefault(require('../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    userInfo: null,
    collectNum: 0
  },
  computed: {},
  methods: {
    getCNum: function getCNum() {
      var _this = this;

      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/user/getCNum?openid=").concat(this.userInfo.openid),
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            console.log(res.data);
            _this.collectNum = res.data;
          } else {
            console.log("index.js wx.request statusCode" + res.statusCode);
          }
        },
        fail: function fail() {
          console.log("获取收藏数量失败");
        }
      });
    },
    gotogoods: function gotogoods() {
      this.$navigate({
        url: '/pages/myGoods'
      });
    },
    gotocollection: function gotocollection() {
      this.$navigate({
        url: '/pages/myCollection'
      });
    },
    gotostore: function gotostore() {
      this.$navigate({
        url: '/pages/storeLogin'
      });
    }
  },
  onLoad: function onLoad() {},
  onShow: function onShow() {
    this.userInfo = this.$app.$options.globalData.userInfo;
    this.getCNum();
  }
}, {info: {"components":{},"on":{}}, handlers: {'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotogoods($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotocollection($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotostore($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotogoods($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotocollection($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotostore($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotogoods($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotocollection($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotostore($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotogoods($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotocollection($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotostore($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotogoods($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotocollection($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotostore($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotogoods($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotocollection($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotostore($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotogoods($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotocollection($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotostore($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotogoods($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotocollection($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotostore($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotogoods($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotocollection($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotostore($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotogoods($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotocollection($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotostore($event)
      })();
    
  }}}, models: {} });