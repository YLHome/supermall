<template>
  <div class="content">
    <div class="content-top">
      <span class="comment">用户评论</span>
      <div class="more">
        <span>更多</span>
        <span>&gt;</span>
      </div>
    </div>

    <div class="text">
      <div class="text-top" v-if="contentInfo.user">
        <img :src="contentInfo.user.avatar" alt="">
        <span>{{ contentInfo.user.uname }}</span>
      </div>

      <div class="text-content">
        {{ contentInfo.content }}
      </div>

      <div class="text-footer">
        <span class="text-time">{{ contentInfo.created | showDate}}</span>
        <span class="text-style">{{ contentInfo.style }}</span>
      </div>

      <div class="text-image" v-if="contentInfo.images">
        <div class="text-image-wrap" v-for="(item, index) in contentInfo.images" :key="index">
          <img :src="item" alt="">
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";
export default {
  props : {
    contentInfo : {
      type : Object,
      default(){
        return {}
      }
    }
  },
  filters : {
    showDate : function(value){
      let date = new Date(value*1000);
      return formatDate(date,'yyyy-MM-dd');
    }
  }
}
</script>

<style scoped>
.content{
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.content-top{
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0,0,0,.1);
}

.comment{
  font-size: 15px;
}

.more span{
  margin-right: 5px;
  font-size: 13px;
}


.text-top{
  display: flex;
  padding: 10px 0 5px 0;
}
.text-top img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.text-top span{
  font-size: 15px;
  line-height: 42px;
}

.text-content{
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.text-footer{
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.text-time{
  margin-right: 5px;
}

.text-image{
  display: flex;
  margin-top: 10px;
}
.text-image-wrap img{
  width: 70px;
  height: 70px;
}
</style>