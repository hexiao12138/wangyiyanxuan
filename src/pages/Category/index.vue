<template>
  <div class="category">
    <Header />
    <div class="content">
      <div class="left">
        <van-sidebar >
          <van-sidebar-item v-for="(nav,index) in slideLeft"
                            :key="index"
                            :title=nav.name
                            class="slide"
                            :class="{on: nav.id === categoryId}"
                            replace
                            :to="{path:'/category',query: {id: nav.id}}" />
        </van-sidebar>
      </div>
      <div class="right">
        <SlideRight :categoryId='categoryId'/>
      </div>
    </div>

  </div>
</template>
<script>
import Vue from 'vue'
import { Sidebar, SidebarItem } from 'vant'
Vue.use(Sidebar)
Vue.use(SidebarItem)
import { reqSlide } from '../../api'
import SlideRight from './SlideRight'
export default {
  name: 'Category',
  data() {
    return {
      slideLeft: []
    }
  },
  components: {
    SlideRight
  },
  computed: {
    categoryId () {   
      return +this.$route.query.id || 11
    }
  },
  methods: { 
    // 获取左侧导航数据
    async getSlideLeft() {
      const result = await reqSlide()
      if (result.code === 0) {
        this.slideLeft = result.data
      }
    }
  },
   mounted() {

    this.getSlideLeft()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.content
  display flex
  justify-content space-around
  .slide
    width 130px
    border-right 1px solid #ccc
    font-size 25px
    height 70px
    line-height 40px
    border-color #fff
    &.on
      color rgb(171, 43, 43)
      border-left 4px solid rgb(171, 43, 43)
</style>
