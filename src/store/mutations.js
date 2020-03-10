import {REQ_CATEGORY,SLIDE_RIGHT} from './mucation-type'

export default {
  // 更改分类数据
  [REQ_CATEGORY] (state,category) {
    state.category = category
  },
  // 更改分类右侧数据
  [SLIDE_RIGHT] (state,slideRight) {
    state.slideRight = slideRight
  }
}