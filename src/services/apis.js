console.log('NODE_ENV',process.env.NODE_ENV)
const baseURL = process.env.NODE_ENV==="development"? "/api" : "http://192.168.33.241:10000/api"
export default{
  // baseUrl: 'http://192.168.33.241:10000/api',
  // baseUrl: '/api',
  baseUrl: baseURL,
  positionInsert: '/v1/manage/position/create', //岗位创建
  positionUpdate: '/v1/manage/position/update', //岗位编辑
  userLogin: '/v1/manage/user/login',
  positionList: '/v1/manage/position/list'
}