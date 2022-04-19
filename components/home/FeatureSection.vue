<template>
  <div id="features">
    <!-- Flex Container -->
    <div
      class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
    >
      <!-- What Difference -->
      <div class="flex flex-col space-y-12 md:w-1/2">
        <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
          What's Differnce About Manage?
        </h2>
        <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our Software is tailor-made for mordern digital product
          teams.
        </p>
      </div>
      <!-- NUmber List -->
      <div class="flex-col space-y-8 flex- md:w-1/2">
        <!-- List Item -->
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
        >
          <!-- Heading -->
          <div class="rounded-full bg-brightRedSupLight md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div
                class="px-4 py-2 text-white rounded-full round-full md:py-1 bg-brightRed"
              >
                {{ feature.id }}
              </div>
              <h3 class="text-base font-bold md:mb-4 md:hidden">
                {{ feature.title }}
              </h3>
            </div>
          </div>
          <div>
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              {{ feature.title }}
            </h3>
            <p class="text-darkGrayishBlue">{{ feature.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          id: 1,
          title: 'Track company-wide progress',
          content:
            'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
        },
        {
          id: 2,
          title: 'Advanced built-in reports',
          content:
            'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
        },
        {
          id: 3,
          title: 'Everything you need in one place',
          content:
            'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
        },
      ],
    }
  },
}
</script>

<style></style>
