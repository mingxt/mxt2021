export function GetCommMessage (id) {
  var message = ''
  id = parseInt(id)
  switch (id) {
    case 9000:
      message = '成功'
      break
    case -9001:
      message = '失败'
      break
    case -9002:
      message = '校验错误'
      break
    case -9003:
      message = '参数错误'
      break
    case -9004:
      message = '设备内无特征信息'
      break
    case -9005:
      message = '手指未按或手指质量差'
      break
    case -9006:
      message = '指纹合成失败'
      break
    case -9007:
      message = '指纹比对失败'
      break
    case -9008:
      message = '内存不足'
      break
    case -9009:
      message = '有闪存错'
      break
    case -9010:
      message = '传感器错'
      break
    case -9011:
      message = '请抬起手'
      break
    case -9012:
      message = '不支持的指令'
      break
    case -9013:
      message = '操作超时'
      break
    case -9014:
      message = '设备占用'
      break
    case -9015:
      message = '设备断开'
      break
    case -9016:
      message = '特征点过少'
      break
    case -9017:
      message = '取消操作'
      break
    case -9018:
      message = '文件错误'
      break
    case -9100:
      message = '加载EyeCoolComm.dll失败'
      break

    case -10600:
      message = '连接服务端通讯失败'
      break
    case -10601:
      message = '发送报文头失败'
      break
    case -10602:
      message = '发送报文体失败'
      break
    case -10603: // 分隔符后包含具体特征数据
      message = '等待服务端响应超时'
      break
    case -10604: // 分隔符后包含具体特征数据
      message = '接收服务端报文失败'
      break
    case -10605: // 分隔符后包含具体特征数据
      message = '解析状态码失败'
      break
    default:
      message = ''
      break
  }
  return message
}

export function GetFingerMessage (id) {
  var message = ''
  id = parseInt(id)
  switch (id) {
    case 1000:
      message = '成功'
      break
    case -1001:
      message = '失败'
      break
    case -1002:
      message = '校验错误'
      break
    case -1003:
      message = '参数错误'
      break
    case -1004:
      message = '设备内无特征信息'
      break
    case -1005:
      message = '手指未按或手指质量差'
      break
    case -1006:
      message = '指纹合成失败'
      break
    case -1007:
      message = '指纹比对失败'
      break
    case -1008:
      message = '内存不足'
      break
    case -1009:
      message = '有闪存错'
      break
    case -1010:
      message = '传感器错'
      break
    case -1011:
      message = '请抬起手'
      break
    case -1012:
      message = '不支持的指令'
      break
    case -1013:
      message = '操作超时'
      break
    case -1014:
      message = '设备占用'
      break
    case -1015:
      message = '设备断开'
      break
    case -1016:
      message = '特征点过少'
      break
    case -1017:
      message = '取消操作'
      break
    case -1018:
      message = '文件错误'
      break
    case -1100:
      message = '加载TesoLive.dll失败'
      break

    case 1101:
      message = '请注册指纹...'
      break
    case 1102:
      message = '请采集指纹...'
      break
    case 1201: // 分隔符后包含具体特征数据
      message = '取得模板数据'
      break
    case 1202: // 分隔符后包含具体特征数据
      message = '取得特征数据'
      break
    default:
      message = ''
      break
  }
  return message
}

export function GetFaceMessage (id) {
  var message = ''
  id = parseInt(id)
  switch (id) {
    case 2000:
      message = '操作成功'
      break
    case -2001:
      message = '失败'
      break
    case -2002:
      message = '参数错误'
      break
    case -2003:
      message = '打开设备失败'
      break
    case -2004:
      message = '未打开设备'
      break
    case -2005:
      message = '设备繁忙'
      break
    case -2006:
      message = '图像数据不正确'
      break
    case -2007:
      message = '设备断开'
      break
    case -2008:
      message = '加载设备库失败'
      break
    case -2009:
      message = '加载算法库失败'
      break
    case -2010:
      message = '内存分配失败'
      break
    case -2100:
      message = '加载EcFaceCamSDK.dll失败'
      break
    case 2001:
      message = '无脸'
      break
    case 2002:
      message = '多脸'
      break
    case 2003:
      message = '头部姿态不正'
      break
    case 2004:
      message = '距离太近'
      break
    case 2005:
      message = '距离太远'
      break
    case 2006:
      message = '面部有表情'
      break
    case 2007:
      message = '有运动模糊'
      break
    case 2100:
      message = '检测到活体'
      break
    case 2101:
      message = '检测到非活体'
      break
    case 2102:
      message = '检测超时'
      break
    case 2103:
      message = '从设备取图失败'
      break
    case 2104:
      message = '检测被取消'
      break
    case 2009:
      message = ''
      break
  }
  return message
}

export function GetFvMessage (id) {
  var message = ''
  id = parseInt(id)
  switch (id) {
    case 4000:
      message = '操作成功'
      break
    case -4001:
      message = '未知错误'
      break
    case -4002:
      message = '不支持'
      break
    case -4003:
      message = '库未初始化'
      break
    case -4004:
      message = '内存不足'
      break
    case -4005:
      message = '超时'
      break
    case -4006:
      message = '参数无效'
      break
    case -4007:
      message = '数据无效'
      break
    case -4008:
      message = '无效指针'
      break
    case -4009:
      message = '缓存过小'
      break
    case -4010:
      message = '未找到'
      break
    case -4011:
      message = '错误关闭'
      break
    case -4012:
      message = '已经打开'
      break
    case -4013:
      message = '错误工作'
      break
    case -4014:
      message = '无效的参数'
      break
    case -4015:
      message = '错误取消'
      break
    case -4016:
      message = '名字已存在'
      break
    case -4017:
      message = '组未找到'
      break
    case -4018:
      message = '模板未找到'
      break
    case -4019:
      message = '超过最大值'
      break
    case -4100:
      message = '加载ID_FVD.dll失败'
      break
    case -4101:
      message = '加载libvapi.dll失败'
      break
    case -4102:
      message = '初始化算法失败'
      break
    case -4103:
      message = '获取特征大小失败'
      break

    case 4101:
      message = '请按捺手指'
      break

    case 4102:
      message = '请抬起手指'
      break

    case 4201:
      message = '' // 图像数据
      break

    default:
      break
  }
  return message
}
