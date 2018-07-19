<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div style="height: 600px"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'

export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner
  }
}
</script>

<style lang="stylus" scoped>

</style>
