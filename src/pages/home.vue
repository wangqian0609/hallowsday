<template>
	<div id="home" class="home-content">
		<canvas-part :boxId = "canvasId"></canvas-part>
		<hallow-header :userName='userName'></hallow-header>
		<slider-bar :user='userName'></slider-bar>
		<transition name="fade">
	      	<router-view></router-view>
	    </transition>
		<hallow-footer></hallow-footer>
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
		position:relative;
		background:-webkit-linear-gradient(#07030e,#5e2a0b);
		background:linear-gradient(#07030e,#5e2a0b);
		.ghost{
			width:150px;
			height:150px;
			display:inline-block;
			position:absolute;
			top:0;
			left:0;
			opacity:0;
			z-index:10;
			background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-h01.png') no-repeat;
			background-size:contain;
			background-position:center center;
			animation:zoomUP 1s ease-in-out;
			-webkit-animation:zoomUP 1s ease-in-out;
			animation-delay: 5s;
			-webkit-animation-delay: 5s;
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
	@keyframes zoomShow{
		0%{
			opacity:0;
			transform: scaleX(0);
		}
		100{
			opacity:1;
			transform: scaleX(1);
		}
	}
	@-webkit-keyframes zoomShow{
		0%{
			opacity:0;
			-webkit-transform: scaleX(0);
		}
		100{
			opacity:1;
			-webkit-transform: scaleX(1);
		}
	}
</style>
<script type="text/javascript">
	import  header from '../components/header'
	import footer from '../components/footer'
	import canvas from '../components/canvas'
	import silderbar from '../components/sliderBar'

	export default{
		props:{
			user:{
				type:String,
				default:''
			},
			StoryName:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				userName:this.$route.params.user,
				storyName:'',
				Htitle:'',
				// ghostShow:false,
				// noteShow:true,
				canvasId:'home'
			}
		},
		components:{
			'hallow-header':header,
			'hallow-footer':footer,
			'canvas-part':canvas,
			'slider-bar':silderbar
		},
		methods:{
		}
	}
</script>