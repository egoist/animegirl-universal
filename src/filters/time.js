export default (anime) => {

  if (anime.timeCN.trim()) {
    return anime.timeCN.substring(0, 2) + ':' + anime.timeCN.substring(2)
  }
    
  if (!anime.timeJP.trim()) {
    return '预计今天'
  }

  let JP_hour = anime.timeJP.substring(0, 2)
  JP_hour = parseInt(JP_hour)
  let JP_minutes = anime.timeJP.substring(2)
  JP_minutes = parseInt(JP_minutes)

  if (anime.weekDayCN != anime.weekDayJP )
    return '预计今天'

  let minutes = JP_minutes
  if (minutes < 10) 
    minutes = `0${minutes}`

  if (JP_hour < 23) {
    let hour = JP_hour + 1
    if (hour < 10)
      hour = `0${hour}`
    return `预计 ${hour}:${minutes}`
  }

  if (JP_hour == 23) {
    return `预计 00:${minutes}`
  }
  if (JP_hour == 24) {
    return `预计 01:${minutes}`
  }
}