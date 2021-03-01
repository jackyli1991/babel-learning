module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // @babel/preset-env 预设的参数说明：
      {
        /**
         * 指定将ES6 modules转换为哪一种模块规范
         * 
         * 一般在webpack 项目中，我们会将此参数设置为false,既将module交由webpack处理，而不是babel
         */
        modules: false,
        /**
         * useBuiltIns：对引入的polyfill的处理方式，可选以下3个参数：
         *  - false：不做任何处理，即如果在入口文件引入polyfill，则无视浏览器的兼容配置，引入所有的polyfill
         *  - entry：根据配置的浏览器兼容，只引入浏览器不兼容的polyfill，需要在入口文件手动引入polyfill
         *  - usage：根据配置的浏览器兼容，只引入浏览器不兼容并且代码中用到的polyfill，此时不需要在入口文件手动引入polyfill
         */
        useBuiltIns: 'usage',
        // 在useBuiltIns不为false时生效
        corejs: 3,
        // Babel的日志信息：在控制台会显示哪些语法做了转换，开发的时候可以开启查看
        debug: false,
        /**
         * 指定转换需要支持哪些浏览器
         * 也可通过.browserslistrc配置文件或package.json里的browserslist字段指定。优先级为：
         * targets > package.json browserslist > .browserslistrc
         * 
         * 建议将target写到.browserslistrc 或者 package.json，这样可以与项目中的多种工具共享。
         */
        // targets: [],
        // 强制引入/排除引入的插件
        include:[],
        exclude: [],
        // 透传给其他用到这些参数的插件
        spec: false,
        loose: false
      }
    ]
  ],
  plugins: [
    /**
     * 复用辅助函数，在开发第三方类库时建议使用
     * 须配合@babel/runtime使用
     * 
     */
    [
      '@babel/plugin-transform-runtime',
      {}
    ]
  ],
  // 是否压缩转译后的代码。默认false，交由webpack去做代码压缩
  minified: false,
  // 忽略某些文件不进行转译
  ignore: []
}