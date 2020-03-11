<template>
	<div class="search" >
		<form action="/">
			<van-search
        @input="search"
				v-model="value"
				show-action
				placeholder="请输入搜索关键词"
				@search="onSearch"
				@cancel="onCancel"
			/>
		</form>
    <div class="hot-keyword" v-if='!suggestList.length'>
      <div class="head">
        热门搜索
      </div>
      <div class="main">
        <ul class="key">
          <li class="item" :class="{on: key.type === 0}" v-for="(key,index) in hotKeyWord" :key="index">{{key.keyword}}</li>
        </ul>
      </div>
    </div>
    <div class="suggest" v-else>
      <ul>
        <li v-for="(suggest,index) in suggestList" :key="index">{{suggest}}</li>
      </ul>
    </div>
	</div>
</template>
<script>
import Vue from 'vue'
import { Search } from 'vant'
Vue.use(Search)
import {reqSearch,reqKeyword}  from '../../api'
export default {
  name: 'Search',
  data() {
    return {
      value: '',
      hotKeyWord: [],
      suggestList: []
    };
  },
  methods: {
    onSearch() {
      
    },
    onCancel() {
      this.$router.back()
    },
    // 获取热词
      async getHot () {
        const result = await reqSearch()
        if (result.code === '200') {
          this.hotKeyWord = result.data.hotKeywordVOList
        }
      },
      // 搜索显示建议
      async search () {
        const value = this.value
        const result = await reqKeyword(value)
        if (result.code === '200') {
          this.suggestList = result.data
        }
      }
  },
  mounted () {
    this.getHot()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.search
  width 100%
  height 100%
  .hot-keyword 
    width 90%
    margin 0 auto
    padding 20px 0 30px 0
    .head 
      font-size 30px 
      color #ccc
      margin-bottom 20px
    .main
      .key  
        display flex
        flex-wrap wrap
        .item  
          height 40px 
          line-height 40px 
          font-size 20px
          margin 20px 20px 0 0 
          border 1px solid rgb(206, 206, 206)
          padding 0 10px 0
          border-radius 3px
          &.on 
            color red
            border-color red
  .suggest 
    li 
      font-size 30px 
      height 60px 
      line-height 60px 
      padding-left 20px
</style>
