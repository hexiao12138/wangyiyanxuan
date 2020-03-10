<template>
  <div class="category">
    <Header />
    <div class="content">
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="(nav,index) in navList"
                            :key="index"
                            :title=nav.name
                            class="slide"
                            :class="{on: index === activeKey}"
                            replace
                            @click="goSlide"
                            :to="{path:'/category',query: {id: nav.id}}"
                             />
        </van-sidebar>
      </div>
      <div class="right">
        <router-view></router-view>
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
export default {
  name: 'Category',
  data() {
    return {
      activeKey: 0,
      navList: [],
      currentIndex: null
    }
  },
  methods: {
    goSlide () {   
      this.currentIndex = this.$route.query.id
      console.log(this.currentIndex);     
    }
  },
  async mounted() {
    const result = await reqSlide()
    if (result.code === 0) {
      this.navList = result.data
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.content
  display flex
  justify-content space-between
  .slide
    width 130px
    border-right 1px solid #ccc
    font-size 25px
    height 80px
    line-height 50px
    &.on
      color rgb(171, 43, 43)
</style>
