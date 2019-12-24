<template>
    <div class="tab-bar-item" @click="changePath(path)">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive : false
    }
  },
  props:{
    path : {
      type : String
    },
    activeColor : {
      type : String,
      default : 'red'
    }
  },
  methods: {
    changePath(path){
      this.$router.push(path);
    }
  }, 
  computed: {
    isActive(){
      // console.log(this.$route.path.indexOf(this.path) != -1);
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle(){
      return this.isActive ? {color : this.activeColor} : {}
    }
  }, 
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  background-color: rgb(14, 13, 13);
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 2px;
}
.active{
  color: red
}
</style>