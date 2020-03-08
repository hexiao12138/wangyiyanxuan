<template>
  <div class="slideRight">
    <div class="slide-heade">
      <img src="" alt="">
    </div>
    <div class="slide-bottom">
      <ul>
        <li>
          <img src="" alt="">
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {reqSlideRight} from '../../../api'
export default {
  name: 'SlideRight',
  data () {
    return {
      slide: []
    }
  },
  async mounted () {
    const result = await reqSlideRight()
    if (result.code === 0) {
      this.slide = result.data
      console.log(this.slide);
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' >

</style>