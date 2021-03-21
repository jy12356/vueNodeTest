const path = require('path')
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src/'))
    },
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        overlay: false
    },
    outputDir: '../back/public',
}