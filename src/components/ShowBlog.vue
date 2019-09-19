<template>
 <div class="body">
   <div  id="show-blog">
     <h1>My Blog
       <h2 v-if="!net">(因为用的是firebase 要翻墙才能读和写)</h2>
     </h1>
     <input type="text" v-model="search" placeholder="search title">
     <div v-for="blog in filteredBlog" class="single-blog">
       <router-link v-bind:to="'/blog/'+ blog.id">
         <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
       </router-link>
       <article>{{ blog.content | snippet }}</article>
     </div>
   </div>
 </div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "show-blog",
      data(){
        return{
          blogs:[],
          search:"",
          net:false,
        }
      },
      created() {
        axios.get('https://my-blog-12f49.firebaseio.com/posts.json')
          .then(function (data) {

            return data.data;
          })
          .then((data)=>{
            let blogsArray = [];
            for(let key in data){
              console.log(key);
              data[key].id = key;
              blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
            this.net = true;
          })
      },
      computed:{
        filteredBlog:function () {
          return this.blogs.filter((blog) => {
              return blog.title.match(this.search);
            })
        }
      }
    }
</script>

<style scoped>
  .body{
    background:url(".././image/lake.jpg")no-repeat center;
    color: #fff;
    height: 100%;
    background-size:cover ;
    min-height: 90vh;
    top: -10px;
  }
  #show-blog{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: transparent;
    border: 4px solid #ccc;
    border-radius:5px;
    font-size: 16px;
  }
  h2{
    font-size:24px;
  }
  h1,input[type="text"]{
    margin: 0px 20px 10px;
  }
  a{
    text-decoration: none;
    padding: 16px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

</style>
