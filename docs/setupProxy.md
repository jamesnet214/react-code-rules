const { createProxyMiddleware } require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        ["/api"],
        createProxyMiddleware({
            target: "https://localhost:44370",
            changeOrigin: true,
            secure: false,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "*",
                "Access-Control-Allow-Methods": "*"
            }
        });
    );
    app.listen(8713);
};
