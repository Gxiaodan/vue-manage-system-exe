
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        // open: false
        proxy: {
            // '/api':{
            //     target:'http://jsonplaceholder.typicode.com',
            //     changeOrigin:true,
            //     pathRewrite:{
            //         '/api':''
            //     }
            // },
            '/ms':{
                target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
                changeOrigin: true
            },
            '/aaaa': {
                target: 'http://172.20.32.202:8997/',
                changeOrigin: true,
                pathRewrite: {
                  '^/aaaa': ''
                }
              },
              '/bbbb': {
                target: 'http://120.79.68.66:8070',
                changeOrigin: true,
                pathRewrite: {
                  '^/bbbb': ''
                }
              },
              '/bd': {
                target: 'http://www.baidu.com',
                changeOrigin: true,
                pathRewrite: {
                  '^/bd': ''
                }
              }
        }
    }

}