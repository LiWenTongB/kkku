import axios from 'axios'
export default{
	state: {
		products:[]
  },
  mutations: {
	changeList(state,payload){
		state.products=payload;
	}
  },
  actions: {
	getList(context){
		axios.get('http://localhost:3000/list').then((res)=>{
			context.commit("changeList",res.data);
		})
	}
  }
}
