module.export = {
    chainWebpack: config => {
        // url-loader 限制 4kb 的资源内联
        config.module
            .rule('images')
                .use('url-loader')
                    .loader('url-loader') 
                    .tap(options => Object.assign(options, { limit: 10240 }))
    },
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRequires: {
                '^/api': ''
                }
            }
        }
    }
}