<template>
    <div id="single-blog">
      <h2>Single Blog</h2>
      <div v-if="!status">
        <h1>{{ blog.title  }}</h1>
        <article> Body: <br> {{ blog.content }}</article>
        <p> Author : {{blog.author}}</p>
        <ul> Categories :
          <li v-for="category in blog.categories">{{category}}
          </li>
        </ul>
        <label>Delete Password
          <input type="password" v-model="password">
        </label>
        <p v-if="password === myPassword">这么难猜都被你猜到了，不要乱删我的东西好吗！</p>
        <button v-if="password === myPassword" @click.prevent="myDelete">Delete</button>
      </div>

      <div v-if="status">
        <h3>Your blog has been Delete!</h3>
          <div class="back">
            <router-link to="/">
              <button>Back</button>
            </router-link>
          </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'

    export default {
        name: "single-blog",
      data(){
          return{
            status:false,
            id:this.$route.params.id,
            blog:{},
            myPassword:'nmsl',
            password:''
          }
      },
      methods:{
          myDelete:function () {
            axios.delete('https://my-blog-12f49.firebaseio.com/posts/' + this.id + ".json")
              .then(()=>{
                this.status = true;
              })
          }
      },
      created(){
          axios.get('https://my-blog-12f49.firebaseio.com/posts/' + this.id + ".json")
            .then((data) => {
              // console.log(this.id);
              console.log(data.data);
              this.blog = data.data;
            })
      }
    }
</script>

<style scoped>
  *{
    margin-top: 20px;
  }
  li{
    margin-left: 20px;
    list-style: none;
    display: inline;
  }
  button{
    display: block;
    margin: 10px 0;
    border: 0;
    color: #fff;
    padding: 10px;
    background: #a30037;
    border-right: 4px;
    cursor: pointer;
    transition:all 0.5s;
  }
  button:hover{
    background-color: #5EF0FF;
  }
  #single-blog{
    max-width: 800px;
    margin: 0 auto;
    background: #eeeeee;
    padding: 20px;
  }

</style>
