const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        // config.module
        //     .rule('css')
        //     .test(/\.vue$/)
        //     .oneOf('vue')
        //     .resourceQuery(/\?vue/)
        //     .use('px2rem')
        //     .loader('px2rem-loader')
        //     .options({
        //         remUnit: 75
        //     })
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                //这个是加上自己的路径，
                //注意：试过不能使用别名路径
                path.resolve(__dirname, "./src/common/common.less")
            ]
        }
    },
    lintOnSave:false
}