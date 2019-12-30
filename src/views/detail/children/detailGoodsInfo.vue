<template>
  <div class="goods-info">
    <div class="desc">
      <div class="start"></div>
      <div class="content">
        {{ goodsInfo.desc }}
      </div>
      <div class="end"></div>
    </div>

    <div class="sell-show" v-if="goodsInfo.desc">
      <div class="title">{{ goodsInfo.detailImage[0].key }}</div>
      <div class="image-show" v-for="(item,index) in goodsInfo.detailImage[0].list" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    goodsInfo : {
      type : Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-info{
  padding: 20px 0; 
  border-bottom: 5px solid #f2f5f8;
}
.desc{
  padding: 0 15px;
  font-size: 14px;
  text-indent: 2em;
}
.content{
  padding: 15px 0;
}
.start,.end{
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.start::before,.end::after{
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: black;
  top: -5px;
}
.end{
  float: right;
}
.end::after{
  right: 0;
}
.title{
  margin: 10px 0 10px 15px;
  font-size: 15px;
  color: #333333;
}
.image-show img{
  width: 100%;
}
</style>