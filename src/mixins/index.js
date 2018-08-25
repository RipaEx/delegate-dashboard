import Vue from 'vue'
import config from '../../config/dashboard'
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

  formatNumber (value, decimals = 8, appendCurrency = true) {
    if (typeof value !== 'undefined') {
      value = value.toLocaleString(undefined, {
        maximumFractionDigits: decimals
      })

      return appendCurrency ? `${value} ${config.currency}` : value
    }
  }
}

Vue.mixin({
  methods
})

export default methods
