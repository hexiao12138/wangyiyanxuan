import {reqCategory,reqSlideRight,reqNav} from '../api'
import {REQ_CATEGORY,SLIDE_RIGHT,REQ_NAVLIST} from './mucation-type'
export default {
  // 获取分类数据
  async getCategory ({commit}) {
    const result = await reqCategory()
    if (result.code === 0) {
      commit(REQ_CATEGORY,result.data)
    }
  },
  // 请求右侧分类数据
  async getSlideRight ({commit}) {
    const result = await reqSlideRight() 
    if (result.code === 0) {
      commit(SLIDE_RIGHT,result.data)
    }
  },
  // 请求导航栏列表数据
  async getNavList ({commit}) {
    const result = await reqNav() 
    if (result.code === 0) {
      console.log(result.data);
      
      commit(REQ_NAVLIST,result.data)
    }
  }
}