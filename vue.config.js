const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8686,
    host: '0.0.0.0',
  },
  publicPath: './',
  assetsDir: './',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('tim', resolve('src/tim.js'))
    // 删除预加载
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    // 压缩代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
        chunks: 'all'
    })
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      stylus: {
        'resolve url': true,
        // 自定义主题场景
        import: [path.resolve(__dirname, './src/assets/css/base.styl')]
      }
    }
  },
  // done 配置ts支持
  configureWebpack: {   
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },   
    module: {       
      rules: [   
        {   
          test: /\.tsx?$/,   
          loader: 'ts-loader',   
          exclude: /node_modules/,   
          options: {
            appendTsSuffixTo: [/\.vue$/],   
          }   
        }       
      ]   
    }   
  }
}
