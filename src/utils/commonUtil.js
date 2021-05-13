// The maximum is inclusive and the minimum is inclusive
export function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getNowFormatDate () {
  var date = new Date()
  var seperator1 = '-'
  var seperator2 = ':'
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + addZero(date.getHours()) + seperator2 + addZero(date.getMinutes()) + seperator2 + addZero(date.getSeconds())
  return currentdate
}

export function addMillseconds (date, value) {
  date.setMilliseconds(date.getMilliseconds() + value)
  return date
}

export function addZero (var1) {
  if (var1.toString().length === 1) {
    return '0' + var1.toString()
  }
  return var1.toString()
}

export function formatDate (value) {
  var date = new Date(value)
  var hour = date.getHours()
  var minute = date.getHours()
  var second = date.getSeconds()
  hour = addZero(hour)
  minute = addZero(minute)
  second = addZero(second)
  var texts = [hour, minute, second]
  return texts.join(':')
}

// year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒" + millsecond + "毫秒"
export function stringToTime (timeString) {
  var year = timeString.substring(0, 4)
  var month = timeString.substring(5, 7)
  var day = timeString.substring(8, 10)
  var hour = timeString.substring(11, 13)
  var minute = timeString.substring(14, 16)
  var second = timeString.substring(17, 19)
  var millsecond = timeString.substring(20, 23)
  var tmpdate = new Date(year, month - 1, day, hour, minute, second)
  var realdate = addMillseconds(tmpdate, millsecond)
  return realdate
}

export function stringToTime2 (timeString) {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()
  var hour = timeString.substring(0, 2)
  var minute = timeString.substring(3, 5)
  var second = timeString.substring(6, 8)
  var millsecond = timeString.substring(9, 12)
  var tmpdate = new Date(year, month, day, hour, minute, second)
  var realdate = addMillseconds(tmpdate, millsecond)
  return realdate
}

export function stringToTime3 (timeString) {
  var year = timeString.substring(0, 4)
  var month = timeString.substring(4, 6)
  var day = timeString.substring(6, 8)
  var hour = timeString.substring(8, 10)
  var minute = timeString.substring(10, 12)
  var second = timeString.substring(12, 14)
  var millsecond = timeString.substring(14, 17)
  var date = new Date()
  date.setFullYear(year)
  date.setMonth(parseInt(month) - 1)
  date.setDate(day)
  date.setHours(hour)
  date.setMinutes(minute)
  date.setSeconds(second)
  date.setMilliseconds(millsecond)
  return date
}

// 时间戳转日期
export function toDate (timeString, type) {
//  1: 年月日 时分秒； 2：yyyy-mm-dd hh-mm-ss； 3：yyyy.mm.dd
  var date = new Date(timeString)
  var year = date.getFullYear()
  var month = (date.getMonth() + 1 < 10) ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)
  var day = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate()
  var hour = (date.getHours() < 10) ? ('0' + date.getHours()) : date.getHours()
  var min = (date.getMinutes() < 10) ? ('0' + date.getMinutes()) : date.getMinutes()
  var sec = (date.getSeconds() < 10) ? ('0' + date.getSeconds()) : date.getSeconds()
  var str = hour + ':' + min + ':' + sec
  if (type === 1) {
    return year + '-' + month + '-' + day + ' ' + str
  } else if (type === 2) {
    return year + '年' + month + '月' + day + '日 ' + str
  } else {
    return year + '.' + month + '.' + day + ' ' + str
  }
}

// 时间戳转日期,返回当前时间的后一天
export function toNextDate (timeString, type) {
//  1: 年月日 时分秒； 2：yyyy-mm-dd hh-mm-ss； 3：yyyy.mm.dd
//   1531307128000
  var date = new Date(timeString + 24 * 60 * 60 * 1000)
  var year = date.getFullYear()
  var month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  var day = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate()
  var hour = date.getHours()
  var min = date.getMinutes()
  var sec = date.getSeconds()
  var str = hour + ':' + min + ':' + sec
  if (type === 1) {
    return year + '-' + month + '-' + day + ' ' + str
  } else if (type === 2) {
    return year + '年' + month + '月' + day + '日 ' + str
  } else if (type === 3) {
    return year + month + day
  } else {
    return year + '.' + month + '.' + day + ' ' + str
  }
}

// 取当前日期的前几天（08-10格式）
export function getBeforeDate (n) {
  var dataArr = []
  for (let i = 1; i <= n; i++) {
    var date = new Date()
    var month, day
    date.setDate(date.getDate() - i)
    month = date.getMonth() + 1
    day = date.getDate()
    dataArr.splice(0, 0, (month < 10 ? ('0' + month) : month) + '-' + (day < 10 ? ('0' + day) : day))  // 从头插入
  }
  return dataArr
}

