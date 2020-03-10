import {reqCategory,reqSlideRight} from '../api'
import {REQ_CATEGORY,SLIDE_RIGHT} from './mucation-type'
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
  }
}