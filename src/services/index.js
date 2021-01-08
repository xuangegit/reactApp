import axios from 'axios'
import apis from './apis'
import qs from 'qs'
import {message} from 'antd'
const service = axios.create({
  baseURL:apis.baseUrl,
})
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('config',config)
  
  config.data = qs.stringify(config.data)
  if(config.url.indexOf('login')<=-1){ //非登录接口
    console.log('loginToken',window.localStorage.loginToken)
    if(localStorage.getItem('loginToken')) { //已经登录
      config.headers.token = localStorage.getItem('loginToken')
    } 
  } 
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log('res',response)
  if (response.headers.token) {
    // 如果 header 中存在 token，刷新Token，替换本地的 token
    localStorage.setItem('loginToken',response.headers.token)
    // service.defaults.headers['token'] = response.headers.token
  }
  if(response.data.code===1){
    return Promise.resolve(response.data)
  }else {
    const code = response.data.code
    // console.log('response.data',response.data)
    if(code===10001||code===10002||code===10003||code===10000){
      message.warning(response.data.message+',请重新登录',1.5).then(()=>{
        window.location.href =  window.location.href.split('/#')[0] + '/#/login'
      })
    }
    return Promise.reject(response.data)
  }
  
}, function (error) {
  // 对响应错误做点什么
  // console.log('error',error)
  return Promise.reject(error);
});

console.log('service',service)
export const getToList = ()=>{
  return service.get(apis.positionList)
}
export const userLogin = (data)=>{
   return service.post(apis.userLogin,data)
}
//岗位相关
export const getPositionList = (data)=>{
  return service.get(apis.positionList,{params:data})
}
export const positionInsert = (data) =>{
  return service.post(apis.positionInsert,data)
}
export const positionUpdate = (data) =>{
  return service.post(apis.positionUpdate,data)
}

export const positionDeleteById = (id)=> {
  return service.delete(apis.positionDelete,{params:{positionId: id}})
}
export const positionPublish = (ids)=>{
  return service.post(apis.positionPublish,{ids:ids})
}
export const positionRevocation = (id) => {
  return service.post(apis.positionRevocation,{positionId: id})
}
