import axios from 'axios'
import config from '../../config/dashboard'

class NodeService {
  get (url, params) {
    return axios
      .get(`${config.api_node}/${url}`, params)
      .then(
        response =>
          response.data.success ? response : Promise.reject(response)
      )
  }
}

export default new NodeService()
