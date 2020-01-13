<template>
  <div class="popup" v-show="isShow">
    <div class="content">{{msg}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg : '',
      isShow : false
    }
  },
  methods: {
    show(msg,delay){
      this.isShow = true;
      this.msg = msg;

      setTimeout(() => {
        this.isShow = false;
        this.msg = '';
      }, delay);
    }
  },
}
</script>

<style scoped>
.popup{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, .6);
  color: white;
  z-index: 999;
}
.content{
  padding: 10px;
}
</style>