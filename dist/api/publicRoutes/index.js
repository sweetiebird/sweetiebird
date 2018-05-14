'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controllers = require('../controllers');

var router = (0, _express.Router)();

router.get('/:userId', _controllers.UserController.publicGetUser);

router.get('/ping', function (req, res) {
  res.status(200).send('pong');
});

var _default = router;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'api/publicRoutes/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'api/publicRoutes/index.js');
}();

;