<template>
	<div class="wrapper">
		<Header />
		<Nav />
    <div class="content">
      <van-swipe class="my-swipe" :autoplay="3000">
			<van-swipe-item>
				<img src="./images/ia_100000003.webp" alt="" />
			</van-swipe-item>
			<van-swipe-item>
				<img src="./images/ia_100000004.webp" alt="" />
			</van-swipe-item>
			<van-swipe-item>
				<img src="./images/ia_100000005.webp" alt="" />
			</van-swipe-item>
			<van-swipe-item>
				<img src="./images/ia_100000006.webp" alt="" />
			</van-swipe-item>
		</van-swipe>
		<ul class="reqPolicyDescList" >
			<li v-for="(i,index) in policyDescList" :key="index">
			
				<span>{{i.desc}}</span>
			</li>
		</ul>
		<ShopList />
    <div class="poster">
      <div class="head">
        <img src="./images/3.png" alt="">
      </div>
      <div class="foot">
        <div class="foot-top">
          <img src="./images/4.png" alt="">
          <img src="./images/6.png" alt="">
        </div>
        <div class="foot-bottom">
          <img src="./images/8.png" alt="">
          <img src="./images/9.png" alt="">
          <img src="./images/10.png" alt="">
        </div>
      </div>
    </div>
    </div>
		
	</div>
</template>
<script>

import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
import ShopList from '../../components/ShopList'
import Nav from '../../components/Nav'
import { reqPolicyDescList } from '../../api'
export default {
	name: 'Msite',
	data() {
		return {
			policyDescList: []
		}
	},
	components: {
		Nav,
		ShopList
	},
	async mounted() {
		this.$store.dispatch('getCategory')
		const result = await reqPolicyDescList()
		if (result.code === 0) {
			this.reqPolicyDescList = result.data
    }
    console.log(this.reqPolicyDescList);
    
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
div
  width 100%
  img
    width 100%
    height 370px
  .reqPolicyDescList
    height 70px
    display flex
    justify-content space-around
    align-items center
  .poster 
    .head 
      font-size 0
      img 
        height 240px
    .foot 
      background-color rgb(204, 50, 86)
      .foot-top 
        width 90%
        margin 0 auto
        display flex
        justify-content space-between
        img 
          width 49%
          height 186px
          
      .foot-bottom 
        width 90%
        margin 0 auto
        display flex
        justify-content space-between
        img 
          width 32%
          height 186px
          border-radius 15px
</style>
