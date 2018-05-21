<template>
  <div class="max-w-xl mx-auto">
    <div class="md:flex justify-stretch md:mt-6">
      <div class="flex flex-col sm:flex-row w-full">
        <div class="bg-grey-lighter w-full mr-3 mt-6 md:mt-0 p-8">
          <h2 class="mb-2">Rank</h2>
          <p>{{ delegate.rate }}</p>
        </div>
        <div class="bg-grey-lighter w-full sm:ml-3 md:mr-3 mt-6 md:mt-0 p-8">
          <h2 class="mb-2">Productivity</h2>
          <p>{{ delegate.productivity }}%</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row w-full mt-6 md:mt-0">
        <div class="bg-grey-lighter w-full mr-3 md:mx-3 p-8">
          <h2 class="mb-2">Approval</h2>
          <p>{{ delegate.approval }}%</p>
        </div>
        <div class="bg-grey-lighter w-full sm:ml-3 mt-6 sm:mt-0 p-8">
          <h2 class="mb-2">Voters</h2>
          <p>{{ delegate.voters - 1 }}</p>
        </div>
      </div>
    </div>

    <div class="md:flex md:justify-between mt-6">
      <div class="bg-grey-lighter w-full md:mr-3 p-8 mt-6 md:mt-0">
        <h2 class="mb-2">Total paid</h2>
        <p>{{ totalpaid }} BPL</p>
      </div>
      <div class="bg-grey-lighter w-full md:mx-3 p-8 mt-6 md:mt-0">
        <h2 class="mb-2">Total pending</h2>
        <p>{{ totalpending }} BPL</p>
      </div>
      <div class="bg-grey-lighter w-full md:ml-3 p-8 mt-6 md:mt-0">
        <h2 class="mb-2">Next payout</h2>
        <p>{{ nextpayout }}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import DelegateService from '@/services/delegate'
import moment from 'moment'
import poollog from '../../poollogs.json'
const netconfig = require('../../network_conf.json')

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
