import axios from 'axios'
import apis from './apis'
export const service = axios.create({
  baseURL:apis.baseUrl
})
//这里还会做一些拦截器的处理
export const getToList = ()=>{
  return service.get(apis.getList)
}
