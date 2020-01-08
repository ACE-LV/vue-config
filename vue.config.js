const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const path = require('path') //引入 path模块
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./", // 默认'/'，部署应用包时的基本 URL
    outputDir: 'dist', // 'dist', 生产环境构建文件的目录
    assetsDir: "static", //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    lintOnSave: false, //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: !IS_PROD, // 生产环境的 source map
    parallel: require("os").cpus().length > 1,
    pwa: {},
    //本地server
    devServer: {
        hot: true, //热加载
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        open: false, // 是否打开浏览器
        // host: "localhost",
        // port: "8080", // 代理断就
        https: false,
        hotOnly: false, // 热更新
        proxy: {
            "/api": {
                target: "https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets", // 目标代理接口地址
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                // ws: true, // 是否启用websockets
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    },

    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@scss', resolve('src/assets/scss'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'));

        //图片压缩
        if (IS_PROD) {
            config.module
                .rule("images")
                .use("image-webpack-loader")
                .loader("image-webpack-loader")
                .options({
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    },
                    optipng: {
                        enabled: false
                    },
                    pngquant: {
                        quality: [0.65, 0.9],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false
                    }
                    // webp: { quality: 75 }
                });
        }
    },
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/variables.scss";`
            }
        }
    }
};