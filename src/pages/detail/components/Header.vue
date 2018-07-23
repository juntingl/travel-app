<template>
  <div class="header">
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>

    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      景点详情
      <router-link to="/">
        <div class="iconfont header-back-icon">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      // console.log('全局事件，需要记得移除事件：', top)
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // keep-alive 组件停用时调用。
  deactivated () {
    // 监听的是全局事件，为了防止当前组件监听的事件溢出到别的组件里，当离开此组件时,移除监听事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header-abs
  position: absolute
  top: .2rem
  left: .2rem
  width: .8rem
  height: .8rem
  line-height: .8rem
  border-radius: .4rem
  text-align: center
  background: rgba(0, 0, 0, .8)
  .header-abs-back
    color: #fff
    font-size: .4rem

.header-fixed
  z-index: 2
  position: fixed
  top: 0
  right: 0
  left: 0
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-back-icon
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>
