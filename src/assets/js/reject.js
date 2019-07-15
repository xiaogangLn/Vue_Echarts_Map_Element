// Http拦截器
import axios from 'axios'
import store from '../../store/index'
import * as types from '../../store/types'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.error_code === 1003) { // token 过期（需要后期接口修改）
      console.log('token失效', response.data.error_code)
      store.commit(types.LOGOUT)
      // router.replace({
      //   path: '/'
      // })
    } else if (response.data.error_code === 1004) { // token 错误（需要后期接口修改）
      console.log('token错误', response.data.error_code)
      store.commit(types.LOGOUT)
      // router.replace({
      //   path: '/'
      // })
    }
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面(后期需配置)
          store.commit(types.LOGOUT)
          // router.replace({
          //   path: '/',
          //   query: {redirect: router.currentRoute.fullPath}
          // })
      }
    }
    return Promise.reject(error)
  }
)

export default axios
