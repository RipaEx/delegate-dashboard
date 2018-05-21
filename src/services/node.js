import axios from 'axios'

class NodeService {
  get (url, config) {
    const netconfig = require('../../network_conf.json')

    return axios
      .get(`${netconfig.server}/${url}`, config)
      .then(
        response =>
          response.data.success ? response : Promise.reject(response)
      )
  }
}

export default new NodeService()
