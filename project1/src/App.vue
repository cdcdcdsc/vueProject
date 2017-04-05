<template>
  <div id="app">
  	<div class="tabbar" v-show='true'>
  		<section v-for='(item,index) in lists' @click='change(item,index,$event)'>
  			<router-link :to="routers[index]">
  				<img :src="item.bg_icon" alt="" ref='img'/>
  				<p :class='color1'  ref='p'>{{ item.title }}</p>
  			</router-link>	
  		</section>
  		<!--<span class="count">{{count1}}</span>-->
  	</div>
  	<router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
export default {
  name : 'app',
  data () {
  	return {
  		flag : true,
  		lists : [],
  		color1 : 'color1',
  		color2 : 'color2',
  		routers : ['/discount','/warehouse','/global','/cart','/mine'],
  	}
  },
  methods : {
  	change (item,index,$event) {
  		console.log(item);
  		console.log($event.target);
			console.log(this.$refs.img[index]);
			console.log(this.$refs.img[index].src);
			console.log(item.bg_icon);
		
		for (var i = 0; i < this.$refs.img.length; i++) {
			if (i != index) {
				this.$refs.img[i].src = this.lists[i].bg_icon;
				this.$refs.p[i].style.color = '#4a4a4a';
//				this.color = 'color1';
			}
		}
		if (this.$refs.img[index].src == 'http:' + item.bg_icon) {
			this.$refs.img[index].src = item.act_icon;
//			this.color = 'color2';
		}
		this.$refs.p[index].style.color = 'red';
  	},
  },
  components: {
  	Hello,
  },
  mounted () {
    this.$http.get('../static/data/index_menu_list.json').then(function(res){
    	console.log(res.body.data);
//   	console.log(res.body.data.menu_link.menu_list);
    	this.lists = res.body.data.menu_link.menu_list;
    	//如果与*号连接就变成了一个字符串
//   	console.log(this.lists);
    	
    });
  },
}
</script>
<style>
	
	.tabbar{
			position:fixed;
			left:0rem;
			top: 15.75rem;
			width: 10rem;
			height: 1.5625rem;
			display: flex;
			justify-content: space-around;
			background: orange;
			opacity: 0.6;
		}
	.tabbar section{
		display: flex;
		align-items: center;
	}
	.tabbar section a{
		display: inline-block;
		display: flex;
		flex-direction: column;
		text-decoration: none;	
	}
	.tabbar section a p{
		font-size: 0.3125rem;
	}
	.tabbar section a img{
		width: 0.6875rem;
		height: 0.6875rem;
		align-self: center;
	}
	/*.tabbar .count{
		display: block;
		width:0.625rem;
		height: 0.625rem;
		background: yellowgreen;
		border-radius: 50%;
		position: absolute;
		left: 6.975rem;
		top: 0.2125rem;
		opacity: 0.6;
		text-align:center;
		line-height:0.625rem;
		color: red;
		font-weight: bold;
	}*/
	.color1{
		color: #4a4a4a;
	}
	.color2{
		color: #FF464E;
	}
	/*#app .tabbar{
		display: inline-block;
	}*/
</style>


