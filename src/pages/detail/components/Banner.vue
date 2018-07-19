<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_600x330_2200e5bf.jpg" alt="">

      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界（AAA景点）</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe678;</span> 39
        </div>
      </div>
    </div>
    <common-gallay
      :imgs="imgs"
      v-show="showGallary"
      @handleGallaryClick="handleGallaryClose"
    ></common-gallay>
  </div>
</template>

<script>
import CommonGallay from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallay
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_r_800x800_f2b5b8c3.jpg', 'http://img1.qunarzz.com/sight/p0/201309/27/b41a33ab5bf755bac8d65eac.jpg_r_800x800_f97a3cb5.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size:  .24rem
        .banner-icon
          font-size: .24rem
</style>
