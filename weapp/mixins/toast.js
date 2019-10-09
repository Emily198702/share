"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var toastMixin =
/*#__PURE__*/
function (_wepy$mixin) {
  _inherits(toastMixin, _wepy$mixin);

  function toastMixin() {
    _classCallCheck(this, toastMixin);

    return _possibleConstructorReturn(this, _getPrototypeOf(toastMixin).apply(this, arguments));
  }

  _createClass(toastMixin, [{
    key: "onLoad",
    value: function onLoad() {
      // onLoad生命周期钩子函数
      this.showToast();
    }
  }, {
    key: "noMore",
    value: function noMore() {
      // 普通方法直接定义到class的静态方法
      _core["default"].showToast({
        // wepy.showToast 等同于 wx.showToast
        title: '没有更多了...',
        icon: 'none',
        duration: 1500
      });
    }
  }, {
    key: "showToast",
    value: function showToast() {
      _core["default"].showToast({
        title: '拼命加载中...',
        icon: 'loading',
        duration: 3000
      });
    }
  }, {
    key: "hideToast",
    value: function hideToast() {
      _core["default"].hideToast();
    }
  }]);

  return toastMixin;
}(_core["default"].mixin);

exports["default"] = toastMixin;