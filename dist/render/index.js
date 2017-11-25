module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("../util");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dva/router");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Output(_ref) {
  let {
    children, value, className } = _ref,
      props = _objectWithoutProperties(_ref, ['children', 'value', 'className']);

  return _react2.default.createElement('div', _extends({}, props, {
    className: (className ? className + ' ' : '') + 'components-Output_output',

    children: children || value || '无数据'
  }));
}

exports.default = Output;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Section(_ref) {
  let {
    desc, className, children } = _ref,
      props = _objectWithoutProperties(_ref, ['desc', 'className', 'children']);

  return _react2.default.createElement(
    'section',
    _extends({}, props, { className: (className ? className + ' ' : '') + 'components-Section_section' }),
    desc && _react2.default.createElement(
      'div',
      { className: 'components-Section_header' },
      desc,
      '\uFF1A'
    ),
    children
  );
}

exports.default = Section;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("dva");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleMap = exports.innerRoutes = undefined;

var _Root = __webpack_require__(22);

var _Root2 = _interopRequireDefault(_Root);

var _IndexPage = __webpack_require__(29);

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _CaserView = __webpack_require__(30);

var _CaserView2 = _interopRequireDefault(_CaserView);

var _PlayfairView = __webpack_require__(32);

var _PlayfairView2 = _interopRequireDefault(_PlayfairView);

var _HillView = __webpack_require__(35);

var _HillView2 = _interopRequireDefault(_HillView);

var _NotFound = __webpack_require__(39);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const innerRoutes = exports.innerRoutes = [{
  path: '/',
  exact: true,
  component: _IndexPage2.default
}, {
  path: '/caser',
  component: _CaserView2.default
}, {
  path: '/playfair',
  component: _PlayfairView2.default
}, {
  path: '/hill',
  component: _HillView2.default
}, {
  path: '*',
  component: _NotFound2.default
}];

exports.default = [{
  component: _Root2.default,
  routes: innerRoutes
}];
const titleMap = exports.titleMap = innerRoutes.reduce((rs, { component, path }) => {
  rs[path] = component.title; // eslint-disable-line no-param-reassign
  return rs;
}, {});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MatrixOutput({ value }) {
  if (!value) return _react2.default.createElement(
    'div',
    null,
    '\u65E0\u6570\u636E'
  );
  return _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'tbody',
      null,
      value.map((r, i) => _react2.default.createElement(
        'tr',
        { key: i },
        r.map((c, j) => _react2.default.createElement(
          'td',
          { key: j },
          c
        ))
      ))
    )
  );
}

exports.default = MatrixOutput;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _history = __webpack_require__(12);

var _renderRoute = __webpack_require__(13);

