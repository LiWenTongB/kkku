import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import cart from './components/cart'
import products from './components/products'
export default new Vuex.Store({
 modules:{
		cart,products
	}
  
})


