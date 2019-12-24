<template>
  <div class="swiper" ref="swiper">
    <div class="swiper-wrap" :style="{ width : swiperListWidth + 'px' , transform : 'translateX(' + translateX + 'px)',transitionDuration : transitionDuration + 's'}">
      
      <li v-for="item in banner" :key="item.link" class="swiper-item">
        <a :href=item.link>
          <img :src=item.image>
        </a>
      </li>
      
    </div>
    
  </div>
</template>

<script>

export default {
  props : {
    banner : Array
  },
  data() {
    return {
      swiperWidth : 0,
      sum : 4,
      index : 0,
      transitionDuration : 0.5,
      timer : null,
      banners : this.banner,
    }
  },
  created() {
    this.$nextTick(() => {
      let swiper = this.$refs.swiper;
      this.swiperWidth = swiper.offsetWidth;
      // this.sum = this.banner.length;
      this.automove();
    })
  },
  watch: {
    banner(){
      this.banners = this.banner;    
    }
  },
  
  computed: {
    swiperListWidth(){
      return this.swiperWidth * this.sum;
    },
    translateX(){
      return this.index * this.swiperWidth * -1;
    },
  },
  methods: {
    automove(){
      this.timer = setInterval(() => {
        let index = this.index + 1;
        this.index = index % this.sum;
      },2000)
    }
  },
}
</script>

<style lang="less" scoped>
.swiper{
  padding-top: 44px;
  overflow: hidden;
  .swiper-wrap{
    display: flex;
    position: relative;
  }
  .swiper-item{
    width: 100%;
    a{
      display: inline-block;
      height: 100%;
      width: 100%;
    }
    img{
      width: 100%;
      height: 200px;
    }
  }
}
</style>