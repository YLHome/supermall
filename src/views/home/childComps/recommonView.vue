<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" 
         :key="index" 
         class="recommend-item"
         
    > 
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    recommend : Array
  }
}
</script>

<style lang="less" scoped>
.recommend{
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
  .recommend-item{
    flex: 1;
    a{
      display: inline-block;
      width: 100%;
      height: 100%;
      img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>