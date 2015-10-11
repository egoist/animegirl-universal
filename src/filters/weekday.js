export default (val) => {
  val = parseInt(val)
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return weekdays[val]
}