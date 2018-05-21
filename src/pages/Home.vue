<template>
  <div class="max-w-2xl mx-auto md:pt-5">
    <jumbotron></jumbotron>
    <pool-details></pool-details>

<!--
    <section v-if="priceChart" class="hidden md:block mb-5 bg-theme-feature-background xl:rounded-lg">
      <chart-wrapper></chart-wrapper>
    </section>

    <section class="page-section py-5 md:py-10">
      <nav class="mx-5 sm:mx-10 mb-8 border-b flex items-end">
        <div @click="dataView = 'transactions'"
             :class="dataView === 'transactions' ? 'active-tab' : 'inactive-tab'">

        </div>
        <div @click="dataView = 'blocks'"
             :class="dataView === 'blocks' ? 'active-tab' : 'inactive-tab'">

        </div>
      </nav>

      <latest-transactions v-if="dataView === 'transactions'"></latest-transactions>

      <latest-blocks v-if="dataView === 'blocks'"></latest-blocks>
    </section> -->
  </div>
</template>

<script type="text/ecmascript-6">
// import { mapGetters } from 'vuex'
import Jumbotron from '@/components/Jumbotron'
import PoolDetails from '@/components/PoolDetails'

export default {
  components: {
    Jumbotron,
    PoolDetails
  },

  data: () => ({

  }),

  computed: {
    // ...mapGetters('ui', ['priceChart']),
  }
}
</script>
