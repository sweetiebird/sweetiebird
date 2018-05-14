'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controllers = require('../controllers');

var router = (0, _express.Router)();

router.get('/:productId', _controllers.ProductController.getProduct);

var _default = router;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'api/routes/product.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'api/routes/product.js');
}();

;