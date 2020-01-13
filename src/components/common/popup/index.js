import popup from './popup'
const obj = {};
console.log('进入popup');
obj.install = function(Vue){
  const popupContrustor = Vue.extend(popup);

  const toast = new popupContrustor();

  toast.$mount(document.createElement('div'));
  document.body.appendChild(toast.$el);
  Vue.prototype.$popup = toast;


}


export default obj