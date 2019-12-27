<template>
  <div class="tab-contrl">
    <div class="item-contrl" 
         v-for="(item , index) in titles" 
         :key="index"
         :class="{ 'active-item-contrl' : curryIndex===index}"
         @click="contrlClick(index)" 
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    titles : {
      type : Array,
      default : []
    }
  },
  data() {
    return {
      curryIndex : 0
    }
  },
  methods : {
    contrlClick(index){
      this.curryIndex = index;
      this.$emit('goodsIndex',index);
    }
  }
}
</script>

<style scoped>
.tab-contrl{
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}
.item-contrl{
  flex: 1;
  
}
.item-contrl span{
  padding: 5px 0;
}
.active-item-contrl span{
  color: rgb(236, 106, 128);
  border-bottom: 1px solid rgb(236, 106, 128);
}
</style>