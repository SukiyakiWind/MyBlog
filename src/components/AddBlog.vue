<template>
  <div class="add-blog">
     <h2> Add-Blog </h2>
    <form v-if="!postKey">
      <label for="Blog-title" >Blog-title</label> <br>
      <input type="text" v-model="blog.title"
             required id="Blog-title" placeholder = "your title">
      <br>
      <label for="content"> Content </label> <br>
      <textarea v-model="blog.content" id="content" placeholder = "your body"></textarea>
      <div id="checkboxes">
        <label for="Anima">Anima</label>
        <input type="checkbox" id="Anima" value="Anima" v-model="blog.categories">
        <label for="Javascript">Javascript</label>
        <input type="checkbox" id="Javascript" value="Javascript" v-model="blog.categories">
        <label for="Vue">Vue</label>
        <input type="checkbox" id="Vue" value="Vue" v-model="blog.categories">
      </div>
      <label for="Blog-author"></label>
      <select v-model="blog.author" id="Blog-author">
        <option v-for="author in authors">{{author}}</option>
      </select><br>
      <button v-on:click.prevent="post">Hand it</button>
    </form>

    <div v-if="postKey">
      <h3>Your blog has been released!</h3>
      <div class="back">
        <router-link to="/">
          <button>Back</button>
        </router-link>
      </div>
    </div>

    <hr>

    <div id="preview">
      <h3 >Preview</h3>
      <p>Title: {{ blog.title }}</p>
      <p>Content:</p>
      <p>{{ blog.content}}</p>
      <p>Categories: {{ blog.categories }}</p>
      <p>Author:{{ blog.author}}</p>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    name: 'add-blog',
    data () {
      return{
        blog:{
          title:'',
          content:'',
          categories:[],
          author:[],
        },
        authors:['Sukiyaki','Mikasa','Zard'],
        postKey:false,
      }
    },
    methods:{
      post:function () {
        axios.post("https://my-blog-12f49.firebaseio.com/posts.json",this.blog)
          .then(()=>{
            this.postKey = true;
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
  .add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding:20px;
  }
  label{
    margin: 20px 0 10px;
  }
  input[type="text"],select{
    display:block;
    width: 100%;
    padding: 8px;
  }
  textarea{
    display: block;
    width: 100%;
    padding: 8px;
    height: 200px;
  }
  #checkboxes input{
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  button{
    display: block;
    margin: 20px 0;
    border: 0;
    color: #fff;
    padding: 15px;
    background: #a30037;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  button:hover{
    background-color: #5EF0FF;
  }
  #preview{
    padding: 10px 20px ;
  }
  a{
    text-decoration: none;
  }
</style>
