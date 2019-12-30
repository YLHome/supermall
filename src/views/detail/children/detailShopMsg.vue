<template>
  <div class="detail-msg">
    <div class="detail-title">
      {{ shopMsg.title }}
    </div>
    <div class="detail-price">
      <span class="detail-nprice">
        {{ shopMsg.price.nprice }}
      </span>
      <span class="detail-oprice">
        {{ shopMsg.price.oprice }}
      </span>
      <span class="discountDesc" :style = "{ 'background-color' : shopMsg.itemInfo.discountBgColor}">
        {{ shopMsg.itemInfo.discountDesc }}
      </span>
    </div>
    <div class="info-other">
      <span v-for="(item,index) in shopMsg.columns" :key="index">
        {{ item }}
      </span>
    </div>
    <div class="info-service">
      <div v-for="(item,index) in shopMsg.services" :key="index" class="info-service-item">
        <img :src="item.icon" alt="">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    shopMsg : {
      type : Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.detail-msg{
  padding: 10px 5px 0 5px;
  border-bottom: 8px solid #F2F5F8;
}
.detail-title{
  font-size: 15px;
  color: #222222;
  max-height: 40px;
  overflow: hidden;
}
.detail-price{
  margin-top: 10px;
}
.detail-price .detail-nprice{
  font-size: 20px;
  color: #FF5777
}
.detail-price .detail-oprice{
  position: relative;
  font-size: 13px;
  text-decoration: line-through;
  margin: 0 5px;
  color: #999999
}
.detail-price .detail-oprice::before{
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  margin-top: -2px;
  color: #999999;
  border-bottom: 1px solid;
}
.discountDesc{
  font-size: 12px;
  padding: 0 5px;
  border-radius: 8px;
  margin: 3px 0;
  color: white;
}

.info-other{
  display: flex;
  margin-top: 3px;
  justify-content: space-between;
  border-bottom: 1px solid #F1F1F1;
}

.info-service{
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service-item{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  color: #333333;
}
.info-service img{
  width: 14px;
  height: 14px;
}


</style>