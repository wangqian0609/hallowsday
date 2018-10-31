<template>
	<div class="home-content">
		<hallow-header :headerTitle='Htitle'></hallow-header>
		<div class="content">
			<div class="infos">
				<label>{{userName}}</label>
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
			.infos{
				width:40%;
				display:inline-block;
				float:left;
			}
			.menus{
				width:60%;
				display:inline-block;
				float:right;
				ul{
					width:100%;
					li{

					}
				}
			}
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