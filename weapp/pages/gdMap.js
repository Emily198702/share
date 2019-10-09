"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var amapFile = require('../libs/amap-wx.js');

_core["default"].page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
    addresses: [],
    selected: 0
  },
  methods: {
    tapMe: function tapMe(id) {
      this.selected = id;
    }
  },
  onLoad: function onLoad() {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({
      key: '204a763612e0602d5ddc2101aa44ca0e'
    });
    myAmapFun.getRegeo({
      iconPath: "../assets/images/marker.png",
      iconWidth: 22,
      iconHeight: 32,
      success: function success(data) {
        var marker = [{
          id: data[0].id,
          latitude: data[0].latitude,
          longitude: data[0].longitude,
          iconPath: data[0].iconPath,
          width: data[0].width,
          height: data[0].height
        }];
        that.markers = marker;
        that.latitude = data[0].latitude;
        that.longitude = data[0].longitude;
        that.textData = {
          name: data[0].name,
          desc: data[0].desc
        };
        console.log(data[0].regeocodeData);
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
}, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.tapMe(item.id)
      })();
    
  }}}, models: {} });