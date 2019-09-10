<template>
    <div class="progress">
      <div class="progress-bar" v-if="type === 'line'">
        <div class="progress-bar__outer" :style="{height: strokeWidth + 'px'}">
          <div class="progress-bar__inner" :style="barStyle">
          <div class="progress-bar__inner-Text" v-if="textInside">{{percentage}}%</div>
          </div>
        </div>
      </div>

      <div class="progress-circle" v-else
      :style="{width: width+'px',height: width+ 'px'}">
        <svg viewBox="0 0 100 100">
          <path
            :d="trackPath"
            fill="none"
          :stroke-width="relativeStrokeWidth"
          stroke="#cccccc">
          </path>
          <path
            :d="trackPath"
            fill="none"
            :stroke-width="relativeStrokeWidth"
            :stroke="stroke"
            :style="circlePathStyle"
            stroke-linecap="round"
          ></path>
        </svg>
        <div class="progress__text" :style="{fontsize: progressTextSize + 'px'}" v-if="type !== 'line'">
          {{percentage}}%
        </div>
      </div>
      <div class="progress__text" :style="{fontsize: progressTextSize + 'px'}" v-if="!textInside&&type === 'line'">
        {{percentage}}%
      </div>
    </div>
</template>

<script>
    export default {
        name: "Progress",
      props:{
          strokeWidth:{
            type:Number,
            default:10
          },
        percentage:{
            type:Number,
            required:true,
            default: 50,
          validator: value => value >= 0 && value <= 100,
        },
        status:{
            type:String,
        },
        type:{
            type:String,
            default:'line',
            validator: val => ['circle','line'].includes(val)
        },
        textInside:{
            type:Boolean,
            default:false,
        },
        color:{
            type:String,
        },
        width:{
            type:Number,
          default:126,
        },
      },
      computed: {
        progressTextSize() {
          return 12 + this.strokeWidth * 0.4
        }
        ,
        stroke() {
          let color;
          if(this.color){
            return this.color
          }
          switch (this.status) {
            case 'success':
              color = '#13ce66';
              break;
            case"exception":
              color = '#a30037';
              break;
            default:
              color = '#5ef0ff';
          }
          return color;
        },
        barStyle() {
          return {
            width: this.percentage + '%',
            backgroundColor:this.stroke
          }
        },
        trackPath () {
          const radius = 50 - this.strokeWidth / 2;
          return  `
        M 50 50
        m 0 -${radius}
        a ${radius} ${radius} 0 1 1 0 ${radius * 2}
        a ${radius} ${radius} 0 1 1 0 -${radius * 2}`
        //  画弧   椭圆两个半轴长  旋转角度 大弧\小弧 顺时针\逆时针 终点坐标点x,y
        },
        trackPath2(){
          const radius = 50 - this.relativeStrokeWidth / 2;
          const width = this.relativeStrokeWidth;
          const rootTwo = Math.sqrt(2);
          const x = (radius * rootTwo - radius) * rootTwo / 2,
                y = 2 * radius - x;
          console.log(x,y);
          return `
          M ${x} ${y}
          A ${radius} ${radius} 0 1 1 ${y } ${y + width} `
        },
        relativeStrokeWidth() {
          return this.strokeWidth * 100 / this.width;
        },
        perimeter() {
          const radius = 50 - this.relativeStrokeWidth / 2;
          return 2 * Math.PI * radius;
        },
        circlePathStyle() {
          const perimeter = this.perimeter;
          console.log(perimeter);
          return{
            strokeDasharray:`${perimeter}px,${perimeter}px`,
            strokeDashoffset:( 1 - this.percentage / 100) * perimeter + 'px'
          }
        },
      }
    }
</script>

<style scoped>
  .progress{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom:5px;
  }
  .progress-bar{
    box-sizing:border-box;
    flex-grow: 11;
    border-radius:100px;
  }
  .progress-bar__outer{
    border-radius:100px;
    background-color: #ebeef5;
  }
  .progress-bar__inner{
    height: 100%;
    border-radius:100px;
    background-color: #a30037;
    transition:width 0.6s ease 1s;
    display:flex;
    align-items: center;
    justify-content: flex-end;
  }
  .progress-bar__inner-Text{
    box-sizing: border-box;
    flex-grow: 0;
    font-size:16px;
    padding-right:5px;
    vertical-align: middle;
    color: #fff;
  }
  .progress-circle{
    display: inline-block;
    position: relative;
    float: left;
  }
  .progress-circle .progress__text{
    display: inline-block;
    position: absolute;
    top: 50%;
    transform:translateY(-50%);
    width: 100%;
    text-align: center;
    margin-left: 0;
  }
  .progress__text{
    color: #000;
    flex-grow: 1;
  }

</style>
