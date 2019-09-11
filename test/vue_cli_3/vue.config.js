module.exports = {
    devServer: {
        proxy: {
            '/v3.0.0/': {
                target: 'https://gateway.qschou.com',
                secure: false,
                changeOrigin: true,
                // pathRewrite: { '^/api': '' }
            }
        }
    }
}