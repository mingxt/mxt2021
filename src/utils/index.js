/**
 * 获取路由名称, 根据url地址
 * @param {*} url
 */
export function getRouteNameByUrl (url) {
  // let val = /.*\/(.*)\.html/.exec(url)
  // return val && val.length >= 1 ? val[1] : ''
  return tranformStr1(url.endsWith('.html') ? url.substring(0, url.length - 5) : url)
}

/**
 * 字符串转驼峰格式
 * @param {*} str
 */
export function tranformStr1 (str) {
  var strArr = str.split('/')
  for (var i = 1; i < strArr.length; i++) {
    if (i === 1) {
      strArr[i] = strArr[i].charAt(0) + strArr[i].substring(1)
    } else {
      strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1)
    }
  }
  return strArr.join('')
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate (data, id = 'id', pid = 'parentId') {
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (var k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = []
      }
      if (!temp[data[k][pid]]['_level']) {
        temp[data[k][pid]]['_level'] = 1
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1
      temp[data[k][pid]]['children'].push(data[k])
    } else {
      res.push(data[k])
    }
  }
  return res
}

/**
 * 获取字符串字节长度
 * @param {*} s
 */
export function getStringLength (s) {
  return s.replace(/[\u4e00-\u9fa5\uff00-\uffff]/g, '**').length
}

/**
 * 获取uuid
 */
export function getUUID () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
  })
}

/**
 * 匹配数据字典
 */
export function getNameByCode (typeList, code) {
  for (var i = 0; i < typeList.length; i++) {
    if (typeList[i].code === code) {
      return typeList[i].name
    }
  }
  return ''
}

export function isInteger (str) {
  let reg = /^\+?[0-9][0-9]*$/
  return reg.test(str)
}
