## vue+webpack是否有多页面

目前使用vue来做项目，估计大部分都是单页面（SPA）应用，一个轻型的 MVVM 框架，谁用了MVVM框架，就再也回不去JQ时代了，哈哈。

在手机端的项目，使用vue + vue-router是high到爆，不仅仅是我们开发的而言，最主要的用户体检也是开足马力，体检感杠杠的。

那问题来了，使用vue+webpack的单页面是爽到爆，那如果是多页面也能不能high到爆呢？那当然呀，必须的必，vue、webpack的忠粉（哈哈，好像这忠粉不关系到多页面的）。

在谷歌找vue 多页面，实例还是比较少，功夫不负有心人，在yaoyao1987那找到了，具体可以到这个[yaoyao1987 github][1]，非常感谢yaoyao1987童鞋

感谢yaoyao1987 bluefox1688，具体可以到这个[yaoyao1987 github][1]，[bluefox1688 github][2]，非常感谢yaoyao1987，bluefox1688童鞋

今天要讲的内容是基于yaoyao1987，bluefox1688 童鞋的多页面实例上根据个人需求改的

## 2017-4-7优化了点啥

1.新增configure.js文件 项目名称配置和启动自动打开入口配置
2.打包时去除注释和空格

### 优化的内容
我们先来讲讲，具体我们优化了什么内容。

 1. 增加全局统一使用的模块`Lib.js`库，可能这里看不明白，不要紧，后面会讲到。
 2. 支持字体图标
 3. 增加干净的页面、组件的模板，复制即可以使用。
 4. 去掉多余的代码注释，坑了我的注释，别再坑人了
 5. 构建时，增加对css打包的支持
 6. 提取公共模块 css js
 7. 解决了引用图片、字体文件路径问题
........

## 使用方法
``` bash
# 安装
npm install

# 调试环境 serve with hot reload at http://localhost:8181/module/index.html
npm run dev

# 生产环境 build for production with minification
npm run build

#注意
执行 npm run dev npm run build  前请修改config/configure.js中 ProjectDirectory 的值 改为项目名称 启动路径为默认需要打开的页面
怎么发布就随你啦！
```
本地默认访问端口为8181，需要更改的童鞋请到项目根目录文件`config.js`修改。

###目录结构
***
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 公共的css js 资源
│   ├── components     // 各种组件
    ├── ProjectName    // 项目名称
</pre>

下列说明 以项目名称为`module`讲解

从目录结构上，各种组件、页面模块、资源等都按类新建了文件夹，方便我们储存文件。
其实我们所有的文件，最主要都是放在`module`文件夹里，以文件夹名为html的名称。


``` stylus
|---index    首页模块
   |---index.html
   |---index.js
   |---app.vue
|---informatio    质询模块
   |---informatio.html
   |---informatio.js
   |---app.vue
|---forum    论坛模块
   |---news.html
   |---forum.js
   |---app.vue

|---personal    个人资料模块
   |---personal.html
   |---personal.js
   |---app.vue
|---signin    登录模块
   |---signin.html
   |---signin.js
   |---app.vue
|---editProfile    修改个人资料页
   |---editProfile.html
   |---editProfile.js
   |---app.vue
|---setUp    设置页
   |---setup.html
   |---setup.js
   |---app.vue
|---follw    关注页
   |---follow.html
   |---follow.js
   |---app.vue
|---news    查看历史页
   |---news.html
   |---news.js
   |---app.vue

就是我们访问时的地址：

``` stylus
http://localhost:8181/module/index.html
```
这里一定要记住，在`module`里下级文件夹，一个文件夹就是一个html，`js``vue template` 都统一放在当前文件夹里，当然你也可以继续放其他的资源，例如css、图片等，webpack会打包到当前页面里。
如果项目不需要这个页面了，可以直接把这个文件夹直接删除掉，干净项目，干活也开心。
像以前我们传统开发项目，所有的图片都习惯放在`images`里，当项目有改动时，有些图片等资源用不上了，但还占着坑位，虽然现在的硬件容量大到惊人，但我们应该还是要养到一个良好的习惯。
当前页面的开发在`app.vue`里，打开后你就会看到很熟悉的`<template>`、`<script>`、`<style scoped>`了。

### 全局统一公共模块

我们做多页面开发，那肯定会涉及到全局都能调用的公共库，或者是把别人封装的库也一起打包在全局公共模块里。

如果看过源码的童鞋，在`*.vue`页面里，我都统一import了一个文件

```
import Lib from 'assets/Lib.js'
```
这就是全局统一公共模块，我们先看看`Lib.js`里的代码

``` bash
# 导入全局的css
import 'assets/css.css';
# 导入全局的站点配置文件
import C from 'assets/conf';
# 导入全局的共用事件
import M from 'assets/common';

var Rxports = {
	M,C
};

module.exports = Rxports

