<template>
  <div class="reg-exp-test">
    <div class="input">
      <label> Input the str:
        <input type="text" v-model="str" placeholder="输入字符串">
      </label>
      <label> Input the regexp
        <input type="text" v-model="regExp" placeholder="输入正则">
      </label>
      <label> Input the replace
        <input type="text" v-model="replace" placeholder="输入代替值">
      </label>
      <button @click="compute">Computed</button>
      <button @click="clear">Clear</button>
      <button @click="replacefun">Replace</button>
    </div>

    <hr>

    <div class="output">
      <h3>Result:</h3>
      <p>Str:{{str}}</p>
      <p>RegExp:{{regExp}}</p>
      <p>Result:{{result}}</p>
      <p>Replace:{{replace}}</p>
      <p>OutputReplace:{{outputReplace}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RegExpTest",
      data(){
          return{
            regExp:'',
            str:'1997-06-25 25+4i 23-2i',
            result:[],
            replace:'',
            outputReplace:'',
          }
      },
      methods:{
          compute(){
            this.result = [];
            this.result = this.str.match(eval(this.regExp));
          },
          clear(){
            this.result = [];
            this.regExp = '';
            this.str = '';
            this.replace = '';
            this.outputReplace = '';
          },
          replacefun(){
            this.outputReplace = '';
            this.outputReplace = this.str.replace(eval(this.regExp),this.replace);

          }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .reg-exp-test{
    background-color: #ccc;
    margin: 20px auto;
  }
  .input{
    margin: 0 auto;
    width: 600px;
    height: 300px;
  }
  .output{
    margin: 0 auto;
    width: 600px;
    height: 400px;
  }
  input{
    display: inline-block;
    height: 30px;
    width: 400px;
    font-size: 24px;
  }
  label{
    display: block;
    margin: 10px auto;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
  }
  button{
    display: inline-block;
    margin: 20px 0;
    border: 0;
    color: #fff;
    padding: 15px;
    background: #a30037;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s;
  }
  button:hover{
    background-color: #5EF0FF;
  }
  p{
    display: block;
    margin: 10px auto;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
  }

</style>
