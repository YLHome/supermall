<template>
  <div>
    <navbar color = '#fff'>
      <div slot="left" class="left" @click="back">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="center">
        <span v-for="(item,index) in title" 
              :key="item" 
              :class="{active : currentIndex == index}"
              @click="changeIndex(index)"
        >
          {{ item }}
        </span>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
export default {
  props : {
    title : {
      type : Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex : 0,
    }
  },
  components : {
    navbar
  },
  methods: {
    back(){
      this.$router.go(-1);  
    },
    changeIndex(index){
      this.currentIndex = index;
    }
  },
}
</script>

<style scoped>
.left{
  text-align: center;
}
.left img{
  vertical-align: middle;
}
.center{
  color: #808080;
  display: flex;
}
.center span{
  flex: 1;
}
.active{
  color: red;
}
</style>