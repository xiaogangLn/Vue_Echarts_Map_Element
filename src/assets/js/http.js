import { resolve } from "path";
import axios from "./reject";

const apiMethods = {
  methods: {
    apiGet(url, data) {
      return new Promise((resolve, reject) => {
        axios.get(url, data).then((response) => {
          resolve(response.data)
        }, (response) => {
          reject(response)
          // 请填写（请求超时处理）
          this.$message.warning('请求超时')
        })
      })
    },
    apiPost(url, data) {
      return new Promise((resolve, reject) => {
        axios.post(url, data).then((response) => {
          resolve(response.data)
        }).catch((response) => {
          console.log('f', response)
          resolve(response)
          // 请填写（请求超时处理）
          this.$message.warning('请求超时')
        })
      })
    },
    apiDelete(url, id) {
      return new Promise((resolve, reject) => {
        axios.delete(url + id).then((response) => {
          resolve(response.data)
        }, (response) => {
          reject(response)
          // 请填写（请求超时处理）
          this.$message.warning('请求超时')
        })
      })
    },
    apiPut(url, id, obj) {
      return new Promise((resolve, reject) => {
        axios.put(url + id, obj).then((response) => {
          resolve(response.data)
        }, (response) => {
          reject(response)
          // 请填写（请求超时处理）
          this.$message.warning('请求超时')
        })
      })
    },
    handelResponse(res, cb, errCb) {
      if (res.status === 1) {
        cb(res)
      } else {
        if (typeof errCb === 'function') {
          errCb()
        }
        this.handleError(res)
      }
    },
    handleError(res) {
      if (res.status !== undefined) {
        switch (res.status) {
          case 101:
            console.log('cookie = ', Cookies.get('rememberPwd'))
            if (Cookies.get('rememberPwd')) {
              let data = {
                rememberKey: Lockr.get('rememberKey')
              }
            } else {
              this.$message.error(res.msg) // 需要后期按需配置
              setTimeout(() => {
                router.replace('/')
              })
            }
            break
          case 103:
            this.$message.error(res.msg) // 需要后期按需配置
            setTimeout(() => {
              router.replace('/')
            }, 1500)
            break
          default:
            this.$message.error(res.msg) // 需要后期按需配置
        }
      } else {
        console.log('default error')
      }
    },
    resetCommonData (data) {
      Lockr.set('secretkey', data.token) // 用户token
      Lockr.set('flag', data.flag) // 用户token
      window.axios.defaults.headers.Authorization = Lockr.get('secretkey')
      // router.push('/home') // 需要后期配置
    },
    reAjax (url, data) {
      return new Promise((resolve, reject) => {
        resolve(resolve.data)
      }, (response) => {
        reject(response)
        this.$message.warning('请求超时')
      })
    }
  },
  computed: {
    showLoading () {
      return store.state.globalLoading
    }
  },
}

export default apiMethods
