/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _bgmFetch = __webpack_require__(73);

	var _bgmFetch2 = _interopRequireDefault(_bgmFetch);

	var _vueRouter = __webpack_require__(77);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	_vue2['default'].use(_vueRouter2['default']);

	if (location.hostname === 'localhost') {
	  _vue2['default'].config.debug = true;
	}

	var router = new _vueRouter2['default']();
	router.map({
	  '/': {
	    component: __webpack_require__(109)
	  }
	});

	var App = _vue2['default'].extend(__webpack_require__(208));

	router.start(App, '#app');

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var extend = _.extend;

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefiexed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	/**
	 * Mixin global API
	 */

	extend(Vue, __webpack_require__(16));

	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */

	Vue.options = {
	  replace: true,
	  directives: __webpack_require__(32),
	  elementDirectives: __webpack_require__(54),
	  filters: __webpack_require__(57),
	  transitions: {},
	  components: {},
	  partials: {}
	};

	/**
	 * Build up the prototype
	 */

	var p = Vue.prototype;

	/**
	 * $data has a setter which does a bunch of
	 * teardown/setup work
	 */

	Object.defineProperty(p, '$data', {
	  get: function get() {
	    return this._data;
	  },
	  set: function set(newData) {
	    if (newData !== this._data) {
	      this._setData(newData);
	    }
	  }
	});

	/**
	 * Mixin internal instance methods
	 */

	extend(p, __webpack_require__(59));
	extend(p, __webpack_require__(60));
	extend(p, __webpack_require__(61));
	extend(p, __webpack_require__(65));
	extend(p, __webpack_require__(67));

	/**
	 * Mixin public API methods
	 */

	extend(p, __webpack_require__(68));
	extend(p, __webpack_require__(69));
	extend(p, __webpack_require__(70));
	extend(p, __webpack_require__(71));
	extend(p, __webpack_require__(72));

	module.exports = _.Vue = Vue;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var lang = __webpack_require__(8);
	var extend = lang.extend;

	extend(exports, lang);
	extend(exports, __webpack_require__(9));
	extend(exports, __webpack_require__(10));
	extend(exports, __webpack_require__(13));
	extend(exports, __webpack_require__(14));
	extend(exports, __webpack_require__(15));

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	'use strict';

	exports.isReserved = function (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	};

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	exports.toString = function (value) {
	  return value == null ? '' : value.toString();
	};

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	exports.toNumber = function (value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	};

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	exports.toBoolean = function (value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	};

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	exports.stripQuotes = function (str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : false;
	};

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	exports.camelize = function (str) {
	  return str.replace(/-(\w)/g, toUpper);
	};

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	exports.hyphenate = function (str) {
	  return str.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
	};

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;
	exports.classify = function (str) {
	  return str.replace(classifyRE, toUpper);
	};

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	exports.bind = function (fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	};

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	exports.toArray = function (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	};

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	exports.extend = function (to, from) {
	  for (var key in from) {
	    to[key] = from[key];
	  }
	  return to;
	};

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	exports.isObject = function (obj) {
	  return obj !== null && typeof obj === 'object';
	};

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	exports.isPlainObject = function (obj) {
	  return toString.call(obj) === OBJECT_STRING;
	};

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	exports.isArray = Array.isArray;

	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	exports.define = function (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	};

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	exports.debounce = function (func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	};

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	exports.indexOf = function (arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	exports.cancellable = function (fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	};

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	exports.looseEqual = function (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (exports.isObject(a) && exports.isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// can we use __proto__?
	'use strict';

	exports.hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	exports.isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;

	exports.isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;

	// Transition property/event sniffing
	if (inBrowser && !exports.isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  exports.transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  exports.transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  exports.animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  exports.animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	exports.nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    timerFunc = setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var config = __webpack_require__(12);

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	exports.query = function (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && _.warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	};

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed byy doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	exports.inDoc = function (node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	};

	/**
	 * Extract an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} attr
	 */

	exports.attr = function (node, attr) {
	  attr = config.prefix + attr;
	  var val = node.getAttribute(attr);
	  if (val !== null) {
	    node.removeAttribute(attr);
	  }
	  return val;
	};

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.before = function (el, target) {
	  target.parentNode.insertBefore(el, target);
	};

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.after = function (el, target) {
	  if (target.nextSibling) {
	    exports.before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	};

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	exports.remove = function (el) {
	  el.parentNode.removeChild(el);
	};

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.prepend = function (el, target) {
	  if (target.firstChild) {
	    exports.before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	};

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	exports.replace = function (target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	};

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	exports.on = function (el, event, cb) {
	  el.addEventListener(event, cb);
	};

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	exports.off = function (el, event, cb) {
	  el.removeEventListener(event, cb);
	};

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */

	exports.addClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	};

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */

	exports.removeClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	};

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */

	exports.extractContent = function (el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (exports.isTemplate(el) && el.content instanceof DocumentFragment) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    exports.trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	};

	/**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */

	exports.trimNode = function (node) {
	  trim(node, node.firstChild);
	  trim(node, node.lastChild);
	};

	function trim(parent, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    parent.removeChild(node);
	  }
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	exports.isTemplate = function (el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	};

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - component
	 * - repeat
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	exports.createAnchor = function (content, persist) {
	  return config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	// shim for using process in browser

	'use strict';

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	  /**
	   * The prefix to look for when parsing directives.
	   *
	   * @type {String}
	   */

	  prefix: 'v-',

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Strict mode.
	   * Disables asset lookup in the view parent chain.
	   */

	  strict: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether allow observer to alter data objects'
	   * __proto__.
	   *
	   * @type {Boolean}
	   */

	  proto: true,

	  /**
	   * Whether to parse mustache tags in templates.
	   *
	   * @type {Boolean}
	   */

	  interpolate: true,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	};

	/**
	 * Interpolation delimiters.
	 * We need to mark the changed flag so that the text parser
	 * knows it needs to recompile the regex.
	 *
	 * @type {Array<String>}
	 */

	var delimiters = ['{{', '}}'];
	Object.defineProperty(module.exports, 'delimiters', {
	  get: function get() {
	    return delimiters;
	  },
	  set: function set(val) {
	    delimiters = val;
	    this._delimitersChanged = true;
	  }
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var config = __webpack_require__(12);
	var extend = _.extend;

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!to.hasOwnProperty(key)) {
	      to.$add(key, fromVal);
	    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && _.warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && _.warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.props = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : _.isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * 0.11 deprecation warning
	 */

	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && _.warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !_.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var def;
	    var ids = Object.keys(components);
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (_.commonTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && _.warn('Do not use built-in HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      def = components[key];
	      if (_.isPlainObject(def)) {
	        def.id = def.id || key;
	        components[key] = def._Ctor || (def._Ctor = _.Vue.extend(def));
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  if (_.isPlainObject(props)) {
	    options.props = Object.keys(props).map(function (key) {
	      var val = props[key];
	      if (!_.isPlainObject(val)) {
	        val = { type: val };
	      }
	      val.name = key;
	      return val;
	    });
	  } else if (_.isArray(props)) {
	    options.props = props.map(function (prop) {
	      return typeof prop === 'string' ? { name: prop } : prop;
	    });
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (_.isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = asset.id || asset.options && asset.options.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && _.warn('Array-syntax assets must provide an id field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	exports.mergeOptions = function merge(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = merge(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!parent.hasOwnProperty(key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	};

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */

	exports.resolveAsset = function resolve(options, type, id) {
	  var camelizedId = _.camelize(id);
	  var pascalizedId = camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1);
	  var assets = options[type];
	  var asset = assets[id] || assets[camelizedId] || assets[pascalizedId];
	  while (!asset && options._parent && (!config.strict || options._repeat)) {
	    options = (options._context || options._parent).$options;
	    assets = options[type];
	    asset = assets[id] || assets[camelizedId] || assets[pascalizedId];
	  }
	  return asset;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {String|undefined}
	 */

	exports.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/;
	exports.checkComponent = function (el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (tag === 'component') {
	    // dynamic syntax
	    var exp = el.getAttribute('is');
	    el.removeAttribute('is');
	    return exp;
	  } else if (!exports.commonTagRE.test(tag) && _.resolveAsset(options, 'components', tag)) {
	    return tag;
	    /* eslint-disable no-cond-assign */
	  } else if (tag = _.attr(el, 'component')) {
	      /* eslint-enable no-cond-assign */
	      return tag;
	    }
	};

	/**
	 * Set a prop's initial value on a vm and its data object.
	 * The vm may have inherit:true so we need to make sure
	 * we don't accidentally overwrite parent value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	exports.initProp = function (vm, prop, value) {
	  if (exports.assertProp(prop, value)) {
	    var key = prop.path;
	    if (key in vm) {
	      _.define(vm, key, value, true);
	    } else {
	      vm[key] = value;
	    }
	    vm._data[key] = value;
	  }
	};

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */

	exports.assertProp = function (prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true;
	  }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = _.isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = _.isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && _.warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && _.warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	};

	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Enable debug utilities.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {

	  var config = __webpack_require__(12);
	  var hasConsole = typeof console !== 'undefined';

	  /**
	   * Log a message.
	   *
	   * @param {String} msg
	   */

	  exports.log = function (msg) {
	    if (hasConsole && config.debug) {
	      console.log('[Vue info]: ' + msg);
	    }
	  };

	  /**
	   * We've got a problem here.
	   *
	   * @param {String} msg
	   */

	  exports.warn = function (msg, e) {
	    if (hasConsole && (!config.silent || config.debug)) {
	      console.warn('[Vue warn]: ' + msg);
	      /* istanbul ignore if */
	      if (config.debug) {
	        console.warn((e || new Error('Warning Stack Trace')).stack);
	      }
	    }
	  };

	  /**
	   * Assert asset exists
	   */

	  exports.assertAsset = function (val, type, id) {
	    /* istanbul ignore if */
	    if (type === 'directive') {
	      if (id === 'with') {
	        exports.warn('v-with has been deprecated in ^0.12.0. ' + 'Use props instead.');
	        return;
	      }
	      if (id === 'events') {
	        exports.warn('v-events has been deprecated in ^0.12.0. ' + 'Pass down methods as callback props instead.');
	        return;
	      }
	    }
	    if (!val) {
	      exports.warn('Failed to resolve ' + type + ': ' + id);
	    }
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var config = __webpack_require__(12);

	/**
	 * Expose useful internals
	 */

	exports.util = _;
	exports.config = config;
	exports.nextTick = _.nextTick;
	exports.compiler = __webpack_require__(17);

	exports.parsers = {
	  path: __webpack_require__(27),
	  text: __webpack_require__(20),
	  template: __webpack_require__(29),
	  directive: __webpack_require__(22),
	  expression: __webpack_require__(26)
	};

	/**
	 * Each instance constructor, including Vue, has a unique
	 * cid. This enables us to create wrapped "child
	 * constructors" for prototypal inheritance and cache them.
	 */

	exports.cid = 0;
	var cid = 1;

	/**
	 * Class inheritance
	 *
	 * @param {Object} extendOptions
	 */

	exports.extend = function (extendOptions) {
	  extendOptions = extendOptions || {};
	  var Super = this;
	  var Sub = createClass(extendOptions.name || Super.options.name || 'VueComponent');
	  Sub.prototype = Object.create(Super.prototype);
	  Sub.prototype.constructor = Sub;
	  Sub.cid = cid++;
	  Sub.options = _.mergeOptions(Super.options, extendOptions);
	  Sub['super'] = Super;
	  // allow further extension
	  Sub.extend = Super.extend;
	  // create asset registers, so extended classes
	  // can have their private assets too.
	  config._assetTypes.forEach(function (type) {
	    Sub[type] = Super[type];
	  });
	  return Sub;
	};

	/**
	 * A function that returns a sub-class constructor with the
	 * given name. This gives us much nicer output when
	 * logging instances in the console.
	 *
	 * @param {String} name
	 * @return {Function}
	 */

	function createClass(name) {
	  return new Function('return function ' + _.classify(name) + ' (options) { this._init(options) }')();
	}

	/**
	 * Plugin system
	 *
	 * @param {Object} plugin
	 */

	exports.use = function (plugin) {
	  // additional parameters
	  var args = _.toArray(arguments, 1);
	  args.unshift(this);
	  if (typeof plugin.install === 'function') {
	    plugin.install.apply(plugin, args);
	  } else {
	    plugin.apply(null, args);
	  }
	  return this;
	};

	/**
	 * Apply a global mixin by merging it into the default
	 * options.
	 */

	exports.mixin = function (mixin) {
	  var Vue = _.Vue;
	  Vue.options = _.mergeOptions(Vue.options, mixin);
	};

	/**
	 * Create asset registration methods with the following
	 * signature:
	 *
	 * @param {String} id
	 * @param {*} definition
	 */

	config._assetTypes.forEach(function (type) {
	  exports[type] = function (id, definition) {
	    if (!definition) {
	      return this.options[type + 's'][id];
	    } else {
	      if (type === 'component' && _.isPlainObject(definition)) {
	        definition.name = id;
	        definition = _.Vue.extend(definition);
	      }
	      this.options[type + 's'][id] = definition;
	    }
	  };
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);

	_.extend(exports, __webpack_require__(18));
	_.extend(exports, __webpack_require__(31));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var compileProps = __webpack_require__(19);
	var config = __webpack_require__(12);
	var textParser = __webpack_require__(20);
	var dirParser = __webpack_require__(22);
	var templateParser = __webpack_require__(29);
	var resolveAsset = _.resolveAsset;
	var componentDef = __webpack_require__(30);

	// terminal directives
	var terminalDirectives = ['repeat', 'if'];

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	exports.compile = function (el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _.toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function () {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host);
	      if (childLinkFn) childLinkFn(vm, childNodes, host);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	};

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  var originalDirCount = vm._directives.length;
	  linker();
	  return vm._directives.slice(originalDirCount);
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  return function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  };
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (!destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */

	exports.compileAndLinkProps = function (vm, el, props) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, null);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	};

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */

	exports.compileRoot = function (el, options) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs) {
	        contextLinkFn = compileDirectives(containerAttrs, options);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  }

	  return function rootLinkFn(vm, el) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	};

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && config.interpolate && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as a v-attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    if (textParser.parse(el.value)) {
	      el.setAttribute('value', el.value);
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (repeat & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  var tokens = textParser.parse(node.data);
	  if (!tokens) {
	    return null;
	  }
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    token.type = type;
	    token.def = resolveAsset(options, 'directives', type);
	    token.descriptor = dirParser.parse(token.value)[0];
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = _.toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = vm.$eval(value);
	          if (token.html) {
	            _.replace(node, templateParser.parse(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.type, node, token.descriptor, token.def);
	        }
	      }
	    }
	    _.replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = _.toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (_.commonTagRE.test(tag)) return;
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Boolean} hasAttrs
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options, hasAttrs) {
	  var componentId = _.checkComponent(el, options, hasAttrs);
	  if (componentId) {
	    var componentLinkFn = function componentLinkFn(vm, el, host) {
	      vm._bindDir('component', el, {
	        expression: componentId
	      }, componentDef, host);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, options) {
	  if (_.attr(el, 'pre') !== null) {
	    return skip;
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    if ((value = _.attr(el, dirName)) !== null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var descriptor = dirParser.parse(value)[0];
	  // no need to call resolveAsset since terminal directives
	  // are always internal
	  def = def || options.directives[dirName];
	  var fn = function terminalNodeLinkFn(vm, el, host) {
	    vm._bindDir(dirName, el, descriptor, def, host);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, dir, dirName, dirDef;
	  while (i--) {
	    attr = attrs[i];
	    name = attr.name;
	    value = attr.value;
	    if (name.indexOf(config.prefix) === 0) {
	      dirName = name.slice(config.prefix.length);
	      dirDef = resolveAsset(options, 'directives', dirName);
	      if (process.env.NODE_ENV !== 'production') {
	        _.assertAsset(dirDef, 'directive', dirName);
	      }
	      if (dirDef) {
	        dirs.push({
	          name: dirName,
	          descriptors: dirParser.parse(value),
	          def: dirDef
	        });
	      }
	    } else if (config.interpolate) {
	      dir = collectAttrDirective(name, value, options);
	      if (dir) {
	        dirs.push(dir);
	      }
	    }
	  }
	  // sort by priority, LOW to HIGH
	  if (dirs.length) {
	    dirs.sort(directiveComparator);
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    var dir, j, k;
	    while (i--) {
	      dir = directives[i];
	      if (dir._link) {
	        // custom link fn
	        dir._link(vm, el);
	      } else {
	        k = dir.descriptors.length;
	        for (j = 0; j < k; j++) {
	          vm._bindDir(dir.name, el, dir.descriptors[j], dir.def, host);
	        }
	      }
	    }
	  };
	}

	/**
	 * Check an attribute for potential dynamic bindings,
	 * and return a directive object.
	 *
	 * Special case: class interpolations are translated into
	 * v-class instead v-attr, so that it can work with user
	 * provided v-class bindings.
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {Object}
	 */

	function collectAttrDirective(name, value, options) {
	  var tokens = textParser.parse(value);
	  var isClass = name === 'class';
	  if (tokens) {
	    var dirName = isClass ? 'class' : 'attr';
	    var def = options.directives[dirName];
	    var i = tokens.length;
	    var allOneTime = true;
	    while (i--) {
	      var token = tokens[i];
	      if (token.tag && !token.oneTime) {
	        allOneTime = false;
	      }
	    }
	    var linker;
	    if (allOneTime) {
	      linker = function (vm, el) {
	        el.setAttribute(name, vm.$interpolate(value));
	      };
	    } else {
	      linker = function (vm, el) {
	        var exp = textParser.tokensToExp(tokens, vm);
	        var desc = isClass ? dirParser.parse(exp)[0] : dirParser.parse(name + ':' + exp)[0];
	        if (isClass) {
	          desc._rawClass = value;
	        }
	        vm._bindDir(dirName, el, desc, def);
	      };
	    }
	    return {
	      def: def,
	      _link: linker
	    };
	  }
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.def.priority || 0;
	  b = b.def.priority || 0;
	  return a > b ? 1 : -1;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var textParser = __webpack_require__(20);
	var propDef = __webpack_require__(23);
	var propBindingModes = __webpack_require__(12)._propBindingModes;

	// regexes
	var identRE = __webpack_require__(27).identRE;
	var dataAttrRE = /^data-/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	var literalValueRE = /^(true|false)$|^\d.*/;

	/**
	 * Compile param attributes on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */

	module.exports = function compileProps(el, propOptions) {
	  var props = [];
	  var i = propOptions.length;
	  var options, name, attr, value, path, prop, literal, single;
	  while (i--) {
	    options = propOptions[i];
	    name = options.name;
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = _.camelize(name.replace(dataAttrRE, ''));
	    if (!identRE.test(path)) {
	      process.env.NODE_ENV !== 'production' && _.warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	    attr = _.hyphenate(name);
	    value = el.getAttribute(attr);
	    if (value === null) {
	      attr = 'data-' + attr;
	      value = el.getAttribute(attr);
	    }
	    // create a prop descriptor
	    prop = {
	      name: name,
	      raw: value,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY
	    };
	    if (value !== null) {
	      // important so that this doesn't get compiled
	      // again as a normal attribute binding
	      el.removeAttribute(attr);
	      var tokens = textParser.parse(value);
	      if (tokens) {
	        prop.dynamic = true;
	        prop.parentPath = textParser.tokensToExp(tokens);
	        // check prop binding type.
	        single = tokens.length === 1;
	        literal = literalValueRE.test(prop.parentPath);
	        // one time: {{* prop}}
	        if (literal || single && tokens[0].oneTime) {
	          prop.mode = propBindingModes.ONE_TIME;
	        } else if (!literal && (single && tokens[0].twoWay)) {
	          if (settablePathRE.test(prop.parentPath)) {
	            prop.mode = propBindingModes.TWO_WAY;
	          } else {
	            process.env.NODE_ENV !== 'production' && _.warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + prop.parentPath);
	          }
	        }
	        if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	          _.warn('Prop "' + name + '" expects a two-way binding type.');
	        }
	      }
	    } else if (options && options.required) {
	      process.env.NODE_ENV !== 'production' && _.warn('Missing required prop: ' + name);
	    }
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	};

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, el) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value;
	    while (i--) {
	      prop = props[i];
	      path = prop.path;
	      vm._props[path] = prop;
	      options = prop.options;
	      if (prop.raw === null) {
	        // initialize absent prop
	        _.initProp(vm, prop, getDefault(options));
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = vm._context.$get(prop.parentPath);
	            _.initProp(vm, prop, value);
	          } else {
	            // dynamic binding
	            vm._bindDir('prop', el, prop, propDef);
	          }
	        } else {
	          process.env.NODE_ENV !== 'production' && _.warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + prop.raw + '"');
	        }
	      } else {
	        // literal, cast it and just set once
	        var raw = prop.raw;
	        value = options.type === Boolean && raw === '' ? true
	        // do not cast emptry string.
	        // _.toNumber casts empty string to 0.
	        : raw.trim() ? _.toBoolean(_.toNumber(raw)) : raw;
	        _.initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Object} options
	 * @return {*}
	 */

	function getDefault(options) {
	  // no default, return undefined
	  if (!options.hasOwnProperty('default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (_.isObject(def)) {
	    process.env.NODE_ENV !== 'production' && _.warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def() : def;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Cache = __webpack_require__(21);
	var config = __webpack_require__(12);
	var dirParser = __webpack_require__(22);
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache, tagRE, htmlRE, firstChar, lastChar;

	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	/**
	 * Compile the interpolation tag regex.
	 *
	 * @return {RegExp}
	 */

	function compileRegex() {
	  config._delimitersChanged = false;
	  var open = config.delimiters[0];
	  var close = config.delimiters[1];
	  firstChar = open.charAt(0);
	  lastChar = close.charAt(close.length - 1);
	  var firstCharRE = escapeRegex(firstChar);
	  var lastCharRE = escapeRegex(lastChar);
	  var openRE = escapeRegex(open);
	  var closeRE = escapeRegex(close);
	  tagRE = new RegExp(firstCharRE + '?' + openRE + '(.+?)' + closeRE + lastCharRE + '?', 'g');
	  htmlRE = new RegExp('^' + firstCharRE + openRE + '.*' + closeRE + lastCharRE + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	exports.parse = function (text) {
	  if (config._delimitersChanged) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, value, first, oneTime, twoWay;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    first = match[1].charCodeAt(0);
	    oneTime = first === 42; // *
	    twoWay = first === 64; // @
	    value = oneTime || twoWay ? match[1].slice(1) : match[1];
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: htmlRE.test(match[0]),
	      oneTime: oneTime,
	      twoWay: twoWay
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	};

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	exports.tokensToExp = function (tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	};

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} single
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? vm && token.oneTime ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = dirParser.parse(exp)[0];
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * A doubly linked list-based Least Recently Used (LRU)
	 * cache. Will keep most recently used items while
	 * discarding least recently used items when its limit is
	 * reached. This is a bare-bone version of
	 * Rasmus Andersson's js-lru:
	 *
	 *   https://github.com/rsms/js-lru
	 *
	 * @param {Number} limit
	 * @constructor
	 */

	"use strict";

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  };
	  this._keymap[key] = entry;
	  if (this.tail) {
	    this.tail.newer = entry;
	    entry.older = this.tail;
	  } else {
	    this.head = entry;
	  }
	  this.tail = entry;
	  if (this.size === this.limit) {
	    return this.shift();
	  } else {
	    this.size++;
	  }
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	module.exports = Cache;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var Cache = __webpack_require__(21);
	var cache = new Cache(1000);
	var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/;
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var c, i, l;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	var begin;
	var argIndex;
	var dirs;
	var dir;
	var lastFilterIndex;
	var arg;

	/**
	 * Push a directive object into the result Array
	 */

	function pushDir() {
	  dir.raw = str.slice(begin, i).trim();
	  if (dir.expression === undefined) {
	    dir.expression = str.slice(argIndex, i).trim();
	  } else if (lastFilterIndex !== begin) {
	    pushFilter();
	  }
	  if (i === 0 || dir.expression) {
	    dirs.push(dir);
	  }
	}

	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  var stripped = reservedArgRE.test(arg) ? arg : _.stripQuotes(arg);
	  var dynamic = stripped === false;
	  return {
	    value: dynamic ? arg : stripped,
	    dynamic: dynamic
	  };
	}

	/**
	 * Parse a directive string into an Array of AST-like
	 * objects representing directives.
	 *
	 * Example:
	 *
	 * "click: a = a + 1 | uppercase" will yield:
	 * {
	 *   arg: 'click',
	 *   expression: 'a = a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Array<Object>}
	 */

	exports.parse = function (s) {

	  var hit = cache.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = begin = argIndex = 0;
	  lastFilterIndex = 0;
	  dirs = [];
	  dir = {};
	  arg = null;

	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble;
	    } else if (c === 0x2C && // comma
	    !paren && !curly && !square) {
	      // reached the end of a directive
	      pushDir();
	      // reset & skip the comma
	      dir = {};
	      begin = argIndex = lastFilterIndex = i + 1;
	    } else if (c === 0x3A && // colon
	    !dir.expression && !dir.arg) {
	      // argument
	      arg = str.slice(begin, i).trim();
	      // test for valid argument here
	      // since we may have caught stuff like first half of
	      // an object literal or a ternary expression.
	      if (argRE.test(arg)) {
	        argIndex = i + 1;
	        dir.arg = _.stripQuotes(arg) || arg;
	      }
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(argIndex, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (i === 0 || begin !== i) {
	    pushDir();
	  }

	  cache.put(s, dirs);
	  return dirs;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// NOTE: the prop internal directive is compiled and linked
	// during _initScope(), before the created hook is called.
	// The purpose is to make the initial prop values available
	// inside `created` hooks and `data` functions.

	'use strict';

	var _ = __webpack_require__(7);
	var Watcher = __webpack_require__(24);
	var bindingModes = __webpack_require__(12)._propBindingModes;

	module.exports = {

	  bind: function bind() {

	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this._descriptor;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;

	    this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      if (_.assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, { sync: true });

	    // set the child initial value.
	    var value = this.parentWatcher.value;
	    if (childKey === '$data') {
	      child._data = value;
	    } else {
	      _.initProp(child, prop, value);
	    }

	    // setup two-way binding
	    if (prop.mode === bindingModes.TWO_WAY) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parent.$set(parentKey, val);
	        }, { sync: true });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var config = __webpack_require__(12);
	var Dep = __webpack_require__(25);
	var expParser = __webpack_require__(26);
	var batcher = __webpack_require__(28);
	var uid = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 * @constructor
	 */

	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    _.extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = Object.create(null);
	  this.newDeps = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = expParser.parse(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep;
	    if (!this.deps[id]) {
	      this.deps[id] = dep;
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var vm = this.vm;
	  var value;
	  try {
	    value = this.getter.call(vm, vm);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      _.warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = vm._applyFilters(value, null, this.filters, false);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var vm = this.vm;
	  if (this.filters) {
	    value = vm._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(vm, vm, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      _.warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDeps = Object.create(null);
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var ids = Object.keys(this.deps);
	  var i = ids.length;
	  while (i--) {
	    var id = ids[i];
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    batcher.push(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and Array watchers should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (_.isArray(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          _.nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps);
	  var i = depIds.length;
	  while (i--) {
	    this.deps[depIds[i]].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this);
	    }
	    var depIds = Object.keys(this.deps);
	    var i = depIds.length;
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {Object} obj
	 */

	function traverse(obj) {
	  var key, val, i;
	  for (key in obj) {
	    val = obj[key];
	    if (_.isArray(val)) {
	      i = val.length;
	      while (i--) traverse(val[i]);
	    } else if (_.isObject(val)) {
	      traverse(val);
	    }
	  }
	}

	module.exports = Watcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var uid = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */

	function Dep() {
	  this.id = uid++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = _.toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	module.exports = Dep;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var Path = __webpack_require__(27);
	var Cache = __webpack_require__(21);
	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g;
	var booleanLiteralRE = /^(true|false)$/;

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function compileExpFns(exp, needSet) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && _.warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(pathReplaceRE, rewrite).replace(restoreRE, restore);
	  var getter = makeGetter(body);
	  if (getter) {
	    return {
	      get: getter,
	      body: body,
	      set: needSet ? makeSetter(body) : null
	    };
	  }
	}

	/**
	 * Compile getter setters for a simple path.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compilePathFns(exp) {
	  var getter, path;
	  if (exp.indexOf('[') < 0) {
	    // really simple path
	    path = exp.split('.');
	    path.raw = exp;
	    getter = Path.compileGetter(path);
	  } else {
	    // do the real parsing
	    path = Path.parse(exp);
	    getter = path.get;
	  }
	  return {
	    get: getter,
	    // always generate setter for simple paths
	    set: function set(obj, val) {
	      Path.set(obj, path, val);
	    }
	  };
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetter(body) {
	  try {
	    return new Function('scope', 'return ' + body + ';');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && _.warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}

	/**
	 * Build a setter function.
	 *
	 * This is only needed in rare situations like "a[b]" where
	 * a settable path requires dynamic evaluation.
	 *
	 * This setter function may throw error when called if the
	 * expression body is not a valid left-hand expression in
	 * assignment.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeSetter(body) {
	  try {
	    return new Function('scope', 'value', body + '=value;');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && _.warn('Invalid setter function body: ' + body);
	  }
	}

	/**
	 * Check for setter existence on a cache hit.
	 *
	 * @param {Function} hit
	 */

	function checkSetter(hit) {
	  if (!hit.set) {
	    hit.set = makeSetter(hit.body);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	exports.parse = function (exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet) {
	      checkSetter(hit);
	    }
	    return hit;
	  }
	  // we do a simple path check to optimize for them.
	  // the check fails valid paths with unusal whitespaces,
	  // but that's too rare and we don't care.
	  // also skip boolean literals and paths that start with
	  // global "Math"
	  var res = exports.isSimplePath(exp) ? compilePathFns(exp) : compileExpFns(exp, needSet);
	  expressionCache.put(exp, res);
	  return res;
	};

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	exports.isSimplePath = function (exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var Cache = __webpack_require__(21);
	var pathCache = new Cache(1000);
	var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/;

	// actions
	var APPEND = 0;
	var PUSH = 1;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var BEFORE_ELEMENT = 4;
	var AFTER_ZERO = 5;
	var IN_INDEX = 6;
	var IN_SINGLE_QUOTE = 7;
	var IN_DOUBLE_QUOTE = 8;
	var IN_SUB_PATH = 9;
	var AFTER_ELEMENT = 10;
	var AFTER_PATH = 11;
	var ERROR = 12;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [BEFORE_ELEMENT, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[BEFORE_ELEMENT] = {
	  'ws': [BEFORE_ELEMENT],
	  '0': [AFTER_ZERO, APPEND],
	  'number': [IN_INDEX, APPEND],
	  "'": [IN_SINGLE_QUOTE, APPEND, ''],
	  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
	  'ident': [IN_SUB_PATH, APPEND, '*']
	};

	pathStateMachine[AFTER_ZERO] = {
	  'ws': [AFTER_ELEMENT, PUSH],
	  ']': [IN_PATH, PUSH]
	};

	pathStateMachine[IN_INDEX] = {
	  '0': [IN_INDEX, APPEND],
	  'number': [IN_INDEX, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  'ident': [IN_SUB_PATH, APPEND],
	  '0': [IN_SUB_PATH, APPEND],
	  'number': [IN_SUB_PATH, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	};

	pathStateMachine[AFTER_ELEMENT] = {
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Parse a string path into an array of segments
	 * Todo implement cache
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];
	  actions[PUSH] = function () {
	    if (key === undefined) {
	      return;
	    }
	    keys.push(key);
	    key = undefined;
	  };
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar === '*' ? newChar + c : newChar;
	      action();
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * Format a accessor segment based on its type.
	 *
	 * @param {String} key
	 * @return {Boolean}
	 */

	function formatAccessor(key) {
	  if (identRE.test(key)) {
	    // identifier
	    return '.' + key;
	  } else if (+key === key >>> 0) {
	    // bracket index
	    return '[' + key + ']';
	  } else if (key.charAt(0) === '*') {
	    return '[o' + formatAccessor(key.slice(1)) + ']';
	  } else {
	    // bracket string
	    return '["' + key.replace(/"/g, '\\"') + '"]';
	  }
	}

	/**
	 * Compiles a getter function with a fixed path.
	 * The fixed path getter supresses errors.
	 *
	 * @param {Array} path
	 * @return {Function}
	 */

	exports.compileGetter = function (path) {
	  var body = 'return o' + path.map(formatAccessor).join('');
	  return new Function('o', body);
	};

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	exports.parse = function (path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parsePath(path);
	    if (hit) {
	      hit.get = exports.compileGetter(hit);
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	};

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	exports.get = function (obj, path) {
	  path = exports.parse(path);
	  if (path) {
	    return path.get(obj);
	  }
	};

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	exports.set = function (obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = exports.parse(path);
	  }
	  if (!path || !_.isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = original[key.slice(1)];
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!_.isObject(obj)) {
	        warnNonExistent(path);
	        obj = {};
	        last.$add(key, obj);
	      }
	    } else {
	      if (_.isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        warnNonExistent(path);
	        obj.$add(key, val);
	      }
	    }
	  }
	  return true;
	};

	function warnNonExistent(path) {
	  process.env.NODE_ENV !== 'production' && _.warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var config = __webpack_require__(12);

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  resetBatcherState();
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        _.warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	exports.push = function (watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      _.nextTick(flushBatcherQueue);
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var Cache = __webpack_require__(21);
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  _default: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return _.isTemplate(node) && node.content instanceof DocumentFragment;
	}

	var tagRE = /<([\w:]+)/;
	var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE);
	  var entityMatch = entityRE.test(templateString);

	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {

	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map._default;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString.trim() + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }

	  templateCache.put(templateString, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    _.trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clone = exports.clone(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clone.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  _.trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/show_bug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (_.inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (_.inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	exports.clone = function (node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var clone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      clone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = clone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(exports.clone(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	};

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *    Possible values include:
	 *    - DocumentFragment object
	 *    - Node object of type Template
	 *    - id selector: '#some-template-id'
	 *    - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} clone
	 * @param {Boolean} noSelector
	 * @return {DocumentFragment|undefined}
	 */

	exports.parse = function (template, clone, noSelector) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    _.trimNode(template);
	    return clone ? exports.clone(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!noSelector && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && clone ? exports.clone(frag) : frag;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var config = __webpack_require__(12);
	var templateParser = __webpack_require__(29);

	module.exports = {

	  isLiteral: true,

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   v-component="comp"
	   *
	   * - dynamic:
	   *   v-component="{{currentView}}"
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // create a ref anchor
	      this.anchor = _.createAnchor('v-component');
	      _.replace(this.el, this.anchor);
	      // check keep-alive options.
	      // If yes, instead of destroying the active vm when
	      // hiding (v-if) or switching (dynamic literal) it,
	      // we simply remove it from the DOM and save it in a
	      // cache object, with its constructor id as the key.
	      this.keepAlive = this._checkParam('keep-alive') != null;
	      // wait for event before insertion
	      this.waitForEvent = this._checkParam('wait-for');
	      // check ref
	      this.refID = this._checkParam(config.prefix + 'ref');
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.template = _.extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // if static, build right now.
	      if (!this._isDynamicLiteral) {
	        this.resolveComponent(this.expression, _.bind(this.initStatic, this));
	      } else {
	        // check dynamic component params
	        this.transMode = this._checkParam('transition-mode');
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Initialize a static component.
	   */

	  initStatic: function initStatic() {
	    // wait-for
	    var anchor = this.anchor;
	    var options;
	    var waitFor = this.waitForEvent;
	    if (waitFor) {
	      options = {
	        created: function created() {
	          this.$once(waitFor, function () {
	            this.$before(anchor);
	          });
	        }
	      };
	    }
	    var child = this.build(options);
	    this.setCurrent(child);
	    if (!this.waitForEvent) {
	      child.$before(anchor);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. v-component="{{view}}"
	   */

	  update: function update(value) {
	    this.setComponent(value);
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.unsetCurrent();
	    } else {
	      this.resolveComponent(value, _.bind(function () {
	        this.unbuild(true);
	        var options;
	        var self = this;
	        var waitFor = this.waitForEvent;
	        if (waitFor) {
	          options = {
	            created: function created() {
	              this.$once(waitFor, function () {
	                self.waitingFor = null;
	                self.transition(this, cb);
	              });
	            }
	          };
	        }
	        var cached = this.getCached();
	        var newComponent = this.build(options);
	        if (!waitFor || cached) {
	          this.transition(newComponent, cb);
	        } else {
	          this.waitingFor = newComponent;
	        }
	      }, this));
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */

	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = _.cancellable(function (Component) {
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        el: templateParser.clone(this.el),
	        template: this.template,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.template,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        _context: this.vm
	      };
	      // extra options
	      if (extraOptions) {
	        _.extend(options, extraOptions);
	      }
	      var parent = this._host || this.vm;
	      var child = parent.$addChild(options, this.Component);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    this.setCurrent(target);
	    switch (self.transMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Set childVM and parent ref
	   */

	  setCurrent: function setCurrent(child) {
	    this.unsetCurrent();
	    this.childVM = child;
	    var refID = child._refID || this.refID;
	    if (refID) {
	      this.vm.$[refID] = child;
	    }
	  },

	  /**
	   * Unset childVM and parent ref
	   */

	  unsetCurrent: function unsetCurrent() {
	    var child = this.childVM;
	    this.childVM = null;
	    var refID = child && child._refID || this.refID;
	    if (refID) {
	      this.vm.$[refID] = null;
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    this.unsetCurrent();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var config = __webpack_require__(12);
	var templateParser = __webpack_require__(29);

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-repeat.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	exports.transclude = function (el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (_.isTemplate(el)) {
	    el = templateParser.parse(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<content></content>';
	    }
	    if (options.template) {
	      options._content = _.extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    _.prepend(_.createAnchor('v-start', true), el);
	    el.appendChild(_.createAnchor('v-end', true));
	  }
	  return el;
	};

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = templateParser.parse(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && _.warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || _.resolveAsset(options, 'components', tag) || replacer.hasAttribute(config.prefix + 'component') ||
	      // element directive
	      _.resolveAsset(options, 'elementDirectives', tag) ||
	      // repeat block
	      replacer.hasAttribute(config.prefix + 'repeat')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && _.warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return _.toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class') {
	      value = to.getAttribute(name) + ' ' + value;
	      to.setAttribute(name, value);
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// manipulation directives
	'use strict';

	exports.text = __webpack_require__(33);
	exports.html = __webpack_require__(34);
	exports.attr = __webpack_require__(35);
	exports.show = __webpack_require__(36);
	exports['class'] = __webpack_require__(38);
	exports.el = __webpack_require__(39);
	exports.ref = __webpack_require__(40);
	exports.cloak = __webpack_require__(41);
	exports.style = __webpack_require__(42);
	exports.transition = __webpack_require__(43);

	// event listener directives
	exports.on = __webpack_require__(46);
	exports.model = __webpack_require__(47);

	// logic control directives
	exports.repeat = __webpack_require__(52);
	exports['if'] = __webpack_require__(53);

	// internal directives that should not be used directly
	// but we still want to expose them for advanced usage.
	exports._component = __webpack_require__(30);
	exports._prop = __webpack_require__(23);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);

	module.exports = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _.toString(value);
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var templateParser = __webpack_require__(29);

	module.exports = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = _.createAnchor('v-html');
	      _.replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _.toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      _.remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = templateParser.parse(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = _.toArray(frag.childNodes);
	    _.before(frag, this.anchor);
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// xlink
	'use strict';

	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	var inputProps = {
	  value: 1,
	  checked: 1,
	  selected: 1
	};

	module.exports = {

	  priority: 850,

	  update: function update(value) {
	    if (this.arg) {
	      this.setAttr(this.arg, value);
	    } else if (typeof value === 'object') {
	      this.objectHandler(value);
	    }
	  },

	  objectHandler: function objectHandler(value) {
	    // cache object attrs so that only changed attrs
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var attr, val;
	    for (attr in cache) {
	      if (!(attr in value)) {
	        this.setAttr(attr, null);
	        delete cache[attr];
	      }
	    }
	    for (attr in value) {
	      val = value[attr];
	      if (val !== cache[attr]) {
	        cache[attr] = val;
	        this.setAttr(attr, val);
	      }
	    }
	  },

	  setAttr: function setAttr(attr, value) {
	    if (inputProps[attr] && attr in this.el) {
	      if (!this.valueRemoved) {
	        this.el.removeAttribute(attr);
	        this.valueRemoved = true;
	      }
	      this.el[attr] = value;
	    } else if (value != null && value !== false) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value);
	      } else {
	        this.el.setAttribute(attr, value);
	      }
	    } else {
	      this.el.removeAttribute(attr);
	    }
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var transition = __webpack_require__(37);

	module.exports = function (value) {
	  var el = this.el;
	  transition.apply(el, value ? 1 : -1, function () {
	    el.style.display = value ? '' : 'none';
	  }, this.vm);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.append = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	};

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.before = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    _.before(el, target);
	  }, vm, cb);
	};

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.remove = function (el, vm, cb) {
	  apply(el, -1, function () {
	    _.remove(el);
	  }, vm, cb);
	};

	/**
	 * Remove by appending to another parent with transition.
	 * This is only used in block operations.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.removeThenAppend = function (el, target, vm, cb) {
	  apply(el, -1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	};

	/**
	 * Append the childNodes of a fragment to target.
	 *
	 * @param {DocumentFragment} block
	 * @param {Node} target
	 * @param {Vue} vm
	 */

	exports.blockAppend = function (block, target, vm) {
	  var nodes = _.toArray(block.childNodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    exports.before(nodes[i], target, vm);
	  }
	};

	/**
	 * Remove a block of nodes between two edge nodes.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 */

	exports.blockRemove = function (start, end, vm) {
	  var node = start.nextSibling;
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    exports.remove(node, vm);
	    node = next;
	  }
	};

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	var apply = exports.apply = function (el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !_.transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var addClass = _.addClass;
	var removeClass = _.removeClass;

	module.exports = {

	  bind: function bind() {
	    // interpolations like class="{{abc}}" are converted
	    // to v-class, and we need to remove the raw,
	    // uninterpolated className at binding time.
	    var raw = this._descriptor._rawClass;
	    if (raw) {
	      this.prevKeys = raw.trim().split(/\s+/);
	    }
	  },

	  update: function update(value) {
	    if (this.arg) {
	      // single toggle
	      if (value) {
	        addClass(this.el, this.arg);
	      } else {
	        removeClass(this.el, this.arg);
	      }
	    } else {
	      if (value && typeof value === 'string') {
	        this.handleObject(stringToObject(value));
	      } else if (_.isPlainObject(value)) {
	        this.handleObject(value);
	      } else {
	        this.cleanup();
	      }
	    }
	  },

	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },

	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (!value || !value.hasOwnProperty(key)) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};

	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {

	  isLiteral: true,

	  bind: function bind() {
	    this.vm.$$[this.expression] = this.el;
	  },

	  unbind: function unbind() {
	    delete this.vm.$$[this.expression];
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);

	module.exports = {

	  isLiteral: true,

	  bind: function bind() {
	    var vm = this.el.__vue__;
	    if (!vm) {
	      process.env.NODE_ENV !== 'production' && _.warn('v-ref should only be used on a component root element.');
	      return;
	    }
	    // If we get here, it means this is a `v-ref` on a
	    // child, because parent scope `v-ref` is stripped in
	    // `v-component` already. So we just record our own ref
	    // here - it will overwrite parent ref in `v-component`,
	    // if any.
	    vm._refID = this.expression;
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var config = __webpack_require__(12);

	module.exports = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute(config.prefix + 'cloak');
	    });
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var camelRE = /([a-z])([A-Z])/g;
	var testEl = null;
	var propCache = {};

	module.exports = {

	  deep: true,

	  update: function update(value) {
	    if (this.arg) {
	      this.setProp(this.arg, value);
	    } else {
	      if (typeof value === 'object') {
	        this.objectHandler(value);
	      } else {
	        this.el.style.cssText = value;
	      }
	    }
	  },

	  objectHandler: function objectHandler(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var prop, val;
	    for (prop in cache) {
	      if (!(prop in value)) {
	        this.setProp(prop, null);
	        delete cache[prop];
	      }
	    }
	    for (prop in value) {
	      val = value[prop];
	      if (val !== cache[prop]) {
	        cache[prop] = val;
	        this.setProp(prop, val);
	      }
	    }
	  },

	  setProp: function setProp(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = prop.replace(camelRE, '$1-$2').toLowerCase();
	  var camel = _.camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var Transition = __webpack_require__(44);

	module.exports = {

	  priority: 1000,
	  isLiteral: true,

	  bind: function bind() {
	    if (!this._isDynamicLiteral) {
	      this.update(this.expression);
	    }
	  },

	  update: function update(id, oldId) {
	    var el = this.el;
	    var vm = this.el.__vue__ || this.vm;
	    var hooks = _.resolveAsset(vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, vm);
	    if (oldId) {
	      _.removeClass(el, oldId + '-transition');
	    }
	    _.addClass(el, id + '-transition');
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var queue = __webpack_require__(45);
	var addClass = _.addClass;
	var removeClass = _.removeClass;
	var transitionEndEvent = _.transitionEndEvent;
	var animationEndEvent = _.animationEndEvent;
	var transDurationProp = _.transitionProp + 'Duration';
	var animDurationProp = _.animationProp + 'Duration';

	var TYPE_TRANSITION = 1;
	var TYPE_ANIMATION = 2;

	var uid = 0;

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */

	function Transition(el, id, hooks, vm) {
	  this.id = uid++;
	  this.el = el;
	  this.enterClass = id + '-enter';
	  this.leaveClass = id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = _.bind(self[m], self);
	  });
	}

	var p = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  queue.push(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p.enterNextTick = function () {
	  this.justEntered = true;
	  _.nextTick(function () {
	    this.justEntered = false;
	  }, this);
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      queue.push(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    _.off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = _.cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      _.off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  _.on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  return el.style.display === 'none' || el.style.visibility === 'hidden' || el.hidden;
	}

	module.exports = Transition;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var queue = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	exports.push = function (job) {
	  queue.push(job);
	  if (!queued) {
	    queued = true;
	    _.nextTick(flush);
	  }
	};

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]();
	  }
	  queue = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);

	module.exports = {

	  acceptStatement: true,
	  priority: 700,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        _.on(self.el.contentWindow, self.arg, self.handler);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && _.warn('Directive v-on="' + this.arg + ': ' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	    this.reset();
	    var vm = this.vm;
	    this.handler = function (e) {
	      e.targetVM = vm;
	      vm.$event = e;
	      var res = handler(e);
	      vm.$event = null;
	      return res;
	    };
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      _.on(this.el, this.arg, this.handler);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      _.off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);

	var handlers = {
	  text: __webpack_require__(48),
	  radio: __webpack_require__(49),
	  select: __webpack_require__(50),
	  checkbox: __webpack_require__(51)
	};

	module.exports = {

	  priority: 800,
	  twoWay: true,
	  handlers: handlers,

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   *     - TODO: more types may be supplied as a plugin
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && _.warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);

	module.exports = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';

	    // check params
	    // - lazy: update model on "change" instead of "input"
	    var lazy = this._checkParam('lazy') != null;
	    // - number: cast value into number when updating model.
	    var number = this._checkParam('number') != null;
	    // - debounce: debounce the input listener
	    var debounce = parseInt(this._checkParam('debounce'), 10);

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!_.isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        self.listener();
	      });
	    }

	    // Now attach the main listener
	    this.listener = function () {
	      if (composing) return;
	      var val = number || isRange ? _.toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      _.nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	    if (debounce) {
	      this.listener = _.debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      jQuery(el).on('change', this.listener);
	      if (!lazy) {
	        jQuery(el).on('input', this.listener);
	      }
	    } else {
	      this.on('change', this.listener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && _.isIE9) {
	      this.on('cut', function () {
	        _.nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this._initValue = number ? _.toNumber(el.value) : el.value;
	    }
	  },

	  update: function update(value) {
	    this.el.value = _.toString(value);
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      jQuery(el).off('change', this.listener);
	      jQuery(el).off('input', this.listener);
	    }
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);

	module.exports = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var number = this._checkParam('number') != null;
	    var expression = this._checkParam('exp');

	    this.getValue = function () {
	      var val = el.value;
	      if (number) {
	        val = _.toNumber(val);
	      } else if (expression !== null) {
	        val = self.vm.$eval(expression);
	      }
	      return val;
	    };

	    this.on('change', function () {
	      self.set(self.getValue());
	    });

	    if (el.checked) {
	      this._initValue = this.getValue();
	    }
	  },

	  update: function update(value) {
	    this.el.checked = _.looseEqual(value, this.getValue());
	  }
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var Watcher = __webpack_require__(24);
	var dirParser = __webpack_require__(22);

	module.exports = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check options param
	    var optionsParam = this._checkParam('options');
	    if (optionsParam) {
	      initOptions.call(this, optionsParam);
	    }
	    this.number = this._checkParam('number') != null;
	    this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.on('change', function () {
	      var value = getValue(el, self.multiple);
	      value = self.number ? _.isArray(value) ? value.map(_.toNumber) : _.toNumber(value) : value;
	      self.set(value);
	    });

	    // check initial value (inline selected attribute)
	    checkInitialValue.call(this);

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    if (value == null) {
	      if (this.defaultOption) {
	        this.defaultOption.selected = true;
	      }
	      return;
	    }
	    var multi = this.multiple && _.isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf(value, val) > -1 : _.looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    this.vm.$off('hook:attached', this.forceUpdate);
	    if (this.optionWatcher) {
	      this.optionWatcher.teardown();
	    }
	  }
	};

	/**
	 * Initialize the option list from the param.
	 *
	 * @param {String} expression
	 */

	function initOptions(expression) {
	  var self = this;
	  var el = self.el;
	  var defaultOption = self.defaultOption = self.el.options[0];
	  var descriptor = dirParser.parse(expression)[0];
	  function optionUpdateWatcher(value) {
	    if (_.isArray(value)) {
	      // clear old options.
	      // cannot reset innerHTML here because IE family get
	      // confused during compilation.
	      var i = el.options.length;
	      while (i--) {
	        var option = el.options[i];
	        if (option !== defaultOption) {
	          var parentNode = option.parentNode;
	          if (parentNode === el) {
	            parentNode.removeChild(option);
	          } else {
	            el.removeChild(parentNode);
	            i = el.options.length;
	          }
	        }
	      }
	      buildOptions(el, value);
	      self.forceUpdate();
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn('Invalid options value for v-model: ' + value);
	    }
	  }
	  this.optionWatcher = new Watcher(this.vm, descriptor.expression, optionUpdateWatcher, {
	    deep: true,
	    filters: descriptor.filters
	  });
	  // update with initial value
	  optionUpdateWatcher(this.optionWatcher.value);
	}

	/**
	 * Build up option elements. IE9 doesn't create options
	 * when setting innerHTML on <select> elements, so we have
	 * to use DOM API here.
	 *
	 * @param {Element} parent - a <select> or an <optgroup>
	 * @param {Array} options
	 */

	function buildOptions(parent, options) {
	  var op, el;
	  for (var i = 0, l = options.length; i < l; i++) {
	    op = options[i];
	    if (!op.options) {
	      el = document.createElement('option');
	      if (typeof op === 'string' || typeof op === 'number') {
	        el.text = el.value = op;
	      } else {
	        if (op.value != null && !_.isObject(op.value)) {
	          el.value = op.value;
	        }
	        // object values gets serialized when set as value,
	        // so we store the raw value as a different property
	        el._value = op.value;
	        el.text = op.text || '';
	        if (op.disabled) {
	          el.disabled = true;
	        }
	      }
	    } else {
	      el = document.createElement('optgroup');
	      el.label = op.label;
	      buildOptions(el, op.options);
	    }
	    parent.appendChild(el);
	  }
	}

	/**
	 * Check the initial value for selected options.
	 */

	function checkInitialValue() {
	  var initValue;
	  var options = this.el.options;
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (options[i].hasAttribute('selected')) {
	      if (this.multiple) {
	        (initValue || (initValue = [])).push(options[i].value);
	      } else {
	        initValue = options[i].value;
	      }
	    }
	  }
	  if (typeof initValue !== 'undefined') {
	    this._initValue = this.number ? _.toNumber(initValue) : initValue;
	  }
	}

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @return {Array|*}
	 */

	function getValue(el, multi) {
	  var res = multi ? [] : null;
	  var op, val;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    if (op.selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (_.looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);

	module.exports = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var trueExp = this._checkParam('true-exp');
	    var falseExp = this._checkParam('false-exp');

	    this._matchValue = function (value) {
	      if (trueExp !== null) {
	        return _.looseEqual(value, self.vm.$eval(trueExp));
	      } else {
	        return !!value;
	      }
	    };

	    function getValue() {
	      var val = el.checked;
	      if (val && trueExp !== null) {
	        val = self.vm.$eval(trueExp);
	      }
	      if (!val && falseExp !== null) {
	        val = self.vm.$eval(falseExp);
	      }
	      return val;
	    }

	    this.on('change', function () {
	      self.set(getValue());
	    });

	    if (el.checked) {
	      this._initValue = getValue();
	    }
	  },

	  update: function update(value) {
	    this.el.checked = this._matchValue(value);
	  }
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var config = __webpack_require__(12);
	var isObject = _.isObject;
	var isPlainObject = _.isPlainObject;
	var textParser = __webpack_require__(20);
	var expParser = __webpack_require__(26);
	var templateParser = __webpack_require__(29);
	var compiler = __webpack_require__(17);
	var uid = 0;

	// async component resolution states
	var UNRESOLVED = 0;
	var PENDING = 1;
	var RESOLVED = 2;
	var ABORTED = 3;

	module.exports = {

	  /**
	   * Setup.
	   */

	  bind: function bind() {

	    // some helpful tips...
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && this.el.tagName === 'OPTION' && this.el.parentNode && this.el.parentNode.__v_model) {
	      _.warn('Don\'t use v-repeat for v-model options; ' + 'use the `options` param instead: ' + 'http://vuejs.org/guide/forms.html#Dynamic_Select_Options');
	    }

	    // support for item in array syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/);
	    if (inMatch) {
	      this.arg = inMatch[1];
	      this._watcherExp = inMatch[2];
	    }
	    // uid as a cache identifier
	    this.id = '__v_repeat_' + ++uid;

	    // setup anchor nodes
	    this.start = _.createAnchor('v-repeat-start');
	    this.end = _.createAnchor('v-repeat-end');
	    _.replace(this.el, this.end);
	    _.before(this.start, this.end);

	    // check if this is a block repeat
	    this.template = _.isTemplate(this.el) ? templateParser.parse(this.el, true) : this.el;

	    // check for trackby param
	    this.idKey = this._checkParam('track-by');
	    // check for transition stagger
	    var stagger = +this._checkParam('stagger');
	    this.enterStagger = +this._checkParam('enter-stagger') || stagger;
	    this.leaveStagger = +this._checkParam('leave-stagger') || stagger;

	    // check for v-ref/v-el
	    this.refID = this._checkParam(config.prefix + 'ref');
	    this.elID = this._checkParam(config.prefix + 'el');

	    // check other directives that need to be handled
	    // at v-repeat level
	    this.checkIf();
	    this.checkComponent();

	    // create cache object
	    this.cache = Object.create(null);
	  },

	  /**
	   * Warn against v-if usage.
	   */

	  checkIf: function checkIf() {
	    if (_.attr(this.el, 'if') !== null) {
	      process.env.NODE_ENV !== 'production' && _.warn('Don\'t use v-if with v-repeat. ' + 'Use v-show or the "filterBy" filter instead.');
	    }
	  },

	  /**
	   * Check the component constructor to use for repeated
	   * instances. If static we resolve it now, otherwise it
	   * needs to be resolved at build time with actual data.
	   */

	  checkComponent: function checkComponent() {
	    this.componentState = UNRESOLVED;
	    var options = this.vm.$options;
	    var id = _.checkComponent(this.el, options);
	    if (!id) {
	      // default constructor
	      this.Component = _.Vue;
	      // inline repeats should inherit
	      this.inline = true;
	      // important: transclude with no options, just
	      // to ensure block start and block end
	      this.template = compiler.transclude(this.template);
	      var copy = _.extend({}, options);
	      copy._asComponent = false;
	      this._linkFn = compiler.compile(this.template, copy);
	    } else {
	      this.Component = null;
	      this.asComponent = true;
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _.extractContent(this.el, true);
	      }
	      var tokens = textParser.parse(id);
	      if (tokens) {
	        // dynamic component to be resolved later
	        var componentExp = textParser.tokensToExp(tokens);
	        this.componentGetter = expParser.parse(componentExp).get;
	      } else {
	        // static
	        this.componentId = id;
	        this.pendingData = null;
	      }
	    }
	  },

	  resolveComponent: function resolveComponent() {
	    this.componentState = PENDING;
	    this.vm._resolveComponent(this.componentId, _.bind(function (Component) {
	      if (this.componentState === ABORTED) {
	        return;
	      }
	      this.Component = Component;
	      this.componentState = RESOLVED;
	      this.realUpdate(this.pendingData);
	      this.pendingData = null;
	    }, this));
	  },

	  /**
	   * Resolve a dynamic component to use for an instance.
	   * The tricky part here is that there could be dynamic
	   * components depending on instance data.
	   *
	   * @param {Object} data
	   * @param {Object} meta
	   * @return {Function}
	   */

	  resolveDynamicComponent: function resolveDynamicComponent(data, meta) {
	    // create a temporary context object and copy data
	    // and meta properties onto it.
	    // use _.define to avoid accidentally overwriting scope
	    // properties.
	    var context = Object.create(this.vm);
	    var key;
	    for (key in data) {
	      _.define(context, key, data[key]);
	    }
	    for (key in meta) {
	      _.define(context, key, meta[key]);
	    }
	    var id = this.componentGetter.call(context, context);
	    var Component = _.resolveAsset(this.vm.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(Component, 'component', id);
	    }
	    if (!Component.options) {
	      process.env.NODE_ENV !== 'production' && _.warn('Async resolution is not supported for v-repeat ' + '+ dynamic component. (component: ' + id + ')');
	      return _.Vue;
	    }
	    return Component;
	  },

	  /**
	   * Update.
	   * This is called whenever the Array mutates. If we have
	   * a component, we might need to wait for it to resolve
	   * asynchronously.
	   *
	   * @param {Array|Number|String} data
	   */

	  update: function update(data) {
	    if (process.env.NODE_ENV !== 'production' && !_.isArray(data)) {
	      _.warn('v-repeat pre-converts Objects into Arrays, and ' + 'v-repeat filters should always return Arrays.');
	    }
	    if (this.componentId) {
	      var state = this.componentState;
	      if (state === UNRESOLVED) {
	        this.pendingData = data;
	        // once resolved, it will call realUpdate
	        this.resolveComponent();
	      } else if (state === PENDING) {
	        this.pendingData = data;
	      } else if (state === RESOLVED) {
	        this.realUpdate(data);
	      }
	    } else {
	      this.realUpdate(data);
	    }
	  },

	  /**
	   * The real update that actually modifies the DOM.
	   *
	   * @param {Array|Number|String} data
	   */

	  realUpdate: function realUpdate(data) {
	    this.vms = this.diff(data, this.vms);
	    // update v-ref
	    if (this.refID) {
	      this.vm.$[this.refID] = this.converted ? toRefObject(this.vms) : this.vms;
	    }
	    if (this.elID) {
	      this.vm.$$[this.elID] = this.vms.map(function (vm) {
	        return vm.$el;
	      });
	    }
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   * @param {Array} oldVms
	   * @return {Array}
	   */

	  diff: function diff(data, oldVms) {
	    var idKey = this.idKey;
	    var converted = this.converted;
	    var start = this.start;
	    var end = this.end;
	    var inDoc = _.inDoc(start);
	    var alias = this.arg;
	    var init = !oldVms;
	    var vms = new Array(data.length);
	    var obj, raw, vm, i, l, primitive;
	    // First pass, go through the new Array and fill up
	    // the new vms array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      obj = data[i];
	      raw = converted ? obj.$value : obj;
	      primitive = !isObject(raw);
	      vm = !init && this.getVm(raw, i, converted ? obj.$key : null);
	      if (vm) {
	        // reusable instance

	        if (process.env.NODE_ENV !== 'production' && vm._reused) {
	          _.warn('Duplicate objects found in v-repeat="' + this.expression + '": ' + JSON.stringify(raw));
	        }

	        vm._reused = true;
	        vm.$index = i; // update $index
	        // update data for track-by or object repeat,
	        // since in these two cases the data is replaced
	        // rather than mutated.
	        if (idKey || converted || primitive) {
	          if (alias) {
	            vm[alias] = raw;
	          } else if (_.isPlainObject(raw)) {
	            vm.$data = raw;
	          } else {
	            vm.$value = raw;
	          }
	        }
	      } else {
	        // new instance
	        vm = this.build(obj, i, true);
	        vm._reused = false;
	      }
	      vms[i] = vm;
	      // insert if this is first run
	      if (init) {
	        vm.$before(end);
	      }
	    }
	    // if this is the first run, we're done.
	    if (init) {
	      return vms;
	    }
	    // Second pass, go through the old vm instances and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldVms.length - vms.length;
	    for (i = 0, l = oldVms.length; i < l; i++) {
	      vm = oldVms[i];
	      if (!vm._reused) {
	        this.uncacheVm(vm);
	        vm.$destroy(false, true); // defer cleanup until removal
	        this.remove(vm, removalIndex++, totalRemoved, inDoc);
	      }
	    }
	    // final pass, move/insert new instances into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = vms.length; i < l; i++) {
	      vm = vms[i];
	      // this is the vm that we should be after
	      targetPrev = vms[i - 1];
	      prevEl = targetPrev ? targetPrev._staggerCb ? targetPrev._staggerAnchor : targetPrev._fragmentEnd || targetPrev.$el : start;
	      if (vm._reused && !vm._staggerCb) {
	        currentPrev = findPrevVm(vm, start, this.id);
	        if (currentPrev !== targetPrev) {
	          this.move(vm, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(vm, insertionIndex++, prevEl, inDoc);
	      }
	      vm._reused = false;
	    }
	    return vms;
	  },

	  /**
	   * Build a new instance and cache it.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {Boolean} needCache
	   */

	  build: function build(data, index, needCache) {
	    var meta = { $index: index };
	    if (this.converted) {
	      meta.$key = data.$key;
	    }
	    var raw = this.converted ? data.$value : data;
	    var alias = this.arg;
	    if (alias) {
	      data = {};
	      data[alias] = raw;
	    } else if (!isPlainObject(raw)) {
	      // non-object values
	      data = {};
	      meta.$value = raw;
	    } else {
	      // default
	      data = raw;
	    }
	    // resolve constructor
	    var Component = this.Component || this.resolveDynamicComponent(data, meta);
	    var parent = this._host || this.vm;
	    var vm = parent.$addChild({
	      el: templateParser.clone(this.template),
	      data: data,
	      inherit: this.inline,
	      template: this.inlineTemplate,
	      // repeater meta, e.g. $index, $key
	      _meta: meta,
	      // mark this as an inline-repeat instance
	      _repeat: this.inline,
	      // is this a component?
	      _asComponent: this.asComponent,
	      // linker cachable if no inline-template
	      _linkerCachable: !this.inlineTemplate && Component !== _.Vue,
	      // pre-compiled linker for simple repeats
	      _linkFn: this._linkFn,
	      // identifier, shows that this vm belongs to this collection
	      _repeatId: this.id,
	      // transclusion content owner
	      _context: this.vm
	    }, Component);
	    // cache instance
	    if (needCache) {
	      this.cacheVm(raw, vm, index, this.converted ? meta.$key : null);
	    }
	    // sync back changes for two-way bindings of primitive values
	    var dir = this;
	    if (this.rawType === 'object' && isPrimitive(raw)) {
	      vm.$watch(alias || '$value', function (val) {
	        if (dir.filters) {
	          process.env.NODE_ENV !== 'production' && _.warn('You seem to be mutating the $value reference of ' + 'a v-repeat instance (likely through v-model) ' + 'and filtering the v-repeat at the same time. ' + 'This will not work properly with an Array of ' + 'primitive values. Please use an Array of ' + 'Objects instead.');
	        }
	        dir._withLock(function () {
	          if (dir.converted) {
	            dir.rawValue[vm.$key] = val;
	          } else {
	            dir.rawValue.$set(vm.$index, val);
	          }
	        });
	      });
	    }
	    return vm;
	  },

	  /**
	   * Unbind, teardown everything
	   */

	  unbind: function unbind() {
	    this.componentState = ABORTED;
	    if (this.refID) {
	      this.vm.$[this.refID] = null;
	    }
	    if (this.vms) {
	      var i = this.vms.length;
	      var vm;
	      while (i--) {
	        vm = this.vms[i];
	        this.uncacheVm(vm);
	        vm.$destroy();
	      }
	    }
	  },

	  /**
	   * Cache a vm instance based on its data.
	   *
	   * If the data is an object, we save the vm's reference on
	   * the data object as a hidden property. Otherwise we
	   * cache them in an object and for each primitive value
	   * there is an array in case there are duplicates.
	   *
	   * @param {Object} data
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheVm: function cacheVm(data, vm, index, key) {
	    var idKey = this.idKey;
	    var cache = this.cache;
	    var primitive = !isObject(data);
	    var id;
	    if (key || idKey || primitive) {
	      id = idKey ? idKey === '$index' ? index : data[idKey] : key || index;
	      if (!cache[id]) {
	        cache[id] = vm;
	      } else if (!primitive && idKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && _.warn('Duplicate objects with the same track-by key in v-repeat: ' + id);
	      }
	    } else {
	      id = this.id;
	      if (data.hasOwnProperty(id)) {
	        if (data[id] === null) {
	          data[id] = vm;
	        } else {
	          process.env.NODE_ENV !== 'production' && _.warn('Duplicate objects found in v-repeat="' + this.expression + '": ' + JSON.stringify(data));
	        }
	      } else {
	        _.define(data, id, vm);
	      }
	    }
	    vm._raw = data;
	  },

	  /**
	   * Try to get a cached instance from a piece of data.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Vue|undefined}
	   */

	  getVm: function getVm(data, index, key) {
	    var idKey = this.idKey;
	    var primitive = !isObject(data);
	    if (key || idKey || primitive) {
	      var id = idKey ? idKey === '$index' ? index : data[idKey] : key || index;
	      return this.cache[id];
	    } else {
	      return data[this.id];
	    }
	  },

	  /**
	   * Delete a cached vm instance.
	   *
	   * @param {Vue} vm
	   */

	  uncacheVm: function uncacheVm(vm) {
	    var data = vm._raw;
	    var idKey = this.idKey;
	    var index = vm.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = vm.hasOwnProperty('$key') && vm.$key;
	    var primitive = !isObject(data);
	    if (idKey || key || primitive) {
	      var id = idKey ? idKey === '$index' ? index : data[idKey] : key || index;
	      this.cache[id] = null;
	    } else {
	      data[this.id] = null;
	      vm._raw = null;
	    }
	  },

	  /**
	   * Insert an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDoc
	   */

	  insert: function insert(vm, index, prevEl, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel();
	      vm._staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(vm, index, null, 'enter');
	    if (inDoc && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = vm._staggerAnchor;
	      if (!anchor) {
	        anchor = vm._staggerAnchor = _.createAnchor('stagger-anchor');
	        anchor.__vue__ = vm;
	      }
	      _.after(anchor, prevEl);
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null;
	        vm.$before(anchor);
	        _.remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      vm.$after(prevEl);
	    }
	  },

	  /**
	   * Move an already inserted instance.
	   *
	   * @param {Vue} vm
	   * @param {Node} prevEl
	   */

	  move: function move(vm, prevEl) {
	    vm.$after(prevEl, null, false);
	  },

	  /**
	   * Remove an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Boolean} inDoc
	   */

	  remove: function remove(vm, index, total, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel();
	      vm._staggerCb = null;
	      // it's not possible for the same vm to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this vm is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(vm, index, total, 'leave');
	    if (inDoc && staggerAmount) {
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null;
	        remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      remove();
	    }
	    function remove() {
	      vm.$remove(function () {
	        vm._cleanup();
	      });
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} type
	   * @param {Number} total
	   */

	  getStagger: function getStagger(vm, index, total, type) {
	    type = type + 'Stagger';
	    var transition = vm.$el.__v_trans;
	    var hooks = transition && transition.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(vm, index, total) : index * this[type];
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters, and convert non-Array objects to arrays.
	   *
	   * This function will be bound to this directive instance
	   * and passed into the watcher.
	   *
	   * @param {*} value
	   * @return {Array}
	   * @private
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    var type = this.rawType = typeof value;
	    if (!isPlainObject(value)) {
	      this.converted = false;
	      if (type === 'number') {
	        value = range(value);
	      } else if (type === 'string') {
	        value = _.toArray(value);
	      }
	      return value || [];
	    } else {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      this.converted = true;
	      return res;
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is an instance
	 * root node. This is necessary because a destroyed vm's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its __vue__ reference
	 * should have been removed so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return vm that is bound to this v-repeat. (see #929)
	 *
	 * @param {Vue} vm
	 * @param {Comment|Text} anchor
	 * @return {Vue}
	 */

	function findPrevVm(vm, anchor, id) {
	  var el = vm.$el.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  while ((!el.__vue__ || el.__vue__.$options._repeatId !== id) && el !== anchor) {
	    el = el.previousSibling;
	  }
	  return el.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(n);
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Convert a vms array to an object ref for v-ref on an
	 * Object value.
	 *
	 * @param {Array} vms
	 * @return {Object}
	 */

	function toRefObject(vms) {
	  var ref = {};
	  for (var i = 0, l = vms.length; i < l; i++) {
	    ref[vms[i].$key] = vms[i];
	  }
	  return ref;
	}

	/**
	 * Check if a value is a primitive one:
	 * String, Number, Boolean, null or undefined.
	 *
	 * @param {*} value
	 * @return {Boolean}
	 */

	function isPrimitive(value) {
	  var type = typeof value;
	  return value == null || type === 'string' || type === 'number' || type === 'boolean';
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var compiler = __webpack_require__(17);
	var templateParser = __webpack_require__(29);
	var transition = __webpack_require__(37);
	var Cache = __webpack_require__(21);
	var cache = new Cache(1000);

	module.exports = {

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      this.start = _.createAnchor('v-if-start');
	      this.end = _.createAnchor('v-if-end');
	      _.replace(el, this.end);
	      _.before(this.start, this.end);
	      if (_.isTemplate(el)) {
	        this.template = templateParser.parse(el, true);
	      } else {
	        this.template = document.createDocumentFragment();
	        this.template.appendChild(templateParser.clone(el));
	      }
	      // compile the nested partial
	      var cacheId = (this.vm.constructor.cid || '') + el.outerHTML;
	      this.linker = cache.get(cacheId);
	      if (!this.linker) {
	        this.linker = compiler.compile(this.template, this.vm.$options, true // partial
	        );
	        cache.put(cacheId, this.linker);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      // avoid duplicate compiles, since update() can be
	      // called with different truthy values
	      if (!this.unlink) {
	        this.link(templateParser.clone(this.template), this.linker);
	      }
	    } else {
	      this.teardown();
	    }
	  },

	  link: function link(frag, linker) {
	    var vm = this.vm;
	    this.unlink = linker(vm, frag, this._host /* important */);
	    transition.blockAppend(frag, this.end, vm);
	    // call attached for all the child components created
	    // during the compilation
	    if (_.inDoc(vm.$el)) {
	      var children = this.getContainedComponents();
	      if (children) children.forEach(callAttach);
	    }
	  },

	  teardown: function teardown() {
	    if (!this.unlink) return;
	    // collect children beforehand
	    var children;
	    if (_.inDoc(this.vm.$el)) {
	      children = this.getContainedComponents();
	    }
	    transition.blockRemove(this.start, this.end, this.vm);
	    if (children) children.forEach(callDetach);
	    this.unlink();
	    this.unlink = null;
	  },

	  getContainedComponents: function getContainedComponents() {
	    var vm = this._host || this.vm;
	    var start = this.start.nextSibling;
	    var end = this.end;

	    function contains(c) {
	      var cur = start;
	      var next;
	      while (next !== end) {
	        next = cur.nextSibling;
	        if (cur === c.$el || cur.contains && cur.contains(c.$el)) {
	          return true;
	        }
	        cur = next;
	      }
	      return false;
	    }

	    return vm.$children.length && vm.$children.filter(contains);
	  },

	  unbind: function unbind() {
	    if (this.unlink) this.unlink();
	  }

	};

	function callAttach(child) {
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}

	function callDetach(child) {
	  if (child._isAttached) {
	    child._callHook('detached');
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.content = __webpack_require__(55);
	exports.partial = __webpack_require__(56);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var clone = __webpack_require__(29).clone;

	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.

	module.exports = {

	  bind: function bind() {
	    var vm = this.vm;
	    var host = vm;
	    // we need find the content context, which is the
	    // closest non-inline-repeater instance.
	    while (host.$options._repeat) {
	      host = host.$parent;
	    }
	    var raw = host.$options._content;
	    var content;
	    if (!raw) {
	      this.fallback();
	      return;
	    }
	    var context = host._context;
	    var selector = this._checkParam('select');
	    if (!selector) {
	      // Default content
	      var self = this;
	      var compileDefaultContent = function compileDefaultContent() {
	        self.compile(extractFragment(raw.childNodes, raw, true), context, vm);
	      };
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent);
	      } else {
	        compileDefaultContent();
	      }
	    } else {
	      // select content
	      var nodes = raw.querySelectorAll(selector);
	      if (nodes.length) {
	        content = extractFragment(nodes, raw);
	        if (content.hasChildNodes()) {
	          this.compile(content, context, vm);
	        } else {
	          this.fallback();
	        }
	      } else {
	        this.fallback();
	      }
	    }
	  },

	  fallback: function fallback() {
	    this.compile(_.extractContent(this.el, true), this.vm);
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      this.unlink = context.$compile(content, host);
	    }
	    if (content) {
	      _.replace(this.el, content);
	    } else {
	      _.remove(this.el);
	    }
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent, main) {
	  var frag = document.createDocumentFragment();
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      frag.appendChild(clone(node));
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true;
	      frag.appendChild(clone(node));
	    }
	  }
	  return frag;
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var templateParser = __webpack_require__(29);
	var textParser = __webpack_require__(20);
	var compiler = __webpack_require__(17);
	var Cache = __webpack_require__(21);
	var cache = new Cache(1000);

	// v-partial reuses logic from v-if
	var vIf = __webpack_require__(53);

	module.exports = {

	  link: vIf.link,
	  teardown: vIf.teardown,
	  getContainedComponents: vIf.getContainedComponents,

	  bind: function bind() {
	    var el = this.el;
	    this.start = _.createAnchor('v-partial-start');
	    this.end = _.createAnchor('v-partial-end');
	    _.replace(el, this.end);
	    _.before(this.start, this.end);
	    var id = el.getAttribute('name');
	    var tokens = textParser.parse(id);
	    if (tokens) {
	      // dynamic partial
	      this.setupDynamic(tokens);
	    } else {
	      // static partial
	      this.insert(id);
	    }
	  },

	  setupDynamic: function setupDynamic(tokens) {
	    var self = this;
	    var exp = textParser.tokensToExp(tokens);
	    this.unwatch = this.vm.$watch(exp, function (value) {
	      self.teardown();
	      self.insert(value);
	    }, {
	      immediate: true,
	      user: false
	    });
	  },

	  insert: function insert(id) {
	    var partial = _.resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      var frag = templateParser.parse(partial, true);
	      // cache partials based on constructor id.
	      var cacheId = (this.vm.constructor.cid || '') + partial;
	      var linker = this.compile(frag, cacheId);
	      // this is provided by v-if
	      this.link(frag, linker);
	    }
	  },

	  compile: function compile(frag, cacheId) {
	    var hit = cache.get(cacheId);
	    if (hit) return hit;
	    var linker = compiler.compile(frag, this.vm.$options, true);
	    cache.put(cacheId, linker);
	    return linker;
	  },

	  unbind: function unbind() {
	    if (this.unlink) this.unlink();
	    if (this.unwatch) this.unwatch();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);

	/**
	 * Stringify value.
	 *
	 * @param {Number} indent
	 */

	exports.json = {
	  read: function read(value, indent) {
	    return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	  },
	  write: function write(value) {
	    try {
	      return JSON.parse(value);
	    } catch (e) {
	      return value;
	    }
	  }
	};

	/**
	 * 'abc' => 'Abc'
	 */

	exports.capitalize = function (value) {
	  if (!value && value !== 0) return '';
	  value = value.toString();
	  return value.charAt(0).toUpperCase() + value.slice(1);
	};

	/**
	 * 'abc' => 'ABC'
	 */

	exports.uppercase = function (value) {
	  return value || value === 0 ? value.toString().toUpperCase() : '';
	};

	/**
	 * 'AbC' => 'abc'
	 */

	exports.lowercase = function (value) {
	  return value || value === 0 ? value.toString().toLowerCase() : '';
	};

	/**
	 * 12345 => $12,345.00
	 *
	 * @param {String} sign
	 */

	var digitsRE = /(\d{3})(?=\d)/g;
	exports.currency = function (value, currency) {
	  value = parseFloat(value);
	  if (!isFinite(value) || !value && value !== 0) return '';
	  currency = currency != null ? currency : '$';
	  var stringified = Math.abs(value).toFixed(2);
	  var _int = stringified.slice(0, -3);
	  var i = _int.length % 3;
	  var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	  var _float = stringified.slice(-3);
	  var sign = value < 0 ? '-' : '';
	  return currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	};

	/**
	 * 'item' => 'items'
	 *
	 * @params
	 *  an array of strings corresponding to
	 *  the single, double, triple ... forms of the word to
	 *  be pluralized. When the number to be pluralized
	 *  exceeds the length of the args, it will use the last
	 *  entry in the array.
	 *
	 *  e.g. ['single', 'double', 'triple', 'multiple']
	 */

	exports.pluralize = function (value) {
	  var args = _.toArray(arguments, 1);
	  return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	};

	/**
	 * A special filter that takes a handler function,
	 * wraps it so it only gets triggered on specific
	 * keypresses. v-on only.
	 *
	 * @param {String} key
	 */

	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	exports.key = function (handler, key) {
	  if (!handler) return;
	  var code = keyCodes[key];
	  if (!code) {
	    code = parseInt(key, 10);
	  }
	  return function (e) {
	    if (e.keyCode === code) {
	      return handler.call(this, e);
	    }
	  };
	};

	// expose keycode hash
	exports.key.keyCodes = keyCodes;

	exports.debounce = function (handler, delay) {
	  if (!handler) return;
	  if (!delay) {
	    delay = 300;
	  }
	  return _.debounce(handler, delay);
	};

	/**
	 * Install special array filters
	 */

	_.extend(exports, __webpack_require__(58));

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var Path = __webpack_require__(27);

	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} searchKey
	 * @param {String} [delimiter]
	 * @param {String} dataKey
	 */

	exports.filterBy = function (arr, search, delimiter /* ...dataKeys */) {
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = _.toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  return arr.filter(function (item) {
	    if (keys.length) {
	      return keys.some(function (key) {
	        return contains(Path.get(item, key), search);
	      });
	    } else {
	      return contains(item, search);
	    }
	  });
	};

	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */

	exports.orderBy = function (arr, sortKey, reverse) {
	  if (!sortKey) {
	    return arr;
	  }
	  var order = 1;
	  if (arguments.length > 2) {
	    if (reverse === '-1') {
	      order = -1;
	    } else {
	      order = reverse ? -1 : 1;
	    }
	  }
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key' && sortKey !== '$value') {
	      if (a && '$value' in a) a = a.$value;
	      if (b && '$value' in b) b = b.$value;
	    }
	    a = _.isObject(a) ? Path.get(a, sortKey) : a;
	    b = _.isObject(b) ? Path.get(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	};

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (_.isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (_.isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mergeOptions = __webpack_require__(7).mergeOptions;

	/**
	 * The main init sequence. This is called for every
	 * instance, including ones that are created from extended
	 * constructors.
	 *
	 * @param {Object} options - this options object should be
	 *                           the result of merging class
	 *                           options and the options passed
	 *                           in to the constructor.
	 */

	exports._init = function (options) {

	  options = options || {};

	  this.$el = null;
	  this.$parent = options._parent;
	  this.$root = options._root || this;
	  this.$children = [];
	  this.$ = {}; // child vm references
	  this.$$ = {}; // element references
	  this._watchers = []; // all watchers as an array
	  this._directives = []; // all directives
	  this._childCtors = {}; // inherit:true constructors

	  // a flag to avoid this being observed
	  this._isVue = true;

	  // events bookkeeping
	  this._events = {}; // registered callbacks
	  this._eventsCount = {}; // for $broadcast optimization
	  this._eventCancelled = false; // for event cancellation

	  // fragment instance properties
	  this._isFragment = false;
	  this._fragmentStart = // @type {CommentNode}
	  this._fragmentEnd = null; // @type {CommentNode}

	  // lifecycle state
	  this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = false;
	  this._unlinkFn = null;

	  // context: the scope in which the component was used,
	  // and the scope in which props and contents of this
	  // instance should be compiled in.
	  this._context = options._context || options._parent;

	  // push self into parent / transclusion host
	  if (this.$parent) {
	    this.$parent.$children.push(this);
	  }

	  // props used in v-repeat diffing
	  this._reused = false;
	  this._staggerOp = null;

	  // merge options.
	  options = this.$options = mergeOptions(this.constructor.options, options, this);

	  // initialize data as empty object.
	  // it will be filled up in _initScope().
	  this._data = {};

	  // initialize data observation and scope inheritance.
	  this._initScope();

	  // setup event system and option events.
	  this._initEvents();

	  // call created hook
	  this._callHook('created');

	  // if `el` option is passed, start compilation.
	  if (options.el) {
	    this.$mount(options.el);
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var inDoc = _.inDoc;

	/**
	 * Setup the instance's option events & watchers.
	 * If the value is a string, we pull it from the
	 * instance's methods by name.
	 */

	exports._initEvents = function () {
	  var options = this.$options;
	  registerCallbacks(this, '$on', options.events);
	  registerCallbacks(this, '$watch', options.watch);
	};

	/**
	 * Register callbacks for option events and watchers.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {Object} hash
	 */

	function registerCallbacks(vm, action, hash) {
	  if (!hash) return;
	  var handlers, key, i, j;
	  for (key in hash) {
	    handlers = hash[key];
	    if (_.isArray(handlers)) {
	      for (i = 0, j = handlers.length; i < j; i++) {
	        register(vm, action, key, handlers[i]);
	      }
	    } else {
	      register(vm, action, key, handlers);
	    }
	  }
	}

	/**
	 * Helper to register an event/watch callback.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {String} key
	 * @param {Function|String|Object} handler
	 * @param {Object} [options]
	 */

	function register(vm, action, key, handler, options) {
	  var type = typeof handler;
	  if (type === 'function') {
	    vm[action](key, handler, options);
	  } else if (type === 'string') {
	    var methods = vm.$options.methods;
	    var method = methods && methods[handler];
	    if (method) {
	      vm[action](key, method, options);
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	    }
	  } else if (handler && type === 'object') {
	    register(vm, action, key, handler.handler, handler);
	  }
	}

	/**
	 * Setup recursive attached/detached calls
	 */

	exports._initDOMHooks = function () {
	  this.$on('hook:attached', onAttached);
	  this.$on('hook:detached', onDetached);
	};

	/**
	 * Callback to recursively call attached hook on children
	 */

	function onAttached() {
	  if (!this._isAttached) {
	    this._isAttached = true;
	    this.$children.forEach(callAttach);
	  }
	}

	/**
	 * Iterator to call attached hook
	 *
	 * @param {Vue} child
	 */

	function callAttach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Callback to recursively call detached hook on children
	 */

	function onDetached() {
	  if (this._isAttached) {
	    this._isAttached = false;
	    this.$children.forEach(callDetach);
	  }
	}

	/**
	 * Iterator to call detached hook
	 *
	 * @param {Vue} child
	 */

	function callDetach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	/**
	 * Trigger all handlers for a hook
	 *
	 * @param {String} hook
	 */

	exports._callHook = function (hook) {
	  var handlers = this.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(this);
	    }
	  }
	  this.$emit('hook:' + hook);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var compiler = __webpack_require__(17);
	var Observer = __webpack_require__(62);
	var Dep = __webpack_require__(25);
	var Watcher = __webpack_require__(24);

	/**
	 * Setup the scope of an instance, which contains:
	 * - observed data
	 * - computed properties
	 * - user methods
	 * - meta properties
	 */

	exports._initScope = function () {
	  this._initProps();
	  this._initMeta();
	  this._initMethods();
	  this._initData();
	  this._initComputed();
	};

	/**
	 * Initialize props.
	 */

	exports._initProps = function () {
	  var options = this.$options;
	  var el = options.el;
	  var props = options.props;
	  if (props && !el) {
	    process.env.NODE_ENV !== 'production' && _.warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	  }
	  // make sure to convert string selectors into element now
	  el = options.el = _.query(el);
	  this._propsUnlinkFn = el && el.nodeType === 1 && props ? compiler.compileAndLinkProps(this, el, props) : null;
	};

	/**
	 * Initialize the data.
	 */

	exports._initData = function () {
	  var propsData = this._data;
	  var optionsDataFn = this.$options.data;
	  var optionsData = optionsDataFn && optionsDataFn();
	  if (optionsData) {
	    this._data = optionsData;
	    for (var prop in propsData) {
	      if (this._props[prop].raw !== null || !optionsData.hasOwnProperty(prop)) {
	        optionsData.$set(prop, propsData[prop]);
	      }
	    }
	  }
	  var data = this._data;
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var i, key;
	  i = keys.length;
	  while (i--) {
	    key = keys[i];
	    if (!_.isReserved(key)) {
	      this._proxy(key);
	    }
	  }
	  // observe data
	  Observer.create(data, this);
	};

	/**
	 * Swap the isntance's $data. Called in $data's setter.
	 *
	 * @param {Object} newData
	 */

	exports._setData = function (newData) {
	  newData = newData || {};
	  var oldData = this._data;
	  this._data = newData;
	  var keys, key, i;
	  // copy props.
	  // this should only happen during a v-repeat of component
	  // that also happens to have compiled props.
	  var props = this.$options.props;
	  if (props) {
	    i = props.length;
	    while (i--) {
	      key = props[i].name;
	      if (key !== '$data' && !newData.hasOwnProperty(key)) {
	        newData.$set(key, oldData[key]);
	      }
	    }
	  }
	  // unproxy keys not present in new data
	  keys = Object.keys(oldData);
	  i = keys.length;
	  while (i--) {
	    key = keys[i];
	    if (!_.isReserved(key) && !(key in newData)) {
	      this._unproxy(key);
	    }
	  }
	  // proxy keys not already proxied,
	  // and trigger change for changed values
	  keys = Object.keys(newData);
	  i = keys.length;
	  while (i--) {
	    key = keys[i];
	    if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
	      // new property
	      this._proxy(key);
	    }
	  }
	  oldData.__ob__.removeVm(this);
	  Observer.create(newData, this);
	  this._digest();
	};

	/**
	 * Proxy a property, so that
	 * vm.prop === vm._data.prop
	 *
	 * @param {String} key
	 */

	exports._proxy = function (key) {
	  // need to store ref to self here
	  // because these getter/setters might
	  // be called by child instances!
	  var self = this;
	  Object.defineProperty(self, key, {
	    configurable: true,
	    enumerable: true,
	    get: function proxyGetter() {
	      return self._data[key];
	    },
	    set: function proxySetter(val) {
	      self._data[key] = val;
	    }
	  });
	};

	/**
	 * Unproxy a property.
	 *
	 * @param {String} key
	 */

	exports._unproxy = function (key) {
	  delete this[key];
	};

	/**
	 * Force update on every watcher in scope.
	 */

	exports._digest = function () {
	  var i = this._watchers.length;
	  while (i--) {
	    this._watchers[i].update(true); // shallow updates
	  }
	  var children = this.$children;
	  i = children.length;
	  while (i--) {
	    var child = children[i];
	    if (child.$options.inherit) {
	      child._digest();
	    }
	  }
	};

	/**
	 * Setup computed properties. They are essentially
	 * special getter/setters
	 */

	function noop() {}
	exports._initComputed = function () {
	  var computed = this.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      var def = {
	        enumerable: true,
	        configurable: true
	      };
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, this);
	        def.set = noop;
	      } else {
	        def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : _.bind(userDef.get, this) : noop;
	        def.set = userDef.set ? _.bind(userDef.set, this) : noop;
	      }
	      Object.defineProperty(this, key, def);
	    }
	  }
	};

	function makeComputedGetter(getter, owner) {
	  var watcher = new Watcher(owner, getter, null, {
	    lazy: true
	  });
	  return function computedGetter() {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value;
	  };
	}

	/**
	 * Setup instance methods. Methods must be bound to the
	 * instance since they might be called by children
	 * inheriting them.
	 */

	exports._initMethods = function () {
	  var methods = this.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      this[key] = _.bind(methods[key], this);
	    }
	  }
	};

	/**
	 * Initialize meta information like $index, $key & $value.
	 */

	exports._initMeta = function () {
	  var metas = this.$options._meta;
	  if (metas) {
	    for (var key in metas) {
	      this._defineMeta(key, metas[key]);
	    }
	  }
	};

	/**
	 * Define a meta property, e.g $index, $key, $value
	 * which only exists on the vm instance but not in $data.
	 *
	 * @param {String} key
	 * @param {*} value
	 */

	exports._defineMeta = function (key, value) {
	  var dep = new Dep();
	  Object.defineProperty(this, key, {
	    get: function metaGetter() {
	      if (Dep.target) {
	        dep.depend();
	      }
	      return value;
	    },
	    set: function metaSetter(val) {
	      if (val !== value) {
	        value = val;
	        dep.notify();
	      }
	    }
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var config = __webpack_require__(12);
	var Dep = __webpack_require__(25);
	var arrayMethods = __webpack_require__(63);
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	__webpack_require__(64);

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  _.define(value, '__ob__', this);
	  if (_.isArray(value)) {
	    var augment = config.proto && _.hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Static methods

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	Observer.create = function (value, vm) {
	  var ob;
	  if (value && value.hasOwnProperty('__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((_.isArray(value) || _.isPlainObject(value)) && !Object.isFrozen(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	};

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object. Properties prefixed with `$` or `_`
	 * and accessor properties are ignored.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  var i = keys.length;
	  while (i--) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Try to carete an observer for a child value,
	 * and if value is array, link dep to the array.
	 *
	 * @param {*} val
	 * @return {Dep|undefined}
	 */

	Observer.prototype.observe = function (val) {
	  return Observer.create(val);
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  var i = items.length;
	  while (i--) {
	    var ob = this.observe(items[i]);
	    if (ob) {
	      (ob.parents || (ob.parents = [])).push(this);
	    }
	  }
	};

	/**
	 * Remove self from the parent list of removed objects.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.unobserveArray = function (items) {
	  var i = items.length;
	  while (i--) {
	    var ob = items[i] && items[i].__ob__;
	    if (ob) {
	      ob.parents.$remove(this);
	    }
	  }
	};

	/**
	 * Notify self dependency, and also parent Array dependency
	 * if any.
	 */

	Observer.prototype.notify = function () {
	  this.dep.notify();
	  var parents = this.parents;
	  if (parents) {
	    var i = parents.length;
	    while (i--) {
	      parents[i].notify();
	    }
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  var ob = this;
	  var childOb = ob.observe(val);
	  var dep = new Dep();
	  Object.defineProperty(ob.value, key, {
	    enumerable: true,
	    configurable: true,
	    get: function get() {
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	      }
	      return val;
	    },
	    set: function set(newVal) {
	      if (newVal === val) return;
	      val = newVal;
	      childOb = ob.observe(newVal);
	      dep.notify();
	    }
	  });
	};

	/**
	 * Add an owner vm, so that when $add/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function protoAugment(target, src) {
	  target.__proto__ = src;
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  var i = keys.length;
	  var key;
	  while (i--) {
	    key = keys[i];
	    _.define(target, key, src[key]);
	  }
	}

	module.exports = Observer;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  _.define(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted, removed;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        removed = result;
	        break;
	      case 'pop':
	      case 'shift':
	        removed = [result];
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    if (removed) ob.unobserveArray(removed);
	    // notify change
	    ob.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	_.define(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = index + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */

	_.define(arrayProto, '$remove', function $remove(index) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  if (typeof index !== 'number') {
	    index = _.indexOf(this, index);
	  }
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	module.exports = arrayMethods;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var objProto = Object.prototype;

	/**
	 * Add a new property to an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */

	_.define(objProto, '$add', function $add(key, val) {
	  if (this.hasOwnProperty(key)) return;
	  var ob = this.__ob__;
	  if (!ob || _.isReserved(key)) {
	    this[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	});

	/**
	 * Set a property on an observed object, calling add to
	 * ensure the property is observed.
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */

	_.define(objProto, '$set', function $set(key, val) {
	  this.$add(key, val);
	  this[key] = val;
	});

	/**
	 * Deletes a property from an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @public
	 */

	_.define(objProto, '$delete', function $delete(key) {
	  if (!this.hasOwnProperty(key)) return;
	  delete this[key];
	  var ob = this.__ob__;
	  if (!ob || _.isReserved(key)) {
	    return;
	  }
	  ob.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var Directive = __webpack_require__(66);
	var compiler = __webpack_require__(17);

	/**
	 * Transclude, compile and link element.
	 *
	 * If a pre-compiled linker is available, that means the
	 * passed in element will be pre-transcluded and compiled
	 * as well - all we need to do is to call the linker.
	 *
	 * Otherwise we need to call transclude/compile/link here.
	 *
	 * @param {Element} el
	 * @return {Element}
	 */

	exports._compile = function (el) {
	  var options = this.$options;
	  var host = this._host;
	  if (options._linkFn) {
	    // pre-transcluded with linker, just use it
	    this._initElement(el);
	    this._unlinkFn = options._linkFn(this, el, host);
	  } else {
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = compiler.transclude(el, options);
	    this._initElement(el);

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var rootLinker = compiler.compileRoot(el, options);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compiler.compile(el, options);
	      }
	    }

	    // link phase
	    var rootUnlinkFn = rootLinker(this, el);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compiler.compile(el, options)(this, el, host);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      _.replace(original, el);
	    }
	  }
	  return el;
	};

	/**
	 * Initialize instance element. Called in the public
	 * $mount() method.
	 *
	 * @param {Element} el
	 */

	exports._initElement = function (el) {
	  if (el instanceof DocumentFragment) {
	    this._isFragment = true;
	    this.$el = this._fragmentStart = el.firstChild;
	    this._fragmentEnd = el.lastChild;
	    // set persisted text anchors to empty
	    if (this._fragmentStart.nodeType === 3) {
	      this._fragmentStart.data = this._fragmentEnd.data = '';
	    }
	    this._blockFragment = el;
	  } else {
	    this.$el = el;
	  }
	  this.$el.__vue__ = this;
	  this._callHook('beforeCompile');
	};

	/**
	 * Create and bind a directive to an element.
	 *
	 * @param {String} name - directive name
	 * @param {Node} node   - target node
	 * @param {Object} desc - parsed directive descriptor
	 * @param {Object} def  - directive definition object
	 * @param {Vue|undefined} host - transclusion host component
	 */

	exports._bindDir = function (name, node, desc, def, host) {
	  this._directives.push(new Directive(name, node, this, desc, def, host));
	};

	/**
	 * Teardown an instance, unobserves the data, unbind all the
	 * directives, turn off all the event listeners, etc.
	 *
	 * @param {Boolean} remove - whether to remove the DOM node.
	 * @param {Boolean} deferCleanup - if true, defer cleanup to
	 *                                 be called later
	 */

	exports._destroy = function (remove, deferCleanup) {
	  if (this._isBeingDestroyed) {
	    return;
	  }
	  this._callHook('beforeDestroy');
	  this._isBeingDestroyed = true;
	  var i;
	  // remove self from parent. only necessary
	  // if parent is not being destroyed as well.
	  var parent = this.$parent;
	  if (parent && !parent._isBeingDestroyed) {
	    parent.$children.$remove(this);
	  }
	  // destroy all children.
	  i = this.$children.length;
	  while (i--) {
	    this.$children[i].$destroy();
	  }
	  // teardown props
	  if (this._propsUnlinkFn) {
	    this._propsUnlinkFn();
	  }
	  // teardown all directives. this also tearsdown all
	  // directive-owned watchers.
	  if (this._unlinkFn) {
	    this._unlinkFn();
	  }
	  i = this._watchers.length;
	  while (i--) {
	    this._watchers[i].teardown();
	  }
	  // remove reference to self on $el
	  if (this.$el) {
	    this.$el.__vue__ = null;
	  }
	  // remove DOM element
	  var self = this;
	  if (remove && this.$el) {
	    this.$remove(function () {
	      self._cleanup();
	    });
	  } else if (!deferCleanup) {
	    this._cleanup();
	  }
	};

	/**
	 * Clean up to ensure garbage collection.
	 * This is called after the leave transition if there
	 * is any.
	 */

	exports._cleanup = function () {
	  // remove reference from data ob
	  // frozen object may not have observer.
	  if (this._data.__ob__) {
	    this._data.__ob__.removeVm(this);
	  }
	  // Clean up references to private properties and other
	  // instances. preserve reference to _data so that proxy
	  // accessors still work. The only potential side effect
	  // here is that mutating the instance after it's destroyed
	  // may affect the state of other components that are still
	  // observing the same object, but that seems to be a
	  // reasonable responsibility for the user rather than
	  // always throwing an error on them.
	  this.$el = this.$parent = this.$root = this.$children = this._watchers = this._directives = null;
	  // call the last hook...
	  this._isDestroyed = true;
	  this._callHook('destroyed');
	  // turn off all instance listeners.
	  this.$off();
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var config = __webpack_require__(12);
	var Watcher = __webpack_require__(24);
	var textParser = __webpack_require__(20);
	var expParser = __webpack_require__(26);
	function noop() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} expression
	 *                 - {String} [arg]
	 *                 - {Array<Object>} [filters]
	 * @param {Object} def - directive definition object
	 * @param {Vue|undefined} host - transclusion host target
	 * @constructor
	 */

	function Directive(name, el, vm, descriptor, def, host) {
	  // public
	  this.name = name;
	  this.el = el;
	  this.vm = vm;
	  // copy descriptor props
	  this.raw = descriptor.raw;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.filters = descriptor.filters;
	  // private
	  this._descriptor = descriptor;
	  this._host = host;
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // init
	  this._bind(def);
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */

	Directive.prototype._bind = function (def) {
	  if ((this.name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    this.el.removeAttribute(config.prefix + this.name);
	  }
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    _.extend(this, def);
	  }
	  this._watcherExp = this.expression;
	  this._checkDynamicLiteral();
	  if (this.bind) {
	    this.bind();
	  }
	  if (this._watcherExp && (this.update || this.twoWay) && (!this.isLiteral || this._isDynamicLiteral) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    // pre-process hook called before the value is piped
	    // through the filters. used in v-repeat.
	    var preProcess = this._preProcess ? _.bind(this._preProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this._watcherExp, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess
	    });
	    if (this._initValue != null) {
	      watcher.set(this._initValue);
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	  this._bound = true;
	};

	/**
	 * check if this is a dynamic literal binding.
	 *
	 * e.g. v-component="{{currentView}}"
	 */

	Directive.prototype._checkDynamicLiteral = function () {
	  var expression = this.expression;
	  if (expression && this.isLiteral) {
	    var tokens = textParser.parse(expression);
	    if (tokens) {
	      var exp = textParser.tokensToExp(tokens);
	      this.expression = this.vm.$get(exp);
	      this._watcherExp = exp;
	      this._isDynamicLiteral = true;
	    }
	  }
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. v-on="click: a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !expParser.isSimplePath(expression)) {
	    var fn = expParser.parse(expression).get;
	    var vm = this.vm;
	    var handler = function handler() {
	      fn.call(vm, vm);
	    };
	    if (this.filters) {
	      handler = vm._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Check for an attribute directive param, e.g. lazy
	 *
	 * @param {String} name
	 * @return {String}
	 */

	Directive.prototype._checkParam = function (name) {
	  var param = this.el.getAttribute(name);
	  if (param !== null) {
	    this.el.removeAttribute(name);
	    param = this.vm.$interpolate(param);
	  }
	  return param;
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    _.warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  _.nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 */

	Directive.prototype.on = function (event, handler) {
	  _.on(this.el, event, handler);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    if (listeners) {
	      for (var i = 0; i < listeners.length; i++) {
	        _.off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	module.exports = Directive;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);

	/**
	 * Apply a list of filter (descriptors) to a value.
	 * Using plain for loops here because this will be called in
	 * the getter of any watcher with filters so it is very
	 * performance sensitive.
	 *
	 * @param {*} value
	 * @param {*} [oldValue]
	 * @param {Array} filters
	 * @param {Boolean} write
	 * @return {*}
	 */

	exports._applyFilters = function (value, oldValue, filters, write) {
	  var filter, fn, args, arg, offset, i, l, j, k;
	  for (i = 0, l = filters.length; i < l; i++) {
	    filter = filters[i];
	    fn = _.resolveAsset(this.$options, 'filters', filter.name);
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(fn, 'filter', filter.name);
	    }
	    if (!fn) continue;
	    fn = write ? fn.write : fn.read || fn;
	    if (typeof fn !== 'function') continue;
	    args = write ? [value, oldValue] : [value];
	    offset = write ? 2 : 1;
	    if (filter.args) {
	      for (j = 0, k = filter.args.length; j < k; j++) {
	        arg = filter.args[j];
	        args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	      }
	    }
	    value = fn.apply(this, args);
	  }
	  return value;
	};

	/**
	 * Resolve a component, depending on whether the component
	 * is defined normally or using an async factory function.
	 * Resolves synchronously if already resolved, otherwise
	 * resolves asynchronously and caches the resolved
	 * constructor on the factory.
	 *
	 * @param {String} id
	 * @param {Function} cb
	 */

	exports._resolveComponent = function (id, cb) {
	  var factory = _.resolveAsset(this.$options, 'components', id);
	  if (process.env.NODE_ENV !== 'production') {
	    _.assertAsset(factory, 'component', id);
	  }
	  if (!factory) {
	    return;
	  }
	  // async component factory
	  if (!factory.options) {
	    if (factory.resolved) {
	      // cached
	      cb(factory.resolved);
	    } else if (factory.requested) {
	      // pool callbacks
	      factory.pendingCallbacks.push(cb);
	    } else {
	      factory.requested = true;
	      var cbs = factory.pendingCallbacks = [cb];
	      factory(function resolve(res) {
	        if (_.isPlainObject(res)) {
	          res = _.Vue.extend(res);
	        }
	        // cache resolved
	        factory.resolved = res;
	        // invoke callbacks
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }, function reject(reason) {
	        process.env.NODE_ENV !== 'production' && _.warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	      });
	    }
	  } else {
	    // normal component
	    cb(factory);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Watcher = __webpack_require__(24);
	var Path = __webpack_require__(27);
	var textParser = __webpack_require__(20);
	var dirParser = __webpack_require__(22);
	var expParser = __webpack_require__(26);
	var filterRE = /[^|]\|[^|]/;

	/**
	 * Get the value from an expression on this vm.
	 *
	 * @param {String} exp
	 * @return {*}
	 */

	exports.$get = function (exp) {
	  var res = expParser.parse(exp);
	  if (res) {
	    try {
	      return res.get.call(this, this);
	    } catch (e) {}
	  }
	};

	/**
	 * Set the value from an expression on this vm.
	 * The expression must be a valid left-hand
	 * expression in an assignment.
	 *
	 * @param {String} exp
	 * @param {*} val
	 */

	exports.$set = function (exp, val) {
	  var res = expParser.parse(exp, true);
	  if (res && res.set) {
	    res.set.call(this, this, val);
	  }
	};

	/**
	 * Add a property on the VM
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	exports.$add = function (key, val) {
	  this._data.$add(key, val);
	};

	/**
	 * Delete a property on the VM
	 *
	 * @param {String} key
	 */

	exports.$delete = function (key) {
	  this._data.$delete(key);
	};

	/**
	 * Watch an expression, trigger callback when its
	 * value changes.
	 *
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} [options]
	 *                 - {Boolean} deep
	 *                 - {Boolean} immediate
	 *                 - {Boolean} user
	 * @return {Function} - unwatchFn
	 */

	exports.$watch = function (expOrFn, cb, options) {
	  var vm = this;
	  var parsed;
	  if (typeof expOrFn === 'string') {
	    parsed = dirParser.parse(expOrFn)[0];
	    expOrFn = parsed.expression;
	  }
	  var watcher = new Watcher(vm, expOrFn, cb, {
	    deep: options && options.deep,
	    user: !options || options.user !== false,
	    filters: parsed && parsed.filters
	  });
	  if (options && options.immediate) {
	    cb.call(vm, watcher.value);
	  }
	  return function unwatchFn() {
	    watcher.teardown();
	  };
	};

	/**
	 * Evaluate a text directive, including filters.
	 *
	 * @param {String} text
	 * @return {String}
	 */

	exports.$eval = function (text) {
	  // check for filters.
	  if (filterRE.test(text)) {
	    var dir = dirParser.parse(text)[0];
	    // the filter regex check might give false positive
	    // for pipes inside strings, so it's possible that
	    // we don't get any filters here
	    var val = this.$get(dir.expression);
	    return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	  } else {
	    // no filter
	    return this.$get(text);
	  }
	};

	/**
	 * Interpolate a piece of template text.
	 *
	 * @param {String} text
	 * @return {String}
	 */

	exports.$interpolate = function (text) {
	  var tokens = textParser.parse(text);
	  var vm = this;
	  if (tokens) {
	    if (tokens.length === 1) {
	      return vm.$eval(tokens[0].value) + '';
	    } else {
	      return tokens.map(function (token) {
	        return token.tag ? vm.$eval(token.value) : token.value;
	      }).join('');
	    }
	  } else {
	    return text;
	  }
	};

	/**
	 * Log instance data as a plain JS object
	 * so that it is easier to inspect in console.
	 * This method assumes console is available.
	 *
	 * @param {String} [path]
	 */

	exports.$log = function (path) {
	  var data = path ? Path.get(this._data, path) : this._data;
	  if (data) {
	    data = JSON.parse(JSON.stringify(data));
	  }
	  console.log(data);
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);
	var transition = __webpack_require__(37);

	/**
	 * Convenience on-instance nextTick. The callback is
	 * auto-bound to the instance, and this avoids component
	 * modules having to rely on the global Vue.
	 *
	 * @param {Function} fn
	 */

	exports.$nextTick = function (fn) {
	  _.nextTick(fn, this);
	};

	/**
	 * Append instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$appendTo = function (target, cb, withTransition) {
	  return insert(this, target, cb, withTransition, append, transition.append);
	};

	/**
	 * Prepend instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$prependTo = function (target, cb, withTransition) {
	  target = query(target);
	  if (target.hasChildNodes()) {
	    this.$before(target.firstChild, cb, withTransition);
	  } else {
	    this.$appendTo(target, cb, withTransition);
	  }
	  return this;
	};

	/**
	 * Insert instance before target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$before = function (target, cb, withTransition) {
	  return insert(this, target, cb, withTransition, before, transition.before);
	};

	/**
	 * Insert instance after target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$after = function (target, cb, withTransition) {
	  target = query(target);
	  if (target.nextSibling) {
	    this.$before(target.nextSibling, cb, withTransition);
	  } else {
	    this.$appendTo(target.parentNode, cb, withTransition);
	  }
	  return this;
	};

	/**
	 * Remove instance from DOM
	 *
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$remove = function (cb, withTransition) {
	  if (!this.$el.parentNode) {
	    return cb && cb();
	  }
	  var inDoc = this._isAttached && _.inDoc(this.$el);
	  // if we are not in document, no need to check
	  // for transitions
	  if (!inDoc) withTransition = false;
	  var op;
	  var self = this;
	  var realCb = function realCb() {
	    if (inDoc) self._callHook('detached');
	    if (cb) cb();
	  };
	  if (this._isFragment && !this._blockFragment.hasChildNodes()) {
	    op = withTransition === false ? append : transition.removeThenAppend;
	    blockOp(this, this._blockFragment, op, realCb);
	  } else {
	    op = withTransition === false ? remove : transition.remove;
	    op(this.$el, this, realCb);
	  }
	  return this;
	};

	/**
	 * Shared DOM insertion function.
	 *
	 * @param {Vue} vm
	 * @param {Element} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition]
	 * @param {Function} op1 - op for non-transition insert
	 * @param {Function} op2 - op for transition insert
	 * @return vm
	 */

	function insert(vm, target, cb, withTransition, op1, op2) {
	  target = query(target);
	  var targetIsDetached = !_.inDoc(target);
	  var op = withTransition === false || targetIsDetached ? op1 : op2;
	  var shouldCallHook = !targetIsDetached && !vm._isAttached && !_.inDoc(vm.$el);
	  if (vm._isFragment) {
	    blockOp(vm, target, op, cb);
	  } else {
	    op(vm.$el, target, vm, cb);
	  }
	  if (shouldCallHook) {
	    vm._callHook('attached');
	  }
	  return vm;
	}

	/**
	 * Execute a transition operation on a fragment instance,
	 * iterating through all its block nodes.
	 *
	 * @param {Vue} vm
	 * @param {Node} target
	 * @param {Function} op
	 * @param {Function} cb
	 */

	function blockOp(vm, target, op, cb) {
	  var current = vm._fragmentStart;
	  var end = vm._fragmentEnd;
	  var next;
	  while (next !== end) {
	    next = current.nextSibling;
	    op(current, target, vm);
	    current = next;
	  }
	  op(end, target, vm, cb);
	}

	/**
	 * Check for selectors
	 *
	 * @param {String|Element} el
	 */

	function query(el) {
	  return typeof el === 'string' ? document.querySelector(el) : el;
	}

	/**
	 * Append operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function append(el, target, vm, cb) {
	  target.appendChild(el);
	  if (cb) cb();
	}

	/**
	 * InsertBefore operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function before(el, target, vm, cb) {
	  _.before(el, target);
	  if (cb) cb();
	}

	/**
	 * Remove operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function remove(el, vm, cb) {
	  _.remove(el);
	  if (cb) cb();
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$on = function (event, fn) {
	  (this._events[event] || (this._events[event] = [])).push(fn);
	  modifyListenerCount(this, event, 1);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$once = function (event, fn) {
	  var self = this;
	  function on() {
	    self.$off(event, on);
	    fn.apply(this, arguments);
	  }
	  on.fn = fn;
	  this.$on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$off = function (event, fn) {
	  var cbs;
	  // all
	  if (!arguments.length) {
	    if (this.$parent) {
	      for (event in this._events) {
	        cbs = this._events[event];
	        if (cbs) {
	          modifyListenerCount(this, event, -cbs.length);
	        }
	      }
	    }
	    this._events = {};
	    return this;
	  }
	  // specific event
	  cbs = this._events[event];
	  if (!cbs) {
	    return this;
	  }
	  if (arguments.length === 1) {
	    modifyListenerCount(this, event, -cbs.length);
	    this._events[event] = null;
	    return this;
	  }
	  // specific handler
	  var cb;
	  var i = cbs.length;
	  while (i--) {
	    cb = cbs[i];
	    if (cb === fn || cb.fn === fn) {
	      modifyListenerCount(this, event, -1);
	      cbs.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Trigger an event on self.
	 *
	 * @param {String} event
	 */

	exports.$emit = function (event) {
	  this._eventCancelled = false;
	  var cbs = this._events[event];
	  if (cbs) {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length - 1;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i + 1];
	    }
	    i = 0;
	    cbs = cbs.length > 1 ? _.toArray(cbs) : cbs;
	    for (var l = cbs.length; i < l; i++) {
	      if (cbs[i].apply(this, args) === false) {
	        this._eventCancelled = true;
	      }
	    }
	  }
	  return this;
	};

	/**
	 * Recursively broadcast an event to all children instances.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */

	exports.$broadcast = function (event) {
	  // if no child has registered for this event,
	  // then there's no need to broadcast.
	  if (!this._eventsCount[event]) return;
	  var children = this.$children;
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i];
	    child.$emit.apply(child, arguments);
	    if (!child._eventCancelled) {
	      child.$broadcast.apply(child, arguments);
	    }
	  }
	  return this;
	};

	/**
	 * Recursively propagate an event up the parent chain.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */

	exports.$dispatch = function () {
	  var parent = this.$parent;
	  while (parent) {
	    parent.$emit.apply(parent, arguments);
	    parent = parent._eventCancelled ? null : parent.$parent;
	  }
	  return this;
	};

	/**
	 * Modify the listener counts on all parents.
	 * This bookkeeping allows $broadcast to return early when
	 * no child has listened to a certain event.
	 *
	 * @param {Vue} vm
	 * @param {String} event
	 * @param {Number} count
	 */

	var hookRE = /^hook:/;
	function modifyListenerCount(vm, event, count) {
	  var parent = vm.$parent;
	  // hooks do not get broadcasted so no need
	  // to do bookkeeping for them
	  if (!parent || !count || hookRE.test(event)) return;
	  while (parent) {
	    parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	    parent = parent.$parent;
	  }
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(7);

	/**
	 * Create a child instance that prototypally inherits
	 * data on parent. To achieve that we create an intermediate
	 * constructor with its prototype pointing to parent.
	 *
	 * @param {Object} opts
	 * @param {Function} [BaseCtor]
	 * @return {Vue}
	 * @public
	 */

	exports.$addChild = function (opts, BaseCtor) {
	  BaseCtor = BaseCtor || _.Vue;
	  opts = opts || {};
	  var ChildVue;
	  var parent = this;
	  // transclusion context
	  var context = opts._context || parent;
	  var inherit = opts.inherit !== undefined ? opts.inherit : BaseCtor.options.inherit;
	  if (inherit) {
	    var ctors = context._childCtors;
	    ChildVue = ctors[BaseCtor.cid];
	    if (!ChildVue) {
	      var optionName = BaseCtor.options.name;
	      var className = optionName ? _.classify(optionName) : 'VueComponent';
	      ChildVue = new Function('return function ' + className + ' (options) {' + 'this.constructor = ' + className + ';' + 'this._init(options) }')();
	      ChildVue.options = BaseCtor.options;
	      ChildVue.linker = BaseCtor.linker;
	      ChildVue.prototype = context;
	      ctors[BaseCtor.cid] = ChildVue;
	    }
	  } else {
	    ChildVue = BaseCtor;
	  }
	  opts._parent = parent;
	  opts._root = parent.$root;
	  var child = new ChildVue(opts);
	  return child;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(7);
	var compiler = __webpack_require__(17);

	/**
	 * Set instance target element and kick off the compilation
	 * process. The passed in `el` can be a selector string, an
	 * existing Element, or a DocumentFragment (for block
	 * instances).
	 *
	 * @param {Element|DocumentFragment|string} el
	 * @public
	 */

	exports.$mount = function (el) {
	  if (this._isCompiled) {
	    process.env.NODE_ENV !== 'production' && _.warn('$mount() should be called only once.');
	    return;
	  }
	  el = _.query(el);
	  if (!el) {
	    el = document.createElement('div');
	  }
	  this._compile(el);
	  this._isCompiled = true;
	  this._callHook('compiled');
	  this._initDOMHooks();
	  if (_.inDoc(this.$el)) {
	    this._callHook('attached');
	    ready.call(this);
	  } else {
	    this.$once('hook:attached', ready);
	  }
	  return this;
	};

	/**
	 * Mark an instance as ready.
	 */

	function ready() {
	  this._isAttached = true;
	  this._isReady = true;
	  this._callHook('ready');
	}

	/**
	 * Teardown the instance, simply delegate to the internal
	 * _destroy.
	 */

	exports.$destroy = function (remove, deferCleanup) {
	  this._destroy(remove, deferCleanup);
	};

	/**
	 * Partially compile a piece of DOM and return a
	 * decompile function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Vue} [host]
	 * @return {Function}
	 */

	exports.$compile = function (el, host) {
	  return compiler.compile(el, this.$options, true)(this, el, host);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var request = __webpack_require__(74);

	// DATE format: YYMM, eg: 1510
	function url(date) {
	  return 'https://raw.githubusercontent.com/wxt2005/bangumi-list/master/json/bangumi-${DATE}.json'.replace('${DATE}', date);
	}

	function formatByDay(data) {
	  var days = new Array(7);
	  var animes = [];
	  for (var d in data) {
	    animes.push(data[d]);
	  }
	  for (var i = 0; i < days.length; i++) {
	    days[i] = {
	      weekday: i,
	      animes: animes.filter(function (anime) {
	        return anime.weekDayCN == i;
	      })
	    };
	  }
	  return days;
	}

	function fetch() {
	  // class function
	}

	fetch.prototype = {
	  constructor: fetch,
	  get: function get(date, format) {
	    return new Promise(function (resolve, reject) {
	      request.get(url(date)).end(function (err, res) {
	        if (err) {
	          reject(new Error(res.status));
	        } else {
	          if (res.status != 200) {
	            return reject(new Error(res.status));
	          }
	          var result = JSON.parse(res.text);
	          if (format) {
	            result = formatByDay(result);
	          }
	          resolve(result);
	        }
	      });
	    });
	  }
	};

	module.exports = new fetch();

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	'use strict';

	var Emitter = __webpack_require__(75);
	var reduce = __webpack_require__(76);

	/**
	 * Root reference for iframes.
	 */

	var root;
	if (typeof window !== 'undefined') {
	  // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') {
	  // Web Worker
	  root = self;
	} else {
	  // Other environments
	  root = undefined;
	}

	/**
	 * Noop.
	 */

	function noop() {};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isHost(obj) {
	  var str = ({}).toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
	    return new XMLHttpRequest();
	  } else {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP');
	    } catch (e) {}
	  }
	  return false;
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim ? function (s) {
	  return s.trim();
	} : function (s) {
	  return s.replace(/(^\s*|\s*$)/g, '');
	};

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return obj === Object(obj);
	}

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	    }
	  }
	  return pairs.join('&');
	}

	/**
	 * Expose serialization method.
	 */

	request.serializeObject = serialize;

	/**
	 * Parse the given x-www-form-urlencoded `str`.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	request.serialize = {
	  'application/x-www-form-urlencoded': serialize,
	  'application/json': JSON.stringify
	};

	/**
	 * Default parsers.
	 *
	 *     superagent.parse['application/xml'] = function(str){
	 *       return { object parsed from str };
	 *     };
	 *
	 */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str) {
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str) {
	  return reduce(str.split(/ *; */), function (obj, str) {
	    var parts = str.split(/ *= */),
	        key = parts.shift(),
	        val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD' ? this.parseBody(this.text ? this.text : this.xhr.response) : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function (field) {
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype.setHeaderProperties = function (header) {
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};

	/**
	 * Force given parser
	 * 
	 * Sets the body parser no matter type.
	 * 
	 * @param {Function}
	 * @api public
	 */

	Response.prototype.parse = function (fn) {
	  this.parser = fn;
	  return this;
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype.parseBody = function (str) {
	  var parse = this.parser || request.parse[this.type];
	  return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype.setStatusProperties = function (status) {
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = 4 == type || 5 == type ? this.toError() : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function () {
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function () {
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch (e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    if (err) {
	      return self.callback(err, res);
	    }

	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }

	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;

	    self.callback(new_err, res);
	  });
	}

	/**
	 * Mixin `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Allow for extension
	 */

	Request.prototype.use = function (fn) {
	  fn(this);
	  return this;
	};

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.timeout = function (ms) {
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.clearTimeout = function () {
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */

	Request.prototype.abort = function () {
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.set = function (field, val) {
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.unset = function (field) {
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */

	Request.prototype.getHeader = function (field) {
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function (type) {
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function (type) {
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function (user, pass) {
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function (val) {
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.field = function (name, val) {
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(name, val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function (field, file, filename) {
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(field, file, filename);
	  return this;
	};

	/**
	 * Send `data`, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // querystring
	 *       request.get('/search')
	 *         .end(callback)
	 *
	 *       // multiple data "writes"
	 *       request.get('/search')
	 *         .send({ search: 'query' })
	 *         .send({ range: '1..5' })
	 *         .send({ order: 'desc' })
	 *         .end(callback)
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"})
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.send = function (data) {
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data ? this._data + '&' + data : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function (err, res) {
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function () {
	  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
	  err.crossDomain = true;
	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype.timeoutError = function () {
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	Request.prototype.withCredentials = function () {
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function (fn) {
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function () {
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try {
	      status = xhr.status;
	    } catch (e) {
	      status = 0;
	    }

	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function handleProgress(e) {
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch (e) {}
	  // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	  // Reported here:
	  // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function () {
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?') ? '&' + query : '?' + query;
	  }

	  // initiate request
	  xhr.open(this.method, this.url, true);

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this.getHeader('Content-Type');
	    var serialize = request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  // send stuff
	  this.emit('request', this);
	  xhr.send(data);
	  return this;
	};

	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */

	Request.prototype.then = function (fulfill, reject) {
	  return this.end(function (err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	};

	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }

	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }

	  return new Request(method, url);
	}

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.get = function (url, data, fn) {
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.head = function (url, data, fn) {
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.del = function (url, fn) {
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.patch = function (url, data, fn) {
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.post = function (url, data, fn) {
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.put = function (url, data, fn) {
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * Expose `request`.
	 */

	module.exports = request;

/***/ },
/* 75 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	"use strict";

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || []).push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function (event, fn) {
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1),
	      callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */

	"use strict";

	module.exports = function (arr, fn, initial) {
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3 ? initial : arr[idx++];

	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }

	  return curr;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(78)['default'];

	var _interopRequireDefault = __webpack_require__(79)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _util = __webpack_require__(80);

	var _util2 = _interopRequireDefault(_util);

	var _routeRecognizer = __webpack_require__(81);

	var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);

	var _routerApi = __webpack_require__(84);

	var _routerApi2 = _interopRequireDefault(_routerApi);

	var _routerInternal = __webpack_require__(85);

	var _routerInternal2 = _interopRequireDefault(_routerInternal);

	var _directivesView = __webpack_require__(103);

	var _directivesView2 = _interopRequireDefault(_directivesView);

	var _directivesLink = __webpack_require__(104);

	var _directivesLink2 = _interopRequireDefault(_directivesLink);

	var _override = __webpack_require__(105);

	var _override2 = _interopRequireDefault(_override);

	var _historyAbstract = __webpack_require__(106);

	var _historyAbstract2 = _interopRequireDefault(_historyAbstract);

	var _historyHash = __webpack_require__(107);

	var _historyHash2 = _interopRequireDefault(_historyHash);

	var _historyHtml5 = __webpack_require__(108);

	var _historyHtml52 = _interopRequireDefault(_historyHtml5);

	var historyBackends = {
	  abstract: _historyAbstract2['default'],
	  hash: _historyHash2['default'],
	  html5: _historyHtml52['default']
	};

	/**
	 * Router constructor
	 *
	 * @param {Object} [options]
	 */

	var Router = function Router() {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var _ref$hashbang = _ref.hashbang;
	  var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	  var _ref$abstract = _ref.abstract;
	  var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	  var _ref$history = _ref.history;
	  var history = _ref$history === undefined ? false : _ref$history;
	  var _ref$saveScrollPosition = _ref.saveScrollPosition;
	  var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	  var _ref$transitionOnLoad = _ref.transitionOnLoad;
	  var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	  var _ref$suppressTransitionError = _ref.suppressTransitionError;
	  var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	  var _ref$root = _ref.root;
	  var root = _ref$root === undefined ? null : _ref$root;
	  var _ref$linkActiveClass = _ref.linkActiveClass;
	  var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;

	  _classCallCheck(this, Router);

	  /* istanbul ignore if */
	  if (!Router.installed) {
	    throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	  }

	  // Vue instances
	  this.app = null;
	  this._views = [];
	  this._children = [];

	  // route recognizer
	  this._recognizer = new _routeRecognizer2['default']();
	  this._guardRecognizer = new _routeRecognizer2['default']();

	  // state
	  this._started = false;
	  this._currentRoute = {};
	  this._currentTransition = null;
	  this._previousTransition = null;
	  this._notFoundHandler = null;
	  this._beforeEachHooks = [];
	  this._afterEachHooks = [];

	  // feature detection
	  this._hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;

	  // trigger transition on initial render?
	  this._rendered = false;
	  this._transitionOnLoad = transitionOnLoad;

	  // history mode
	  this._abstract = abstract;
	  this._hashbang = hashbang;
	  this._history = this._hasPushState && history;

	  // other options
	  this._saveScrollPosition = saveScrollPosition;
	  this._linkActiveClass = linkActiveClass;
	  this._suppress = suppressTransitionError;

	  // create history object
	  var inBrowser = _util2['default'].Vue.util.inBrowser;
	  this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	  var History = historyBackends[this.mode];
	  var self = this;
	  this.history = new History({
	    root: root,
	    hashbang: this._hashbang,
	    onChange: function onChange(path, state, anchor) {
	      self._match(path, state, anchor);
	    }
	  });
	};

	exports['default'] = Router;

	Router.installed = false;

	/**
	 * Installation interface.
	 * Install the necessary directives.
	 */

	Router.install = function (Vue) {
	  /* istanbul ignore if */
	  if (Router.installed) {
	    (0, _util.warn)('already installed.');
	    return;
	  }
	  (0, _routerApi2['default'])(Vue, Router);
	  (0, _routerInternal2['default'])(Vue, Router);
	  (0, _directivesView2['default'])(Vue);
	  (0, _directivesLink2['default'])(Vue);
	  (0, _override2['default'])(Vue);
	  _util2['default'].Vue = Vue;
	  // 1.0 only: enable route mixins
	  var strats = Vue.config.optionMergeStrategies;
	  if (strats) {
	    // use the same merge strategy as methods (object hash)
	    strats.route = strats.methods;
	  }
	  Router.installed = true;
	};

	// auto install
	/* istanbul ignore if */
	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use(Router);
	}
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(79)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.warn = warn;
	exports.resolvePath = resolvePath;
	exports.isPromise = isPromise;
	exports.getRouteConfig = getRouteConfig;
	exports.resolveAsyncComponent = resolveAsyncComponent;
	exports.mapParams = mapParams;

	var _routeRecognizer = __webpack_require__(81);

	var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);

	var genQuery = _routeRecognizer2['default'].prototype.generateQueryString;

	// export default for holding the Vue reference
	var _exports = {};
	exports['default'] = _exports;

	/**
	 * Warn stuff.
	 *
	 * @param {String} msg
	 * @param {Error} [err]
	 */

	function warn(msg, err) {
	  /* istanbul ignore next */
	  if (window.console) {
	    console.warn('[vue-router] ' + msg);
	    if (err) {
	      console.warn(err.stack);
	    }
	  }
	}

	/**
	 * Resolve a relative path.
	 *
	 * @param {String} base
	 * @param {String} relative
	 * @return {String}
	 */

	function resolvePath(base, relative) {
	  var query = base.match(/(\?.*)$/);
	  if (query) {
	    query = query[1];
	    base = base.slice(0, -query.length);
	  }
	  // a query!
	  if (relative.charAt(0) === '?') {
	    return base + relative;
	  }
	  var stack = base.split('/');
	  // remove trailing segment
	  stack.pop();
	  // resolve relative path
	  var segments = relative.split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '.') {
	      continue;
	    } else if (segment === '..') {
	      stack.pop();
	    } else {
	      stack.push(segment);
	    }
	  }
	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }
	  return stack.join('/');
	}

	/**
	 * Forgiving check for a promise
	 *
	 * @param {Object} p
	 * @return {Boolean}
	 */

	function isPromise(p) {
	  return p && typeof p.then === 'function';
	}

	/**
	 * Retrive a route config field from a component instance
	 * OR a component contructor.
	 *
	 * @param {Function|Vue} component
	 * @param {String} name
	 * @return {*}
	 */

	function getRouteConfig(component, name) {
	  var options = component && (component.$options || component.options);
	  return options && options.route && options.route[name];
	}

	/**
	 * Resolve an async component factory. Have to do a dirty
	 * mock here because of Vue core's internal API depends on
	 * an ID check.
	 *
	 * @param {Object} handler
	 * @param {Function} cb
	 */

	var resolver = undefined;

	function resolveAsyncComponent(handler, cb) {
	  if (!resolver) {
	    resolver = {
	      resolve: _exports.Vue.prototype._resolveComponent,
	      $options: {
	        components: {
	          _: handler.component
	        }
	      }
	    };
	  } else {
	    resolver.$options.components._ = handler.component;
	  }
	  resolver.resolve('_', function (Component) {
	    handler.component = Component;
	    cb(Component);
	  });
	}

	/**
	 * Map the dynamic segments in a path to params.
	 *
	 * @param {String} path
	 * @param {Object} params
	 * @param {Object} query
	 */

	function mapParams(path, params, query) {
	  for (var key in params) {
	    path = replaceParam(path, params, key);
	  }
	  if (query) {
	    path += genQuery(query);
	  }
	  return path;
	}

	/**
	 * Replace a param segment with real value in a matched
	 * path.
	 *
	 * @param {String} path
	 * @param {Object} params
	 * @param {String} key
	 * @return {String}
	 */

	function replaceParam(path, params, key) {
	  var regex = new RegExp(':' + key + '(\\/|$)');
	  var value = params[key];
	  return path.replace(regex, function (m) {
	    return m.charAt(m.length - 1) === '/' ? value + '/' : value;
	  });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	(function () {
	  "use strict";
	  function $$route$recognizer$dsl$$Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  $$route$recognizer$dsl$$Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function $$route$recognizer$dsl$$Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  $$route$recognizer$dsl$$Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new $$route$recognizer$dsl$$Matcher(target);
	      this.children[path] = matcher;

	      var match = $$route$recognizer$dsl$$generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function $$route$recognizer$dsl$$generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback($$route$recognizer$dsl$$generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new $$route$recognizer$dsl$$Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function $$route$recognizer$dsl$$addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function $$route$recognizer$dsl$$eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        $$route$recognizer$dsl$$addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          $$route$recognizer$dsl$$eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  var $$route$recognizer$dsl$$default = function $$route$recognizer$dsl$$default(callback, addRouteCallback) {
	    var matcher = new $$route$recognizer$dsl$$Matcher();

	    callback($$route$recognizer$dsl$$generateMatch("", matcher, this.delegate));

	    $$route$recognizer$dsl$$eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  };

	  var $$route$recognizer$$specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var $$route$recognizer$$escapeRegex = new RegExp('(\\' + $$route$recognizer$$specials.join('|\\') + ')', 'g');

	  function $$route$recognizer$$isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function $$route$recognizer$$StaticSegment(string) {
	    this.string = string;
	  }
	  $$route$recognizer$$StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace($$route$recognizer$$escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function $$route$recognizer$$DynamicSegment(name) {
	    this.name = name;
	  }
	  $$route$recognizer$$DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      return params[this.name];
	    }
	  };

	  function $$route$recognizer$$StarSegment(name) {
	    this.name = name;
	  }
	  $$route$recognizer$$StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      return params[this.name];
	    }
	  };

	  function $$route$recognizer$$EpsilonSegment() {}
	  $$route$recognizer$$EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function $$route$recognizer$$parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new $$route$recognizer$$DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new $$route$recognizer$$StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new $$route$recognizer$$EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new $$route$recognizer$$StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function $$route$recognizer$$State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  $$route$recognizer$$State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new $$route$recognizer$$State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	   function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function $$route$recognizer$$sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function $$route$recognizer$$recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var $$route$recognizer$$oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function $$route$recognizer$$RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  $$route$recognizer$$RecognizeResults.prototype = $$route$recognizer$$oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function $$route$recognizer$$findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new $$route$recognizer$$RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function $$route$recognizer$$addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function $$route$recognizer$$decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return decodeURIComponent(part);
	  }

	  // The main interface

	  var $$route$recognizer$$RouteRecognizer = function $$route$recognizer$$RouteRecognizer() {
	    this.rootState = new $$route$recognizer$$State();
	    this.names = {};
	  };

	  $$route$recognizer$$RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = $$route$recognizer$$parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof $$route$recognizer$$EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = $$route$recognizer$$addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof $$route$recognizer$$EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams, route.handlers);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params, handlers) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if ($$route$recognizer$$isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = $$route$recognizer$$decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? $$route$recognizer$$decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path) {
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        queryParams = this.parseQueryString(queryString);
	      }

	      path = decodeURI(path);

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = $$route$recognizer$$recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = $$route$recognizer$$sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return $$route$recognizer$$findHandler(state, path, queryParams);
	      }
	    }
	  };

	  $$route$recognizer$$RouteRecognizer.prototype.map = $$route$recognizer$dsl$$default;

	  $$route$recognizer$$RouteRecognizer.VERSION = '0.1.9';

	  var $$route$recognizer$$default = $$route$recognizer$$RouteRecognizer;

	  /* global define:true module:true window: true */
	  if ("function" === 'function' && __webpack_require__(83)['amd']) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return $$route$recognizer$$default;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module !== 'undefined' && module['exports']) {
	    module['exports'] = $$route$recognizer$$default;
	  } else if (typeof this !== 'undefined') {
	    this['RouteRecognizer'] = $$route$recognizer$$default;
	  }
	}).call(undefined);

	//# sourceMappingURL=route-recognizer.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82)(module)))

/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _util = __webpack_require__(80);

	exports['default'] = function (Vue, Router) {

	  /**
	   * Register a map of top-level paths.
	   *
	   * @param {Object} map
	   */

	  Router.prototype.map = function (map) {
	    for (var route in map) {
	      this.on(route, map[route]);
	    }
	  };

	  /**
	   * Register a single root-level path
	   *
	   * @param {String} rootPath
	   * @param {Object} handler
	   *                 - {String} component
	   *                 - {Object} [subRoutes]
	   *                 - {Boolean} [forceRefresh]
	   *                 - {Function} [before]
	   *                 - {Function} [after]
	   */

	  Router.prototype.on = function (rootPath, handler) {
	    if (rootPath === '*') {
	      this._notFound(handler);
	    } else {
	      this._addRoute(rootPath, handler, []);
	    }
	  };

	  /**
	   * Set redirects.
	   *
	   * @param {Object} map
	   */

	  Router.prototype.redirect = function (map) {
	    for (var path in map) {
	      this._addRedirect(path, map[path]);
	    }
	  };

	  /**
	   * Set aliases.
	   *
	   * @param {Object} map
	   */

	  Router.prototype.alias = function (map) {
	    for (var path in map) {
	      this._addAlias(path, map[path]);
	    }
	  };

	  /**
	   * Set global before hook.
	   *
	   * @param {Function} fn
	   */

	  Router.prototype.beforeEach = function (fn) {
	    this._beforeEachHooks.push(fn);
	  };

	  /**
	   * Set global after hook.
	   *
	   * @param {Function} fn
	   */

	  Router.prototype.afterEach = function (fn) {
	    this._afterEachHooks.push(fn);
	  };

	  /**
	   * Navigate to a given path.
	   * The path can be an object describing a named path in
	   * the format of { name: '...', params: {}, query: {}}
	   * The path is assumed to be already decoded, and will
	   * be resolved against root (if provided)
	   *
	   * @param {String|Object} path
	   * @param {Boolean} [replace]
	   */

	  Router.prototype.go = function (path, replace) {
	    path = this._normalizePath(path);
	    this.history.go(path, replace);
	  };

	  /**
	   * Short hand for replacing current path
	   *
	   * @param {String} path
	   */

	  Router.prototype.replace = function (path) {
	    this.go(path, true);
	  };

	  /**
	   * Start the router.
	   *
	   * @param {VueConstructor} App
	   * @param {String|Element} container
	   */

	  Router.prototype.start = function (App, container) {
	    /* istanbul ignore if */
	    if (this._started) {
	      (0, _util.warn)('already started.');
	      return;
	    }
	    this._started = true;
	    if (!this.app) {
	      /* istanbul ignore if */
	      if (!App || !container) {
	        throw new Error('Must start vue-router with a component and a ' + 'root container.');
	      }
	      this._appContainer = container;
	      this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	    }
	    this.history.start();
	  };

	  /**
	   * Stop listening to route changes.
	   */

	  Router.prototype.stop = function () {
	    this.history.stop();
	    this._started = false;
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(79)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _util = __webpack_require__(80);

	var _route = __webpack_require__(86);

	var _route2 = _interopRequireDefault(_route);

	var _transition = __webpack_require__(87);

	var _transition2 = _interopRequireDefault(_transition);

	exports['default'] = function (Vue, Router) {

	  var _ = Vue.util;

	  /**
	   * Add a route containing a list of segments to the internal
	   * route recognizer. Will be called recursively to add all
	   * possible sub-routes.
	   *
	   * @param {String} path
	   * @param {Object} handler
	   * @param {Array} segments
	   */

	  Router.prototype._addRoute = function (path, handler, segments) {
	    guardComponent(handler);
	    segments.push({
	      path: path,
	      handler: handler
	    });
	    this._recognizer.add(segments, {
	      as: handler.name
	    });
	    // add sub routes
	    if (handler.subRoutes) {
	      for (var subPath in handler.subRoutes) {
	        // recursively walk all sub routes
	        this._addRoute(subPath, handler.subRoutes[subPath],
	        // pass a copy in recursion to avoid mutating
	        // across branches
	        segments.slice());
	      }
	    }
	  };

	  /**
	   * Set the notFound route handler.
	   *
	   * @param {Object} handler
	   */

	  Router.prototype._notFound = function (handler) {
	    guardComponent(handler);
	    this._notFoundHandler = [{ handler: handler }];
	  };

	  /**
	   * Add a redirect record.
	   *
	   * @param {String} path
	   * @param {String} redirectPath
	   */

	  Router.prototype._addRedirect = function (path, redirectPath) {
	    this._addGuard(path, redirectPath, this.replace);
	  };

	  /**
	   * Add an alias record.
	   *
	   * @param {String} path
	   * @param {String} aliasPath
	   */

	  Router.prototype._addAlias = function (path, aliasPath) {
	    this._addGuard(path, aliasPath, this._match);
	  };

	  /**
	   * Add a path guard.
	   *
	   * @param {String} path
	   * @param {String} mappedPath
	   * @param {Function} handler
	   */

	  Router.prototype._addGuard = function (path, mappedPath, _handler) {
	    var _this = this;

	    this._guardRecognizer.add([{
	      path: path,
	      handler: function handler(match, query) {
	        var realPath = (0, _util.mapParams)(mappedPath, match.params, query);
	        _handler.call(_this, realPath);
	      }
	    }]);
	  };

	  /**
	   * Check if a path matches any redirect records.
	   *
	   * @param {String} path
	   * @return {Boolean} - if true, will skip normal match.
	   */

	  Router.prototype._checkGuard = function (path) {
	    var matched = this._guardRecognizer.recognize(path);
	    if (matched) {
	      matched[0].handler(matched[0], matched.queryParams);
	      return true;
	    }
	  };

	  /**
	   * Match a URL path and set the route context on vm,
	   * triggering view updates.
	   *
	   * @param {String} path
	   * @param {Object} [state]
	   * @param {String} [anchor]
	   */

	  Router.prototype._match = function (path, state, anchor) {
	    var _this2 = this;

	    if (this._checkGuard(path)) {
	      return;
	    }

	    var prevRoute = this._currentRoute;
	    var prevTransition = this._currentTransition;

	    // do nothing if going to the same route.
	    // the route only changes when a transition successfully
	    // reaches activation; we don't need to do anything
	    // if an ongoing transition is aborted during validation
	    // phase.
	    if (prevTransition && path === prevRoute.path) {
	      return;
	    }

	    // construct new route and transition context
	    var route = new _route2['default'](path, this);
	    var transition = new _transition2['default'](this, route, prevRoute);
	    this._prevTransition = prevTransition;
	    this._currentTransition = transition;

	    if (!this.app) {
	      // initial render
	      this.app = new this._appConstructor({
	        el: this._appContainer,
	        _meta: {
	          $route: route
	        }
	      });
	    }

	    // check global before hook
	    var beforeHooks = this._beforeEachHooks;
	    var startTransition = function startTransition() {
	      transition.start(function () {
	        _this2._postTransition(route, state, anchor);
	      });
	    };

	    if (beforeHooks.length) {
	      transition.runQueue(beforeHooks, function (hook, _, next) {
	        if (transition === _this2._currentTransition) {
	          transition.callHook(hook, null, next, true);
	        }
	      }, startTransition);
	    } else {
	      startTransition();
	    }

	    // HACK:
	    // set rendered to true after the transition start, so
	    // that components that are acitvated synchronously know
	    // whether it is the initial render.
	    this._rendered = true;
	  };

	  /**
	   * Set current to the new transition.
	   * This is called by the transition object when the
	   * validation of a route has succeeded.
	   *
	   * @param {RouteTransition} transition
	   */

	  Router.prototype._onTransitionValidated = function (transition) {
	    // now that this one is validated, we can abort
	    // the previous transition.
	    var prevTransition = this._prevTransition;
	    if (prevTransition) {
	      prevTransition.aborted = true;
	    }
	    // set current route
	    var route = this._currentRoute = transition.to;
	    // update route context for all children
	    if (this.app.$route !== route) {
	      this.app.$route = route;
	      this._children.forEach(function (child) {
	        child.$route = route;
	      });
	    }
	    // call global after hook
	    if (this._afterEachHooks.length) {
	      this._afterEachHooks.forEach(function (hook) {
	        return hook.call(null, {
	          to: transition.to,
	          from: transition.from
	        });
	      });
	    }
	    this._currentTransition.done = true;
	  };

	  /**
	   * Handle stuff after the transition.
	   *
	   * @param {Route} route
	   * @param {Object} [state]
	   * @param {String} [anchor]
	   */

	  Router.prototype._postTransition = function (route, state, anchor) {
	    // handle scroll positions
	    // saved scroll positions take priority
	    // then we check if the path has an anchor
	    var pos = state && state.pos;
	    if (pos && this._saveScrollPosition) {
	      Vue.nextTick(function () {
	        window.scrollTo(pos.x, pos.y);
	      });
	    } else if (anchor) {
	      Vue.nextTick(function () {
	        var el = document.getElementById(anchor.slice(1));
	        if (el) {
	          window.scrollTo(window.scrollX, el.offsetTop);
	        }
	      });
	    }
	  };

	  /**
	   * Normalize named route object / string paths into
	   * a string.
	   *
	   * @param {Object|String|Number} path
	   * @return {String}
	   */

	  Router.prototype._normalizePath = function (path) {
	    if (typeof path === 'object') {
	      if (path.name) {
	        var params = path.params || {};
	        if (path.query) {
	          params.queryParams = path.query;
	        }
	        return this._recognizer.generate(path.name, params);
	      } else if (path.path) {
	        return path.path;
	      } else {
	        return '';
	      }
	    } else {
	      return path + '';
	    }
	  };

	  /**
	   * Allow directly passing components to a route
	   * definition.
	   *
	   * @param {Object} handler
	   */

	  function guardComponent(handler) {
	    var comp = handler.component;
	    if (_.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      (0, _util.warn)('invalid component for route "' + handler.path + '"');
	    }
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = __webpack_require__(78)["default"];

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var internalKeysRE = /^(component|subRoutes)$/;

	/**
	 * Route Context Object
	 *
	 * @param {String} path
	 * @param {Router} router
	 */

	var Route = function Route(path, router) {
	  var _this = this;

	  _classCallCheck(this, Route);

	  var matched = router._recognizer.recognize(path);
	  if (matched) {
	    // copy all custom fields from route configs
	    [].forEach.call(matched, function (match) {
	      for (var key in match.handler) {
	        if (!internalKeysRE.test(key)) {
	          _this[key] = match.handler[key];
	        }
	      }
	    });
	    // set query and params
	    this.query = matched.queryParams;
	    this.params = [].reduce.call(matched, function (prev, cur) {
	      if (cur.params) {
	        for (var key in cur.params) {
	          prev[key] = cur.params[key];
	        }
	      }
	      return prev;
	    }, {});
	  }
	  // expose path and router
	  this.path = path;
	  this.router = router;
	  // for internal use
	  this._matched = matched || router._notFoundHandler;
	};

	exports["default"] = Route;
	module.exports = exports["default"];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(88)['default'];

	var _classCallCheck = __webpack_require__(78)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _util = __webpack_require__(80);

	var _pipeline = __webpack_require__(92);

	/**
	 * A RouteTransition object manages the pipeline of a
	 * router-view switching process. This is also the object
	 * passed into user route hooks.
	 *
	 * @param {Router} router
	 * @param {Route} to
	 * @param {Route} from
	 */

	var RouteTransition = (function () {
	  function RouteTransition(router, to, from) {
	    _classCallCheck(this, RouteTransition);

	    this.router = router;
	    this.to = to;
	    this.from = from;
	    this.next = null;
	    this.aborted = false;
	    this.done = false;

	    // start by determine the queues

	    // the deactivate queue is an array of router-view
	    // directive instances that need to be deactivated,
	    // deepest first.
	    this.deactivateQueue = router._views;

	    // check the default handler of the deepest match
	    var matched = to._matched ? Array.prototype.slice.call(to._matched) : [];

	    // the activate queue is an array of route handlers
	    // that need to be activated
	    this.activateQueue = matched.map(function (match) {
	      return match.handler;
	    });
	  }

	  /**
	   * Abort current transition and return to previous location.
	   */

	  _createClass(RouteTransition, [{
	    key: 'abort',
	    value: function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    }

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	  }, {
	    key: 'redirect',
	    value: function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = (0, _util.mapParams)(path, this.to.params, this.to.query);
	        } else {
	          path.params = this.to.params;
	          path.query = this.to.query;
	        }
	        this.router.replace(path);
	      }
	    }

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	  }, {
	    key: 'start',
	    value: function start(cb) {
	      var transition = this;
	      var daq = this.deactivateQueue;
	      var aq = this.activateQueue;
	      var rdaq = daq.slice().reverse();
	      var reuseQueue = undefined;

	      // 1. Reusability phase
	      var i = undefined;
	      for (i = 0; i < rdaq.length; i++) {
	        if (!(0, _pipeline.canReuse)(rdaq[i], aq[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = rdaq.slice(0, i);
	        daq = rdaq.slice(i).reverse();
	        aq = aq.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(daq, _pipeline.canDeactivate, function () {
	        transition.runQueue(aq, _pipeline.canActivate, function () {
	          transition.runQueue(daq, _pipeline.deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              (0, _pipeline.reuse)(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (daq.length) {
	              var view = daq[daq.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              (0, _pipeline.activate)(view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    }

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	  }, {
	    key: 'runQueue',
	    value: function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    }

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} expectData
	     *                 - {Function} cleanup
	     */

	  }, {
	    key: 'callHook',
	    value: function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$expectData = _ref.expectData;
	      var expectData = _ref$expectData === undefined ? false : _ref$expectData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort(back) {
	        cleanup && cleanup();
	        transition.abort(back);
	      };

	      // handle errors
	      var onError = function onError(err) {
	        // cleanup indicates an after-activation hook,
	        // so instead of aborting we just let the transition
	        // finish.
	        cleanup ? next() : abort();
	        if (err && !transition.router._suppress) {
	          (0, _util.warn)('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next(data) {
	        if (nextCalled) {
	          (0, _util.warn)('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (!cb || transition.aborted) {
	          return;
	        }
	        cb(data, onError);
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      // handle boolean/promise return values
	      var resIsPromise = (0, _util.isPromise)(res);
	      if (expectBoolean) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (resIsPromise) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onError);
	        }
	      } else if (resIsPromise) {
	        res.then(next, onError);
	      } else if (expectData && isPlainOjbect(res)) {
	        next(res);
	      }
	    }
	  }]);

	  return RouteTransition;
	})();

	exports['default'] = RouteTransition;

	function isPlainOjbect(val) {
	  return Object.prototype.toString.call(val) === '[object Object]';
	}
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(89)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(91);
	module.exports = function defineProperty(it, key, desc) {
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";

	var $Object = Object;
	module.exports = {
	  create: $Object.create,
	  getProto: $Object.getPrototypeOf,
	  isEnum: ({}).propertyIsEnumerable,
	  getDesc: $Object.getOwnPropertyDescriptor,
	  setDesc: $Object.defineProperty,
	  setDescs: $Object.defineProperties,
	  getKeys: $Object.keys,
	  getNames: $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each: [].forEach
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$keys = __webpack_require__(93)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.canReuse = canReuse;
	exports.canDeactivate = canDeactivate;
	exports.canActivate = canActivate;
	exports.deactivate = deactivate;
	exports.activate = activate;
	exports.reuse = reuse;

	var _util = __webpack_require__(80);

	/**
	 * Determine the reusability of an existing router view.
	 *
	 * @param {Directive} view
	 * @param {Object} handler
	 * @param {Transition} transition
	 */

	function canReuse(view, handler, transition) {
	  var component = view.childVM;
	  if (!component || !handler) {
	    return false;
	  }
	  // important: check view.Component here because it may
	  // have been changed in activate hook
	  if (view.Component !== handler.component) {
	    return false;
	  }
	  var canReuseFn = (0, _util.getRouteConfig)(component, 'canReuse');
	  return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	    to: transition.to,
	    from: transition.from
	  }) : true; // defaults to true
	}

	/**
	 * Check if a component can deactivate.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 * @param {Function} next
	 */

	function canDeactivate(view, transition, next) {
	  var fromComponent = view.childVM;
	  var hook = (0, _util.getRouteConfig)(fromComponent, 'canDeactivate');
	  if (!hook) {
	    next();
	  } else {
	    transition.callHook(hook, fromComponent, next, {
	      expectBoolean: true
	    });
	  }
	}

	/**
	 * Check if a component can activate.
	 *
	 * @param {Object} handler
	 * @param {Transition} transition
	 * @param {Function} next
	 */

	function canActivate(handler, transition, next) {
	  (0, _util.resolveAsyncComponent)(handler, function (Component) {
	    // have to check due to async-ness
	    if (transition.aborted) {
	      return;
	    }
	    // determine if this component can be activated
	    var hook = (0, _util.getRouteConfig)(Component, 'canActivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, null, next, {
	        expectBoolean: true
	      });
	    }
	  });
	}

	/**
	 * Call deactivate hooks for existing router-views.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 * @param {Function} next
	 */

	function deactivate(view, transition, next) {
	  var component = view.childVM;
	  var hook = (0, _util.getRouteConfig)(component, 'deactivate');
	  if (!hook) {
	    next();
	  } else {
	    transition.callHook(hook, component, next);
	  }
	}

	/**
	 * Activate / switch component for a router-view.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 * @param {Number} depth
	 * @param {Function} [cb]
	 */

	function activate(view, transition, depth, cb) {
	  var handler = transition.activateQueue[depth];
	  if (!handler) {
	    // fix 1.0.0-alpha.3 compat
	    if (view._bound) {
	      view.setComponent(null);
	    }
	    cb && cb();
	    return;
	  }

	  var Component = view.Component = handler.component;
	  var activateHook = (0, _util.getRouteConfig)(Component, 'activate');
	  var dataHook = (0, _util.getRouteConfig)(Component, 'data');
	  var waitForData = (0, _util.getRouteConfig)(Component, 'waitForData');

	  view.depth = depth;
	  view.activated = false;

	  // unbuild current component. this step also destroys
	  // and removes all nested child views.
	  view.unbuild(true);
	  // build the new component. this will also create the
	  // direct child view of the current one. it will register
	  // itself as view.childView.
	  var component = view.build({
	    _meta: {
	      $loadingRouteData: !!(dataHook && !waitForData)
	    }
	  });

	  // cleanup the component in case the transition is aborted
	  // before the component is ever inserted.
	  var cleanup = function cleanup() {
	    component.$destroy();
	  };

	  // actually insert the component and trigger transition
	  var insert = function insert() {
	    var router = transition.router;
	    if (router._rendered || router._transitionOnLoad) {
	      view.transition(component);
	    } else {
	      // no transition on first render, manual transition
	      if (view.setCurrent) {
	        // 0.12 compat
	        view.setCurrent(component);
	      } else {
	        // 1.0
	        view.childVM = component;
	      }
	      component.$before(view.anchor, null, false);
	    }
	    cb && cb();
	  };

	  // called after activation hook is resolved
	  var afterActivate = function afterActivate() {
	    view.activated = true;
	    // activate the child view
	    if (view.childView) {
	      exports.activate(view.childView, transition, depth + 1);
	    }
	    if (dataHook && waitForData) {
	      // wait until data loaded to insert
	      loadData(component, transition, dataHook, insert, cleanup);
	    } else {
	      // load data and insert at the same time
	      if (dataHook) {
	        loadData(component, transition, dataHook);
	      }
	      insert();
	    }
	  };

	  if (activateHook) {
	    transition.callHook(activateHook, component, afterActivate, {
	      cleanup: cleanup
	    });
	  } else {
	    afterActivate();
	  }
	}

	/**
	 * Reuse a view, just reload data if necessary.
	 *
	 * @param {Directive} view
	 * @param {Transition} transition
	 */

	function reuse(view, transition) {
	  var component = view.childVM;
	  var dataHook = (0, _util.getRouteConfig)(component, 'data');
	  if (dataHook) {
	    loadData(component, transition, dataHook);
	  }
	}

	/**
	 * Asynchronously load and apply data to component.
	 *
	 * @param {Vue} component
	 * @param {Transition} transition
	 * @param {Function} hook
	 * @param {Function} cb
	 * @param {Function} cleanup
	 */

	function loadData(component, transition, hook, cb, cleanup) {
	  component.$loadingRouteData = true;
	  transition.callHook(hook, component, function (data, onError) {
	    var promises = [];
	    _Object$keys(data).forEach(function (key) {
	      var val = data[key];
	      if ((0, _util.isPromise)(val)) {
	        promises.push(val.then(function (resolvedVal) {
	          component.$set(key, resolvedVal);
	        }));
	      } else {
	        component.$set(key, val);
	      }
	    });
	    if (!promises.length) {
	      component.$loadingRouteData = false;
	    } else {
	      promises[0].constructor.all(promises).then(function (_) {
	        component.$loadingRouteData = false;
	      }, onError);
	    }
	    cb && cb(data);
	  }, {
	    cleanup: cleanup,
	    expectData: true
	  });
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(95);
	module.exports = __webpack_require__(101).Object.keys;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	'use strict';

	var toObject = __webpack_require__(96);

	__webpack_require__(98)('keys', function ($keys) {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	'use strict';

	var defined = __webpack_require__(97);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	"use strict";

	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	'use strict';

	module.exports = function (KEY, exec) {
	  var $def = __webpack_require__(99),
	      fn = (__webpack_require__(101).Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(102)(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(100),
	    core = __webpack_require__(101),
	    PROTOTYPE = 'prototype';
	var ctx = function ctx(fn, that) {
	  return function () {
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function $def(type, name, source) {
	  var key,
	      own,
	      out,
	      exp,
	      isGlobal = type & $def.G,
	      isProto = type & $def.P,
	      target = isGlobal ? global : type & $def.S ? global[name] : (global[name] || {})[PROTOTYPE],
	      exports = isGlobal ? core : core[name] || (core[name] = {});
	  if (isGlobal) source = name;
	  for (key in source) {
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if (isGlobal && typeof target[key] != 'function') exp = source[key];
	    // bind timers to global for call from export context
	    else if (type & $def.B && own) exp = ctx(out, global);
	      // wrap global constructors for prevent change them in library
	      else if (type & $def.W && target[key] == out) !(function (C) {
	          exp = function (param) {
	            return this instanceof C ? new C(param) : C(param);
	          };
	          exp[PROTOTYPE] = C[PROTOTYPE];
	        })(out);else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if (isProto) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1; // forced
	$def.G = 2; // global
	$def.S = 4; // static
	$def.P = 8; // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 100 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	'use strict';

	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '1.2.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _util = __webpack_require__(80);

	var _pipeline = __webpack_require__(92);

	exports['default'] = function (Vue) {

	  var _ = Vue.util;
	  var componentDef =
	  // 0.12
	  Vue.directive('_component') ||
	  // 1.0
	  Vue.internalDirectives.component;
	  // <router-view> extends the internal component directive
	  var viewDef = _.extend({}, componentDef);

	  // with some overrides
	  _.extend(viewDef, {

	    _isRouterView: true,

	    bind: function bind() {
	      var route = this.vm.$route;
	      /* istanbul ignore if */
	      if (!route) {
	        (0, _util.warn)('<router-view> can only be used inside a ' + 'router-enabled app.');
	        return;
	      }
	      // force dynamic directive so v-component doesn't
	      // attempt to build right now
	      this._isDynamicLiteral = true;
	      // finally, init by delegating to v-component
	      componentDef.bind.call(this);

	      // does not support keep-alive.
	      /* istanbul ignore if */
	      if (this.keepAlive) {
	        this.keepAlive = false;
	        (0, _util.warn)('<router-view> does not support keep-alive.');
	      }
	      /* istanbul ignore if */
	      if (this.waitForEvent) {
	        this.waitForEvent = null;
	        (0, _util.warn)('<router-view> does not support wait-for. Use ' + 'the acitvate route hook instead.');
	      }

	      // all we need to do here is registering this view
	      // in the router. actual component switching will be
	      // managed by the pipeline.
	      var router = this.router = route.router;
	      router._views.unshift(this);

	      // note the views are in reverse order.
	      var parentView = router._views[1];
	      if (parentView) {
	        // register self as a child of the parent view,
	        // instead of activating now. This is so that the
	        // child's activate hook is called after the
	        // parent's has resolved.
	        parentView.childView = this;
	      }

	      // handle late-rendered view
	      // two possibilities:
	      // 1. root view rendered after transition has been
	      //    validated;
	      // 2. child view rendered after parent view has been
	      //    activated.
	      var transition = route.router._currentTransition;
	      if (!parentView && transition.done || parentView && parentView.activated) {
	        var depth = parentView ? parentView.depth + 1 : 0;
	        (0, _pipeline.activate)(this, transition, depth);
	      }
	    },

	    unbind: function unbind() {
	      this.router._views.$remove(this);
	      componentDef.unbind.call(this);
	    }
	  });

	  Vue.elementDirective('router-view', viewDef);
	};

	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _util = __webpack_require__(80);

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

	// install v-link, which provides navigation support for
	// HTML5 history mode

	exports['default'] = function (Vue) {

	  var _ = Vue.util;

	  Vue.directive('link', {

	    bind: function bind() {
	      var _this = this;

	      var vm = this.vm;
	      /* istanbul ignore if */
	      if (!vm.$route) {
	        (0, _util.warn)('v-link can only be used inside a ' + 'router-enabled app.');
	        return;
	      }
	      var router = vm.$route.router;
	      this.handler = function (e) {
	        // don't redirect with control keys
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        if (e.button !== 0) return;

	        if (_this.el.tagName === 'A' || e.target === _this.el) {
	          // v-link on <a v-link="'path'">
	          e.preventDefault();
	          if (_this.destination != null) {
	            router.go(_this.destination, _this.replace === true);
	          }
	        } else {
	          // v-link delegate on <div v-link>
	          var el = e.target;
	          while (el && el.tagName !== 'A' && el !== _this.el) {
	            el = el.parentNode;
	          }
	          if (!el || el.tagName !== 'A' || !el.href) return;
	          if (sameOrigin(el)) {
	            e.preventDefault();
	            router.go(el.pathname);
	          }
	        }
	      };
	      this.el.addEventListener('click', this.handler);
	      // manage active link class
	      this.unwatch = vm.$watch('$route.path', _.bind(this.updateClasses, this));
	    },

	    update: function update(path) {
	      var router = this.vm.$route.router;
	      this.replace = typeof path === 'object' ? path.replace : false;
	      path = router._normalizePath(path);
	      this.destination = path;
	      this.activeRE = path ? new RegExp('^' + path.replace(regexEscapeRE, '\\$&') + '\\b') : null;
	      this.updateClasses(this.vm.$route.path);
	      var isAbsolute = path.charAt(0) === '/';
	      // do not format non-hash relative paths
	      var href = router.mode === 'hash' || isAbsolute ? router.history.formatPath(path) : path;
	      if (this.el.tagName === 'A') {
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      }
	    },

	    updateClasses: function updateClasses(path) {
	      var el = this.el;
	      var dest = this.destination;
	      var router = this.vm.$route.router;
	      var activeClass = router._linkActiveClass;
	      var exactClass = activeClass + '-exact';
	      if (this.activeRE && this.activeRE.test(path) && path !== '/') {
	        _.addClass(el, activeClass);
	      } else {
	        _.removeClass(el, activeClass);
	      }
	      if (path === dest) {
	        _.addClass(el, exactClass);
	      } else {
	        _.removeClass(el, exactClass);
	      }
	    },

	    unbind: function unbind() {
	      this.el.removeEventListener('click', this.handler);
	      this.unwatch && this.unwatch();
	    }
	  });

	  function sameOrigin(link) {
	    return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports) {

	// overriding Vue's $addChild method, so that every child
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (Vue) {

	  var addChild = Vue.prototype.$addChild;

	  Vue.prototype.$addChild = function (opts, Ctor) {

	    var route = this.$route;
	    var router = route && route.router;

	    // inject meta
	    if (router) {
	      opts = opts || {};
	      var meta = opts._meta = opts._meta || {};
	      meta.$route = route;
	      if (opts._isRouterView) {
	        meta.$loadingRouteData = meta.$loadingRouteData || false;
	      }
	    }

	    var child = addChild.call(this, opts, Ctor);

	    if (router) {
	      // keep track of all children created so we can
	      // update the routes
	      router._children.push(child);
	      child.$on('hook:beforeDestroy', function () {
	        router._children.$remove(child);
	      });
	    }

	    return child;
	  };
	};

	module.exports = exports['default'];
	// instance inherits the route data

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(88)['default'];

	var _classCallCheck = __webpack_require__(78)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _util = __webpack_require__(80);

	var AbstractHistory = (function () {
	  function AbstractHistory(_ref) {
	    var onChange = _ref.onChange;

	    _classCallCheck(this, AbstractHistory);

	    this.onChange = onChange;
	    this.currentPath = '/';
	  }

	  _createClass(AbstractHistory, [{
	    key: 'start',
	    value: function start() {
	      this.onChange('/');
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      // noop
	    }
	  }, {
	    key: 'go',
	    value: function go(path) {
	      path = this.currentPath = this.formatPath(path);
	      this.onChange(path);
	    }
	  }, {
	    key: 'formatPath',
	    value: function formatPath(path) {
	      return path.charAt(0) === '/' ? path : (0, _util.resolvePath)(this.currentPath, path);
	    }
	  }]);

	  return AbstractHistory;
	})();

	exports['default'] = AbstractHistory;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(88)['default'];

	var _classCallCheck = __webpack_require__(78)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _util = __webpack_require__(80);

	var HashHistory = (function () {
	  function HashHistory(_ref) {
	    var hashbang = _ref.hashbang;
	    var onChange = _ref.onChange;

	    _classCallCheck(this, HashHistory);

	    this.hashbang = hashbang;
	    this.onChange = onChange;
	  }

	  _createClass(HashHistory, [{
	    key: 'start',
	    value: function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var formattedPath = self.formatPath(path, true);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        var pathToMatch = decodeURI(path.replace(/^#!?/, '') + location.search);
	        self.onChange(pathToMatch);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    }
	  }, {
	    key: 'go',
	    value: function go(path, replace) {
	      path = this.formatPath(path);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    }
	  }, {
	    key: 'formatPath',
	    value: function formatPath(path, expectAbsolute) {
	      path = path.replace(/^#!?/, '');
	      var isAbsoloute = path.charAt(0) === '/';
	      if (expectAbsolute && !isAbsoloute) {
	        path = '/' + path;
	      }
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute || expectAbsolute ? prefix + path : prefix + (0, _util.resolvePath)(location.hash.replace(/^#!?/, ''), path);
	    }
	  }]);

	  return HashHistory;
	})();

	exports['default'] = HashHistory;
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(88)['default'];

	var _classCallCheck = __webpack_require__(78)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _util = __webpack_require__(80);

	var hashRE = /#.*$/;

	var HTML5History = (function () {
	  function HTML5History(_ref) {
	    var root = _ref.root;
	    var onChange = _ref.onChange;

	    _classCallCheck(this, HTML5History);

	    if (root) {
	      // make sure there's the starting slash
	      if (root.charAt(0) !== '/') {
	        root = '/' + root;
	      }
	      // remove trailing slash
	      this.root = root.replace(/\/$/, '');
	      this.rootRE = new RegExp('^\\' + this.root);
	    } else {
	      this.root = null;
	    }
	    this.onChange = onChange;
	    // check base tag
	    var baseEl = document.querySelector('base');
	    this.base = baseEl && baseEl.getAttribute('href');
	  }

	  _createClass(HTML5History, [{
	    key: 'start',
	    value: function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = decodeURI(location.pathname + location.search);
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      window.removeEventListener('popstate', this.listener);
	    }
	  }, {
	    key: 'go',
	    value: function go(path, replace) {
	      var root = this.root;
	      var url = this.formatPath(path, root);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '');
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    }
	  }, {
	    key: 'formatPath',
	    value: function formatPath(path) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : (0, _util.resolvePath)(this.base || location.pathname, path);
	    }
	  }]);

	  return HTML5History;
	})();

	exports['default'] = HTML5History;
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(110)
	module.exports.template = __webpack_require__(207)


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var fetch = __webpack_require__(73);
	var moment = __webpack_require__(111);
	exports['default'] = {
	  data: function data() {
	    return {
	      animes: [],
	      date: '1510',
	      showDay: moment().day()
	    };
	  },
	  computed: {
	    weekdays: function weekdays() {
	      var _this = this;

	      var days = ['日', '一', '二', '三', '四', '五', '六'];
	      return days.map(function (d, i) {
	        return {
	          day: d,
	          current: i == _this.showDay,
	          index: i
	        };
	      });
	    }
	  },
	  methods: {
	    fetchAnimes: function fetchAnimes(date) {
	      var _this2 = this;

	      fetch.get(date, true).then(function (data) {
	        _this2.animes = data;
	      });
	    },
	    switchDay: function switchDay(weekday) {
	      this.showDay = weekday.index;
	      window.scrollTo(0, 0);
	    }
	  },
	  ready: function ready() {
	    this.fetchAnimes('1510');
	  },
	  components: {
	    Animes: __webpack_require__(198)
	  },
	  filters: {
	    weekday: __webpack_require__(205)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.10.6
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	'use strict';(function(global,factory){ true?module.exports = factory():typeof define === 'function' && define.amd?define(factory):global.moment = factory();})(undefined,function(){'use strict';var hookCallback;function utils_hooks__hooks(){return hookCallback.apply(null,arguments);} // This is done to register the method called with moment()
	// without creating circular dependencies.
	function setHookCallback(callback){hookCallback = callback;}function isArray(input){return Object.prototype.toString.call(input) === '[object Array]';}function isDate(input){return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';}function map(arr,fn){var res=[],i;for(i = 0;i < arr.length;++i) {res.push(fn(arr[i],i));}return res;}function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b);}function extend(a,b){for(var i in b) {if(hasOwnProp(b,i)){a[i] = b[i];}}if(hasOwnProp(b,'toString')){a.toString = b.toString;}if(hasOwnProp(b,'valueOf')){a.valueOf = b.valueOf;}return a;}function create_utc__createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,true).utc();}function defaultParsingFlags(){ // We need to deep clone this object.
	return {empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false};}function getParsingFlags(m){if(m._pf == null){m._pf = defaultParsingFlags();}return m._pf;}function valid__isValid(m){if(m._isValid == null){var flags=getParsingFlags(m);m._isValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated;if(m._strict){m._isValid = m._isValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;}}return m._isValid;}function valid__createInvalid(flags){var m=create_utc__createUTC(NaN);if(flags != null){extend(getParsingFlags(m),flags);}else {getParsingFlags(m).userInvalidated = true;}return m;}var momentProperties=utils_hooks__hooks.momentProperties = [];function copyConfig(to,from){var i,prop,val;if(typeof from._isAMomentObject !== 'undefined'){to._isAMomentObject = from._isAMomentObject;}if(typeof from._i !== 'undefined'){to._i = from._i;}if(typeof from._f !== 'undefined'){to._f = from._f;}if(typeof from._l !== 'undefined'){to._l = from._l;}if(typeof from._strict !== 'undefined'){to._strict = from._strict;}if(typeof from._tzm !== 'undefined'){to._tzm = from._tzm;}if(typeof from._isUTC !== 'undefined'){to._isUTC = from._isUTC;}if(typeof from._offset !== 'undefined'){to._offset = from._offset;}if(typeof from._pf !== 'undefined'){to._pf = getParsingFlags(from);}if(typeof from._locale !== 'undefined'){to._locale = from._locale;}if(momentProperties.length > 0){for(i in momentProperties) {prop = momentProperties[i];val = from[prop];if(typeof val !== 'undefined'){to[prop] = val;}}}return to;}var updateInProgress=false; // Moment prototype object
	function Moment(config){copyConfig(this,config);this._d = new Date(config._d != null?config._d.getTime():NaN); // Prevent infinite loop in case updateOffset creates new moment
	// objects.
	if(updateInProgress === false){updateInProgress = true;utils_hooks__hooks.updateOffset(this);updateInProgress = false;}}function isMoment(obj){return obj instanceof Moment || obj != null && obj._isAMomentObject != null;}function absFloor(number){if(number < 0){return Math.ceil(number);}else {return Math.floor(number);}}function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber !== 0 && isFinite(coercedNumber)){value = absFloor(coercedNumber);}return value;}function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length - array2.length),diffs=0,i;for(i = 0;i < len;i++) {if(dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])){diffs++;}}return diffs + lengthDiff;}function Locale(){}var locales={};var globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key;} // pick the locale from the array
	// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	function chooseLocale(names){var i=0,j,next,locale,split;while(i < names.length) {split = normalizeLocale(names[i]).split('-');j = split.length;next = normalizeLocale(names[i + 1]);next = next?next.split('-'):null;while(j > 0) {locale = loadLocale(split.slice(0,j).join('-'));if(locale){return locale;}if(next && next.length >= j && compareArrays(split,next,true) >= j - 1){ //the next array item is better than a shallower substring of this one
	break;}j--;}i++;}return null;}function loadLocale(name){var oldLocale=null; // TODO: Find a better way to register and load all the locales in Node
	if(!locales[name] && typeof module !== 'undefined' && module && module.exports){try{oldLocale = globalLocale._abbr;__webpack_require__(112)("./" + name); // because defineLocale currently also sets the global locale, we
	// want to undo that for lazy loaded locales
	locale_locales__getSetGlobalLocale(oldLocale);}catch(e) {}}return locales[name];} // This function will load locale and then set the global locale.  If
	// no arguments are passed in, it will simply return the current global
	// locale key.
	function locale_locales__getSetGlobalLocale(key,values){var data;if(key){if(typeof values === 'undefined'){data = locale_locales__getLocale(key);}else {data = defineLocale(key,values);}if(data){ // moment.duration._locale = moment._locale = data;
	globalLocale = data;}}return globalLocale._abbr;}function defineLocale(name,values){if(values !== null){values.abbr = name;locales[name] = locales[name] || new Locale();locales[name].set(values); // backwards compat for now: also set the locale
	locale_locales__getSetGlobalLocale(name);return locales[name];}else { // useful for testing
	delete locales[name];return null;}} // returns locale data
	function locale_locales__getLocale(key){var locale;if(key && key._locale && key._locale._abbr){key = key._locale._abbr;}if(!key){return globalLocale;}if(!isArray(key)){ //short-circuit everything else
	locale = loadLocale(key);if(locale){return locale;}key = [key];}return chooseLocale(key);}var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;}function normalizeUnits(units){return typeof units === 'string'?aliases[units] || aliases[units.toLowerCase()]:undefined;}function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject) {if(hasOwnProp(inputObject,prop)){normalizedProp = normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp] = inputObject[prop];}}}return normalizedInput;}function makeGetSet(unit,keepTime){return function(value){if(value != null){get_set__set(this,unit,value);utils_hooks__hooks.updateOffset(this,keepTime);return this;}else {return get_set__get(this,unit);}};}function get_set__get(mom,unit){return mom._d['get' + (mom._isUTC?'UTC':'') + unit]();}function get_set__set(mom,unit,value){return mom._d['set' + (mom._isUTC?'UTC':'') + unit](value);} // MOMENTS
	function getSet(units,value){var unit;if(typeof units === 'object'){for(unit in units) {this.set(unit,units[unit]);}}else {units = normalizeUnits(units);if(typeof this[units] === 'function'){return this[units](value);}}return this;}function zeroFill(number,targetLength,forceSign){var absNumber='' + Math.abs(number),zerosToFill=targetLength - absNumber.length,sign=number >= 0;return (sign?forceSign?'+':'':'-') + Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1) + absNumber;}var formattingTokens=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions={};var formatTokenFunctions={}; // token:    'M'
	// padded:   ['MM', 2]
	// ordinal:  'Mo'
	// callback: function () { this.month() + 1 }
	function addFormatToken(token,padded,ordinal,callback){var func=callback;if(typeof callback === 'string'){func = function(){return this[callback]();};}if(token){formatTokenFunctions[token] = func;}if(padded){formatTokenFunctions[padded[0]] = function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2]);};}if(ordinal){formatTokenFunctions[ordinal] = function(){return this.localeData().ordinal(func.apply(this,arguments),token);};}}function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'');}return input.replace(/\\/g,'');}function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i = 0,length = array.length;i < length;i++) {if(formatTokenFunctions[array[i]]){array[i] = formatTokenFunctions[array[i]];}else {array[i] = removeFormattingTokens(array[i]);}}return function(mom){var output='';for(i = 0;i < length;i++) {output += array[i] instanceof Function?array[i].call(mom,format):array[i];}return output;};} // format date using native date object
	function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}format = expandFormat(format,m.localeData());formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);return formatFunctions[format](m);}function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input) || input;}localFormattingTokens.lastIndex = 0;while(i >= 0 && localFormattingTokens.test(format)) {format = format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex = 0;i -= 1;}return format;}var match1=/\d/; //       0 - 9
	var match2=/\d\d/; //      00 - 99
	var match3=/\d{3}/; //     000 - 999
	var match4=/\d{4}/; //    0000 - 9999
	var match6=/[+-]?\d{6}/; // -999999 - 999999
	var match1to2=/\d\d?/; //       0 - 99
	var match1to3=/\d{1,3}/; //       0 - 999
	var match1to4=/\d{1,4}/; //       0 - 9999
	var match1to6=/[+-]?\d{1,6}/; // -999999 - 999999
	var matchUnsigned=/\d+/; //       0 - inf
	var matchSigned=/[+-]?\d+/; //    -inf - inf
	var matchOffset=/Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
	// any word (or two) characters or numbers including two/three word month in arabic.
	var matchWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;var regexes={};function isFunction(sth){ // https://github.com/moment/moment/issues/2325
	return typeof sth === 'function' && Object.prototype.toString.call(sth) === '[object Function]';}function addRegexToken(token,regex,strictRegex){regexes[token] = isFunction(regex)?regex:function(isStrict){return isStrict && strictRegex?strictRegex:regex;};}function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token));}return regexes[token](config._strict,config._locale);} // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	function unescapeFormat(s){return s.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1 || p2 || p3 || p4;}).replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}var tokens={};function addParseToken(token,callback){var i,func=callback;if(typeof token === 'string'){token = [token];}if(typeof callback === 'number'){func = function(input,array){array[callback] = toInt(input);};}for(i = 0;i < token.length;i++) {tokens[token[i]] = func;}}function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w = config._w || {};callback(input,config._w,config,token);});}function addTimeToArrayFromToken(token,input,config){if(input != null && hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token);}}var YEAR=0;var MONTH=1;var DATE=2;var HOUR=3;var MINUTE=4;var SECOND=5;var MILLISECOND=6;function daysInMonth(year,month){return new Date(Date.UTC(year,month + 1,0)).getUTCDate();} // FORMATTING
	addFormatToken('M',['MM',2],'Mo',function(){return this.month() + 1;});addFormatToken('MMM',0,0,function(format){return this.localeData().monthsShort(this,format);});addFormatToken('MMMM',0,0,function(format){return this.localeData().months(this,format);}); // ALIASES
	addUnitAlias('month','M'); // PARSING
	addRegexToken('M',match1to2);addRegexToken('MM',match1to2,match2);addRegexToken('MMM',matchWord);addRegexToken('MMMM',matchWord);addParseToken(['M','MM'],function(input,array){array[MONTH] = toInt(input) - 1;});addParseToken(['MMM','MMMM'],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict); // if we didn't find a month name, mark the date as invalid.
	if(month != null){array[MONTH] = month;}else {getParsingFlags(config).invalidMonth = input;}}); // LOCALES
	var defaultLocaleMonths='January_February_March_April_May_June_July_August_September_October_November_December'.split('_');function localeMonths(m){return this._months[m.month()];}var defaultLocaleMonthsShort='Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');function localeMonthsShort(m){return this._monthsShort[m.month()];}function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(!this._monthsParse){this._monthsParse = [];this._longMonthsParse = [];this._shortMonthsParse = [];}for(i = 0;i < 12;i++) { // make the regex if we don't have it already
	mom = create_utc__createUTC([2000,i]);if(strict && !this._longMonthsParse[i]){this._longMonthsParse[i] = new RegExp('^' + this.months(mom,'').replace('.','') + '$','i');this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom,'').replace('.','') + '$','i');}if(!strict && !this._monthsParse[i]){regex = '^' + this.months(mom,'') + '|^' + this.monthsShort(mom,'');this._monthsParse[i] = new RegExp(regex.replace('.',''),'i');} // test the regex
	if(strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)){return i;}else if(strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict && this._monthsParse[i].test(monthName)){return i;}}} // MOMENTS
	function setMonth(mom,value){var dayOfMonth; // TODO: Move this out of here!
	if(typeof value === 'string'){value = mom.localeData().monthsParse(value); // TODO: Another silent failure?
	if(typeof value !== 'number'){return mom;}}dayOfMonth = Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set' + (mom._isUTC?'UTC':'') + 'Month'](value,dayOfMonth);return mom;}function getSetMonth(value){if(value != null){setMonth(this,value);utils_hooks__hooks.updateOffset(this,true);return this;}else {return get_set__get(this,'Month');}}function getDaysInMonth(){return daysInMonth(this.year(),this.month());}function checkOverflow(m){var overflow;var a=m._a;if(a && getParsingFlags(m).overflow === -2){overflow = a[MONTH] < 0 || a[MONTH] > 11?MONTH:a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)?HOUR:a[MINUTE] < 0 || a[MINUTE] > 59?MINUTE:a[SECOND] < 0 || a[SECOND] > 59?SECOND:a[MILLISECOND] < 0 || a[MILLISECOND] > 999?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)){overflow = DATE;}getParsingFlags(m).overflow = overflow;}return m;}function warn(msg){if(utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn){console.warn('Deprecation warning: ' + msg);}}function deprecate(msg,fn){var firstTime=true;return extend(function(){if(firstTime){warn(msg + '\n' + new Error().stack);firstTime = false;}return fn.apply(this,arguments);},fn);}var deprecations={};function deprecateSimple(name,msg){if(!deprecations[name]){warn(msg);deprecations[name] = true;}}utils_hooks__hooks.suppressDeprecationWarnings = false;var from_string__isoRegex=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;var isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d{2}-\d{2}/],['YYYY-MM-DD',/\d{4}-\d{2}-\d{2}/],['GGGG-[W]WW-E',/\d{4}-W\d{2}-\d/],['GGGG-[W]WW',/\d{4}-W\d{2}/],['YYYY-DDD',/\d{4}-\d{3}/]]; // iso time formats and regexes
	var isoTimes=[['HH:mm:ss.SSSS',/(T| )\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss',/(T| )\d\d:\d\d:\d\d/],['HH:mm',/(T| )\d\d:\d\d/],['HH',/(T| )\d\d/]];var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i; // date from iso format
	function configFromISO(config){var i,l,string=config._i,match=from_string__isoRegex.exec(string);if(match){getParsingFlags(config).iso = true;for(i = 0,l = isoDates.length;i < l;i++) {if(isoDates[i][1].exec(string)){config._f = isoDates[i][0];break;}}for(i = 0,l = isoTimes.length;i < l;i++) {if(isoTimes[i][1].exec(string)){ // match[6] should be 'T' or space
	config._f += (match[6] || ' ') + isoTimes[i][0];break;}}if(string.match(matchOffset)){config._f += 'Z';}configFromStringAndFormat(config);}else {config._isValid = false;}} // date from iso format or fallback
	function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(matched !== null){config._d = new Date(+matched[1]);return;}configFromISO(config);if(config._isValid === false){delete config._isValid;utils_hooks__hooks.createFromInputFallback(config);}}utils_hooks__hooks.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.',function(config){config._d = new Date(config._i + (config._useUTC?' UTC':''));});function createDate(y,m,d,h,M,s,ms){ //can't just apply() to create a date:
	//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	var date=new Date(y,m,d,h,M,s,ms); //the date constructor doesn't accept years < 1970
	if(y < 1970){date.setFullYear(y);}return date;}function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(y < 1970){date.setUTCFullYear(y);}return date;}addFormatToken(0,['YY',2],0,function(){return this.year() % 100;});addFormatToken(0,['YYYY',4],0,'year');addFormatToken(0,['YYYYY',5],0,'year');addFormatToken(0,['YYYYYY',6,true],0,'year'); // ALIASES
	addUnitAlias('year','y'); // PARSING
	addRegexToken('Y',matchSigned);addRegexToken('YY',match1to2,match2);addRegexToken('YYYY',match1to4,match4);addRegexToken('YYYYY',match1to6,match6);addRegexToken('YYYYYY',match1to6,match6);addParseToken(['YYYYY','YYYYYY'],YEAR);addParseToken('YYYY',function(input,array){array[YEAR] = input.length === 2?utils_hooks__hooks.parseTwoDigitYear(input):toInt(input);});addParseToken('YY',function(input,array){array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);}); // HELPERS
	function daysInYear(year){return isLeapYear(year)?366:365;}function isLeapYear(year){return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;} // HOOKS
	utils_hooks__hooks.parseTwoDigitYear = function(input){return toInt(input) + (toInt(input) > 68?1900:2000);}; // MOMENTS
	var getSetYear=makeGetSet('FullYear',false);function getIsLeapYear(){return isLeapYear(this.year());}addFormatToken('w',['ww',2],'wo','week');addFormatToken('W',['WW',2],'Wo','isoWeek'); // ALIASES
	addUnitAlias('week','w');addUnitAlias('isoWeek','W'); // PARSING
	addRegexToken('w',match1to2);addRegexToken('ww',match1to2,match2);addRegexToken('W',match1to2);addRegexToken('WW',match1to2,match2);addWeekParseToken(['w','ww','W','WW'],function(input,week,config,token){week[token.substr(0,1)] = toInt(input);}); // HELPERS
	// firstDayOfWeek       0 = sun, 6 = sat
	//                      the day of the week that starts the week
	//                      (usually sunday or monday)
	// firstDayOfWeekOfYear 0 = sun, 6 = sat
	//                      the first week is the week that contains the first
	//                      of this day of the week
	//                      (eg. ISO weeks use thursday (4))
	function weekOfYear(mom,firstDayOfWeek,firstDayOfWeekOfYear){var end=firstDayOfWeekOfYear - firstDayOfWeek,daysToDayOfWeek=firstDayOfWeekOfYear - mom.day(),adjustedMoment;if(daysToDayOfWeek > end){daysToDayOfWeek -= 7;}if(daysToDayOfWeek < end - 7){daysToDayOfWeek += 7;}adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek,'d');return {week:Math.ceil(adjustedMoment.dayOfYear() / 7),year:adjustedMoment.year()};} // LOCALES
	function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;}var defaultLocaleWeek={dow:0, // Sunday is the first day of the week.
	doy:6 // The week that contains Jan 1st is the first week of the year.
	};function localeFirstDayOfWeek(){return this._week.dow;}function localeFirstDayOfYear(){return this._week.doy;} // MOMENTS
	function getSetWeek(input){var week=this.localeData().week(this);return input == null?week:this.add((input - week) * 7,'d');}function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return input == null?week:this.add((input - week) * 7,'d');}addFormatToken('DDD',['DDDD',3],'DDDo','dayOfYear'); // ALIASES
	addUnitAlias('dayOfYear','DDD'); // PARSING
	addRegexToken('DDD',match1to3);addRegexToken('DDDD',match3);addParseToken(['DDD','DDDD'],function(input,array,config){config._dayOfYear = toInt(input);}); // HELPERS
	//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	function dayOfYearFromWeeks(year,week,weekday,firstDayOfWeekOfYear,firstDayOfWeek){var week1Jan=6 + firstDayOfWeek - firstDayOfWeekOfYear,janX=createUTCDate(year,0,1 + week1Jan),d=janX.getUTCDay(),dayOfYear;if(d < firstDayOfWeek){d += 7;}weekday = weekday != null?1 * weekday:firstDayOfWeek;dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday;return {year:dayOfYear > 0?year:year - 1,dayOfYear:dayOfYear > 0?dayOfYear:daysInYear(year - 1) + dayOfYear};} // MOMENTS
	function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;return input == null?dayOfYear:this.add(input - dayOfYear,'d');} // Pick the first defined of two or three arguments.
	function defaults(a,b,c){if(a != null){return a;}if(b != null){return b;}return c;}function currentDateArray(config){var now=new Date();if(config._useUTC){return [now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()];}return [now.getFullYear(),now.getMonth(),now.getDate()];} // convert an array to a date.
	// the array should mirror the parameters below
	// note: all values past the year are optional and will default to the lowest possible value.
	// [year, month, day , hour, minute, second, millisecond]
	function configFromArray(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return;}currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays
	if(config._w && config._a[DATE] == null && config._a[MONTH] == null){dayOfYearFromWeekInfo(config);} //if the day of the year is set, figure out what it is
	if(config._dayOfYear){yearToUse = defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear > daysInYear(yearToUse)){getParsingFlags(config)._overflowDayOfYear = true;}date = createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH] = date.getUTCMonth();config._a[DATE] = date.getUTCDate();} // Default to current date.
	// * if no year, month, day of month are given, default to today
	// * if day of month is given, default month and year
	// * if month is given, default only year
	// * if year is given, don't default anything
	for(i = 0;i < 3 && config._a[i] == null;++i) {config._a[i] = input[i] = currentDate[i];} // Zero out whatever was not defaulted, including time
	for(;i < 7;i++) {config._a[i] = input[i] = config._a[i] == null?i === 2?1:0:config._a[i];} // Check for 24:00:00.000
	if(config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0){config._nextDay = true;config._a[HOUR] = 0;}config._d = (config._useUTC?createUTCDate:createDate).apply(null,input); // Apply timezone offset from input. The actual utcOffset can be changed
	// with parseZone.
	if(config._tzm != null){config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);}if(config._nextDay){config._a[HOUR] = 24;}}function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp;w = config._w;if(w.GG != null || w.W != null || w.E != null){dow = 1;doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
	// how we interpret now (local, utc, fixed offset). So create
	// a now version of current config (take local/utc/offset flags, and
	// create now).
	weekYear = defaults(w.GG,config._a[YEAR],weekOfYear(local__createLocal(),1,4).year);week = defaults(w.W,1);weekday = defaults(w.E,1);}else {dow = config._locale._week.dow;doy = config._locale._week.doy;weekYear = defaults(w.gg,config._a[YEAR],weekOfYear(local__createLocal(),dow,doy).year);week = defaults(w.w,1);if(w.d != null){ // weekday -- low day numbers are considered next week
	weekday = w.d;if(weekday < dow){++week;}}else if(w.e != null){ // local weekday -- counting starts from begining of week
	weekday = w.e + dow;}else { // default to begining of week
	weekday = dow;}}temp = dayOfYearFromWeeks(weekYear,week,weekday,doy,dow);config._a[YEAR] = temp.year;config._dayOfYear = temp.dayOfYear;}utils_hooks__hooks.ISO_8601 = function(){}; // date from string and format string
	function configFromStringAndFormat(config){ // TODO: Move this to another part of the creation flow to prevent circular deps
	if(config._f === utils_hooks__hooks.ISO_8601){configFromISO(config);return;}config._a = [];getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`
	var string='' + config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens = expandFormat(config._f,config._locale).match(formattingTokens) || [];for(i = 0;i < tokens.length;i++) {token = tokens[i];parsedInput = (string.match(getParseRegexForToken(token,config)) || [])[0];if(parsedInput){skipped = string.substr(0,string.indexOf(parsedInput));if(skipped.length > 0){getParsingFlags(config).unusedInput.push(skipped);}string = string.slice(string.indexOf(parsedInput) + parsedInput.length);totalParsedInputLength += parsedInput.length;} // don't parse if it's not a known token
	if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty = false;}else {getParsingFlags(config).unusedTokens.push(token);}addTimeToArrayFromToken(token,parsedInput,config);}else if(config._strict && !parsedInput){getParsingFlags(config).unusedTokens.push(token);}} // add remaining unparsed input length to the string
	getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;if(string.length > 0){getParsingFlags(config).unusedInput.push(string);} // clear _12h flag if hour is <= 12
	if(getParsingFlags(config).bigHour === true && config._a[HOUR] <= 12 && config._a[HOUR] > 0){getParsingFlags(config).bigHour = undefined;} // handle meridiem
	config._a[HOUR] = meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);checkOverflow(config);}function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem == null){ // nothing to do
	return hour;}if(locale.meridiemHour != null){return locale.meridiemHour(hour,meridiem);}else if(locale.isPM != null){ // Fallback
	isPm = locale.isPM(meridiem);if(isPm && hour < 12){hour += 12;}if(!isPm && hour === 12){hour = 0;}return hour;}else { // this is not supposed to happen
	return hour;}}function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length === 0){getParsingFlags(config).invalidFormat = true;config._d = new Date(NaN);return;}for(i = 0;i < config._f.length;i++) {currentScore = 0;tempConfig = copyConfig({},config);if(config._useUTC != null){tempConfig._useUTC = config._useUTC;}tempConfig._f = config._f[i];configFromStringAndFormat(tempConfig);if(!valid__isValid(tempConfig)){continue;} // if there is any input that was not parsed add a penalty for that format
	currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens
	currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;getParsingFlags(tempConfig).score = currentScore;if(scoreToBeat == null || currentScore < scoreToBeat){scoreToBeat = currentScore;bestMoment = tempConfig;}}extend(config,bestMoment || tempConfig);}function configFromObject(config){if(config._d){return;}var i=normalizeObjectUnits(config._i);config._a = [i.year,i.month,i.day || i.date,i.hour,i.minute,i.second,i.millisecond];configFromArray(config);}function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){ // Adding is smart enough around DST
	res.add(1,'d');res._nextDay = undefined;}return res;}function prepareConfig(config){var input=config._i,format=config._f;config._locale = config._locale || locale_locales__getLocale(config._l);if(input === null || format === undefined && input === ''){return valid__createInvalid({nullInput:true});}if(typeof input === 'string'){config._i = input = config._locale.preparse(input);}if(isMoment(input)){return new Moment(checkOverflow(input));}else if(isArray(format)){configFromStringAndArray(config);}else if(format){configFromStringAndFormat(config);}else if(isDate(input)){config._d = input;}else {configFromInput(config);}return config;}function configFromInput(config){var input=config._i;if(input === undefined){config._d = new Date();}else if(isDate(input)){config._d = new Date(+input);}else if(typeof input === 'string'){configFromString(config);}else if(isArray(input)){config._a = map(input.slice(0),function(obj){return parseInt(obj,10);});configFromArray(config);}else if(typeof input === 'object'){configFromObject(config);}else if(typeof input === 'number'){ // from milliseconds
	config._d = new Date(input);}else {utils_hooks__hooks.createFromInputFallback(config);}}function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(typeof locale === 'boolean'){strict = locale;locale = undefined;} // object construction must be done this way.
	// https://github.com/moment/moment/issues/1423
	c._isAMomentObject = true;c._useUTC = c._isUTC = isUTC;c._l = locale;c._i = input;c._f = format;c._strict = strict;return createFromConfig(c);}function local__createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,false);}var prototypeMin=deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);return other < this?this:other;});var prototypeMax=deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);return other > this?this:other;}); // Pick a moment m from moments so that m[fn](other) is true for all
	// other. This relies on the function fn to be transitive.
	//
	// moments should either be an array of moment objects or an array, whose
	// first element is an array of moment objects.
	function pickBy(fn,moments){var res,i;if(moments.length === 1 && isArray(moments[0])){moments = moments[0];}if(!moments.length){return local__createLocal();}res = moments[0];for(i = 1;i < moments.length;++i) {if(!moments[i].isValid() || moments[i][fn](res)){res = moments[i];}}return res;} // TODO: Use [].sort instead?
	function min(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args);}function max(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args);}function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year || 0,quarters=normalizedInput.quarter || 0,months=normalizedInput.month || 0,weeks=normalizedInput.week || 0,days=normalizedInput.day || 0,hours=normalizedInput.hour || 0,minutes=normalizedInput.minute || 0,seconds=normalizedInput.second || 0,milliseconds=normalizedInput.millisecond || 0; // representation for dateAddRemove
	this._milliseconds = +milliseconds + seconds * 1e3 +  // 1000
	minutes * 6e4 +  // 1000 * 60
	hours * 36e5; // 1000 * 60 * 60
	// Because of dateAddRemove treats 24 hours as different from a
	// day when working around DST, we need to store them separately
	this._days = +days + weeks * 7; // It is impossible translate months into days without knowing
	// which months you are are talking about, so we have to store
	// it separately.
	this._months = +months + quarters * 3 + years * 12;this._data = {};this._locale = locale_locales__getLocale();this._bubble();}function isDuration(obj){return obj instanceof Duration;}function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset();var sign='+';if(offset < 0){offset = -offset;sign = '-';}return sign + zeroFill(~ ~(offset / 60),2) + separator + zeroFill(~ ~offset % 60,2);});}offset('Z',':');offset('ZZ',''); // PARSING
	addRegexToken('Z',matchOffset);addRegexToken('ZZ',matchOffset);addParseToken(['Z','ZZ'],function(input,array,config){config._useUTC = true;config._tzm = offsetFromString(input);}); // HELPERS
	// timezone chunker
	// '+10:00' > ['10',  '00']
	// '-1530'  > ['-15', '30']
	var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(string){var matches=(string || '').match(matchOffset) || [];var chunk=matches[matches.length - 1] || [];var parts=(chunk + '').match(chunkOffset) || ['-',0,0];var minutes=+(parts[1] * 60) + toInt(parts[2]);return parts[0] === '+'?minutes:-minutes;} // Return a moment from input, that is local/utc/zone equivalent to model.
	function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res = model.clone();diff = (isMoment(input) || isDate(input)?+input:+local__createLocal(input)) - +res; // Use low-level api, because this fn is low-level api.
	res._d.setTime(+res._d + diff);utils_hooks__hooks.updateOffset(res,false);return res;}else {return local__createLocal(input).local();}}function getDateOffset(m){ // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	// https://github.com/moment/moment/pull/1871
	return -Math.round(m._d.getTimezoneOffset() / 15) * 15;} // HOOKS
	// This function will be called whenever a moment is mutated.
	// It is intended to keep the offset in sync with the timezone.
	utils_hooks__hooks.updateOffset = function(){}; // MOMENTS
	// keepLocalTime = true means only change the timezone, without
	// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	// +0200, so we adjust the time as needed, to be valid.
	//
	// Keeping the time actually adds/subtracts (one hour)
	// from the actual represented time. That is why we call updateOffset
	// a second time. In case it wants us to change the offset again
	// _changeInProgress == true case, then we have to adjust, because
	// there is no such time in the given timezone.
	function getSetOffset(input,keepLocalTime){var offset=this._offset || 0,localAdjust;if(input != null){if(typeof input === 'string'){input = offsetFromString(input);}if(Math.abs(input) < 16){input = input * 60;}if(!this._isUTC && keepLocalTime){localAdjust = getDateOffset(this);}this._offset = input;this._isUTC = true;if(localAdjust != null){this.add(localAdjust,'m');}if(offset !== input){if(!keepLocalTime || this._changeInProgress){add_subtract__addSubtract(this,create__createDuration(input - offset,'m'),1,false);}else if(!this._changeInProgress){this._changeInProgress = true;utils_hooks__hooks.updateOffset(this,true);this._changeInProgress = null;}}return this;}else {return this._isUTC?offset:getDateOffset(this);}}function getSetZone(input,keepLocalTime){if(input != null){if(typeof input !== 'string'){input = -input;}this.utcOffset(input,keepLocalTime);return this;}else {return -this.utcOffset();}}function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime);}function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC = false;if(keepLocalTime){this.subtract(getDateOffset(this),'m');}}return this;}function setOffsetToParsedOffset(){if(this._tzm){this.utcOffset(this._tzm);}else if(typeof this._i === 'string'){this.utcOffset(offsetFromString(this._i));}return this;}function hasAlignedHourOffset(input){input = input?local__createLocal(input).utcOffset():0;return (this.utcOffset() - input) % 60 === 0;}function isDaylightSavingTime(){return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();}function isDaylightSavingTimeShifted(){if(typeof this._isDSTShifted !== 'undefined'){return this._isDSTShifted;}var c={};copyConfig(c,this);c = prepareConfig(c);if(c._a){var other=c._isUTC?create_utc__createUTC(c._a):local__createLocal(c._a);this._isDSTShifted = this.isValid() && compareArrays(c._a,other.toArray()) > 0;}else {this._isDSTShifted = false;}return this._isDSTShifted;}function isLocal(){return !this._isUTC;}function isUtcOffset(){return this._isUTC;}function isUtc(){return this._isUTC && this._offset === 0;}var aspNetRegex=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	var create__isoRegex=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;function create__createDuration(input,key){var duration=input, // matching against regexp is expensive, do it on demand
	match=null,sign,ret,diffRes;if(isDuration(input)){duration = {ms:input._milliseconds,d:input._days,M:input._months};}else if(typeof input === 'number'){duration = {};if(key){duration[key] = input;}else {duration.milliseconds = input;}}else if(!!(match = aspNetRegex.exec(input))){sign = match[1] === '-'?-1:1;duration = {y:0,d:toInt(match[DATE]) * sign,h:toInt(match[HOUR]) * sign,m:toInt(match[MINUTE]) * sign,s:toInt(match[SECOND]) * sign,ms:toInt(match[MILLISECOND]) * sign};}else if(!!(match = create__isoRegex.exec(input))){sign = match[1] === '-'?-1:1;duration = {y:parseIso(match[2],sign),M:parseIso(match[3],sign),d:parseIso(match[4],sign),h:parseIso(match[5],sign),m:parseIso(match[6],sign),s:parseIso(match[7],sign),w:parseIso(match[8],sign)};}else if(duration == null){ // checks for null or undefined
	duration = {};}else if(typeof duration === 'object' && ('from' in duration || 'to' in duration)){diffRes = momentsDifference(local__createLocal(duration.from),local__createLocal(duration.to));duration = {};duration.ms = diffRes.milliseconds;duration.M = diffRes.months;}ret = new Duration(duration);if(isDuration(input) && hasOwnProp(input,'_locale')){ret._locale = input._locale;}return ret;}create__createDuration.fn = Duration.prototype;function parseIso(inp,sign){ // We'd normally use ~~inp for this, but unfortunately it also
	// converts floats to ints.
	// inp may be undefined, so careful calling replace on it.
	var res=inp && parseFloat(inp.replace(',','.')); // apply sign while we're at it
	return (isNaN(res)?0:res) * sign;}function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months = other.month() - base.month() + (other.year() - base.year()) * 12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months;}res.milliseconds = +other - +base.clone().add(res.months,'M');return res;}function momentsDifference(base,other){var res;other = cloneWithOffset(other,base);if(base.isBefore(other)){res = positiveMomentsDifference(base,other);}else {res = positiveMomentsDifference(other,base);res.milliseconds = -res.milliseconds;res.months = -res.months;}return res;}function createAdder(direction,name){return function(val,period){var dur,tmp; //invert the arguments, but complain about it
	if(period !== null && !isNaN(+period)){deprecateSimple(name,'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');tmp = val;val = period;period = tmp;}val = typeof val === 'string'?+val:val;dur = create__createDuration(val,period);add_subtract__addSubtract(this,dur,direction);return this;};}function add_subtract__addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=duration._days,months=duration._months;updateOffset = updateOffset == null?true:updateOffset;if(milliseconds){mom._d.setTime(+mom._d + milliseconds * isAdding);}if(days){get_set__set(mom,'Date',get_set__get(mom,'Date') + days * isAdding);}if(months){setMonth(mom,get_set__get(mom,'Month') + months * isAdding);}if(updateOffset){utils_hooks__hooks.updateOffset(mom,days || months);}}var add_subtract__add=createAdder(1,'add');var add_subtract__subtract=createAdder(-1,'subtract');function moment_calendar__calendar(time,formats){ // We want to compare the start of today, vs this.
	// Getting start-of-today depends on whether we're local/utc/offset or not.
	var now=time || local__createLocal(),sod=cloneWithOffset(now,this).startOf('day'),diff=this.diff(sod,'days',true),format=diff < -6?'sameElse':diff < -1?'lastWeek':diff < 0?'lastDay':diff < 1?'sameDay':diff < 2?'nextDay':diff < 7?'nextWeek':'sameElse';return this.format(formats && formats[format] || this.localeData().calendar(format,this,local__createLocal(now)));}function clone(){return new Moment(this);}function isAfter(input,units){var inputMs;units = normalizeUnits(typeof units !== 'undefined'?units:'millisecond');if(units === 'millisecond'){input = isMoment(input)?input:local__createLocal(input);return +this > +input;}else {inputMs = isMoment(input)?+input:+local__createLocal(input);return inputMs < +this.clone().startOf(units);}}function isBefore(input,units){var inputMs;units = normalizeUnits(typeof units !== 'undefined'?units:'millisecond');if(units === 'millisecond'){input = isMoment(input)?input:local__createLocal(input);return +this < +input;}else {inputMs = isMoment(input)?+input:+local__createLocal(input);return +this.clone().endOf(units) < inputMs;}}function isBetween(from,to,units){return this.isAfter(from,units) && this.isBefore(to,units);}function isSame(input,units){var inputMs;units = normalizeUnits(units || 'millisecond');if(units === 'millisecond'){input = isMoment(input)?input:local__createLocal(input);return +this === +input;}else {inputMs = +local__createLocal(input);return +this.clone().startOf(units) <= inputMs && inputMs <= +this.clone().endOf(units);}}function diff(input,units,asFloat){var that=cloneWithOffset(input,this),zoneDelta=(that.utcOffset() - this.utcOffset()) * 6e4,delta,output;units = normalizeUnits(units);if(units === 'year' || units === 'month' || units === 'quarter'){output = monthDiff(this,that);if(units === 'quarter'){output = output / 3;}else if(units === 'year'){output = output / 12;}}else {delta = this - that;output = units === 'second'?delta / 1e3: // 1000
	units === 'minute'?delta / 6e4: // 1000 * 60
	units === 'hour'?delta / 36e5: // 1000 * 60 * 60
	units === 'day'?(delta - zoneDelta) / 864e5: // 1000 * 60 * 60 * 24, negate dst
	units === 'week'?(delta - zoneDelta) / 6048e5: // 1000 * 60 * 60 * 24 * 7, negate dst
	delta;}return asFloat?output:absFloor(output);}function monthDiff(a,b){ // difference in months
	var wholeMonthDiff=(b.year() - a.year()) * 12 + (b.month() - a.month()), // b is in (anchor - 1 month, anchor + 1 month)
	anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;if(b - anchor < 0){anchor2 = a.clone().add(wholeMonthDiff - 1,'months'); // linear across the month
	adjust = (b - anchor) / (anchor - anchor2);}else {anchor2 = a.clone().add(wholeMonthDiff + 1,'months'); // linear across the month
	adjust = (b - anchor) / (anchor2 - anchor);}return -(wholeMonthDiff + adjust);}utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';function toString(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');}function moment_format__toISOString(){var m=this.clone().utc();if(0 < m.year() && m.year() <= 9999){if('function' === typeof Date.prototype.toISOString){ // native implementation is ~50x faster, use it when we can
	return this.toDate().toISOString();}else {return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}else {return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}function format(inputString){var output=formatMoment(this,inputString || utils_hooks__hooks.defaultFormat);return this.localeData().postformat(output);}function from(time,withoutSuffix){if(!this.isValid()){return this.localeData().invalidDate();}return create__createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);}function fromNow(withoutSuffix){return this.from(local__createLocal(),withoutSuffix);}function to(time,withoutSuffix){if(!this.isValid()){return this.localeData().invalidDate();}return create__createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix);}function toNow(withoutSuffix){return this.to(local__createLocal(),withoutSuffix);}function locale(key){var newLocaleData;if(key === undefined){return this._locale._abbr;}else {newLocaleData = locale_locales__getLocale(key);if(newLocaleData != null){this._locale = newLocaleData;}return this;}}var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key === undefined){return this.localeData();}else {return this.locale(key);}});function localeData(){return this._locale;}function startOf(units){units = normalizeUnits(units); // the following switch intentionally omits break keywords
	// to utilize falling through the cases.
	switch(units){case 'year':this.month(0); /* falls through */case 'quarter':case 'month':this.date(1); /* falls through */case 'week':case 'isoWeek':case 'day':this.hours(0); /* falls through */case 'hour':this.minutes(0); /* falls through */case 'minute':this.seconds(0); /* falls through */case 'second':this.milliseconds(0);} // weeks are a special case
	if(units === 'week'){this.weekday(0);}if(units === 'isoWeek'){this.isoWeekday(1);} // quarters are also special
	if(units === 'quarter'){this.month(Math.floor(this.month() / 3) * 3);}return this;}function endOf(units){units = normalizeUnits(units);if(units === undefined || units === 'millisecond'){return this;}return this.startOf(units).add(1,units === 'isoWeek'?'week':units).subtract(1,'ms');}function to_type__valueOf(){return +this._d - (this._offset || 0) * 60000;}function unix(){return Math.floor(+this / 1000);}function toDate(){return this._offset?new Date(+this):this._d;}function toArray(){var m=this;return [m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];}function toObject(){var m=this;return {years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()};}function moment_valid__isValid(){return valid__isValid(this);}function parsingFlags(){return extend({},getParsingFlags(this));}function invalidAt(){return getParsingFlags(this).overflow;}addFormatToken(0,['gg',2],0,function(){return this.weekYear() % 100;});addFormatToken(0,['GG',2],0,function(){return this.isoWeekYear() % 100;});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter);}addWeekYearFormatToken('gggg','weekYear');addWeekYearFormatToken('ggggg','weekYear');addWeekYearFormatToken('GGGG','isoWeekYear');addWeekYearFormatToken('GGGGG','isoWeekYear'); // ALIASES
	addUnitAlias('weekYear','gg');addUnitAlias('isoWeekYear','GG'); // PARSING
	addRegexToken('G',matchSigned);addRegexToken('g',matchSigned);addRegexToken('GG',match1to2,match2);addRegexToken('gg',match1to2,match2);addRegexToken('GGGG',match1to4,match4);addRegexToken('gggg',match1to4,match4);addRegexToken('GGGGG',match1to6,match6);addRegexToken('ggggg',match1to6,match6);addWeekParseToken(['gggg','ggggg','GGGG','GGGGG'],function(input,week,config,token){week[token.substr(0,2)] = toInt(input);});addWeekParseToken(['gg','GG'],function(input,week,config,token){week[token] = utils_hooks__hooks.parseTwoDigitYear(input);}); // HELPERS
	function weeksInYear(year,dow,doy){return weekOfYear(local__createLocal([year,11,31 + dow - doy]),dow,doy).week;} // MOMENTS
	function getSetWeekYear(input){var year=weekOfYear(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return input == null?year:this.add(input - year,'y');}function getSetISOWeekYear(input){var year=weekOfYear(this,1,4).year;return input == null?year:this.add(input - year,'y');}function getISOWeeksInYear(){return weeksInYear(this.year(),1,4);}function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);}addFormatToken('Q',0,0,'quarter'); // ALIASES
	addUnitAlias('quarter','Q'); // PARSING
	addRegexToken('Q',match1);addParseToken('Q',function(input,array){array[MONTH] = (toInt(input) - 1) * 3;}); // MOMENTS
	function getSetQuarter(input){return input == null?Math.ceil((this.month() + 1) / 3):this.month((input - 1) * 3 + this.month() % 3);}addFormatToken('D',['DD',2],'Do','date'); // ALIASES
	addUnitAlias('date','D'); // PARSING
	addRegexToken('D',match1to2);addRegexToken('DD',match1to2,match2);addRegexToken('Do',function(isStrict,locale){return isStrict?locale._ordinalParse:locale._ordinalParseLenient;});addParseToken(['D','DD'],DATE);addParseToken('Do',function(input,array){array[DATE] = toInt(input.match(match1to2)[0],10);}); // MOMENTS
	var getSetDayOfMonth=makeGetSet('Date',true);addFormatToken('d',0,'do','day');addFormatToken('dd',0,0,function(format){return this.localeData().weekdaysMin(this,format);});addFormatToken('ddd',0,0,function(format){return this.localeData().weekdaysShort(this,format);});addFormatToken('dddd',0,0,function(format){return this.localeData().weekdays(this,format);});addFormatToken('e',0,0,'weekday');addFormatToken('E',0,0,'isoWeekday'); // ALIASES
	addUnitAlias('day','d');addUnitAlias('weekday','e');addUnitAlias('isoWeekday','E'); // PARSING
	addRegexToken('d',match1to2);addRegexToken('e',match1to2);addRegexToken('E',match1to2);addRegexToken('dd',matchWord);addRegexToken('ddd',matchWord);addRegexToken('dddd',matchWord);addWeekParseToken(['dd','ddd','dddd'],function(input,week,config){var weekday=config._locale.weekdaysParse(input); // if we didn't get a weekday name, mark the date as invalid
	if(weekday != null){week.d = weekday;}else {getParsingFlags(config).invalidWeekday = input;}});addWeekParseToken(['d','e','E'],function(input,week,config,token){week[token] = toInt(input);}); // HELPERS
	function parseWeekday(input,locale){if(typeof input !== 'string'){return input;}if(!isNaN(input)){return parseInt(input,10);}input = locale.weekdaysParse(input);if(typeof input === 'number'){return input;}return null;} // LOCALES
	var defaultLocaleWeekdays='Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');function localeWeekdays(m){return this._weekdays[m.day()];}var defaultLocaleWeekdaysShort='Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');function localeWeekdaysShort(m){return this._weekdaysShort[m.day()];}var defaultLocaleWeekdaysMin='Su_Mo_Tu_We_Th_Fr_Sa'.split('_');function localeWeekdaysMin(m){return this._weekdaysMin[m.day()];}function localeWeekdaysParse(weekdayName){var i,mom,regex;this._weekdaysParse = this._weekdaysParse || [];for(i = 0;i < 7;i++) { // make the regex if we don't have it already
	if(!this._weekdaysParse[i]){mom = local__createLocal([2000,1]).day(i);regex = '^' + this.weekdays(mom,'') + '|^' + this.weekdaysShort(mom,'') + '|^' + this.weekdaysMin(mom,'');this._weekdaysParse[i] = new RegExp(regex.replace('.',''),'i');} // test the regex
	if(this._weekdaysParse[i].test(weekdayName)){return i;}}} // MOMENTS
	function getSetDayOfWeek(input){var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input != null){input = parseWeekday(input,this.localeData());return this.add(input - day,'d');}else {return day;}}function getSetLocaleDayOfWeek(input){var weekday=(this.day() + 7 - this.localeData()._week.dow) % 7;return input == null?weekday:this.add(input - weekday,'d');}function getSetISODayOfWeek(input){ // behaves the same as moment#day except
	// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	// as a setter, sunday should belong to the previous week.
	return input == null?this.day() || 7:this.day(this.day() % 7?input:input - 7);}addFormatToken('H',['HH',2],0,'hour');addFormatToken('h',['hh',2],0,function(){return this.hours() % 12 || 12;});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase);});}meridiem('a',true);meridiem('A',false); // ALIASES
	addUnitAlias('hour','h'); // PARSING
	function matchMeridiem(isStrict,locale){return locale._meridiemParse;}addRegexToken('a',matchMeridiem);addRegexToken('A',matchMeridiem);addRegexToken('H',match1to2);addRegexToken('h',match1to2);addRegexToken('HH',match1to2,match2);addRegexToken('hh',match1to2,match2);addParseToken(['H','HH'],HOUR);addParseToken(['a','A'],function(input,array,config){config._isPm = config._locale.isPM(input);config._meridiem = input;});addParseToken(['h','hh'],function(input,array,config){array[HOUR] = toInt(input);getParsingFlags(config).bigHour = true;}); // LOCALES
	function localeIsPM(input){ // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	// Using charAt should be more compatible.
	return (input + '').toLowerCase().charAt(0) === 'p';}var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem(hours,minutes,isLower){if(hours > 11){return isLower?'pm':'PM';}else {return isLower?'am':'AM';}} // MOMENTS
	// Setting the hour should keep the time, because the user explicitly
	// specified which hour he wants. So trying to maintain the same hour (in
	// a new timezone) makes sense. Adding/subtracting hours does not follow
	// this rule.
	var getSetHour=makeGetSet('Hours',true);addFormatToken('m',['mm',2],0,'minute'); // ALIASES
	addUnitAlias('minute','m'); // PARSING
	addRegexToken('m',match1to2);addRegexToken('mm',match1to2,match2);addParseToken(['m','mm'],MINUTE); // MOMENTS
	var getSetMinute=makeGetSet('Minutes',false);addFormatToken('s',['ss',2],0,'second'); // ALIASES
	addUnitAlias('second','s'); // PARSING
	addRegexToken('s',match1to2);addRegexToken('ss',match1to2,match2);addParseToken(['s','ss'],SECOND); // MOMENTS
	var getSetSecond=makeGetSet('Seconds',false);addFormatToken('S',0,0,function(){return ~ ~(this.millisecond() / 100);});addFormatToken(0,['SS',2],0,function(){return ~ ~(this.millisecond() / 10);});addFormatToken(0,['SSS',3],0,'millisecond');addFormatToken(0,['SSSS',4],0,function(){return this.millisecond() * 10;});addFormatToken(0,['SSSSS',5],0,function(){return this.millisecond() * 100;});addFormatToken(0,['SSSSSS',6],0,function(){return this.millisecond() * 1000;});addFormatToken(0,['SSSSSSS',7],0,function(){return this.millisecond() * 10000;});addFormatToken(0,['SSSSSSSS',8],0,function(){return this.millisecond() * 100000;});addFormatToken(0,['SSSSSSSSS',9],0,function(){return this.millisecond() * 1000000;}); // ALIASES
	addUnitAlias('millisecond','ms'); // PARSING
	addRegexToken('S',match1to3,match1);addRegexToken('SS',match1to3,match2);addRegexToken('SSS',match1to3,match3);var token;for(token = 'SSSS';token.length <= 9;token += 'S') {addRegexToken(token,matchUnsigned);}function parseMs(input,array){array[MILLISECOND] = toInt(('0.' + input) * 1000);}for(token = 'S';token.length <= 9;token += 'S') {addParseToken(token,parseMs);} // MOMENTS
	var getSetMillisecond=makeGetSet('Milliseconds',false);addFormatToken('z',0,0,'zoneAbbr');addFormatToken('zz',0,0,'zoneName'); // MOMENTS
	function getZoneAbbr(){return this._isUTC?'UTC':'';}function getZoneName(){return this._isUTC?'Coordinated Universal Time':'';}var momentPrototype__proto=Moment.prototype;momentPrototype__proto.add = add_subtract__add;momentPrototype__proto.calendar = moment_calendar__calendar;momentPrototype__proto.clone = clone;momentPrototype__proto.diff = diff;momentPrototype__proto.endOf = endOf;momentPrototype__proto.format = format;momentPrototype__proto.from = from;momentPrototype__proto.fromNow = fromNow;momentPrototype__proto.to = to;momentPrototype__proto.toNow = toNow;momentPrototype__proto.get = getSet;momentPrototype__proto.invalidAt = invalidAt;momentPrototype__proto.isAfter = isAfter;momentPrototype__proto.isBefore = isBefore;momentPrototype__proto.isBetween = isBetween;momentPrototype__proto.isSame = isSame;momentPrototype__proto.isValid = moment_valid__isValid;momentPrototype__proto.lang = lang;momentPrototype__proto.locale = locale;momentPrototype__proto.localeData = localeData;momentPrototype__proto.max = prototypeMax;momentPrototype__proto.min = prototypeMin;momentPrototype__proto.parsingFlags = parsingFlags;momentPrototype__proto.set = getSet;momentPrototype__proto.startOf = startOf;momentPrototype__proto.subtract = add_subtract__subtract;momentPrototype__proto.toArray = toArray;momentPrototype__proto.toObject = toObject;momentPrototype__proto.toDate = toDate;momentPrototype__proto.toISOString = moment_format__toISOString;momentPrototype__proto.toJSON = moment_format__toISOString;momentPrototype__proto.toString = toString;momentPrototype__proto.unix = unix;momentPrototype__proto.valueOf = to_type__valueOf; // Year
	momentPrototype__proto.year = getSetYear;momentPrototype__proto.isLeapYear = getIsLeapYear; // Week Year
	momentPrototype__proto.weekYear = getSetWeekYear;momentPrototype__proto.isoWeekYear = getSetISOWeekYear; // Quarter
	momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter; // Month
	momentPrototype__proto.month = getSetMonth;momentPrototype__proto.daysInMonth = getDaysInMonth; // Week
	momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;momentPrototype__proto.weeksInYear = getWeeksInYear;momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear; // Day
	momentPrototype__proto.date = getSetDayOfMonth;momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;momentPrototype__proto.weekday = getSetLocaleDayOfWeek;momentPrototype__proto.isoWeekday = getSetISODayOfWeek;momentPrototype__proto.dayOfYear = getSetDayOfYear; // Hour
	momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour; // Minute
	momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute; // Second
	momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond; // Millisecond
	momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond; // Offset
	momentPrototype__proto.utcOffset = getSetOffset;momentPrototype__proto.utc = setOffsetToUTC;momentPrototype__proto.local = setOffsetToLocal;momentPrototype__proto.parseZone = setOffsetToParsedOffset;momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;momentPrototype__proto.isDST = isDaylightSavingTime;momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;momentPrototype__proto.isLocal = isLocal;momentPrototype__proto.isUtcOffset = isUtcOffset;momentPrototype__proto.isUtc = isUtc;momentPrototype__proto.isUTC = isUtc; // Timezone
	momentPrototype__proto.zoneAbbr = getZoneAbbr;momentPrototype__proto.zoneName = getZoneName; // Deprecations
	momentPrototype__proto.dates = deprecate('dates accessor is deprecated. Use date instead.',getSetDayOfMonth);momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead',getSetMonth);momentPrototype__proto.years = deprecate('years accessor is deprecated. Use year instead',getSetYear);momentPrototype__proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779',getSetZone);var momentPrototype=momentPrototype__proto;function moment__createUnix(input){return local__createLocal(input * 1000);}function moment__createInZone(){return local__createLocal.apply(null,arguments).parseZone();}var defaultCalendar={sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'};function locale_calendar__calendar(key,mom,now){var output=this._calendar[key];return typeof output === 'function'?output.call(mom,now):output;}var defaultLongDateFormat={LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY h:mm A',LLLL:'dddd, MMMM D, YYYY h:mm A'};function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format || !formatUpper){return format;}this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1);});return this._longDateFormat[key];}var defaultInvalidDate='Invalid date';function invalidDate(){return this._invalidDate;}var defaultOrdinal='%d';var defaultOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace('%d',number);}function preParsePostFormat(string){return string;}var defaultRelativeTime={future:'in %s',past:'%s ago',s:'a few seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'};function relative__relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return typeof output === 'function'?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);}function pastFuture(diff,output){var format=this._relativeTime[diff > 0?'future':'past'];return typeof format === 'function'?format(output):format.replace(/%s/i,output);}function locale_set__set(config){var prop,i;for(i in config) {prop = config[i];if(typeof prop === 'function'){this[i] = prop;}else {this['_' + i] = prop;}} // Lenient ordinal parsing accepts just a number in addition to
	// number + (possibly) stuff coming from _ordinalParseLenient.
	this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);}var prototype__proto=Locale.prototype;prototype__proto._calendar = defaultCalendar;prototype__proto.calendar = locale_calendar__calendar;prototype__proto._longDateFormat = defaultLongDateFormat;prototype__proto.longDateFormat = longDateFormat;prototype__proto._invalidDate = defaultInvalidDate;prototype__proto.invalidDate = invalidDate;prototype__proto._ordinal = defaultOrdinal;prototype__proto.ordinal = ordinal;prototype__proto._ordinalParse = defaultOrdinalParse;prototype__proto.preparse = preParsePostFormat;prototype__proto.postformat = preParsePostFormat;prototype__proto._relativeTime = defaultRelativeTime;prototype__proto.relativeTime = relative__relativeTime;prototype__proto.pastFuture = pastFuture;prototype__proto.set = locale_set__set; // Month
	prototype__proto.months = localeMonths;prototype__proto._months = defaultLocaleMonths;prototype__proto.monthsShort = localeMonthsShort;prototype__proto._monthsShort = defaultLocaleMonthsShort;prototype__proto.monthsParse = localeMonthsParse; // Week
	prototype__proto.week = localeWeek;prototype__proto._week = defaultLocaleWeek;prototype__proto.firstDayOfYear = localeFirstDayOfYear;prototype__proto.firstDayOfWeek = localeFirstDayOfWeek; // Day of Week
	prototype__proto.weekdays = localeWeekdays;prototype__proto._weekdays = defaultLocaleWeekdays;prototype__proto.weekdaysMin = localeWeekdaysMin;prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;prototype__proto.weekdaysShort = localeWeekdaysShort;prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;prototype__proto.weekdaysParse = localeWeekdaysParse; // Hours
	prototype__proto.isPM = localeIsPM;prototype__proto._meridiemParse = defaultLocaleMeridiemParse;prototype__proto.meridiem = localeMeridiem;function lists__get(format,index,field,setter){var locale=locale_locales__getLocale();var utc=create_utc__createUTC().set(setter,index);return locale[field](utc,format);}function list(format,index,field,count,setter){if(typeof format === 'number'){index = format;format = undefined;}format = format || '';if(index != null){return lists__get(format,index,field,setter);}var i;var out=[];for(i = 0;i < count;i++) {out[i] = lists__get(format,i,field,setter);}return out;}function lists__listMonths(format,index){return list(format,index,'months',12,'month');}function lists__listMonthsShort(format,index){return list(format,index,'monthsShort',12,'month');}function lists__listWeekdays(format,index){return list(format,index,'weekdays',7,'day');}function lists__listWeekdaysShort(format,index){return list(format,index,'weekdaysShort',7,'day');}function lists__listWeekdaysMin(format,index){return list(format,index,'weekdaysMin',7,'day');}locale_locales__getSetGlobalLocale('en',{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function ordinal(number){var b=number % 10,output=toInt(number % 100 / 10) === 1?'th':b === 1?'st':b === 2?'nd':b === 3?'rd':'th';return number + output;}}); // Side effect imports
	utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.',locale_locales__getSetGlobalLocale);utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.',locale_locales__getLocale);var mathAbs=Math.abs;function duration_abs__abs(){var data=this._data;this._milliseconds = mathAbs(this._milliseconds);this._days = mathAbs(this._days);this._months = mathAbs(this._months);data.milliseconds = mathAbs(data.milliseconds);data.seconds = mathAbs(data.seconds);data.minutes = mathAbs(data.minutes);data.hours = mathAbs(data.hours);data.months = mathAbs(data.months);data.years = mathAbs(data.years);return this;}function duration_add_subtract__addSubtract(duration,input,value,direction){var other=create__createDuration(input,value);duration._milliseconds += direction * other._milliseconds;duration._days += direction * other._days;duration._months += direction * other._months;return duration._bubble();} // supports only 2.0-style add(1, 's') or add(duration)
	function duration_add_subtract__add(input,value){return duration_add_subtract__addSubtract(this,input,value,1);} // supports only 2.0-style subtract(1, 's') or subtract(duration)
	function duration_add_subtract__subtract(input,value){return duration_add_subtract__addSubtract(this,input,value,-1);}function absCeil(number){if(number < 0){return Math.floor(number);}else {return Math.ceil(number);}}function bubble(){var milliseconds=this._milliseconds;var days=this._days;var months=this._months;var data=this._data;var seconds,minutes,hours,years,monthsFromDays; // if we have a mix of positive and negative values, bubble down first
	// check: https://github.com/moment/moment/issues/2166
	if(!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)){milliseconds += absCeil(monthsToDays(months) + days) * 864e5;days = 0;months = 0;} // The following code bubbles up values, see the tests for
	// examples of what that means.
	data.milliseconds = milliseconds % 1000;seconds = absFloor(milliseconds / 1000);data.seconds = seconds % 60;minutes = absFloor(seconds / 60);data.minutes = minutes % 60;hours = absFloor(minutes / 60);data.hours = hours % 24;days += absFloor(hours / 24); // convert days to months
	monthsFromDays = absFloor(daysToMonths(days));months += monthsFromDays;days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year
	years = absFloor(months / 12);months %= 12;data.days = days;data.months = months;data.years = years;return this;}function daysToMonths(days){ // 400 years have 146097 days (taking into account leap year rules)
	// 400 years have 12 months === 4800
	return days * 4800 / 146097;}function monthsToDays(months){ // the reverse of daysToMonths
	return months * 146097 / 4800;}function as(units){var days;var months;var milliseconds=this._milliseconds;units = normalizeUnits(units);if(units === 'month' || units === 'year'){days = this._days + milliseconds / 864e5;months = this._months + daysToMonths(days);return units === 'month'?months:months / 12;}else { // handle milliseconds separately because of floating point math errors (issue #1867)
	days = this._days + Math.round(monthsToDays(this._months));switch(units){case 'week':return days / 7 + milliseconds / 6048e5;case 'day':return days + milliseconds / 864e5;case 'hour':return days * 24 + milliseconds / 36e5;case 'minute':return days * 1440 + milliseconds / 6e4;case 'second':return days * 86400 + milliseconds / 1000; // Math.floor prevents floating point math errors here
	case 'millisecond':return Math.floor(days * 864e5) + milliseconds;default:throw new Error('Unknown unit ' + units);}}} // TODO: Use this.as('ms')?
	function duration_as__valueOf(){return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;}function makeAs(alias){return function(){return this.as(alias);};}var asMilliseconds=makeAs('ms');var asSeconds=makeAs('s');var asMinutes=makeAs('m');var asHours=makeAs('h');var asDays=makeAs('d');var asWeeks=makeAs('w');var asMonths=makeAs('M');var asYears=makeAs('y');function duration_get__get(units){units = normalizeUnits(units);return this[units + 's']();}function makeGetter(name){return function(){return this._data[name];};}var milliseconds=makeGetter('milliseconds');var seconds=makeGetter('seconds');var minutes=makeGetter('minutes');var hours=makeGetter('hours');var days=makeGetter('days');var months=makeGetter('months');var years=makeGetter('years');function weeks(){return absFloor(this.days() / 7);}var round=Math.round;var thresholds={s:45, // seconds to minute
	m:45, // minutes to hour
	h:22, // hours to day
	d:26, // days to month
	M:11 // months to year
	}; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number || 1,!!withoutSuffix,string,isFuture);}function duration_humanize__relativeTime(posNegDuration,withoutSuffix,locale){var duration=create__createDuration(posNegDuration).abs();var seconds=round(duration.as('s'));var minutes=round(duration.as('m'));var hours=round(duration.as('h'));var days=round(duration.as('d'));var months=round(duration.as('M'));var years=round(duration.as('y'));var a=seconds < thresholds.s && ['s',seconds] || minutes === 1 && ['m'] || minutes < thresholds.m && ['mm',minutes] || hours === 1 && ['h'] || hours < thresholds.h && ['hh',hours] || days === 1 && ['d'] || days < thresholds.d && ['dd',days] || months === 1 && ['M'] || months < thresholds.M && ['MM',months] || years === 1 && ['y'] || ['yy',years];a[2] = withoutSuffix;a[3] = +posNegDuration > 0;a[4] = locale;return substituteTimeAgo.apply(null,a);} // This function allows you to set a threshold for relative time strings
	function duration_humanize__getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold] === undefined){return false;}if(limit === undefined){return thresholds[threshold];}thresholds[threshold] = limit;return true;}function humanize(withSuffix){var locale=this.localeData();var output=duration_humanize__relativeTime(this,!withSuffix,locale);if(withSuffix){output = locale.pastFuture(+this,output);}return locale.postformat(output);}var iso_string__abs=Math.abs;function iso_string__toISOString(){ // for ISO strings we do not use the normal bubbling rules:
	//  * milliseconds bubble up until they become hours
	//  * days do not bubble at all
	//  * months bubble up until they become years
	// This is because there is no context-free conversion between hours and days
	// (think of clock changes)
	// and also not between days and months (28-31 days per month)
	var seconds=iso_string__abs(this._milliseconds) / 1000;var days=iso_string__abs(this._days);var months=iso_string__abs(this._months);var minutes,hours,years; // 3600 seconds -> 60 minutes -> 1 hour
	minutes = absFloor(seconds / 60);hours = absFloor(minutes / 60);seconds %= 60;minutes %= 60; // 12 months -> 1 year
	years = absFloor(months / 12);months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	var Y=years;var M=months;var D=days;var h=hours;var m=minutes;var s=seconds;var total=this.asSeconds();if(!total){ // this is the same as C#'s (Noda) and python (isodate)...
	// but not other JS (goog.date)
	return 'P0D';}return (total < 0?'-':'') + 'P' + (Y?Y + 'Y':'') + (M?M + 'M':'') + (D?D + 'D':'') + (h || m || s?'T':'') + (h?h + 'H':'') + (m?m + 'M':'') + (s?s + 'S':'');}var duration_prototype__proto=Duration.prototype;duration_prototype__proto.abs = duration_abs__abs;duration_prototype__proto.add = duration_add_subtract__add;duration_prototype__proto.subtract = duration_add_subtract__subtract;duration_prototype__proto.as = as;duration_prototype__proto.asMilliseconds = asMilliseconds;duration_prototype__proto.asSeconds = asSeconds;duration_prototype__proto.asMinutes = asMinutes;duration_prototype__proto.asHours = asHours;duration_prototype__proto.asDays = asDays;duration_prototype__proto.asWeeks = asWeeks;duration_prototype__proto.asMonths = asMonths;duration_prototype__proto.asYears = asYears;duration_prototype__proto.valueOf = duration_as__valueOf;duration_prototype__proto._bubble = bubble;duration_prototype__proto.get = duration_get__get;duration_prototype__proto.milliseconds = milliseconds;duration_prototype__proto.seconds = seconds;duration_prototype__proto.minutes = minutes;duration_prototype__proto.hours = hours;duration_prototype__proto.days = days;duration_prototype__proto.weeks = weeks;duration_prototype__proto.months = months;duration_prototype__proto.years = years;duration_prototype__proto.humanize = humanize;duration_prototype__proto.toISOString = iso_string__toISOString;duration_prototype__proto.toString = iso_string__toISOString;duration_prototype__proto.toJSON = iso_string__toISOString;duration_prototype__proto.locale = locale;duration_prototype__proto.localeData = localeData; // Deprecations
	duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',iso_string__toISOString);duration_prototype__proto.lang = lang; // Side effect imports
	addFormatToken('X',0,0,'unix');addFormatToken('x',0,0,'valueOf'); // PARSING
	addRegexToken('x',matchSigned);addRegexToken('X',matchTimestamp);addParseToken('X',function(input,array,config){config._d = new Date(parseFloat(input,10) * 1000);});addParseToken('x',function(input,array,config){config._d = new Date(toInt(input));}); // Side effect imports
	utils_hooks__hooks.version = '2.10.6';setHookCallback(local__createLocal);utils_hooks__hooks.fn = momentPrototype;utils_hooks__hooks.min = min;utils_hooks__hooks.max = max;utils_hooks__hooks.utc = create_utc__createUTC;utils_hooks__hooks.unix = moment__createUnix;utils_hooks__hooks.months = lists__listMonths;utils_hooks__hooks.isDate = isDate;utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;utils_hooks__hooks.invalid = valid__createInvalid;utils_hooks__hooks.duration = create__createDuration;utils_hooks__hooks.isMoment = isMoment;utils_hooks__hooks.weekdays = lists__listWeekdays;utils_hooks__hooks.parseZone = moment__createInZone;utils_hooks__hooks.localeData = locale_locales__getLocale;utils_hooks__hooks.isDuration = isDuration;utils_hooks__hooks.monthsShort = lists__listMonthsShort;utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;utils_hooks__hooks.defineLocale = defineLocale;utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;utils_hooks__hooks.normalizeUnits = normalizeUnits;utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;var _moment=utils_hooks__hooks;return _moment;}); //! momentjs.com
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82)(module)))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 113,
		"./af.js": 113,
		"./ar": 114,
		"./ar-ma": 115,
		"./ar-ma.js": 115,
		"./ar-sa": 116,
		"./ar-sa.js": 116,
		"./ar-tn": 117,
		"./ar-tn.js": 117,
		"./ar.js": 114,
		"./az": 118,
		"./az.js": 118,
		"./be": 119,
		"./be.js": 119,
		"./bg": 120,
		"./bg.js": 120,
		"./bn": 121,
		"./bn.js": 121,
		"./bo": 122,
		"./bo.js": 122,
		"./br": 123,
		"./br.js": 123,
		"./bs": 124,
		"./bs.js": 124,
		"./ca": 125,
		"./ca.js": 125,
		"./cs": 126,
		"./cs.js": 126,
		"./cv": 127,
		"./cv.js": 127,
		"./cy": 128,
		"./cy.js": 128,
		"./da": 129,
		"./da.js": 129,
		"./de": 130,
		"./de-at": 131,
		"./de-at.js": 131,
		"./de.js": 130,
		"./el": 132,
		"./el.js": 132,
		"./en-au": 133,
		"./en-au.js": 133,
		"./en-ca": 134,
		"./en-ca.js": 134,
		"./en-gb": 135,
		"./en-gb.js": 135,
		"./eo": 136,
		"./eo.js": 136,
		"./es": 137,
		"./es.js": 137,
		"./et": 138,
		"./et.js": 138,
		"./eu": 139,
		"./eu.js": 139,
		"./fa": 140,
		"./fa.js": 140,
		"./fi": 141,
		"./fi.js": 141,
		"./fo": 142,
		"./fo.js": 142,
		"./fr": 143,
		"./fr-ca": 144,
		"./fr-ca.js": 144,
		"./fr.js": 143,
		"./fy": 145,
		"./fy.js": 145,
		"./gl": 146,
		"./gl.js": 146,
		"./he": 147,
		"./he.js": 147,
		"./hi": 148,
		"./hi.js": 148,
		"./hr": 149,
		"./hr.js": 149,
		"./hu": 150,
		"./hu.js": 150,
		"./hy-am": 151,
		"./hy-am.js": 151,
		"./id": 152,
		"./id.js": 152,
		"./is": 153,
		"./is.js": 153,
		"./it": 154,
		"./it.js": 154,
		"./ja": 155,
		"./ja.js": 155,
		"./jv": 156,
		"./jv.js": 156,
		"./ka": 157,
		"./ka.js": 157,
		"./km": 158,
		"./km.js": 158,
		"./ko": 159,
		"./ko.js": 159,
		"./lb": 160,
		"./lb.js": 160,
		"./lt": 161,
		"./lt.js": 161,
		"./lv": 162,
		"./lv.js": 162,
		"./me": 163,
		"./me.js": 163,
		"./mk": 164,
		"./mk.js": 164,
		"./ml": 165,
		"./ml.js": 165,
		"./mr": 166,
		"./mr.js": 166,
		"./ms": 167,
		"./ms-my": 168,
		"./ms-my.js": 168,
		"./ms.js": 167,
		"./my": 169,
		"./my.js": 169,
		"./nb": 170,
		"./nb.js": 170,
		"./ne": 171,
		"./ne.js": 171,
		"./nl": 172,
		"./nl.js": 172,
		"./nn": 173,
		"./nn.js": 173,
		"./pl": 174,
		"./pl.js": 174,
		"./pt": 175,
		"./pt-br": 176,
		"./pt-br.js": 176,
		"./pt.js": 175,
		"./ro": 177,
		"./ro.js": 177,
		"./ru": 178,
		"./ru.js": 178,
		"./si": 179,
		"./si.js": 179,
		"./sk": 180,
		"./sk.js": 180,
		"./sl": 181,
		"./sl.js": 181,
		"./sq": 182,
		"./sq.js": 182,
		"./sr": 183,
		"./sr-cyrl": 184,
		"./sr-cyrl.js": 184,
		"./sr.js": 183,
		"./sv": 185,
		"./sv.js": 185,
		"./ta": 186,
		"./ta.js": 186,
		"./th": 187,
		"./th.js": 187,
		"./tl-ph": 188,
		"./tl-ph.js": 188,
		"./tr": 189,
		"./tr.js": 189,
		"./tzl": 190,
		"./tzl.js": 190,
		"./tzm": 191,
		"./tzm-latn": 192,
		"./tzm-latn.js": 192,
		"./tzm.js": 191,
		"./uk": 193,
		"./uk.js": 193,
		"./uz": 194,
		"./uz.js": 194,
		"./vi": 195,
		"./vi.js": 195,
		"./zh-cn": 196,
		"./zh-cn.js": 196,
		"./zh-tw": 197,
		"./zh-tw.js": 197
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 112;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : afrikaans (af)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var af = moment.defineLocale('af', {
	        months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
	        weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
	        weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
	        weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
	        meridiemParse: /vm|nm/i,
	        isPM: function isPM(input) {
	            return (/^nm$/i.test(input)
	            );
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'vm' : 'VM';
	            } else {
	                return isLower ? 'nm' : 'NM';
	            }
	        },
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Vandag om] LT',
	            nextDay: '[Môre om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[Gister om] LT',
	            lastWeek: '[Laas] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'oor %s',
	            past: '%s gelede',
	            s: '\'n paar sekondes',
	            m: '\'n minuut',
	            mm: '%d minute',
	            h: '\'n uur',
	            hh: '%d ure',
	            d: '\'n dag',
	            dd: '%d dae',
	            M: '\'n maand',
	            MM: '%d maande',
	            y: '\'n jaar',
	            yy: '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
	        },
	        week: {
	            dow: 1, // Maandag is die eerste dag van die week.
	            doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
	        }
	    });

	    return af;
	});
	//! author : Werner Mollentze : https://github.com/wernerm

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! Locale: Arabic (ar)
	//! Author: Abdel Said: https://github.com/abdelsaid
	//! Changes in months, weekdays: Ahmed Elkhatib
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    },
	        numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    },
	        pluralForm = function pluralForm(n) {
	        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	    },
	        plurals = {
	        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	    },
	        pluralize = function pluralize(u) {
	        return function (number, withoutSuffix, string, isFuture) {
	            var f = pluralForm(number),
	                str = plurals[u][pluralForm(number)];
	            if (f === 2) {
	                str = str[withoutSuffix ? 0 : 1];
	            }
	            return str.replace(/%d/i, number);
	        };
	    },
	        months = ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر'];

	    var ar = moment.defineLocale('ar', {
	        months: months,
	        monthsShort: months,
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'D/‏M/‏YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM: function isPM(input) {
	            return 'م' === input;
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar: {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'بعد %s',
	            past: 'منذ %s',
	            s: pluralize('s'),
	            m: pluralize('m'),
	            mm: pluralize('m'),
	            h: pluralize('h'),
	            hh: pluralize('h'),
	            d: pluralize('d'),
	            dd: pluralize('d'),
	            M: pluralize('M'),
	            MM: pluralize('M'),
	            y: pluralize('y'),
	            yy: pluralize('y')
	        },
	        preparse: function preparse(string) {
	            return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ar;
	});
	//! Native plural forms: forabi https://github.com/forabi

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Moroccan Arabic (ar-ma)
	//! author : ElFadili Yassine : https://github.com/ElFadiliY
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ar_ma = moment.defineLocale('ar-ma', {
	        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ar_ma;
	});
	//! author : Abdel Said : https://github.com/abdelsaid

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic Saudi Arabia (ar-sa)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    },
	        numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    };

	    var ar_sa = moment.defineLocale('ar-sa', {
	        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM: function isPM(input) {
	            return 'م' === input;
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ar_sa;
	});
	//! author : Suhail Alkowaileet : https://github.com/xsoh

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ar_tn = moment.defineLocale('ar-tn', {
	        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return ar_tn;
	});
	//! locale  : Tunisian Arabic (ar-tn)

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : azerbaijani (az)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var suffixes = {
	        1: '-inci',
	        5: '-inci',
	        8: '-inci',
	        70: '-inci',
	        80: '-inci',
	        2: '-nci',
	        7: '-nci',
	        20: '-nci',
	        50: '-nci',
	        3: '-üncü',
	        4: '-üncü',
	        100: '-üncü',
	        6: '-ncı',
	        9: '-uncu',
	        10: '-uncu',
	        30: '-uncu',
	        60: '-ıncı',
	        90: '-ıncı'
	    };

	    var az = moment.defineLocale('az', {
	        months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
	        monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
	        weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
	        weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
	        weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[bugün saat] LT',
	            nextDay: '[sabah saat] LT',
	            nextWeek: '[gələn həftə] dddd [saat] LT',
	            lastDay: '[dünən] LT',
	            lastWeek: '[keçən həftə] dddd [saat] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s sonra',
	            past: '%s əvvəl',
	            s: 'birneçə saniyyə',
	            m: 'bir dəqiqə',
	            mm: '%d dəqiqə',
	            h: 'bir saat',
	            hh: '%d saat',
	            d: 'bir gün',
	            dd: '%d gün',
	            M: 'bir ay',
	            MM: '%d ay',
	            y: 'bir il',
	            yy: '%d il'
	        },
	        meridiemParse: /gecə|səhər|gündüz|axşam/,
	        isPM: function isPM(input) {
	            return (/^(gündüz|axşam)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'gecə';
	            } else if (hour < 12) {
	                return 'səhər';
	            } else if (hour < 17) {
	                return 'gündüz';
	            } else {
	                return 'axşam';
	            }
	        },
	        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
	        ordinal: function ordinal(number) {
	            if (number === 0) {
	                // special case for zero
	                return number + '-ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return az;
	});
	//! author : topchiyev : https://github.com/topchiyev

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : belarusian (be)
	//! author : Dmitry Demidov : https://github.com/demidov91
	//! author: Praleska: http://praleska.pro/
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
	            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
	            'dd': 'дзень_дні_дзён',
	            'MM': 'месяц_месяцы_месяцаў',
	            'yy': 'год_гады_гадоў'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвіліна' : 'хвіліну';
	        } else if (key === 'h') {
	            return withoutSuffix ? 'гадзіна' : 'гадзіну';
	        } else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_'),
	            'accusative': 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_')
	        },
	            nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
	        return months[nounCase][m.month()];
	    }
	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
	            'accusative': 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_')
	        },
	            nounCase = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(format) ? 'accusative' : 'nominative';
	        return weekdays[nounCase][m.day()];
	    }

	    var be = moment.defineLocale('be', {
	        months: monthsCaseReplace,
	        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
	        weekdays: weekdaysCaseReplace,
	        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY г.',
	            LLL: 'D MMMM YYYY г., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY г., HH:mm'
	        },
	        calendar: {
	            sameDay: '[Сёння ў] LT',
	            nextDay: '[Заўтра ў] LT',
	            lastDay: '[Учора ў] LT',
	            nextWeek: function nextWeek() {
	                return '[У] dddd [ў] LT';
	            },
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[У мінулую] dddd [ў] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[У мінулы] dddd [ў] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'праз %s',
	            past: '%s таму',
	            s: 'некалькі секунд',
	            m: relativeTimeWithPlural,
	            mm: relativeTimeWithPlural,
	            h: relativeTimeWithPlural,
	            hh: relativeTimeWithPlural,
	            d: 'дзень',
	            dd: relativeTimeWithPlural,
	            M: 'месяц',
	            MM: relativeTimeWithPlural,
	            y: 'год',
	            yy: relativeTimeWithPlural
	        },
	        meridiemParse: /ночы|раніцы|дня|вечара/,
	        isPM: function isPM(input) {
	            return (/^(дня|вечара)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночы';
	            } else if (hour < 12) {
	                return 'раніцы';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечара';
	            }
	        },
	        ordinalParse: /\d{1,2}-(і|ы|га)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                case 'w':
	                case 'W':
	                    return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
	                case 'D':
	                    return number + '-га';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return be;
	});
	//! Author : Menelion Elensúle : https://github.com/Oire

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : bulgarian (bg)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var bg = moment.defineLocale('bg', {
	        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
	        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
	        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'D.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[Днес в] LT',
	            nextDay: '[Утре в] LT',
	            nextWeek: 'dddd [в] LT',
	            lastDay: '[Вчера в] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 6:
	                        return '[В изминалата] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[В изминалия] dddd [в] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'след %s',
	            past: 'преди %s',
	            s: 'няколко секунди',
	            m: 'минута',
	            mm: '%d минути',
	            h: 'час',
	            hh: '%d часа',
	            d: 'ден',
	            dd: '%d дни',
	            M: 'месец',
	            MM: '%d месеца',
	            y: 'година',
	            yy: '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal: function ordinal(number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bg;
	});
	//! author : Krasen Borisov : https://github.com/kraz

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bengali (bn)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '১',
	        '2': '২',
	        '3': '৩',
	        '4': '৪',
	        '5': '৫',
	        '6': '৬',
	        '7': '৭',
	        '8': '৮',
	        '9': '৯',
	        '0': '০'
	    },
	        numberMap = {
	        '১': '1',
	        '২': '2',
	        '৩': '3',
	        '৪': '4',
	        '৫': '5',
	        '৬': '6',
	        '৭': '7',
	        '৮': '8',
	        '৯': '9',
	        '০': '0'
	    };

	    var bn = moment.defineLocale('bn', {
	        months: 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
	        monthsShort: 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
	        weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার'.split('_'),
	        weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি'.split('_'),
	        weekdaysMin: 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm সময়',
	            LTS: 'A h:mm:ss সময়',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm সময়',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
	        },
	        calendar: {
	            sameDay: '[আজ] LT',
	            nextDay: '[আগামীকাল] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[গতকাল] LT',
	            lastWeek: '[গত] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s পরে',
	            past: '%s আগে',
	            s: 'কএক সেকেন্ড',
	            m: 'এক মিনিট',
	            mm: '%d মিনিট',
	            h: 'এক ঘন্টা',
	            hh: '%d ঘন্টা',
	            d: 'এক দিন',
	            dd: '%d দিন',
	            M: 'এক মাস',
	            MM: '%d মাস',
	            y: 'এক বছর',
	            yy: '%d বছর'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /রাত|সকাল|দুপুর|বিকেল|রাত/,
	        isPM: function isPM(input) {
	            return (/^(দুপুর|বিকেল|রাত)$/.test(input)
	            );
	        },
	        //Bengali is a vast language its spoken
	        //in different forms in various parts of the world.
	        //I have just generalized with most common one used
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'রাত';
	            } else if (hour < 10) {
	                return 'সকাল';
	            } else if (hour < 17) {
	                return 'দুপুর';
	            } else if (hour < 20) {
	                return 'বিকেল';
	            } else {
	                return 'রাত';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bn;
	});
	//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : tibetan (bo)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '༡',
	        '2': '༢',
	        '3': '༣',
	        '4': '༤',
	        '5': '༥',
	        '6': '༦',
	        '7': '༧',
	        '8': '༨',
	        '9': '༩',
	        '0': '༠'
	    },
	        numberMap = {
	        '༡': '1',
	        '༢': '2',
	        '༣': '3',
	        '༤': '4',
	        '༥': '5',
	        '༦': '6',
	        '༧': '7',
	        '༨': '8',
	        '༩': '9',
	        '༠': '0'
	    };

	    var bo = moment.defineLocale('bo', {
	        months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
	        weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm',
	            LTS: 'A h:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm'
	        },
	        calendar: {
	            sameDay: '[དི་རིང] LT',
	            nextDay: '[སང་ཉིན] LT',
	            nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
	            lastDay: '[ཁ་སང] LT',
	            lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s ལ་',
	            past: '%s སྔན་ལ',
	            s: 'ལམ་སང',
	            m: 'སྐར་མ་གཅིག',
	            mm: '%d སྐར་མ',
	            h: 'ཆུ་ཚོད་གཅིག',
	            hh: '%d ཆུ་ཚོད',
	            d: 'ཉིན་གཅིག',
	            dd: '%d ཉིན་',
	            M: 'ཟླ་བ་གཅིག',
	            MM: '%d ཟླ་བ',
	            y: 'ལོ་གཅིག',
	            yy: '%d ལོ'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
	        isPM: function isPM(input) {
	            return (/^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'མཚན་མོ';
	            } else if (hour < 10) {
	                return 'ཞོགས་ཀས';
	            } else if (hour < 17) {
	                return 'ཉིན་གུང';
	            } else if (hour < 20) {
	                return 'དགོང་དག';
	            } else {
	                return 'མཚན་མོ';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bo;
	});
	//! author : Thupten N. Chakrishar : https://github.com/vajradog

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : breton (br)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function relativeTimeWithMutation(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'munutenn',
	            'MM': 'miz',
	            'dd': 'devezh'
	        };
	        return number + ' ' + mutation(format[key], number);
	    }
	    function specialMutationForYears(number) {
	        switch (lastNumber(number)) {
	            case 1:
	            case 3:
	            case 4:
	            case 5:
	            case 9:
	                return number + ' bloaz';
	            default:
	                return number + ' vloaz';
	        }
	    }
	    function lastNumber(_x) {
	        var _again = true;

	        _function: while (_again) {
	            var number = _x;
	            _again = false;

	            if (number > 9) {
	                _x = number % 10;
	                _again = true;
	                continue _function;
	            }
	            return number;
	        }
	    }
	    function mutation(text, number) {
	        if (number === 2) {
	            return softMutation(text);
	        }
	        return text;
	    }
	    function softMutation(text) {
	        var mutationTable = {
	            'm': 'v',
	            'b': 'v',
	            'd': 'z'
	        };
	        if (mutationTable[text.charAt(0)] === undefined) {
	            return text;
	        }
	        return mutationTable[text.charAt(0)] + text.substring(1);
	    }

	    var br = moment.defineLocale('br', {
	        months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
	        monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
	        weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
	        weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h[e]mm A',
	            LTS: 'h[e]mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D [a viz] MMMM YYYY',
	            LLL: 'D [a viz] MMMM YYYY h[e]mm A',
	            LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A'
	        },
	        calendar: {
	            sameDay: '[Hiziv da] LT',
	            nextDay: '[Warc\'hoazh da] LT',
	            nextWeek: 'dddd [da] LT',
	            lastDay: '[Dec\'h da] LT',
	            lastWeek: 'dddd [paset da] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'a-benn %s',
	            past: '%s \'zo',
	            s: 'un nebeud segondennoù',
	            m: 'ur vunutenn',
	            mm: relativeTimeWithMutation,
	            h: 'un eur',
	            hh: '%d eur',
	            d: 'un devezh',
	            dd: relativeTimeWithMutation,
	            M: 'ur miz',
	            MM: relativeTimeWithMutation,
	            y: 'ur bloaz',
	            yy: specialMutationForYears
	        },
	        ordinalParse: /\d{1,2}(añ|vet)/,
	        ordinal: function ordinal(number) {
	            var output = number === 1 ? 'añ' : 'vet';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return br;
	});
	//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : bosnian (bs)
	//! author : Nedim Cholich : https://github.com/frontyard
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	            case 'mm':
	                if (number === 1) {
	                    result += 'minuta';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'minute';
	                } else {
	                    result += 'minuta';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'jedan sat' : 'jednog sata';
	            case 'hh':
	                if (number === 1) {
	                    result += 'sat';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sata';
	                } else {
	                    result += 'sati';
	                }
	                return result;
	            case 'dd':
	                if (number === 1) {
	                    result += 'dan';
	                } else {
	                    result += 'dana';
	                }
	                return result;
	            case 'MM':
	                if (number === 1) {
	                    result += 'mjesec';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'mjeseca';
	                } else {
	                    result += 'mjeseci';
	                }
	                return result;
	            case 'yy':
	                if (number === 1) {
	                    result += 'godina';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'godine';
	                } else {
	                    result += 'godina';
	                }
	                return result;
	        }
	    }

	    var bs = moment.defineLocale('bs', {
	        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[jučer u] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                        return '[prošlu] dddd [u] LT';
	                    case 6:
	                        return '[prošle] [subote] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'prije %s',
	            s: 'par sekundi',
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: 'dan',
	            dd: translate,
	            M: 'mjesec',
	            MM: translate,
	            y: 'godinu',
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bs;
	});
	//! based on (hr) translation by Bojan Marković

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : catalan (ca)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ca = moment.defineLocale('ca', {
	        months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
	        monthsShort: 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
	        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
	        weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
	        weekdaysMin: 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'LT:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd D MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: function sameDay() {
	                return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            nextDay: function nextDay() {
	                return '[demà a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            nextWeek: function nextWeek() {
	                return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            lastDay: function lastDay() {
	                return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            lastWeek: function lastWeek() {
	                return '[el] dddd [passat a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'en %s',
	            past: 'fa %s',
	            s: 'uns segons',
	            m: 'un minut',
	            mm: '%d minuts',
	            h: 'una hora',
	            hh: '%d hores',
	            d: 'un dia',
	            dd: '%d dies',
	            M: 'un mes',
	            MM: '%d mesos',
	            y: 'un any',
	            yy: '%d anys'
	        },
	        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
	        ordinal: function ordinal(number, period) {
	            var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';
	            if (period === 'w' || period === 'W') {
	                output = 'a';
	            }
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return ca;
	});
	//! author : Juan G. Hurtado : https://github.com/juanghurtado

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : czech (cs)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
	        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
	    function plural(n) {
	        return n > 1 && n < 5 && ~ ~(n / 10) !== 1;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                // a few seconds / in a few seconds / a few seconds ago
	                return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';
	            case 'm':
	                // a minute / in a minute / a minute ago
	                return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';
	            case 'mm':
	                // 9 minutes / in 9 minutes / 9 minutes ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'minuty' : 'minut');
	                } else {
	                    return result + 'minutami';
	                }
	                break;
	            case 'h':
	                // an hour / in an hour / an hour ago
	                return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
	            case 'hh':
	                // 9 hours / in 9 hours / 9 hours ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'hodiny' : 'hodin');
	                } else {
	                    return result + 'hodinami';
	                }
	                break;
	            case 'd':
	                // a day / in a day / a day ago
	                return withoutSuffix || isFuture ? 'den' : 'dnem';
	            case 'dd':
	                // 9 days / in 9 days / 9 days ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'dny' : 'dní');
	                } else {
	                    return result + 'dny';
	                }
	                break;
	            case 'M':
	                // a month / in a month / a month ago
	                return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';
	            case 'MM':
	                // 9 months / in 9 months / 9 months ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'měsíce' : 'měsíců');
	                } else {
	                    return result + 'měsíci';
	                }
	                break;
	            case 'y':
	                // a year / in a year / a year ago
	                return withoutSuffix || isFuture ? 'rok' : 'rokem';
	            case 'yy':
	                // 9 years / in 9 years / 9 years ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'roky' : 'let');
	                } else {
	                    return result + 'lety';
	                }
	                break;
	        }
	    }

	    var cs = moment.defineLocale('cs', {
	        months: months,
	        monthsShort: monthsShort,
	        monthsParse: (function (months, monthsShort) {
	            var i,
	                _monthsParse = [];
	            for (i = 0; i < 12; i++) {
	                // use custom parser to solve problem with July (červenec)
	                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	            }
	            return _monthsParse;
	        })(months, monthsShort),
	        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
	        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
	        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[dnes v] LT',
	            nextDay: '[zítra v] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[v neděli v] LT';
	                    case 1:
	                    case 2:
	                        return '[v] dddd [v] LT';
	                    case 3:
	                        return '[ve středu v] LT';
	                    case 4:
	                        return '[ve čtvrtek v] LT';
	                    case 5:
	                        return '[v pátek v] LT';
	                    case 6:
	                        return '[v sobotu v] LT';
	                }
	            },
	            lastDay: '[včera v] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[minulou neděli v] LT';
	                    case 1:
	                    case 2:
	                        return '[minulé] dddd [v] LT';
	                    case 3:
	                        return '[minulou středu v] LT';
	                    case 4:
	                    case 5:
	                        return '[minulý] dddd [v] LT';
	                    case 6:
	                        return '[minulou sobotu v] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'před %s',
	            s: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return cs;
	});
	//! author : petrbela : https://github.com/petrbela

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : chuvash (cv)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var cv = moment.defineLocale('cv', {
	        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
	        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
	        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
	        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
	        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD-MM-YYYY',
	            LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
	            LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
	            LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
	        },
	        calendar: {
	            sameDay: '[Паян] LT [сехетре]',
	            nextDay: '[Ыран] LT [сехетре]',
	            lastDay: '[Ӗнер] LT [сехетре]',
	            nextWeek: '[Ҫитес] dddd LT [сехетре]',
	            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: function future(output) {
	                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
	                return output + affix;
	            },
	            past: '%s каялла',
	            s: 'пӗр-ик ҫеккунт',
	            m: 'пӗр минут',
	            mm: '%d минут',
	            h: 'пӗр сехет',
	            hh: '%d сехет',
	            d: 'пӗр кун',
	            dd: '%d кун',
	            M: 'пӗр уйӑх',
	            MM: '%d уйӑх',
	            y: 'пӗр ҫул',
	            yy: '%d ҫул'
	        },
	        ordinalParse: /\d{1,2}-мӗш/,
	        ordinal: '%d-мӗш',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return cv;
	});
	//! author : Anatoly Mironov : https://github.com/mirontoli

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Welsh (cy)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var cy = moment.defineLocale('cy', {
	        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
	        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
	        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
	        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
	        // time formats are the same as en-gb
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Heddiw am] LT',
	            nextDay: '[Yfory am] LT',
	            nextWeek: 'dddd [am] LT',
	            lastDay: '[Ddoe am] LT',
	            lastWeek: 'dddd [diwethaf am] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'mewn %s',
	            past: '%s yn ôl',
	            s: 'ychydig eiliadau',
	            m: 'munud',
	            mm: '%d munud',
	            h: 'awr',
	            hh: '%d awr',
	            d: 'diwrnod',
	            dd: '%d diwrnod',
	            M: 'mis',
	            MM: '%d mis',
	            y: 'blwyddyn',
	            yy: '%d flynedd'
	        },
	        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
	        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
	        ordinal: function ordinal(number) {
	            var b = number,
	                output = '',
	                lookup = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
	            'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
	            ];
	            if (b > 20) {
	                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
	                    output = 'fed'; // not 30ain, 70ain or 90ain
	                } else {
	                        output = 'ain';
	                    }
	            } else if (b > 0) {
	                output = lookup[b];
	            }
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return cy;
	});
	//! author : Robert Allen

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : danish (da)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var da = moment.defineLocale('da', {
	        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
	        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY HH:mm',
	            LLLL: 'dddd [d.] D. MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[I dag kl.] LT',
	            nextDay: '[I morgen kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[I går kl.] LT',
	            lastWeek: '[sidste] dddd [kl] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: '%s siden',
	            s: 'få sekunder',
	            m: 'et minut',
	            mm: '%d minutter',
	            h: 'en time',
	            hh: '%d timer',
	            d: 'en dag',
	            dd: '%d dage',
	            M: 'en måned',
	            MM: '%d måneder',
	            y: 'et år',
	            yy: '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return da;
	});
	//! author : Ulrik Nielsen : https://github.com/mrbase

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : german (de)
	//! author : lluchs : https://github.com/lluchs
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    var de = moment.defineLocale('de', {
	        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY HH:mm',
	            LLLL: 'dddd, D. MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[Morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[Gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: 'vor %s',
	            s: 'ein paar Sekunden',
	            m: processRelativeTime,
	            mm: '%d Minuten',
	            h: processRelativeTime,
	            hh: '%d Stunden',
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return de;
	});
	//! author: Menelion Elensúle: https://github.com/Oire

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : austrian german (de-at)
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    var de_at = moment.defineLocale('de-at', {
	        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY HH:mm',
	            LLLL: 'dddd, D. MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[Morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[Gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: 'vor %s',
	            s: 'ein paar Sekunden',
	            m: processRelativeTime,
	            mm: '%d Minuten',
	            h: processRelativeTime,
	            hh: '%d Stunden',
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return de_at;
	});
	//! author : Martin Groller : https://github.com/MadMG

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : modern greek (el)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var el = moment.defineLocale('el', {
	        monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
	        monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
	        months: function months(momentToFormat, format) {
	            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) {
	                // if there is a day number before 'MMMM'
	                return this._monthsGenitiveEl[momentToFormat.month()];
	            } else {
	                return this._monthsNominativeEl[momentToFormat.month()];
	            }
	        },
	        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
	        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
	        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
	        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'μμ' : 'ΜΜ';
	            } else {
	                return isLower ? 'πμ' : 'ΠΜ';
	            }
	        },
	        isPM: function isPM(input) {
	            return (input + '').toLowerCase()[0] === 'μ';
	        },
	        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendarEl: {
	            sameDay: '[Σήμερα {}] LT',
	            nextDay: '[Αύριο {}] LT',
	            nextWeek: 'dddd [{}] LT',
	            lastDay: '[Χθες {}] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 6:
	                        return '[το προηγούμενο] dddd [{}] LT';
	                    default:
	                        return '[την προηγούμενη] dddd [{}] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        calendar: function calendar(key, mom) {
	            var output = this._calendarEl[key],
	                hours = mom && mom.hours();
	            if (typeof output === 'function') {
	                output = output.apply(mom);
	            }
	            return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
	        },
	        relativeTime: {
	            future: 'σε %s',
	            past: '%s πριν',
	            s: 'λίγα δευτερόλεπτα',
	            m: 'ένα λεπτό',
	            mm: '%d λεπτά',
	            h: 'μία ώρα',
	            hh: '%d ώρες',
	            d: 'μία μέρα',
	            dd: '%d μέρες',
	            M: 'ένας μήνας',
	            MM: '%d μήνες',
	            y: 'ένας χρόνος',
	            yy: '%d χρόνια'
	        },
	        ordinalParse: /\d{1,2}η/,
	        ordinal: '%dη',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4st is the first week of the year.
	        }
	    });

	    return el;
	});
	//! author : Aggelos Karalias : https://github.com/mehiel

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var en_au = moment.defineLocale('en-au', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = ~ ~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return en_au;
	});
	//! locale : australian english (en-au)

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : canadian english (en-ca)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var en_ca = moment.defineLocale('en-ca', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'YYYY-MM-DD',
	            LL: 'D MMMM, YYYY',
	            LLL: 'D MMMM, YYYY h:mm A',
	            LLLL: 'dddd, D MMMM, YYYY h:mm A'
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = ~ ~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	            return number + output;
	        }
	    });

	    return en_ca;
	});
	//! author : Jonathan Abourbih : https://github.com/jonbca

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : great britain english (en-gb)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var en_gb = moment.defineLocale('en-gb', {
	        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Today at] LT',
	            nextDay: '[Tomorrow at] LT',
	            nextWeek: 'dddd [at] LT',
	            lastDay: '[Yesterday at] LT',
	            lastWeek: '[Last] dddd [at] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'in %s',
	            past: '%s ago',
	            s: 'a few seconds',
	            m: 'a minute',
	            mm: '%d minutes',
	            h: 'an hour',
	            hh: '%d hours',
	            d: 'a day',
	            dd: '%d days',
	            M: 'a month',
	            MM: '%d months',
	            y: 'a year',
	            yy: '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = ~ ~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return en_gb;
	});
	//! author : Chris Gedrim : https://github.com/chrisgedrim

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : esperanto (eo)
	//! author : Colin Dean : https://github.com/colindean
	//! komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var eo = moment.defineLocale('eo', {
	        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
	        weekdays: 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
	        weekdaysShort: 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
	        weekdaysMin: 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'D[-an de] MMMM, YYYY',
	            LLL: 'D[-an de] MMMM, YYYY HH:mm',
	            LLLL: 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
	        },
	        meridiemParse: /[ap]\.t\.m/i,
	        isPM: function isPM(input) {
	            return input.charAt(0).toLowerCase() === 'p';
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'p.t.m.' : 'P.T.M.';
	            } else {
	                return isLower ? 'a.t.m.' : 'A.T.M.';
	            }
	        },
	        calendar: {
	            sameDay: '[Hodiaŭ je] LT',
	            nextDay: '[Morgaŭ je] LT',
	            nextWeek: 'dddd [je] LT',
	            lastDay: '[Hieraŭ je] LT',
	            lastWeek: '[pasinta] dddd [je] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'je %s',
	            past: 'antaŭ %s',
	            s: 'sekundoj',
	            m: 'minuto',
	            mm: '%d minutoj',
	            h: 'horo',
	            hh: '%d horoj',
	            d: 'tago', //ne 'diurno', ĉar estas uzita por proksimumo
	            dd: '%d tagoj',
	            M: 'monato',
	            MM: '%d monatoj',
	            y: 'jaro',
	            yy: '%d jaroj'
	        },
	        ordinalParse: /\d{1,2}a/,
	        ordinal: '%da',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return eo;
	});
	//!          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : spanish (es)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var monthsShortDot = 'Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.'.split('_'),
	        _monthsShort = 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_');

	    var es = moment.defineLocale('es', {
	        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
	        monthsShort: function monthsShort(m, format) {
	            if (/-MMM-/.test(format)) {
	                return _monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
	        weekdaysShort: 'Dom._Lun._Mar._Mié._Jue._Vie._Sáb.'.split('_'),
	        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY H:mm',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
	        },
	        calendar: {
	            sameDay: function sameDay() {
	                return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            nextDay: function nextDay() {
	                return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            nextWeek: function nextWeek() {
	                return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            lastDay: function lastDay() {
	                return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            lastWeek: function lastWeek() {
	                return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'en %s',
	            past: 'hace %s',
	            s: 'unos segundos',
	            m: 'un minuto',
	            mm: '%d minutos',
	            h: 'una hora',
	            hh: '%d horas',
	            d: 'un día',
	            dd: '%d días',
	            M: 'un mes',
	            MM: '%d meses',
	            y: 'un año',
	            yy: '%d años'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return es;
	});
	//! author : Julio Napurí : https://github.com/julionc

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : estonian (et)
	//! author : Henry Kehlmann : https://github.com/madhenry
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's': ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
	            'm': ['ühe minuti', 'üks minut'],
	            'mm': [number + ' minuti', number + ' minutit'],
	            'h': ['ühe tunni', 'tund aega', 'üks tund'],
	            'hh': [number + ' tunni', number + ' tundi'],
	            'd': ['ühe päeva', 'üks päev'],
	            'M': ['kuu aja', 'kuu aega', 'üks kuu'],
	            'MM': [number + ' kuu', number + ' kuud'],
	            'y': ['ühe aasta', 'aasta', 'üks aasta'],
	            'yy': [number + ' aasta', number + ' aastat']
	        };
	        if (withoutSuffix) {
	            return format[key][2] ? format[key][2] : format[key][1];
	        }
	        return isFuture ? format[key][0] : format[key][1];
	    }

	    var et = moment.defineLocale('et', {
	        months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
	        monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
	        weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
	        weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
	        weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[Täna,] LT',
	            nextDay: '[Homme,] LT',
	            nextWeek: '[Järgmine] dddd LT',
	            lastDay: '[Eile,] LT',
	            lastWeek: '[Eelmine] dddd LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s pärast',
	            past: '%s tagasi',
	            s: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: '%d päeva',
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return et;
	});
	//! improvements : Illimar Tambek : https://github.com/ragulka

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : euskara (eu)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var eu = moment.defineLocale('eu', {
	        months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
	        monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
	        weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
	        weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
	        weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'YYYY[ko] MMMM[ren] D[a]',
	            LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
	            LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
	            l: 'YYYY-M-D',
	            ll: 'YYYY[ko] MMM D[a]',
	            lll: 'YYYY[ko] MMM D[a] HH:mm',
	            llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
	        },
	        calendar: {
	            sameDay: '[gaur] LT[etan]',
	            nextDay: '[bihar] LT[etan]',
	            nextWeek: 'dddd LT[etan]',
	            lastDay: '[atzo] LT[etan]',
	            lastWeek: '[aurreko] dddd LT[etan]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s barru',
	            past: 'duela %s',
	            s: 'segundo batzuk',
	            m: 'minutu bat',
	            mm: '%d minutu',
	            h: 'ordu bat',
	            hh: '%d ordu',
	            d: 'egun bat',
	            dd: '%d egun',
	            M: 'hilabete bat',
	            MM: '%d hilabete',
	            y: 'urte bat',
	            yy: '%d urte'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return eu;
	});
	//! author : Eneko Illarramendi : https://github.com/eillarra

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Persian (fa)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '۱',
	        '2': '۲',
	        '3': '۳',
	        '4': '۴',
	        '5': '۵',
	        '6': '۶',
	        '7': '۷',
	        '8': '۸',
	        '9': '۹',
	        '0': '۰'
	    },
	        numberMap = {
	        '۱': '1',
	        '۲': '2',
	        '۳': '3',
	        '۴': '4',
	        '۵': '5',
	        '۶': '6',
	        '۷': '7',
	        '۸': '8',
	        '۹': '9',
	        '۰': '0'
	    };

	    var fa = moment.defineLocale('fa', {
	        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
	        weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
	        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /قبل از ظهر|بعد از ظهر/,
	        isPM: function isPM(input) {
	            return (/بعد از ظهر/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return 'قبل از ظهر';
	            } else {
	                return 'بعد از ظهر';
	            }
	        },
	        calendar: {
	            sameDay: '[امروز ساعت] LT',
	            nextDay: '[فردا ساعت] LT',
	            nextWeek: 'dddd [ساعت] LT',
	            lastDay: '[دیروز ساعت] LT',
	            lastWeek: 'dddd [پیش] [ساعت] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'در %s',
	            past: '%s پیش',
	            s: 'چندین ثانیه',
	            m: 'یک دقیقه',
	            mm: '%d دقیقه',
	            h: 'یک ساعت',
	            hh: '%d ساعت',
	            d: 'یک روز',
	            dd: '%d روز',
	            M: 'یک ماه',
	            MM: '%d ماه',
	            y: 'یک سال',
	            yy: '%d سال'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[۰-۹]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        ordinalParse: /\d{1,2}م/,
	        ordinal: '%dم',
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return fa;
	});
	//! author : Ebrahim Byagowi : https://github.com/ebraminio

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : finnish (fi)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
	        numbersFuture = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', numbersPast[7], numbersPast[8], numbersPast[9]];
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = '';
	        switch (key) {
	            case 's':
	                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
	            case 'm':
	                return isFuture ? 'minuutin' : 'minuutti';
	            case 'mm':
	                result = isFuture ? 'minuutin' : 'minuuttia';
	                break;
	            case 'h':
	                return isFuture ? 'tunnin' : 'tunti';
	            case 'hh':
	                result = isFuture ? 'tunnin' : 'tuntia';
	                break;
	            case 'd':
	                return isFuture ? 'päivän' : 'päivä';
	            case 'dd':
	                result = isFuture ? 'päivän' : 'päivää';
	                break;
	            case 'M':
	                return isFuture ? 'kuukauden' : 'kuukausi';
	            case 'MM':
	                result = isFuture ? 'kuukauden' : 'kuukautta';
	                break;
	            case 'y':
	                return isFuture ? 'vuoden' : 'vuosi';
	            case 'yy':
	                result = isFuture ? 'vuoden' : 'vuotta';
	                break;
	        }
	        result = verbalNumber(number, isFuture) + ' ' + result;
	        return result;
	    }
	    function verbalNumber(number, isFuture) {
	        return number < 10 ? isFuture ? numbersFuture[number] : numbersPast[number] : number;
	    }

	    var fi = moment.defineLocale('fi', {
	        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
	        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
	        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
	        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
	        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD.MM.YYYY',
	            LL: 'Do MMMM[ta] YYYY',
	            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
	            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
	            l: 'D.M.YYYY',
	            ll: 'Do MMM YYYY',
	            lll: 'Do MMM YYYY, [klo] HH.mm',
	            llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
	        },
	        calendar: {
	            sameDay: '[tänään] [klo] LT',
	            nextDay: '[huomenna] [klo] LT',
	            nextWeek: 'dddd [klo] LT',
	            lastDay: '[eilen] [klo] LT',
	            lastWeek: '[viime] dddd[na] [klo] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s päästä',
	            past: '%s sitten',
	            s: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fi;
	});
	//! author : Tarmo Aidantausta : https://github.com/bleadof

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : faroese (fo)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var fo = moment.defineLocale('fo', {
	        months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
	        weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
	        weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D. MMMM, YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Í dag kl.] LT',
	            nextDay: '[Í morgin kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[Í gjár kl.] LT',
	            lastWeek: '[síðstu] dddd [kl] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'um %s',
	            past: '%s síðani',
	            s: 'fá sekund',
	            m: 'ein minutt',
	            mm: '%d minuttir',
	            h: 'ein tími',
	            hh: '%d tímar',
	            d: 'ein dagur',
	            dd: '%d dagar',
	            M: 'ein mánaði',
	            MM: '%d mánaðir',
	            y: 'eitt ár',
	            yy: '%d ár'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fo;
	});
	//! author : Ragnar Johannesen : https://github.com/ragnar123

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : french (fr)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var fr = moment.defineLocale('fr', {
	        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dans %s',
	            past: 'il y a %s',
	            s: 'quelques secondes',
	            m: 'une minute',
	            mm: '%d minutes',
	            h: 'une heure',
	            hh: '%d heures',
	            d: 'un jour',
	            dd: '%d jours',
	            M: 'un mois',
	            MM: '%d mois',
	            y: 'un an',
	            yy: '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 ? 'er' : '');
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fr;
	});
	//! author : John Fischer : https://github.com/jfroffice

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : canadian french (fr-ca)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var fr_ca = moment.defineLocale('fr-ca', {
	        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dans %s',
	            past: 'il y a %s',
	            s: 'quelques secondes',
	            m: 'une minute',
	            mm: '%d minutes',
	            h: 'une heure',
	            hh: '%d heures',
	            d: 'un jour',
	            dd: '%d jours',
	            M: 'un mois',
	            MM: '%d mois',
	            y: 'un an',
	            yy: '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|e)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 ? 'er' : 'e');
	        }
	    });

	    return fr_ca;
	});
	//! author : Jonathan Abourbih : https://github.com/jonbca

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : frisian (fy)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

	    var fy = moment.defineLocale('fy', {
	        months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
	        monthsShort: function monthsShort(m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
	        weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
	        weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD-MM-YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[hjoed om] LT',
	            nextDay: '[moarn om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[juster om] LT',
	            lastWeek: '[ôfrûne] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'oer %s',
	            past: '%s lyn',
	            s: 'in pear sekonden',
	            m: 'ien minút',
	            mm: '%d minuten',
	            h: 'ien oere',
	            hh: '%d oeren',
	            d: 'ien dei',
	            dd: '%d dagen',
	            M: 'ien moanne',
	            MM: '%d moannen',
	            y: 'ien jier',
	            yy: '%d jierren'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fy;
	});
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : galician (gl)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var gl = moment.defineLocale('gl', {
	        months: 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
	        monthsShort: 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
	        weekdays: 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
	        weekdaysShort: 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
	        weekdaysMin: 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd D MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: function sameDay() {
	                return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
	            },
	            nextDay: function nextDay() {
	                return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
	            },
	            nextWeek: function nextWeek() {
	                return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
	            },
	            lastDay: function lastDay() {
	                return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';
	            },
	            lastWeek: function lastWeek() {
	                return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: function future(str) {
	                if (str === 'uns segundos') {
	                    return 'nuns segundos';
	                }
	                return 'en ' + str;
	            },
	            past: 'hai %s',
	            s: 'uns segundos',
	            m: 'un minuto',
	            mm: '%d minutos',
	            h: 'unha hora',
	            hh: '%d horas',
	            d: 'un día',
	            dd: '%d días',
	            M: 'un mes',
	            MM: '%d meses',
	            y: 'un ano',
	            yy: '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return gl;
	});
	//! author : Juan G. Hurtado : https://github.com/juanghurtado

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hebrew (he)
	//! author : Tomer Cohen : https://github.com/tomer
	//! author : Moshe Simantov : https://github.com/DevelopmentIL
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var he = moment.defineLocale('he', {
	        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
	        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
	        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
	        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [ב]MMMM YYYY',
	            LLL: 'D [ב]MMMM YYYY HH:mm',
	            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
	            l: 'D/M/YYYY',
	            ll: 'D MMM YYYY',
	            lll: 'D MMM YYYY HH:mm',
	            llll: 'ddd, D MMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[היום ב־]LT',
	            nextDay: '[מחר ב־]LT',
	            nextWeek: 'dddd [בשעה] LT',
	            lastDay: '[אתמול ב־]LT',
	            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'בעוד %s',
	            past: 'לפני %s',
	            s: 'מספר שניות',
	            m: 'דקה',
	            mm: '%d דקות',
	            h: 'שעה',
	            hh: function hh(number) {
	                if (number === 2) {
	                    return 'שעתיים';
	                }
	                return number + ' שעות';
	            },
	            d: 'יום',
	            dd: function dd(number) {
	                if (number === 2) {
	                    return 'יומיים';
	                }
	                return number + ' ימים';
	            },
	            M: 'חודש',
	            MM: function MM(number) {
	                if (number === 2) {
	                    return 'חודשיים';
	                }
	                return number + ' חודשים';
	            },
	            y: 'שנה',
	            yy: function yy(number) {
	                if (number === 2) {
	                    return 'שנתיים';
	                } else if (number % 10 === 0 && number !== 10) {
	                    return number + ' שנה';
	                }
	                return number + ' שנים';
	            }
	        }
	    });

	    return he;
	});
	//! author : Tal Ater : https://github.com/TalAter

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : hindi (hi)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	        numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    var hi = moment.defineLocale('hi', {
	        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
	        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
	        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm बजे',
	            LTS: 'A h:mm:ss बजे',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm बजे',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
	        },
	        calendar: {
	            sameDay: '[आज] LT',
	            nextDay: '[कल] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[कल] LT',
	            lastWeek: '[पिछले] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s में',
	            past: '%s पहले',
	            s: 'कुछ ही क्षण',
	            m: 'एक मिनट',
	            mm: '%d मिनट',
	            h: 'एक घंटा',
	            hh: '%d घंटे',
	            d: 'एक दिन',
	            dd: '%d दिन',
	            M: 'एक महीने',
	            MM: '%d महीने',
	            y: 'एक वर्ष',
	            yy: '%d वर्ष'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
	        meridiemParse: /रात|सुबह|दोपहर|शाम/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सुबह') {
	                return hour;
	            } else if (meridiem === 'दोपहर') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'शाम') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात';
	            } else if (hour < 10) {
	                return 'सुबह';
	            } else if (hour < 17) {
	                return 'दोपहर';
	            } else if (hour < 20) {
	                return 'शाम';
	            } else {
	                return 'रात';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hi;
	});
	//! author : Mayank Singhal : https://github.com/mayanksinghal

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : hrvatski (hr)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	            case 'mm':
	                if (number === 1) {
	                    result += 'minuta';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'minute';
	                } else {
	                    result += 'minuta';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'jedan sat' : 'jednog sata';
	            case 'hh':
	                if (number === 1) {
	                    result += 'sat';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sata';
	                } else {
	                    result += 'sati';
	                }
	                return result;
	            case 'dd':
	                if (number === 1) {
	                    result += 'dan';
	                } else {
	                    result += 'dana';
	                }
	                return result;
	            case 'MM':
	                if (number === 1) {
	                    result += 'mjesec';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'mjeseca';
	                } else {
	                    result += 'mjeseci';
	                }
	                return result;
	            case 'yy':
	                if (number === 1) {
	                    result += 'godina';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'godine';
	                } else {
	                    result += 'godina';
	                }
	                return result;
	        }
	    }

	    var hr = moment.defineLocale('hr', {
	        months: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
	        monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
	        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[jučer u] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                        return '[prošlu] dddd [u] LT';
	                    case 6:
	                        return '[prošle] [subote] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'prije %s',
	            s: 'par sekundi',
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: 'dan',
	            dd: translate,
	            M: 'mjesec',
	            MM: translate,
	            y: 'godinu',
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hr;
	});
	//! author : Bojan Marković : https://github.com/bmarkovic

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : hungarian (hu)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
	    function translate(number, withoutSuffix, key, isFuture) {
	        var num = number,
	            suffix;
	        switch (key) {
	            case 's':
	                return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';
	            case 'm':
	                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
	            case 'mm':
	                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
	            case 'h':
	                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
	            case 'hh':
	                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
	            case 'd':
	                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
	            case 'dd':
	                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
	            case 'M':
	                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	            case 'MM':
	                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	            case 'y':
	                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
	            case 'yy':
	                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
	        }
	        return '';
	    }
	    function week(isFuture) {
	        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
	    }

	    var hu = moment.defineLocale('hu', {
	        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
	        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
	        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
	        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
	        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'YYYY.MM.DD.',
	            LL: 'YYYY. MMMM D.',
	            LLL: 'YYYY. MMMM D. H:mm',
	            LLLL: 'YYYY. MMMM D., dddd H:mm'
	        },
	        meridiemParse: /de|du/i,
	        isPM: function isPM(input) {
	            return input.charAt(1).toLowerCase() === 'u';
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower === true ? 'de' : 'DE';
	            } else {
	                return isLower === true ? 'du' : 'DU';
	            }
	        },
	        calendar: {
	            sameDay: '[ma] LT[-kor]',
	            nextDay: '[holnap] LT[-kor]',
	            nextWeek: function nextWeek() {
	                return week.call(this, true);
	            },
	            lastDay: '[tegnap] LT[-kor]',
	            lastWeek: function lastWeek() {
	                return week.call(this, false);
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s múlva',
	            past: '%s',
	            s: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hu;
	});
	//! author : Adam Brunner : https://github.com/adambrunner

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Armenian (hy-am)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
	            'accusative': 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_')
	        },
	            nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
	        return months[nounCase][m.month()];
	    }
	    function monthsShortCaseReplace(m, format) {
	        var monthsShort = 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_');
	        return monthsShort[m.month()];
	    }
	    function weekdaysCaseReplace(m, format) {
	        var weekdays = 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_');
	        return weekdays[m.day()];
	    }

	    var hy_am = moment.defineLocale('hy-am', {
	        months: monthsCaseReplace,
	        monthsShort: monthsShortCaseReplace,
	        weekdays: weekdaysCaseReplace,
	        weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY թ.',
	            LLL: 'D MMMM YYYY թ., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
	        },
	        calendar: {
	            sameDay: '[այսօր] LT',
	            nextDay: '[վաղը] LT',
	            lastDay: '[երեկ] LT',
	            nextWeek: function nextWeek() {
	                return 'dddd [օրը ժամը] LT';
	            },
	            lastWeek: function lastWeek() {
	                return '[անցած] dddd [օրը ժամը] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s հետո',
	            past: '%s առաջ',
	            s: 'մի քանի վայրկյան',
	            m: 'րոպե',
	            mm: '%d րոպե',
	            h: 'ժամ',
	            hh: '%d ժամ',
	            d: 'օր',
	            dd: '%d օր',
	            M: 'ամիս',
	            MM: '%d ամիս',
	            y: 'տարի',
	            yy: '%d տարի'
	        },
	        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
	        isPM: function isPM(input) {
	            return (/^(ցերեկվա|երեկոյան)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour) {
	            if (hour < 4) {
	                return 'գիշերվա';
	            } else if (hour < 12) {
	                return 'առավոտվա';
	            } else if (hour < 17) {
	                return 'ցերեկվա';
	            } else {
	                return 'երեկոյան';
	            }
	        },
	        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'DDD':
	                case 'w':
	                case 'W':
	                case 'DDDo':
	                    if (number === 1) {
	                        return number + '-ին';
	                    }
	                    return number + '-րդ';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hy_am;
	});
	//! author : Armendarabyan : https://github.com/armendarabyan

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bahasa Indonesia (id)
	//! author : Mohammad Satrio Utomo : https://github.com/tyok
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var id = moment.defineLocale('id', {
	        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
	        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
	        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
	        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|siang|sore|malam/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'siang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sore' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'siang';
	            } else if (hours < 19) {
	                return 'sore';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar: {
	            sameDay: '[Hari ini pukul] LT',
	            nextDay: '[Besok pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kemarin pukul] LT',
	            lastWeek: 'dddd [lalu pukul] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dalam %s',
	            past: '%s yang lalu',
	            s: 'beberapa detik',
	            m: 'semenit',
	            mm: '%d menit',
	            h: 'sejam',
	            hh: '%d jam',
	            d: 'sehari',
	            dd: '%d hari',
	            M: 'sebulan',
	            MM: '%d bulan',
	            y: 'setahun',
	            yy: '%d tahun'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return id;
	});
	//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : icelandic (is)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function plural(n) {
	        if (n % 100 === 11) {
	            return true;
	        } else if (n % 10 === 1) {
	            return false;
	        }
	        return true;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
	            case 'm':
	                return withoutSuffix ? 'mínúta' : 'mínútu';
	            case 'mm':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
	                } else if (withoutSuffix) {
	                    return result + 'mínúta';
	                }
	                return result + 'mínútu';
	            case 'hh':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
	                }
	                return result + 'klukkustund';
	            case 'd':
	                if (withoutSuffix) {
	                    return 'dagur';
	                }
	                return isFuture ? 'dag' : 'degi';
	            case 'dd':
	                if (plural(number)) {
	                    if (withoutSuffix) {
	                        return result + 'dagar';
	                    }
	                    return result + (isFuture ? 'daga' : 'dögum');
	                } else if (withoutSuffix) {
	                    return result + 'dagur';
	                }
	                return result + (isFuture ? 'dag' : 'degi');
	            case 'M':
	                if (withoutSuffix) {
	                    return 'mánuður';
	                }
	                return isFuture ? 'mánuð' : 'mánuði';
	            case 'MM':
	                if (plural(number)) {
	                    if (withoutSuffix) {
	                        return result + 'mánuðir';
	                    }
	                    return result + (isFuture ? 'mánuði' : 'mánuðum');
	                } else if (withoutSuffix) {
	                    return result + 'mánuður';
	                }
	                return result + (isFuture ? 'mánuð' : 'mánuði');
	            case 'y':
	                return withoutSuffix || isFuture ? 'ár' : 'ári';
	            case 'yy':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
	                }
	                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
	        }
	    }

	    var is = moment.defineLocale('is', {
	        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
	        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
	        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
	        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY [kl.] H:mm',
	            LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
	        },
	        calendar: {
	            sameDay: '[í dag kl.] LT',
	            nextDay: '[á morgun kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[í gær kl.] LT',
	            lastWeek: '[síðasta] dddd [kl.] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'eftir %s',
	            past: 'fyrir %s síðan',
	            s: translate,
	            m: translate,
	            mm: translate,
	            h: 'klukkustund',
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return is;
	});
	//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : italian (it)
	//! author : Lorenzo : https://github.com/aliem
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var it = moment.defineLocale('it', {
	        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
	        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	        weekdays: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
	        weekdaysShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
	        weekdaysMin: 'D_L_Ma_Me_G_V_S'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Oggi alle] LT',
	            nextDay: '[Domani alle] LT',
	            nextWeek: 'dddd [alle] LT',
	            lastDay: '[Ieri alle] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[la scorsa] dddd [alle] LT';
	                    default:
	                        return '[lo scorso] dddd [alle] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: function future(s) {
	                return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
	            },
	            past: '%s fa',
	            s: 'alcuni secondi',
	            m: 'un minuto',
	            mm: '%d minuti',
	            h: 'un\'ora',
	            hh: '%d ore',
	            d: 'un giorno',
	            dd: '%d giorni',
	            M: 'un mese',
	            MM: '%d mesi',
	            y: 'un anno',
	            yy: '%d anni'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return it;
	});
	//! author: Mattia Larentis: https://github.com/nostalgiaz

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : japanese (ja)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ja = moment.defineLocale('ja', {
	        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
	        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
	        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
	        longDateFormat: {
	            LT: 'Ah時m分',
	            LTS: 'Ah時m分s秒',
	            L: 'YYYY/MM/DD',
	            LL: 'YYYY年M月D日',
	            LLL: 'YYYY年M月D日Ah時m分',
	            LLLL: 'YYYY年M月D日Ah時m分 dddd'
	        },
	        meridiemParse: /午前|午後/i,
	        isPM: function isPM(input) {
	            return input === '午後';
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return '午前';
	            } else {
	                return '午後';
	            }
	        },
	        calendar: {
	            sameDay: '[今日] LT',
	            nextDay: '[明日] LT',
	            nextWeek: '[来週]dddd LT',
	            lastDay: '[昨日] LT',
	            lastWeek: '[前週]dddd LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s後',
	            past: '%s前',
	            s: '数秒',
	            m: '1分',
	            mm: '%d分',
	            h: '1時間',
	            hh: '%d時間',
	            d: '1日',
	            dd: '%d日',
	            M: '1ヶ月',
	            MM: '%dヶ月',
	            y: '1年',
	            yy: '%d年'
	        }
	    });

	    return ja;
	});
	//! author : LI Long : https://github.com/baryon

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Boso Jowo (jv)
	//! author : Rony Lantip : https://github.com/lantip
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var jv = moment.defineLocale('jv', {
	        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
	        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
	        weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
	        weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
	        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /enjing|siyang|sonten|ndalu/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'enjing') {
	                return hour;
	            } else if (meridiem === 'siyang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'enjing';
	            } else if (hours < 15) {
	                return 'siyang';
	            } else if (hours < 19) {
	                return 'sonten';
	            } else {
	                return 'ndalu';
	            }
	        },
	        calendar: {
	            sameDay: '[Dinten puniko pukul] LT',
	            nextDay: '[Mbenjang pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kala wingi pukul] LT',
	            lastWeek: 'dddd [kepengker pukul] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'wonten ing %s',
	            past: '%s ingkang kepengker',
	            s: 'sawetawis detik',
	            m: 'setunggal menit',
	            mm: '%d menit',
	            h: 'setunggal jam',
	            hh: '%d jam',
	            d: 'sedinten',
	            dd: '%d dinten',
	            M: 'sewulan',
	            MM: '%d wulan',
	            y: 'setaun',
	            yy: '%d taun'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return jv;
	});
	//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Georgian (ka)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
	            'accusative': 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
	        },
	            nounCase = /D[oD] *MMMM?/.test(format) ? 'accusative' : 'nominative';
	        return months[nounCase][m.month()];
	    }
	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
	            'accusative': 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_')
	        },
	            nounCase = /(წინა|შემდეგ)/.test(format) ? 'accusative' : 'nominative';
	        return weekdays[nounCase][m.day()];
	    }

	    var ka = moment.defineLocale('ka', {
	        months: monthsCaseReplace,
	        monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
	        weekdays: weekdaysCaseReplace,
	        weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
	        weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
	        longDateFormat: {
	            LT: 'h:mm A',
	            LTS: 'h:mm:ss A',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY h:mm A',
	            LLLL: 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar: {
	            sameDay: '[დღეს] LT[-ზე]',
	            nextDay: '[ხვალ] LT[-ზე]',
	            lastDay: '[გუშინ] LT[-ზე]',
	            nextWeek: '[შემდეგ] dddd LT[-ზე]',
	            lastWeek: '[წინა] dddd LT-ზე',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: function future(s) {
	                return (/(წამი|წუთი|საათი|წელი)/.test(s) ? s.replace(/ი$/, 'ში') : s + 'ში'
	                );
	            },
	            past: function past(s) {
	                if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
	                    return s.replace(/(ი|ე)$/, 'ის წინ');
	                }
	                if (/წელი/.test(s)) {
	                    return s.replace(/წელი$/, 'წლის წინ');
	                }
	            },
	            s: 'რამდენიმე წამი',
	            m: 'წუთი',
	            mm: '%d წუთი',
	            h: 'საათი',
	            hh: '%d საათი',
	            d: 'დღე',
	            dd: '%d დღე',
	            M: 'თვე',
	            MM: '%d თვე',
	            y: 'წელი',
	            yy: '%d წელი'
	        },
	        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
	        ordinal: function ordinal(number) {
	            if (number === 0) {
	                return number;
	            }
	            if (number === 1) {
	                return number + '-ლი';
	            }
	            if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
	                return 'მე-' + number;
	            }
	            return number + '-ე';
	        },
	        week: {
	            dow: 1,
	            doy: 7
	        }
	    });

	    return ka;
	});
	//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : khmer (km)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var km = moment.defineLocale('km', {
	        months: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        monthsShort: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ថ្ងៃនៈ ម៉ោង] LT',
	            nextDay: '[ស្អែក ម៉ោង] LT',
	            nextWeek: 'dddd [ម៉ោង] LT',
	            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
	            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sទៀត',
	            past: '%sមុន',
	            s: 'ប៉ុន្មានវិនាទី',
	            m: 'មួយនាទី',
	            mm: '%d នាទី',
	            h: 'មួយម៉ោង',
	            hh: '%d ម៉ោង',
	            d: 'មួយថ្ងៃ',
	            dd: '%d ថ្ងៃ',
	            M: 'មួយខែ',
	            MM: '%d ខែ',
	            y: 'មួយឆ្នាំ',
	            yy: '%d ឆ្នាំ'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return km;
	});
	//! author : Kruy Vanna : https://github.com/kruyvanna

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : korean (ko)
	//!
	//! authors
	//!
	//! - Kyungwook, Park : https://github.com/kyungw00k
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ko = moment.defineLocale('ko', {
	        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
	        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
	        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
	        longDateFormat: {
	            LT: 'A h시 m분',
	            LTS: 'A h시 m분 s초',
	            L: 'YYYY.MM.DD',
	            LL: 'YYYY년 MMMM D일',
	            LLL: 'YYYY년 MMMM D일 A h시 m분',
	            LLLL: 'YYYY년 MMMM D일 dddd A h시 m분'
	        },
	        calendar: {
	            sameDay: '오늘 LT',
	            nextDay: '내일 LT',
	            nextWeek: 'dddd LT',
	            lastDay: '어제 LT',
	            lastWeek: '지난주 dddd LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s 후',
	            past: '%s 전',
	            s: '몇초',
	            ss: '%d초',
	            m: '일분',
	            mm: '%d분',
	            h: '한시간',
	            hh: '%d시간',
	            d: '하루',
	            dd: '%d일',
	            M: '한달',
	            MM: '%d달',
	            y: '일년',
	            yy: '%d년'
	        },
	        ordinalParse: /\d{1,2}일/,
	        ordinal: '%d일',
	        meridiemParse: /오전|오후/,
	        isPM: function isPM(token) {
	            return token === '오후';
	        },
	        meridiem: function meridiem(hour, minute, isUpper) {
	            return hour < 12 ? '오전' : '오후';
	        }
	    });

	    return ko;
	});
	//! - Jeeeyul Lee <jeeeyul@gmail.com>

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Luxembourgish (lb)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eng Minutt', 'enger Minutt'],
	            'h': ['eng Stonn', 'enger Stonn'],
	            'd': ['een Dag', 'engem Dag'],
	            'M': ['ee Mount', 'engem Mount'],
	            'y': ['ee Joer', 'engem Joer']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	    function processFutureTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'a ' + string;
	        }
	        return 'an ' + string;
	    }
	    function processPastTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'viru ' + string;
	        }
	        return 'virun ' + string;
	    }
	    /**
	     * Returns true if the word before the given number loses the '-n' ending.
	     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
	     *
	     * @param number {integer}
	     * @returns {boolean}
	     */
	    function eifelerRegelAppliesToNumber(_x) {
	        var _again = true;

	        _function: while (_again) {
	            var number = _x;
	            lastDigit = firstDigit = undefined;
	            _again = false;

	            number = parseInt(number, 10);
	            if (isNaN(number)) {
	                return false;
	            }
	            if (number < 0) {
	                // Negative Number --> always true
	                return true;
	            } else if (number < 10) {
	                // Only 1 digit
	                if (4 <= number && number <= 7) {
	                    return true;
	                }
	                return false;
	            } else if (number < 100) {
	                // 2 digits
	                var lastDigit = number % 10,
	                    firstDigit = number / 10;
	                if (lastDigit === 0) {
	                    _x = firstDigit;
	                    _again = true;
	                    continue _function;
	                }
	                _x = lastDigit;
	                _again = true;
	                continue _function;
	            } else if (number < 10000) {
	                // 3 or 4 digits --> recursively check first digit
	                while (number >= 10) {
	                    number = number / 10;
	                }
	                _x = number;
	                _again = true;
	                continue _function;
	            } else {
	                // Anything larger than 4 digits: recursively check first n-3 digits
	                number = number / 1000;
	                _x = number;
	                _again = true;
	                continue _function;
	            }
	        }
	    }

	    var lb = moment.defineLocale('lb', {
	        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
	        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm [Auer]',
	            LTS: 'H:mm:ss [Auer]',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm [Auer]',
	            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
	        },
	        calendar: {
	            sameDay: '[Haut um] LT',
	            sameElse: 'L',
	            nextDay: '[Muer um] LT',
	            nextWeek: 'dddd [um] LT',
	            lastDay: '[Gëschter um] LT',
	            lastWeek: function lastWeek() {
	                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
	                switch (this.day()) {
	                    case 2:
	                    case 4:
	                        return '[Leschten] dddd [um] LT';
	                    default:
	                        return '[Leschte] dddd [um] LT';
	                }
	            }
	        },
	        relativeTime: {
	            future: processFutureTime,
	            past: processPastTime,
	            s: 'e puer Sekonnen',
	            m: processRelativeTime,
	            mm: '%d Minutten',
	            h: processRelativeTime,
	            hh: '%d Stonnen',
	            d: processRelativeTime,
	            dd: '%d Deeg',
	            M: processRelativeTime,
	            MM: '%d Méint',
	            y: processRelativeTime,
	            yy: '%d Joer'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return lb;
	});
	//! author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lithuanian (lt)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var units = {
	        'm': 'minutė_minutės_minutę',
	        'mm': 'minutės_minučių_minutes',
	        'h': 'valanda_valandos_valandą',
	        'hh': 'valandos_valandų_valandas',
	        'd': 'diena_dienos_dieną',
	        'dd': 'dienos_dienų_dienas',
	        'M': 'mėnuo_mėnesio_mėnesį',
	        'MM': 'mėnesiai_mėnesių_mėnesius',
	        'y': 'metai_metų_metus',
	        'yy': 'metai_metų_metus'
	    },
	        weekDays = 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_');
	    function translateSeconds(number, withoutSuffix, key, isFuture) {
	        if (withoutSuffix) {
	            return 'kelios sekundės';
	        } else {
	            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
	        }
	    }
	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
	            'accusative': 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_')
	        },
	            nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
	        return months[nounCase][m.month()];
	    }
	    function translateSingular(number, withoutSuffix, key, isFuture) {
	        return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
	    }
	    function special(number) {
	        return number % 10 === 0 || number > 10 && number < 20;
	    }
	    function forms(key) {
	        return units[key].split('_');
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        if (number === 1) {
	            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
	        } else if (withoutSuffix) {
	            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
	        } else {
	            if (isFuture) {
	                return result + forms(key)[1];
	            } else {
	                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
	            }
	        }
	    }
	    function relativeWeekDay(moment, format) {
	        var nominative = format.indexOf('dddd HH:mm') === -1,
	            weekDay = weekDays[moment.day()];
	        return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + 'į';
	    }

	    var lt = moment.defineLocale('lt', {
	        months: monthsCaseReplace,
	        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
	        weekdays: relativeWeekDay,
	        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
	        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'YYYY [m.] MMMM D [d.]',
	            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
	            l: 'YYYY-MM-DD',
	            ll: 'YYYY [m.] MMMM D [d.]',
	            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
	        },
	        calendar: {
	            sameDay: '[Šiandien] LT',
	            nextDay: '[Rytoj] LT',
	            nextWeek: 'dddd LT',
	            lastDay: '[Vakar] LT',
	            lastWeek: '[Praėjusį] dddd LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'po %s',
	            past: 'prieš %s',
	            s: translateSeconds,
	            m: translateSingular,
	            mm: translate,
	            h: translateSingular,
	            hh: translate,
	            d: translateSingular,
	            dd: translate,
	            M: translateSingular,
	            MM: translate,
	            y: translateSingular,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}-oji/,
	        ordinal: function ordinal(number) {
	            return number + '-oji';
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return lt;
	});
	//! author : Mindaugas Mozūras : https://github.com/mmozuras

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : latvian (lv)
	//! author : Kristaps Karlsons : https://github.com/skakri
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var units = {
	        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        'h': 'stundas_stundām_stunda_stundas'.split('_'),
	        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
	        'd': 'dienas_dienām_diena_dienas'.split('_'),
	        'dd': 'dienas_dienām_diena_dienas'.split('_'),
	        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        'y': 'gada_gadiem_gads_gadi'.split('_'),
	        'yy': 'gada_gadiem_gads_gadi'.split('_')
	    };
	    /**
	     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
	     */
	    function format(forms, number, withoutSuffix) {
	        if (withoutSuffix) {
	            // E.g. "21 minūte", "3 minūtes".
	            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
	        } else {
	            // E.g. "21 minūtes" as in "pēc 21 minūtes".
	            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
	            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
	        }
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        return number + ' ' + format(units[key], number, withoutSuffix);
	    }
	    function relativeTimeWithSingular(number, withoutSuffix, key) {
	        return format(units[key], number, withoutSuffix);
	    }
	    function relativeSeconds(number, withoutSuffix) {
	        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
	    }

	    var lv = moment.defineLocale('lv', {
	        months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
	        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
	        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY.',
	            LL: 'YYYY. [gada] D. MMMM',
	            LLL: 'YYYY. [gada] D. MMMM, HH:mm',
	            LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
	        },
	        calendar: {
	            sameDay: '[Šodien pulksten] LT',
	            nextDay: '[Rīt pulksten] LT',
	            nextWeek: 'dddd [pulksten] LT',
	            lastDay: '[Vakar pulksten] LT',
	            lastWeek: '[Pagājušā] dddd [pulksten] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'pēc %s',
	            past: 'pirms %s',
	            s: relativeSeconds,
	            m: relativeTimeWithSingular,
	            mm: relativeTimeWithPlural,
	            h: relativeTimeWithSingular,
	            hh: relativeTimeWithPlural,
	            d: relativeTimeWithSingular,
	            dd: relativeTimeWithPlural,
	            M: relativeTimeWithSingular,
	            MM: relativeTimeWithPlural,
	            y: relativeTimeWithSingular,
	            yy: relativeTimeWithPlural
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return lv;
	});
	//! author : Jānis Elmeris : https://github.com/JanisE

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Montenegrin (me)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jednog minuta'],
	            mm: ['minut', 'minuta', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mjesec', 'mjeseca', 'mjeseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
	            return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
	        },
	        translate: function translate(number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    var me = moment.defineLocale('me', {
	        months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
	        monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
	        weekdays: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
	        weekdaysShort: ['ned.', 'pon.', 'uto.', 'sri.', 'čet.', 'pet.', 'sub.'],
	        weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sjutra u] LT',

	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[juče u] LT',
	            lastWeek: function lastWeek() {
	                var lastWeekDays = ['[prošle] [nedjelje] [u] LT', '[prošlog] [ponedjeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srijede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
	                return lastWeekDays[this.day()];
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'prije %s',
	            s: 'nekoliko sekundi',
	            m: translator.translate,
	            mm: translator.translate,
	            h: translator.translate,
	            hh: translator.translate,
	            d: 'dan',
	            dd: translator.translate,
	            M: 'mjesec',
	            MM: translator.translate,
	            y: 'godinu',
	            yy: translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return me;
	});
	//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : macedonian (mk)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var mk = moment.defineLocale('mk', {
	        months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
	        weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
	        weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'D.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[Денес во] LT',
	            nextDay: '[Утре во] LT',
	            nextWeek: 'dddd [во] LT',
	            lastDay: '[Вчера во] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 6:
	                        return '[Во изминатата] dddd [во] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[Во изминатиот] dddd [во] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'после %s',
	            past: 'пред %s',
	            s: 'неколку секунди',
	            m: 'минута',
	            mm: '%d минути',
	            h: 'час',
	            hh: '%d часа',
	            d: 'ден',
	            dd: '%d дена',
	            M: 'месец',
	            MM: '%d месеци',
	            y: 'година',
	            yy: '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal: function ordinal(number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return mk;
	});
	//! author : Borislav Mickov : https://github.com/B0k0

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : malayalam (ml)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ml = moment.defineLocale('ml', {
	        months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
	        monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
	        weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
	        weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
	        weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm -നു',
	            LTS: 'A h:mm:ss -നു',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm -നു',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
	        },
	        calendar: {
	            sameDay: '[ഇന്ന്] LT',
	            nextDay: '[നാളെ] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[ഇന്നലെ] LT',
	            lastWeek: '[കഴിഞ്ഞ] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s കഴിഞ്ഞ്',
	            past: '%s മുൻപ്',
	            s: 'അൽപ നിമിഷങ്ങൾ',
	            m: 'ഒരു മിനിറ്റ്',
	            mm: '%d മിനിറ്റ്',
	            h: 'ഒരു മണിക്കൂർ',
	            hh: '%d മണിക്കൂർ',
	            d: 'ഒരു ദിവസം',
	            dd: '%d ദിവസം',
	            M: 'ഒരു മാസം',
	            MM: '%d മാസം',
	            y: 'ഒരു വർഷം',
	            yy: '%d വർഷം'
	        },
	        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
	        isPM: function isPM(input) {
	            return (/^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'രാത്രി';
	            } else if (hour < 12) {
	                return 'രാവിലെ';
	            } else if (hour < 17) {
	                return 'ഉച്ച കഴിഞ്ഞ്';
	            } else if (hour < 20) {
	                return 'വൈകുന്നേരം';
	            } else {
	                return 'രാത്രി';
	            }
	        }
	    });

	    return ml;
	});
	//! author : Floyd Pink : https://github.com/floydpink

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Marathi (mr)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	        numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    var mr = moment.defineLocale('mr', {
	        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
	        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
	        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat: {
	            LT: 'A h:mm वाजता',
	            LTS: 'A h:mm:ss वाजता',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, A h:mm वाजता',
	            LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
	        },
	        calendar: {
	            sameDay: '[आज] LT',
	            nextDay: '[उद्या] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[काल] LT',
	            lastWeek: '[मागील] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s नंतर',
	            past: '%s पूर्वी',
	            s: 'सेकंद',
	            m: 'एक मिनिट',
	            mm: '%d मिनिटे',
	            h: 'एक तास',
	            hh: '%d तास',
	            d: 'एक दिवस',
	            dd: '%d दिवस',
	            M: 'एक महिना',
	            MM: '%d महिने',
	            y: 'एक वर्ष',
	            yy: '%d वर्षे'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात्री') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सकाळी') {
	                return hour;
	            } else if (meridiem === 'दुपारी') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'सायंकाळी') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात्री';
	            } else if (hour < 10) {
	                return 'सकाळी';
	            } else if (hour < 17) {
	                return 'दुपारी';
	            } else if (hour < 20) {
	                return 'सायंकाळी';
	            } else {
	                return 'रात्री';
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return mr;
	});
	//! author : Harshad Kale : https://github.com/kalehv

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bahasa Malaysia (ms-MY)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ms = moment.defineLocale('ms', {
	        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar: {
	            sameDay: '[Hari ini pukul] LT',
	            nextDay: '[Esok pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kelmarin pukul] LT',
	            lastWeek: 'dddd [lepas pukul] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dalam %s',
	            past: '%s yang lepas',
	            s: 'beberapa saat',
	            m: 'seminit',
	            mm: '%d minit',
	            h: 'sejam',
	            hh: '%d jam',
	            d: 'sehari',
	            dd: '%d hari',
	            M: 'sebulan',
	            MM: '%d bulan',
	            y: 'setahun',
	            yy: '%d tahun'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ms;
	});
	//! author : Weldan Jamili : https://github.com/weldan

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bahasa Malaysia (ms-MY)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ms_my = moment.defineLocale('ms-my', {
	        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'HH.mm.ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY [pukul] HH.mm',
	            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar: {
	            sameDay: '[Hari ini pukul] LT',
	            nextDay: '[Esok pukul] LT',
	            nextWeek: 'dddd [pukul] LT',
	            lastDay: '[Kelmarin pukul] LT',
	            lastWeek: 'dddd [lepas pukul] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dalam %s',
	            past: '%s yang lepas',
	            s: 'beberapa saat',
	            m: 'seminit',
	            mm: '%d minit',
	            h: 'sejam',
	            hh: '%d jam',
	            d: 'sehari',
	            dd: '%d hari',
	            M: 'sebulan',
	            MM: '%d bulan',
	            y: 'setahun',
	            yy: '%d tahun'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ms_my;
	});
	//! author : Weldan Jamili : https://github.com/weldan

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Burmese (my)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '၁',
	        '2': '၂',
	        '3': '၃',
	        '4': '၄',
	        '5': '၅',
	        '6': '၆',
	        '7': '၇',
	        '8': '၈',
	        '9': '၉',
	        '0': '၀'
	    },
	        numberMap = {
	        '၁': '1',
	        '၂': '2',
	        '၃': '3',
	        '၄': '4',
	        '၅': '5',
	        '၆': '6',
	        '၇': '7',
	        '၈': '8',
	        '၉': '9',
	        '၀': '0'
	    };

	    var my = moment.defineLocale('my', {
	        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
	        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
	        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
	        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ယနေ.] LT [မှာ]',
	            nextDay: '[မနက်ဖြန်] LT [မှာ]',
	            nextWeek: 'dddd LT [မှာ]',
	            lastDay: '[မနေ.က] LT [မှာ]',
	            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'လာမည့် %s မှာ',
	            past: 'လွန်ခဲ့သော %s က',
	            s: 'စက္ကန်.အနည်းငယ်',
	            m: 'တစ်မိနစ်',
	            mm: '%d မိနစ်',
	            h: 'တစ်နာရီ',
	            hh: '%d နာရီ',
	            d: 'တစ်ရက်',
	            dd: '%d ရက်',
	            M: 'တစ်လ',
	            MM: '%d လ',
	            y: 'တစ်နှစ်',
	            yy: '%d နှစ်'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return my;
	});
	//! author : Squar team, mysquar.com

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : norwegian bokmål (nb)
	//! authors : Espen Hovlandsdal : https://github.com/rexxars
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var nb = moment.defineLocale('nb', {
	        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort: 'søn_man_tirs_ons_tors_fre_lør'.split('_'),
	        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat: {
	            LT: 'H.mm',
	            LTS: 'H.mm.ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY [kl.] H.mm',
	            LLLL: 'dddd D. MMMM YYYY [kl.] H.mm'
	        },
	        calendar: {
	            sameDay: '[i dag kl.] LT',
	            nextDay: '[i morgen kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[i går kl.] LT',
	            lastWeek: '[forrige] dddd [kl.] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: 'for %s siden',
	            s: 'noen sekunder',
	            m: 'ett minutt',
	            mm: '%d minutter',
	            h: 'en time',
	            hh: '%d timer',
	            d: 'en dag',
	            dd: '%d dager',
	            M: 'en måned',
	            MM: '%d måneder',
	            y: 'ett år',
	            yy: '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return nb;
	});
	//!           Sigurd Gartmann : https://github.com/sigurdga

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : nepali/nepalese
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	        numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    var ne = moment.defineLocale('ne', {
	        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
	        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
	        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
	        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
	        weekdaysMin: 'आइ._सो._मङ्_बु._बि._शु._श.'.split('_'),
	        longDateFormat: {
	            LT: 'Aको h:mm बजे',
	            LTS: 'Aको h:mm:ss बजे',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, Aको h:mm बजे',
	            LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
	        },
	        preparse: function preparse(string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function postformat(string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'राती') {
	                return hour < 3 ? hour : hour + 12;
	            } else if (meridiem === 'बिहान') {
	                return hour;
	            } else if (meridiem === 'दिउँसो') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'बेलुका' || meridiem === 'साँझ') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 3) {
	                return 'राती';
	            } else if (hour < 10) {
	                return 'बिहान';
	            } else if (hour < 15) {
	                return 'दिउँसो';
	            } else if (hour < 18) {
	                return 'बेलुका';
	            } else if (hour < 20) {
	                return 'साँझ';
	            } else {
	                return 'राती';
	            }
	        },
	        calendar: {
	            sameDay: '[आज] LT',
	            nextDay: '[भोली] LT',
	            nextWeek: '[आउँदो] dddd[,] LT',
	            lastDay: '[हिजो] LT',
	            lastWeek: '[गएको] dddd[,] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sमा',
	            past: '%s अगाडी',
	            s: 'केही समय',
	            m: 'एक मिनेट',
	            mm: '%d मिनेट',
	            h: 'एक घण्टा',
	            hh: '%d घण्टा',
	            d: 'एक दिन',
	            dd: '%d दिन',
	            M: 'एक महिना',
	            MM: '%d महिना',
	            y: 'एक बर्ष',
	            yy: '%d बर्ष'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ne;
	});
	//! author : suvash : https://github.com/suvash

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : dutch (nl)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

	    var nl = moment.defineLocale('nl', {
	        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
	        monthsShort: function monthsShort(m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
	        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
	        weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD-MM-YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[vandaag om] LT',
	            nextDay: '[morgen om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[gisteren om] LT',
	            lastWeek: '[afgelopen] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'over %s',
	            past: '%s geleden',
	            s: 'een paar seconden',
	            m: 'één minuut',
	            mm: '%d minuten',
	            h: 'één uur',
	            hh: '%d uur',
	            d: 'één dag',
	            dd: '%d dagen',
	            M: 'één maand',
	            MM: '%d maanden',
	            y: 'één jaar',
	            yy: '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal: function ordinal(number) {
	            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return nl;
	});
	//! author : Joris Röling : https://github.com/jjupiter

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : norwegian nynorsk (nn)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var nn = moment.defineLocale('nn', {
	        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	        weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
	        weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[I dag klokka] LT',
	            nextDay: '[I morgon klokka] LT',
	            nextWeek: 'dddd [klokka] LT',
	            lastDay: '[I går klokka] LT',
	            lastWeek: '[Føregåande] dddd [klokka] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: 'for %s sidan',
	            s: 'nokre sekund',
	            m: 'eit minutt',
	            mm: '%d minutt',
	            h: 'ein time',
	            hh: '%d timar',
	            d: 'ein dag',
	            dd: '%d dagar',
	            M: 'ein månad',
	            MM: '%d månader',
	            y: 'eit år',
	            yy: '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return nn;
	});
	//! author : https://github.com/mechuwind

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : polish (pl)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
	        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
	    function plural(n) {
	        return n % 10 < 5 && n % 10 > 1 && ~ ~(n / 10) % 10 !== 1;
	    }
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'minuta' : 'minutę';
	            case 'mm':
	                return result + (plural(number) ? 'minuty' : 'minut');
	            case 'h':
	                return withoutSuffix ? 'godzina' : 'godzinę';
	            case 'hh':
	                return result + (plural(number) ? 'godziny' : 'godzin');
	            case 'MM':
	                return result + (plural(number) ? 'miesiące' : 'miesięcy');
	            case 'yy':
	                return result + (plural(number) ? 'lata' : 'lat');
	        }
	    }

	    var pl = moment.defineLocale('pl', {
	        months: function months(momentToFormat, format) {
	            if (format === '') {
	                // Hack: if format empty we know this is used to generate
	                // RegExp by moment. Give then back both valid forms of months
	                // in RegExp ready format.
	                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
	            } else if (/D MMMM/.test(format)) {
	                return monthsSubjective[momentToFormat.month()];
	            } else {
	                return monthsNominative[momentToFormat.month()];
	            }
	        },
	        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
	        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
	        weekdaysShort: 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
	        weekdaysMin: 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Dziś o] LT',
	            nextDay: '[Jutro o] LT',
	            nextWeek: '[W] dddd [o] LT',
	            lastDay: '[Wczoraj o] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[W zeszłą niedzielę o] LT';
	                    case 3:
	                        return '[W zeszłą środę o] LT';
	                    case 6:
	                        return '[W zeszłą sobotę o] LT';
	                    default:
	                        return '[W zeszły] dddd [o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: '%s temu',
	            s: 'kilka sekund',
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: '1 dzień',
	            dd: '%d dni',
	            M: 'miesiąc',
	            MM: translate,
	            y: 'rok',
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return pl;
	});
	//! author : Rafal Hirsz : https://github.com/evoL

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : portuguese (pt)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var pt = moment.defineLocale('pt', {
	        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
	        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY HH:mm',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function lastWeek() {
	                return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' : // Saturday + Sunday
	                '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'em %s',
	            past: 'há %s',
	            s: 'segundos',
	            m: 'um minuto',
	            mm: '%d minutos',
	            h: 'uma hora',
	            hh: '%d horas',
	            d: 'um dia',
	            dd: '%d dias',
	            M: 'um mês',
	            MM: '%d meses',
	            y: 'um ano',
	            yy: '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return pt;
	});
	//! author : Jefferson : https://github.com/jalex79

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : brazilian portuguese (pt-br)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var pt_br = moment.defineLocale('pt-br', {
	        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
	        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D [de] MMMM [de] YYYY',
	            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
	            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
	        },
	        calendar: {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function lastWeek() {
	                return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' : // Saturday + Sunday
	                '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'em %s',
	            past: '%s atrás',
	            s: 'poucos segundos',
	            m: 'um minuto',
	            mm: '%d minutos',
	            h: 'uma hora',
	            hh: '%d horas',
	            d: 'um dia',
	            dd: '%d dias',
	            M: 'um mês',
	            MM: '%d meses',
	            y: 'um ano',
	            yy: '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: '%dº'
	    });

	    return pt_br;
	});
	//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : romanian (ro)
	//! author : Vlad Gurdiga : https://github.com/gurdiga
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'minute',
	            'hh': 'ore',
	            'dd': 'zile',
	            'MM': 'luni',
	            'yy': 'ani'
	        },
	            separator = ' ';
	        if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
	            separator = ' de ';
	        }
	        return number + separator + format[key];
	    }

	    var ro = moment.defineLocale('ro', {
	        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
	        monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
	        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
	        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
	        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY H:mm',
	            LLLL: 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[azi la] LT',
	            nextDay: '[mâine la] LT',
	            nextWeek: 'dddd [la] LT',
	            lastDay: '[ieri la] LT',
	            lastWeek: '[fosta] dddd [la] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'peste %s',
	            past: '%s în urmă',
	            s: 'câteva secunde',
	            m: 'un minut',
	            mm: relativeTimeWithPlural,
	            h: 'o oră',
	            hh: relativeTimeWithPlural,
	            d: 'o zi',
	            dd: relativeTimeWithPlural,
	            M: 'o lună',
	            MM: relativeTimeWithPlural,
	            y: 'un an',
	            yy: relativeTimeWithPlural
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ro;
	});
	//! author : Valentin Agachi : https://github.com/avaly

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : russian (ru)
	//! author : Viktorminator : https://github.com/Viktorminator
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
	            'hh': 'час_часа_часов',
	            'dd': 'день_дня_дней',
	            'MM': 'месяц_месяца_месяцев',
	            'yy': 'год_года_лет'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'минута' : 'минуту';
	        } else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	            'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
	        },
	            nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
	        return months[nounCase][m.month()];
	    }
	    function monthsShortCaseReplace(m, format) {
	        var monthsShort = {
	            'nominative': 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
	            'accusative': 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')
	        },
	            nounCase = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(format) ? 'accusative' : 'nominative';
	        return monthsShort[nounCase][m.month()];
	    }
	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
	            'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
	        },
	            nounCase = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(format) ? 'accusative' : 'nominative';
	        return weekdays[nounCase][m.day()];
	    }

	    var ru = moment.defineLocale('ru', {
	        months: monthsCaseReplace,
	        monthsShort: monthsShortCaseReplace,
	        weekdays: weekdaysCaseReplace,
	        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY г.',
	            LLL: 'D MMMM YYYY г., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY г., HH:mm'
	        },
	        calendar: {
	            sameDay: '[Сегодня в] LT',
	            nextDay: '[Завтра в] LT',
	            lastDay: '[Вчера в] LT',
	            nextWeek: function nextWeek() {
	                return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
	            },
	            lastWeek: function lastWeek(now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                        case 0:
	                            return '[В прошлое] dddd [в] LT';
	                        case 1:
	                        case 2:
	                        case 4:
	                            return '[В прошлый] dddd [в] LT';
	                        case 3:
	                        case 5:
	                        case 6:
	                            return '[В прошлую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'через %s',
	            past: '%s назад',
	            s: 'несколько секунд',
	            m: relativeTimeWithPlural,
	            mm: relativeTimeWithPlural,
	            h: 'час',
	            hh: relativeTimeWithPlural,
	            d: 'день',
	            dd: relativeTimeWithPlural,
	            M: 'месяц',
	            MM: relativeTimeWithPlural,
	            y: 'год',
	            yy: relativeTimeWithPlural
	        },
	        meridiemParse: /ночи|утра|дня|вечера/i,
	        isPM: function isPM(input) {
	            return (/^(дня|вечера)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночи';
	            } else if (hour < 12) {
	                return 'утра';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечера';
	            }
	        },
	        ordinalParse: /\d{1,2}-(й|го|я)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                    return number + '-й';
	                case 'D':
	                    return number + '-го';
	                case 'w':
	                case 'W':
	                    return number + '-я';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ru;
	});
	//! Author : Menelion Elensúle : https://github.com/Oire

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Sinhalese (si)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var si = moment.defineLocale('si', {
	        months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
	        monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
	        weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
	        weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
	        weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
	        longDateFormat: {
	            LT: 'a h:mm',
	            LTS: 'a h:mm:ss',
	            L: 'YYYY/MM/DD',
	            LL: 'YYYY MMMM D',
	            LLL: 'YYYY MMMM D, a h:mm',
	            LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
	        },
	        calendar: {
	            sameDay: '[අද] LT[ට]',
	            nextDay: '[හෙට] LT[ට]',
	            nextWeek: 'dddd LT[ට]',
	            lastDay: '[ඊයේ] LT[ට]',
	            lastWeek: '[පසුගිය] dddd LT[ට]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sකින්',
	            past: '%sකට පෙර',
	            s: 'තත්පර කිහිපය',
	            m: 'මිනිත්තුව',
	            mm: 'මිනිත්තු %d',
	            h: 'පැය',
	            hh: 'පැය %d',
	            d: 'දිනය',
	            dd: 'දින %d',
	            M: 'මාසය',
	            MM: 'මාස %d',
	            y: 'වසර',
	            yy: 'වසර %d'
	        },
	        ordinalParse: /\d{1,2} වැනි/,
	        ordinal: function ordinal(number) {
	            return number + ' වැනි';
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'ප.ව.' : 'පස් වරු';
	            } else {
	                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
	            }
	        }
	    });

	    return si;
	});
	//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : slovak (sk)
	//! author : Martin Minka : https://github.com/k2s
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
	        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
	    function plural(n) {
	        return n > 1 && n < 5;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                // a few seconds / in a few seconds / a few seconds ago
	                return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';
	            case 'm':
	                // a minute / in a minute / a minute ago
	                return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';
	            case 'mm':
	                // 9 minutes / in 9 minutes / 9 minutes ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'minúty' : 'minút');
	                } else {
	                    return result + 'minútami';
	                }
	                break;
	            case 'h':
	                // an hour / in an hour / an hour ago
	                return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
	            case 'hh':
	                // 9 hours / in 9 hours / 9 hours ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'hodiny' : 'hodín');
	                } else {
	                    return result + 'hodinami';
	                }
	                break;
	            case 'd':
	                // a day / in a day / a day ago
	                return withoutSuffix || isFuture ? 'deň' : 'dňom';
	            case 'dd':
	                // 9 days / in 9 days / 9 days ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'dni' : 'dní');
	                } else {
	                    return result + 'dňami';
	                }
	                break;
	            case 'M':
	                // a month / in a month / a month ago
	                return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';
	            case 'MM':
	                // 9 months / in 9 months / 9 months ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'mesiace' : 'mesiacov');
	                } else {
	                    return result + 'mesiacmi';
	                }
	                break;
	            case 'y':
	                // a year / in a year / a year ago
	                return withoutSuffix || isFuture ? 'rok' : 'rokom';
	            case 'yy':
	                // 9 years / in 9 years / 9 years ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'roky' : 'rokov');
	                } else {
	                    return result + 'rokmi';
	                }
	                break;
	        }
	    }

	    var sk = moment.defineLocale('sk', {
	        months: months,
	        monthsShort: monthsShort,
	        monthsParse: (function (months, monthsShort) {
	            var i,
	                _monthsParse = [];
	            for (i = 0; i < 12; i++) {
	                // use custom parser to solve problem with July (červenec)
	                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	            }
	            return _monthsParse;
	        })(months, monthsShort),
	        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
	        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
	        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[dnes o] LT',
	            nextDay: '[zajtra o] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[v nedeľu o] LT';
	                    case 1:
	                    case 2:
	                        return '[v] dddd [o] LT';
	                    case 3:
	                        return '[v stredu o] LT';
	                    case 4:
	                        return '[vo štvrtok o] LT';
	                    case 5:
	                        return '[v piatok o] LT';
	                    case 6:
	                        return '[v sobotu o] LT';
	                }
	            },
	            lastDay: '[včera o] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[minulú nedeľu o] LT';
	                    case 1:
	                    case 2:
	                        return '[minulý] dddd [o] LT';
	                    case 3:
	                        return '[minulú stredu o] LT';
	                    case 4:
	                    case 5:
	                        return '[minulý] dddd [o] LT';
	                    case 6:
	                        return '[minulú sobotu o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'pred %s',
	            s: translate,
	            m: translate,
	            mm: translate,
	            h: translate,
	            hh: translate,
	            d: translate,
	            dd: translate,
	            M: translate,
	            MM: translate,
	            y: translate,
	            yy: translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return sk;
	});
	//! based on work of petrbela : https://github.com/petrbela

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : slovenian (sl)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
	            case 'm':
	                return withoutSuffix ? 'ena minuta' : 'eno minuto';
	            case 'mm':
	                if (number === 1) {
	                    result += withoutSuffix ? 'minuta' : 'minuto';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
	                } else {
	                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'ena ura' : 'eno uro';
	            case 'hh':
	                if (number === 1) {
	                    result += withoutSuffix ? 'ura' : 'uro';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
	                } else {
	                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
	                }
	                return result;
	            case 'd':
	                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
	            case 'dd':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
	                } else {
	                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
	                }
	                return result;
	            case 'M':
	                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
	            case 'MM':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
	                } else {
	                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
	                }
	                return result;
	            case 'y':
	                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
	            case 'yy':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
	                } else {
	                    result += withoutSuffix || isFuture ? 'let' : 'leti';
	                }
	                return result;
	        }
	    }

	    var sl = moment.defineLocale('sl', {
	        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
	        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
	        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
	        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
	        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danes ob] LT',
	            nextDay: '[jutri ob] LT',

	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[v] [nedeljo] [ob] LT';
	                    case 3:
	                        return '[v] [sredo] [ob] LT';
	                    case 6:
	                        return '[v] [soboto] [ob] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[v] dddd [ob] LT';
	                }
	            },
	            lastDay: '[včeraj ob] LT',
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[prejšnjo] [nedeljo] [ob] LT';
	                    case 3:
	                        return '[prejšnjo] [sredo] [ob] LT';
	                    case 6:
	                        return '[prejšnjo] [soboto] [ob] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prejšnji] dddd [ob] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'čez %s',
	            past: 'pred %s',
	            s: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sl;
	});
	//! author : Robert Sedovšek : https://github.com/sedovsek

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Albanian (sq)
	//! author : Flakërim Ismani : https://github.com/flakerimi
	//! author: Menelion Elensúle: https://github.com/Oire (tests)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var sq = moment.defineLocale('sq', {
	        months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
	        monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
	        weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
	        weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
	        weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
	        meridiemParse: /PD|MD/,
	        isPM: function isPM(input) {
	            return input.charAt(0) === 'M';
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            return hours < 12 ? 'PD' : 'MD';
	        },
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Sot në] LT',
	            nextDay: '[Nesër në] LT',
	            nextWeek: 'dddd [në] LT',
	            lastDay: '[Dje në] LT',
	            lastWeek: 'dddd [e kaluar në] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'në %s',
	            past: '%s më parë',
	            s: 'disa sekonda',
	            m: 'një minutë',
	            mm: '%d minuta',
	            h: 'një orë',
	            hh: '%d orë',
	            d: 'një ditë',
	            dd: '%d ditë',
	            M: 'një muaj',
	            MM: '%d muaj',
	            y: 'një vit',
	            yy: '%d vite'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return sq;
	});
	//! author : Oerd Cukalla : https://github.com/oerd (fixes)

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian-latin (sr)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jedne minute'],
	            mm: ['minut', 'minute', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mesec', 'meseca', 'meseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
	            return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
	        },
	        translate: function translate(number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    var sr = moment.defineLocale('sr', {
	        months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
	        monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
	        weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
	        weekdaysShort: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
	        weekdaysMin: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su'],
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedelju] [u] LT';
	                    case 3:
	                        return '[u] [sredu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay: '[juče u] LT',
	            lastWeek: function lastWeek() {
	                var lastWeekDays = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
	                return lastWeekDays[this.day()];
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'za %s',
	            past: 'pre %s',
	            s: 'nekoliko sekundi',
	            m: translator.translate,
	            mm: translator.translate,
	            h: translator.translate,
	            hh: translator.translate,
	            d: 'dan',
	            dd: translator.translate,
	            M: 'mesec',
	            MM: translator.translate,
	            y: 'godinu',
	            yy: translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sr;
	});
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian-cyrillic (sr-cyrl)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var translator = {
	        words: { //Different grammatical cases
	            m: ['један минут', 'једне минуте'],
	            mm: ['минут', 'минуте', 'минута'],
	            h: ['један сат', 'једног сата'],
	            hh: ['сат', 'сата', 'сати'],
	            dd: ['дан', 'дана', 'дана'],
	            MM: ['месец', 'месеца', 'месеци'],
	            yy: ['година', 'године', 'година']
	        },
	        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
	            return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
	        },
	        translate: function translate(number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    var sr_cyrl = moment.defineLocale('sr-cyrl', {
	        months: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
	        monthsShort: ['јан.', 'феб.', 'мар.', 'апр.', 'мај', 'јун', 'јул', 'авг.', 'сеп.', 'окт.', 'нов.', 'дец.'],
	        weekdays: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
	        weekdaysShort: ['нед.', 'пон.', 'уто.', 'сре.', 'чет.', 'пет.', 'суб.'],
	        weekdaysMin: ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су'],
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS: 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[данас у] LT',
	            nextDay: '[сутра у] LT',
	            nextWeek: function nextWeek() {
	                switch (this.day()) {
	                    case 0:
	                        return '[у] [недељу] [у] LT';
	                    case 3:
	                        return '[у] [среду] [у] LT';
	                    case 6:
	                        return '[у] [суботу] [у] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[у] dddd [у] LT';
	                }
	            },
	            lastDay: '[јуче у] LT',
	            lastWeek: function lastWeek() {
	                var lastWeekDays = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT', '[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT', '[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT'];
	                return lastWeekDays[this.day()];
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'за %s',
	            past: 'пре %s',
	            s: 'неколико секунди',
	            m: translator.translate,
	            mm: translator.translate,
	            h: translator.translate,
	            hh: translator.translate,
	            d: 'дан',
	            dd: translator.translate,
	            M: 'месец',
	            MM: translator.translate,
	            y: 'годину',
	            yy: translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sr_cyrl;
	});
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : swedish (sv)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var sv = moment.defineLocale('sv', {
	        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
	        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'YYYY-MM-DD',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Idag] LT',
	            nextDay: '[Imorgon] LT',
	            lastDay: '[Igår] LT',
	            nextWeek: '[På] dddd LT',
	            lastWeek: '[I] dddd[s] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'om %s',
	            past: 'för %s sedan',
	            s: 'några sekunder',
	            m: 'en minut',
	            mm: '%d minuter',
	            h: 'en timme',
	            hh: '%d timmar',
	            d: 'en dag',
	            dd: '%d dagar',
	            M: 'en månad',
	            MM: '%d månader',
	            y: 'ett år',
	            yy: '%d år'
	        },
	        ordinalParse: /\d{1,2}(e|a)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = ~ ~(number % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
	            return number + output;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return sv;
	});
	//! author : Jens Alm : https://github.com/ulmus

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : tamil (ta)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var ta = moment.defineLocale('ta', {
	        months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
	        weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
	        weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY, HH:mm',
	            LLLL: 'dddd, D MMMM YYYY, HH:mm'
	        },
	        calendar: {
	            sameDay: '[இன்று] LT',
	            nextDay: '[நாளை] LT',
	            nextWeek: 'dddd, LT',
	            lastDay: '[நேற்று] LT',
	            lastWeek: '[கடந்த வாரம்] dddd, LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s இல்',
	            past: '%s முன்',
	            s: 'ஒரு சில விநாடிகள்',
	            m: 'ஒரு நிமிடம்',
	            mm: '%d நிமிடங்கள்',
	            h: 'ஒரு மணி நேரம்',
	            hh: '%d மணி நேரம்',
	            d: 'ஒரு நாள்',
	            dd: '%d நாட்கள்',
	            M: 'ஒரு மாதம்',
	            MM: '%d மாதங்கள்',
	            y: 'ஒரு வருடம்',
	            yy: '%d ஆண்டுகள்'
	        },
	        ordinalParse: /\d{1,2}வது/,
	        ordinal: function ordinal(number) {
	            return number + 'வது';
	        },
	        // refer http://ta.wikipedia.org/s/1er1
	        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 2) {
	                return ' யாமம்';
	            } else if (hour < 6) {
	                return ' வைகறை'; // வைகறை
	            } else if (hour < 10) {
	                    return ' காலை'; // காலை
	                } else if (hour < 14) {
	                        return ' நண்பகல்'; // நண்பகல்
	                    } else if (hour < 18) {
	                            return ' எற்பாடு'; // எற்பாடு
	                        } else if (hour < 22) {
	                                return ' மாலை'; // மாலை
	                            } else {
	                                    return ' யாமம்';
	                                }
	        },
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'யாமம்') {
	                return hour < 2 ? hour : hour + 12;
	            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
	                return hour;
	            } else if (meridiem === 'நண்பகல்') {
	                return hour >= 10 ? hour : hour + 12;
	            } else {
	                return hour + 12;
	            }
	        },
	        week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ta;
	});
	//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : thai (th)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var th = moment.defineLocale('th', {
	        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
	        monthsShort: 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
	        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
	        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
	        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
	        longDateFormat: {
	            LT: 'H นาฬิกา m นาที',
	            LTS: 'H นาฬิกา m นาที s วินาที',
	            L: 'YYYY/MM/DD',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY เวลา H นาฬิกา m นาที',
	            LLLL: 'วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที'
	        },
	        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
	        isPM: function isPM(input) {
	            return input === 'หลังเที่ยง';
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ก่อนเที่ยง';
	            } else {
	                return 'หลังเที่ยง';
	            }
	        },
	        calendar: {
	            sameDay: '[วันนี้ เวลา] LT',
	            nextDay: '[พรุ่งนี้ เวลา] LT',
	            nextWeek: 'dddd[หน้า เวลา] LT',
	            lastDay: '[เมื่อวานนี้ เวลา] LT',
	            lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'อีก %s',
	            past: '%sที่แล้ว',
	            s: 'ไม่กี่วินาที',
	            m: '1 นาที',
	            mm: '%d นาที',
	            h: '1 ชั่วโมง',
	            hh: '%d ชั่วโมง',
	            d: '1 วัน',
	            dd: '%d วัน',
	            M: '1 เดือน',
	            MM: '%d เดือน',
	            y: '1 ปี',
	            yy: '%d ปี'
	        }
	    });

	    return th;
	});
	//! author : Kridsada Thanabulpong : https://github.com/sirn

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tagalog/Filipino (tl-ph)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var tl_ph = moment.defineLocale('tl-ph', {
	        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
	        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
	        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'MM/D/YYYY',
	            LL: 'MMMM D, YYYY',
	            LLL: 'MMMM D, YYYY HH:mm',
	            LLLL: 'dddd, MMMM DD, YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Ngayon sa] LT',
	            nextDay: '[Bukas sa] LT',
	            nextWeek: 'dddd [sa] LT',
	            lastDay: '[Kahapon sa] LT',
	            lastWeek: 'dddd [huling linggo] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'sa loob ng %s',
	            past: '%s ang nakalipas',
	            s: 'ilang segundo',
	            m: 'isang minuto',
	            mm: '%d minuto',
	            h: 'isang oras',
	            hh: '%d oras',
	            d: 'isang araw',
	            dd: '%d araw',
	            M: 'isang buwan',
	            MM: '%d buwan',
	            y: 'isang taon',
	            yy: '%d taon'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal: function ordinal(number) {
	            return number;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return tl_ph;
	});
	//! author : Dan Hagman

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : turkish (tr)
	//! authors : Erhan Gundogan : https://github.com/erhangundogan,
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var suffixes = {
	        1: '\'inci',
	        5: '\'inci',
	        8: '\'inci',
	        70: '\'inci',
	        80: '\'inci',
	        2: '\'nci',
	        7: '\'nci',
	        20: '\'nci',
	        50: '\'nci',
	        3: '\'üncü',
	        4: '\'üncü',
	        100: '\'üncü',
	        6: '\'ncı',
	        9: '\'uncu',
	        10: '\'uncu',
	        30: '\'uncu',
	        60: '\'ıncı',
	        90: '\'ıncı'
	    };

	    var tr = moment.defineLocale('tr', {
	        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
	        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
	        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
	        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
	        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[bugün saat] LT',
	            nextDay: '[yarın saat] LT',
	            nextWeek: '[haftaya] dddd [saat] LT',
	            lastDay: '[dün] LT',
	            lastWeek: '[geçen hafta] dddd [saat] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s sonra',
	            past: '%s önce',
	            s: 'birkaç saniye',
	            m: 'bir dakika',
	            mm: '%d dakika',
	            h: 'bir saat',
	            hh: '%d saat',
	            d: 'bir gün',
	            dd: '%d gün',
	            M: 'bir ay',
	            MM: '%d ay',
	            y: 'bir yıl',
	            yy: '%d yıl'
	        },
	        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
	        ordinal: function ordinal(number) {
	            if (number === 0) {
	                // special case for zero
	                return number + '\'ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return tr;
	});
	//!           Burak Yiğit Kaya: https://github.com/BYK

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : talossan (tzl)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var tzl = moment.defineLocale('tzl', {
	        months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
	        monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
	        weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
	        weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
	        weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
	        longDateFormat: {
	            LT: 'HH.mm',
	            LTS: 'LT.ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM [dallas] YYYY',
	            LLL: 'D. MMMM [dallas] YYYY LT',
	            LLLL: 'dddd, [li] D. MMMM [dallas] YYYY LT'
	        },
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'd\'o' : 'D\'O';
	            } else {
	                return isLower ? 'd\'a' : 'D\'A';
	            }
	        },
	        calendar: {
	            sameDay: '[oxhi à] LT',
	            nextDay: '[demà à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[ieiri à] LT',
	            lastWeek: '[sür el] dddd [lasteu à] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'osprei %s',
	            past: 'ja%s',
	            s: processRelativeTime,
	            m: processRelativeTime,
	            mm: processRelativeTime,
	            h: processRelativeTime,
	            hh: processRelativeTime,
	            d: processRelativeTime,
	            dd: processRelativeTime,
	            M: processRelativeTime,
	            MM: processRelativeTime,
	            y: processRelativeTime,
	            yy: processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's': ['viensas secunds', '\'iensas secunds'],
	            'm': ['\'n míut', '\'iens míut'],
	            'mm': [number + ' míuts', ' ' + number + ' míuts'],
	            'h': ['\'n þora', '\'iensa þora'],
	            'hh': [number + ' þoras', ' ' + number + ' þoras'],
	            'd': ['\'n ziua', '\'iensa ziua'],
	            'dd': [number + ' ziuas', ' ' + number + ' ziuas'],
	            'M': ['\'n mes', '\'iens mes'],
	            'MM': [number + ' mesen', ' ' + number + ' mesen'],
	            'y': ['\'n ar', '\'iens ar'],
	            'yy': [number + ' ars', ' ' + number + ' ars']
	        };
	        return isFuture ? format[key][0] : withoutSuffix ? format[key][0] : format[key][1].trim();
	    }

	    return tzl;
	});
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v with the help of Iustì Canun

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Morocco Central Atlas Tamaziɣt (tzm)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var tzm = moment.defineLocale('tzm', {
	        months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
	            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
	            nextWeek: 'dddd [ⴴ] LT',
	            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
	            lastWeek: 'dddd [ⴴ] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
	            past: 'ⵢⴰⵏ %s',
	            s: 'ⵉⵎⵉⴽ',
	            m: 'ⵎⵉⵏⵓⴺ',
	            mm: '%d ⵎⵉⵏⵓⴺ',
	            h: 'ⵙⴰⵄⴰ',
	            hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
	            d: 'ⴰⵙⵙ',
	            dd: '%d oⵙⵙⴰⵏ',
	            M: 'ⴰⵢoⵓⵔ',
	            MM: '%d ⵉⵢⵢⵉⵔⵏ',
	            y: 'ⴰⵙⴳⴰⵙ',
	            yy: '%d ⵉⵙⴳⴰⵙⵏ'
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return tzm;
	});
	//! author : Abdel Said : https://github.com/abdelsaid

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Morocco Central Atlas Tamaziɣt in Latin (tzm-latn)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var tzm_latn = moment.defineLocale('tzm-latn', {
	        months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[asdkh g] LT',
	            nextDay: '[aska g] LT',
	            nextWeek: 'dddd [g] LT',
	            lastDay: '[assant g] LT',
	            lastWeek: 'dddd [g] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'dadkh s yan %s',
	            past: 'yan %s',
	            s: 'imik',
	            m: 'minuḍ',
	            mm: '%d minuḍ',
	            h: 'saɛa',
	            hh: '%d tassaɛin',
	            d: 'ass',
	            dd: '%d ossan',
	            M: 'ayowr',
	            MM: '%d iyyirn',
	            y: 'asgas',
	            yy: '%d isgasn'
	        },
	        week: {
	            dow: 6, // Saturday is the first day of the week.
	            doy: 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return tzm_latn;
	});
	//! author : Abdel Said : https://github.com/abdelsaid

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : ukrainian (uk)
	//! author : zemlanin : https://github.com/zemlanin
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'хвилина_хвилини_хвилин',
	            'hh': 'година_години_годин',
	            'dd': 'день_дні_днів',
	            'MM': 'місяць_місяці_місяців',
	            'yy': 'рік_роки_років'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвилина' : 'хвилину';
	        } else if (key === 'h') {
	            return withoutSuffix ? 'година' : 'годину';
	        } else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    function monthsCaseReplace(m, format) {
	        var months = {
	            'nominative': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
	            'accusative': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
	        },
	            nounCase = /D[oD]? *MMMM?/.test(format) ? 'accusative' : 'nominative';
	        return months[nounCase][m.month()];
	    }
	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
	            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
	            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
	        },
	            nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? 'genitive' : 'nominative';
	        return weekdays[nounCase][m.day()];
	    }
	    function processHoursFunction(str) {
	        return function () {
	            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
	        };
	    }

	    var uk = moment.defineLocale('uk', {
	        months: monthsCaseReplace,
	        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
	        weekdays: weekdaysCaseReplace,
	        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD.MM.YYYY',
	            LL: 'D MMMM YYYY р.',
	            LLL: 'D MMMM YYYY р., HH:mm',
	            LLLL: 'dddd, D MMMM YYYY р., HH:mm'
	        },
	        calendar: {
	            sameDay: processHoursFunction('[Сьогодні '),
	            nextDay: processHoursFunction('[Завтра '),
	            lastDay: processHoursFunction('[Вчора '),
	            nextWeek: processHoursFunction('[У] dddd ['),
	            lastWeek: function lastWeek() {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 5:
	                    case 6:
	                        return processHoursFunction('[Минулої] dddd [').call(this);
	                    case 1:
	                    case 2:
	                    case 4:
	                        return processHoursFunction('[Минулого] dddd [').call(this);
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'за %s',
	            past: '%s тому',
	            s: 'декілька секунд',
	            m: relativeTimeWithPlural,
	            mm: relativeTimeWithPlural,
	            h: 'годину',
	            hh: relativeTimeWithPlural,
	            d: 'день',
	            dd: relativeTimeWithPlural,
	            M: 'місяць',
	            MM: relativeTimeWithPlural,
	            y: 'рік',
	            yy: relativeTimeWithPlural
	        },
	        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
	        meridiemParse: /ночі|ранку|дня|вечора/,
	        isPM: function isPM(input) {
	            return (/^(дня|вечора)$/.test(input)
	            );
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночі';
	            } else if (hour < 12) {
	                return 'ранку';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечора';
	            }
	        },
	        ordinalParse: /\d{1,2}-(й|го)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                case 'w':
	                case 'W':
	                    return number + '-й';
	                case 'D':
	                    return number + '-го';
	                default:
	                    return number;
	            }
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return uk;
	});
	//! Author : Menelion Elensúle : https://github.com/Oire

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : uzbek (uz)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var uz = moment.defineLocale('uz', {
	        months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
	        weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
	        weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'D MMMM YYYY, dddd HH:mm'
	        },
	        calendar: {
	            sameDay: '[Бугун соат] LT [да]',
	            nextDay: '[Эртага] LT [да]',
	            nextWeek: 'dddd [куни соат] LT [да]',
	            lastDay: '[Кеча соат] LT [да]',
	            lastWeek: '[Утган] dddd [куни соат] LT [да]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'Якин %s ичида',
	            past: 'Бир неча %s олдин',
	            s: 'фурсат',
	            m: 'бир дакика',
	            mm: '%d дакика',
	            h: 'бир соат',
	            hh: '%d соат',
	            d: 'бир кун',
	            dd: '%d кун',
	            M: 'бир ой',
	            MM: '%d ой',
	            y: 'бир йил',
	            yy: '%d йил'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 7 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return uz;
	});
	//! author : Sardor Muminov : https://github.com/muminoff

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : vietnamese (vi)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var vi = moment.defineLocale('vi', {
	        months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
	        monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
	        weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
	        weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM [năm] YYYY',
	            LLL: 'D MMMM [năm] YYYY HH:mm',
	            LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
	            l: 'DD/M/YYYY',
	            ll: 'D MMM YYYY',
	            lll: 'D MMM YYYY HH:mm',
	            llll: 'ddd, D MMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Hôm nay lúc] LT',
	            nextDay: '[Ngày mai lúc] LT',
	            nextWeek: 'dddd [tuần tới lúc] LT',
	            lastDay: '[Hôm qua lúc] LT',
	            lastWeek: 'dddd [tuần rồi lúc] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%s tới',
	            past: '%s trước',
	            s: 'vài giây',
	            m: 'một phút',
	            mm: '%d phút',
	            h: 'một giờ',
	            hh: '%d giờ',
	            d: 'một ngày',
	            dd: '%d ngày',
	            M: 'một tháng',
	            MM: '%d tháng',
	            y: 'một năm',
	            yy: '%d năm'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal: function ordinal(number) {
	            return number;
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return vi;
	});
	//! author : Bang Nguyen : https://github.com/bangnk

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : chinese (zh-cn)
	//! author : suupic : https://github.com/suupic
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var zh_cn = moment.defineLocale('zh-cn', {
	        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat: {
	            LT: 'Ah点mm分',
	            LTS: 'Ah点m分s秒',
	            L: 'YYYY-MM-DD',
	            LL: 'YYYY年MMMD日',
	            LLL: 'YYYY年MMMD日Ah点mm分',
	            LLLL: 'YYYY年MMMD日ddddAh点mm分',
	            l: 'YYYY-MM-DD',
	            ll: 'YYYY年MMMD日',
	            lll: 'YYYY年MMMD日Ah点mm分',
	            llll: 'YYYY年MMMD日ddddAh点mm分'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            } else {
	                // '中午'
	                return hour >= 11 ? hour : hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar: {
	            sameDay: function sameDay() {
	                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
	            },
	            nextDay: function nextDay() {
	                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
	            },
	            lastDay: function lastDay() {
	                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
	            },
	            nextWeek: function nextWeek() {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            lastWeek: function lastWeek() {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            sameElse: 'LL'
	        },
	        ordinalParse: /\d{1,2}(日|月|周)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                case 'M':
	                    return number + '月';
	                case 'w':
	                case 'W':
	                    return number + '周';
	                default:
	                    return number;
	            }
	        },
	        relativeTime: {
	            future: '%s内',
	            past: '%s前',
	            s: '几秒',
	            m: '1 分钟',
	            mm: '%d 分钟',
	            h: '1 小时',
	            hh: '%d 小时',
	            d: '1 天',
	            dd: '%d 天',
	            M: '1 个月',
	            MM: '%d 个月',
	            y: '1 年',
	            yy: '%d 年'
	        },
	        week: {
	            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return zh_cn;
	});
	//! author : Zeno Zeng : https://github.com/zenozeng

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : traditional chinese (zh-tw)
	'use strict';

	(function (global, factory) {
	     true ? factory(__webpack_require__(111)) : typeof define === 'function' && define.amd ? define(['moment'], factory) : factory(global.moment);
	})(undefined, function (moment) {
	    'use strict';

	    var zh_tw = moment.defineLocale('zh-tw', {
	        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat: {
	            LT: 'Ah點mm分',
	            LTS: 'Ah點m分s秒',
	            L: 'YYYY年MMMD日',
	            LL: 'YYYY年MMMD日',
	            LLL: 'YYYY年MMMD日Ah點mm分',
	            LLLL: 'YYYY年MMMD日ddddAh點mm分',
	            l: 'YYYY年MMMD日',
	            ll: 'YYYY年MMMD日',
	            lll: 'YYYY年MMMD日Ah點mm分',
	            llll: 'YYYY年MMMD日ddddAh點mm分'
	        },
	        meridiemParse: /早上|上午|中午|下午|晚上/,
	        meridiemHour: function meridiemHour(hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem: function meridiem(hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar: {
	            sameDay: '[今天]LT',
	            nextDay: '[明天]LT',
	            nextWeek: '[下]ddddLT',
	            lastDay: '[昨天]LT',
	            lastWeek: '[上]ddddLT',
	            sameElse: 'L'
	        },
	        ordinalParse: /\d{1,2}(日|月|週)/,
	        ordinal: function ordinal(number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                case 'M':
	                    return number + '月';
	                case 'w':
	                case 'W':
	                    return number + '週';
	                default:
	                    return number;
	            }
	        },
	        relativeTime: {
	            future: '%s內',
	            past: '%s前',
	            s: '幾秒',
	            m: '一分鐘',
	            mm: '%d分鐘',
	            h: '一小時',
	            hh: '%d小時',
	            d: '一天',
	            dd: '%d天',
	            M: '一個月',
	            MM: '%d個月',
	            y: '一年',
	            yy: '%d年'
	        }
	    });

	    return zh_tw;
	});
	//! author : Ben : https://github.com/ben-lin

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(199)
	module.exports.template = __webpack_require__(206)


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var moment = __webpack_require__(111);
	var time = __webpack_require__(200);
	exports['default'] = {
	  props: ['animes', 'weekday', 'show-day'],
	  data: function data() {
	    return {};
	  },
	  components: {
	    Anime: __webpack_require__(201)
	  },
	  computed: {
	    isShowDay: function isShowDay() {
	      return this.showDay == this.weekday;
	    },
	    orderedAnimes: function orderedAnimes() {
	      return this.animes.sort(function (a, b) {
	        var timeA = time(a);
	        var timeB = time(b);
	        return timeA - timeB;
	      });
	    }
	  },
	  filters: {
	    weekday: __webpack_require__(205)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (anime) {
	  if (anime.timeCN) return parseInt(anime.timeCN);
	  if (!anime.timeJP) {
	    return 0;
	  }
	  var JP_hour = anime.timeJP.substring(0, 2);
	  JP_hour = parseInt(JP_hour);
	  var JP_minutes = anime.timeJP.substring(2);
	  JP_minutes = parseInt(JP_minutes);

	  return (JP_hour + 1) * 100 + JP_minutes;
	};

	module.exports = exports["default"];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(202)
	module.exports.template = __webpack_require__(204)


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = {
	    props: ['anime'],
	    ready: function ready() {},
	    methods: {},
	    filters: {
	        time: __webpack_require__(203)
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 203 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (anime) {

	  if (anime.timeCN.trim()) {
	    return anime.timeCN.substring(0, 2) + ':' + anime.timeCN.substring(2);
	  }

	  if (!anime.timeJP.trim()) {
	    return '预计今天';
	  }

	  var JP_hour = anime.timeJP.substring(0, 2);
	  JP_hour = parseInt(JP_hour);
	  var JP_minutes = anime.timeJP.substring(2);
	  JP_minutes = parseInt(JP_minutes);

	  if (anime.weekDayCN != anime.weekDayJP) return '预计今天';

	  var minutes = JP_minutes;
	  if (minutes < 10) minutes = '0' + minutes;

	  if (JP_hour < 23) {
	    var hour = JP_hour + 1;
	    if (hour < 10) hour = '0' + hour;
	    return '预计 ' + hour + ':' + minutes;
	  }

	  if (JP_hour == 23) {
	    return '预计 00:' + minutes;
	  }
	  if (JP_hour == 24) {
	    return '预计 01:' + minutes;
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "<div class=\"anime\">\r\n    <div class=\"anime-header\">\r\n      <h2>{{anime.titleCN}}</h2>\r\n    </div>\r\n    <div class=\"anime-time\">\r\n      {{ anime | time }}\r\n    </div>\r\n  </div>";

/***/ },
/* 205 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (val) {
	  val = parseInt(val);
	  var weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
	  return weekdays[val];
	};

	module.exports = exports['default'];

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = "<div class=\"animes\">\r\n    <div class=\"anime-section\" v-repeat=\"anime in orderedAnimes\" v-show=\"isShowDay\">\r\n      <Anime anime=\"{{anime}}\"></Anime>\r\n    </div>\r\n  </div>";

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = "<div v-repeat=\"anime in animes\" class=\"day\">\r\n    <Animes animes=\"{{anime.animes}}\" weekday=\"{{anime.weekday}}\" show-day=\"{{showDay}}\"></Animes>\r\n  </div>\r\n  <footer class=\"footer\">\r\n    <div class=\"anime-showday clickable\">{{showDay | weekday}}</div>\r\n    <div class=\"anime-weekdays\">\r\n      <div class=\"anime-weekday clickable\" v-on=\"click: switchDay(weekday)\" v-class=\"current: weekday.current\" v-repeat=\"weekday in weekdays\">{{ weekday.day }}</div>\r\n    </div>\r\n  </footer>";

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(209)
	module.exports = __webpack_require__(213)
	module.exports.template = __webpack_require__(214)


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(210);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(212)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(211)();
	// imports


	// module
	exports.push([module.id, "body {\n  margin: 0;\n  border-left: 1px solid #e2e2e2;\n  border-right: 1px solid #e2e2e2;\n  min-height: 100vmin;\n  overflow-x: hidden;\n  background-color: #f9f9f9;\n  font: 16px/1.7 \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, STHeiti, \"Microsoft Yahei\", \"SimSun\", sans-serif;\n  padding-bottom: 60px;\n}\n::-webkit-scrollbar {\n  display: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n}\n.animes {\n  padding-bottom: 20px;\n}\n.animes .anime {\n  padding: 10px;\n  background-color: #fff;\n  margin-bottom: 20px;\n  border-top: 1px solid #e2e2e2;\n  border-bottom: 1px solid #e2e2e2;\n}\n.animes .anime .anime-header h2 {\n  font-size: 20px;\n}\n.animes .anime .anime-time {\n  padding: 5px 0;\n  color: #999;\n}\n.footer {\n  text-align: center;\n  height: 50px;\n  line-height: 50px;\n  background-color: #f0f0f0;\n  border: 1px solid #e2e2e2;\n  border-bottom: none;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n", ""]);

	// exports


/***/ },
/* 211 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";

	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 213 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  data: function data() {
	    return {};
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "<router-view class=\"view\" v-transition=\"test\" transition-mode=\"out-in\" show-day=\"{{showDay}}\"></router-view>";

/***/ }
/******/ ]);