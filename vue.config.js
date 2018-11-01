const path = require('path')
module.exports = {
  runtimeCompiler: true,//是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, //不在production环境使用SourceMap
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 实时热更无效
  chainWebpack: config => {
    config.resolve
        .symlinks(true)
    return config
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      });
      // config.module.rule('md')
      // .test(/\.md/)
      // .use('vue-loader')
      // .loader('vue-loader')
      // .end()
      // .use('vue-markdown-loader')
      // .loader('vue-markdown-loader/lib/markdown-compiler')
      // .options({
      //   raw: true
      // })
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './packages/style/main.less'),
      ]
    }
  },
   //需要热更新此处设置成false
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        resources: [
          path.resolve(__dirname, './packages/style/main.less'),
        ]
      }
    }
  },
  /* css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack:(config)=>{
    //入口文件
    config.entry.app = ['babel-polyfill', './src/main.js'];
    //删除console插件
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console:true,
            drop_debugger:true
          },
          output:{
            // 去掉注释内容
            comments: false,
          }
        },
        sourceMap: false,
        parallel: true,
      })
    ];
    //只有打包生产环境才需要将console删除
    if(process.env.VUE_APP_build_type=='production'){
      config.plugins = [...config.plugins, ...plugins];
    }
  },
  //允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: (config) => {
    //命名 
    config.resolve.alias
      .set('SRC', resolve('src'))
      .set('ASSET', resolve('src/assets'))
      .set('VIEW', resolve('src/components/page'))
      .set('COMPONENT', resolve('src/components/common'))
      .set('UTIL', resolve('src/utils'))
      .set('SERVICE', resolve('src/services'));
    //打包文件带hash
    config.output.filename('[name].[hash].js').end(); 

    //为了补删除换行而加的配置
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // modify the options...
        options.compilerOptions.preserveWhitespace = true;
        return options;
      });
  },
  devServer: {//跨域
    port: 8081,// 端口号
    open: true, //配置自动启动浏览器
    proxy: {// 配置跨域处理 可以设置多个
      '/api': {
        target: 'xxxx',
        ws: true,
        changeOrigin: true
      },
    }
  } */
}
