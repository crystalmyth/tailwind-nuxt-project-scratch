(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{282:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{menuList:[{name:"pricing",href:"#"},{name:"products",href:"#"},{name:"about us",href:"#"},{name:"careers",href:"#"},{name:"community",href:"#"}]}}},l=n(51),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"absolute left-0 w-full md:hidden"},[n("div",{staticClass:"flex-col items-center self-end hidden py-8 mx-auto mt-10 space-y-6 font-bold bg-white shadow-md w-7/8 abosulte sm:self-center left-6 right-6 top-8",attrs:{id:"menu"}},e._l(e.menuList,(function(menu,t){return n("a",{key:t,attrs:{href:menu.href}},[e._v(e._s(menu.name))])})),0)])])}),[],!1,null,null,null);t.default=component.exports},283:function(e,t,n){"use strict";n.r(t);var r={components:{Sidebar:n(282).default},data:function(){return{menuList:[{name:"pricing",href:"#"},{name:"products",href:"#"},{name:"about us",href:"#"},{name:"careers",href:"#"},{name:"community",href:"#"}]}},mounted:function(){var e=document.getElementById("menu-btn"),nav=document.getElementById("menu");e.addEventListener("click",(function(){e.classList.toggle("open"),nav.classList.toggle("flex"),nav.classList.toggle("hidden")}))}},l=n(51),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"container relative p-6 mx-auto"},[n("div",{staticClass:"flex items-center justify-between"},[e._m(0),e._v(" "),n("div",{staticClass:"items-center hidden space-x-6 capitalize md:flex"},[e._l(e.menuList,(function(menu,t){return n("a",{key:t,staticClass:"cursor-pointer hover:text-darkGrayishBlue",attrs:{href:menu.link}},[e._v("\n        "+e._s(menu.name)+"\n      ")])})),e._v(" "),n("a",{staticClass:"hidden p-3 px-6 pt-2 text-white rounded-full md:block bg-brightRed baseline hover:bg-brightRedLight",attrs:{href:"#"}},[e._v("Get Started")])],2),e._v(" "),e._m(1)]),e._v(" "),n("Sidebar")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pt-2"},[t("img",{attrs:{src:"img/logo.svg",alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block hamburger md:hidden focus:outline-none",attrs:{id:"menu-btn"}},[n("span",{staticClass:"hamburger-top"}),e._v(" "),n("span",{staticClass:"hamburger-middle"}),e._v(" "),n("span",{staticClass:"hamburger-bottom"})])}],!1,null,null,null);t.default=component.exports}}]);