function render(path, context) {
  return (0, _renderRoute.renderRoute)({
    dvaOpts: {
      history: (0, _history.createMemoryHistory)()
    },
    routerProps: { location: path, context },
    routeProps: { currentPath: path },
    templateOpts: { title: _renderRoute.titleMap[path] }
  });
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderRoute = exports.titleMap = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dva = __webpack_require__(7);

var _dva2 = _interopRequireDefault(_dva);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(8);

var _router = __webpack_require__(4);

var _renderTemplate = __webpack_require__(14);

var _renderTemplate2 = _interopRequireDefault(_renderTemplate);

var _playfair = __webpack_require__(17);

var _playfair2 = _interopRequireDefault(_playfair);

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderRoute = ({
  dvaOpts, routerProps: { location, context }, routeProps, templateOpts
}) => {
  const app = (0, _dva2.default)(dvaOpts);

  app.model(_extends({}, _playfair2.default));

  app.router(() => _react2.default.createElement(
    _router.StaticRouter,
    { location: location, context: context },
    (0, _reactRouterConfig.renderRoutes)(_routes2.default, routeProps)
  ));

  return (0, _renderTemplate2.default)(app.start()(), templateOpts);
};

exports.titleMap = _routes.titleMap;
exports.renderRoute = renderRoute;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = __webpack_require__(15);

var _package = __webpack_require__(16);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (renderMe, { title } = {}) => `<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <title>${title ? `${title} - ` : ''}${_package2.default.product_name || _package2.default.name}</title>
  <link href="/static/antd.css" rel="stylesheet">
  <link href="/static/main.css" rel="stylesheet">
</head>
<body>
  <div id="root">${(0, _server.renderToString)(renderMe)}</div>
  <script src="/static/app.js"></script>
</body>
</html>`;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"name":"the-little-cipher","version":"1.0.0","dist_dir":"dist/static","product_name":"The Little Cipher","scripts":{"test":"jest","test:watch":"jest --watch","test:coverage":"jest --coverage","lint":"eslint .","format":"prettier-eslint --write '**/*.{js,css}'","precommit":"lint-staged","dev":"nodemon --watch src/server src/server/index.js --exec \"cross-env NODE_ENV=development node -r babel-register\"","prod":"npm run build && npm start","start":"node dist/server/index.js","build":"npm run clean && run-p build:*","clean":"rimraf dist","build:static":"webpack --env.production","build:server":"babel src -s -d dist --ignore webpack,render,common,client,*.test.js,test.js","build:ssr":"webpack --config webpack.config.ssr.js"},"author":"dgeibi","license":"MIT","prettier":{"semi":false,"singleQuote":true,"trailingComma":"es5","printWidth":90},"lint-staged":{"*.{css,js}":["git-exec-and-restage prettier-eslint --write --"]},"devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-eslint":"^8.0.2","babel-loader":"^7.1.2","babel-minify-webpack-plugin":"^0.2.0","babel-plugin-dva-hmr":"^0.4.0","babel-plugin-import":"^1.6.2","babel-plugin-react-css-modules":"^3.3.2","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-register":"^6.26.0","clean-webpack-plugin":"^0.1.17","copy-webpack-plugin":"^4.2.1","cross-env":"^5.1.1","css-loader":"^0.28.7","eslint":"^4.11.0","eslint-config-airbnb-base":"^12.1.0","eslint-config-dgeibi":"^3.0.6","eslint-config-standard-react":"^5.0.0","eslint-import-resolver-webpack":"^0.8.3","eslint-plugin-import":"^2.8.0","eslint-plugin-react":"^7.5.1","extract-text-webpack-plugin":"^3.0.2","git-exec-and-restage":"^1.0.1","html-webpack-plugin":"^2.30.1","husky":"^0.14.3","jest":"^21.2.1","lint-staged":"^4.3.0","nodemon":"^1.12.1","npm-run-all":"^4.1.2","postcss-cssnext":"^3.0.2","postcss-loader":"^2.0.8","redbox-react":"^1.5.0","rimraf":"^2.6.2","style-loader":"^0.19.0","webpack":"^3.8.1","webpack-dev-middleware":"^1.12.1","webpack-hot-middleware":"^2.20.0","webpack-merge":"^4.1.1","webpack-node-externals":"^1.6.0"},"dependencies":{"antd":"^3.0.0-rc.3","babel-polyfill":"^6.26.0","compression":"^1.7.1","dva":"^2.1.0","express":"^4.16.2","history":"^4.7.2","jsdom":"^11.4.0","jsdom-global":"^3.0.2","multer":"^1.3.0","rc-table":"^6.1.0","react":"^16.1.1","react-dom":"^16.1.1","react-fns":"^1.2.0","react-router-config":"^1.0.0-beta.4","unfetch":"^3.0.0"},"repository":{"type":"git","url":"git+https://github.com/dgeibi/the-little-cipher.git"},"bugs":{"url":"https://github.com/dgeibi/the-little-cipher/issues"},"homepage":"https://github.com/dgeibi/the-little-cipher#readme","description":"实现一些加密算法"}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _playfair = __webpack_require__(18);

var _delay = __webpack_require__(21);

