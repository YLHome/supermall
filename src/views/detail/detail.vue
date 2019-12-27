<template>
  <div id="detail">
    <detail-nav :title = title></detail-nav>

    <detail-swiper :topImages = topImages></detail-swiper>
    <detail-shop-msg :shopMsg = shopMsg></detail-shop-msg>

  </div>
</template>

<script>
import detailNav from './children/detailNav'
import detailSwiper from './children/detailSwiper'
import detailShopMsg from './children/detailShopMsg'
import Axios from 'axios'
export default {
  data() {
    return {
      title : ['商品','参数','评论','推荐'],
      topImages : [],
      shopMsg : {
        title : String,
        price : {oprice : Number,nprice : Number},
        itemInfo : Object,
      }
    }
  },
  components : {
    detailNav,
    detailSwiper,
    detailShopMsg
  },
  created() {
    // console.log(this.$route.params.iid);
    this.getDetail();
  },
  mounted() {
    
    
  },
  methods: {
    getDetail(){
      Axios.get('/detail',{
      params : {
        iid : this.$route.params.iid
      }
    }).then((res) => {
      console.log(res);
      const result = res.data.result
      this.topImages = result.itemInfo.topImages;
      // console.log(this.topImages);

      this.shopMsg.title = result.detailInfo.desc;
      this.shopMsg.price = { oprice : result.itemInfo.oldPrice, nprice : result.itemInfo.price}
      this.shopMsg.itemInfo = result.itemInfo;
       
      console.log();
      
    })
    }
  },
}
</script>

<style scoped>

</style>