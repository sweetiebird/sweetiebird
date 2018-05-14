'use strict';

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _api2.default)();

var port = process.env.PORT || 3000;

// listen for http verbs
var server = app.listen(port, function () {
  console.info('Server starting on port ' + port);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', 'index.js');

  __REACT_HOT_LOADER__.register(port, 'port', 'index.js');

  __REACT_HOT_LOADER__.register(server, 'server', 'index.js');
}();

;
