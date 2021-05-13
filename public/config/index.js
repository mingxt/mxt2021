/**
 * 生产环境
 */
;(function () {
  window.SITE_CONFIG = {}
  // api接口请求地址
  window.SITE_CONFIG.baseUrl = 'http://192.168.105.3:9010'

  // 嵌套iframe地址
  window.SITE_CONFIG.nestIframeUrl = 'http://192.168.105.3:9010'
  // 静态资源文件夹名称
  window.SITE_CONFIG.staticFileName = ''
  // cdn地址
  window.SITE_CONFIG.cdnUrl = './' + window.SITE_CONFIG.staticFileName
  // 辅助决策地图，没有则注释掉，注意这里的是nginx的端口1800
  // window.CommonUrl = 'http://192.168.8.231:8085/gis/common/{z}/{y}/{x}.png'
  // window.SatelliteUrl = 'http://192.168.8.231:8085/gis/satellite/{z}/{y}/{x}.png'
  window.CommonUrl = 'http://60.174.207.15:8085/gis/1082287436/{z}/{y}/{x}.png'
  // 装备业务系统首页右上角，没有则注释掉，注意这里的是nginx的端口1800
  // window.NginxLinkUrl_SAS = 'http://192.168.105.3:1800/SAS'
  window.NginxLinkUrl_3D = 'http://192.168.105.3:1800/BIGSCREEN'
  // window.NginxLinkUrl_WEAPON_BIGSCREEN = 'http://192.168.105.3:1800/WEAPON_BIGSCREEN'
  // window.NginxLinkUrl_MATERIAL_BIGSCREEN = 'http://192.168.105.3:1800/MATERIAL_BIGSCREEN'
})()
