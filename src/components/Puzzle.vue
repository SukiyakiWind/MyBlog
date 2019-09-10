<template>
    <div class="body">
      <div class="main">
        <div class="puzzle"
             :ref="'puzzle'"
             :style="{width: width+'px',height:height + 'px'}">
          <div class="puzzle_block"
               v-for="(item,index) in blockPoints"
               :key="item.id"
               :style="{
      width:blockWidth+'px',
      height:blockHeight+'px',
      left:item.x+'px',
      top:item.y+'px',
      backgroundPosition:`-${currectPoints[index].x}px -${currectPoints[index].y}px`,
      opacity:index === blockPoints.length - 1 && 0.1
      }"
               @click="handleClick"
               :ref="index === blockPoints.length - 1? 'empty':'block'"
               :data-currectX="currectPoints[index].x"
               :data-currectY="currectPoints[index].y"
          >
          </div>
        </div>
        <div class="preview"
             :style="{width: width+'px',height:height + 'px'}">

        </div>
      </div>
      <button @click="tips"> Help </button>
      <p v-if="helpKey === true">法国南部？</p>
      <label v-if="helpKey === true">
        暗号：<input  type="text" v-model="cheatKey">
      </label>
      <button v-if="cheatKey==='fgnb'" @click="cheat">作弊：一键完成</button>
    </div>
</template>

<script>
    export default {
        name: "Puzzle",
      data(){
        return{
          cheatKey:'',
          helpKey:false,
        }
      },
      props:{
          width:{
            type:Number,
            default:500,
          },
          height:{
            type: Number,
            default: 500,
          },
        row:{
            type:Number,
          default:3,
        },
        col:{
            type:Number,
          default:3,
        },
        image:{
            type:String,
        }
      },
      computed:{
        blockWidth(){
            return this.width / this.col;
          },
        blockHeight(){
            return this.height / this.row;
        },
        blockPoints(){
            const points = this.currectPoints;
            const len = points.length;
            const lastEle = points[len - 1];
            const newArr = [...points];
            newArr.length = len - 1;
            newArr.sort(() => Math.random() - 0.5);
            newArr.push(lastEle);
            return newArr;
        },
        currectPoints(){
          const{ row,col,blockWidth,blockHeight } = this;
          let arr = [];
          for(let i = 0;i < row; i++){
            for(let j = 0;j < col;j++){
              arr.push({
                x: j * blockWidth,
                y: i *blockHeight,
                id: new Date().getTime() + Math.random() * 100,
              })
            }
          }
          return arr;
        }
      },
      methods:{
        handleClick (e){
            const blockDom = e.target;
            const emptyDom = this.$refs.empty[0];
            if(!this.isAdjacent(blockDom,emptyDom)){
              return; //不相邻直接return
            }
            const { left,top } = blockDom.style; // 交换位置
            blockDom.style.left = emptyDom.style.left;
            blockDom.style.top = emptyDom.style.top;
            emptyDom.style.left = left;
            emptyDom.style.top = top;
            if(this.checkWin()){
              this.winGame(emptyDom);
            }
        },
        isAdjacent(blockDom,emptyDom){ //判断小方块是否相邻
          const{ left:blockLeft,top:blockTop,width,height } = blockDom.style;
          const{ left:emptyLeft,top:emptyTop } = emptyDom.style;
          const xDis = Math.floor(Math.abs(parseFloat(blockLeft) - parseFloat(emptyLeft)));
          const yDis = Math.floor(Math.abs(parseFloat(blockTop) - parseFloat(emptyTop)));
          return (blockLeft === emptyLeft && yDis === parseInt(height) ||
            blockTop === emptyTop && xDis === parseInt(width));
        },
        cheat(){
          const emptyDom = this.$refs.empty[0];
          const blockDomArr = this.$refs.block;
          let len = blockDomArr.length;
          for(let i = 0;i < len; i++ ){
            blockDomArr[i].style.left = parseInt(blockDomArr[i].dataset.currectx) + 'px';
            blockDomArr[i].style.top = parseInt(blockDomArr[i].dataset.currecty) + 'px';
          }
          emptyDom.style.left = parseInt(emptyDom.dataset.currectx) + 'px';
          emptyDom.style.top = parseInt(emptyDom.dataset.currecty) + 'px';
          this.winGame(emptyDom);
        },
        checkWin(){
          const blockDomArr = this.$refs.block;
           return blockDomArr.every( dom => {
            const {left: blockLeft, top: blockTop} = dom.style;
            const {currectx:currectX,currecty:currectY} = dom.dataset;
             return (parseInt(blockLeft) === parseInt(currectX) && parseInt(blockTop) === parseInt(currectY));
          })
        },
        tips(){
          this.helpKey = !this.helpKey;
        },
        winGame(emptyDom){
          setTimeout(()=>{
            emptyDom.style.opacity = 1;
            setTimeout(()=>{
              alert('Naive! ');
              this.goToNextLevel();
            },300);
          },100);
        },
        goToNextLevel(){
          const answerFlag = window.confirm('continue?');
          if(answerFlag){
            this.$emit('next');
          }
        },
      }
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin:0;
  }
  .body{
    background: #ccc;
  }
  input{
    display: inline-block;
    height: 50px;
  }
  p{
    display: inline-block;
    color: #a30037;
    line-height: 50px;
  }
  button{
    display: inline-block;
    height: 50px;
    margin: 20px 15px;
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
  .main{
    display: flex;
  }
  .puzzle{
    border:2px solid #a30037;
    margin: 10px auto;
    position: relative;
  }
  .preview{
    border:2px solid #a30037;
    margin: 10px auto;
    position: relative;
    background-image: url("../image/Zard2.jpg");
  }
  .puzzle_block{
    background-color: #ccc;
    position: absolute;
    box-sizing:border-box;
    border: 1px solid #fff;
    background-image: url("../image/Zard2.jpg");
    transition:all 0.3s;
    background-size:500px 500px ;
    cursor: pointer;
  }
</style>
