<template>
	<div id='cart'>
		<!--*********************header********************************-->
		<!--<div class="goback">
			<img src="../../../static/images/12.png" onclick='history.back()' />
		</div>-->
	
		<div id="product">
	<ul>
		<li v-for='(item,index) in goodsArr'>
			<img :src='item.img' alt="">
			<section>
				<!--item代表this.goodArr[0],this.goodArr[1]
				item[0]就代表了this.goodArr[0][0]-->
				<p>{{item.name}}</p>
				<p>
					<span @click='add(index)'></span>
					<input type="" name="" :value="item.value" />
					<span @click='reduce(index)'></span>
					<span class="remove" @click='remove(index)'></span>
				</p>
				<p>单价:¥<span>{{item.price}}</span>元<span>共¥</span>{{item.price * item.value}}<span></span>元</p>
			</section>
		</li>
	</ul>
</div>

<!-- *******************************计算总价************************** -->
<div id="price">
	<p>总价: ¥<span>{{num1}}</span>元</p>
	<p>结算</p>
</div>
	</div>
</template>

<script>
	import Warehouse from '../warehouse/warehouse.vue'
	export default{
		data(){
			return {
				num1 : 0,
//				count : 0,
			}
		},
		mounted(){
			console.log(this.goodsArr)
			console.log("&&&");
			this.sum();
			
		},
		methods:{
			add : function (index) {
				this.goodsArr[index].value += 1;
				this.sum();
			},
			reduce : function (index) {
				this.goodsArr[index].value -= 1;
				if (this.goodsArr[index].value == 0) {
					this.goodsArr[index].value = 1;
					alert("不能再少了");
				}
				this.sum();
			},
			remove : function (index) {
				this.goodsArr.splice(index,1);
				this.sum();
			},
			sum : function () {
				//每次重新计算
				this.num1 = 0;
				for ( let item in this.goodsArr) {
//					console.log((Number(this.goodsArr[item].price)).toFixed(2));
					this.num1 += this.goodsArr[item].value * this.goodsArr[item].price;
				}
//				console.log(this.num1);
			},
		}
	}
</script>

<style>
	.goback{
		width: 10.0rem;
		height: 1.00625rem;
		background: #000;
		position: fixed;
		left: 0;
		top: 0;
		opacity: 0.3;
	}
	.goback img:nth-of-type(1){
		width: 0.346875rem;
		height: 0.346875rem;
		margin-left: 0.5625rem;
		padding-top: 0.5625rem;
	}
	.goback img:nth-of-type(2){
		width: 0.15625rem;
		height: 0.53125rem;
		margin-left: 8.15625rem;
		padding-top: 0.5625rem;
	}
	
	#product{
		width: 10.0rem;
	}
	#product ul li{
		width: 10.0rem;
		height: 3.5625rem;
		display: flex;
		border: 0.015625rem solid #aaaaaa;
	}
	#product ul li img{
		width: 3.80375rem;
		height: 3.5625rem;
		border-radius: 0.046875rem;
	}
	#product ul li section{
		width: 6.2rem;
		height: 3.5625rem;
		display: flex;
		flex-direction: column;
		margin-left: 0.15625rem;
	}
	#product ul li section p{
		width: 5.8rem;
		display: flex;
		color: #aaaaaa;
	}
	#product ul li section p:nth-of-type(1){
		height: 1.325rem;
		font-size: 0.34375rem;
		/*overflow: hidden;*/
	}
	#product ul li section p:nth-of-type(2){
		align-items: center;
		height: 1.0rem;
		padding-top: 0.2rem;
	}
	#product ul li section p:nth-of-type(3){
		height: 1.42185rem;
		text-align: center;
		line-height: 0.7185rem;
		align-items: center;
		font-size: 0.35rem;
		color: #aaaaaa;
		font-weight: bold;
	}
	
	#product ul li section p:nth-of-type(2) span:nth-of-type(1){
		display: inline-block;
		width: 0.8rem;
		height: 0.8rem;
		background: url(../../../static/images/add1_03.png) no-repeat left center;
		background-size: 0.8rem 0.8rem;
		margin-right: 0.09375rem;
	}
	#product ul li section p:nth-of-type(2) input{
		width: 1.5625rem;
		height: 0.66875rem;
		text-align: center;
		margin-top: 0.15625rem;
		line-height: 0.66875rem;
		border: 0.015625rem solid red;
		border-radius: 0.046875rem;
		font-weight: bold;
	}
	#product ul li section p:nth-of-type(2) span:nth-of-type(2){
		display: inline-block;
		width: 0.8rem;
		height: 0.8rem;
		background: url(../../../static/images/16pic_1514572_b_05.png) no-repeat left center;
		background-size: 0.8rem 0.8rem;
		margin-left: 0.15625rem;
	}
	#product ul li section p:nth-of-type(2) span:nth-of-type(3){
		display: inline-block;
		width: 1.2rem;
		height: 1.2rem;
		background: url(../../../static/images/333999.png) no-repeat left center;
		background-size: 0.8rem 0.8rem;
		margin-left: 1rem;
		text-align: center;
		line-height: 0.625rem;
		font-weight: bold;
		color: #fff;
	}
	
	#product ul li section p:nth-of-type(3) span:nth-of-type(1){
		font-size: 0.6125rem;
		color: red;
		font-weight: bold;
	}
	#product ul li section p:nth-of-type(3) span:nth-of-type(2){
		margin-left: 0.46875rem;
	}
	
	#product ul li section p:nth-of-type(3) span:nth-of-type(3){
		font-size: 0.6125rem;
		color: orange;
		font-weight: bold;
	}
	
	
	
	#price{
		width: 10.0rem;
		height: 1.25rem;
		background: orange;
		opacity: 0.5;
		text-align: center;
		line-height: 1.25rem;
		font-size: 0.40625rem;
		display: flex;
	}
	#price p:nth-of-type(1){
		width: 7rem;
		height: 1.25rem;
	}
	#price span{
		font-size: 0.6125rem;
		color: red;
		font-weight: bold;
	}
	#price p:nth-of-type(2){
		width: 3rem;
		height: 1.25rem;
		background: blue;
		color: #fff;
	}
</style>
