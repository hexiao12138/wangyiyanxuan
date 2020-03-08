import {reqCategory} from '../api'
import {REQ_CATEGORY} from './mucation-type'
export default {
  // 获取分类数据
  async getCategory ({commit}) {
    const result = await reqCategory()
    if (result.code === 0) {
      commit(REQ_CATEGORY,result.data)
    }
  }
}