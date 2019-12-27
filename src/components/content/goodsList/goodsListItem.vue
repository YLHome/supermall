<template>
  <div class="goods-item">
    <div class="item-img">
      <img :src="goodsItem.show.img">
    </div>
    
    <div class="title-hot">
      <p class="title">{{ goodsItem.title }}</p>
      <div class="price-cfav">
        <span class="price">{{ goodsItem.price }}</span>
        <span class="cfav">{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import goodsListItem from './goodsList'
export default {
  props : {
    goodsItem : {
      type : Object
    }
    
  }
}
</script>

<style scoped lang="less">
.goods-item{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 48%;
  padding: 2px;
  .item-img{
    flex: 1;
    img{
      width: 100%;
      height: 100%;
    }
    // flex: 1;
  }
  .title-hot{
    margin: 5px 0;
    // position: absolute;
    bottom: 0;
    text-align: center;
    .title{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .price-cfav{
      position: relative;
      .price{
        color: rgb(241, 80, 80);
        margin-right: 20px;
      }

      .cfav{
        position: relative;
      }
      .cfav::before{
        content: '';
        width: 14px;
        height: 14px;
        position: absolute;
        left: -15px;
        bottom: 2px;
        background: url('~assets/img/common/collect.svg');
        background-size: 14px 14px;
      }
    }
  }
}
</style>