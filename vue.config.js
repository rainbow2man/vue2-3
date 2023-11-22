const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: 'http://localhost:3000'
  // }
  devServer: {
      proxy: {
        //走代理
          '/api': {
              target: 'http://localhost:3000',
              changeOrigin: false,
              pathRewrite: {
                  '^/api': '/'
              }
          }
      }
  }
})
