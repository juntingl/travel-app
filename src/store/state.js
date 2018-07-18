let defaultCity = '北京'

// 防止有的用户会关闭 localStorage 的功能而导致不必要的错误，所以进行异常捕获一下
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
