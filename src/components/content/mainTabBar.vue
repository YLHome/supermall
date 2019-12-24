<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img src="@/image/tabicon/home.svg" slot="item-icon">
        <img src="@/image/tabicon/home_active.svg" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img src="@/image/tabicon/category.svg" slot="item-icon">
        <img src="@/image/tabicon/category_active.svg" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path = '/car'>
        <img src="@/image/tabicon/car.svg" slot="item-icon">
        <img src="@/image/tabicon/car_active.svg" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path = '/profile'>
        <img src="@/image/tabicon/profile.svg" alt="home" slot="item-icon">
        <img src="@/image/tabicon/profile_active.svg" alt="home" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabbar from 'components/common/tabbar'
import tabbaritem from 'components/common/tabbaritem'
export default {
  components : {
    'tab-bar' : tabbar,
    'tab-bar-item' : tabbaritem
  }
}
</script>

<style>

</style>