// 返回某个区间段的随机整数
export function getRound (min, max) {
  var temp = min + Math.round(Math.random() * (max - min))
  return temp
}

// 返回数组中的最大值和最小值
export function minAndMax (dataArr) {
  var max = Math.max.apply(null, dataArr)
  var min = Math.min.apply(null, dataArr)
  return {min: min, max: max}
}

// 验证金额（整数且保留小数点后一位）
export function isMoney (val) {
  var reg = /^\d+(\.\d{1})?$/
  return reg.test(val)
}

//  验证小数或整数，验证非0开头的无限位整数和小数。整数支持无限位，小数点前支持无限位，小数点后最多保留两位
// 单独拆分：
//     1. 整数：/^([^0][0-9]+|0)$/
//     2. 小数：/^(([^0][0-9]+|0)\.([0-9]{1,2}))$/
// 根据需求可更改：
// 1. 若更改小数点前限制位数，则更改 + （例如：小数点前限制4位——([^0][0-9]\d{0,3}|0) ），整数同理
// 2. 若更改小数点后限制位数，则更改 {1,2} （ 例如:：小数点后最多保留3位——{1, 3}；小数点后必须保留3位——{3} ）。

export function isDecimal (val) {
  var reg = /^(([^0][0-9]+|0)\.([0-9]{1,6})$)|^([^0][0-9]+|0)$/
  return reg.test(val)
}

// 正整数
export function isPositiveNumber (val) {
  var r = /^\+?[1-9][0-9]*$/
  return r.test(val)
}

// 验证端口号
export function isPort (val) {
  return (/^[0-9]*$/.test(val) && val < 65536)
}

// 验证IP地址
export function isIP (val) {
  var exp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return exp.test(val)
}

export function hmFormat (val) {
  var date = new Date()
  date.setTime(Number(val))
  var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  var minutes = date.getMinutes()
  var minute = minutes < 10 ? '0' + minutes : minutes
  var currentValue = hour + ':' + minute
  return currentValue
}

/** 随机生成固定位数或者一定范围内的字符串数字组合
 * @param {Number} min 范围最小值
 * @param {Number} max 范围最大值，当不传递时表示生成指定位数的组合
 * @returns {String} 返回字符串结果
 * */
export function randomRange (min, max) {
  var returnStr = ''
  var range = (max ? Math.round(Math.random() * (max - min)) + min : min)
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  for (var i = 0; i < range; i++) {
    var index = Math.round(Math.random() * (arr.length - 1))
    returnStr += arr[index]
  }
  return returnStr
}

export function genNonDuplicateID (randomLength) {
  if (randomLength > 0) {
    var data = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var nums = ''
    for (var i = 0; i < randomLength; i++) {
      var r = parseInt(Math.random() * 9)
      nums += data[r]
    }
    return nums
  } else {
    return false
  }
}

// 提取对象数组某元素数据之和
// @param arr { Array } 原始数据
// @param name { String } 需要返回的属性名
// @return ret { Array } 返回值
export function getSumValue (arr, name) {
  var sum = 0
  for (var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i][name]
  }
  return sum
}

export function findMin (arr, name) {
  var _min = arr[0][name]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][name] < _min) {
      _min = arr[i][name]
    }
  }
  return _min
}

export function findMax (arr, name) {
  var _max = arr[0][name]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][name] > _max) {
      _max = arr[i][name]
    }
  }
  return _max
}

// 提取对象数组某元素数据
// @param arr { Array } 原始数据
// @param name { String } 需要返回的属性名
// @param isReverse { boolean } 是否反转
// @return ret { Array } 返回值
export function getParamValues (arr, name, isReverse = false) {
  var ret = []
  for (var i = 0, len = arr.length; i < len; i++) {
    ret.push(arr[i][name])
  }
  return isReverse ? ret.reverse() : ret
}

// 提取对象数组中json对象某元素数据
// @param arr { Array } 原始数据
// @param jsonName { String } json对象属性名
// @param name { String } 需要返回的属性名
// @param isReverse { boolean } 是否反转
// @return ret { Array } 返回值
export function getJsonValues (arr, jsonName, name, isReverse = false) {
  var ret = []
  for (var i = 0, len = arr.length; i < len; i++) {
    var jsonObj = JSON.parse(arr[i][jsonName])
    ret.push(jsonObj[name])
  }
  return isReverse ? ret.reverse() : ret
}

// 数字补0
export function prefixInteger (num, length) {
  return (Array(length).join('0') + num).slice(-length)
}

// 数组去重
export function uniqueArray (arr) {
  return Array.from(new Set(arr))
}
