<template>
	<div class="sliderBar">
		<ul>
			<li v-for="{item,index} in sliderList">
				<router-link :to="item.url">{{item.content}}</router-link>
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
				font-size:18px;
				text-align:center;
				font-family:'微软雅黑';
			}
		}
	}
</style>
<script type="text/javascript">
	export default{
		data() {
			return {
				sliderList: [
					{content:'个人资料', url:'/userInfo'},
					{content:'个人资料', url:'/userInfo'},
					{content:'个人资料', url:'/userInfo'},
					{content:'个人资料', url:'/userInfo'},
					{content:'个人资料', url:'/userInfo'},
					{content:'个人资料', url:'/userInfo'}
				]
			}
		}
	}
	
</script>