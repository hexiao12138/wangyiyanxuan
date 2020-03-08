<template>
		<van-tabbar route fixed safe-area-inset-bottom>
			<van-tabbar-item replace to="/msite" icon="home-o">
				首页
			</van-tabbar-item>
			<van-tabbar-item replace to="/category" icon="search">
				分类
			</van-tabbar-item>
      <van-tabbar-item replace to="/buy" icon="home-o">
				值得买
			</van-tabbar-item>
      <van-tabbar-item replace to="/shopcard" icon="home-o">
				购物车
			</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="home-o">
				个人
			</van-tabbar-item>
		</van-tabbar>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
	name: 'Footer'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
