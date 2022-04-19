<template>
  <div id="testimonial">
    <!-- Container to heading to test block -->
    <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
      <!-- Heading -->
      <h2 class="text-4xl font-bold text-center">
        What's Difference About Manage?
      </h2>
      <!-- Testimonial Container -->
      <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
        <!-- Testimonal -->
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="flex flex-col items-center p-6 mb-12 space-y-6 rounded-lg md:mb-0 bg-veryLightGray md:w-1/3"
        >
          <img :src="testimonial.img" alt="" class="w-16 -mt-14" />
          <h5 class="text-lg font-bold">{{ testimonial.name }}</h5>
          <p class="text-sm text-darkGrayishBlue">{{ testimonial.content }}</p>
        </div>
      </div>
      <div class="flex justify-center my-4 md:my-16">
        <a
          href="#"
          class="p-3 px-6 pt-2 text-white rounded-full bg-brightRed baseline hover:bg-brightRedLight"
          >Get Started</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          img: '/img/avatar-anisha.png',
          name: 'Anisha Li',
          content:
            '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
        },
        {
          id: 2,
          img: '/img/avatar-ali.png',
          name: 'Ali Bravo',
          content:
            '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
        },
        {
          id: 3,
          img: '/img/avatar-richard.png',
          name: 'Richard Watts',
          content:
            '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
        },
      ],
    }
  },
}
</script>

<style></style>