```
在上方代码的`M`、`C`都是什么鬼，聪明的小伙伴就知道我想干嘛了，省写少事呗。
例如我们现在想调用APP的名称，在`.vue`里可以这么写

``` bash
import Lib from 'assets/Lib.js'
Lib.C.appname;  # 蓝锅锅
```
只需要在`*.vue`里导入`import Lib from 'assets/Lib.js'`，就可以到处使用全局模块了。
不再像传统的开发模式，需要一堆的`<script>`一个一个的来放到页面的底部。
传统方式：

``` stylus

<script type='text/javascript' src='//g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script>
></script>
  <script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>


```
这里就是我想讲的关于优化的第一点提到的全局模块库。
当然也有童鞋问呀，会不会每个页面都会把这些全局模块库都打包在当前页面，那JS文件体积大到惊人。
哎呀，你当`webpack`是二货的呀，`webpack`会自动帮你处理好的，会把在`*.vue`里的`import Lib from 'assets/Lib.js'`的库自动提取出来，
放到一个全局的JS文件里，这就是自动构造的神奇呀，省心省电，妈妈再也不用担心我做重复的工作了。


在`Lib.js`里，我们也看到有两个导入的JS文件，主要来做什么的呢？
为了更好的在全局调用模块里，知道哪个模块的作用是什么，另外在写代码时更能快速查找到JS文件，我区分了配置文件和共用事件文件，即`conf`、`common`，下面说下具体的用途。
``` bash
# 储存站点的配置，例如web的名称、LOGO地址等
import C from 'assets/conf';
# 导入全局的共用事件，例如在微信的JS SDK初始化，每个页面都要分享，都需要初始化的，一次调用，全局使用，棒！！
import M from 'assets/common';
```
当然，你也可以不像这样区分不同的JS文件，删除也没有影响的，具体也要看项目的需要而定，不能死读书。


另外，如果想要干净的页面模块模板，可以到根目录的`tpl`里复制`module_tpl`整个文件夹，然后粘贴到`src/module`目录下马上就可以进行开发了，开发之前记得在`cmd`里`npm run dev`跑一遍，新增页面都要重新`dev`一遍。


`module`我们就讲到这里，下面我们来讲讲组件的调用，最爱组件了。

### 组件的使用
组件（Component）是 vue.js 最强大的功能之一，当你发现使用组件可以减少造轮子里，你会深深的爱上它。
我们的组件都是放在`components`目录下的，调用组件的方法也很简单。

``` stylus
import Button from 'components/Hello';
```
然后记得在`*.vue`注册导入的组件，要不然会影响使用。

``` bash
import Button from 'components/Hello';
export default {
  data() {
    return {

    }
  },
  components: {
   # 在这里注册组件，不注册组件的话，是无法使用的。
	Button
  }
}
```


### 图标字体

在yaoyao1987童鞋里，是没有打包构造图标字体的代码逻辑，这也是我优化上去的一部分，建议使用`iconfont`图标（http://www.iconfont.cn） ，强大到无所不能，
可以到`iconfont`下载自己想要的图标字体，记得是把文件放到`\src\assets\font`文件夹里。
个人用的是`icomoon`.


## 构建代码说明

那我们使用的是vue-cli的手脚架，用过`vue+cli`的朋友知道主要构建代码都放在根目录`build`下，vue多页面主要修改了这三个JS文件`webpack.base.conf.js`、`webpack.dev.conf.js`、`webpack.prod.conf.js`

``` bash
# 【webpack.base.conf.js】主要是构建的全局设置，主要是增加了以下代码，已经增加在JS文件里，这里只是做一个补充说明，具体请看`build/webpack.base.conf.js`。

entry: utils.getEntries('./src/'+config.build.assetsSubDirectory+'/**/*.js'),// 获得入口js文件

```

``` bash
# 【webpack.dev.conf.js】主要是开发的全局设置，主要是增加了以下代码，已经增加在JS文件里，这里只是做一个补充说明，具体请看`build/webpack.dev.conf.js`。

#移除默认的
new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'index.html',
  inject: true
}),
#添加
var pages = utils.getEntries('./src/'+config.build.assetsSubDirectory+'/**/*.html');

for (var pathname in pages) {
    // 配置生成的html文件，定义路径等
    var conf = {
        filename: pathname + '.html',
        template: pages[pathname],   // 模板路径
        inject: true              // js插入位置

    };
    if (pathname in module.exports.entry) {
        conf.chunks = ['vendors', pathname];
        conf.hash = true;
    }
    module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
```

``` bash
# 【webpack.prod.conf.js】主要是编译的全局设置，主要是增加了以下代码，已经增加在JS文件里，这里只是做一个补充说明，具体请看`build/webpack.prod.conf.js`。


## 结束言
不知不觉时间又过去，啰嗦一堆堆的，每个项目需求都不一样，配置也会有许不同，也希望更多的朋友分享自己的代码和想法出来哈，也可以一起交流。


[1]: https://github.com/yaoyao1987/vue-cli-multipage
[2]: https://github.com/bluefox1688/vue-cli-multi-page
