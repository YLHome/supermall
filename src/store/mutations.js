import {ADD_CART,ADD_COUNT} from './mutations-type'
const mutations = {
  [ADD_CART](state, payload) {
    state.cartList.push(payload);
  },
  [ADD_COUNT](state, payload){
    payload.count++
  }
}

export default mutations

