<template>
  <div>
<puzzle v-bind="puzzleConfig[level]" @next="handleNext" ></puzzle>
    <hr>
      <h3>我的贪吃蛇</h3>
      <a href="https://sukiyakiwind.github.io/
        Sukiyaki-sGame/Sukiyaki'sGreedSnakev3.0.html" >
        https://sukiyakiwind.github.io/
        Sukiyaki-sGame/Sukiyaki'sGreedSnakev3.0.html</a>
    </div>
</template>

<script>
  import puzzle from './Puzzle'
    export default {
        name: "ShowGame",
      data(){
          return{
            puzzleConfig:[
              { row: 3,col: 3,image:'url("../image/Zard.jpg")'},
              { row: 4,col: 4,},
              { row: 5,col: 5,},
              { row: 6,col: 6,},
              { row: 7,col: 7,},
            ],
            level:0,
          }
      },
      components:{
          puzzle,
      },
      methods:{
        handleNext(){
          this.level++;
          if(this.level === this.puzzleConfig.length){
            const answerFlag = window.confirm('结束了，你还重新来吗？');
            if(answerFlag){
              this.level = 0;
            }
          }
        },
      }
    }
</script>

<style scoped>
p{
  /*background-image: url(".././image/Zard.jpg");*/
}
</style>
