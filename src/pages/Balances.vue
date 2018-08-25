<template>
  <div class="max-w-2xl mx-auto px-4 pb-4 md:pt-5">
    <balances :balances='balances'></balances>
  </div>
</template>

<script type="text/ecmascript-6">
import Balances from '@/components/tables/Balances'
import PoollogService from '@/services/poollogs'

export default {
  data: () => ({
    balances: []
  }),

  components: {
    Balances
  },

  mounted () {
    PoollogService.get().then(response => {
      this.setBalances(response.data.accounts)
    })
  },

  methods: {
    setBalances (accounts) {
      for (const addr in accounts) {
        let row = accounts[addr]
        row['address'] = addr
        this.balances.push(row)
      }
    }
  },

  computed: {
    // ...mapGetters('ui', ['headerType', 'menuVisible']),
  }
}
</script>

<style scoped>

</style>
