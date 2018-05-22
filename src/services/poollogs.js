import axios from 'axios'

class PoollogService {
  get () {
    return axios
      .get('https://pool.dated.fun/api/poollogs/')
      .then(
        response =>
          response.status === 200 ? response : Promise.reject(response)
      )
      .catch(e => console.log(e.message || e.data.error))
  }
}

export default new PoollogService()
