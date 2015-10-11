export default (anime) => {
  if (anime.timeCN)
    return parseInt(anime.timeCN)
  if (!anime.timeJP) {
    return 0
  }
  let JP_hour = anime.timeJP.substring(0, 2)
  JP_hour = parseInt(JP_hour)
  let JP_minutes = anime.timeJP.substring(2)
  JP_minutes = parseInt(JP_minutes)

  return (JP_hour + 1) * 100 + JP_minutes
}