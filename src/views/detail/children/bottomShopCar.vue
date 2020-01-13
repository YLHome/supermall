<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon select"></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="addToCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods : {
            addToCart(){
                this.$emit('addToCart');
            }
        }
    }
</script>

<style scoped>
.bottom-bar{
    height: 58px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 102;
    background-color: #ffffff;
}
.bar-item{
    flex: 1;
    display: flex;
}

.bar-left{

}

.bar-item div,.bar-item div{
    flex: 1;
}

.bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service{
    background-position-y: -52px;
}

.bar-left .shop{
    background-position-y: -97px;
}

.bar-left select{
    background-position-y: 2px;
}

.text{
    display: block;
    text-align: center;
    font-size: 13px;
}

.bar-right .cart,.bar-right .buy{
    text-align: center;
    line-height: 58px;
    background-color: #ffe817;
    color: #333333;
}

.bar-right .buy{
    background-color: #f69;
    color: white;
}
</style>