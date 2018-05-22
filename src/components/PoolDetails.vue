<template>
  <div class="max-w-xl mx-auto">
    <div class="md:flex justify-stretch md:mt-6">
      <div class="flex flex-col sm:flex-row w-full">
        <div class="bg-grey-lighter w-full mr-3 mt-6 md:mt-0 p-8 xl:p-12-16 shadow">
          <h2 class="mb-2">Rank</h2>
          <p>{{ delegate.rate }}</p>
        </div>
        <div class="bg-grey-lighter w-full sm:ml-3 md:mr-3 mt-6 md:mt-0 p-8 xl:p-12-16 shadow">
          <h2 class="mb-2">Productivity</h2>
          <p>{{ delegate.productivity }}%</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row w-full mt-6 md:mt-0">
        <div class="bg-grey-lighter w-full mr-3 md:mx-3 p-8 xl:p-12-16 shadow">
          <h2 class="mb-2">Approval</h2>
          <p>{{ delegate.approval }}%</p>
        </div>
        <div class="bg-grey-lighter w-full sm:ml-3 mt-6 sm:mt-0 p-8 xl:p-12-16 shadow">
          <h2 class="mb-2">Voters</h2>
          <p>{{ delegate.voters - 1 }}</p>
        </div>
      </div>
    </div>

    <div class="md:flex md:justify-between mt-6">
      <div class="bg-grey-lighter w-full md:mr-3 p-8 mt-6 md:mt-0 xl:p-12-16 shadow">
        <h2 class="mb-2">Total paid</h2>
        <p v-if="delegate.poollogs">{{ delegate.poollogs.totalpaid }} BPL</p>
      </div>
      <div class="bg-grey-lighter w-full md:mx-3 p-8 mt-6 md:mt-0 xl:p-12-16 shadow">
        <h2 class="mb-2">Total pending</h2>
        <p v-if="delegate.poollogs">{{ delegate.poollogs.totalpending }} BPL</p>
      </div>
      <div class="bg-grey-lighter w-full md:ml-3 p-8 mt-6 md:mt-0 xl:p-12-16 shadow">
        <h2 class="mb-2">Next payout</h2>
        <p v-if="delegate.poollogs">{{ delegate.poollogs.nextpayout }}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    delegate: {
      required: true
    }
  }
}
</script>
