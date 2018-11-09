<template>
	<header class="nav">
		<div class="logo">
			<label>VUE后台管理系统</label>
		</div>
		<div class="userpart">
			<label>欢迎，{{userName}}</label>
			<input class="getout" type="button" value="退出" @click="goLogin">
		</div>
	</header>
</template>
<style lang="scss" type="text/css">
	.nav{
		width:100%;
		// min-width: 320px;
	 //    max-width: 768px;
	    margin: auto;
		height:88px;
		line-height:88px;
		padding:0 100px;
		position:relative;
		z-index:9;
		.logo{
			width:250px;
			height:88px;
			display:inline-block;
			float:left;
			label{
				width:100%;
				font-size:28px;
				font-weight:bold;
				color:#fff;
			}
		}
		.userpart{
			width:50%;
			float:right;
			label{
				line-height:88px;
				display:inline-block;
				font-size:18px;
				font-weight:bold;
				color:#fff;
			}
			.getout{
				border:none;
				background-color:transparent;
				margin-left:10px;
				font-size:18px;
				color:#fff;
			}
		}
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			userName:{
				type:String,
				default:''
			}
		},
		methods:{
			goBack(){
				window.history.back();
			},
			goLogin(){
				this.$router.push({path:'/'})
			}
		}
	}
</script>