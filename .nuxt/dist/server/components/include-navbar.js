exports.ids = [6,7];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/include/Sidebar.vue?vue&type=template&id=2631cf0a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"absolute left-0 w-full md:hidden\"><div id=\"menu\" class=\"flex-col items-center self-end hidden py-8 mx-auto mt-10 space-y-6 font-bold bg-white shadow-md w-7/8 abosulte sm:self-center left-6 right-6 top-8\">"+(_vm._ssrList((_vm.menuList),function(menu,index){return ("<a"+(_vm._ssrAttr("href",menu.href))+">"+_vm._ssrEscape(_vm._s(menu.name))+"</a>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/include/Sidebar.vue?vue&type=template&id=2631cf0a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/include/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  data() {
    return {
      menuList: [{
        name: 'pricing',
        href: '#'
      }, {
        name: 'products',
        href: '#'
      }, {
        name: 'about us',
        href: '#'
      }, {
        name: 'careers',
        href: '#'
      }, {
        name: 'community',
        href: '#'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/include/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var include_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/include/Sidebar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  include_Sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7ae2b6dc"
  
)

/* harmony default export */ var Sidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/include/Navbar.vue?vue&type=template&id=534cdeb8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"container relative p-6 mx-auto"},[_vm._ssrNode("<div class=\"flex items-center justify-between\"><div class=\"pt-2\"><img src=\"/img/logo.svg\" alt></div> <div class=\"items-center hidden space-x-6 capitalize md:flex\">"+(_vm._ssrList((_vm.menuList),function(menu,index){return ("<a"+(_vm._ssrAttr("href",menu.link))+" class=\"cursor-pointer hover:text-darkGrayishBlue\">"+_vm._ssrEscape("\n        "+_vm._s(menu.name)+"\n      ")+"</a>")}))+" <a href=\"#\" class=\"hidden p-3 px-6 pt-2 text-white rounded-full md:block bg-brightRed baseline hover:bg-brightRedLight\">Get Started</a></div> <div id=\"menu-btn\" class=\"block hamburger md:hidden focus:outline-none\"><span class=\"hamburger-top\"></span> <span class=\"hamburger-middle\"></span> <span class=\"hamburger-bottom\"></span></div></div> "),_c('Sidebar')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/include/Navbar.vue?vue&type=template&id=534cdeb8&

// EXTERNAL MODULE: ./components/include/Sidebar.vue + 4 modules
var Sidebar = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/include/Navbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  components: {
    Sidebar: Sidebar["default"]
  },

  data() {
    return {
      menuList: [{
        name: 'pricing',
        href: '#'
      }, {
        name: 'products',
        href: '#'
      }, {
        name: 'about us',
        href: '#'
      }, {
        name: 'careers',
        href: '#'
      }, {
        name: 'community',
        href: '#'
      }]
    };
  },

  mounted() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
    });
  }

});
// CONCATENATED MODULE: ./components/include/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var include_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/include/Navbar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  include_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "73edc2c0"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=include-navbar.js.map