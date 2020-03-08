<template>
	<div class="category">
		<Header />
		<van-sidebar v-model="activeKey">
			<van-sidebar-item v-for="(nav,index) in navList" :key="index" :title=nav.name  class="slide"
      :class="{on: index === activeKey}"/>
		</van-sidebar>
    <SlideRight />
	</div>
</template>
<script>
import Vue from 'vue'
import { Sidebar, SidebarItem } from 'vant'
Vue.use(Sidebar)
Vue.use(SidebarItem)
import {reqSlide} from '../../api'
import SlideRight from './SlideRight'
export default {
  name: 'Category',
  data () {
    return {
      activeKey: 0,
      navList: []
    }
  },
  components: {
    SlideRight
  },
  async mounted () {
    const result = await reqSlide()
    if (result.code === 0) {
      this.navList = result.data  
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .slide 
    width 150px
    border-right 1px solid #ccc
    font-size 25px
    height 80px
    line-height 50px
    &.on 
      color rgb(171, 43, 43)
</style>
