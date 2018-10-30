<template>
	<div class="dialog">
		<div class="dialog-title">
			<h3>我是标题</h3>
		</div>
		<div class="dialog-content">
			<label>我是内容</label>
		</div>
		<div class="dialog-btns">
			<input type="button" value="Cancle">
			<input type="button" value="OK">
		</div>
	</div>
</template>
<style lang="scss" type="text/css">
	.dialog{
		width:300px;
		padding:30px 15px;
		border-radius:10px;
		background-color:#fff;
		position:absolute;
		top:50%;
		left:50%;
		margin-left:-150px;
		z-index:9999;
		.dialog-title{
			width:100%;
			line-height:60px;
			display:inline-block;
			h3{
				color:#333;
			}
		}
		.dialog-content{
			width:100%;
			line-height:45px;
			display:inline-block;
			text-align:left;
			label{
				width:100%;
				display:inline-block;
				word-break:break-all;
			}
		}
		.dialog-btns{
			width:100%;
			display:table;
			input{
				display: table-cell;
			    height: 40px;
			    width: 50%;
			    border: none;
			    border-radius: 5px;
			    font-size: 14px;
			}
		}
	}
</style>
<script type="text/javascript"></script>