<template>
	<div class="home">
		<from>
			<dl>
				<dd>
					<input type="text" placeholder="请输入你的用户名">
				</dd>
			</dl>
			<input class="btn" type="button" value="确认">
		</from>
	</div>
</template>
<style lang="scss" scoped="" type="text/css">
	.home{
		width:100%;
		height:100%;
		background-color:rgba(248,248,248,.9);
		& > from{
			width:100%;
			dl{
				width:100%;
				dd{
					width:100%;
					padding:0 20px 0 100px;
					position:relative;
					input{
						width:100%;
						height:50px;
						padding:0 20px;
						line-height:50px;
						font-family:'宋体';
						font-size:20px;
						background-color:#fff;
						border:2px solid #000;
						border-radius:5px;
					}
					&:before{
						content:'';
						width:50px;
						height:50px;
						display:inline-block;
						background:url('');
						background-size:cover;
						background-repeat:no-repeat;
						background-position:center center;
					}
				}
			}
			.btn{
				width:80%;
				height:44px;
				line-height:44px;
				text-align:center;
			}
		}

	}
</style>
<script type="text/javascript">
	export default{}
</script>