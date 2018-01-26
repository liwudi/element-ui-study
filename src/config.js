/**
 * Created by mapbar_front on 2018/1/3.
 */
import router from './router/index'

// 开发环境
let develpUrl = 'http://114.55.249.153:8028/'

// 测试环境
// let testUrl = 'http://114.55.249.153:8028/'

// 线上环境
// let onLineUrl = 'http://114.55.249.153:8028/'

let Config = {
  sucessInterceptor: (response) => {
    if (response.data.code === 601) {
      window.localStorage.clear()
      Config.toLogin()
      return Promise.resolve({data: {code: 200}})
    }
    return Promise.resolve(response)
  },
  failInterceptor: (error) => {
    if (error.response.data.code === 601) {
      window.localStorage.clear()
      Config.toLogin()
      return Promise.resolve({data: {code: 200}})
    }
    return Promise.reject(error.response)
  },
  toLogin: () => {
    router.replace('login')
  },
  serviceBaseUrl: develpUrl
}

export default Config
