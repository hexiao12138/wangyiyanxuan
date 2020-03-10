<template>
  <div class="user">
     <div class="head">
      <div class="left">
        <van-icon name="wap-home-o" />
      </div>
      <div class="center">
        <span>网易严选</span>
      </div>
      <div class="right">
        <van-icon name="search" />
        <van-icon name="cart-o" />
      </div>
    </div>
    <div class="content">
      <div class="title">
        <span>网易严选</span>
      </div>
      <div class="login">
        <van-button :to="{path: '/login',query: {id: 1}}" class="phone" icon="phone-o" size='large' type="danger" >手机号快捷登录</van-button>
        <van-button :to="{path: '/login',query: {id: 0}}" class="e-mail" icon="envelop-o" size='large' >邮箱账号登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Icon,Button } from 'vant'
Vue.use(Icon)
Vue.use(Button);
export default {
  name: 'User'
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.head
  height 100px
  display flex
  align-items center
  .left
    flex 1
    padding-left 20px
  .right
    flex 1
    display flex
    justify-content space-around
.content 
  width 100%
  .title 
    width 100%
    height 300px
    line-height 300px
    text-align center
  .login 
    display flex
    flex-direction column
    align-items center
    .phone 
       margin-bottom 30px
       width 80%
    .e-mail
       color red
       width 80%
       border 1px solid red
</style>