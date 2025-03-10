import axios from 'axios'

const DEFAULT_REQUEST_TIMEOUT = 30000

export const createApiService = (baseUrl = process.env.apiUrl) => {
  const client = axios.create({
    baseURL: baseUrl,
    timeout: DEFAULT_REQUEST_TIMEOUT,
  })
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.code === 'ECONNABORTED') {
        return Promise.reject({
          message: `timeout of ${
            DEFAULT_REQUEST_TIMEOUT / 1000
          } seconds exceeded`,
          ...error,
        })
      }
      return Promise.reject(error)
    }
  )

  return {
    /**
     * @param {string} resource  The endpoint of the resource
     * @param {import('axios').AxiosRequestConfig} params  Url parameter object
     * @returns {Promise<import('axios').AxiosResponse<any>>} response  The API response object
     */
    query(resource, params) {
      return client.get(resource, { params })
    },

    /**
     * @param {string} resource  The endpoint of the resource
     * @param {string} slug The sub-endpoint of the resource
     * @returns {Promise<import('axios').AxiosResponse<any>>} Response The API response object
     */
    get(resource, slug) {
      return client.get(`${resource}/${slug}`)
    },

    /**
     * @param {string} resource  The endpoint of the resource
     * @param {import('axios').AxiosRequestConfig} params Url parameter object
     * @returns {Promise<import('axios').AxiosResponse<any>>} Response The API response object
     */
    post(resource, params) {
      return client.post(resource, params)
    },

    /**
     * @param {string} resource  The endpoint of the resource
     * @param {string} slug The sub-endpoint of the resource
     * @param {import('axios').AxiosRequestConfig} params Url parameter object
     * @param {import('axios').AxiosRequestConfig['headers']} headers Headers object
     * @returns {Promise<import('axios').AxiosResponse<any>>} Response The API response object
     */
    update(resource, slug, params, headers) {
      return client.put(`${resource}/${slug}`, params, { headers })
    },

    /**
     * @param {string} resource  The endpoint of the resource
     * @param {import('axios').AxiosRequestConfig} params Url parameter object
     * @returns {Promise<import('axios').AxiosResponse<any>>} Response The API response object
     */
    put(resource, params) {
      return client.put(resource, params)
    },

    /**
     * @param {string} resource  The endpoint of the resource
     * @param {string} slug The sub-endpoint of the resource
     * @param {import('axios').AxiosRequestConfig['headers']} headers Headers object
     * @returns {Promise<import('axios').AxiosResponse<any>>} Response The API response object
     */
    delete(resource, slug, headers) {
      return client.delete(`${resource}/${slug}`, { headers })
    },
  }
}

const ApiService = createApiService()
export default ApiService
