import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from'./routes'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(VueRouter);

//自定义指令
// Vue.directive
// 第一个参数是名字， 第二个名字是一个参数
// el 是元素， binding.value是传过来的值 ，arg 是参数
// eg: <p v-theme:col="'wide'">{{ app }} </p>
//   theme是名字， col是参数binding.arg ，wide是binding.value， app是el元素。
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = '#' + Math.random().toString(16).slice(2,8);
  }
});

Vue.directive('theme',{
  bind(el,binding,vnode){
   if(binding.value === 'wide'){
     el.style.maxWidth = '1000px';
   }else if(binding.value === 'narrow'){
     el.style.maxWidth = '500px';
   }
  }
});

// 自定义过滤器
// Vue.filter( id, [definition] )
// {string} id
// {Function} [definition]
Vue.filter('to-uppercase', function(value){
   return value.toUpperCase();
});
Vue.filter('snippet',function (value) {
  return value.slice(0,100)+ '...';
});

//创建路由
const router = new VueRouter({
  routes: Routes,
  mode:'history',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
});
