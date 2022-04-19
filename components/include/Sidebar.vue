<template>
  <div>
    <!-- Mobile Menu -->
    <div class="absolute left-0 w-full md:hidden">
      <div
        id="menu"
        class="flex-col items-center self-end hidden py-8 mx-auto mt-10 space-y-6 font-bold bg-white shadow-md w-7/8 abosulte sm:self-center left-6 right-6 top-8"
      >
        <a v-for="(menu, index) in menuList" :key="index" :href="menu.href">{{
          menu.name
        }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
}
</script>

<style></style>
