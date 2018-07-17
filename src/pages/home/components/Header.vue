<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>

    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  /* 1rem = (html font-size) = 50px */
  /* 设计图是 2倍的设计图，6s 750px 的设计图，所以实际尺寸缩 2 倍 */
  .header
    display: flex
    line-height: $headerHeight
    height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .66rem
      float: left
      .back-icon
        padding: 0 .2rem
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-right: -.04rem
        font-size: .24rem
</style>
