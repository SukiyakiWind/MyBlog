<template>
  <div class="body">
    <h2> Sort Animation</h2>
    <div class="input">
      <label> Arr Input
        <input type="text" v-model="arr" placeholder="输入你的数组，用逗号隔开">
      </label>
      <button @click="creat">creat</button>
      <button>sort</button>
    </div>
    <div class="showPage">

    </div>
    <div>
      Preview{{arr}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "SortShow",
      data(){
          return{
            arr:[5,3,4,6,1,7,8],
          }
      },
      methods:{
        Sort:function () {
          console.log('nmsl');
          },
        creat:function () {
          let len = this.arr.length;
          let box = document.querySelector('.showPage');
          for (let i = 0; i < len; i++) {
            let div = document.createElement('div');
            box.appendChild(div);
            div.className = 'child';
            div.innerText = this.arr[i];
            div.style.display = 'inline-block';
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.border = '1px solid #a30037';
            div.style.margin = '5px';
            div.style.lineHeight = '50px';
            div.style.textAlign = 'center';
          }
          console.log(box);
          console.log(box.childNodes[0]);
          return box;
        },
        goDown:function(){

        },
        swap:function (arr,a,b) {
          let temp = arr[a];
          arr[a] = arr[b];
          arr[b] = temp;
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .showPage{
    min-height:200px;
    width: 100%;
  }
  .child{
    border: 1px solid #a30037;
    display: inline-block;
    height: 50px;
    width: 50px;
  }
  input{
    width: 300px;
  }
  button{
    display: inline-block;
    width: 80px;
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
</style>
