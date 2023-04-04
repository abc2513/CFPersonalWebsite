const { createProxyMiddleware } =require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        createProxyMiddleware('/data',{
            target:"http://localhost:8088",
            changeOrigin:true,
            secure: false,
            // 修改响应头信息，实现跨域并允许带 cookie
            // onProxyRes: function(proxyRes, req, res) {
            //     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
            //     res.header("Access-Control-Allow-Credentials", "true");
            // },
            //pathRewrite:{'^/api':'/'},
        }),//这里可以写多个proxy
        createProxyMiddleware('/lab',{
            target:"http://localhost:8088",
            changeOrigin:true,
            secure: false,
        }),
    )
    
}