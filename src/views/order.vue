<template>
  <div class="total">
  	<h2>其他</h2>
  	<h1>我的订单</h1>
  	<div>
    		<input type="checkbox" v-model="select"/>
	    	<ul>
	    		<li v-for="item in cart.cart" class="row">
	    			<p><input type="checkbox" :checked="item.flag" @change="changeFlag(item.id)"/></p>
	    			 <img :src="item.url" width="100"/>
	    			 <div class="right">
		    			 	<h3>{{item.name}}</h3>
		    			 	<p>{{item.desc}}</p>
		    			 	<p>单价：{{item.price}}元</p>
		    			 	<button @click="dec(item.id)" class="btn1">-</button>
		    			 	{{item.count}}		    			 	
		    			 	<button @click="inc(item.id)" class="btn1">+</button>
	    			 </div>
	    		</li>
	    	</ul>
	    	<div>总数量：{{count}} &nbsp;&nbsp;&nbsp;&nbsp;应付{{money}}元</div>
	    	
    </div>
    <button class="btn">去付款</button>
  </div>
</template>
<script type="text/javascript">
	import {mapState,mapMutations,mapGetters} from 'vuex'
	export default{
		computed:{
			...mapState(["cart","cart"]),
			...mapGetters(['money','count','selectAll']),
			select:{
				get(){
					return this.selectAll;
				},
				set(v){
					return this.selectAllNone(v);
				}
			}
		}, 
		methods:{
			...mapMutations(['add','inc','dec','changeFlag','selectAllNone'])
		}
	}
</script>
<style>
	h2{
		text-align: right;
		font-size: 20px;
		font-weight: 500;
		color: #0089dc;
	}
	h1{
		font-size: 30px;
		font-weight: 600;
		color: #0089dc;
		height: 50px;
		border-bottom: 1px solid #0089dc;
	}
	.row{
		display: flex;
		border-bottom: 1px solid #0089DC;
	}
	.row img{
		margin: 20px;
	}
	.right{
		margin-left: 10px;
		margin-top: 20px;
	}
	.btn{
		background: #0089DC;
		float: right;
		border: none;
		color: #fff;
		width: 100px;
		height: 30px;
		font-size: 20px;
		outline: none;
	}
	.btn1{
		background: #0089DC;
		outline: none;
		color: #fff;
		border: none;
		font-size: 16px;
		text-align: center;
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
	.total{
		margin-bottom: 100px;
		}
</style>                                                                     