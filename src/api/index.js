// 请求商品分类数据
import axios from './axios'
export const reqCategory = () => axios(
 {
   methos: 'GET',
   url: '/category'
 }
)
// 请求保险数据
export const reqPolicyDescList = () => axios(
  {
    methos: 'GET',
    url: '/policyDescList'
  }
 )
 // 请求导航栏数据
 export const reqNav = () => axios({
   method: 'GET',
   url: '/nav'
 })
 // 请求侧边栏导航数据
 export const reqSlide = () => axios({
   method: 'GET',
   url: '/cateNav'
 })
 // 请求侧边栏右边栏数据
 export const reqSlideRight = () => axios({
   method: 'GET',
   url: '/slideright'
 })