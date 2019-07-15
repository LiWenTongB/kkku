export default{
	state: {
		cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).cart:[]
  },
  getters:{
  	money(state){
  		var m=0;
  		state.cart.forEach((item)=>{
  			if(item.flag){
  				m+=item.price*item.count;
  			}
  			
  		})
  		return m;
  	},
  	count(state){
  		var m=0;
  		state.cart.forEach((item)=>{
  			if(item.flag){
  				m+=item.count;
  			}
  			
  	})
  		return m;
  },
  selectAll(state){
  	return  state.cart.every((item)=>item.flag)
  }
 },
  mutations: {
	add(state,payload){
		if(state.cart.length===0){
			state.cart.push(payload);
			
		}else{
			var flag=state.cart.some((item)=>{
				if(item.id===payload.id){
					item.count++;
					return true;
				}else{
					return false;
				}
			});
			if(!flag){
				state.cart.push(payload);
			}		
		}	
		localStorage.setItem("cart",JSON.stringify(state));
	},
	inc(state,id){
		state.cart.forEach((item)=>{
			if(item.id===id){
				item.count++;
			}
		})
		localStorage.setItem("cart",JSON.stringify(state));
	},
	dec(state,id){
		state.cart.forEach((item)=>{
			if(item.id===id){
				if(item.count>0){
				item.count--;	
				}
			}
		
	})
		localStorage.setItem("cart",JSON.stringify(state));
 },
 changeFlag(state,id){
 	state.cart.forEach((item)=>{
			if(item.id===id){
				item.flag=!item.flag;
			}
		})
		localStorage.setItem("cart",JSON.stringify(state));
 },
 selectAllNone(state,v){
 	state.cart.forEach((item)=>{
 		item.flag=v;
		})
		localStorage.setItem("cart",JSON.stringify(state));
 }
},
  actions: {

  }
 }