// 引入一个包
const path = require("path")
// 引入 html 插件
const HTMLWebpackPlugin = require("html-webpack-plugin")
// 引入 clean 插件，当你重新打包文件时，dist 下的文件不再是覆盖，而是删除重新打包，这样可以避免有垃圾文件残留
const { CleanWebpackPlugin} = require("clean-webpack-plugin")

// webpack 中的所有配置信息都应该卸载 module.exports 中 
module.exports = {

  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname,'dist'),
    // 打包文件的文件名
    filename: "bundle.js",
    // 告诉 webpack 不使用箭头函数
    environment: {
      arrowFunction: false,
      // 不使用 const
      const: false
    }
  },

  // 指定 webpack 打包时要使用的模块
  module: {
    // 指定加载规则
    rules: [
      {
        //  test 指定的是规则生效的文件
        test: /\.ts$/,
        // 指定要使用的加载器 loader
        use: [
          // 写复杂的话就得使用 大括号
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置预定义的环境
            options: {
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    // 指定 corejs 的版本
                    "corejs": "3",
                    // 使用 corejs 的方式 “usage” 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node-modules/,
      },

      // 设置 less 文件处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入 postcss
          {
            loader: 'postcss-loader',
            options:{
              postcssOptions: {
                plugins:[
                  [
                    'postcss-preset-env',
                    {
                      browsers:'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },

  // 配置 webpack 插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: "自定义title",
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ],

  // 用来设置可引用模块类型
  resolve: {
    extensions:['.ts','.js'],
  },

  mode: "development"
}