<template>
  <div class="nav-bar">
    <div class="nav-wrap" :style="{ 'background-color' : color}">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    color : {
      type : String,
      default(){
        return 'pink'
      }
    }
  }
}
</script>

<style lang="less">
.nav-wrap{
  display: flex;
  line-height: 44px;
  background-color: pink;
  .left,.right{
    width: 60px;
    height: 44px;
  }
  .center{
    flex: 1;
    text-align: center;
    color: white;
  }
  
}
</style>