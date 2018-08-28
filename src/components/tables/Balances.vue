<template>
  <div class="max-w-xl mx-auto">
    <div class="bg-grey-lighter p-8 xl:p-12-16 shadow hidden sm:block">

      <table-component :data="balances" sort-by="received" sort-order="desc" :show-filter="false" :show-caption="false" table-class="w-full">
        <table-column show="address" label="Address" header-class="text-left" cell-class="left-cell">
          <template slot-scope="row">
            <a v-bind:href="explorer + '/address/' + row.address">{{ row.address }}</a>
          </template>
        </table-column>

        <table-column show="received" label="Received" header-class="text-right" cell-class="text-right" data-type="numeric">
          <template slot-scope="row">
            {{ formatNumber(row.received, 8, false) }}
          </template>
        </table-column>

        <table-column show="pending" label="Pending" header-class="text-right" cell-class="text-right" data-type="numeric">
          <template slot-scope="row">
            {{ formatNumber(row.pending, 8, false) }}
          </template>
        </table-column>
      </table-component>
    </div>

    <div class="block sm:hidden">
      <div v-for="balance in balances" :key="balance.address" class="bg-grey-lighter p-8 mb-6 flex flex-col">
        <a v-bind:href="explorer + '/address/' + balance.address" class="mb-4">{{ balance.address }}</a>

        <div class="flex justify-between">
          <span>Received:</span>
          <span>{{ formatNumber(balance.received, 8, false) }} {{ currency }}</span>
        </div>

        <div class="flex justify-between">
          <span>Pending:</span>
          <span>{{ formatNumber(balance.pending, 8, false) }}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import config from '../../../config/dashboard'

export default {
  props: {
    balances: {
      type: Array,
      required: true
    }
  },

  computed: {
    explorer () {
      return config.explorer_url
    },
    currency () {
      return config.currency
    }
  }
}
</script>

<style scoped>

</style>
