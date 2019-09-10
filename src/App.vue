<template>
  <div id="app">
    <blog-header></blog-header>
    <br><br><br><br>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
    'add-blog':AddBlog,
    'show-blog':ShowBlog,
    'blog-header':BlogHeader,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: transparent;
}
  *{
    padding:0;
    margin:0;
  }
</style>
