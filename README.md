# babel学习笔记

一个JavaScript编译器。将项目代码转换以兼容当前运行环境。

## 基本介绍

- @babel/core：核心功能
- @babel/cli：命令行工具
- 插件：单个功能的JS程序，用于代码的转换。例如：@babel/plugin-transform-arrow-functions用于转换ES6的箭头函数
- 预设：一组插件的集合
- 配置文件：babel.config.json(V7.8.0+)、babel.config.js、.babelrc、.babel.json

- @babel/plugin-transform-runtime：实时

## @babel/polyfill

包含core-js和regenerator-runtime来模拟完整ES2015+环境的包，`已经废弃，不建议使用。建议直接包含 core-js/stable （用于模拟 ECMAScript 的功能）和 regenerator-runtime/runtime （需要使用转译后的生成器函数）`

```js
import "core-js/stable";
import "regenerator-runtime/runtime";
```

## 插件Plugins

- 转换代码
- 在配置中使用`插件短名称`，babel会自动检查是否已安装到node_modules目录
- `插件执行顺序`：在presets之前执行；从前往后顺序执行
- `插件传递参数`：插件名和参数对象组成一个数组

```js
{
  "plugins": [
    [
      "transform-async-to-module-method",
      {
        "module": "bluebird",
        "method": "coroutine"
      }
    ]
  ]
}
```

## 预设Presets

- 一组插件的集合
- 执行顺序：从后往前颠倒执行
- 官方推荐预设：
  - `@babel/preset-env`：智能预设，`推荐使用，只转译语法，API的转译需要使用垫片`
  - @babel/preset-flow：flow相关
  - @babel/preset-react：react相关
  - @babel/preset-typescript：ts相关
- stage-X：实验性质的预设，分为5个提案阶段，`已经废弃`
- `参数传递、短名称`使用同插件一样
