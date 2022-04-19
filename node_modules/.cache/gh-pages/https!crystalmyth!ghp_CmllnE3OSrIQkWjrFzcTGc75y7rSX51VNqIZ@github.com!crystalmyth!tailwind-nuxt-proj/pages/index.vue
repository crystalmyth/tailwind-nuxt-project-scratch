<template>
  <div>
    <Navbar />
    <hero-section />
    <feature-section />
    <testimonial-section />
    <cta-section />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/include/Navbar'
import HeroSection from '@/components/home/HeroSection'
import FeatureSection from '@/components/home/FeatureSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/include/Footer'
export default {
  components: {
    Navbar,
    'hero-section': HeroSection,
    'feature-section': FeatureSection,
    'testimonial-section': TestimonialSection,
    'cta-section': CTASection,
    Footer,
  },
}
</script>
