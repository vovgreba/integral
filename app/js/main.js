/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {

console.log('components');

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/components/accordionAndNouiSlider.js":
/*!*****************************************************!*\
  !*** ./src/js/components/accordionAndNouiSlider.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.mjs");
/* harmony import */ var nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");


const accordionItems = document.querySelectorAll(".accordion_item");
accordionItems.forEach(item => {
  const header = item.querySelector(".accordion_head");
  const svg = item.querySelector(".accordion_header").nextElementSibling;
  const content = item.querySelectorAll(".accordion_content");
  header.addEventListener("click", ev => {
    console.log(content);
    content.forEach(el => {
      el.classList.toggle('accordion_content-active');
      svg.classList.toggle('svg-active');
      // старый способ
      // el.style.display = el.style.display === "block" ? "none" : "block";
      // svg.style.transform = svg.style.transform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)";
    });
  });
});

// ************

var keypressSlider = document.querySelector(".slider-keypress");
var input0 = document.querySelector(".input-with-keypress-0");
var input1 = document.querySelector(".input-with-keypress-1");
var inputs = [input0, input1];
if (keypressSlider) {
  nouislider__WEBPACK_IMPORTED_MODULE_0__.create(keypressSlider, {
    start: [100, 1000000],
    connect: true,
    step: 1,
    range: {
      min: [100],
      max: [1000000]
    }
  });
  const handleInput = input => {
    input.addEventListener("input", function () {
      if (!this.value.startsWith("От ")) {
        this.value = "От " + this.value;
      }
    });
  };
  handleInput(input0);
  handleInput(input1);
  keypressSlider.noUiSlider.on("update", (values, handle) => {
    const startValue = values[0];
    const endValue = values[1];
    inputs[0].value = `От ${Math.floor(startValue)}`;
    inputs[1].value = `До ${Math.floor(endValue)}`;

    /* Початок відстеження натискань на клавіші у вводі */
    const setSliderHandle = (i, value) => {
      const r = [null, null];
      r[i] = value;
      keypressSlider.noUiSlider.set(r);
    };

    // Відстежувати події натискання клавіш на полі вводу.
    inputs.forEach((input, handle) => {
      input.addEventListener("change", function () {
        setSliderHandle(handle, this.value);
      });
      input.addEventListener("keydown", e => {
        const values = keypressSlider.noUiSlider.get();
        const value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        const steps = keypressSlider.noUiSlider.steps();

        // [down, up]
        const step = steps[handle];
        let position;

        // 13 - enter,
        // 38 - key up,
        // 40 - key down.
        switch (e.which) {
          case 13:
            setSliderHandle(handle, undefined.value);
            break;
          case 38:
            // Отримувати крок для збільшення значення слайдера (up)
            position = step[1];

            // false - крок не встановлено
            if (position === false) {
              position = 1;
            }

            // null - край слайдера
            if (position !== null) {
              setSliderHandle(handle, value + position);
            }
            break;
          case 40:
            position = step[0];
            if (position === false) {
              position = 1;
            }
            if (position !== null) {
              setSliderHandle(handle, value - position);
            }
            break;
        }
      });
    });
    /* Кінець відстеження натискань на клавіші у вводі */
  });
}

/***/ }),

/***/ "./src/js/components/clickAddCart.js":
/*!*******************************************!*\
  !*** ./src/js/components/clickAddCart.js ***!
  \*******************************************/
/***/ (() => {

const addcart = document.querySelectorAll('.assortment_total-btn');
addcart.forEach(el => {
  el.addEventListener('click', ev => {
    el.style.display = 'none';
    el.nextElementSibling.style.display = 'flex';
  });
});
let greu = 55;

/***/ }),

/***/ "./src/js/components/map.js":
/*!**********************************!*\
  !*** ./src/js/components/map.js ***!
  \**********************************/
/***/ (() => {

// ---- yandex map

ymaps.ready(function () {
  const myMap = new ymaps.Map('map', {
    center: [49.280555, 20.289611],
    // Координаты центра карты

    zoom: 7,
    // Масштаб карты
    controls: []
  });
  myMap.geoObjects.add(myMap);
});

/***/ }),

/***/ "./src/js/components/mobileCatalog.js":
/*!********************************************!*\
  !*** ./src/js/components/mobileCatalog.js ***!
  \********************************************/
