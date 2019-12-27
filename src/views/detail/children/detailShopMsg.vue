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
  padding: 10px 5px 0 3px;
}
.detail-title{
  font-size: 15px;
  color: #222222;
  max-height: 40px;
  overflow: hidden;
  
}
.detail-price .detail-nprice{
  font-size: 16px;
  color: #FF5777
}
.detail-price .detail-oprice{
  position: relative;
  font-size: 13px;
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
</style>