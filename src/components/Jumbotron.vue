<template>
  <div class="jumbotron max-w-xl bg-grey-lighter mx-auto p-4 xl:p-8 shadow flex flex-col items-center sm:items-end justify-end bg-right sm:bg-left">
    <h1 class="text-5xl my-4 block sm:hidden"><a href="#">{{ description.title }}</a></h1>

    <div class="flex flex-col sm:flex-row w-full justify-between items-center">
      <div class="mb-4 sm:mb-0">
        <p v-if="description.desc" class="font-normal text-xl text-white" :class="{ 'mb-4': description.subdesc }">{{ description.desc }}</p>
        <p v-if="description.subdesc" class="mb-8 text-md text-white">{{ description.subdesc }}</p>
      </div>

      <div class="font-normal w-full sm:w-auto flex text-center">
        <a v-for="(url, text, index) in buttons" :key="url" :href="url" class="inline-block px-4 py-3 w-full sm:w-auto ml-0 sm:ml-3 bg-blue text-white shadow" :class="{ 'ml-3': index > 0 }">
          {{ text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import { mapGetters } from 'vuex'

export default {
  props: {
    buttons: {
      type: Object
    },
    description: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  .jumbotron {
    min-height: 390px;
    background-image: url('../assets/images/background.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
