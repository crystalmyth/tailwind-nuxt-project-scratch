<template>
  <footer class="bg-veryDarkBlue">
    <!-- Flex Container -->
    <div
      class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
    >
      <!-- Logo & Social Link Container -->
      <div
        class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 d:items-start"
      >
        <div class="mx-auto my-6 text-center text-white md:hidden">
          Copyright &copy; 2022, All Right Reserved.
        </div>
        <!-- Logo -->
        <div>
          <img src="/img/logo-white.svg" alt="" class="h-8" />
        </div>
        <!-- Social Link Container -->
        <div class="flex justify-center space-x-4">
          <!-- Link -->
          <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.link"
          >
            <img :src="social.icon" alt="" class="h-8" />
          </a>
        </div>
      </div>
      <!-- List Container -->
      <div class="flex justify-around space-x-32">
        <div class="flex flex-col space-y-3 text-white">
          <a
            v-for="(link, index) in links"
            :key="index"
            :href="link.link"
            class="cursor-pointer hover:text-brightRed"
            >{{ link.name }}</a
          >
        </div>
        <div class="flex flex-col space-y-3 text-white">
          <a
            v-for="(link, index) in optionalLinks"
            :key="index"
            :href="link.link"
            class="hover:text-brightRed"
            >{{ link.name }}</a
          >
        </div>
      </div>

      <!-- Input Container -->
      <div class="flex flex-col justify-between">
        <form action="">
          <div class="flex space-x-3">
            <input
              type="text"
              class="flex-1 px-4 rounded-full focus:outline-none"
              placeholder="Updated in your inbox"
            />
            <button
              class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
            >
              Go
            </button>
          </div>
        </form>
        <div class="hidden text-white md:block">
          Copyright &copy; 2022, All Right Reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Home',
          link: '#',
        },
        {
          name: 'Pricing',
          link: '#',
        },
        {
          name: 'Products',
          link: '#',
        },
        {
          name: 'About',
          link: '#',
        },
      ],
      optionalLinks: [
        {
          name: 'Careers',
          link: '#',
        },
        {
          name: 'Community',
          link: '#',
        },
        {
          name: 'Privacy Policy',
          link: '#',
        },
      ],
      socials: [
        {
          icon: '/img/icon-facebook.svg',
          link: '#',
        },
        {
          icon: '/img/icon-youtube.svg',
          link: '#',
        },
        {
          icon: '/img/icon-pinterest.svg',
          link: '#',
        },
        {
          icon: '/img/icon-instagram.svg',
          link: '#',
        },
      ],
    }
  },
}
</script>

<style></style>
