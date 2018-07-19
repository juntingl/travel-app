<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommoonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('handleGallaryClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透
  .container >>> .swiper-container
    overflow: inherit

  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
