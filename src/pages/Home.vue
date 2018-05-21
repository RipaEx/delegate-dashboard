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
import poollogs from '../../poollogs.json'

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
        this.setTotals()
        this.setNextPayout()
      })
  },

  methods: {
    setDelegate (delegate) {
      this.delegate = delegate
    },

    setTotals () {
      this.delegate.totalpaid = 0
      this.delegate.totalpending = 0

      for (const address in poollogs.accounts) {
        this.delegate.totalpaid += poollogs.accounts[address].received
        this.delegate.totalpending += poollogs.accounts[address].pending
      }
    },

    setNextPayout () {
      this.delegate.nextpayout = moment.unix(poollogs.lastpayout).add(1, 'week').format('MMM D, YYYY')
    }
  },

  computed: {
    // ...mapGetters('ui', ['priceChart']),
  }
}
</script>
