<template>
	<div class="login_box">
		<div class="login_main">
			<div class="login_img"><img src="../../../assets/login.png" /></div>
			<div class="input_mian">
				<div class="login_input">
					<input type="text" v-model="ucName" placeholder="请输入账号" />
					<p>账号</p>
				</div>
				<div class="login_input">
					<input type="password" v-model="ucPassword" placeholder="请输入密码" />
					<p>密码</p>
				</div>
				<div class="login_btn" @click="login">登录</div>
			</div>
		</div>
	</div>
</template>

<script>
	
export default {
	data() {
		return {
			ucName: "",
			ucPassword: "",
		}
	},
	mounted() {
		document.title = "欢迎登录静芳工作室";
	},
	methods: {
		login() {
			if (this.ucName =="") {
				alert('请输入账号');
			}else if(this.ucPassword ==""){
				alert('请输入密码');
			}else{
				this.$axios
				.post("/api/userCase/login", {
					ucName: this.ucName,
					ucPassword: this.ucPassword
				}, )
				.then(resp => {
					let code = resp.data.code;
					if(code === 200){
						let ucRole = resp.data.content.uc.ucRole;
						let ucId = resp.data.content.uc.ucId;
						let ucAccid = resp.data.content.uc.ucAccid;
						let ucCustom = resp.data.content.uc.ucCustom;
						let ucToken = resp.data.content.uc.ucToken;
						console.log(`ucid:${ucId}`);
						console.log(`权限为ucRole:${ucRole}${ucAccid}`);
						this.$store.dispatch('setRole', {ucRole,ucId,ucAccid,ucToken,ucCustom})
						alert("欢迎！" + resp.data.content.uc.ucAccid + "!");
						this.$store.dispatch('im/initNimSDK');
						let userData = JSON.stringify(resp.data.content.uc);
						localStorage.setItem("userData", userData);
						this.$router.push('/phome');
					} else {
						alert("登录失败，请重新登录！")
					}
				}).catch(error => {
					console.log(error);
				});
			}
		}
	}
}
</script>

<style lang="less" scoped>
.login_box{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: url(../../../assets/logon_bg.jpg) no-repeat top left;
	background-size: 100% auto;
	background-color: #1dd7c0;	
	.login_main{
		position: absolute;
		width: 5rem;
		left: 50%;
		margin-left: -2.5rem;
		top:50%;
		transform: translateY(-70%);
		-webkit-transform: translateY(-70%);
		.login_img{
			margin: 0 auto;
			width: 70%;
			img{
				width: 100%;
			}
		}
		.input_mian{
			margin-top: 0.6rem;
			overflow: hidden;
		}
		.login_input{
			position: relative;
			margin-top: 0.3rem;
			font-size: 0.24rem;
			input{
				width: 100%;
				box-sizing: border-box;
				border: 0 none;
				height: 0.68rem;
				background-color: inherit;
				border: 1px solid #fff;
				border-radius: 0.34rem;
				padding-right: 0.2rem;
				padding-left: 1rem;
				color: #fff;
			}
			input::-webkit-input-placeholder {
		    color: #90eedd;
			}
			input:-moz-placeholder {
		    color: #90eedd;
			}
			input:-ms-input-placeholder {
		    color: #90eedd;
			}
			p{
				position: absolute;
				left: 0.4rem;
				top: 0;
				line-height: 0.68rem;
				color: #fff;
			}
		}
		.login_btn{
			margin-top: 0.6rem;
			line-height: 0.72rem;
			border-radius: 0.36rem;
			text-align: center;
			background-color: #fff;
			font-weight: bold;
			font-size: 0.26rem;
			color: #2AE0A7;
		}
	}
}
	
</style>