<template>
  <div class="max-w-xl bg-grey-lighter mx-auto p-8 xl:p-12-16 shadow">

    <table-component :data="balances" sort-by="received" sort-order="desc" :show-filter="false" :show-caption="false" table-class="w-full">
      <table-column show="address" label="Address" header-class="text-left" cell-class="left-cell">
        <template slot-scope="row">
          <a v-bind:href="'http://bplexp.blockpool.io/address/' + row.address">{{ row.address }}</a>
        </template>
      </table-column>

      <table-column show="received" label="Received" header-class="text-right" cell-class="text-right">
        <template slot-scope="row">
          {{ row.received }}
        </template>
      </table-column>

      <table-column show="pending" label="Pending" header-class="text-right" cell-class="text-right">
        <template slot-scope="row">
          {{ row.pending }}
        </template>
      </table-column>
    </table-component>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    balances: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