/***/ (() => {

// catalog-menu

const btnMenu = document.querySelector('.btn-menu');
const btnSearch = document.querySelector('.btn-search');
const catalogMenu = document.querySelector('.catalog-menu');
const searchMenu = document.querySelector('.search-menu');
btnMenu.addEventListener('click', () => {
  if (searchMenu.classList.contains('search-menu-active')) {
    searchMenu.classList.remove('search-menu-active');
    searchMenu.style.display = 'none';
  }
  catalogMenu.classList.toggle('catalog-menu-active');
});
btnSearch.addEventListener('click', () => {
  if (searchMenu.classList.contains('search-menu-active')) {
    searchMenu.classList.remove('search-menu-active');
    searchMenu.style.display = 'none';
  } else {
    searchMenu.style.display = 'block';
    setTimeout(() => {
      searchMenu.classList.add('search-menu-active');
    }, 10);
  }
  catalogMenu.classList.remove('catalog-menu-active');
});
catalogMenu.addEventListener('click', ev => {
  const target = [...ev.target.classList];
  target.find(el => {
    if (el === 'catalog-menu-link') {
      catalogMenu.classList.toggle('catalog-menu-active');
    }
  });
});
searchMenu.addEventListener('click', ev => {
  const target = [...ev.target.classList];
  const value = ev.target.innerText;
  target.find(el => {
    if (el === 'catalog-menu-link') {
      searchMenu.classList.toggle('search-menu-active');
      btnSearch.innerText = value;
      searchMenu.style.display = 'none';
    }
  });
});

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ (() => {

const callMe = document.querySelector('.header_consultation-call-me');
const modalWrapp = document.querySelector('.modal-call');
const modalForm = document.querySelector('.modal-call_form');
const close = document.querySelector('.modal-call .close');
const btnFast = document.querySelector('.single-product_button-fast');
callMe.addEventListener('click', ev => {
  modalWrapp.classList.toggle('wrapp-active');
  modalForm.classList.toggle('form-active');
});
if (btnFast) {
  btnFast.addEventListener('click', ev => {
    modalForm.classList.toggle('form-active');
    modalWrapp.classList.toggle('wrapp-active');
  });
}
modalWrapp.addEventListener('click', ev => {
  const wrapp = ev.target.classList.contains('modal-call');
  const close = ev.target.classList.contains('close');
  if (wrapp || close) {
    modalForm.classList.toggle('form-active');
    modalWrapp.classList.toggle('wrapp-active');
  }
});
function other() {
  let x = 10;
  function inner(x) {
    return x;
  }
  return inner;
}
const foo = other();
console.log(foo(5));

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileCheck: () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Functional styling;
 * These styles are required for noUiSlider to function.
 * You don't need to change these rules to apply your design.
 */
.noUi-target,
.noUi-target * {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-touch-action: none;
  touch-action: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.noUi-target {
  position: relative;
}
.noUi-base,
.noUi-connects {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
/* Wrapper for all connect elements.
 */
.noUi-connects {
  overflow: hidden;
  z-index: 0;
}
.noUi-connect,
.noUi-origin {
  will-change: transform;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform-style: preserve-3d;
  transform-origin: 0 0;
  transform-style: flat;
}
/* Offset direction
 */
.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
  left: 0;
  right: auto;
}
/* Give origins 0 height/width so they don't interfere with clicking the
 * connect elements.
 */
.noUi-vertical .noUi-origin {
  top: -100%;
  width: 0;
}
.noUi-horizontal .noUi-origin {
  height: 0;
}
.noUi-handle {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
}
.noUi-touch-area {
  height: 100%;
  width: 100%;
}
.noUi-state-tap .noUi-connect,
.noUi-state-tap .noUi-origin {
  -webkit-transition: transform 0.3s;
  transition: transform 0.3s;
}
.noUi-state-drag * {
  cursor: inherit !important;
}
/* Slider size and handle placement;
 */
.noUi-horizontal {
  height: 18px;
}
.noUi-horizontal .noUi-handle {
  width: 34px;
  height: 28px;
  right: -17px;
  top: -6px;
}
.noUi-vertical {
  width: 18px;
}
.noUi-vertical .noUi-handle {
  width: 28px;
  height: 34px;
  right: -6px;
  bottom: -17px;
}
.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
  left: -17px;
  right: auto;
}
/* Styling;
 * Giving the connect element a border radius causes issues with using transform: scale
 */
.noUi-target {
  background: #FAFAFA;
  border-radius: 4px;
  border: 1px solid #D3D3D3;
  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;
}
.noUi-connects {
  border-radius: 3px;
}
.noUi-connect {
  background: #3FB8AF;
}
/* Handles and cursors;
 */
.noUi-draggable {
  cursor: ew-resize;
}
.noUi-vertical .noUi-draggable {
  cursor: ns-resize;
}
.noUi-handle {
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  background: #FFF;
  cursor: default;
  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;
}
.noUi-active {
  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;
}
/* Handle stripes;
 */
.noUi-handle:before,
.noUi-handle:after {
  content: "";
  display: block;
  position: absolute;
  height: 14px;
  width: 1px;
  background: #E8E7E6;
  left: 14px;
  top: 6px;
}
.noUi-handle:after {
  left: 17px;
}
.noUi-vertical .noUi-handle:before,
.noUi-vertical .noUi-handle:after {
  width: 14px;
  height: 1px;
  left: 6px;
  top: 14px;
}
.noUi-vertical .noUi-handle:after {
  top: 17px;
}
/* Disabled state;
 */
[disabled] .noUi-connect {
  background: #B8B8B8;
}
[disabled].noUi-target,
[disabled].noUi-handle,
[disabled] .noUi-handle {
  cursor: not-allowed;
}
/* Base;
 *
 */
.noUi-pips,
.noUi-pips * {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.noUi-pips {
  position: absolute;
  color: #999;
}
/* Values;
 *
 */
.noUi-value {
  position: absolute;
  white-space: nowrap;
  text-align: center;
}
.noUi-value-sub {
  color: #ccc;
  font-size: 10px;
}
/* Markings;
 *
 */
.noUi-marker {
  position: absolute;
  background: #CCC;
}
.noUi-marker-sub {
  background: #AAA;
}
.noUi-marker-large {
  background: #AAA;
}
/* Horizontal layout;
 *
 */
.noUi-pips-horizontal {
  padding: 10px 0;
  height: 80px;
  top: 100%;
  left: 0;
  width: 100%;
}
.noUi-value-horizontal {
  -webkit-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
}
.noUi-rtl .noUi-value-horizontal {
  -webkit-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
}
.noUi-marker-horizontal.noUi-marker {
  margin-left: -1px;
  width: 2px;
  height: 5px;
}
.noUi-marker-horizontal.noUi-marker-sub {
  height: 10px;
}
.noUi-marker-horizontal.noUi-marker-large {
  height: 15px;
}
/* Vertical layout;
 *
 */
.noUi-pips-vertical {
  padding: 0 10px;
  height: 100%;
  top: 0;
  left: 100%;
}
.noUi-value-vertical {
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  padding-left: 25px;
}
.noUi-rtl .noUi-value-vertical {
  -webkit-transform: translate(0, 50%);
  transform: translate(0, 50%);
}
.noUi-marker-vertical.noUi-marker {
  width: 5px;
  height: 2px;
  margin-top: -1px;
}
.noUi-marker-vertical.noUi-marker-sub {
  width: 10px;
}
.noUi-marker-vertical.noUi-marker-large {
  width: 15px;
}
.noUi-tooltip {
  display: block;
  position: absolute;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  background: #fff;
  color: #000;
  padding: 5px;
  text-align: center;
  white-space: nowrap;
}
.noUi-horizontal .noUi-tooltip {
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  left: 50%;
  bottom: 120%;
}
.noUi-vertical .noUi-tooltip {
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  top: 50%;
  right: 120%;
}
.noUi-horizontal .noUi-origin > .noUi-tooltip {
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
  left: auto;
  bottom: 10px;
}
.noUi-vertical .noUi-origin > .noUi-tooltip {
  -webkit-transform: translate(0, -18px);
  transform: translate(0, -18px);
  top: auto;
  right: 28px;
}
`, "",{"version":3,"sources":["webpack://./node_modules/nouislider/dist/nouislider.css"],"names":[],"mappings":"AAAA;;;EAGE;AACF;;EAEE,2BAA2B;EAC3B,6CAA6C;EAC7C,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE;AACF;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;;EAEE,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,6BAA6B;EAC7B,oCAAoC;EACpC,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE;AACF;EACE,OAAO;EACP,WAAW;AACb;AACA;;EAEE;AACF;EACE,UAAU;EACV,QAAQ;AACV;AACA;EACE,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;;EAEE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE;AACF;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;AACf;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;;EAEE;AACF;EACE,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,wDAAwD;AAC1D;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE;AACF;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,4EAA4E;AAC9E;AACA;EACE,yEAAyE;AAC3E;AACA;EACE;AACF;;EAEE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,UAAU;EACV,QAAQ;AACV;AACA;EACE,UAAU;AACZ;AACA;;EAEE,WAAW;EACX,WAAW;EACX,SAAS;EACT,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE;AACF;EACE,mBAAmB;AACrB;AACA;;;EAGE,mBAAmB;AACrB;AACA;;EAEE;AACF;;EAEE,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,SAAS;EACT,OAAO;EACP,WAAW;AACb;AACA;EACE,uCAAuC;EACvC,+BAA+B;AACjC;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,MAAM;EACN,UAAU;AACZ;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE,UAAU;EACV,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,SAAS;EACT,YAAY;AACd;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,QAAQ;EACR,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,UAAU;EACV,YAAY;AACd;AACA;EACE,sCAAsC;EACtC,8BAA8B;EAC9B,SAAS;EACT,WAAW;AACb","sourcesContent":["/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.css":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./nouislider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipsMode: () => (/* binding */ PipsMode),
/* harmony export */   PipsType: () => (/* binding */ PipsType),
/* harmony export */   create: () => (/* binding */ initialize),
/* harmony export */   cssClasses: () => (/* binding */ cssClasses),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var PipsMode;
(function (PipsMode) {
    PipsMode["Range"] = "range";
    PipsMode["Steps"] = "steps";
    PipsMode["Positions"] = "positions";
    PipsMode["Count"] = "count";
    PipsMode["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function (PipsType) {
    PipsType[PipsType["None"] = -1] = "None";
    PipsType[PipsType["NoValue"] = 0] = "NoValue";
    PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
    PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
//region Helper Methods
function isValidFormatter(entry) {
    return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
    // partial formatters only need a to function and not a from function
    return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
    el.parentElement.removeChild(el);
}
function isSet(value) {
    return value !== null && value !== undefined;
}
// Bindable version
function preventDefault(e) {
    e.preventDefault();
}
// Removes duplicates from an array.
function unique(array) {
    return array.filter(function (a) {
        return !this[a] ? (this[a] = true) : false;
    }, {});
}
// Round a value to the closest 'to'.
function closest(value, to) {
    return Math.round(value / to) * to;
}
// Current position of an element relative to the document.
function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc);
    // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
        pageOffset.x = 0;
    }
    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
// Checks whether a value is numerical.
function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
}
// Sets a class and removes it after [duration] ms.
function addClassFor(element, className, duration) {
    if (duration > 0) {
        addClass(element, className);
        setTimeout(function () {
            removeClass(element, className);
        }, duration);
    }
}
// Limits a value to 0 - 100
function limit(a) {
    return Math.max(Math.min(a, 100), 0);
}
// Wraps a variable as an array, if it isn't one yet.
// Note that an input array is returned by reference!
function asArray(a) {
    return Array.isArray(a) ? a : [a];
}
// Counts decimals
function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
}
// http://youmightnotneedjquery.com/#add_class
function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.add(className);
    }
    else {
        el.className += " " + className;
    }
}
// http://youmightnotneedjquery.com/#remove_class
function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
}
// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
            ? doc.documentElement.scrollLeft
            : doc.body.scrollLeft;
    var y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
            ? doc.documentElement.scrollTop
            : doc.body.scrollTop;
    return {
        x: x,
        y: y,
    };
}
// we provide a function to compute constants instead
// of accessing window.* as soon as the module needs it
// so that we do not compute anything if not needed
function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled
        ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup",
        }
        : window.navigator.msPointerEnabled
            ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
            }
            : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend",
            };
}
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
// Issue #785
function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        });
        // @ts-ignore
        window.addEventListener("test", null, opts);
    }
    catch (e) { }
    /* eslint-enable */
    return supportsPassive;
}
function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
//endregion
//region Range Calculation
// Determine the size of a sub-range in relation to a full range.
function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
}
// (percentage) How many percent is this value of this range?
function fromPercentage(range, value, startRange) {
    return (value * 100) / (range[startRange + 1] - range[startRange]);
}
// (percentage) Where is this value on this range?
function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
// (value) How much is this percentage on this range?
function isPercentage(range, value) {
    return (value * (range[1] - range[0])) / 100 + range[0];
}
function getJ(value, arr) {
    var j = 1;
    while (value >= arr[j]) {
        j += 1;
    }
    return j;
}
// (percentage) Input a value, find where, on a scale of 0-100, it applies.
function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
        return 100;
    }
    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
// (value) Input a percentage, find where it is on the specified range.
function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
        return xVal.slice(-1)[0];
    }
    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
// (percentage) Get the step that applies at a certain value.
function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
        return value;
    }
    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j];
    // If 'snap' is set, steps are used as fixed points on the slider.
    if (snap) {
        // Find the closest position, a or b.
        if (value - a > (b - a) / 2) {
            return b;
        }
        return a;
    }
    if (!xSteps[j - 1]) {
        return value;
    }
    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
}
//endregion
//region Spectrum
var Spectrum = /** @class */ (function () {
    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [];
        this.xNumSteps = [];
        this.xHighestCompleteStep = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.snap = snap;
        var index;
        var ordered = [];
        // Map the object keys to an array.
        Object.keys(entry).forEach(function (index) {
            ordered.push([asArray(entry[index]), index]);
        });
        // Sort all entries by value (numeric sort).
        ordered.sort(function (a, b) {
            return a[0][0] - b[0][0];
        });
        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            this.handleEntryPoint(ordered[index][1], ordered[index][0]);
        }
        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);
        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            this.handleStepPoint(index, this.xNumSteps[index]);
        }
    }
    Spectrum.prototype.getDistance = function (value) {
        var distances = [];
        for (var index = 0; index < this.xNumSteps.length - 1; index++) {
            distances[index] = fromPercentage(this.xVal, value, index);
        }
        return distances;
    };
    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
        var xPct_index = 0;
        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        }
        else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }
        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }
        if (distances === null) {
            distances = [];
        }
        var start_factor;
        var rest_factor = 1;
        var rest_rel_distance = distances[xPct_index];
        var range_pct = 0;
        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;
        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            }
            else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }
            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            }
            else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }
            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }
        return value + abs_distance_counter;
    };
    Spectrum.prototype.toStepping = function (value) {
        value = toStepping(this.xVal, this.xPct, value);
        return value;
    };
    Spectrum.prototype.fromStepping = function (value) {
        return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum.prototype.getStep = function (value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);
        return value;
    };
    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
        var j = getJ(value, this.xPct);
        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }
        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };
    Spectrum.prototype.getNearbySteps = function (value) {
        var j = getJ(value, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2],
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1],
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j],
            },
        };
    };
    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };
    Spectrum.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
    };
    // Outside testing
    Spectrum.prototype.convert = function (value) {
        return this.getStep(this.toStepping(value));
    };
    Spectrum.prototype.handleEntryPoint = function (index, value) {
        var percentage;
        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        }
        else if (index === "max") {
            percentage = 100;
        }
        else {
            percentage = parseFloat(index);
        }
        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        }
        // Store values.
        this.xPct.push(percentage);
        this.xVal.push(value[0]);
        var value1 = Number(value[1]);
        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value1)) {
                this.xSteps[0] = value1;
            }
        }
        else {
            this.xSteps.push(isNaN(value1) ? false : value1);
        }
        this.xHighestCompleteStep.push(0);
    };
    Spectrum.prototype.handleStepPoint = function (i, n) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }
        // Step over zero-length ranges (#948);
        if (this.xVal[i] === this.xVal[i + 1]) {
            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
            return;
        }
        // Factor to range ratio
        this.xSteps[i] =
            fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
        this.xHighestCompleteStep[i] = step;
    };
    return Spectrum;
}());
//endregion
//region Options
/*	Every input option is tested and parsed. This will prevent
    endless validation in internal methods. These tests are
    structured with an item for every option available. An
    option can be marked as required by setting the 'r' flag.
    The testing function is provided with three arguments:
        - The provided value for the option;
        - A reference to the options object;
        - The name for the option;

    The testing function returns false when an error is detected,
    or true when everything is OK. It can also modify the option
    object, to make sure all values can be correctly looped elsewhere. */
//region Defaults
var defaultFormatter = {
    to: function (value) {
        return value === undefined ? "" : value.toFixed(2);
    },
    from: Number,
};
var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub",
};
// Namespaces of internal event listeners
var INTERNAL_EVENT_NS = {
    tooltips: ".__tooltips",
    aria: ".__aria",
};
//endregion
function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'step' is not numeric.");
    }
    // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.
    parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    }
    parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    }
    parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    }
    parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("noUiSlider: 'range' is not an object.");
    }
    // Catch missing start or end.
    if (entry.min === undefined || entry.max === undefined) {
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    }
    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
    entry = asArray(entry);
    // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.
    if (!Array.isArray(entry) || !entry.length) {
        throw new Error("noUiSlider: 'start' option is incorrect.");
    }
    // Store the number of handles.
    parsed.handles = entry.length;
    // When the slider is initialized, the .val method will
    // be called with the start options.
    parsed.start = entry;
}
function testSnap(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;
}
function testAnimate(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
    if (typeof entry !== "number") {
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    }
    parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
    var connect = [false];
    var i;
    // Map legacy options
    if (entry === "lower") {
        entry = [true, false];
    }
    else if (entry === "upper") {
        entry = [false, true];
    }
    // Handle boolean options
    if (entry === true || entry === false) {
        for (i = 1; i < parsed.handles; i++) {
            connect.push(entry);
        }
        connect.push(false);
    }
    // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
    }
    else {
        connect = entry;
    }
    parsed.connect = connect;
}
function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
        case "horizontal":
            parsed.ort = 0;
            break;
        case "vertical":
            parsed.ort = 1;
            break;
        default:
            throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
}
function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'margin' option must be numeric.");
    }
    // Issue #582
    if (entry === 0) {
        return;
    }
    parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'limit' option must be numeric.");
    }
    parsed.limit = parsed.spectrum.getDistance(entry);
    if (!parsed.limit || parsed.handles < 2) {
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
}
function testPadding(parsed, entry) {
    var index;
    if (!isNumeric(entry) && !Array.isArray(entry)) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (entry === 0) {
        return;
    }
    if (!Array.isArray(entry)) {
        entry = [entry, entry];
    }
    // 'getDistance' returns false for invalid values.
    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
        // last "range" can't contain step size as it is purely an endpoint.
        if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        }
    }
    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
    if (totalPadding / (lastValue - firstValue) > 1) {
        throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
}
function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
        case "ltr":
            parsed.dir = 0;
            break;
        case "rtl":
            parsed.dir = 1;
            break;
        default:
            throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
}
function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
    }
    // Check if the string contains any keywords.
    // None are required.
    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;
    var dragAll = entry.indexOf("drag-all") >= 0;
    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
    if (fixed) {
        if (parsed.handles !== 2) {
            throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        }
        // Use margin to enforce fixed state
        testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }
    if (unconstrained && (parsed.margin || parsed.limit)) {
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
    }
    parsed.events = {
        tap: tap || snap,
        drag: drag,
        dragAll: dragAll,
        smoothSteps: smoothSteps,
        fixed: fixed,
        snap: snap,
        hover: hover,
        unconstrained: unconstrained,
    };
}
function testTooltips(parsed, entry) {
    if (entry === false) {
        return;
    }
    if (entry === true || isValidPartialFormatter(entry)) {
        parsed.tooltips = [];
        for (var i = 0; i < parsed.handles; i++) {
            parsed.tooltips.push(entry);
        }
    }
    else {
        entry = asArray(entry);
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a formatter for all handles.");
        }
        entry.forEach(function (formatter) {
            if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
            }
        });
        parsed.tooltips = entry;
    }
}
function testHandleAttributes(parsed, entry) {
    if (entry.length !== parsed.handles) {
        throw new Error("noUiSlider: must pass a attributes for all handles.");
    }
    parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
    if (!isValidPartialFormatter(entry)) {
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    }
    parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
    if (!isValidFormatter(entry)) {
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }
    parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
    }
    parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    }
    parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
    }
    if (typeof parsed.cssPrefix === "string") {
        parsed.cssClasses = {};
        Object.keys(entry).forEach(function (key) {
            parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
        });
    }
    else {
        parsed.cssClasses = entry;
    }
}
// Test all developer settings and parse to assumption-safe values.
function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
        margin: null,
        limit: null,
        padding: null,
        animate: true,
        animationDuration: 300,
        ariaFormat: defaultFormatter,
        format: defaultFormatter,
    };
    // Tests are executed in the order they are presented here.
    var tests = {
        step: { r: false, t: testStep },
        keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
        keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
        keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
        start: { r: true, t: testStart },
        connect: { r: true, t: testConnect },
        direction: { r: true, t: testDirection },
        snap: { r: false, t: testSnap },
        animate: { r: false, t: testAnimate },
        animationDuration: { r: false, t: testAnimationDuration },
        range: { r: true, t: testRange },
        orientation: { r: false, t: testOrientation },
        margin: { r: false, t: testMargin },
        limit: { r: false, t: testLimit },
        padding: { r: false, t: testPadding },
        behaviour: { r: true, t: testBehaviour },
        ariaFormat: { r: false, t: testAriaFormat },
        format: { r: false, t: testFormat },
        tooltips: { r: false, t: testTooltips },
        keyboardSupport: { r: true, t: testKeyboardSupport },
        documentElement: { r: false, t: testDocumentElement },
        cssPrefix: { r: true, t: testCssPrefix },
        cssClasses: { r: true, t: testCssClasses },
        handleAttributes: { r: false, t: testHandleAttributes },
    };
    var defaults = {
        connect: false,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: true,
        cssPrefix: "noUi-",
        cssClasses: cssClasses,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
    };
    // AriaFormat defaults to regular format, if any.
    if (options.format && !options.ariaFormat) {
        options.ariaFormat = options.format;
    }
    // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.
    Object.keys(tests).forEach(function (name) {
        // If the option isn't set, but it is required, throw an error.
        if (!isSet(options[name]) && defaults[name] === undefined) {
            if (tests[name].r) {
                throw new Error("noUiSlider: '" + name + "' is required.");
            }
            return;
        }
        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    });
    // Forward pips options
    parsed.pips = options.pips;
    // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d
    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
    // Pips don't move, so we can place them using left/top.
    var styles = [
        ["left", "top"],
        ["right", "bottom"],
    ];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
}
//endregion
function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
    // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes
    var scope_Target = target;
    var scope_Base;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips;
    // Slider state values
    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {};
    // Document Nodes
    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body;
    // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.
    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
    // Creates a node, adds it to target, returns the new node.
    function addNodeTo(addTarget, className) {
        var div = scope_Document.createElement("div");
        if (className) {
            addClass(div, className);
        }
        addTarget.appendChild(div);
        return div;
    }
    // Append a origin to the base
    function addOrigin(base, handleNumber) {
        var origin = addNodeTo(base, options.cssClasses.origin);
        var handle = addNodeTo(origin, options.cssClasses.handle);
        addNodeTo(handle, options.cssClasses.touchArea);
        handle.setAttribute("data-handle", String(handleNumber));
        if (options.keyboardSupport) {
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
            // 0 = focusable and reachable
            handle.setAttribute("tabindex", "0");
            handle.addEventListener("keydown", function (event) {
                return eventKeydown(event, handleNumber);
            });
        }
        if (options.handleAttributes !== undefined) {
            var attributes_1 = options.handleAttributes[handleNumber];
            Object.keys(attributes_1).forEach(function (attribute) {
                handle.setAttribute(attribute, attributes_1[attribute]);
            });
        }
        handle.setAttribute("role", "slider");
        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
        if (handleNumber === 0) {
            addClass(handle, options.cssClasses.handleLower);
        }
        else if (handleNumber === options.handles - 1) {
            addClass(handle, options.cssClasses.handleUpper);
        }
        origin.handle = handle;
        return origin;
    }
    // Insert nodes for connect elements
    function addConnect(base, add) {
        if (!add) {
            return false;
        }
        return addNodeTo(base, options.cssClasses.connect);
    }
    // Add handles to the slider base.
    function addElements(connectOptions, base) {
        var connectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(connectBase, connectOptions[0]));
        // [::::O====O====O====]
        // connectOptions = [0, 1, 1, 1]
        for (var i = 0; i < options.handles; i++) {
            // Keep a list of all added handles.
            scope_Handles.push(addOrigin(base, i));
            scope_HandleNumbers[i] = i;
            scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
        }
    }
    // Initialize a single slider.
    function addSlider(addTarget) {
        // Apply classes and data to the target.
        addClass(addTarget, options.cssClasses.target);
        if (options.dir === 0) {
            addClass(addTarget, options.cssClasses.ltr);
        }
        else {
            addClass(addTarget, options.cssClasses.rtl);
        }
        if (options.ort === 0) {
            addClass(addTarget, options.cssClasses.horizontal);
        }
        else {
            addClass(addTarget, options.cssClasses.vertical);
        }
        var textDirection = getComputedStyle(addTarget).direction;
        if (textDirection === "rtl") {
            addClass(addTarget, options.cssClasses.textDirectionRtl);
        }
        else {
            addClass(addTarget, options.cssClasses.textDirectionLtr);
        }
        return addNodeTo(addTarget, options.cssClasses.base);
    }
    function addTooltip(handle, handleNumber) {
        if (!options.tooltips || !options.tooltips[handleNumber]) {
            return false;
        }
        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }
    function isSliderDisabled() {
        return scope_Target.hasAttribute("disabled");
    }
    // Disable the slider dragging if any handle is disabled
    function isHandleDisabled(handleNumber) {
        var handleOrigin = scope_Handles[handleNumber];
        return handleOrigin.hasAttribute("disabled");
    }
    function disable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].setAttribute("disabled", "");
            scope_Handles[handleNumber].handle.removeAttribute("tabindex");
        }
        else {
            scope_Target.setAttribute("disabled", "");
            scope_Handles.forEach(function (handle) {
                handle.handle.removeAttribute("tabindex");
            });
        }
    }
    function enable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].removeAttribute("disabled");
            scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
        }
        else {
            scope_Target.removeAttribute("disabled");
            scope_Handles.forEach(function (handle) {
                handle.removeAttribute("disabled");
                handle.handle.setAttribute("tabindex", "0");
            });
        }
    }
    function removeTooltips() {
        if (scope_Tooltips) {
            removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
            scope_Tooltips.forEach(function (tooltip) {
                if (tooltip) {
                    removeElement(tooltip);
                }
            });
            scope_Tooltips = null;
        }
    }
    // The tooltips option is a shorthand for using the 'update' event.
    function tooltips() {
        removeTooltips();
        // Tooltips are added with options.tooltips in original order.
        scope_Tooltips = scope_Handles.map(addTooltip);
        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
            if (!scope_Tooltips || !options.tooltips) {
                return;
            }
            if (scope_Tooltips[handleNumber] === false) {
                return;
            }
            var formattedValue = values[handleNumber];
            if (options.tooltips[handleNumber] !== true) {
                formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
            }
            scope_Tooltips[handleNumber].innerHTML = formattedValue;
        });
    }
    function aria() {
        removeEvent("update" + INTERNAL_EVENT_NS.aria);
        bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
            // Update Aria Values for all handles, as a change in one changes min and max values for the next.
            scope_HandleNumbers.forEach(function (index) {
                var handle = scope_Handles[index];
                var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                var now = positions[index];
                // Formatted value for display
                var text = String(options.ariaFormat.to(unencoded[index]));
                // Map to slider range values
                min = scope_Spectrum.fromStepping(min).toFixed(1);
                max = scope_Spectrum.fromStepping(max).toFixed(1);
                now = scope_Spectrum.fromStepping(now).toFixed(1);
                handle.children[0].setAttribute("aria-valuemin", min);
                handle.children[0].setAttribute("aria-valuemax", max);
                handle.children[0].setAttribute("aria-valuenow", now);
                handle.children[0].setAttribute("aria-valuetext", text);
            });
        });
    }
    function getGroup(pips) {
        // Use the range.
        if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) {
            return scope_Spectrum.xVal;
        }
        if (pips.mode === PipsMode.Count) {
            if (pips.values < 2) {
                throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
            }
            // Divide 0 - 100 in 'count' parts.
            var interval = pips.values - 1;
            var spread = 100 / interval;
            var values = [];
            // List these parts and have them handled as 'positions'.
            while (interval--) {
                values[interval] = interval * spread;
            }
            values.push(100);
            return mapToRange(values, pips.stepped);
        }
        if (pips.mode === PipsMode.Positions) {
            // Map all percentages to on-range values.
            return mapToRange(pips.values, pips.stepped);
        }
        if (pips.mode === PipsMode.Values) {
            // If the value must be stepped, it needs to be converted to a percentage first.
            if (pips.stepped) {
                return pips.values.map(function (value) {
                    // Convert to percentage, apply step, return to value.
                    return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                });
            }
            // Otherwise, we can simply use the values.
            return pips.values;
        }
        return []; // pips.mode = never
    }
    function mapToRange(values, stepped) {
        return values.map(function (value) {
            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
    }
    function generateSpread(pips) {
        function safeIncrement(value, increment) {
            // Avoid floating point variance by dropping the smallest decimal places.
            return Number((value + increment).toFixed(7));
        }
        var group = getGroup(pips);
        var indexes = {};
        var firstInRange = scope_Spectrum.xVal[0];
        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
        var ignoreFirst = false;
        var ignoreLast = false;
        var prevPct = 0;
        // Create a copy of the group, sort it and filter away all duplicates.
        group = unique(group.slice().sort(function (a, b) {
            return a - b;
        }));
        // Make sure the range starts with the first element.
        if (group[0] !== firstInRange) {
            group.unshift(firstInRange);
            ignoreFirst = true;
        }
        // Likewise for the last one.
        if (group[group.length - 1] !== lastInRange) {
            group.push(lastInRange);
            ignoreLast = true;
        }
        group.forEach(function (current, index) {
            // Get the current step and the lower + upper positions.
            var step;
            var i;
            var q;
            var low = current;
            var high = group[index + 1];
            var newPct;
            var pctDifference;
            var pctPos;
            var type;
            var steps;
            var realSteps;
            var stepSize;
            var isSteps = pips.mode === PipsMode.Steps;
            // When using 'steps' mode, use the provided steps.
            // Otherwise, we'll step on to the next subrange.
            if (isSteps) {
                step = scope_Spectrum.xNumSteps[index];
            }
            // Default to a 'full' step.
            if (!step) {
                step = high - low;
            }
            // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
            if (high === undefined) {
                high = low;
            }
            // Make sure step isn't 0, which would cause an infinite loop (#654)
            step = Math.max(step, 0.0000001);
            // Find all steps in the subrange.
            for (i = low; i <= high; i = safeIncrement(i, step)) {
                // Get the percentage value for the current step,
                // calculate the size for the subrange.
                newPct = scope_Spectrum.toStepping(i);
                pctDifference = newPct - prevPct;
                steps = pctDifference / (pips.density || 1);
                realSteps = Math.round(steps);
                // This ratio represents the amount of percentage-space a point indicates.
                // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                // Round the percentage offset to an even number, then divide by two
                // to spread the offset on both sides of the range.
                stepSize = pctDifference / realSteps;
                // Divide all points evenly, adding the correct number to this subrange.
                // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                for (q = 1; q <= realSteps; q += 1) {
                    // The ratio between the rounded value and the actual size might be ~1% off.
                    // Correct the percentage offset by the number of points
                    // per subrange. density = 1 will result in 100 points on the
                    // full range, 2 for 50, 4 for 25, etc.
                    pctPos = prevPct + q * stepSize;
                    indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                }
                // Determine the point type.
                type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                if (!index && ignoreFirst && i !== high) {
                    type = 0;
                }
                if (!(i === high && ignoreLast)) {
                    // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                    indexes[newPct.toFixed(5)] = [i, type];
                }
                // Update the percentage count.
                prevPct = newPct;
            }
        });
        return indexes;
    }
    function addMarking(spread, filterFunc, formatter) {
        var _a, _b;
        var element = scope_Document.createElement("div");
        var valueSizeClasses = (_a = {},
            _a[PipsType.None] = "",
            _a[PipsType.NoValue] = options.cssClasses.valueNormal,
            _a[PipsType.LargeValue] = options.cssClasses.valueLarge,
            _a[PipsType.SmallValue] = options.cssClasses.valueSub,
            _a);
        var markerSizeClasses = (_b = {},
            _b[PipsType.None] = "",
            _b[PipsType.NoValue] = options.cssClasses.markerNormal,
            _b[PipsType.LargeValue] = options.cssClasses.markerLarge,
            _b[PipsType.SmallValue] = options.cssClasses.markerSub,
            _b);
        var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
        var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
        function getClasses(type, source) {
            var a = source === options.cssClasses.value;
            var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
            var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
            return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
        }
        function addSpread(offset, value, type) {
            // Apply the filter function, if it is set.
            type = filterFunc ? filterFunc(value, type) : type;
            if (type === PipsType.None) {
                return;
            }
            // Add a marker for every point
            var node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.marker);
            node.style[options.style] = offset + "%";
            // Values are only appended for points marked '1' or '2'.
            if (type > PipsType.NoValue) {
                node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.value);
                node.setAttribute("data-value", String(value));
                node.style[options.style] = offset + "%";
                node.innerHTML = String(formatter.to(value));
            }
        }
        // Append all points.
        Object.keys(spread).forEach(function (offset) {
            addSpread(offset, spread[offset][0], spread[offset][1]);
        });
        return element;
    }
    function removePips() {
        if (scope_Pips) {
            removeElement(scope_Pips);
            scope_Pips = null;
        }
    }
    function pips(pips) {
        // Fix #669
        removePips();
        var spread = generateSpread(pips);
        var filter = pips.filter;
        var format = pips.format || {
            to: function (value) {
                return String(Math.round(value));
            },
        };
        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
        return scope_Pips;
    }
    // Shorthand for base dimensions.
    function baseSize() {
        var rect = scope_Base.getBoundingClientRect();
        var alt = ("offset" + ["Width", "Height"][options.ort]);
        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    }
    // Handler for attaching events trough a proxy.
    function attachEvent(events, element, callback, data) {
        // This function can be used to 'filter' events to the slider.
        // element is a node, not a nodeList
        var method = function (event) {
            var e = fixEvent(event, data.pageOffset, data.target || element);
            // fixEvent returns false if this event has a different target
            // when handling (multi-) touch events;
            if (!e) {
                return false;
            }
            // doNotReject is passed by all end events to make sure released touches
            // are not rejected, leaving the slider "stuck" to the cursor;
            if (isSliderDisabled() && !data.doNotReject) {
                return false;
            }
            // Stop if an active 'tap' transition is taking place.
            if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (data.hover && e.buttons) {
                return false;
            }
            // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
            // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
            // touch-action: manipulation, but that allows panning, which breaks
            // sliders after zooming/on non-responsive pages.
            // See: https://bugs.webkit.org/show_bug.cgi?id=133112
            if (!supportsPassive) {
                e.preventDefault();
            }
            e.calcPoint = e.points[options.ort];
            // Call the event handler with the event [ and additional data ].
            callback(e, data);
            return;
        };
        var methods = [];
        // Bind a closure on the target for every event type.
        events.split(" ").forEach(function (eventName) {
            element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
            methods.push([eventName, method]);
        });
        return methods;
    }
    // Provide a clean event with standardized offset values.
    function fixEvent(e, pageOffset, eventTarget) {
        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf("touch") === 0;
        var mouse = e.type.indexOf("mouse") === 0;
        var pointer = e.type.indexOf("pointer") === 0;
        var x = 0;
        var y = 0;
        // IE10 implemented pointer events with a prefix;
        if (e.type.indexOf("MSPointer") === 0) {
            pointer = true;
        }
        // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
        // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
        // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
        if (e.type === "mousedown" && !e.buttons && !e.touches) {
            return false;
        }
        // The only thing one handle should be concerned about is the touches that originated on top of it.
        if (touch) {
            // Returns true if a touch originated on the target.
            var isTouchOnTarget = function (checkTouch) {
                var target = checkTouch.target;
                return (target === eventTarget ||
                    eventTarget.contains(target) ||
                    (e.composed && e.composedPath().shift() === eventTarget));
            };
            // In the case of touchstart events, we need to make sure there is still no more than one
            // touch on the target so we look amongst all touches.
            if (e.type === "touchstart") {
                var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                // Do not support more than one touch per handle.
                if (targetTouches.length > 1) {
                    return false;
                }
                x = targetTouches[0].pageX;
                y = targetTouches[0].pageY;
            }
            else {
                // In the other cases, find on changedTouches is enough.
                var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                // Cancel if the target touch has not moved.
                if (!targetTouch) {
                    return false;
                }
                x = targetTouch.pageX;
                y = targetTouch.pageY;
            }
        }
        pageOffset = pageOffset || getPageOffset(scope_Document);
        if (mouse || pointer) {
            x = e.clientX + pageOffset.x;
            y = e.clientY + pageOffset.y;
        }
        e.pageOffset = pageOffset;
        e.points = [x, y];
        e.cursor = mouse || pointer; // Fix #435
        return e;
    }
    // Translate a coordinate in the document to a percentage on the slider
    function calcPointToPercentage(calcPoint) {
        var location = calcPoint - offset(scope_Base, options.ort);
        var proposal = (location * 100) / baseSize();
        // Clamp proposal between 0% and 100%
        // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
        // are used (e.g. contained handles feature)
        proposal = limit(proposal);
        return options.dir ? 100 - proposal : proposal;
    }
    // Find handle closest to a certain percentage on the slider
    function getClosestHandle(clickedPosition) {
        var smallestDifference = 100;
        var handleNumber = false;
        scope_Handles.forEach(function (handle, index) {
            // Disabled handles are ignored
            if (isHandleDisabled(index)) {
                return;
            }
            var handlePosition = scope_Locations[index];
            var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
            // Initial state
            var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
            // Difference with this handle is smaller than the previously checked handle
            var isCloser = differenceWithThisHandle < smallestDifference;
            var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
            if (isCloser || isCloserAfter || clickAtEdge) {
                handleNumber = index;
                smallestDifference = differenceWithThisHandle;
            }
        });
        return handleNumber;
    }
    // Fire 'end' when a mouse or pen leaves the document.
    function documentLeave(event, data) {
        if (event.type === "mouseout" &&
            event.target.nodeName === "HTML" &&
            event.relatedTarget === null) {
            eventEnd(event, data);
        }
    }
    // Handle movement on document for handle and range drag.
    function eventMove(event, data) {
        // Fix #498
        // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
        // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
        // IE9 has .buttons and .which zero on mousemove.
        // Firefox breaks the spec MDN defines.
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
            return eventEnd(event, data);
        }
        // Check if we are moving up or down
        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
        // Convert the movement into a percentage of the slider width/height
        var proposal = (movement * 100) / data.baseSize;
        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
    }
    // Unbind move events on document, call callbacks.
    function eventEnd(event, data) {
        // The handle is no longer active, so remove the class.
        if (data.handle) {
            removeClass(data.handle, options.cssClasses.active);
            scope_ActiveHandlesCount -= 1;
        }
        // Unbind the move and end events, which are added on 'start'.
        data.listeners.forEach(function (c) {
            scope_DocumentElement.removeEventListener(c[0], c[1]);
        });
        if (scope_ActiveHandlesCount === 0) {
            // Remove dragging class.
            removeClass(scope_Target, options.cssClasses.drag);
            setZindex();
            // Remove cursor styles and text-selection events bound to the body.
            if (event.cursor) {
                scope_Body.style.cursor = "";
                scope_Body.removeEventListener("selectstart", preventDefault);
            }
        }
        if (options.events.smoothSteps) {
            data.handleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
            });
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
            });
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            fireEvent("end", handleNumber);
        });
    }
    // Bind move events on document.
    function eventStart(event, data) {
        // Ignore event if any handle is disabled
        if (data.handleNumbers.some(isHandleDisabled)) {
            return;
        }
        var handle;
        if (data.handleNumbers.length === 1) {
            var handleOrigin = scope_Handles[data.handleNumbers[0]];
            handle = handleOrigin.children[0];
            scope_ActiveHandlesCount += 1;
            // Mark the handle as 'active' so it can be styled.
            addClass(handle, options.cssClasses.active);
        }
        // A drag should never propagate up to the 'tap' event.
        event.stopPropagation();
        // Record the event listeners.
        var listeners = [];
        // Attach the move and end events.
        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
            // The event target has changed so we need to propagate the original one so that we keep
            // relying on it to extract target touches.
            target: event.target,
            handle: handle,
            connect: data.connect,
            listeners: listeners,
            startCalcPoint: event.calcPoint,
            baseSize: baseSize(),
            pageOffset: event.pageOffset,
            handleNumbers: data.handleNumbers,
            buttonsProperty: event.buttons,
            locations: scope_Locations.slice(),
        });
        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        // We want to make sure we pushed the listeners in the listener list rather than creating
        // a new one as it has already been passed to the event handlers.
        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
        // Text selection isn't an issue on touch devices,
        // so adding cursor styles can be skipped.
        if (event.cursor) {
            // Prevent the 'I' cursor and extend the range-drag cursor.
            scope_Body.style.cursor = getComputedStyle(event.target).cursor;
            // Mark the target with a dragging state.
            if (scope_Handles.length > 1) {
                addClass(scope_Target, options.cssClasses.drag);
            }
            // Prevent text selection when dragging the handles.
            // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
            // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
            // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
            // The 'cursor' flag is false.
            // See: http://caniuse.com/#search=selectstart
            scope_Body.addEventListener("selectstart", preventDefault, false);
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("start", handleNumber);
        });
    }
    // Move closest handle to tapped location.
    function eventTap(event) {
        // The tap event shouldn't propagate up
        event.stopPropagation();
        var proposal = calcPointToPercentage(event.calcPoint);
        var handleNumber = getClosestHandle(proposal);
        // Tackle the case that all handles are 'disabled'.
        if (handleNumber === false) {
            return;
        }
        // Flag the slider as it is now in a transitional state.
        // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
        if (!options.events.snap) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        setHandle(handleNumber, proposal, true, true);
        setZindex();
        fireEvent("slide", handleNumber, true);
        fireEvent("update", handleNumber, true);
        if (!options.events.snap) {
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);
        }
        else {
            eventStart(event, { handleNumbers: [handleNumber] });
        }
    }
    // Fires a 'hover' event for a hovered mouse/pen position.
    function eventHover(event) {
        var proposal = calcPointToPercentage(event.calcPoint);
        var to = scope_Spectrum.getStep(proposal);
        var value = scope_Spectrum.fromStepping(to);
        Object.keys(scope_Events).forEach(function (targetEvent) {
            if ("hover" === targetEvent.split(".")[0]) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(scope_Self, value);
                });
            }
        });
    }
    // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles
    function eventKeydown(event, handleNumber) {
        if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
            return false;
        }
        var horizontalKeys = ["Left", "Right"];
        var verticalKeys = ["Down", "Up"];
        var largeStepKeys = ["PageDown", "PageUp"];
        var edgeKeys = ["Home", "End"];
        if (options.dir && !options.ort) {
            // On an right-to-left slider, the left and right keys act inverted
            horizontalKeys.reverse();
        }
        else if (options.ort && !options.dir) {
            // On a top-to-bottom slider, the up and down keys act inverted
            verticalKeys.reverse();
            largeStepKeys.reverse();
        }
        // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        var key = event.key.replace("Arrow", "");
        var isLargeDown = key === largeStepKeys[0];
        var isLargeUp = key === largeStepKeys[1];
        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
        var isMin = key === edgeKeys[0];
        var isMax = key === edgeKeys[1];
        if (!isDown && !isUp && !isMin && !isMax) {
            return true;
        }
        event.preventDefault();
        var to;
        if (isUp || isDown) {
            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];
            // At the edge of a slider, do nothing
            if (step === null) {
                return false;
            }
            // No step set, use the default of 10% of the sub-range
            if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
            }
            if (isLargeUp || isLargeDown) {
                step *= options.keyboardPageMultiplier;
            }
            else {
                step *= options.keyboardMultiplier;
            }
            // Step over zero-length ranges (#948);
            step = Math.max(step, 0.0000001);
            // Decrement for down steps
            step = (isDown ? -1 : 1) * step;
            to = scope_Values[handleNumber] + step;
        }
        else if (isMax) {
            // End key
            to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
        }
        else {
            // Home key
            to = options.spectrum.xVal[0];
        }
        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
        fireEvent("slide", handleNumber);
        fireEvent("update", handleNumber);
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        return false;
    }
    // Attach events to several slider parts.
    function bindSliderEvents(behaviour) {
        // Attach the standard drag event to the handles.
        if (!behaviour.fixed) {
            scope_Handles.forEach(function (handle, index) {
                // These events are only bound to the visual handle
                // element, not the 'real' origin element.
                attachEvent(actions.start, handle.children[0], eventStart, {
                    handleNumbers: [index],
                });
            });
        }
        // Attach the tap event to the slider base.
        if (behaviour.tap) {
            attachEvent(actions.start, scope_Base, eventTap, {});
        }
        // Fire hover events
        if (behaviour.hover) {
            attachEvent(actions.move, scope_Base, eventHover, {
                hover: true,
            });
        }
        // Make the range draggable.
        if (behaviour.drag) {
            scope_Connects.forEach(function (connect, index) {
                if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                    return;
                }
                var handleBefore = scope_Handles[index - 1];
                var handleAfter = scope_Handles[index];
                var eventHolders = [connect];
                var handlesToDrag = [handleBefore, handleAfter];
                var handleNumbersToDrag = [index - 1, index];
                addClass(connect, options.cssClasses.draggable);
                // When the range is fixed, the entire range can
                // be dragged by the handles. The handle in the first
                // origin will propagate the start event upward,
                // but it needs to be bound manually on the other.
                if (behaviour.fixed) {
                    eventHolders.push(handleBefore.children[0]);
                    eventHolders.push(handleAfter.children[0]);
                }
                if (behaviour.dragAll) {
                    handlesToDrag = scope_Handles;
                    handleNumbersToDrag = scope_HandleNumbers;
                }
                eventHolders.forEach(function (eventHolder) {
                    attachEvent(actions.start, eventHolder, eventStart, {
                        handles: handlesToDrag,
                        handleNumbers: handleNumbersToDrag,
                        connect: connect,
                    });
                });
            });
        }
    }
    // Attach an event to this slider, possibly including a namespace
    function bindEvent(namespacedEvent, callback) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback);
        // If the event bound is 'update,' fire it immediately for all handles.
        if (namespacedEvent.split(".")[0] === "update") {
            scope_Handles.forEach(function (a, index) {
                fireEvent("update", index);
            });
        }
    }
    function isInternalNamespace(namespace) {
        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
    }
    // Undo attachment of event
    function removeEvent(namespacedEvent) {
        var event = namespacedEvent && namespacedEvent.split(".")[0];
        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
        Object.keys(scope_Events).forEach(function (bind) {
            var tEvent = bind.split(".")[0];
            var tNamespace = bind.substring(tEvent.length);
            if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                // only delete protected internal event if intentional
                if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                    delete scope_Events[bind];
                }
            }
        });
    }
    // External event handling
    function fireEvent(eventName, handleNumber, tap) {
        Object.keys(scope_Events).forEach(function (targetEvent) {
            var eventType = targetEvent.split(".")[0];
            if (eventName === eventType) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(
                    // Use the slider public API as the scope ('this')
                    scope_Self, 
                    // Return values as array, so arg_1[arg_2] is always valid.
                    scope_Values.map(options.format.to), 
                    // Handle index, 0 or 1
                    handleNumber, 
                    // Un-formatted slider values
                    scope_Values.slice(), 
                    // Event is fired by tap, true or false
                    tap || false, 
                    // Left offset of the handle, in relation to the slider
                    scope_Locations.slice(), 
                    // add the slider public API to an accessible parameter when this is unavailable
                    scope_Self);
                });
            }
        });
    }
    // Split out the handle positioning logic so the Move event can use it, too
    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
        var distance;
        // For sliders with multiple handles, limit movement to the other handle.
        // Apply the margin option by adding it to the handle positions.
        if (scope_Handles.length > 1 && !options.events.unconstrained) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                to = Math.max(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                to = Math.min(to, distance);
            }
        }
        // The limit option has the opposite effect, limiting handles to a
        // maximum distance from another. Limit must be > 0, as otherwise
        // handles would be unmovable.
        if (scope_Handles.length > 1 && options.limit) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                to = Math.min(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                to = Math.max(to, distance);
            }
        }
        // The padding option keeps the handles a certain distance from the
        // edges of the slider. Padding must be > 0.
        if (options.padding) {
            if (handleNumber === 0) {
                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                to = Math.max(to, distance);
            }
            if (handleNumber === scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                to = Math.min(to, distance);
            }
        }
        if (!smoothSteps) {
            to = scope_Spectrum.getStep(to);
        }
        // Limit percentage to the 0 - 100 range
        to = limit(to);
        // Return false if handle can't move
        if (to === reference[handleNumber] && !getValue) {
            return false;
        }
        return to;
    }
    // Uses slider orientation to create CSS rules. a = base value;
    function inRuleOrder(v, a) {
        var o = options.ort;
        return (o ? a : v) + ", " + (o ? v : a);
    }
    // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
        var proposals = locations.slice();
        // Store first handle now, so we still have it in case handleNumbers is reversed
        var firstHandle = handleNumbers[0];
        var smoothSteps = options.events.smoothSteps;
        var b = [!upward, upward];
        var f = [upward, !upward];
        // Copy handleNumbers so we don't change the dataset
        handleNumbers = handleNumbers.slice();
        // Check to see which handle is 'leading'.
        // If that one can't move the second can't either.
        if (upward) {
            handleNumbers.reverse();
        }
        // Step 1: get the maximum percentage that any of the handles can move
        if (handleNumbers.length > 1) {
            handleNumbers.forEach(function (handleNumber, o) {
                var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                // Stop if one of the handles can't move.
                if (to === false) {
                    proposal = 0;
                }
                else {
                    proposal = to - proposals[handleNumber];
                    proposals[handleNumber] = to;
                }
            });
        }
        // If using one handle, check backward AND forward
        else {
            b = f = [true];
        }
        var state = false;
        // Step 2: Try to set the handles with the found percentage
        handleNumbers.forEach(function (handleNumber, o) {
            state =
                setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
        });
        // Step 3: If a handle moved, fire events
        if (state) {
            handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                fireEvent("slide", handleNumber);
            });
            // If target is a connect, then fire drag event
            if (connect != undefined) {
                fireEvent("drag", firstHandle);
            }
        }
    }
    // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
    function transformDirection(a, b) {
        return options.dir ? 100 - a - b : a;
    }
    // Updates scope_Locations and scope_Values, updates visual state
    function updateHandlePosition(handleNumber, to) {
        // Update locations.
        scope_Locations[handleNumber] = to;
        // Convert the value to the slider stepping/range.
        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
        var translation = transformDirection(to, 0) - scope_DirOffset;
        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
    }
    // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]
    function setZindex() {
        scope_HandleNumbers.forEach(function (handleNumber) {
            var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
            var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
            scope_Handles[handleNumber].style.zIndex = String(zIndex);
        });
    }
    // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
        if (!exactInput) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
        }
        if (to === false) {
            return false;
        }
        updateHandlePosition(handleNumber, to);
        return true;
    }
    // Updates style attribute for connect nodes
    function updateConnect(index) {
        // Skip connects set to false
        if (!scope_Connects[index]) {
            return;
        }
        var l = 0;
        var h = 100;
        if (index !== 0) {
            l = scope_Locations[index - 1];
        }
        if (index !== scope_Connects.length - 1) {
            h = scope_Locations[index];
        }
        // We use two rules:
        // 'translate' to change the left/top offset;
        // 'scale' to change the width of the element;
        // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
        var connectWidth = h - l;
        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
        scope_Connects[index].style[options.transformRule] =
            translateRule + " " + scaleRule;
    }
    // Parses value passed to .set method. Returns current value if not parse-able.
    function resolveToValue(to, handleNumber) {
        // Setting with null indicates an 'ignore'.
        // Inputting 'false' is invalid.
        if (to === null || to === false || to === undefined) {
            return scope_Locations[handleNumber];
        }
        // If a formatted number was passed, attempt to decode it.
        if (typeof to === "number") {
            to = String(to);
        }
        to = options.format.from(to);
        if (to !== false) {
            to = scope_Spectrum.toStepping(to);
        }
        // If parsing the number failed, use the current value.
        if (to === false || isNaN(to)) {
            return scope_Locations[handleNumber];
        }
        return to;
    }
    // Set the slider value.
    function valueSet(input, fireSetEvent, exactInput) {
        var values = asArray(input);
        var isInit = scope_Locations[0] === undefined;
        // Event fires by default
        fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
        // Animation is optional.
        // Make sure the initial values were set before using animated placement.
        if (options.animate && !isInit) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        // First pass, without lookAhead but with lookBackward. Values are set from left to right.
        scope_HandleNumbers.forEach(function (handleNumber) {
            setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
        });
        var i = scope_HandleNumbers.length === 1 ? 0 : 1;
        // Spread handles evenly across the slider if the range has no size (min=max)
        if (isInit && scope_Spectrum.hasNoSize()) {
            exactInput = true;
            scope_Locations[0] = 0;
            if (scope_HandleNumbers.length > 1) {
                var space_1 = 100 / (scope_HandleNumbers.length - 1);
                scope_HandleNumbers.forEach(function (handleNumber) {
                    scope_Locations[handleNumber] = handleNumber * space_1;
                });
            }
        }
        // Secondary passes. Now that all base values are set, apply constraints.
        // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
        for (; i < scope_HandleNumbers.length; ++i) {
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
            });
        }
        setZindex();
        scope_HandleNumbers.forEach(function (handleNumber) {
            fireEvent("update", handleNumber);
            // Fire the event only for handles that received a new value, as per #579
            if (values[handleNumber] !== null && fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        });
    }
    // Reset slider to initial values
    function valueReset(fireSetEvent) {
        valueSet(options.start, fireSetEvent);
    }
    // Set value for a single handle
    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
        // Ensure numeric input
        handleNumber = Number(handleNumber);
        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
            throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
        }
        // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
        // The exactInput argument can be used to ignore slider stepping (#436)
        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
        fireEvent("update", handleNumber);
        if (fireSetEvent) {
            fireEvent("set", handleNumber);
        }
    }
    // Get the slider value.
    function valueGet(unencoded) {
        if (unencoded === void 0) { unencoded = false; }
        if (unencoded) {
            // return a copy of the raw values
            return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
        }
        var values = scope_Values.map(options.format.to);
        // If only one handle is used, return a single value.
        if (values.length === 1) {
            return values[0];
        }
        return values;
    }
    // Removes classes from the root and empties it.
    function destroy() {
        // remove protected internal listeners
        removeEvent(INTERNAL_EVENT_NS.aria);
        removeEvent(INTERNAL_EVENT_NS.tooltips);
        Object.keys(options.cssClasses).forEach(function (key) {
            removeClass(scope_Target, options.cssClasses[key]);
        });
        while (scope_Target.firstChild) {
            scope_Target.removeChild(scope_Target.firstChild);
        }
        delete scope_Target.noUiSlider;
    }
    function getNextStepsForHandle(handleNumber) {
        var location = scope_Locations[handleNumber];
        var nearbySteps = scope_Spectrum.getNearbySteps(location);
        var value = scope_Values[handleNumber];
        var increment = nearbySteps.thisStep.step;
        var decrement = null;
        // If snapped, directly use defined step value
        if (options.snap) {
            return [
                value - nearbySteps.stepBefore.startValue || null,
                nearbySteps.stepAfter.startValue - value || null,
            ];
        }
        // If the next value in this step moves into the next step,
        // the increment is the start of the next step - the current value
        if (increment !== false) {
            if (value + increment > nearbySteps.stepAfter.startValue) {
                increment = nearbySteps.stepAfter.startValue - value;
            }
        }
        // If the value is beyond the starting point
        if (value > nearbySteps.thisStep.startValue) {
            decrement = nearbySteps.thisStep.step;
        }
        else if (nearbySteps.stepBefore.step === false) {
            decrement = false;
        }
        // If a handle is at the start of a step, it always steps back into the previous step first
        else {
            decrement = value - nearbySteps.stepBefore.highestStep;
        }
        // Now, if at the slider edges, there is no in/decrement
        if (location === 100) {
            increment = null;
        }
        else if (location === 0) {
            decrement = null;
        }
        // As per #391, the comparison for the decrement step can have some rounding issues.
        var stepDecimals = scope_Spectrum.countStepDecimals();
        // Round per #391
        if (increment !== null && increment !== false) {
            increment = Number(increment.toFixed(stepDecimals));
        }
        if (decrement !== null && decrement !== false) {
            decrement = Number(decrement.toFixed(stepDecimals));
        }
        return [decrement, increment];
    }
    // Get the current step size for the slider.
    function getNextSteps() {
        return scope_HandleNumbers.map(getNextStepsForHandle);
    }
    // Updatable: margin, limit, padding, step, range, animate, snap
    function updateOptions(optionsToUpdate, fireSetEvent) {
        // Spectrum is created using the range, snap, direction and step options.
        // 'snap' and 'step' can be updated.
        // If 'snap' and 'step' are not passed, they should remain unchanged.
        var v = valueGet();
        var updateAble = [
            "margin",
            "limit",
            "padding",
            "range",
            "animate",
            "snap",
            "step",
            "format",
            "pips",
            "tooltips",
        ];
        // Only change options that we're actually passed to update.
        updateAble.forEach(function (name) {
            // Check for undefined. null removes the value.
            if (optionsToUpdate[name] !== undefined) {
                originalOptions[name] = optionsToUpdate[name];
            }
        });
        var newOptions = testOptions(originalOptions);
        // Load new options into the slider state
        updateAble.forEach(function (name) {
            if (optionsToUpdate[name] !== undefined) {
                options[name] = newOptions[name];
            }
        });
        scope_Spectrum = newOptions.spectrum;
        // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
        options.margin = newOptions.margin;
        options.limit = newOptions.limit;
        options.padding = newOptions.padding;
        // Update pips, removes existing.
        if (options.pips) {
            pips(options.pips);
        }
        else {
            removePips();
        }
        // Update tooltips, removes existing.
        if (options.tooltips) {
            tooltips();
        }
        else {
            removeTooltips();
        }
        // Invalidate the current positioning so valueSet forces an update.
        scope_Locations = [];
        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
    }
    // Initialization steps
    function setupSlider() {
        // Create the base element, initialize HTML and set classes.
        // Add handles and connect elements.
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base);
        // Attach user events.
        bindSliderEvents(options.events);
        // Use the public value method to set the start values.
        valueSet(options.start);
        if (options.pips) {
            pips(options.pips);
        }
        if (options.tooltips) {
            tooltips();
        }
        aria();
    }
    setupSlider();
    var scope_Self = {
        destroy: destroy,
        steps: getNextSteps,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        setHandle: valueSetHandle,
        reset: valueReset,
        disable: disable,
        enable: enable,
        // Exposed for unit testing, don't use this in your application.
        __moveHandles: function (upward, proposal, handleNumbers) {
            moveHandles(upward, proposal, scope_Locations, handleNumbers);
        },
        options: originalOptions,
        updateOptions: updateOptions,
        target: scope_Target,
        removePips: removePips,
        removeTooltips: removeTooltips,
        getPositions: function () {
            return scope_Locations.slice();
        },
        getTooltips: function () {
            return scope_Tooltips;
        },
        getOrigins: function () {
            return scope_Handles;
        },
        pips: pips, // Issue #594
    };
    return scope_Self;
}
// Run the standard initializer
function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
        throw new Error("noUiSlider: create requires a single element, got: " + target);
    }
    // Throw an error if the slider was already initialized.
    if (target.noUiSlider) {
        throw new Error("noUiSlider: Slider was already initialized.");
    }
    // Test the options and create the slider environment;
    var options = testOptions(originalOptions);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_mobileCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mobileCatalog */ "./src/js/components/mobileCatalog.js");
/* harmony import */ var _components_mobileCatalog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_mobileCatalog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/map */ "./src/js/components/map.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_clickAddCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/clickAddCart */ "./src/js/components/clickAddCart.js");
/* harmony import */ var _components_clickAddCart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_clickAddCart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_accordionAndNouiSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accordionAndNouiSlider */ "./src/js/components/accordionAndNouiSlider.js");









})();

/******/ })()
;
//# sourceMappingURL=main.js.map