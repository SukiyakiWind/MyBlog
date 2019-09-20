<template>
<div class="Immortal">
  <div class="body">
    <h1> 别想这么多，下一个必出,Blyat</h1> <br>
    <form action="">
      <label for="singlePrice"> 单个宝瓶价格 </label>
      <input v-model="singlePrice" type="number"  id="singlePrice" placeholder="输入单个宝瓶价格">
      <label for="allNumber"> 已开宝瓶个数 </label>
      <input v-model="allNumber" type="number" id="allNumber" placeholder="输入你已经开了个数">
      <button v-on:click.prevent="except(allNumber)">Compute</button>
      <button v-on:click.prevent="clear">Clear</button>
    </form>
    <br>
    <hr>
    <div class="preview">
      <div class="left">
        <p>All Number: {{animatedNumber}}</p>
        <p>Single Price: {{animatedPrice}}</p>
        <p>Need Money :{{money}}</p>
        <p>Many: {{many}} </p>
<!--        <p>Math Except : {{mathExpect}}</p>-->
      </div>
      <div class="right">
        <p class="largeTitle">已开瓶子到达数学期望为一的进度</p>
        <d-progress :percentage="exceptPer"  :stroke-width="16" :textInside="true"></d-progress>
      </div>
    </div>

    <div class="probability">
      <div class="num">
        <a>珍藏解封</a>
        <ul>
          <li v-for="num1 in arr1">{{num1}}</li>
        </ul>
      </div>
      <div class="proba">
        <a >珍藏概率</a>
        <ul>
          <li v-for="num2 in arr2">1:{{num2}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import DProgress from './Progress'
    export default {
        name: "Dota2Immortal",
        data(){
          return{
            tweenedPrice:0,
            tweenedNumber:0,
            singlePrice:0,
            allNumber:0,
            result:0,
            money:0,
            mathExpect:0,
            many:0,
            arr1:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27
                  ,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
                51,52,53,54,55,56,57,58],
            arr2:[100000,27380,8614,4021,2303,1486,1037,764,586,464,376,311,261,233,193,168,148,
                  131,117,105,95,86,79,72,66,61,57,53,49,46,43,40,38,35,33,32,30,28,27,26,24,23,22,
                21,20,19,19,18,17,17,16,15,14.3,13.8,13.3,12.8,12.4,11.9]
          }
        },
      components:{
        DProgress,
      },
      methods:{
          compute:function (num) {
            let arr = [1/100000,1/27380,1/8614,1/4021,1/2303,1/1486,1/1037,1/764,1/586,1/464,1/376,1/311
                      ,1/262,1/223,1/193,1/168,1/148,1/131,1/117,1/105,1/95,1/86,1/79,1/72,1/66,1/61,1/57,
                      1/53,1/49,1/46,1/43,1/40,1/38,1/35,1/33,1/32,1/30,1/28,1/27,1/26,1/24,1/23,1/22
                      ,1/21,1/20,1/19,1/19,1/18,1/17,1/17,1/16,1/15,1/14.3,1/13.8,1/13.3,1/12.8,1/12.4,
                      1/11.9];
            // 1-58
            num >= 57? num = 57:num;
            return Math.floor(arr[num] * 100000) / 100000;
            },
          except:function (num) {
            if(this.mathExpect >= 1){
              return true;
            }else{
              this.mathExpect += this.compute(num);
              this.money += parseInt(this.singlePrice);
              this.many++;
              num++;
              this.except(num);
            }
          },

          clear:function () {
            this.singlePrice = '';
            this.allNumber = '';
            this.result = 0;
            this.money = 0;
            this.mathExpect = 0;
            this.many = 0;
          },

          },
      computed:{
        exceptPer() {
          this.result = 0;
          for(let i = 0; i<= this.allNumber ;i++){
            this.result += (1 / this.arr2[i]);
          }
          return Math.floor(this.result * 100);
        },
        animatedNumber:function () {
          return this.tweenedNumber.toFixed(0);
        },
        animatedPrice:function () {
          return this.tweenedPrice.toFixed(0);
        },
      },
      watch:{
          allNumber:function (newValue) {
            TweenLite.to(this.$data, 0.8, { tweenedNumber: newValue });
          },
          singlePrice:function (newValue) {
            TweenLite.to(this.$data, 0.8, { tweenedPrice: newValue });
          },
      },
      mounted() {
        const oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js';
        document.body.appendChild(oScript);
      }
    }
</script>

<style scoped>
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-shadow:4px 4px 4px #040003;
  }
  h1{
    text-shadow:4px 4px 4px #040003;
  }
  p{
    margin-top: 20px;
    font-size: 40px;
  }
  .body{
    margin: 20px auto;
    padding: 20px;
    max-width: 500px;
    color: #Fff;
  }
  label{
    display: block;
    margin-top: 20px ;
    font-size: 20px;
  }
  input{
    display:block;
    width: 100%;
    padding: 8px;
    text-shadow: 0 0 0 #fff;
  }
  button{
    width: 100px;
    margin-top: 20px;
    margin-right: 20px;
    display: inline-block;
    border: 0;
    color: #fff;
    background-color: #a30037;
    padding: 20px;
    border-radius:5px;
    cursor:pointer;
    transition: all 0.5s;
  }
  button:hover{
    background-color: #5EF0FF;
  }
  .largeTitle{
    font-size: 26px;
  }

.Immortal{
  background-image: url("../image/ti9.jpg");
  position: relative;
  background-size: cover;
  background-position:center;
  width: 100%;
  height: 1100px;
  opacity: 0.85;
  overflow: hidden;
}
  .probability{
    height: 340px;
    width: 100%;
    overflow: auto;
    background-color: #000;
    display: flex;
  }
  .num,.proba{
    flex-grow: 1;
  }
  a,li{
    /*text-shadow: 0 0 5px #fff;*/
    font-style: inherit;
    display: block;
    width: 100%;
    /*color: #000;*/
    text-align: center;
  }
</style>
