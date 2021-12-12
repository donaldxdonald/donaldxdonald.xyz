import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
export interface ResponseBody<T> {
  data: T
  message: string
  status: number
}
export class Request {
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    })
    this.instance.interceptors.response.use((response: AxiosResponse<ResponseBody>) => {
      return response.data.data
    }, err => {
      console.error(err)
    })
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config)
  }
}

export const request = new Request({
  baseURL: '',
  timeout: 15000,
})
