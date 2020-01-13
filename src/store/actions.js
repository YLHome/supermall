import {ADD_COUNT,ADD_CART} from './mutations-type'
const actions = {
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      let oldInfo = context.state.cartList.find(item => item.iid == payload.iid);
      if(oldInfo){  
        resolve('购买数量+1')
        context.commit(ADD_COUNT,oldInfo)
      }else{
        payload.count = 1;
        payload.checked = true;
        resolve('已加入购物车')
        context.commit(ADD_CART,payload)
      }
    })
    
  }
}

export default actions

