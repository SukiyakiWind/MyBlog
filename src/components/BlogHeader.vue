<template>
    <nav>
      <ul class="list">
        <li><router-link to="/" exact>Blog</router-link></li>
        <li><router-link to="/add" exact>Write Blog</router-link></li>
        <li><router-link to="/game" exact>Game</router-link></li>
        <li><router-link to="/immortal" exact>Dota2 </router-link></li>
        <li @mouseover="over" @mouseout="out"> <a>Test</a>
          <div class="down">
            <router-link to="/sass" exact>Sass</router-link>
            <router-link to="/showprogress" exact>Progress</router-link>
            <router-link to="/regtest" exact>Test</router-link>
          </div>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "BlogHeader",
      methods:{
          over(){
            document.querySelector('.down').style.display='block';
          },
          out(){
            document.querySelector('.down').style.display='none';
          }
      }
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
    border-radius: 5px;
    cursor: pointer;
  }
  a:hover{
     color: #5ef0ff;
     text-shadow: 0 0 32px #eeeeee;
   }
  nav{
    width: 100%;
    position: relative;
    background: rgb(223, 93, 219);
    padding: 30px 0;
  }
  .list{
    position: relative;
  }
  .down{
    position: absolute;
    background: rgb(223, 93, 219);
    display: none;
  }
  .down a{
    display: block;
    border-radius: 0;
  }
  .router-link-active{
    background-color: #ccc;
    color: #222;
    opacity: 0.8;
  }

</style>
