<template>
	<div class="content">
			<div class="infos">
				<div v-show="noteShow" class="ShowNotes" @click="openNotice">这是一封简单的公告</div>
				<div v-show="!noteShow" class="Notes">
					<label>{{userName}}，欢迎你打开这个页面。</label>
				</div>
			</div>
			<div class="menus" v-show="!noteShow">
				<ul>
					<li v-for="list in lists" @click="openNext($event)">{{list}}</li>
				</ul>
			</div>
			<div class="clear"></div>
	</div>
</template>
<style lang="scss" type="text/css">
	.content{
	width:100%;
	min-width: 320px;
    max-width: 768px;
    margin: auto;
	padding:20px;
	position: relative;
	z-index: 5;
	.infos{
		width:100%;
		min-height:300px;
		padding: 70px 100px;
		display:inline-block;
		position:relative;
		background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-h02.png') no-repeat;
		background-position:center center;
		background-size:100% 100%;
		animation:zoomShow 1s ease-in-out;
		-webkit-animation:zoomShow 1s ease-in-out;
		.ShowNotes{
			width: 100%;
			display:inline-block;
		    font-size: 24px;
		    color: #333;
			line-height: 100px;
		}
		.Notes{
			width:100%;
			display:inline-block;
			font-size:16px;
			color:#333;
			line-height:35px;
			text-align:left;
		}
	}
	.menus{
		width:100%;
		display:inline-block;
		padding-top:70px;
		ul{
			width:100%;
			text-align:left;
			li{
				width:30%;
				height:50px;
				line-height:50px;
				display:inline-block;
				text-align:center;
				margin:0 3% 3% 0;
				background-color:#eba306;
				border-radius:10px;
				font-size:18px;
				color:#dc4e14;
				cursor: pointer;
				&:nth-child(3){
					margin-right:0;
				}
			}
		}
	}
}
</style>