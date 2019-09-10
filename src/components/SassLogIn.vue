<template>
  <div class="SassLogIn">
    <div class="body">
      <div class="card">
        <h3>帝王就是我迪亚波罗哒</h3>
        <form action="">
          <label for="email"></label><input type="email" id="email" placeholder="email">
          <label for="password"></label><input type="password" id="password" placeholder="password">
          <input @click="myAlert" type="button" value="sign in">
        </form>
        <ul>
          <li><p @click="myAlert">Sign Up</p></li>
          <li><p @click="myAlert">Forgot Password</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SassLogIn",
      data(){
        return{

       }
      },
      methods:{
          myAlert:function () {
            alert('不要按啦，这个只是试一下scss，没有连接数据库的！！');
            return false;
          }
      }
    }
</script>

<style lang="scss" scoped>
  $scarlet:#a30037;
  $crimson:#dc143c;
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  .body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size:cover;
    background: url(".././image/lake.jpg") no-repeat center;

    &.body::after{
      content:'';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $crimson;
      opacity: 0.8;
      z-index:1;
    }
  }
  .card{
    border-radius: 15px;
    width: 400px;
    padding: 2rem 3rem;
    background: #fff;
    z-index: 3;
    h3{
      font-size: 24px;
      color: $crimson;
      margin-bottom: 1em ;
    }
    form input{
      display: block;
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid $scarlet;
      &:last-child {
        color: #FFF;
        background: $scarlet;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        cursor: pointer;
        &:hover {
          background-color: $crimson;
        }
      }
      &:focus{
        outline: 1px solid $crimson;
      }
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;

      li p {
        text-decoration: none;
        color: #333;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        border-bottom: 1px solid transparent;
        cursor: pointer;
        &:hover{
          color: $crimson;
          border-bottom: 1px solid $crimson;
        }
      }
    }
  }

</style>
