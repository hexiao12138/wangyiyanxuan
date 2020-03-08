import {REQ_CATEGORY} from './mucation-type'

export default {
  // 更改分类数据
  [REQ_CATEGORY] (state,category) {
    state.category = category
  }
}