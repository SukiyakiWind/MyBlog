#Sukiyaki
##用了什么Vue的指令
### 使用Vue定义自定义指令的方法
1. 全局定义 Vue.directive(el,binding,vnode)
2. 局部定义，directives：{}
### 使用方法
+ 第一个参数是名字el， 第二个名字是一个参数
+ el 可以是元素， binding.value是传过来的值 ，arg 是参数
+ 可以是是一个对象，这个对象身上，有一些指令相关的函数，这些函数可以在特定的阶段，执行相关的操作
1. rainbow指令，随机颜色
```
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = '#' + Math.random().toString(16).slice(2,8);
  }
});
```

2. theme指令，定义主题大小
```
Vue.directive('theme',{
  bind(el,binding,vnode){
   if(binding.value === 'wide'){
     el.style.maxWidth = '1000px';
   }else if(binding.value === 'narrow'){
     el.style.maxWidth = '500px';
   }
  }
});
```


### 自定义过滤器使用方法
1. 全局定义 Vue.filter()
    1. Vue.filter('name',function{
    
    })
    2. filters:{
        name:function(){
        }
    }
2. 局部定义 filters:{}
### 使用方法
```
Vue.filter('to-uppercase', function(value){
   return value.toUpperCase();
});
Vue.filter('snippet',function (value) {
  return value.slice(0,100)+ '...';
});
```
1. <any>{{表达式 | 过滤器}}</any>
   + eg:<h1>{{price | myCurrency}}</h1>
