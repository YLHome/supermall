<template>
  <div class="shop-info">
    <div class="info-top">
      <a :href="shopInfo.shopUrl">
        <img :src="shopInfo.shopLogo" alt="">
      </a>
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="info-content">
      <div class="sells">
        <p class="cSells">{{ shopInfo.cSells }}</p>
        <p>总销量</p>
      </div>

      <div class="info-goods">
        <p class="cGoods">{{ shopInfo.cGoods }}</p>
        <p>全部宝贝</p>
      </div>

      <div class="content-right">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td class="right-name">
              {{ item.name }}
            </td>
            <td class="right-score" :class="{ up : item.isBetter}">
              {{ item.score }}
            </td>
            <td >
              <span :class="{ better : item.isBetter }" class="down">
                {{ item.isBetter?'高':'低' }}
              </span>
            </td>
          </tr>
        </table>
        
      </div>
    </div>

    <div class="info-footer">
      <a class="goShop">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props : {
    shopInfo : {
      type : Object,
      default(){
        return {}
      }
    }
  },
  
}
</script>

<style lang="less" scoped>
.shop-info{
  padding: 25px 8px;
  border-bottom: 8px solid #F2F5F8;
  .info-top{
    display: flex;
    align-items: center;
    a{
      display: inline-block;
      img{
        width: 45px;
        height: 45px;
        vertical-align: middle;
      }
    }
    span{
      line-height: 45px;
      margin-left: 10px;
      font-size: 18px;
      height: 100%;
    }
  }
  .info-content{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    align-items: center;
    text-align: center;
    .sells{
      font-size: 12px;
      flex: 1;
      .cSells{
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
    .info-goods{
      flex: 1;
      font-size: 12px;
      .cGoods{
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
    .content-right{
      flex: 2;
      table{
        margin-left: 30px;
        width: 120px;
        td{
          padding: 5px 0;

        }
        .right-score{
          color: green;
        }
        .up{
          color: red;
        }
        .down{
          margin: 0 0 0 5px;
          color: white;
          background-color: green;
        }
        .better{
          background-color: red;
        }
      }
      
    }
  }
  .info-footer{
    margin-top: 10px;
    text-align: center;
    .goShop{
      display: inline-block;
      font-size: 14px;
      width: 150px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #f2f5f8;
      border-radius: 10px;

    }
  }
}
</style>