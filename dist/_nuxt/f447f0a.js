(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6,7,8],{282:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{menuList:[{name:"pricing",href:"#"},{name:"products",href:"#"},{name:"about us",href:"#"},{name:"careers",href:"#"},{name:"community",href:"#"}]}}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"absolute left-0 w-full md:hidden"},[n("div",{staticClass:"flex-col items-center self-end hidden py-8 mx-auto mt-10 space-y-6 font-bold bg-white shadow-md w-7/8 abosulte sm:self-center left-6 right-6 top-8",attrs:{id:"menu"}},t._l(t.menuList,(function(menu,e){return n("a",{key:e,attrs:{href:menu.href}},[t._v(t._s(menu.name))])})),0)])])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var l={components:{Sidebar:n(282).default},data:function(){return{menuList:[{name:"pricing",href:"#"},{name:"products",href:"#"},{name:"about us",href:"#"},{name:"careers",href:"#"},{name:"community",href:"#"}]}},mounted:function(){var t=document.getElementById("menu-btn"),nav=document.getElementById("menu");t.addEventListener("click",(function(){t.classList.toggle("open"),nav.classList.toggle("flex"),nav.classList.toggle("hidden")}))}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"container relative p-6 mx-auto"},[n("div",{staticClass:"flex items-center justify-between"},[t._m(0),t._v(" "),n("div",{staticClass:"items-center hidden space-x-6 capitalize md:flex"},[t._l(t.menuList,(function(menu,e){return n("a",{key:e,staticClass:"cursor-pointer hover:text-darkGrayishBlue",attrs:{href:menu.link}},[t._v("\n        "+t._s(menu.name)+"\n      ")])})),t._v(" "),n("a",{staticClass:"hidden p-3 px-6 pt-2 text-white rounded-full md:block bg-brightRed baseline hover:bg-brightRedLight",attrs:{href:"#"}},[t._v("Get Started")])],2),t._v(" "),t._m(1)]),t._v(" "),n("Sidebar")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pt-2"},[e("img",{attrs:{src:"/img/logo.svg",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block hamburger md:hidden focus:outline-none",attrs:{id:"menu-btn"}},[n("span",{staticClass:"hamburger-top"}),t._v(" "),n("span",{staticClass:"hamburger-middle"}),t._v(" "),n("span",{staticClass:"hamburger-bottom"})])}],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);var l={},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"hero"}},[n("div",{staticClass:"container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row"},[n("div",{staticClass:"flex flex-col mb-32 space-y-12 md:w-1/2"},[n("h1",{staticClass:"max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"},[t._v("\n        Bring everyone together to build better products.\n      ")]),t._v(" "),n("p",{staticClass:"max-w-sm text-center text-darkGrayishBlue md:text-left"},[t._v("\n        Manage makes it simple for software terms to plan day-to-day tasks\n        while keeping the larger team goals in view.\n      ")]),t._v(" "),n("div",{staticClass:"flex justify-center md:justify-start"},[n("a",{staticClass:"p-3 px-6 pt-2 text-white rounded-full bg-brightRed baseline hover:bg-brightRedLight",attrs:{href:"#"}},[t._v("Get Started")])])]),t._v(" "),n("div",{staticClass:"md:w-1/2"},[n("img",{attrs:{src:"/img/illustration-intro.svg",alt:""}})])])])}],!1,null,null,null);e.default=component.exports},285:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{features:[{id:1,title:"Track company-wide progress",content:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."},{id:2,title:"Advanced built-in reports",content:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."},{id:3,title:"Everything you need in one place",content:"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."}]}}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"features"}},[n("div",{staticClass:"container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"},[t._m(0),t._v(" "),n("div",{staticClass:"flex-col space-y-8 flex- md:w-1/2"},t._l(t.features,(function(e,l){return n("div",{key:l,staticClass:"flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"},[n("div",{staticClass:"rounded-full bg-brightRedSupLight md:bg-transparent"},[n("div",{staticClass:"flex items-center space-x-2"},[n("div",{staticClass:"px-4 py-2 text-white rounded-full round-full md:py-1 bg-brightRed"},[t._v("\n              "+t._s(e.id)+"\n            ")]),t._v(" "),n("h3",{staticClass:"text-base font-bold md:mb-4 md:hidden"},[t._v("\n              "+t._s(e.title)+"\n            ")])])]),t._v(" "),n("div",[n("h3",{staticClass:"hidden mb-4 text-lg font-bold md:block"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("p",{staticClass:"text-darkGrayishBlue"},[t._v(t._s(e.content))])])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col space-y-12 md:w-1/2"},[n("h2",{staticClass:"max-w-md text-4xl font-bold text-center md:text-left"},[t._v("\n        What's Differnce About Manage?\n      ")]),t._v(" "),n("p",{staticClass:"max-w-sm text-center text-darkGrayishBlue md:text-left"},[t._v("\n        Manage provides all the functionality your team needs, without the\n        complexity. Our Software is tailor-made for mordern digital product\n        teams.\n      ")])])}],!1,null,null,null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{testimonials:[{id:1,img:"/img/avatar-anisha.png",name:"Anisha Li",content:"“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"},{id:2,img:"/img/avatar-ali.png",name:"Ali Bravo",content:"“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"},{id:3,img:"/img/avatar-richard.png",name:"Richard Watts",content:"“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"}]}}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"testimonial"}},[n("div",{staticClass:"max-w-6xl px-5 mx-auto mt-32 text-center"},[n("h2",{staticClass:"text-4xl font-bold text-center"},[t._v("\n      What's Difference About Manage?\n    ")]),t._v(" "),n("div",{staticClass:"flex flex-col mt-24 md:flex-row md:space-x-6"},t._l(t.testimonials,(function(e,l){return n("div",{key:l,staticClass:"flex flex-col items-center p-6 mb-12 space-y-6 rounded-lg md:mb-0 bg-veryLightGray md:w-1/3"},[n("img",{staticClass:"w-16 -mt-14",attrs:{src:e.img,alt:""}}),t._v(" "),n("h5",{staticClass:"text-lg font-bold"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"text-sm text-darkGrayishBlue"},[t._v(t._s(e.content))])])})),0),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center my-4 md:my-16"},[n("a",{staticClass:"p-3 px-6 pt-2 text-white rounded-full bg-brightRed baseline hover:bg-brightRedLight",attrs:{href:"#"}},[t._v("Get Started")])])}],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var l={},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-brightRed",attrs:{id:"cta"}},[n("div",{staticClass:"flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 justfiy-between md:py-12 md:flex-row md:space-y-0"},[n("h2",{staticClass:"text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"},[t._v("\n      Simplify how your team works today\n    ")]),t._v(" "),n("a",{staticClass:"p-3 px-6 pt-2 bg-white rounded-full cursor-pointer text-brightRed baseline hover:bg-gray-900",attrs:{href:"#"}},[t._v("Get Started")])])])}],!1,null,null,null);e.default=component.exports},288:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{links:[{name:"Home",link:"#"},{name:"Pricing",link:"#"},{name:"Products",link:"#"},{name:"About",link:"#"}],optionalLinks:[{name:"Careers",link:"#"},{name:"Community",link:"#"},{name:"Privacy Policy",link:"#"}],socials:[{icon:"/img/icon-facebook.svg",link:"#"},{icon:"/img/icon-youtube.svg",link:"#"},{icon:"/img/icon-pinterest.svg",link:"#"},{icon:"/img/icon-instagram.svg",link:"#"}]}}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-veryDarkBlue"},[n("div",{staticClass:"container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"},[n("div",{staticClass:"flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 d:items-start"},[n("div",{staticClass:"mx-auto my-6 text-center text-white md:hidden"},[t._v("\n        Copyright © 2022, All Right Reserved.\n      ")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"flex justify-center space-x-4"},t._l(t.socials,(function(t,e){return n("a",{key:e,attrs:{href:t.link}},[n("img",{staticClass:"h-8",attrs:{src:t.icon,alt:""}})])})),0)]),t._v(" "),n("div",{staticClass:"flex justify-around space-x-32"},[n("div",{staticClass:"flex flex-col space-y-3 text-white"},t._l(t.links,(function(link,e){return n("a",{key:e,staticClass:"cursor-pointer hover:text-brightRed",attrs:{href:link.link}},[t._v(t._s(link.name))])})),0),t._v(" "),n("div",{staticClass:"flex flex-col space-y-3 text-white"},t._l(t.optionalLinks,(function(link,e){return n("a",{key:e,staticClass:"hover:text-brightRed",attrs:{href:link.link}},[t._v(t._s(link.name))])})),0)]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"h-8",attrs:{src:"/img/logo-white.svg",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col justify-between"},[n("form",{attrs:{action:""}},[n("div",{staticClass:"flex space-x-3"},[n("input",{staticClass:"flex-1 px-4 rounded-full focus:outline-none",attrs:{type:"text",placeholder:"Updated in your inbox"}}),t._v(" "),n("button",{staticClass:"px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"},[t._v("\n            Go\n          ")])])]),t._v(" "),n("div",{staticClass:"hidden text-white md:block"},[t._v("\n        Copyright © 2022, All Right Reserved.\n      ")])])}],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var l=n(283),r=n(284),o=n(285),c=n(286),d=n(287),m=n(288),f={components:{Navbar:l.default,"hero-section":r.default,"feature-section":o.default,"testimonial-section":c.default,"cta-section":d.default,Footer:m.default}},v=n(51),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("hero-section"),t._v(" "),n("feature-section"),t._v(" "),n("testimonial-section"),t._v(" "),n("cta-section"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);