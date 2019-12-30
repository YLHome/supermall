<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-contrl :titles = "['流行','新款','精品']" 
                  class="tab-contrl"
                  @goodsIndex = goodsIndex
                  ref="tabContrl1"
                  v-show="isShowTab"
                  
    ></tab-contrl>

    <scroll ref="scroll" 
            :probeType = '3' 
            :pullUpLoad = 'true' 
            @getScroll = getScroll
            @upLoad = upLoad
            class="wrapper"
    >
      <home-swiper :banner = banner ref="hSwiper" @swiperLoad = getTabHeight></home-swiper>
      <recommend :recommend = recommend></recommend>
      <feature-view></feature-view>
      <tab-contrl :titles = "['流行','新款','精品']" 
                  class="tab-contrl"
                  @goodsIndex = goodsIndex
                  ref="tabContrl2"
      ></tab-contrl>
      <good-list :goodList = activeGoodsList></good-list>
    </scroll>  

    <back-top @click.native="backTop" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import navBar from '@/components/common/navbar/navbar';
import homeSwiper from './childComps/swiperView';
import recommend from './childComps/recommonView';
import featureView from './childComps/featureView';
import tabContrl from 'components/content/tabContrl';
import goodList from 'components/content/goodsList/goodsList'

import backTop from 'components/content/backTop/backTop'

import scroll from 'components/content/scroll/scroll'
import axios from 'axios'
axios.defaults.baseURL = 'http://106.54.54.237:8000/api/w1'
// baseURL = "http://123.207.32.32:8000/api/w1"
// baseURL = "http://106.54.54.237:8000/api/w1"
export default {
  data() {
    return {
      banner : [],
      recommend : [],
      goods : {
        'pop' : { page : 0, list : []},
        'new' : { page : 0, list : []},
        'sell' : { page : 0, list : []}
      },
      currentType : 'pop',
      isShowBack : false,
      backTopHeight : 0,
      isShowTab : false,
      
    }
  },


  components : {
    navBar,
    homeSwiper,
    recommend,
    featureView,
    tabContrl,
    goodList,

    backTop,
    scroll
  },
  created() {
    //获取首页数据
    this.getHome();
    //获取商品数据
    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell');
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh);
    this.$bus.$on('imgLoad',() => {
      refresh();
    })
  },


  methods : {
    /**
     * 监听事件的方法
     * 
    */
    // 获取流行，新品，精选三者其中一种的类型
    goodsIndex(index){
      this.$refs.tabContrl1.curryIndex = index;
      this.$refs.tabContrl2.curryIndex = index;
      // console.log(this.$refs.tabContrl2.$el);
      
      this.$refs.scroll.scrollToElement(this.$refs.tabContrl2.$el);
      // console.log(index);
      switch(index){
        case 0 : return this.currentType = 'pop'
        break;
        case 1 : return this.currentType = 'new'
        break;
        case 2 : return this.currentType = 'sell'
        break;
      }
      
    },
    // 回到顶部
    backTop(){
      this.$refs.scroll.scrollTo(0,0)
    },

    // 滚动使backTop显示与隐藏
    getScroll(position){
      this.isShowBack = (-position.y) > 1000
      this.isShowTab = (-position.y) > this.backTopHeight
    },
    // 上来加载更多
    upLoad(){
      this.getGoods(this.currentType);
    },
    // 防抖
    debounce(func,delay){
      let timer = null;
      return function(...args) { 
          if(timer) clearTimeout(timer);
          timer = setTimeout(() => {
            // console.log(1);
            func.apply(this,args);
          }, delay);
      }
    },

    getTabHeight(){
      this.backTopHeight = this.$refs.tabContrl2.$el.offsetTop;
    },

    /**
     * 获取数据的方法
     * */ 
    // 获取首页信息
    getHome(){
      axios.get('/home/multidata').then((res) => {
        if(res.status == 200){
          this.banner = res.data.data.banner.list;
          this.recommend = res.data.data.recommend.list;
        }    
      })
    },

    // 获取首页商品信息
    getGoods(type){
      const page = this.goods[type].page + 1;
      
      axios.get('/home/data',{
        params : {
          type : type,
          page : page
        }
      }).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        // console.log(this.goods[type]);
      })
    }
  },

  computed: {
    // 动态传递给子组价数据
    activeGoodsList(){
      // console.log(this.currentType);
      return this.goods[this.currentType].list
    }
  },

  activated: function () {
    this.$refs.hSwiper.startTimer()
  },
  deactivated: function () {
    this.$refs.hSwiper.stopTimer()
  },
}
</script>

<style lang="less" scoped>
  // .nav-bar{
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   z-index: 100;
  // }
  .nav-bar{
    position: relative;
    z-index: 100;
  }
  .content{
    padding-top: 44px;
    
  }
  .tab-contrl{
    position: sticky;
    top: 44px;
    z-index: 99;
  }
  .wrapper{
    position: absolute;
    top: 44px;
    bottom: 44px;
    left: 0;
    right: 0;
  }
  
</style>