var _delay2 = _interopRequireDefault(_delay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getInit = () => ({
  secretInput: '',
  plainInput: '',
  plainText: '',
  cipherText: '',
  diff: [],
  square: null
});
const takeLatest = { type: 'takeLatest' };
exports.default = {
  namespace: 'playfair',

  state: getInit(),

  effects: {
    fetch: [function* fetch({ payload }, { call, put }) {
      const { secretInput, file } = payload;
      let { plainInput } = payload;
      if (file) {
        plainInput = yield call(_playfair.readPlainText, file);
      }
      yield put({ type: 'save', payload: { secretInput, plainInput } });

      if (plainInput !== '') {
        yield call(_delay2.default, 100);
        const data = yield call(_playfair.postData, payload);
        yield put({ type: 'save', payload: data });
      } else {
        yield put({
          type: 'reset',
          payload: {
            secretInput
          }
        });
      }
    }, takeLatest]
  },

  reducers: {
    save(state, action) {
      return _extends({}, state, action.payload);
    },

    reset(state, action) {
      return _extends({}, getInit(), action.payload);
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readPlainText = exports.postData = undefined;

var _message2 = __webpack_require__(1);

var _message3 = _interopRequireDefault(_message2);

var _unfetch = __webpack_require__(19);

var _unfetch2 = _interopRequireDefault(_unfetch);

var _readAsText = __webpack_require__(20);

var _readAsText2 = _interopRequireDefault(_readAsText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postData = exports.postData = ({ secretInput, plainInput, file }) => {
  const formData = new FormData();
  formData.append('plaintext', file || plainInput);
  formData.append('secret', secretInput);
  return (0, _unfetch2.default)('/playfair', {
    method: 'POST',
    body: formData
  }).then(res => res.json(), () => _message3.default.error('发送失败')).catch(() => _message3.default.error('接收失败'));
};

const readPlainText = exports.readPlainText = _readAsText2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("unfetch");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(1);

var _message3 = _interopRequireDefault(_message2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    resolve(reader.result);
  };
  reader.onerror = error => {
    _message3.default.error('读取失败');
    reject(error);
  };
  reader.readAsText(file);
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

exports.default = delay;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(23);

var _layout2 = _interopRequireDefault(_layout);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(8);

var _Header = __webpack_require__(24);

var _Header2 = _interopRequireDefault(_Header);

var _routes = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { Content, Footer } = _layout2.default;

function RouterConfig({ currentPath, route }) {
  return _react2.default.createElement(
    _layout2.default,
    { className: 'routes-Root_layout' },
    _react2.default.createElement(_Header2.default, { currentPath: currentPath, routes: _routes.innerRoutes }),
    _react2.default.createElement(
      Content,
      { className: 'routes-Root_content' },
      _react2.default.createElement(
        'div',
        { className: 'routes-Root_content-inner' },
        (0, _reactRouterConfig.renderRoutes)(route.routes)
      )
    ),
    _react2.default.createElement(
      Footer,
      { className: 'routes-Root_footer' },
      '\xA92017 Created by dgeibi'
    )
  );
}

exports.default = RouterConfig;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = __webpack_require__(25);

var _popover2 = _interopRequireDefault(_popover);

var _icon = __webpack_require__(26);

var _icon2 = _interopRequireDefault(_icon);

var _menu = __webpack_require__(27);

var _menu2 = _interopRequireDefault(_menu);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__(4);

var _reactFns = __webpack_require__(28);

var _Util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TheMenu = ({ mode, currentPath, routes }) => _react2.default.createElement(
  _menu2.default,
  { mode: mode, defaultSelectedKeys: [(0, _Util.plainPath)(currentPath)], className: 'components-Header_menu' },
  routes.map(({ component: { title, skipMenu }, path }) => skipMenu ? null : _react2.default.createElement(
    _menu2.default.Item,
    { key: path },
    _react2.default.createElement(
      _router.Link,
      { to: path },
      title
    )
  ))
);

let Header = class Header extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      menuVisible: false
    }, this.onMenuVisibleChange = visible => {
      this.setState({
        menuVisible: visible
      });
    }, this.handleShowMenu = () => {
      this.setState({
        menuVisible: true
      });
    }, _temp;
  }

  render() {
    const { menuVisible } = this.state;
    const { currentPath, routes } = this.props;

    return _react2.default.createElement(
      'header',
      { className: 'components-Header_header' },
      _react2.default.createElement(
        _reactFns.Media,
        { query: '(max-width: 599px)' },
        match => {
          const menuMode = match ? 'inline' : 'horizontal';
          if (match) {
            return _react2.default.createElement(
              _popover2.default,
              {
                placement: 'bottomLeft',
                content: _react2.default.createElement(TheMenu, { currentPath: currentPath, mode: menuMode, routes: routes }),
                trigger: 'click',
                visible: menuVisible,
                arrowPointAtCenter: true,
                onVisibleChange: this.onMenuVisibleChange
              },
              _react2.default.createElement(_icon2.default, { className: 'components-Header_nav-icon', type: 'menu', onClick: this.handleShowMenu })
            );
          }
          return _react2.default.createElement(TheMenu, { currentPath: currentPath, mode: menuMode, routes: routes });
        }
      )
    );
  }
};
exports.default = Header;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-fns");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IndexPage() {
  return _react2.default.createElement(
    'div',
    null,
    'hello world'
  );
}

IndexPage.title = '首页';
IndexPage.exact = true;

exports.default = IndexPage;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(1);

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(3);

var _input2 = _interopRequireDefault(_input);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _caser = __webpack_require__(31);

var _caser2 = _interopRequireDefault(_caser);

var _Util = __webpack_require__(2);

var _Output = __webpack_require__(5);

var _Output2 = _interopRequireDefault(_Output);

var _Section = __webpack_require__(6);

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { TextArea } = _input2.default;

let CaserView = (_temp2 = _class = class CaserView extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      msg: ''
    }, this.handleInput = e => {
      this.setState({
        msg: e.target.value
      });
    }, this.handleDrop = e => {
      e.stopPropagation();
      e.preventDefault();
      if (e.dataTransfer.files.length > 0) {
        this.readfiles(e.dataTransfer.files);
      } else {
        this.setState({
          msg: e.dataTransfer.getData('text')
        });
      }
    }, _temp;
  }

  readfiles(files) {
    const file = files && files[0];
    if (file) {
      if ((0, _Util.isPlainFile)(file)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.setState({
            msg: reader.result
          });
        };
        reader.readAsText(file);
      } else if (file.type) {
        _message3.default.error(`不支持 ${file.type}`);
      } else {
        _message3.default.error('文件格式未知');
      }
    }
  }

  render() {
    const { msg } = this.state;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u8F93\u5165\u660E\u6587 (\u652F\u6301\u62D6\u62FD\u6587\u5B57\u548C\u6587\u672C\u6587\u4EF6)' },
        _react2.default.createElement(TextArea, {
          className: 'routes-CaserView_text',
          placeholder: '\u5728\u6B64\u8F93\u5165\uFF0C\u62D6\u62FD\u81F3\u6B64',
          onDrop: this.handleDrop,
          value: msg,
          onChange: this.handleInput
        })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u5BC6\u6587' },
        _react2.default.createElement(
          _Output2.default,
          { className: 'routes-CaserView_output' },
          (0, _caser2.default)(msg)
        )
      )
    );
  }
}, _class.title = '凯撒密码', _temp2);
exports.default = CaserView;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("../cipher/caser");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(1);

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(3);

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(7);

