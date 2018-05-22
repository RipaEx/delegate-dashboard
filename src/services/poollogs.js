import axios from 'axios'

class PoollogService {
  get () {
    const netconfig = require('../../network_conf.json')

    return axios
      .get(netconfig.poollogs)
      .then(
        response =>
          response.status === 200 ? response : Promise.reject(response)
      )
      .catch(e => console.log(e.message || e.data.error))
  }
}

export default new PoollogService()
