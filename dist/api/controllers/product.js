'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductController = function () {
  function ProductController() {
    (0, _classCallCheck3.default)(this, ProductController);
  }

  (0, _createClass3.default)(ProductController, null, [{
    key: 'getProduct',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var productId, prodConfig;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                productId = req.params.productId;
                prodConfig = require(productId + '/package.json').sweetiebird;
                return _context.abrupt('return', (0, _utils.SuccessResponse)(res, prodConfig));

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProduct(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getProduct;
    }()
  }]);
  return ProductController;
}();

var _default = ProductController;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductController, 'ProductController', 'api/controllers/product.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'api/controllers/product.js');
}();

;