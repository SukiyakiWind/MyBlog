<template>
    <div>
      <h2>这是一个展示progress 组件的页面啦</h2>
      <p>组件属性 *为必填属性</p>
      <ul>
        <li>1.:percentage=‘number’*</li>
        <li>2 :status='success/exception/normal'</li>
        <li>3 :textInside='true/false'</li>
        <li>4 :type=''line'/'circle' default= 'line''</li>
        <li>5 :color='' default:blue</li>
      </ul>
      <h3>In</h3>
      <d-progress :percentage="10" status="success"></d-progress>
      <d-progress :percentage="40" status="exception"></d-progress>
      <br><br>
      <h3>Out</h3>
      <d-progress :percentage="70" status="success" :textInside="true" :stroke-width="15"></d-progress>
      <d-progress :percentage="50" status="exception" :textInside="true" :stroke-width="15"></d-progress>
      <d-progress :percentage="10" status="" :textInside="true" :stroke-width="15"></d-progress>
      <br>
      <h3>Circle</h3>
      <d-progress :percentage="60" :type="'circle'" :stroke-width="6"></d-progress>
      <d-progress :percentage="50" :type="'circle'" :stroke-width="6" status="success"></d-progress>
      <d-progress :percentage="20" :type="'circle'" :stroke-width="6" status="exception"></d-progress>
    </div>
</template>

<script>
  import DProgress from './Progress'
    export default {
        name: "ShowProgress",
      components:{
        DProgress
      },
    }
</script>

<style scoped>
  p{
    font-size: 24px;
    color: #a30037;
  }
  li{
    color:crimson;
  }
  h2{
    text-align: center;
    color: #a30037;
  }
h3{
  margin-left: 20px;
}
</style>
