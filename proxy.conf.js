const PROXY_CONFIG= [
    {
        context: ['/swagger'],
        target: "https://tasks-homolog.k8s-platform-dev-us-east-1.fluig.io/",
        secure: false,
        pathRewrite: { '^/swagger': '' },
        changeOrigin: true,
    }
]

module.exports = PROXY_CONFIG;