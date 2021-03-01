import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import "core-js/modules/es.array.map.js";
import "core-js/modules/es.map.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.promise.js";
// import '@babel/polyfill'
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
// let const
var age = 30;
var con = 'con not change';
var arr = [1, 2, 3, 4]; // array.map方法

arr = arr.map(function (item) {
  item += 1;
  return item;
}); // 解构

var newArr = _toConsumableArray(arr);

var obj = _objectSpread({}, {
  name: 'jackyli',
  age: age
}); // 模版字符串


var str = "I'm ".concat(age, " years old."); // map

var m = new Map([['name', 'tom'], ['age', 18]]); // promise

var p = function p() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('success print');
    }, 1000);
  });
};

p(); // class

var Test = /*#__PURE__*/function () {
  function Test() {
    _classCallCheck(this, Test);
  }

  _createClass(Test, [{
    key: "say",
    value: function say() {}
  }]);

  return Test;
}();