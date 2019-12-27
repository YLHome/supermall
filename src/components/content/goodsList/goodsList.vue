<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goodList" :key="index" :goodsItem=item></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'
export default {
  props : {
    goodList : {
      type : Array,
    }
  },
  components : {
    goodsListItem
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>