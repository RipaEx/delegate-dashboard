<template>
  <div class="max-w-2xl mx-auto md:pt-5">
    <balances :balances='balances'></balances>
  </div>
</template>

<script type="text/ecmascript-6">
import Balances from '@/components/tables/Balances'
import poollogs from '../../poollogs.json'

export default {
  data: () => ({
    balances: []
  }),

  components: {
    Balances
  },

  mounted () {
    this.getBalances()
  },

  methods: {
    getBalances () {
      for (const addr in poollogs.accounts) {
        let it = poollogs.accounts[addr]
        it['address'] = addr
        this.balances.push(it)
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
