<template>
	<div class="home-content">
		<hallow-header :headerTitle='Htitle'></hallow-header>
		<div class="content">
			<div class="infos">
				<label>{{userName}}</label><span></span>
			</div>
			<div class="menus">
				<ul>
					<li>唉唉唉唉唉啊</li>
					<li>唉唉唉唉唉啊</li>
					<li>唉唉唉唉唉啊</li>
				</ul>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>
<style lang="scss" type="text/css">
	.clear{
		height:0;
		visibility:hidden;
		clear:both;
	}
	.home-content{
		width:100%;
		height:100%;
		display:inline-block;
		position:relative;
		background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-hbg.jpg') no-repeat;
		background-size:cover;
		background-position:0 0;
		.content{
			width:100%;
			padding:20px;
			.infos{
				width:100%;
				min-height:300px;
				display:inline-block;
			}
			.menus{
				width:100%;
				display:inline-block;
				ul{
					width:100%;
					li{

					}
				}
			}
		}
		&:after{
			content:'';
			width:150px;
			height:150px;
			display:inline-block;
			position:absolute;
			top:0;
			left:0;
			opacity:0;
			//z-index:-1;
			background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-h01.png') no-repeat;
			background-size:contain;
			background-position:center center;
			animation:zoomUP 1s ease-in-out;
			animation-delay: 5s;
		}
	}
	@keyframes zoomUP{
		0%{
			opacity:0;
			transform: translate(0,0) scale(1);
		}
		75%{
			opacity:1;
			transform: translate(250%,250%) scale(6);
		}
		100%{
			opacity:0;
			transform: translate(0,0) scale(1);
		}
	}
	@-webkit-keyframes zoomUP{
		0%{
			opacity:0;
			-webkit-transform: translate(0,0) scale(1);
		}
		75%{
			opacity:1;
			-webkit-transform: translate(250%,250%) scale(6);
		}
		100%{
			opacity:0;
			-webkit-transform: translate(0,0) scale(1);
		}
	}
</style>
<script type="text/javascript">
	import  header from '../components/header'

	export default{
		props:{
			user:{
				type:String,
				default:''
			},
		},
		data(){
			return{
				storyList:['卖红色衣服的女人','卖红色衣服的女人','卖红色衣服的女人','卖红色衣服的女人'],
				userName:this.$route.params.user,
				Htitle:'',
			}
		},
		components:{
			'hallow-header':header,
		}
	}
</script>