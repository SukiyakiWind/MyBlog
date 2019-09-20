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
   + eg:<h5>{{price | myCurrency}}</h5>

##列表渲染
### v-for
+ 使用循环数组的时候最好绑定一个唯一的key值,可以提高性能
    + 不建议用索引去当key值
    + 不能通过改变索引来更改数组（无法渲染）
    + 不能通过更改数组长度来更改数组（无法渲染）
    + 无法向对象内添加或删除属性
+ 只能通过数组方法来更改数组
    + vue中重写了这些方法
    + pop shift unshift splice sort reverse push
+ 用 vue.$set 方法来添加对象属性
    + vue.$set(obj,key,value)
1. 循环数组
```
v-for="(item,index) in arr"
```
2. 循环对象
```
v-for="(item,key,index)" in obj"
```
3. 循环数字,字符串
```
v-for="item in 10"
v-for="item in 'Sukiyaki'"
```
### v-model
+ v-model实际是一个语法糖，是绑定+监听事项双向绑定

### 三种常用属性
+ 寻找权重 data > methods > computed
1. methods 
    + 所有数据更新时就都发动一次（很浪费）
2. computed
    + 必须要有一个return的值，相关更新后就会发动一次
3. watch
    + 也是相关属性更新偶才会发动一次
