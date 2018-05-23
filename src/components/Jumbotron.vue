<template>
  <div class="jumbotron max-w-xl bg-grey-lighter mx-auto p-8 xl:p-12-16 shadow">
    <h1 class="text-5xl my-4"><a href="#">dated delegate pool</a></h1>

    <p class="mb-2 text-xl">sharing 90% of forged amount (reward &amp; fees) to voters</p>
    <p class="mb-8 text-md">public pool ~ weekly payouts ~ min payout 1 BPL ~ fees covered</p>

    <div class="font-normal">
      <a v-for="(button, index) in buttons" :key="index" :href="button.url" class="inline-block px-4 py-3 mr-3 bg-blue text-white shadow">
        {{ button.text }}
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import { mapGetters } from 'vuex'

export default {
  props: {
    buttons: {
      type: Array
    }
  }
}
</script>

<style>
  .jumbotron {
    background-image: url('../assets/images/background.svg');
    background-size: 500px 500px;
    background-position: right -120px bottom -120px;
    background-repeat: no-repeat;
  }
</style>
