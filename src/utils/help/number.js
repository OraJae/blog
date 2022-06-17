// 获取随机整数 -- getRandomInt
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}