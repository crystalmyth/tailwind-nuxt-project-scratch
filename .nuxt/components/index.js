export const IncludeFooter = () => import('../../components/include/Footer.vue' /* webpackChunkName: "components/include-footer" */).then(c => wrapFunctional(c.default || c))
export const IncludeNavbar = () => import('../../components/include/Navbar.vue' /* webpackChunkName: "components/include-navbar" */).then(c => wrapFunctional(c.default || c))
export const IncludeSidebar = () => import('../../components/include/Sidebar.vue' /* webpackChunkName: "components/include-sidebar" */).then(c => wrapFunctional(c.default || c))
export const HomeCTASection = () => import('../../components/home/CTASection.vue' /* webpackChunkName: "components/home-c-t-a-section" */).then(c => wrapFunctional(c.default || c))
export const HomeFeatureSection = () => import('../../components/home/FeatureSection.vue' /* webpackChunkName: "components/home-feature-section" */).then(c => wrapFunctional(c.default || c))
export const HomeHeroSection = () => import('../../components/home/HeroSection.vue' /* webpackChunkName: "components/home-hero-section" */).then(c => wrapFunctional(c.default || c))
export const HomeTestimonialSection = () => import('../../components/home/TestimonialSection.vue' /* webpackChunkName: "components/home-testimonial-section" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
