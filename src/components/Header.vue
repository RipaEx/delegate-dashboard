<template>
  <header
    class="sticky pin-t min-h-80px z-50 w-full mx-auto flex shadow-theme xl:rounded-md mb-5 sm:mb-10 justify-center bg-white-75">

    <router-link :to="{ name: 'home' }" class="flex items-center mr-6">
      Home
    </router-link>

    <router-link :to="{ name: 'balances' }" class="flex items-center">
      Balances
    </router-link>

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
