<template>
	<div class="sliderBar">
		<ul>
			<li v-for="item in sidebarList">
				<router-link :to='{path:item.goUrl,query:{user:user}}'>{{item.content}}</router-link>
			</li>
		</ul>
	</div>
</template>
<style lang="scss" scoped="" type="text/css">
	.sliderBar{
		width:150px;
		height:100%;
		position:absolute;
		z-index:11;
		border-right:1px solid #fff;
		ul{
			width:100%;
			li{
				width:100%;
				height:45px;
				line-height:45px;
				text-align:center;
				a{
					font-family:'微软雅黑';
					font-size:18px;
					color:#fff;
				}
			}
		}
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			user:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				sidebarList: [
					{content:'个人首页', goUrl:'/userInfo'},
					{content:'个人资料', goUrl:'/userInfo'},
					{content:'修改密码', goUrl:'/userInfo'},
					{content:'个人资料', goUrl:'/userInfo'},
					{content:'个人资料', goUrl:'/userInfo'},
					{content:'个人资料', goUrl:'/userInfo'}
				],
				userName: this.$route.params.user
			}
		},
		mounted(){
		}
	}
	
</script>