export const formatVideoDuration = val => {
  let negative = false
  let res = ''
  if (val < 0) {
    val = Math.abs(val)
    negative = true
  }
  const min = val / 60
  // const hour = min / 60
  if (min < 1) {
    res += `${negative ? '-' : ''}${val}″`
    return res
  }
  // if (hour < 1) {
  //   res += `${negative ? '-' : ''}${Math.floor(min)}m${val % 60}s`
  //   return res
  // }
  res += `${negative ? '-' : ''}${Math.floor(min) % 60}′${val % 60}″`
  return res
}
