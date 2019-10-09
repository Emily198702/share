"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  data: {
    condition: null,
    goodsList: [],
    page: 0,
    pageSize: 5,
    curUrl: null,
    noMore: false
  },
  methods: {
    getData: function getData() {
      var url = this.curUrl + "page=".concat(this.page, "&pageSize=").concat(this.pageSize);

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
            var len = res.data.length;

            if (len == 0 || _this.page == 0 && len < 10) {
              _this.noMore = true;
            }

            if (len > 0) {
              _this.goodsList = _this.goodsList.concat(res.data);
            }
          } else {
            console.log("查询页面获取数据异常" + res.statusCode);
          }
        },
        fail: function fail() {
          console.log("查询页面获取数据失败");
        },
        complete: function complete() {// complete
        }
      });
    },
    search: function search() {
      console.log("search", this.condition);
      this.goodsList = [];
      this.page = 0;
      this.curUrl = "".concat(this.$app.$options.globalData.host, "/selectByPage?");

      if (this.condition) {
        this.curUrl = "".concat(this.$app.$options.globalData.host, "/selectByCondition?condition=").concat(this.condition, "&");
      }

      this.getData();
    }
  },
  onLoad: function onLoad(options) {
    console.log("onLoad search...");

    if (options.catId) {
      this.curUrl = "".concat(this.$app.$options.globalData.host, "/selectByCat?catId=").concat(options.catId, "&");
      this.getData();
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    console.log('下拉刷新 ');
    this.page = 0;
    this.getData();
  },
  onReachBottom: function onReachBottom() {
    this.page = this.page + 1;
    this.getData(this.page);
  }
}, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} }, {info: {"components":{"listitem":{"path":"../components/listitem"}},"on":{}}, handlers: {'9-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.search($event)
      })();
    
  }}}, models: {'5': {
      type: "input",
      expr: "condition",
      handler: function set ($v) {
      var _vm=this;
        _vm.condition = $v;
      
    }
    }} });