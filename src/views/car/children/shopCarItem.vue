<template>
    <div class="car-item">
        <div class="check">
            <img src="~assets/img/cart/tick.svg" alt="">
        </div>

        <div class="item-image">
            <img :src="carItem.imageURL" alt="">
        </div>
        <div class="item-content">
            <div class="title">{{ carItem.title }}</div>
            <div class="desc">商品描述 : {{ carItem.desc }}</div>
            <div class="price-count">
                <span class="price">¥{{ carItem.newPrice }}</span>
                <span class="count">X{{ carItem.count }}</span>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "shopCarItem",
    props : {
      carItem : {
        type : Object,
        default(){
          return {}
        }

      }
    }
  }
</script>

<style scoped>
.car-item{
    width: 100%;
    display: flex;
    padding: 5px;
    overflow: hidden;

}
.check img{
    background-color: #eb4868;
    border-radius: 50%;
    position: relative;
    top: 50%;
    margin-top: -50%;
}

.check{
    width: 14%;
}

.item-image{
    padding: 5px;
}
.item-image img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}

.item-content{
    font-size: 17px;
    padding: 5px 10px;
    color: #333;
    position: relative;
    overflow: hidden;
}

.title,.desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.desc{
    font-size: 14px;
    margin-top: 15px;
    color: #666;
}

.price-count{
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
}

.price{
    float: left;
    color: orangered;
}

.count{
    float: right;
}



</style>