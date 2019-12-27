<template>
  <Swiper v-if="topImages.length" class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key = index class="detail-item">
      <img :src="item" alt="">
    </swiper-item>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  props : {
    topImages : {
      type : Array,
      default(){
        return []
      }
    }
  },
  components : {
    Swiper,
    SwiperItem
  }
}
</script>

<style>
.detail-item{
  height: 45vh;
}

</style>