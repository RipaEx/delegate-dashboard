import Vue from 'vue'
// import moment from 'moment'

const methods = {
  truncate (value, length = 12) {
    const truncationLength = Math.floor((length - 1) / 2)
    return (value.length > length)
      ? `${value.slice(0, truncationLength)}...${value.slice(value.length - truncationLength)}`
      : value
  },

  readableNumber (value, digits = 2) {
    return value.toFixed(digits)
  },

  hello () {
    console.log('hello')
  },

  readableCrypto (value, appendCurrency = true) {
    if (typeof value !== 'undefined') {
      value = value.toLocaleString(undefined, {
        maximumFractionDigits: 8
      })

      return appendCurrency ? `${value} BPL` : value
    }
  }
}

Vue.mixin({
  methods
})

export default methods
