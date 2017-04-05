<template lang="html">
	<div id='goods'>
		<!--*********************header********************************-->
		<div class="goback">
			<img src="../../../static/images/12.png" onclick='history.back()' />
			<ul>
				<li><a href="###">商品</a></li>
				<li><a href="###">详情</a></li>
				<li><a href="###">评价</a></li>
			</ul>
		</div>
		<!--***************************goods***************************-->
		<div class="describe">
			<img :src="goodArr.img" alt="" />
			<!--<img src="" alt="" />-->
			<section>
				<p>{{ goodArr.name }}</p>
				<p>{{ goodArr.price }}</p>
			</section>
		</div>
		<!--***************************bottom*******************************-->
		<div class="footer">
			<div class="footerLeft">
				<section>
				<a href="">
					<img src="../../../static/images/scale_03.png" alt="" />
					<p>卖家</p>
				</a>
				</section>
				<section>
					<a href="">
						<img src="../../../static/images/333.png" alt="" />
						<p>关注</p>
					</a>
				</section>
				<section>
					<a href="">
						<img src="../../../static/images/cart_05.png" alt="" />
						<p>购物车</p>
					</a>
				</section>
			</div>
			<div class="footerRight">
				<section>立即购买</section>
				<section>加入购物车</section>
			</div>
		</div>
	</div>
</template>

<script>
//	import Warehouse from '../warehouse/warehouse.vue'
	export default{
		props :['flag'],
		data () {
			return {
				product : [],
				
			}
		},
		created(){
			console.log(this.goodsArr);
		}
	
	}

</script>

<style type="text/css">
	#goods .goback{
		width: 10rem;
		height: 1.40625rem;
		display: flex;
		align-items: center;
	}
	#goods .goback img{
		width: 0.5625rem;
		height: 0.625rem;
	}
	#goods .goback ul{
		width: 9.290625rem;
		height: 1.40625rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	#goods .goback ul li:hover{
		background: url(../../../static/images/2_07.png) no-repeat left bottom;
	}
	
	/****************************describe*************************/
	#goods .describe{
		width: 10rem;
		height: 14.0625rem;
		background: cyan;
		padding-top: 2rem;
	}
	#goods .describe img{
		width: 5rem;
		height: 6rem;
		margin-left: 2.5rem;
		margin-right: 2.5rem;
	}
	#goods .describe section p:nth-of-type(1){
		width: 10rem;
		height: 3rem;
		font-size: 0.625rem;
		color: hotpink;
	}
	#goods .describe section p:nth-of-type(2){
		width: 10rem;
		height: 3rem;
		font-size: 0.625rem;
		color: greenyellow;
	}
	/************************footer***********************/
	#goods .footer{
		position:fixed;
		left:0rem;
		top: 15.75rem;
		display: flex;
		justify-content: space-around;
	}
	#goods .footer .footerLeft{
		width: 3rem;
		height: 1.5625rem;
		display: flex;
		justify-content: space-around;
		opacity: 0.6;
	}
	#goods .footer .footerRight{
		width: 7rem;
		height: 1.5625rem;
		display: flex;
		justify-content: space-around;
	}
	
</style>