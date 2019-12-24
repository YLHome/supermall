<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper :banner = banner></swiper>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar'
import swiper from '@/components/common/swiper'
import axios from 'axios'
axios.defaults.baseURL = 'http://123.207.32.32:8000/api/v2'
export default {
  data() {
    return {
      banner : [],

    }
  },
  components : {
    'nav-bar' : navbar,
    swiper
  },
  created() {
    axios.get('/home/multidata').then((res) => {
      if(res.status == 200){
        this.banner = res.data.data.banner.list;
      }
      // console.log(res);
      
    })
  },
}
</script>

<style lang="less" scoped>
  .nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>