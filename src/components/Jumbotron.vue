<template>
  <div class="jumbotron max-w-xl bg-grey-lighter mx-auto p-8 xl:p-12-16 shadow">
    <h1 class="text-5xl my-4"><a href="#">{{ description.title }}</a></h1>

    <p v-if="description.desc" class="mb-2 text-xl">{{ description.desc }}</p>
    <p v-if="description.subdesc" class="mb-8 text-md">{{ description.subdesc }}</p>

    <div class="font-normal">
      <a v-for="(url, text) in buttons" :key="url" :href="url" class="inline-block px-4 py-3 mr-3 bg-blue text-white shadow">
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
    background-image: url('../assets/images/background.png');
    background-size: 500px 500px;
    background-position: right -120px bottom -120px;
    background-repeat: no-repeat;
  }
</style>
