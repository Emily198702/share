"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _store = _interopRequireDefault(require('../store/index.js'));

var _toast = _interopRequireDefault(require('../mixins/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  hooks: {
    // Page 级别 hook, 只对当前 Page 的 setData 生效。
    'before-setData': function beforeSetData(dirty) {}
  },
  mixins: [_toast["default"]],
  data: {
    userInfo: null,
    isAgree: true,
    tempFilePaths: [],
    goods: {
      title: '',
      description: '',
      image: '',
      contact: '',
      tel: '',
      location: '',
      category: 0,
      isTop: 0
    },
    isEdit: false,
    editId: null,
    filePaths: [],
    addresses: [],
    mapshow: false
  },
  computed: {},
  methods: {
    showModal: function showModal(msg) {
      wx.showModal({
        title: '提示',
        content: msg,
        showCancel: true
      });
    },
    showToast: function showToast(msg) {
      wx.showToast({
        icon: 'success',
        title: msg
      });
    },
    upload: function upload() {
      console.log("上传。。。");

      var _this = this;

      wx.chooseImage({
        count: 9,
        // 默认9
        sizeType: ['original', 'compressed'],
        // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'],
        // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          wx.showToast({
            title: '正在上传...',
            icon: 'loading',
            mask: true,
            duration: 1000
          }); // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

          var tempFilePaths = res.tempFilePaths;
          _this.tempFilePaths = _this.tempFilePaths.concat(tempFilePaths);
          console.log(_this.tempFilePaths);
          /**
           * 上传完成后把文件上传到服务器
           */

          var count = 0;

          for (var i = 0, h = tempFilePaths.length; i < h; i++) {
            //上传文件
            wx.uploadFile({
              url: "".concat(_this.$app.$options.globalData.host, "/wxUpload"),
              //'https://tomcat.guoyingxu.com/aidu/wxUpload',  //
              filePath: tempFilePaths[i],
              name: 'uploadFile',
              header: {
                "Content-Type": "multipart/form-data"
              },
              success: function success(res) {
                if (res.statusCode == '200') {
                  var tmp = JSON.parse(res.data);

                  if (tmp.code == '1') {
                    _this.filePaths.push(_this.$app.$options.globalData.host + 'upload/' + tmp.msg);

                    count++; //如果是最后一张,则隐藏等待中  

                    if (count == tempFilePaths.length) {
                      wx.hideToast();
                    }
                  } else {
                    console.log('上传文件服务器端异常', tmp.exData);
                  }
                } else {
                  console.log('上传文件服务器端异常', res.statusCode);
                }
              },
              fail: function fail(res) {
                wx.hideToast();
                wx.showModal({
                  title: '错误提示',
                  content: '上传图片失败',
                  showCancel: false,
                  success: function success(res) {}
                });
              }
            });
          }
        }
      });
    },
    listenerButtonDelImage: function listenerButtonDelImage(e) {
      console.log("listenerButtonDelImage");
      var index = e.target.dataset.index; //预览图片的编号

      this.tempFilePaths.splice(index, 1);
      console.log(this.tempFilePaths);
    },
    listenerButtonPreviewImage: function listenerButtonPreviewImage(e) {
      var index = e.target.dataset.index; //预览图片的编号

      var _this = this;

      wx.previewImage({
        current: _this.tempFilePaths[index],
        //预览图片链接
        urls: _this.tempFilePaths,
        //图片预览list列表
        success: function success(res) {//console.log(res);
        },
        fail: function fail() {//console.log('fail')
        }
      });
    },
    tapAgree: function tapAgree() {
      this.isAgree = !this.isAgree;
    },
    newGoods: function newGoods() {
      wx.showLoading({
        title: '保存中...'
      });

      var _this = this;

      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/new"),
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        // 设置请求的 header
        data: _this.goods,
        success: function success(res) {
          if (res.statusCode == 200) {
            var goods = res.data;
            wx.showModal({
              title: '提示',
              content: '保存成功',
              showCancel: false,
              success: function success(res) {
                _this.$store.dispatch('setItem', goods);

                _this.$navigate({
                  url: '/pages/detail'
                });
              }
            });
          } else {
            console.log("发布物品失败");
            wx.showModal({
              title: '提示',
              content: '保存失败，请联系管理员',
              showCancel: false
            });
          }
        },
        fail: function fail() {
          console.log("fail:发布物品失败");
        },
        complete: function complete() {
          wx.hideLoading();
        }
      });
    },
    editGoods: function editGoods() {
      var _this = this;

      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/update"),
        method: 'POST',
        data: this.goods,
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            var goods = res.data;
            wx.showModal({
              title: '提示',
              content: '修改成功',
              showCancel: false,
              success: function success(res) {
                _this.$store.dispatch('setItem', goods);

                _this.$navigate({
                  url: '/pages/detail'
                });
              }
            });
          } else {
            console.log("修改物品失败" + res.statusCode + res.data.message);
            wx.showModal({
              title: '提示',
              content: '保存失败，请联系管理员',
              showCancel: false
            });
          }
        },
        fail: function fail() {
          console.log("fail：修改信息失败");
        }
      });
    },
    //表单提交按钮
    formSubmit: function formSubmit(e) {
      if (!this.isAgree) {
        this.showModal("请同意《发布须知》");
        return;
      }

      if (!this.goods.title) {
        this.showModal("请填写名称");
        return;
      }

      if (this.goods.title.length > 50) {
        this.showModal("名称太长");
        return;
      }

      if (this.goods.description.length > 1000) {
        this.showModal("描述太长");
        return;
      }

      if (!this.goods.contact) {
        this.showModal("请填写联系人");
        return;
      }

      this.goods.image = this.filePaths.toString();
      this.goods.nickName = this.userInfo.nickName;
      this.goods.avatarUrl = this.userInfo.avatarUrl;
      this.goods.createBy = this.userInfo.openid;

      if (this.isEdit) {
        this.goods.updateBy = this.userInfo.id;
        this.editGoods();
      } else {
        var top = e.$wx.detail.value.top;
        this.goods.isTop = top ? 1 : 0;
        this.newGoods();
      }
    },
    getEditGoods: function getEditGoods(id) {
      var _this = this;

      wx.request({
        url: "".concat(this.$app.$options.globalData.host, "/getGoodsById?id=").concat(id),
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode == '200') {
            _this.goods = res.data;
            _this.tempFilePaths = _this.goods.image.split(",");
            _this.filePaths = _this.goods.image.split(",");
          } else {
            console.log('根据id取goods异常');
          }
        },
        fail: function fail() {
          console.log('根据id取goods失败');
        }
      });
    },
    gotomap: function gotomap() {
      var _this = this;

      wx.getSetting({
        success: function success(res) {
          console.log(res.authSetting['scope.userLocation']);

          if (res.authSetting['scope.userLocation']) {
            _this.$navigate({
              url: '/pages/gdMap'
            });
          } else {
            wx.authorize({
              scope: 'scope.userLocation',
              success: function success() {
                // 用户已同意
                _this.$navigate({
                  url: '/pages/gdMap'
                });
              }
            });
          }
        }
      });
    },
    getPermission: function getPermission() {
      var _this = this;

      wx.getSetting({
        success: function success(res) {
          console.log(res.authSetting['scope.userLocation']);

          if (res.authSetting['scope.userLocation']) {
            _this.getLocate();
          } else {
            wx.authorize({
              scope: 'scope.userLocation',
              success: function success() {
                // 用户已同意
                _this.getLocate();
              }
            });
          }
        }
      });
    },
    getLocate: function getLocate() {
      var amapFile = require('../libs/amap-wx.js');

      var that = this;
      var myAmapFun = new amapFile.AMapWX({
        key: '204a763612e0602d5ddc2101aa44ca0e'
      });
      myAmapFun.getRegeo({
        success: function success(data) {
          that.goods.location = data[0].name, console.log(data[0].regeocodeData);
          var addArr = [];
          var dataAll = data[0].regeocodeData.pois;
          console.log(dataAll.length);

          for (var i = 0; i < dataAll.length; i++) {
            addArr.push({
              "id": i,
              "address": dataAll[i]
            });
          }

          that.addresses = addArr;
        },
        fail: function fail(info) {// wx.showModal({title:info.errMsg})
        }
      });
    }
  },
  onLoad: function onLoad(options) {
    // 生命周期回调—监听页面加载
    this.userInfo = this.$app.$options.globalData.userInfo;

    if (options.goodsId) {
      this.isEdit = true;
      this.editId = options.goodsId;
      this.getEditGoods(this.editId);
    } else {
      console.log(options);
      this.goods.category = options.catId; //传入id

      this.goods = Object.assign({}, _objectSpread({}, this.goods), {
        contact: this.userInfo.nickName
      });
      this.getPermission();
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'7-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonDelImage($event)
      })();
    
  }},'7-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.listenerButtonPreviewImage($event)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.upload($event)
      })();
    
  }},'7-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotomap($event)
      })();
    
  }},'7-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.tapAgree($event)
      })();
    
  }},'7-6': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "goods.title",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "title", $v);
      
    }
    },'1': {
      type: "input",
      expr: "goods.description",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "description", $v);
      
    }
    },'2': {
      type: "input",
      expr: "goods.contact",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "contact", $v);
      
    }
    },'3': {
      type: "input",
      expr: "goods.tel",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "tel", $v);
      
    }
    },'4': {
      type: "input",
      expr: "goods.location",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.goods, "location", $v);
      
    }
    }} });