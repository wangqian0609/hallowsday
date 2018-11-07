<template>
	<div id="home" class="home">
		<canvas-part :boxId = "canvasId"></canvas-part>
		<form>
			<dl v-if="!isShow">
				<dd>
					<input type="text" v-model="Num.name" placeholder="请设置您的用户名">
				</dd>
				<dd>
					<input type="password" v-model="Num.passwd" placeholder="请设置您的登录密码">
				</dd>
				<dd>
					<input type="password" v-model="Num.repasswd" placeholder="请确认您的登录密码">
				</dd>
				<dd>
					<input type="text" v-model="Num.phone" placeholder="请输入您的联系方式">
				</dd>
				<dd>
					<i class="tip">{{tip}}</i>
				</dd>
			</dl>
			<dl v-else>
				<dd>
					<input type="text" v-model="username" placeholder="请输入你的用户名">
				</dd>
				<dd>
					<input type="password" v-model="userpass" placeholder="请输入你的密码">
				</dd>
				<dd>
					<i class="tip" @click="goLogin">还没有账户？请去注册</i>
				</dd>
			</dl>
			<div class="btnBox">
				<input v-show="!isShow" type="button" class="btn" value="注册" @click="Login">
				<input  v-show="isShow" class="btn" type="button" value="登录" @click="goNext">
			</div>
		</form>
		<dialog-bar v-model="sendVal" type="danger" :title="maskTitle"  :content="maskContent"  v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"></dialog-bar>
		<hallow-footer></hallow-footer>
	</div>
</template>
<style lang="scss" scoped="" type="text/css">
	.home{
		width:100%;
		height:100%;
		& > form{
			width:100%;
			padding-top:150px;
			margin:auto;
			position: relative;
			z-index:10;
		    min-width: 320px;
			max-width: 768px;
			dl{
				width:100%;
				padding:0 20% 50px;
				dd{
					width:100%;
					min-height:64px;
					padding:20px 20px 20px 100px;
					margin-bottom:20px;
					position:relative;
					input{
						width:100%;
						height:50px;
						padding:0 20px;
						line-height:50px;
						font-family:'宋体';
						font-size:16px;
						background-color:#fff;
						border:2px solid #000;
						border-radius:5px;
					}
					&:before{
						content:'';
						width:80px;
						height:80px;
						display:inline-block;
						background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/icon.png');
						background-size:400px 400px;
						background-repeat:no-repeat;
						background-position: -166px -34px;
						position:absolute;
						left:0;
						top:0;
					}
					.tip{
						width: 100%;
						display:inline-block;
					    color: #fff;
					    font-style: normal;
					    font-size: 18px;
					}
					&:last-child:before{
						display:none;
					}
				}
			}
			.btnBox{
				width:100%;
				height:100px;
				display:inline-block;
				cursor: pointer;
				.btn{
					width:250px;
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
					font-family:'宋体';
					border: none;
				    border-radius: 5px;
				}
			}
			&:after{
				content: "";
				width: 130px;
				height: 130px;
				display: inline-block;
				background: url(https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-s.png);
				background-repeat: no-repeat;
				background-size: cover;
				position: absolute;
				top: 0;
				right: -65px;
				animation: hallow-s-slide 10s infinite ease-in-out;
				-webkit-animation: hallow-s-slide 10s infinite ease-in-out;
			}
		}
	}
	@keyframes hallow-s-slide{
		0%{
		    transform: translateY(0);
		    -webkit-transform: translateY(0);
		}
		50%{
		    transform: translateY(230px);
		    -webkit-transform: translateY(230px);
		}
		100%{
		    transform: translateY(0%);
		    -webkit-transform: translateY(0%);
		}
	}
	@-webkit-keyframes hallow-s-slide{
		0%{
		    transform: translateY(0);
		    -webkit-transform: translateY(0);
		}
		50%{
		    transform: translateY(230px);
		    -webkit-transform: translateY(230px);
		}
		100%{
		    transform: translateY(0%);
		    -webkit-transform: translateY(0%);
		}
	}
</style>
<script type="text/javascript">
	import dialogBar from '../components/dialog'
	import footer from '../components/footer'
	import canvas from '../components/stars'

	export default{
		props:{
			user:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				Num:{
					name:'',
					passwd:'',
					repasswd:'',
					phone:'',
				},
				tip:'',
				username:'',
				userpass:'',
				isShow:true,
				sendVal:false,
				maskTitle:'',
				maskContent:'',
				canvasId:'home',
				userStatus:true,
			}
		},
		components:{
			'dialog-bar':dialogBar,
			'hallow-footer':footer,
			'canvas-part':canvas,
		},
		methods:{
			openMask(index){
				this.sendVal = true;
			},
			clickCancel(){
				console.log('点击了取消');
				this.username = '';
				this.userpass = '';
			},
			clickDanger(){
				console.log('这里四danger回调');
			},
			clickConfirm(){
				console.log('点击了确认');
				this.$router.push({name:'Home',params:{user:this.username}})
			},
			goNext(){
				if(!this.username || !this.userpass){
					this.maskTitle = '错误提示';
					this.maskContent = '请按照提示输入您的账号信息';
					this.openMask();
					return;
				}
				console.log(this.username);
				this.maskTitle = '欢迎光临';
				this.maskContent = this.username + '，欢迎你的加入~';
				this.openMask();
			},
			goLogin(){
				this.isShow = !this.isShow;
			},
			Login(){
				if(!this.Num.name || !this.Num.passwd || !this.Num.repasswd || !this.Num.phone){
					this.tip = "*请完整填写您的个人信息";
					return;
				}
				if( this.Num.passwd !== this.Num.repasswd){
					this.tip = "*两次密码输入不相等，请确认后输入";
					return;
				}
				if(!(/^1[345678]\d{9}$/).test(this.Num.phone)){
					this.tip = "*您输入的手机号码有误，请重新输入";
					return;
				}
				console.log(this.Num);
				this.isShow = !this.isShow;
				this,username = this.Num.name;
			},
		},
		// computed:{
		// 	name(){
		// 		return this.Num.name;
		// 	},
		// 	passwd(){
		// 		return this.Num.passwd;
		// 	},
		// 	repasswd(){
		// 		return this.Num.repasswd;
		// 	},
		// 	phone(){
		// 		return this.Num.phone;
		// 	}
		// },
		// watch:{
		// 	name(newValue,oldValue){
		// 		if(newValue ==''){
		// 			this.tip = "请输入您的用户名";
		// 		}
		// 		else{
		// 			console.log(newValue);
		// 		}

		// 	},
		// 	passwd(newValue,oldValue){
		// 		if(newValue ==''){
		// 			this.tip = "请输入您的登录密码";
		// 		}
		// 		else{
		// 			console.log(newValue);
		// 		}
		// 	},
		// 	repasswd(newValue,oldValue){
		// 		if(newValue ==''){
		// 			this.tip = "请重新输入您的登录密码";
		// 		}
		// 		else{
		// 			console.log(newValue);
		// 		}
		// 	},
		// 	phone(newValue,oldValue){
		// 		if(newValue ==''){
		// 			this.tip = "请输入您的联系方式";
		// 		}
		// 		else{
		// 			console.log(newValue);
		// 		}
		// 	}
		// }
	}
</script>