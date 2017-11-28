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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("dva");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("../util");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("dva/router");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleMap = exports.innerRoutes = undefined;

var _Root = __webpack_require__(30);

var _Root2 = _interopRequireDefault(_Root);

var _IndexPage = __webpack_require__(36);

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _CaserView = __webpack_require__(37);

var _CaserView2 = _interopRequireDefault(_CaserView);

var _PlayfairView = __webpack_require__(39);

var _PlayfairView2 = _interopRequireDefault(_PlayfairView);

var _HillView = __webpack_require__(42);

var _HillView2 = _interopRequireDefault(_HillView);

var _NotFound = __webpack_require__(44);

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
/* 7 */
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
    wrap = false, style, children, value, className } = _ref,
      props = _objectWithoutProperties(_ref, ['wrap', 'style', 'children', 'value', 'className']);

  return _react2.default.createElement('div', _extends({}, props, {
    className: (className ? className + ' ' : '') + 'components-Output_output',

    style: Object.assign(wrap ? {
      wordWrap: 'break-word',
      whiteSpace: 'pre-wrap'
    } : {
      whiteSpace: 'pre'
    }, style),
    children: children || value || '无数据'
  }));
}

exports.default = Output;

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(15);

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FileInput;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function FileInput(_ref) {
  let {
    className, btnProps, children } = _ref,
      fileProps = _objectWithoutProperties(_ref, ['className', 'btnProps', 'children']);

  let fileInput = null;
  return _react2.default.createElement(
    'span',
    { className: (className ? className + ' ' : '') + 'components-FileInput_span' },
    _react2.default.createElement('input', _extends({}, fileProps, {
      style: Object.assign({ display: 'none' }, fileProps.style),
      type: 'file',
      ref: saveInput
    })),
    _react2.default.createElement(_button2.default, _extends({ children: children || '打开文件' }, btnProps, { onClick: handleClick }))
  );
  function handleClick(e) {
    if (btnProps && typeof btnProps.onClick === 'function') btnProps.onClick(e);
    fileInput.click();
  }
  function saveInput(input) {
    if (fileProps.ref && typeof fileProps.ref === 'function') {
      fileProps.ref(input);
    }
    fileInput = input;
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = ["app","caser","playfair","hill"]

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = save;
function save(state, action) {
  return _extends({}, state, action.payload);
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = __webpack_require__(4);

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

    return _temp = super(...args), this.handleChange = e => {
      const { value: str } = e.target;
      const { m, n } = this.props;
      let matrix;
      if (str) {
        matrix = String(str).split('\n').slice(0, m).map(r => r.split(splitC).slice(0, n).map(v => Number(v) || 0));
        matrix.forEach(r => {
          if (r.length < n) {
            (0, _Util.repeat)(n - r.length, () => r.push(0));
          }
        });
        if (matrix.length < m) {
          (0, _Util.repeat)(m - matrix.length, () => matrix.push(this.getRowNoob()));
        }
      } else {
        matrix = this.getNoob();
      }
      if (this.props.onChange) {
        this.props.onChange({
          matrix,
          str
        });
      }
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
          { m, n } = _props,
          props = _objectWithoutProperties(_props, ['m', 'n']);
    return _react2.default.createElement(TextArea, _extends({}, props, { onChange: this.handleChange }));
  }
};
exports.default = MatrixInput;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(2);

var _setTitle = __webpack_require__(46);

var _setTitle2 = _interopRequireDefault(_setTitle);

var _routes = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'app',
  state: null,
  subscriptions: {
    setup({ history }) {
      return history.listen(({ pathname }) => {
        const title = _routes.titleMap[(0, _Util.plainPath)(pathname)];
        if (title) {
          (0, _setTitle2.default)(title);
        }
      });
    }
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dvaReducerSave = __webpack_require__(11);

var _dvaReducerSave2 = _interopRequireDefault(_dvaReducerSave);

var _dvaEffectFile2Text = __webpack_require__(20);

var _dvaEffectFile2Text2 = _interopRequireDefault(_dvaEffectFile2Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'caser',

  state: {
    input: ''
  },

  effects: {
    loadFile: (0, _dvaEffectFile2Text2.default)({ target: 'input', actionType: 'save' })
  },

  reducers: {
    save: _dvaReducerSave2.default
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(3);

var _message3 = _interopRequireDefault(_message2);

var _Util = __webpack_require__(2);

var _readAsText = __webpack_require__(21);

var _readAsText2 = _interopRequireDefault(_readAsText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ target = 'text', actionType = 'save' } = {}) => function* file2Text({ file }, { call, put }) {
  if (!file) return;
  if ((0, _Util.isPlainFile)(file)) {
    const plaintext = yield call(_readAsText2.default, file);
    yield put({ type: actionType, payload: { [target]: plaintext } });
  } else if (file.type) {
    _message3.default.error(`不支持 ${file.type}`);
  } else {
    _message3.default.error('文件格式未知');
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(3);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MatrixInput = __webpack_require__(17);

var _MatrixInput2 = _interopRequireDefault(_MatrixInput);

var _dvaEffectFile2Text = __webpack_require__(20);

var _dvaEffectFile2Text2 = _interopRequireDefault(_dvaEffectFile2Text);

var _dvaReducerSave = __webpack_require__(11);

var _dvaReducerSave2 = _interopRequireDefault(_dvaReducerSave);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'hill',

  state: {
    str: '',
    matrix: _MatrixInput2.default.getNoob(3, 3),
    plaintext: ''
  },

  effects: {
    loadFile: (0, _dvaEffectFile2Text2.default)({ target: 'plaintext', actionType: 'save' })
  },

  reducers: {
    save: _dvaReducerSave2.default
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _playfair = __webpack_require__(47);

var _dvaReducerSave = __webpack_require__(11);

var _dvaReducerSave2 = _interopRequireDefault(_dvaReducerSave);

var _delay = __webpack_require__(49);

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
    save: _dvaReducerSave2.default,

    reset(state, action) {
      return _extends({}, getInit(), action.payload);
    }
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = render;

var _dva = __webpack_require__(1);

var _dva2 = _interopRequireDefault(_dva);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _history = __webpack_require__(25);

var _reactRouterConfig = __webpack_require__(12);

var _router = __webpack_require__(5);

var _reactRouterRedux = __webpack_require__(26);

var _renderTemplate = __webpack_require__(27);

var _renderTemplate2 = _interopRequireDefault(_renderTemplate);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

var _paths = __webpack_require__(10);

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(path, staticContext) {
  const history = (0, _history.createMemoryHistory)({
    initialEntries: [path]
  });

  const app = (0, _dva2.default)({ history });

  _paths2.default.forEach(m => app.model(_extends({}, __webpack_require__(45)(`./${m}`).default)));

  app.router(() => _react2.default.createElement(
    _router.StaticRouter,
    { location: path, context: staticContext },
    (0, _reactRouterConfig.renderRoutes)(_routes2.default)
  ));

  const App = app.start();

  // 手动添加 state，因为 StaticRouter 不支持
  app._store.dispatch({
    type: _reactRouterRedux.LOCATION_CHANGE,
    payload: history.location
  });

  return (0, _renderTemplate2.default)(_react2.default.createElement(App, null), { title: _routes.titleMap[path] });
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = __webpack_require__(28);

var _package = __webpack_require__(29);

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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"name":"the-little-cipher","version":"1.0.0","product_name":"The Little Cipher","scripts":{"test":"jest","test:watch":"jest --watch","test:coverage":"jest --coverage","lint":"eslint .","format":"prettier-eslint --write '**/*.{js,css}'","precommit":"lint-staged","dev":"nodemon --watch src/server src/server/index.js --exec \"cross-env NODE_ENV=development node -r babel-register\"","prod":"npm run build && npm start","start":"node dist/server/index.js","build":"npm run clean && run-p build:*","clean":"rimraf dist","build:static":"webpack --env.production","build:server":"babel src -s -d dist --ignore webpack,render,common,client,*.test.js,test.js","build:ssr":"webpack --config webpack.config.ssr.js"},"author":"dgeibi","license":"MIT","prettier":{"semi":false,"singleQuote":true,"trailingComma":"es5","printWidth":90},"lint-staged":{"*.{css,js}":["git-exec-and-restage prettier-eslint --write --"]},"devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-eslint":"^8.0.2","babel-loader":"^7.1.2","babel-macros":"^1.2.0","babel-minify-webpack-plugin":"^0.2.0","babel-plugin-dva-hmr":"^0.4.0","babel-plugin-import":"^1.6.2","babel-plugin-react-css-modules":"^3.3.2","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-register":"^6.26.0","clean-webpack-plugin":"^0.1.17","codegen.macro":"^1.0.0","copy-webpack-plugin":"^4.2.1","cross-env":"^5.1.1","css-loader":"^0.28.7","eslint":"^4.11.0","eslint-config-airbnb-base":"^12.1.0","eslint-config-dgeibi":"^3.0.6","eslint-config-standard-react":"^5.0.0","eslint-import-resolver-webpack":"^0.8.3","eslint-plugin-import":"^2.8.0","eslint-plugin-react":"^7.5.1","extract-text-webpack-plugin":"^3.0.2","git-exec-and-restage":"^1.0.1","html-webpack-plugin":"^2.30.1","husky":"^0.14.3","jest":"^21.2.1","lint-staged":"^4.3.0","nodemon":"^1.12.1","npm-run-all":"^4.1.2","postcss-cssnext":"^3.0.2","postcss-loader":"^2.0.8","redbox-react":"^1.5.0","rimraf":"^2.6.2","style-loader":"^0.19.0","webpack":"^3.8.1","webpack-dev-middleware":"^1.12.1","webpack-hot-middleware":"^2.20.0","webpack-merge":"^4.1.1","webpack-node-externals":"^1.6.0"},"dependencies":{"antd":"^3.0.0-rc.3","babel-polyfill":"^6.26.0","compression":"^1.7.1","dva":"^2.1.0","dva-loading":"^1.0.4","express":"^4.16.2","history":"^4.7.2","jsdom":"^11.4.0","jsdom-global":"^3.0.2","multer":"^1.3.0","rc-table":"^6.1.0","react":"^16.1.1","react-dom":"^16.1.1","react-fns":"^1.2.0","react-router-config":"^1.0.0-beta.4","react-router-redux":"^5.0.0-alpha.8","reselect":"^3.0.1","unfetch":"^3.0.0"},"repository":{"type":"git","url":"git+https://github.com/dgeibi/the-little-cipher.git"},"bugs":{"url":"https://github.com/dgeibi/the-little-cipher/issues"},"homepage":"https://github.com/dgeibi/the-little-cipher#readme","description":"实现一些加密算法"}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(13);

var _icon2 = _interopRequireDefault(_icon);

var _layout = __webpack_require__(31);

var _layout2 = _interopRequireDefault(_layout);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(12);

var _dva = __webpack_require__(1);

var _Header = __webpack_require__(32);

var _Header2 = _interopRequireDefault(_Header);

var _routes = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { Content, Footer } = _layout2.default;

function Root({ currentPath, route, loading }) {
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
    ),
    loading && _react2.default.createElement(_icon2.default, { type: 'loading', className: 'routes-Root_loading' })
  );
}

exports.default = (0, _dva.connect)(state => {
  const { pathname: currentPath } = state.routing.location;
  const loading = state.loading && state.loading.global;
  return { loading, currentPath };
})(Root);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = __webpack_require__(33);

var _popover2 = _interopRequireDefault(_popover);

var _icon = __webpack_require__(13);

var _icon2 = _interopRequireDefault(_icon);

var _menu = __webpack_require__(34);

var _menu2 = _interopRequireDefault(_menu);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__(5);

var _reactFns = __webpack_require__(35);

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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-fns");

/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = __webpack_require__(4);

var _input2 = _interopRequireDefault(_input);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(1);

var _reselect = __webpack_require__(14);

var _caser = __webpack_require__(38);

var _caser2 = _interopRequireDefault(_caser);

var _Output = __webpack_require__(7);

var _Output2 = _interopRequireDefault(_Output);

var _Section = __webpack_require__(8);

var _Section2 = _interopRequireDefault(_Section);

var _FileInput = __webpack_require__(9);

var _FileInput2 = _interopRequireDefault(_FileInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { TextArea } = _input2.default;

const inputSelector = state => state.caser.input;
const outputSelector = (0, _reselect.createSelector)(inputSelector, _caser2.default);

let CaserView = (_dec = (0, _dva.connect)(state => ({ input: inputSelector(state), output: outputSelector(state) })), _dec(_class = (_temp2 = _class2 = class CaserView extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleInput = e => {
      this.saveInput(e.target.value);
    }, this.handleDrop = e => {
      e.stopPropagation();
      e.preventDefault();
      if (e.dataTransfer.files.length > 0) {
        this.readfiles(e.dataTransfer.files);
      } else {
        this.saveInput(e.dataTransfer.getData('text'));
      }
    }, this.handleFileInputChange = e => {
      this.readfiles(e.target.files);
      e.target.value = '';
    }, _temp;
  }

  readfiles(files) {
    const file = files && files[0];
    if (file) {
      this.props.dispatch({
        type: 'caser/loadFile',
        file
      });
    }
  }

  saveInput(input) {
    this.props.dispatch({
      type: 'caser/save',
      payload: {
        input
      }
    });
  }

  render() {
    const { input, output } = this.props;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u8F93\u5165\u660E\u6587' },
        _react2.default.createElement(_FileInput2.default, { onChange: this.handleFileInputChange }),
        _react2.default.createElement(TextArea, {
          className: 'routes-CaserView_text',
          rows: 8,
          placeholder: '\u5728\u6B64\u8F93\u5165\uFF0C\u62D6\u62FD\u81F3\u6B64',
          onDrop: this.handleDrop,
          value: input,
          onChange: this.handleInput
        })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u5BC6\u6587' },
        _react2.default.createElement(
          _Output2.default,
          { className: 'routes-CaserView_output' },
          output
        )
      )
    );
  }
}, _class2.title = '凯撒密码', _temp2)) || _class);
exports.default = CaserView;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("../cipher/caser");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(3);

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(4);

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(1);

var _rcTable = __webpack_require__(40);

var _rcTable2 = _interopRequireDefault(_rcTable);

var _playfair = __webpack_require__(41);

var _Util = __webpack_require__(2);

var _Section = __webpack_require__(8);

var _Section2 = _interopRequireDefault(_Section);

var _MatrixOutput = __webpack_require__(16);

var _MatrixOutput2 = _interopRequireDefault(_MatrixOutput);

var _Output = __webpack_require__(7);

var _Output2 = _interopRequireDefault(_Output);

var _FileInput = __webpack_require__(9);

var _FileInput2 = _interopRequireDefault(_FileInput);

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
    }, this.handleFileInputChange = e => {
      this.readfiles(e.target.files);
      e.target.value = '';
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
        { desc: '\u660E\u6587\u8F93\u5165' },
        _react2.default.createElement(_FileInput2.default, { onChange: this.handleFileInputChange }),
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
/* 40 */
/***/ (function(module, exports) {

module.exports = require("rc-table");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("../cipher/playfair");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(15);

var _button2 = _interopRequireDefault(_button);

var _message2 = __webpack_require__(3);

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(4);

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reselect = __webpack_require__(14);

var _dva = __webpack_require__(1);

var _hill = __webpack_require__(43);

var _hill2 = _interopRequireDefault(_hill);

var _MatrixInput = __webpack_require__(17);

var _MatrixInput2 = _interopRequireDefault(_MatrixInput);

var _MatrixOutput = __webpack_require__(16);

var _MatrixOutput2 = _interopRequireDefault(_MatrixOutput);

var _Section = __webpack_require__(8);

var _Section2 = _interopRequireDefault(_Section);

var _FileInput = __webpack_require__(9);

var _FileInput2 = _interopRequireDefault(_FileInput);

var _Output = __webpack_require__(7);

var _Output2 = _interopRequireDefault(_Output);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { TextArea } = _input2.default;

const matrixSelector = state => state.hill.matrix;
const plaintextSelector = state => state.hill.plaintext;

const inverseMatrixSelector = (0, _reselect.createSelector)(matrixSelector, _hill.inverse);
const cipherTextSelector = (0, _reselect.createSelector)(matrixSelector, plaintextSelector, _hill2.default);

let HillView = (_dec = (0, _dva.connect)(state => {
  const inverseMatrix = inverseMatrixSelector(state);
  const cipherText = cipherTextSelector(state);
  return _extends({}, state.hill, {
    inverseMatrix,
    cipherText
  });
}), _dec(_class = (_temp2 = _class2 = class HillView extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handlePlainTextChange = e => {
      this.saveState({
        plaintext: e.target.value
      });
    }, this.handleFileInputChange = e => {
      this.readfiles(e.target.files);
      e.target.value = '';
    }, this.handleSwitch = () => {
      const { inverseMatrix: matrix, cipherText: plaintext } = this.props;
      if (matrix) {
        this.saveState({
          matrix,
          str: matrix.map(r => r.join(' ')).join('\n'),
          plaintext
        });
      } else {
        _message3.default.error('当前逆矩阵为空，无法切换');
      }
    }, this.handleMatrixInputChange = ({ str, matrix }) => {
      this.saveState({
        str,
        matrix
      });
    }, this.handleDrop = e => {
      e.stopPropagation();
      e.preventDefault();
      if (e.dataTransfer.files.length > 0) {
        this.readfiles(e.dataTransfer.files);
      } else {
        this.saveState({
          plaintext: e.dataTransfer.getData('text')
        });
      }
    }, _temp;
  }

  saveState(state) {
    this.props.dispatch({
      type: 'hill/save',
      payload: state
    });
  }

  readfiles(files) {
    const file = files && files[0];
    if (file) {
      this.props.dispatch({
        type: 'hill/loadFile',
        file
      });
    }
  }

  render() {
    const {
      matrix, plaintext, inverseMatrix, cipherText, str
    } = this.props;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u8F93\u51653*3\u5BC6\u94A5\u77E9\u9635' },
        _react2.default.createElement(_MatrixInput2.default, {
          m: 3,
          n: 3,
          rows: 4,
          placeholder: '格式：\n1 7 3\n2 5 3\n1 2 1',
          onChange: this.handleMatrixInputChange,
          value: str
        })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u8F93\u5165\u660E\u6587' },
        _react2.default.createElement(_FileInput2.default, { onChange: this.handleFileInputChange }),
        _react2.default.createElement(TextArea, {
          value: plaintext,
          placeholder: '\u5728\u6B64\u8F93\u5165\uFF0C\u62D6\u62FD\u81F3\u6B64',
          onChange: this.handlePlainTextChange,
          onDrop: this.handleDrop,
          rows: 5
        })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u5BC6\u94A5\u77E9\u9635' },
        _react2.default.createElement(_MatrixOutput2.default, { value: matrix })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u9006\u77E9\u9635' },
        _react2.default.createElement(_MatrixOutput2.default, { value: inverseMatrix })
      ),
      _react2.default.createElement(
        _Section2.default,
        { desc: '\u5BC6\u6587' },
        _react2.default.createElement(_Output2.default, {
          wrap: true,
          value: cipherText,
          style: {
            height: '10em'
          }
        })
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
}, _class2.title = 'Hill密码', _temp2)) || _class);
exports.default = HillView;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("../cipher/hill");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__(5);

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

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app": 18,
	"./app.js": 18,
	"./caser": 19,
	"./caser.js": 19,
	"./hill": 22,
	"./hill.js": 22,
	"./paths": 10,
	"./paths.json": 10,
	"./playfair": 23,
	"./playfair.js": 23
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 45;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = title => {
  if (global.document) {
    global.document.title = `${title} - The Little Cipher`;
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readPlainText = exports.postData = undefined;

var _message2 = __webpack_require__(3);

var _message3 = _interopRequireDefault(_message2);

var _unfetch = __webpack_require__(48);

var _unfetch2 = _interopRequireDefault(_unfetch);

var _readAsText = __webpack_require__(21);

var _readAsText2 = _interopRequireDefault(_readAsText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postData = exports.postData = ({ secretInput, plainInput, file }) => {
  const formData = new FormData();
  formData.append('plaintext', file || plainInput);
  formData.append('secret', secretInput);
  return (0, _unfetch2.default)('/playfair', {
    method: 'POST',
    body: formData
  }).then(res => res.json(), err => {
    console.error(err);
    _message3.default.error('发送失败');
  }).catch(err => {
    console.error(err);
    _message3.default.error('接收失败');
  });
};

const readPlainText = exports.readPlainText = _readAsText2.default;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("unfetch");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

exports.default = delay;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map