const dashboardConfig = {
  currency: 'XPX',
  api_node: 'https://api.ripaex.io/api',
  explorer: 'https://explorer.ripaex.io',
  poollogs: 'https://raw.githubusercontent.com/RipaEx/ripa-pool/master/poollogs.json',
  
  frequency: {
    unit: 'week',
    amount: 1
  },
  
  pubkey: '039d9f604f80e8c73e6ce83e91df5c94c84ab6fa326e1aea0fd11630ba3d9a15a1',

  buttons: {
    'Explorer': 'https://explorer.ripaex.io/wallets/PTUaick4CNFZXoZQ8kycTYbYbqBkUDUUeB',
    'Proposal': 'https://forum.ripaex.io/topic/6/ripa_node_1-70-vote-to-develop-ripa-exchange'
  },

  jumbotron: {
    title: 'ripa_node_1',
    desc: '70% to voters / weekly payouts',
    subdesc: null
  }
}

export default dashboardConfig
