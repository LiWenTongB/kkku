<template>
	<div class="total">
    	<ul>
    		<li v-for="item in products.products" class="row">
    			 <img :src="item.url"  width="100"/>
    			 <div class="right">
    			 	<h3>{{item.name}}</h3>
    			 	<p>{{item.desc}}</p>
    			 	<p>单价：{{item.price}}元</p>
    			 	<button @click="add({...item,count:1,flag:true})" class="button">添加到订单</button>
    			 </div>
    		</li>
    	</ul>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'

export default {
	created(){
		this.getList();
	},
	computed:{
		...mapState(["products","products"])
	},
	methods:{
		...mapActions(["getList"]),
		...mapMutations(["add"])
	}
}
</script>
<style type="text/css">
	.row{
		display: flex;
	}
	.row img{
		margin: 20px;
	}
	.right{
		margin-left: 10px;
		margin-top: 20px;
	}
	.button{
		background: #0089DC;
		border: none;
		color: #fff;
		width: 100px;
		height: 30px;
		outline: none;
		margin-top: 18px;
	}
</style>