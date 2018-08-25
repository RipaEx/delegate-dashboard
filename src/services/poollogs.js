import axios from 'axios'
import config from '../../config/dashboard'

class PoollogService {
  get () {
    return axios
      .get(config.poollogs)
      .then(
        response =>
          response.status === 200 ? response : Promise.reject(response)
      )
      .catch(e => console.log(e.message || e.data.error))
  }
}

export default new PoollogService()