var _rcTable = __webpack_require__(33);

var _rcTable2 = _interopRequireDefault(_rcTable);

var _playfair = __webpack_require__(34);

var _Util = __webpack_require__(2);

var _Section = __webpack_require__(6);

var _Section2 = _interopRequireDefault(_Section);

var _MatrixOutput = __webpack_require__(10);

var _MatrixOutput2 = _interopRequireDefault(_MatrixOutput);

var _Output = __webpack_require__(5);

var _Output2 = _interopRequireDefault(_Output);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { TextArea } = _input2.default;
const columns = [{
  title: '明文',
  dataIndex: 'origin',
  key: 'origin',
  width: 100
}, {
  title: '密文',
  dataIndex: 'result',
  key: 'result',
  width: 100
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type',
  width: 100,
  render: _playfair.findType
}];

let PlayfairView = (_dec = (0, _dva.connect)(({ playfair }) => _extends({}, playfair)), _dec(_class = (_temp2 = _class2 = class PlayfairView extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleInputChange = e => {
      const { name, value } = e.target;
      if (name) {
        this.fetch({
          [name]: value
        });
      }
    }, this.handleDrop = e => {
      e.stopPropagation();
      e.preventDefault();
      if (e.dataTransfer.files.length > 0) {
        this.readfiles(e.dataTransfer.files);
      } else {
        this.fetch({
          plainInput: e.dataTransfer.getData('text')
        });
      }
    }, _temp;
  }

  fetch(payload) {
    const { secretInput, plainInput, dispatch } = this.props;
    dispatch({
      type: 'playfair/fetch',
      payload: _extends({
        secretInput,
        plainInput
      }, payload)
    });
  }

  readfiles(files) {
    const file = files && files[0];
    if (file) {
      if ((0, _Util.isPlainFile)(file)) {
        this.fetch({
          file
        });
      } else if (file.type) {
        _message3.default.error(`不支持 ${file.type}`);
      } else {
        _message3.default.error('文件格式未知');
      }
    }
  }

  render() {
    const {
      plainInput, secretInput, diff, square, plainText, cipherText
    } = this.props;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'p',
        null,
        '\u9ED8\u8BA4\u586B\u5145\u5B57\u6BCD\uFF1A',
        _react2.default.createElement(
          'code',
          null,
          'K'
        ),
        '\uFF0C\u5907\u7528\u586B\u5145\u5B57\u6BCD\uFF1A',
        _react2.default.createElement(
          'code',
          null,
          'Z'
        )
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u5BC6\u7801\u8F93\u5165' },
        _react2.default.createElement(_input2.default, { value: secretInput, name: 'secretInput', onChange: this.handleInputChange })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u660E\u6587\u8F93\u5165\uFF08\u6587\u672C/\u6587\u4EF6\uFF09' },
        _react2.default.createElement(TextArea, {
          value: plainInput,
          name: 'plainInput',
          placeholder: '\u5728\u6B64\u8F93\u5165\uFF0C\u62D6\u62FD\u81F3\u6B64',
          rows: 3,
          onDrop: this.handleDrop,
          onChange: this.handleInputChange
        })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u52A0\u5BC6\u77E9\u9635' },
        _react2.default.createElement(_MatrixOutput2.default, { value: square })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u660E\u6587' },
        _react2.default.createElement(_Output2.default, { value: plainText })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u5BC6\u6587' },
        _react2.default.createElement(_Output2.default, { value: cipherText })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u7EC6\u8282' },
        _react2.default.createElement(_rcTable2.default, { columns: columns, data: diff, emptyText: '\u65E0\u6570\u636E' })
      )
    );
  }
}, _class2.title = 'Playfair密码', _temp2)) || _class);
exports.default = PlayfairView;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("rc-table");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("../cipher/playfair");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(36);

