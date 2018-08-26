<template>
  <header
    class="sticky pin-t min-h-80px z-50 w-full mx-auto flex shadow-theme xl:rounded-md mb-5 sm:mb-10 justify-center bg-white-75">

    <router-link :to="{ name: 'home' }" class="flex items-center">
      Home
    </router-link>

    <span class="mx-6 flex items-center"> | </span>

    <router-link :to="{ name: 'balances' }" class="flex items-center">
      Balances
    </router-link>

    <span class="mx-6 flex items-center"> | </span>

    <a href="https://t.me/BitNow" class="flex items-center">Contact</a>

  </header>
</template>

<script type="text/ecmascript-6">
// import { mapGetters } from 'vuex'

export default {
  components: {
  },

  computed: {
    // ...mapGetters('ui', ['headerType', 'menuVisible']),
  }
}
</script>

<style scoped>

</style>
