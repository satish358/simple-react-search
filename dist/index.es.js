import { useEffect } from 'react';

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

var fuzzysearch_1 = fuzzysearch;

var validateSearchInitInput = function validateSearchInitInput() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var searchKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (data.length === 0) throw new Error("Search metadata should not be empty");
  var _iterator = _createForOfIteratorHelper(searchKeys),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var _iterator2 = _createForOfIteratorHelper(data),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if (!(key in item)) throw new Error("Search keys are invalid, not present in metadata");
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var searchFromMetadata = function searchFromMetadata() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var searchKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return data.filter(function (item) {
    var _iterator3 = _createForOfIteratorHelper(searchKeys),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var key = _step3.value;
        if (fuzzysearch_1(query.toLocaleLowerCase(), item[key].toLocaleLowerCase())) return true;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return false;
  });
};
var useReactSearch = function useReactSearch() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var searchKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  useEffect(function () {
    validateSearchInitInput(data, searchKeys);
  }, []);
  return function () {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return searchFromMetadata(data, searchKeys, query);
  };
};

export { searchFromMetadata, useReactSearch, validateSearchInitInput };
//# sourceMappingURL=index.es.js.map
