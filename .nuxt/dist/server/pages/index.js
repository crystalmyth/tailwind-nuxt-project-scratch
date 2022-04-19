exports.ids = [8,1,2,3,4,5,6,7];
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

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/HeroSection.vue?vue&type=template&id=1b281970&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"hero"}},[_vm._ssrNode("<div class=\"container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row\"><div class=\"flex flex-col mb-32 space-y-12 md:w-1/2\"><h1 class=\"max-w-md text-4xl font-bold text-center md:text-5xl md:text-left\">\n        Bring everyone together to build better products.\n      </h1> <p class=\"max-w-sm text-center text-darkGrayishBlue md:text-left\">\n        Manage makes it simple for software terms to plan day-to-day tasks\n        while keeping the larger team goals in view.\n      </p> <div class=\"flex justify-center md:justify-start\"><a href=\"#\" class=\"p-3 px-6 pt-2 text-white rounded-full bg-brightRed baseline hover:bg-brightRedLight\">Get Started</a></div></div> <div class=\"md:w-1/2\"><img src=\"/img/illustration-intro.svg\" alt></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/HeroSection.vue?vue&type=template&id=1b281970&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/HeroSection.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HeroSectionvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/home/HeroSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_HeroSectionvue_type_script_lang_js_ = (HeroSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/HeroSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_HeroSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "14706578"
  
)

/* harmony default export */ var HeroSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/FeatureSection.vue?vue&type=template&id=ceaf608c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"features"}},[_vm._ssrNode("<div class=\"container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row\"><div class=\"flex flex-col space-y-12 md:w-1/2\"><h2 class=\"max-w-md text-4xl font-bold text-center md:text-left\">\n        What's Differnce About Manage?\n      </h2> <p class=\"max-w-sm text-center text-darkGrayishBlue md:text-left\">\n        Manage provides all the functionality your team needs, without the\n        complexity. Our Software is tailor-made for mordern digital product\n        teams.\n      </p></div> <div class=\"flex-col space-y-8 flex- md:w-1/2\">"+(_vm._ssrList((_vm.features),function(feature,index){return ("<div class=\"flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row\"><div class=\"rounded-full bg-brightRedSupLight md:bg-transparent\"><div class=\"flex items-center space-x-2\"><div class=\"px-4 py-2 text-white rounded-full round-full md:py-1 bg-brightRed\">"+_vm._ssrEscape("\n              "+_vm._s(feature.id)+"\n            ")+"</div> <h3 class=\"text-base font-bold md:mb-4 md:hidden\">"+_vm._ssrEscape("\n              "+_vm._s(feature.title)+"\n            ")+"</h3></div></div> <div><h3 class=\"hidden mb-4 text-lg font-bold md:block\">"+_vm._ssrEscape("\n            "+_vm._s(feature.title)+"\n          ")+"</h3> <p class=\"text-darkGrayishBlue\">"+_vm._ssrEscape(_vm._s(feature.content))+"</p></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/FeatureSection.vue?vue&type=template&id=ceaf608c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/FeatureSection.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FeatureSectionvue_type_script_lang_js_ = ({
  data() {
    return {
      features: [{
        id: 1,
        title: 'Track company-wide progress',
        content: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
      }, {
        id: 2,
        title: 'Advanced built-in reports',
        content: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
      }, {
        id: 3,
        title: 'Everything you need in one place',
        content: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/home/FeatureSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_FeatureSectionvue_type_script_lang_js_ = (FeatureSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/FeatureSection.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_FeatureSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "759c4034"
  
)

/* harmony default export */ var FeatureSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/TestimonialSection.vue?vue&type=template&id=76c0429b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"testimonial"}},[_vm._ssrNode("<div class=\"max-w-6xl px-5 mx-auto mt-32 text-center\"><h2 class=\"text-4xl font-bold text-center\">\n      What's Difference About Manage?\n    </h2> <div class=\"flex flex-col mt-24 md:flex-row md:space-x-6\">"+(_vm._ssrList((_vm.testimonials),function(testimonial,index){return ("<div class=\"flex flex-col items-center p-6 mb-12 space-y-6 rounded-lg md:mb-0 bg-veryLightGray md:w-1/3\"><img"+(_vm._ssrAttr("src",testimonial.img))+" alt class=\"w-16 -mt-14\"> <h5 class=\"text-lg font-bold\">"+_vm._ssrEscape(_vm._s(testimonial.name))+"</h5> <p class=\"text-sm text-darkGrayishBlue\">"+_vm._ssrEscape(_vm._s(testimonial.content))+"</p></div>")}))+"</div> <div class=\"flex justify-center my-4 md:my-16\"><a href=\"#\" class=\"p-3 px-6 pt-2 text-white rounded-full bg-brightRed baseline hover:bg-brightRedLight\">Get Started</a></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/TestimonialSection.vue?vue&type=template&id=76c0429b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/TestimonialSection.vue?vue&type=script&lang=js&
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
/* harmony default export */ var TestimonialSectionvue_type_script_lang_js_ = ({
  data() {
    return {
      testimonials: [{
        id: 1,
        img: '/img/avatar-anisha.png',
        name: 'Anisha Li',
        content: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
      }, {
        id: 2,
        img: '/img/avatar-ali.png',
        name: 'Ali Bravo',
        content: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
      }, {
        id: 3,
        img: '/img/avatar-richard.png',
        name: 'Richard Watts',
        content: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/home/TestimonialSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_TestimonialSectionvue_type_script_lang_js_ = (TestimonialSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/TestimonialSection.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_TestimonialSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "bc4a69c6"
  
)

/* harmony default export */ var TestimonialSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/CTASection.vue?vue&type=template&id=47a8784f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-brightRed",attrs:{"id":"cta"}},[_vm._ssrNode("<div class=\"flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 justfiy-between md:py-12 md:flex-row md:space-y-0\"><h2 class=\"text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left\">\n      Simplify how your team works today\n    </h2> <a href=\"#\" class=\"p-3 px-6 pt-2 bg-white rounded-full cursor-pointer text-brightRed baseline hover:bg-gray-900\">Get Started</a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/CTASection.vue?vue&type=template&id=47a8784f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/CTASection.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CTASectionvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/home/CTASection.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_CTASectionvue_type_script_lang_js_ = (CTASectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/home/CTASection.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_CTASectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a73affe8"
  
)

/* harmony default export */ var CTASection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/include/Footer.vue?vue&type=template&id=68bce8d9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"bg-veryDarkBlue"},[_vm._ssrNode("<div class=\"container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0\"><div class=\"flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 d:items-start\"><div class=\"mx-auto my-6 text-center text-white md:hidden\">\n        Copyright © 2022, All Right Reserved.\n      </div> <div><img src=\"/img/logo-white.svg\" alt class=\"h-8\"></div> <div class=\"flex justify-center space-x-4\">"+(_vm._ssrList((_vm.socials),function(social,index){return ("<a"+(_vm._ssrAttr("href",social.link))+"><img"+(_vm._ssrAttr("src",social.icon))+" alt class=\"h-8\"></a>")}))+"</div></div> <div class=\"flex justify-around space-x-32\"><div class=\"flex flex-col space-y-3 text-white\">"+(_vm._ssrList((_vm.links),function(link,index){return ("<a"+(_vm._ssrAttr("href",link.link))+" class=\"cursor-pointer hover:text-brightRed\">"+_vm._ssrEscape(_vm._s(link.name))+"</a>")}))+"</div> <div class=\"flex flex-col space-y-3 text-white\">"+(_vm._ssrList((_vm.optionalLinks),function(link,index){return ("<a"+(_vm._ssrAttr("href",link.link))+" class=\"hover:text-brightRed\">"+_vm._ssrEscape(_vm._s(link.name))+"</a>")}))+"</div></div> <div class=\"flex flex-col justify-between\"><form action><div class=\"flex space-x-3\"><input type=\"text\" placeholder=\"Updated in your inbox\" class=\"flex-1 px-4 rounded-full focus:outline-none\"> <button class=\"px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none\">\n            Go\n          </button></div></form> <div class=\"hidden text-white md:block\">\n        Copyright © 2022, All Right Reserved.\n      </div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/include/Footer.vue?vue&type=template&id=68bce8d9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/include/Footer.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  data() {
    return {
      links: [{
        name: 'Home',
        link: '#'
      }, {
        name: 'Pricing',
        link: '#'
      }, {
        name: 'Products',
        link: '#'
      }, {
        name: 'About',
        link: '#'
      }],
      optionalLinks: [{
        name: 'Careers',
        link: '#'
      }, {
        name: 'Community',
        link: '#'
      }, {
        name: 'Privacy Policy',
        link: '#'
      }],
      socials: [{
        icon: '/img/icon-facebook.svg',
        link: '#'
      }, {
        icon: '/img/icon-youtube.svg',
        link: '#'
      }, {
        icon: '/img/icon-pinterest.svg',
        link: '#'
      }, {
        icon: '/img/icon-instagram.svg',
        link: '#'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/include/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var include_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/include/Footer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  include_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5588c26a"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2b8a61f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar'),_vm._ssrNode(" "),_c('hero-section'),_vm._ssrNode(" "),_c('feature-section'),_vm._ssrNode(" "),_c('testimonial-section'),_vm._ssrNode(" "),_c('cta-section'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2b8a61f8&

// EXTERNAL MODULE: ./components/include/Navbar.vue + 4 modules
var Navbar = __webpack_require__(31);

// EXTERNAL MODULE: ./components/home/HeroSection.vue + 4 modules
var HeroSection = __webpack_require__(32);

// EXTERNAL MODULE: ./components/home/FeatureSection.vue + 4 modules
var FeatureSection = __webpack_require__(33);

// EXTERNAL MODULE: ./components/home/TestimonialSection.vue + 4 modules
var TestimonialSection = __webpack_require__(34);

// EXTERNAL MODULE: ./components/home/CTASection.vue + 4 modules
var CTASection = __webpack_require__(35);

// EXTERNAL MODULE: ./components/include/Footer.vue + 4 modules
var Footer = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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






/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Navbar: Navbar["default"],
    'hero-section': HeroSection["default"],
    'feature-section': FeatureSection["default"],
    'testimonial-section': TestimonialSection["default"],
    'cta-section': CTASection["default"],
    Footer: Footer["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "65bd0712"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map