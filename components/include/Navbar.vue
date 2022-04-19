<template>
  <nav class="container relative p-6 mx-auto">
    <!-- flex container -->
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="pt-2">
        <img src="/img/logo.svg" alt="" />
      </div>
      <!-- Menu Items -->
      <div class="items-center hidden space-x-6 capitalize md:flex">
        <a
          v-for="(menu, index) in menuList"
          :key="index"
          :href="menu.link"
          class="cursor-pointer hover:text-darkGrayishBlue"
        >
          {{ menu.name }}
        </a>
        <!-- Button -->
        <a
          href="#"
          class="hidden p-3 px-6 pt-2 text-white rounded-full md:block bg-brightRed baseline hover:bg-brightRedLight"
          >Get Started</a
        >
      </div>
      <!-- Hamburder Icon -->
      <div id="menu-btn" class="block hamburger md:hidden focus:outline-none">
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </div>
    </div>
    <Sidebar />
  </nav>
</template>

<script>
import Sidebar from '@/components/include/Sidebar'
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      menuList: [
        { name: 'pricing', href: '#' },
        { name: 'products', href: '#' },
        { name: 'about us', href: '#' },
        { name: 'careers', href: '#' },
        { name: 'community', href: '#' },
      ],
    }
  },
  mounted() {
    const btn = document.getElementById('menu-btn')
    const nav = document.getElementById('menu')

    btn.addEventListener('click', () => {
      btn.classList.toggle('open')
      nav.classList.toggle('flex')
      nav.classList.toggle('hidden')
    })
  },
}
</script>

<style></style>
