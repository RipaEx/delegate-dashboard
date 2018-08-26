<template>
  <div class="jumbotron max-w-xl bg-grey-lighter mx-auto p-4 xl:p-8 shadow flex flex-col items-end justify-end">
    <!-- <h1 class="text-5xl my-4"><a href="#">{{ description.title }}</a></h1> -->

    <p v-if="description.desc" class="mb-4 font-normal text-xl text-white">{{ description.desc }}</p>
    <p v-if="description.subdesc" class="mb-8 text-md text-white">{{ description.subdesc }}</p>

    <div class="font-normal">
      <a v-for="(url, text) in buttons" :key="url" :href="url" class="inline-block px-4 py-3 ml-3 bg-blue text-white shadow">
        {{ text }}
      </a>
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
