import axios from 'axios'
import FrontendCommonConfig from '../../src/config'

const service = axios.create({
  baseURL: FrontendCommonConfig.baseURL, // url = base url + request url
  timeout: 30000
  // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (FrontendCommonConfig.UserModule.token) {
      config.headers['X-XSRF-TOKEN'] = FrontendCommonConfig.UserModule.token
      config.headers['Authorization'] = 'Bearer ' + FrontendCommonConfig.UserModule.token
      config.headers['X-Auth-Token'] = FrontendCommonConfig.UserModule.chatToken
      config.headers['X-User-Id'] = FrontendCommonConfig.UserModule.chatUserId
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    // Some example codes here:
    // code == 20000: success
    // code == 50001: invalid access token
    // code == 50002: already login in other place
    // code == 50003: access token expired
    // code == 50004: invalid user (user not exist)
    // code == 50005: username or password is incorrect
    // You can change this part for your own usage.
    const res = response.data
    if (!res.success) {
      if (FrontendCommonConfig.showErrorHandler != null) {

        FrontendCommonConfig.showErrorHandler(res.message || 'Error');
      }
      if (res.unAuthorizedRequest) {
        if (FrontendCommonConfig.unAuthorizationHandler != null) {
          FrontendCommonConfig.unAuthorizationHandler();
        }
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    if (error.response == null || error.response.data == null) {
      if (FrontendCommonConfig.showErrorHandler != null) {
        FrontendCommonConfig.showErrorHandler("网络错误");
      }
    }
    else {
      var res = error.response.data
      if (!res.success) {
        var msg = "";
        if (res.error?.message) {
          msg = res.error.message
        }
        if (res.error?.validationErrors) {
          res.error.validationErrors.forEach(element => {
            msg += element.message + ",";
          });
        }
        if (FrontendCommonConfig.showErrorHandler != null) {
          FrontendCommonConfig.showErrorHandler(msg);
        }
      }


    }

    return Promise.reject(error)
  }
)

export default service
