<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>

import MainTabBar from './components/content/mainTabBar'

export default {
  created() {
    
  },
  data() {
    return {
      
    }
  },
  components : {
    MainTabBar
  }

  
}
</script>
<style lang="less">
@import url('assets/css/common.css');

</style>
