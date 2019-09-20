<template>
  <div class="TestStudy">
    <ul>
      <li v-for="(value,key,index) in obj">{{ value }}-{{ key }}-{{index}}</li>
    </ul>
    <span>{{ arr }}</span>
    <button @click="handclick">aaa</button>
    <select name="" id="">
      <option value="aaa">aaa</option>
    </select>
    <p>aaa</p>
  </div>
</template>

<script>
    export default {
        name: "TestStudy",
        data(){
          return{
            obj:{
              Sukiyaki:'that is cool',
              Robot:'clever',
              TempleAssassin:'pretty',
            },
            arr:[1,2,3,4,5,6,7,8],
          }
        },
      methods:{
          handclick(){
            this.arr = this.arr.filter((num)=>{
              return num % 2 === 0;
            })
          }
      }
    }
</script>

<style scoped>
  .TestStudy{
    margin: 0 auto;
    width: 600px;
  }
</style>
