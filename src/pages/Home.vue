<template>
  <div class="max-w-2xl mx-auto md:pt-5">
    <jumbotron></jumbotron>
    <pool-details :delegate='delegate'></pool-details>
  </div>
</template>

<script type="text/ecmascript-6">
import DelegateService from '@/services/delegate'
import PoolDetails from '@/components/PoolDetails'
import Jumbotron from '@/components/Jumbotron'
import moment from 'moment'

const netconfig = require('../../network_conf.json')

export default {
  components: {
    Jumbotron,
    PoolDetails
  },

  data: () => ({
    delegate: {}
  }),

  mounted () {
    DelegateService.find(netconfig.pubkey)
      .then(response => {
        this.setDelegate(response)
        this.setNextPayout()
        this.setTotals()
      })
  },

  methods: {

    setDelegate (delegate) {
      this.delegate = delegate
    },

    setTotals (poollogs) {
      this.delegate.poollogs.totalpaid = 0
      this.delegate.poollogs.totalpending = 0

      for (const address in this.delegate.poollogs.accounts) {
        this.delegate.poollogs.totalpaid += this.delegate.poollogs.accounts[address].received
        this.delegate.poollogs.totalpending += this.delegate.poollogs.accounts[address].pending
      }
    },

    setNextPayout () {
      this.delegate.poollogs.nextpayout = moment.unix(this.delegate.poollogs.lastpayout).add(1, 'week').format('MMM D, YYYY')
    }
  },

  computed: {
    // ...mapGetters('ui', ['priceChart']),
  }
}
</script>
