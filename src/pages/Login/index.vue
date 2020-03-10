<template>
	<div class="login">
		<div class="head">
			<div class="left" @click="$router.back()">
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
			<div class="form">
				<van-form v-if='isShow'>
					<van-field
						v-model="phone"
						name="validator"
						label="手机号"
						placeholder="请输入手机号"           
						:rules="[{ validator, message: '请输入正确的手机号' }]"
					/>
					<button disabled="disabled" class="get_verification">
						获取验证码
					</button>
					<van-field
						v-model="verCode"
						type="capt"
						name="验证码"
						label="验证码"
						placeholder="请输入验证码"
						:rules="[{ required: true, message: '请填写验证码' }]"
					/>
					<div style="margin: 16px;">
						<van-button
							round
							block
							type="danger"
							native-type="submit"
						>
							登录
						</van-button>
					</div>
				</van-form>
        <van-form v-else>
					<van-field
						v-model="eMail"
						name="邮箱账号"
						label="邮箱账号"
						placeholder="请输入邮箱账号"
						:rules="[{ pattern, message: '请填写正确的邮箱' }]"
					/>
					<van-field
						v-model="password"
						type="password"
						name="密码"
						label="密码"
						placeholder="请输入密码"
						:rules="[{ required: true, message: '请填写密码' }]"
					/>
					<div style="margin: 16px;">
						<van-button
							round
							block
							type="danger"
							native-type="submit"
						>
							登录
						</van-button>
					</div>
				</van-form>
			</div>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import { Icon, Form, Field, Button } from 'vant'
Vue.use(Icon)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
export default {
	name: 'Login',
	data() {
		return {
      phone: '',
      verCode: '',
      eMail: '',
      password: '',
      isShow: true,
      pattern: /^\w+@[a-z0-9]+\.[a-z]{2,4}$/
		}
  },
  methods: {
     validator(val) {
      return /^[1]\d{10}$/.test(val);
    },
  },
  mounted () {
   this.isShow = this.$route.query.id 
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
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
  .form
    position relative
    .get_verification
      position absolute
      top 20px
      right 10px
      border 0
      color #ccc
      font-size 14px
      background transparent
      &.on
        color black           
</style>
