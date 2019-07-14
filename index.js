"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      content: '';\n      display: block;\n      animation: ", " ", "s 1 cubic-bezier(", ") normal backwards ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        animation: ", " ", "s 1 cubic-bezier(", ") normal backwards ", ";\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      100% {\n        animation-timing-function: cubic-bezier(", ");\n        transform: translateY(-", "px);\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      100% {\n        animation-timing-function: cubic-bezier(", ");\n        transform: translateX(", "px);\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DEFAULT_X_BEZIER = '0.5, 0.5, 0.5, 0.5';
var DEFAULT_Y_BEZIER = '0.1, 0.34, 0.4, 1.44';

var Catapult =
/*#__PURE__*/
function (_Component) {
  _inherits(Catapult, _Component);

  function Catapult(props) {
    var _this;

    _classCallCheck(this, Catapult);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Catapult).call(this, props));
    _this.state = {
      runAnimation: false
    };
    return _this;
  }

  _createClass(Catapult, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.shouldLaunchCatapult === true && this.props.shouldLaunchCatapult !== nextProps.shouldLaunchCatapult) {
        this.setState({
          runAnimation: true
        });
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var CatapultLaunchXAxis = (0, _styledComponents.keyframes)(_templateObject(), this.props.xAxisBezier, this.props.launchFromRight ? -1 * this.props.distance : this.props.distance);
      var CatapultLaunchYAxis = (0, _styledComponents.keyframes)(_templateObject2(), this.props.yAxisBezier, this.props.height);

      var Track = _styledComponents["default"].div(_templateObject3(), CatapultLaunchXAxis, this.props.duration, this.props.xAxisBezier, this.state.runAnimation ? 'running' : 'paused');

      var Payload = _styledComponents["default"].div(_templateObject4(), CatapultLaunchYAxis, this.props.duration, this.props.yAxisBezier, this.state.runAnimation ? 'running' : 'paused'); // CSS is interesting


      var launchWallStyle = this.props.launchFromRight ? {
        'left': '100%'
      } : {
        'right': '100%'
      };
      return _react["default"].createElement("div", {
        style: _objectSpread({
          position: 'fixed',
          bottom: '80px',
          zIndex: 1000
        }, launchWallStyle)
      }, _react["default"].createElement(Track, null, _react["default"].createElement(Payload, null, this.props.children)));
    }
  }]);

  return Catapult;
}(_react.Component);

Catapult.propTypes = {
  children: _propTypes["default"].element.isRequired,
  distance: _propTypes["default"].number,
  height: _propTypes["default"].number,
  duration: _propTypes["default"].number,
  launchFromRight: _propTypes["default"].bool,
  shouldLaunchCatapult: _propTypes["default"].bool,
  xAxisBezier: _propTypes["default"].string,
  yAxisBezier: _propTypes["default"].string
};
Catapult.defaultProps = {
  distance: window.innerWidth * 2,
  height: window.innerHeight / 2,
  duration: 5,
  launchFromRight: false,
  shouldLaunchCatapult: false,
  xAxisBezier: DEFAULT_X_BEZIER,
  yAxisBezier: DEFAULT_Y_BEZIER
};
var _default = Catapult;
exports["default"] = _default;
