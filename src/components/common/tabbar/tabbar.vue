<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.tab-bar{
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 44px;
  z-index: 101;
}
</style>