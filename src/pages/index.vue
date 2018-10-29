<template>
	<div class="home">
		<form>
			<dl>
				<dd>
					<input type="text" placeholder="请输入你的用户名">
				</dd>
			</dl>
			<input class="btn" type="button" value="确认">
		</form>
	</div>
</template>
<style lang="scss" scoped="" type="text/css">
	.home{
		width:100%;
		height:100%;
		background-color:rgba(248,248,248,.9);
		& > form{
			width:100%;
		    display: inline-block;
		    padding: 0 20%;
			dl{
				width:100%;
				margin-bottom:20px;
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
						background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-n.png');
						background-size:cover;
						background-repeat:no-repeat;
						background-position:center center;
						position:absolute;
						left:20px;
						top:0;
					}
				}
			}
			.btn{
				width:80%;
				height:60px;
				line-height:60px;
				font-family:'宋体';
				font-size:30px;
				color: #dd541c;
			    font-weight: bold;
			    letter-spacing: 25px;
				display:inline-block;
				text-align:center;
				background:-webkit-gradient(linear,left top,right top,from(#e97750),coloe-stop(.7,#efa525),to(#e97750));
				background:-webkit-linear-gradient(left,#e97750,#efa525 70%,#e97750);
				border: none;
			    border-radius: 5px;
			}
		}

	}
</style>
<script type="text/javascript">
	export default{}
</script>