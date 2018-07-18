export default { // 需要进行异步请求修改数据的时候在 actions 里操作
  changeCity (ctx, city) {
    ctx.commit('changeCity', city)
  }
}
