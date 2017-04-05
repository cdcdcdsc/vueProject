<template>
	<div id='warehouse'>
		<!--*******************header**********************-->
		<div class="title clear">
			<h1>超市</h1>
			<a href="###">
				<img src="../../../static/images/1_03.png" alt="" />
			</a>
		</div>
		<!--**************************分类****************************-->
		<div class="main">
			<div class="mainLeft">
				<ul>
					<li v-for='item in classify' @click='changeShopping(item)'>{{ item }}</li>
				</ul>
			</div>
			<div class="mainRight">
				<div class="mainRightTop">
					<ul>
						<li>全部分类<span></span></li>
						<li>综合排序<span></span></li>
					</ul>
				</div>
				<div class="mainRightBottom">
					<ul>
						<li v-for='(item,index) in pages' @click="cart(index)">
							<!--<router-link to='/goods'>-->
								<img :src="item.img" v-lazy='item.img' />
								<section>
									<p>{{ item.name }}</p>
									<p><span>精选</span></p>
									<p>{{ item.specifics }}</p>
									<p><span>{{ item.price }}</span><span>{{ item.market_price }}</span></p>
								</section>
							<!--</router-link>-->
						</li>
					</ul>
					<!--<span class="count1">{{count1}}</span>-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//	import Goods from '../goods/goods.vue'
	export default{
//		props :['flag'],
		data () {
			return {
				classify :['热销榜','天天特价','优选水果','牛奶面包','热销榜','天天特价','优选水果','牛奶面包','热销榜','天天特价','优选水果','牛奶面包'],
				pages : [],
				good : [],
				count1 : 0,
			}
		},
		methods : {
			datas: function(item) {
				item = item || '热销榜';
				this.$http.get('http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=' + item).then((res) => {
					
					this.pages = res.body.data;
					console.log(this.pages);
//					return this.pages;
				})
			},
			changeShopping: function (item) {
				this.datas(item);
			},
			cart: function (index) {
//				console.log(this.count1);
//				this.num += 1;
				for (let item in this.goodsArr) {
					console.log(this.goodsArr[item].name)
					if (this.goodsArr[item].name == this.pages[index].name) {
						this.goodsArr[item].value += 1;
						return;
					}
				}
				this.pages[index].value = 1;
				this.goodsArr.push(this.pages[index]);
//				this.count1 ++ ;
				console.log(this.goodsArr);
				//当前所点击的li的数据
//				console.log(this.count1);
			},

		},
		mounted() {
			this.datas();
//			console.log(this.num);
		}
		
		
		
	}
</script>

<style>
	/****************************header*********************************/
	#warehouse{
		background: #f7f7f7;
	}
	/************title*****************/
	#warehouse .title{
		width: 10rem;
		height: 1.625rem;
		font-size: 0.5625rem;
		color: #787878;
		font-weight: bold;
		background: #fff;
		position: fixed;
		left: 0;
		top: 0;
	}
	#warehouse .title h1{
		width: 8.96875rem;
		height: 1.1875rem;
		padding-left: 3.25rem;
		float: left;
	}
	#warehouse .title a{
		display: block;
		width: 0.625rem;
		height: 0.625rem;
		float: left;
		padding-top: 0.625rem;
	}
	#warehouse .title a img{
		width: 0.625rem;
		height: 0.625rem;
	}
	/*****************************分类******************************/
	#warehouse .main{
		margin-top: 1.625rem;
		width: 10rem;
		height: 14.421875rem;
		display: flex;
	}
	#warehouse .main .mainLeft{
		width: 2.40625rem;
		height: 13.421875rem;
		overflow: hidden;
		overflow-y: scroll;
	}
	#warehouse .main .mainLeft ul li{
		width: 2.40625rem;
		height: 1.34375rem;
		border-bottom: 0.03125rem solid #ccc;
		font-size: 0.3125rem;
		color: #74726c;
		text-align: center;
		line-height: 1.34375rem;
	}
	#warehouse .main .mainLeft ul li:hover{
		background: url('../../../static/images/123.png') no-repeat left center;
	}
	#warehouse .main .mainRight{
		width: 7.5rem;
	}
	#warehouse .main .mainRightTop{
		width: 7.5rem;
		height: 1.25rem;
		border-bottom: 1px solid #dbdbdb;
	}
	#warehouse .main .mainRightTop ul li{
		float: left;
		width: 3.75rem;
		text-align: center;
		margin-top: 0.3125rem;
		color: #7f7f7f;
	}
	#warehouse .main .mainRightTop ul li span{
		margin-left: 0.15625rem;
		display: inline-block;
		width: 0.3125rem;
		height: 0.21875rem;
		background: url(../../../static/images/18_03.png) no-repeat left center;
		background-size: 0.3125rem 0.21875rem;
	}
	#warehouse .main .mainRightBottom{
		width: 7.5rem;
		height: 11.421875rem;
		overflow: hidden;
		overflow-y: scroll;
	}
	#warehouse .main .mainRightBottom ul li{
		padding-top: 0.3125rem;
		width: 7.5rem;
		height: 3.28125rem;
		border-top: 0.03125rem solid #aaa;
		border-bottom: 0.03125rem solid #aaa;
		display: flex;
		
	}
	/*#warehouse .main .mainRightBottom ul li a{
		display: block;
		display: flex;
	}*/
	
	#warehouse .main .mainRightBottom ul li img{
		width: 2.4375rem;
		height: 2.5625rem;
		margin-left: 0.75rem;
		margin-right: 0.75rem;
	}
	#warehouse .main .mainRightBottom ul li section{
		width: 5rem;
	}
	#warehouse .main .mainRightBottom ul li section p:nth-of-type(1){
		height: 0.5625rem;
	}
	#warehouse .main .mainRightBottom ul li section p:nth-of-type(2){
		height: 0.5625rem;
	}
	#warehouse .main .mainRightBottom ul li section p:nth-of-type(3){
		height: 0.5625rem;
	}
	#warehouse .main .mainRightBottom ul li section p:nth-of-type(4) span:nth-of-type(2){
		text-decoration: line-through;
		margin-left: 0.3125rem;
	}
	/*#warehouse .main .mainRightBottom .count1{
		display: block;
		width:0.625rem;
		height: 0.625rem;
		background: yellowgreen;
		border-radius: 50%;
		position: absolute;
		left: 7.075rem;
		top: 15.8125rem;
		opacity: 0.6;
		text-align:center;
		line-height:0.625rem;
		color: red;
		font-weight: bold;
	}*/
	
	
</style>