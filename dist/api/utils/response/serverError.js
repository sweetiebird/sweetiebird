'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(res, message) {
  res.status(500).json({
    errors: [{
      status: 500,
      title: 'Server error',
      detail: message || 'Something blew up'
    }]
  });
};

// authentication error response
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'api/utils/response/serverError.js');
}();

;