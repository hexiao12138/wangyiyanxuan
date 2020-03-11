<template>
  <div class="wrapper">
    <Header />
    <Nav />
    <div class="content">
      <van-swipe class="my-swipe"
                 :autoplay="3000">
        <van-swipe-item>
          <img src="./images/ia_100000003.webp"
               alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="./images/ia_100000004.webp"
               alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="./images/ia_100000005.webp"
               alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="./images/ia_100000006.webp"
               alt="" />
        </van-swipe-item>
      </van-swipe>
      <ul class="reqPolicyDescList">
        <li v-for="(i,index) in policyDescList"
            :key="index">
          <i :style="{ backgroundImage: `url(${i.icon})` }"></i>
          <span>{{i.desc}}</span>
        </li>
      </ul>
      <ShopList />
      <div class="poster">
        <div class="head">
          <img src="./images/3.png"
               alt="">
        </div>
        <div class="foot">
          <div class="foot-top">
            <img src="./images/4.png"
                 alt="">
            <img src="./images/6.png"
                 alt="">
          </div>
          <div class="foot-bottom">
            <img src="./images/8.png"
                 alt="">
            <img src="./images/9.png"
                 alt="">
            <img src="./images/10.png"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <Splite />
    <div class="newPerSon">
      <div class="top">
        <p>- 新人专享礼 -</p>
      </div>
      <div class="bottom">
        <div class="left">
          <p>新人专享礼包</p>
          <img src="./images/11.png"
               alt="">
        </div>
        <div class="right">
          <div class="right-top">
            <div class="con">
              <p>福利社</p>
              <p class="today">今日特价</p>
            </div>
            <img src="./images/12.png"
                 alt="">
          </div>
          <div class="right-bottom">
            <p>新人拼团</p>
            <p class="one">一元起包邮</p>
          </div>
        </div>
      </div>
    </div>
    <Splite />
    <div class="market">
      <div class="top">
        <p>类目热销榜</p>
      </div>
      <ul class="market-bottom">
        <li  v-for='(market,index) in marketList' :key="index">
          <span>{{market.categoryName}}</span>
          <img :src=market.showPicUrl
               alt="">
        </li>
      </ul>
    </div>
    <Splite />
    <div class="disCount">
      <div class="top">
        <div class="left">
          <span>限时购</span>
          <div class="time">
            <span>00</span> :
            <span>00</span> :
            <span>00</span>
          </div>
        </div>
        <div class="right">
          <span>更多 ></span>
        </div>
      </div>
      <div class="bottom">
        <div class="con" v-for='(dis,index) in disCount' :key="index">
          <div class="img">
            <img :src=dis.picUrl alt="">
          </div>
          <div class="price">
            
            <span class="new">￥{{dis.activityPrice}}</span>
            <span class="old">￥{{dis.originPrice}}
              <span class="line"></span>
            </span>
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
import { reqPolicyDescList,reqMarket ,reqDisCount} from '../../api'
export default {
  name: 'Msite',
  data() {
    return {
      policyDescList: [],
      marketList: [],
      disCount: []
    }
  },
  methods: {
    // 获取保险数据
    async getPolicyDescList() {
      const result = await reqPolicyDescList()
      if (result.code === 0) {
        this.policyDescList = result.data
      }
    },
    // 获取榜单数据
    async getMarket () {
      const result = await reqMarket() 
      if (result.code === 0) {
        this.marketList = result.data   
      }
    },
    // 获取折扣数据
    async getDisCount () {
      const result = await reqDisCount()
      if (result.code === 0) {
        this.disCount = result.data 
      }
    }
  },
  components: {
    Nav,
    ShopList
  },
  async mounted() {
    this.getDisCount()
    this.getMarket()
    this.getPolicyDescList()
    this.$store.dispatch('getCategory')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrapper
  width 100%
  display flex
  flex-direction column
  img
    width 100%
    height 370px
  .reqPolicyDescList
    height 70px
    li
      display flex
      height 70px
      flex 1
      span
        font-size 14px
      i
        width 20px
        height 20px
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
  .newPerSon
    width 90%
    font-size 30px
    margin 0 auto
    margin-bottom 20px
    img
      width 100px
      height 100px
    .top
      height 60px
      line-height 60px
      p
        text-align center
    .bottom
      display flex
      .left
        width 50%
        display flex
        flex-direction column
        justify-content center
        align-items center
        background-color rgb(249, 233, 207)
        p
          margin 30px 30px 30px 0
        img
          width 180px
          height 180px
          margin-bottom 60px
      .right
        width 49%
        margin-left 1%
        .right-top
          background-color rgb(251, 226, 211)
          height 180px
          display flex
          align-items center
          .con
            flex 1
            padding-left 20px
            .today
              font-size 20px
              color rgb(176, 166, 160)
              margin-top 10px
          img
            flex 1
            width 30px
            height 170px
        .right-bottom
          background-color rgb(255, 236, 194)
          height 170px
          margin-top 5px
          p
            margin-left 20px
            padding-top 10px
          .one
            font-size 20px
            color #fff
            width 140px
            text-align center
            background-color rgba(0, 0, 0, 0.3)
            margin-top 10px
            height 20px
            line-height 15px
  .market
    width 90%
    margin 0 auto
    margin-bottom 20px
    .top
      font-size 30px
      height 80px
      line-height 80px
    .market-bottom
      width 100%
      display flex
      justify-content space-between 
      li
        width 24%
        margin 0
        background-color rgb(245, 245, 245)
        margin-right 3px
        margin-top 3px
        &:nth-child(1)
          width 49%
          background-color rgb(249, 243, 228)
        &:nth-child(2)
          width 49%
          background-color rgb(235, 239, 246)
        span
          margin 10px 0 10px 0
        img
          width 70px
          height 70px
  .disCount 
    width 90%
    margin 0 auto
    .top 
      display flex
      height 80px
      align-items center
      font-size 30px
      .left 
        flex 1
        display flex
        .time 
          margin-left 10px
          span 
            background-color black
            color #fff
      .right  
        text-align right
        flex 1
    .bottom 
      display flex
      flex-wrap wrap
      justify-content space-between
      .con  
        width 30%
        .img  
          height 170px  
          img 
            width 100%
            height 100%
        .price  
          width 100%
          height 80px
          line-height 80px
          font-size 25px
          .new 
            color rgb(221, 26, 33)
            margin-right 20px
          .old 
            position relative
            color rgb(127, 127, 127)
          .line   
            width 100% 
            height 2px
            display inline-block
            background-color rgb(127, 127, 127)
            position absolute
            right 0
            top 50%
</style>
