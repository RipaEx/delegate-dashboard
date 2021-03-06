// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TableComponent from 'vue-table-component'
import _ from 'lodash'

require('./mixins')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

TableComponent.settings({
  sortHandler: (rows, column, order) => _.orderBy(rows, (row) => (row.data[column]), order),
  filterNoResults: 'No Results'
})

Vue.use(require('vue-moment'))
Vue.use(TableComponent)
