console.log('NODE_ENV',process.env.NODE_ENV)
const baseURL = process.env.NODE_ENV==="development"? "/api" : "http://192.168.33.241:10000/admin"
export default{
  // baseUrl: 'http://192.168.33.241:10000/api',
  // baseUrl: '/api',
  baseUrl: baseURL,
  positionInsert: '/v1/position/create', //岗位创建
  positionUpdate: '/v1/position/update', //岗位编辑
  positionDelete: '/v1/position/delete', //岗位编辑
  positionList: '/v1/position/list',  //岗位列表
  positionPublish: '/v1/position/publish', //岗位发布
  positionRevocation: '/v1/position/publish/cancel', //岗位发布撤销
  userLogin: '/v1/user/login',
}