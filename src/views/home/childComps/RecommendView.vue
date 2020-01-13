<template>
  <div class="recommend">
    <a href="http://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" @load="recommendLoad">
    </a>
  </div>
</template>

<script>
	export default {
    name: "RecommendView",
    methods: {
      recommendLoad(){
        this.$emit('recommendLoad')
      }
    },
	}
</script>

<style scoped>
  .recommend img {
    width: 100%;
  }
</style>
