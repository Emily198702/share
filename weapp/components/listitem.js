"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//page-type: 0 收藏页 不显示浏览和点赞  1 我的物品 显示编辑和删除 
_core["default"].component({
  store: _store["default"],
  props: ['goodsList', 'pageType'],
  data: {},
  watch: {
    goodsList: function goodsList(val) {
      console.log(val.map(function (f) {
        return f.image;
      }));
    }
  },
  methods: {
    showDetail: function showDetail(id) {
      var _this = this;

      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/getGoodsById?id=").concat(id),
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            var goods = res.data;

            _this.$store.dispatch('setItem', goods);

            console.log(goods);

            _this.$parent.$navigate({
              url: '/pages/detail'
            });
          } else {
            console.log("根据id获取物品失败" + res.statusCode);
          }
        },
        fail: function fail() {
          console.log("fail：根据id获取物品失败");
        }
      });
    },
    tapEdit: function tapEdit(id) {
      this.$parent.$navigate({
        url: '/pages/newGoods?goodsId=' + id
      });
    },
    tapDel: function tapDel(id) {
      console.log("del");

      var _this = this;

      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/delGoods?id=").concat(id),
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.data > 0) {
            console.log('删除物品delGoods成功');
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 3000
            }); //_this.$parent.getData()

            _this.$emit('refresh'); //触发事件

          } else {
            console.log('删除物品异常');
          }
        },
        fail: function fail(res) {
          console.log('fail：删除物品失败');
        }
      });
    }
  }
}, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{"dateshow":{"path":"dateshow"},"imgshow":{"path":"imgshow"},"category":{"path":"category"}},"on":{}}, handlers: {'39-20': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapEdit(item.id)
      })();
    
  }},'39-21': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapDel(item.id)
      })();
    
  }},'39-22': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-23': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }},'39-24': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.showDetail(item.id)
      })();
    
  }}}, models: {} });