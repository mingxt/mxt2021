const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cesiumSource = 'node_modules/mars3d-cesium/Build/Cesium/'

module.exports = {
  publicPath: './', // 打包后的位置
  outputDir: 'dist',//打包后的目录名称
  assetsDir: './static', // 静态资源目录名称
  productionSourceMap:false,  //去掉打包的时候生成的map文件
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('static')
      }),
      new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Workers'), to: 'static/Workers' }]),
      new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'static/Assets' }]),
      new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty'), to: 'static/ThirdParty' }]),
      new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'static/Widgets' }])
    ],
    // pluginOptions: {
    //   'style-resources-loader': {
    //     preProcessor: 'sass',
    //     patterns: [
    //       path.resolve(__dirname, '@/assets/styles/*.scss')      //你的.scss文件所在目录
    //     ]
    //   }
    // },
    module: {
      unknownContextCritical: false,
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/
    }
  },
}
