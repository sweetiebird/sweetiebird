"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(res, data) {
  res.status(200).json({
    meta: {
      code: 200
    },
    data: data
  });
};

// success response object
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "api/utils/response/success.js");
}();

;