var _button2 = _interopRequireDefault(_button);

var _message2 = __webpack_require__(1);

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(3);

var _input2 = _interopRequireDefault(_input);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hill = __webpack_require__(37);

var _hill2 = _interopRequireDefault(_hill);

var _MatrixInput = __webpack_require__(38);

var _MatrixInput2 = _interopRequireDefault(_MatrixInput);

var _MatrixOutput = __webpack_require__(10);

var _MatrixOutput2 = _interopRequireDefault(_MatrixOutput);

var _Section = __webpack_require__(6);

var _Section2 = _interopRequireDefault(_Section);

var _Output = __webpack_require__(5);

var _Output2 = _interopRequireDefault(_Output);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { TextArea } = _input2.default;

let HillView = (_temp2 = _class = class HillView extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      key: _MatrixInput2.default.getNoob(3, 3),
      plaintext: '',
      cipherText: '',
      iKey: null
    }, this.handleKeyChange = key => {
      this.setState({
        key,
        iKey: (0, _hill.inverse)(key)
      });
    }, this.handlePlainTextChange = e => {
      this.setState({
        plaintext: e.target.value,
        cipherText: (0, _hill2.default)(this.state.key, e.target.value)
      });
    }, this.handleSwitch = () => {
      const { iKey: key, cipherText: plaintext } = this.state;
      if (key) {
        const iKey = (0, _hill.inverse)(key);
        const cipherText = (0, _hill2.default)(key, plaintext);
        this.setState({
          key,
          keystr: key.map(r => r.join(' ')).join('\n'),
          cipherText,
          iKey,
          plaintext
        });
      } else {
        _message3.default.error('当前逆矩阵为空');
      }
    }, this.handleKeyStrChange = e => {
      this.setState({
        keystr: e.target.value
      });
    }, _temp;
  }

  render() {
    const {
      key, plaintext, iKey, cipherText, keystr
    } = this.state;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u8F93\u51653*3\u5BC6\u94A5\u77E9\u9635' },
        _react2.default.createElement(_MatrixInput2.default, {
          m: 3,
          n: 3,
          rows: 3,
          onMatrixChange: this.handleKeyChange,
          onChange: this.handleKeyStrChange,
          value: keystr
        })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u8F93\u5165\u660E\u6587' },
        _react2.default.createElement(TextArea, { value: plaintext, onChange: this.handlePlainTextChange })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u5BC6\u94A5\u77E9\u9635' },
        _react2.default.createElement(_MatrixOutput2.default, { value: key })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u9006\u77E9\u9635' },
        _react2.default.createElement(_MatrixOutput2.default, { value: iKey })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u5BC6\u6587' },
        _react2.default.createElement(_Output2.default, { value: cipherText })
      ),
      _react2.default.createElement(
        _Section2.default,
        null,
        _react2.default.createElement(
          _button2.default,
          { onClick: this.handleSwitch },
          '\u5207\u6362\u8F93\u5165\u548C\u8F93\u51FA'
        )
      )
    );
  }
}, _class.title = 'Hill密码', _temp2);
exports.default = HillView;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("../cipher/hill");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = __webpack_require__(3);

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const { TextArea } = _input2.default;

