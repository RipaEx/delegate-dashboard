import NodeService from '@/services/node'

class AddressService {
  find (address) {
    return NodeService.get('accounts', {
      params: {address}
    }).then(response => response.data.account)
  }
}

export default new AddressService()
