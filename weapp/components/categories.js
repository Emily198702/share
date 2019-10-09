"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: ['pageType'],
  data: {
    categories: []
  },
  methods: {
    tapNew: function tapNew(id) {
      console.log("tap", id);

      if (this.pageType == "new") {
        //发布页面选择类别
        var url = '/pages/newGoods?catId=' + id;
        this.$parent.$navigate({
          url: url
        });
      } else {
        //首页查询选择类别
        var _url = '/pages/search?catId=' + id;

        this.$parent.$navigate({
          url: _url
        });
      }
    }
  },
  ready: function ready() {
    //组件生命周期函数-在组件布局完成后执行)	
    var _this = this;

    wx.request({
      url: "".concat(this.$app.$options.globalData.host, "/selectCategory?type=1"),
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function success(res) {
        if (res.statusCode == 200) {
          //console.log(res.data)
          _this.categories = res.data;
        } else {
          console.log("获取类别列表异常" + res.statusCode);
        }
      },
      fail: function fail() {
        console.log("获取类别列表失败");
      },
      complete: function complete() {// complete
      }
    });
  }
}, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'40-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapNew(item.id)
      })();
    
  }}}, models: {} });