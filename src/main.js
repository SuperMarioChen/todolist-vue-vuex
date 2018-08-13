// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/css/base.css'
import './assets/css/index.css'
import Vuex from 'vuex'
Vue.use(Vuex)
let list=[
  {
    id:123,
    title:'woshi',
    checked:true
  },
  {
    id:456,
    title:'dage',
    checked:true
  }

]
Vue.config.productionTip = false
let store=new Vuex.Store({
  state:{
    hash:'all',
    list:list
  },
  mutations:{
    addtodox(state,plaload){
      state.list.push(plaload)
      console.log(1)
    },
    updatacheckedall(state,plaload){
      state.list.forEach(item => item.checked = plaload.checked)
      
    },
    updataonechecked(state,plaload){
      let item=state.list.find((item)=>item.id===plaload.id)
      item.checked=plaload.checked
    },
    delonex(state,plaload){
      let index=state.list.findIndex(item=>item.id===plaload.id)
      state.list.splice(index,1)
    },
    xiugaip(state,plaload){
      console.log(plaload)
      let item=state.list.find(item=>item.id===plaload.id)
      item.title=plaload.title
    },
    hashchanged(state,plaload){
      state.hash=plaload.hash
    }
  },
  watch:{
    list:{
        handler(){
            console.log('list')
            //localStorage.setItem('miaov-08-06',JSON.stringify(this.list))
        },
        deep: true
    }
},
  getters:{
    ischeckedall(state){
      return state.list.every((item)=>item.checked)
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store:store,
  template: '<App/>'
})
