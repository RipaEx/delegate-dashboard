<template>
  <div class="max-w-xl mx-auto">
    <div class="flex justify-between mt-6">
      <div class="bg-grey-lighter w-full mr-3 panel">
        <h2 class="mb-2">Rank</h2>
        <p>{{ delegate.rate }}</p>
      </div>
      <div class="bg-grey-lighter w-full mx-3 panel">
        <h2 class="mb-2">Productivity</h2>
        <p>{{ delegate.productivity }}%</p>
      </div>
      <div class="bg-grey-lighter w-full mx-3 panel">
        <h2 class="mb-2">Approval</h2>
        <p>{{ delegate.approval }}%</p>
      </div>
      <div class="bg-grey-lighter w-full ml-3 panel">
        <h2 class="mb-2">Voters</h2>
        <p>{{ delegate.voters - 1 }}</p>
      </div>
    </div>

    <div class="flex justify-between mt-6">
      <div class="bg-grey-lighter w-full mr-3 panel">
        <h2 class="mb-2">Total paid</h2>
        <p>{{ totalpaid }} BPL</p>
      </div>
      <div class="bg-grey-lighter w-full mx-3 panel">
        <h2 class="mb-2">Total pending</h2>
        <p>{{ totalpending }} BPL</p>
      </div>
      <div class="bg-grey-lighter w-full ml-3 panel">
        <h2 class="mb-2">Next payout</h2>
        <p>{{ nextpayout }}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import DelegateService from '@/services/delegate'
import moment from 'moment'
const netconfig = require('../../network_conf.json')
const poollog = require('../../poollog.json')

export default {

  components: {
    DelegateService
  },

  data: () => ({
    delegate: {},
    totalpaid: 0,
    totalpending: 0,
    nextpayout: moment.unix(poollog.lastpayout).add(1, 'week').format('MMM D, YYYY')
  }),

  mounted () {
    DelegateService.find(netconfig.pubkey)
      .then(response => this.setDelegate(response), this.setTotals())
  },

  methods: {
    setDelegate (delegate) {
      this.delegate = delegate
    },

    setTotals () {
      for (const address in poollog.accounts) {
        this.totalpaid += poollog.accounts[address].received
        this.totalpending += poollog.accounts[address].pending
      }
    }
  },

  computed: {
  }
}
</script>

<style scoped>
  .panel {
    padding: 3em 4em;
  }
</style>
