import axios from 'axios'
import apis from './apis'
const service = axios.create({
  baseURL:apis.baseUrl
})
//这里还会做一些拦截器的处理
//
console.log('service',service)
export const getToList = ()=>{
  return service.get(apis.getList)
}
export const userLogin = (data)=>{
   return service.post(userLogin)
}