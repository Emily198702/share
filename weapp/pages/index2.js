"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _store = _interopRequireDefault(require('../store/index.js'));

var _toast = _interopRequireDefault(require('../mixins/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  hooks: {
    // Page 级别 hook, 只对当前 Page 的 setData 生效。
    'before-setData': function beforeSetData(dirty) {}
  },
  data: {
    goodsList: [],
    selectedId: 0,
    page: 0,
    pageSize: 5,
    noMore: false
  },
  computed: {},
  methods: {
    selectMe: function selectMe(index) {
      this.selectedId = index;
    },
    clickMe: function clickMe() {
      console.log(this);
      this.$navigate({
        url: '/pages/search'
      });
    },
    getData: function getData(page) {
      var _this = this;

      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/selectByPage?page=").concat(this.page, "&pageSize=").concat(this.pageSize),
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            console.log(res.data);
            var len = res.data.length;

            if (len == 0) {
              _this.noMore = true;
            } else {
              _this.goodsList = _this.goodsList.concat(res.data);
            }
          } else {
            console.log("首页获取列表信息异常" + res.statusCode);
          }

          wx.stopPullDownRefresh();
        },
        fail: function fail() {
          console.log("获取首页数据失败");
        },
        complete: function complete() {// complete
        }
      });
    }
  },
  onLoad: function onLoad() {
    console.log("onLoad...");
    this.getData(0);
  },
  onPullDownRefresh: function onPullDownRefresh() {
    console.log('下拉刷新 ');
    this.page = 0;
    this.goodsList = [];
    this.getData(this.page);
  },
  onReachBottom: function onReachBottom() {
    this.page = this.page + 1;
    this.getData(this.page);
  }
}, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} }, {info: {"components":{"listitem":{"path":"../components/listitem"},"categories":{"path":"../components/categories"}},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clickMe($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(0)
      })();
    
  }},'6-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.selectMe(1)
      })();
    
  }}}, models: {} });