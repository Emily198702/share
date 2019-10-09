"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  data: {
    userInfo: null,
    goodsList: [],
    selectedId: 0
  },
  methods: {
    selectMe: function selectMe(index) {
      this.selectedId = index;
      this.getData();
    },
    getData: function getData() {
      var url = "".concat(this.$app.$options.globalData.host, "/selectByOpenid?openid=").concat(this.userInfo.openid, "&status=").concat(this.selectedId);

      var _this = this;

      wx.request({
        url: url,
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            console.log(res.data);
            _this.goodsList = res.data;
          } else {
            console.log("获取我的物品异常" + res.statusCode);
          }
        },
        fail: function fail() {
          console.log("获取我的物品失败");
        },
        complete: function complete() {// complete
        }
      });
    }
  },
  onLoad: function onLoad(options) {
    this.userInfo = this.$app.$options.globalData.userInfo;
    this.getData();
  }
}, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{"13-4":["refresh"]}}, handlers: {'13-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'13-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(2)
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(3)
      })();
    
  }},'13-4': {"refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getData($event)
      })();
    
  }}}, models: {} });