const splitC = /\s*,\s*|\s+/;
let MatrixInput = class MatrixInput extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      inputValue: '',
      value: this.getNoob()
    }, this.handleChange = e => {
      if (this.props.onChange) {
        this.props.onChange(e);
      }
      const { value: inputValue } = e.target;
      const { m, n } = this.props;
      let value;
      if (inputValue !== '') {
        value = String(inputValue).split('\n').slice(0, m).map(r => r.split(splitC).slice(0, n).map(v => Number(v) || 0));
        value.forEach(r => {
          if (r.length < n) {
            (0, _Util.repeat)(n - r.length, () => r.push(0));
          }
        });
        if (value.length < m) {
          (0, _Util.repeat)(m - value.length, () => value.push(this.getRowNoob()));
        }
      } else {
        value = this.getNoob();
      }
      this.setState({
        inputValue,
        value
      }, () => {
        if (this.props.onMatrixChange) {
          this.props.onMatrixChange(value);
        }
      });
    }, _temp;
  }

  static getNoob(m, n) {
    return Array(m).fill(null).map(() => this.getRowNoob(n));
  }

  static getRowNoob(n) {
    return Array(n).fill(0);
  }

  getNoob() {
    const { m, n } = this.props;
    return MatrixInput.getNoob(m, n);
  }

  getRowNoob() {
    return MatrixInput.getRowNoob(this.props.n);
  }

  render() {
    const _props = this.props,
          {
      m, n, onMatrixChange } = _props,
          props = _objectWithoutProperties(_props, ['m', 'n', 'onMatrixChange']);
    return _react2.default.createElement(TextArea, _extends({}, props, { onChange: this.handleChange }));
  }
};
exports.default = MatrixInput;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotFound = () => _react2.default.createElement(_router.Route, {
  render: ({ staticContext }) => {
    if (staticContext) {
      // eslint-disable-next-line no-param-reassign
      staticContext.status = 404;
    }
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        '404 \u672A\u627E\u5230'
      )
    );
  }
});

NotFound.title = '404 未找到';
NotFound.skipMenu = true;

exports.default = NotFound;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map