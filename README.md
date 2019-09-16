# my-blog

>一个VUE 的个人博客，和计算dota2开宝瓶概率的项目 

## 运行方法

``` bash
安装
npm install

#本地服务器 localhost:8084
#运行项目
npm run dev

#打包
npm run build

```
## 具体网址
> www.sukiyaki.xyz

## 路由配置
```angular2
routes.js
import ShowBlog from './components/ShowBlog'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import ShowProgress from './components/ShowProgress'
import Immortal from './components/Dota2Immortal'
import SassLogIn from './components/SassLogIn'
import SortShow from './components/SortShow'
import ShowGame from './components/ShowGame'
import RegExpTest from './components/RegExpTest'

export default[
  {path:'/',component:ShowBlog},
  {path:'/add',component:AddBlog},
  {path:'/blog/:id',component:SingleBlog},
  {path:'/showprogress',component:ShowProgress},
  {path:'/immortal',component:Immortal},
  {path:'/sass',component:SassLogIn},
  {path:'/sortshow',component:SortShow},
  {path:'/game',component:ShowGame},
  {path:'/regtest',component:RegExpTest},
],

main.js
import Routes from'./routes'
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
});

App.vue

<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

```
