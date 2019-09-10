<template>
    <nav>
      <ul>
        <li><router-link to="/" exact>Blog</router-link></li>
        <li> <router-link to="/add" exact>Write Blog</router-link></li>
        <li><router-link to="/game" exact>Game</router-link></li>
        <li><router-link to="/sass" exact>Sass</router-link></li>
        <li><router-link to="/immortal" exact>Dota2Immortal </router-link></li>
        <li><router-link to="/showprogress" exact>Progress</router-link></li>
<!--        <li><router-link to = "/sortshow">SortShow</router-link></li>-->
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "BlogHeader",
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
    text-align: center;
    margin: 0;
    z-index: 3;
  }
  li{
    margin: 0 10px;
    display: inline-block;
  }

  a{
    transition: all 0.5s;
    color: #FFF;
    text-decoration: none;
    padding: 16px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  a:hover{
     color: #5ef0ff;
     font-size: 24px;
     text-shadow: 0 0 32px #eeeeee;
   }
  nav{
    width: 100%;
    position: fixed;
    background: rgb(223, 93, 219);
    padding: 30px 0;
    margin-bottom: 20px;
  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
  }
</style>
