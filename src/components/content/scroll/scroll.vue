<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props : {
    probeType : Number,
    pullUpLoad : {
      type : Boolean,
      default(){
        return false
      }
    }
  },
  data() {
    return {
      scroll : null
    }
  },
  mounted() {
    // console.log(this.$refs.wrapper)
    this.scroll = new BScroll(this.$refs.wrapper,{
      click : true,
      probeType : this.probeType,
      pullUpLoad : this.pullUpLoad
    })
    this.scroll.on('scroll',(position) => {
      this.$emit('getScroll',position)
    })

    this.scroll.on('pullingUp',() => {
      this.$emit('upLoad');
      this.scroll.finishPullUp();
    })
  },
  methods: {
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll.refresh()
    },
    scrollToElement(el,time=500){
      this.scroll.scrollToElement(el,time)
    }
  },
}
</script>

<style scoped>
.wrapper{
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
}
</style>