<template>
  <div class="shopCar">
    <navbar>
      <div slot="center">购物车({{ cartCount }})</div>
    </navbar>
    <div v-if="carItem">
      <shop-car-item v-for="(item,index) in carItem" :key="index" :car-item = item >

      </shop-car-item>
    </div>

  </div>
</template>

<script>
  import navbar from "components/common/navbar/navbar";
  import shopCarItem from "./children/shopCarItem";
export default {
  components : {
    navbar,
    shopCarItem
  },
  computed : {
    cartCount(){
      return this.$store.getters.carCount
    },
    carItem(){
      return this.$store.getters.carList
    }
  }
}
</script>

<style>

</style>