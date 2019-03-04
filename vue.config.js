const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const PurgecssPlugin = require("purgecss-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const glob = require("glob-all");
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
module.exports = {
  outputDir: "./build",
  //   publicPath: process.env.NODE_ENV === "production" ? "/vant-demo/" : "/",
  runtimeCompiler: true,
  publicPath: "./",
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("common", resolve("src/common"))
      .set("Images", resolve("src/assets/Images"))
      .set("components", resolve("src/components"))
      .set("layout", resolve("src/layout"))
      .set("views", resolve("src/views"))
      .set("static", resolve("src/static"));
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 50,
            propList: ["*"]
          })
        ]
      },
      less: {
        modifyVars: {
          "text-color": "#454545"
        }
      }
    }
  },
  // 去除多余无效的 css
  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = [];
      plugins.push(
        new PurgecssPlugin({
          paths: glob.sync([
            path.join(__dirname, "./src/index.html"),
            path.join(__dirname, "./**/*.vue"),
            path.join(__dirname, "./src/**/*.js")
          ])
        })
      );
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ["console.log"] //移除console
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
      config.plugins = [...config.plugins, ...plugins];
    }
  }
};
