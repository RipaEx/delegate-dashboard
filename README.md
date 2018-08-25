# delegate-dashboard

> A Vue.js project

## Build Setup

### install dependencies
``` bash
yarn install
```

### Development
``` bash
yarn dev
```

the application will be served with hot reload at localhost:8080

### build for production with minification
``` bash
yarn build
``` 

add `--report` to view the bundle analyzer report

### testing

``` bash
yarn test
```

#### run e2e tests
``` bash
yarn e2e
```

#### run unit tests
``` bash
yarn unit
```

### configuration

change the values in `config/dashboard.js`

``` javascript
currency: 'TICKER',
api_node: 'NODE_URL',
explorer: 'EXPLORER_URL',
poollogs: 'POOLLOGS_URL',

frequency: {
  unit: 'day',
  amount: 1
},

pubkey: 'DELEGATE_PUB_KEY',

buttons: {
  link1: 'url1',
  link2: 'url2'
  ...
},

jumbotron: {
  title: 'POOL_TITLE',
  desc: 'DESCRIPTION',
  subdesc: 'SUB_DESCRIPTION'
}
```
