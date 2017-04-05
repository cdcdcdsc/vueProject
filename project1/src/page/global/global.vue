<template>
	<div id='global'>
		<!--**********************header**********************-->
		<div class="title clear">
			<h1>全球购</h1>
			<a href="###">
				<img src="../../../static/images/1_03.png" alt="" />
			</a>
		</div>
		<!--********************轮播图*******************-->
		<div class="swiper-container">
			<div class="swiper-wrapper">
		        <div class="swiper-slide" v-for='item in images'><img :src="item.url" v-lazy="item.url" alt=""></div>
   			</div>
   			<div class="swiper-pagination"></div>
		</div>
		<!--***********************nav*********************-->
		<div class="nav clear">
			<section v-for='item in navs'>
				<a href=""><img :src="item.url" v-lazy="item.url" alt="" /></a>
			</section>
		</div>
		<!--*****************************health************************-->
		<div class="health">
			<section v-for='item in healths'>
				<a href=""><img :src="item.url" v-lazy="item.url" alt="" /></a>
			</section>
		</div>
		<!--****************************icons***************************-->
		<div class="icons clear">
			<section v-for='item in icons'>
				<a href=""><img :src="item.url"  v-lazy="item.url" alt="" /></a>
			</section>
		</div>
		<!--******************************banner********************************-->
		<div class="banner">
			<section v-for="(item,index) in banners">
					<img :src="item.url" v-lazy="item.url" alt="" />
					<ul>
						<li v-for='(itemList,index) in item.datas' @click='change(index)'>
							<!--<a href="">-->
								<img :src="itemList.photo" v-lazy="itemList.photo" alt="" ref='img'/>
								<p ref='p1'><span>{{itemList.nowPrice}}</span><span>{{itemList.oldPrice}}</span></p>
								<p ref='p2'>{{itemList.describe}}</p>
							<!--</a>-->
						</li>
					</ul>
			</section>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../../static/swiper-3.3.1.min.js'
   	require('../../../static/swiper-3.3.1.min.css')
   	
	export default{
		data() {
			return {
				images:[],
				navs : [],
				healths : [],
				icons:[],
				banners:[],
			}
		},
		methods : {
			//请求轮播图数据
			datas () {
				this.$http.get("../../../static/data/zhifacang.json").then((res) => {
					this.images = res.body.imgs;
//					console.log(res.body.imgs);
					return this.images;
				});
			},
			change(index) {
				let arr ={};
				let one = this.$refs.img[index].src;
				let two = Number(this.$refs.p1[index].childNodes[0].innerHTML.substring(1));
				let three = this.$refs.p2[index].innerHTML;
				arr.img = one;
				arr.price = two;
				arr.name = three;
				for (let item in this.goodsArr) {
					console.log(this.goodsArr[item].name)
					if (this.goodsArr[item].name == arr.name) {
						this.goodsArr[item].value += 1;
						return;
					}
				}
				arr.value = 1;
//				console.log(arr);
				this.goodsArr.push(arr);
			}
		},
		mounted() {
			this.datas();
			this.$http.get("../../../static/data/globals.json").then((res) => {
				console.log(res);
				console.log(res.body.images1);
				this.navs = res.body.images1;
				this.healths = res.body.images2;
				this.icons = res.body.icons;
				this.banners = res.body.goods;
			})
			this.$http.get("../../../static/data/aixianfeng.json").then((res) => {
				console.log(res);
			})
		},
		updated(){
			let mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				autoplay: 1000,
				pagination: '.swiper-pagination',
			});
		}
		
	}
</script>

<style>
	/***********************header***********************/
	#global{
		background: #f7f7f7;
	}
	/************title*****************/
	#global .title{
		width: 10rem;
		height: 1.625rem;
		font-size: 0.5625rem;
		color: #787878;
		font-weight: bold;
		background: #fff;
	}
	#global .title h1{
		width: 8.96875rem;
		height: 1.1875rem;
		padding-left: 3.25rem;
		float: left;
	}
	#global .title a{
		display: block;
		width: 0.625rem;
		height: 0.625rem;
		float: left;
		padding-top: 0.625rem;
	}
	#global .title a img{
		width: 0.625rem;
		height: 0.625rem;
	}
	/**************************轮播图****************************/
	.swiper-container{
		width: 10rem;
		height: 3.75rem;
		background: #fff;
	}
	.swiper-container img{
		width: 10rem;
		height: 3.75rem;	
	}
	/***********************nav*************************/
	#global .nav{
		width: 10rem;
		height: 4.84375rem;
		background: #fff;
	}
	#global .nav section{
		width: 5rem;
		height: 2.325rem;
		float: left;
		margin-bottom: 0.3125rem;
	}
	#global .nav section a{
		display: block;
	}
	#global .nav section img{
		width: 5rem;
		height: 2.325rem;
	}
	/***************************health*************************/
	.health{
		width: 10rem;
		height: 5.9375rem;
		background: #ccc;
		display: flex;
		margin-bottom: 0.3125rem;
	}
	.health section{
		width: 4.9375rem;
		height: 5.9375rem;
	}
	.health section a{
		display: block;
	}
	.health section:nth-of-type(1){
		border-right: 0.03125rem solid #aaa;
	}
	.health section img{
		width: 4.9375rem;
		height: 5.9375rem;
	}
	/***************************icons***************************/
	.icons{
		width: 10rem;
		height: 4.21875rem;
	}
	.icons section{
		width: 2.5rem;
		height: 1.96875rem;
		float: left;
	}
	.icons section a{
		display: block;
	}
	.icons section a img{
		width: 2.5rem;
		height: 1.96875rem;
	}
	/********************************banner*********************************/
	.banner{
		background: #fff;
	}
	.banner section{
		height: 9.75rem;
	}
	.banner section a{
		display: block;
	}
	.banner section img{
		width: 10rem;
		height: 4.78125rem;
	}
	.banner section ul{
		height: 4.9375rem;
		overflow: hidden;
		display: flex;
		overflow-x: auto;
	}
	.banner section ul li{
		width: 3.21875rem;
		height: 4.9375rem;
	}
	.banner section ul li img{
		width: 3.1875rem;
		height: 2.75rem;
	}
	.banner section ul li p:nth-of-type(1) span:nth-of-type(1){
		font-size: 0.3125rem;
		color:#5b00ee;
	}
	.banner section ul li p:nth-of-type(1) span:nth-of-type(2){
		font-size: 0.25rem;
		color:#bbbbbb;
	}
	.banner section ul li p:nth-of-type(2){
		white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
		color:#6b6b6a;
		font-size: 0.375rem;
	}

	
	</style>