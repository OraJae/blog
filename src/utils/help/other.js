// 將url中参数转换成对象 -- getQueryObject
// 判断设备是否移动端 -- isMobile

export const getQueryObject = (url) => {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}
export const isMobile = () => {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        return true
    }
    return false
}