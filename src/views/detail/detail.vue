<template>
  <div id="detail">
    <detail-nav :title = title class="nav"></detail-nav>
    <scroll class="wrapper"> 
      <detail-swiper :topImages = topImages></detail-swiper>
      <detail-shop-msg :shopMsg = shopMsg></detail-shop-msg>
      <detail-shop-info :shopInfo = shopInfo></detail-shop-info>
      <detail-goods-info :goodsInfo = goodsInfo></detail-goods-info>
      <detail-param-info :paramInfo = paramInfo></detail-param-info>
      <detail-content :contentInfo = contentInfo></detail-content>

    </scroll>
    

     
  </div>
</template>

<script>
import detailNav from './children/detailNav'
import detailSwiper from './children/detailSwiper'
import detailShopMsg from './children/detailShopMsg'
import detailShopInfo from "./children/detailShopInfo"
import detailGoodsInfo from './children/detailGoodsInfo'
import detailParamInfo from './children/detailParamInfo'
import detailContent from './children/detailcontent'

import scroll from '../../components/content/scroll/scroll'
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
        columns : [],
        services : []
      },
      shopInfo : {},
      goodsInfo : {},
      paramInfo : {},
      contentInfo : {}

    }
  },
  components : {
    detailNav,
    detailSwiper,
    detailShopMsg,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailContent,
    scroll
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

      // 商品信息
      this.shopMsg.title = result.detailInfo.desc;
      this.shopMsg.price = { oprice : result.itemInfo.oldPrice, nprice : result.itemInfo.price}
      this.shopMsg.itemInfo = result.itemInfo;
      this.shopMsg.columns = result.columns;
      this.shopMsg.services = result.shopInfo.services;
      
      // 商品销售
      this.shopInfo = result.shopInfo;

      // 商品展示
      this.goodsInfo = result.detailInfo;

      // 参数内容
      this.paramInfo = result.itemParams;

      // 单条评论信息
      this.contentInfo = result.rate.list[0]
      })
    }
  },
}
</script>

<style scoped>
.nav{
  position: relative;
  z-index: 100;
}
.wrapper{
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
}
</style>