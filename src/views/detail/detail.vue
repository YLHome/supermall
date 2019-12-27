<template>
  <div id="detail">
    <detail-nav :title = title></detail-nav>
  </div>
</template>

<script>
import detailNav from './children/detailNav'
export default {
  data() {
    return {
      title : ['商品','参数','评论','推荐']
    }
  },
  components : {
    detailNav
  }
}
</script>

<style scoped>

</style>