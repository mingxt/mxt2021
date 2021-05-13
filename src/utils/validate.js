/**
 * 邮箱
 * @param {*} s
 */
export function isEmail (s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile (s) {
  return /^(13[0-9]|14[4579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone (s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * 金额
 * @param {*} s
 */
export function isMoney (s) {
  // 金额 只允许正数
  var exp = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
  // 金额 允许正（+）负数
  // var exp = /(^([+-]?)[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^([+-]?)(0){1}$)|(^([+-]?)[0-9]\.[0-9]([0-9])?$)/

  // 金额 允许正负数
  // var exp = /(^([-]?)[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^([-]?)(0){1}$)|(^([-]?)[0-9]\.[0-9]([0-9])?$)/
  if (exp.test(s)) {
    return true
  } else {
    return false
  }
}

export function isIp (val) {
  var exp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return exp.test(val)
}

export function isThreeBit (s) {
  return /^[0-9]{1,3}$/.test(s)
}

export function isInt (str) {
  let reg = /^-?\\d+$/
  return reg.test(str)
}
