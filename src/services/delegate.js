import NodeService from '@/services/node'
import PoollogsService from '@/services/poollogs'

class DelegateService {
  find (publicKey) {
    return NodeService.get('delegates/get', {
      params: {publicKey}
    }).then(response => {
      const delegate = response.data.delegate

      if (!delegate) {
        return false
      }

      return NodeService.get('delegates/voters', {
        params: {publicKey}
      }).then(response => {
        delegate.voters = response.data.accounts.length

        return PoollogsService.get().then(response => {
          delegate.poollogs = response.data

          return delegate
        })
      })
    })
  }
}

export default new DelegateService()
