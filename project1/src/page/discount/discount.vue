<template>
	<div id='discount'>
		<!--**********标题**************-->
		<div class="title clear">
			<h1>卷皮</h1>
			<a href="###">
				<img src="../../../static/images/1_03.png" alt="" />
			</a>
		</div>
		<!--************nav************-->
		<div class="nav">
			<ul>
				<li v-for='item in titles'>{{ item }}</li>
			</ul>
		</div>
		<!--********************轮播图*******************-->
		<div class="swiper-container">
			<div class="swiper-wrapper">
		        <div class="swiper-slide" v-for='item in swiper'><img :src="item" v-lazy="item" alt=""></div>
   			</div>
   			<div class="swiper-pagination"></div>
		</div>
		<!--********************图标***********************-->
		<div class="icon">
			<ul>
				<li v-for='item in icons'>
					<img :src="item.pic" v-lazy="item.pic" alt="" />
					<p>{{ item.words }}</p>
				</li>
			</ul>
		</div>
		<!--*********************分类**********************-->
		<div class="classify">
			<section v-for='item in warehouses'>
				<img :src="item" v-lazy="item" alt="" />
			</section>
		</div>
		<!--**********************商品**************************-->
		<div class="goods">
			<p class="title2">-每天早10点-晚8点上新</p>
			<ul class="clear">
				<li v-for='item in goods'>
					<!--<img :src="item.url" alt=""/>-->
					<img :src="item.url" v-lazy="item.url" alt=""/>
					<p><span>{{ item.sales }}</span><span>{{ item.news }}</span></p>
					<p>{{ item.describe }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Swiper from '../../../static/swiper-3.3.1.min.js'
   	require('../../../static/swiper-3.3.1.min.css')
	export default{
		name : 'discount',
		data () {
			return {
				titles : ['上新','女装','鞋包','母婴','居家数码'],
				swiper : ['../../../static/images/1.png','../../../static/images/2.png',
				'../../../static/images/3.png','../../../static/images/4.png','../../../static/images/5.png'],
				icons : [],
				warehouses : ['https://s2.juancdn.com/bao/170330/2/7/58dc5be3a43d1f0d114145d2_375x456.png?iopcmd=convert&Q=88&dst=webp',
							'https://s2.juancdn.com/bao/170329/d/7/58db3094a43d1f017b52b522_375x228.jpg?iopcmd=convert&Q=88&dst=webp',
							'https://s2.juancdn.com/bao/170327/3/1/58d8adbea43d1f34ab5000d2_375x228.jpg?iopcmd=convert&Q=88&dst=webp'],
				goods : [],
			}
		},
		mounted () {
			let mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				autoplay: 1000,
				pagination: '.swiper-pagination',
			});
			this.$http.get('../../../static/data/discount.json').then((res) => {
				console.log(res.data.data.module_ads.multi_block[0].data[0].child);
				this.icons = res.data.data.module_ads.multi_block[0].data[0].child;
			});
			this.$http.get('../../../static/data/zhifacang.json').then((res) => {
				console.log(res);
				this.goods = res.body.data;
			})
			
		},
		
	}
</script>

<style>
	#discount{
		background: #f7f7f7;
	}
	/************title*****************/
	#discount .title{
		width: 10rem;
		height: 1.625rem;
		font-size: 0.6875rem;
		color: #ff4e4e;
		font-weight: bold;
		background: #fff;
	}
	#discount .title h1{
		width: 8.96875rem;
		height: 1.1875rem;
		padding-left: 3.25rem;
		float: left;
	}
	#discount .title a{
		display: block;
		width: 0.625rem;
		height: 0.625rem;
		float: left;
		padding-top: 0.625rem;
	}
	#discount .title a img{
		width: 0.625rem;
		height: 0.625rem;
	}
	
	/*****************nav***************/
	#discount .nav{
		width: 10rem;
		height: 1rem;
		background: #fff;
	}
	#discount .nav ul{
		width: 10rem;
		height: 1.25rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 0.375rem;
	}
	#discount .nav ul li{
		height: 1.03125rem;
		padding-top: 0.1125rem;
		color: #615571;
	}
	#discount .nav ul li:hover{
		color:red;
		background: url(../../../static/images/2_07.png) no-repeat left bottom;
	}
	
	/*********************轮播图****************************/
	#discount .swiper-container{
		width: 10rem;
		height: 3.75rem;
		background: #fff;
	}
	#discount .swiper-container img{
		width: 10rem;
		height: 3.75rem;	
	}
	/********************ico*************************/
	#discount .icon{
		width: 10rem;
		height: 2.5625rem;
		margin-bottom: 0.3125rem;
		background: #fff;
	}
	#discount .icon ul{
		display: flex;
		justify-content: space-around;
		padding-top: 0.3125rem;
	}
	#discount .icon ul li img{
		width: 1.25rem;
		height: 1.25rem;
	}
	#discount .icon ul li p{
		text-align: center;
		font-size: 0.375rem;
		color: #686868;
	}
	/**********************分类***********************/
	#discount .classify{
		width: 10rem;
		height: 6.09375rem;
		background: #fff;
		margin-bottom: 0.3125rem;
	}
	#discount .classify section:nth-of-type(1){
		width: 5rem;
		height: 6.09375rem;
		float: left;
		border-right: 0.03125rem solid #ccc;
	}
	#discount .classify section:nth-of-type(1) img{
		width: 5rem;
		height: 6.09375rem;
	}
	#discount .classify section:nth-of-type(2){
		width: 4.96875rem;
		height: 3.21875rem;
		float: left;
		border-bottom: 0.03125rem solid #ccc;
	}
	#discount .classify section:nth-of-type(2) img{
		width: 4.96875rem;
		height: 3.21875rem;
	}
	#discount .classify section:nth-of-type(3){
		width: 4.96875rem;
		height: 2.8125rem;
		float: left;
	}
	#discount .classify section:nth-of-type(3) img{
		width: 4.96875rem;
		height: 2.8125rem;
	}
	/**********************商品***********************/
	#discount .goods{
		width: 10rem;
		background: #fff;
	}
	#discount .goods .title2{
		width: 10rem;
		height: 1.40625rem;
		text-align: center;
		line-height: 1.40625rem;
	}
	#discount .goods ul li{
		width: 5rem;
		height: 6.875rem;
		float: left;
	}
	#discount .goods ul li img{
		width: 5rem;
		height: 4.9375rem;
	}
	#discount .goods ul li p{
		width: 5rem;
		height: 0.84375rem;
	}
	#discount .goods ul li p span:nth-of-type(1){
		font-size: 0.4375rem;
		color:#ff69a0;
		margin-right: 0.625rem;
	}
	#discount .goods ul li p span:nth-of-type(2){
		font-size: 0.3125rem;
		color:#ccb293;
	}
	#discount .goods ul li p:last-of-type{
		font-size: 0.3125rem;
		color:#ccb293;
	}
</style>