<template>
  <div>
    <Swiper ref="swiper" v-if="banner.length">
      <SwiperItem v-for="(item, index) in banner" :key="index" >
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'
export default {
  props : {
    banner : Array
  },
  components : {
    Swiper,
    SwiperItem
  },
  methods: {
		  stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      }
    }
}
</script>

<style>

</style>