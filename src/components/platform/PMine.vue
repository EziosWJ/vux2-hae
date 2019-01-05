<template>
	<div>
		<div class="user_center">
			<div class="user_main_bg">
				<div class="user_main">
					<div class="user_head">
						<div class="user_head_line">
							<img src="../../assets/user_head.png" />
						</div>
					</div>
					<div class="user_name">
						<span  v-if="userData.ucRole==1">未检负责人</span>
						<span  v-if="userData.ucRole==2">检察官</span>
						<span  v-if="userData.ucRole==3">帮教人</span>
						<span  v-if="userData.ucRole==4">被帮教人</span>
						<span  v-if="userData.ucRole==5">家长</span>
						：{{userData.ucAccid}}
					</div>
				</div>
			</div>
			<div class="login_out">
				<div class="login_out_btn"  @click="logout">退出登录</div>
			</div>
		</div>
		
		<!--S 底部导航-->
		<div class="foot_out">
			<div class="foot_box">
				<ul>
					<li @click="clickHome">
						<div class="foot_icon" >
							<img src="../../assets/foot_icon1.png" />
						</div>
						<div class="foot_text">首页</div>
					</li>
					<li>
						<router-link to="/pperson">
							<div class="foot_icon">
								<img src="../../assets/foot_icon2.png" />
							</div>
							<div class="foot_text">通讯</div>
						</router-link>
					</li>
					<li>
						<router-link to="/pmine">
							<div class="foot_icon">
								<img src="../../assets/foot_icon3_2.png" />
							</div>
							<div class="foot_text active">我的</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!--E 底部导航-->
	</div>
</template>

<script>
	
	export default {
		data() {
			return{
				userData:{},
			}
			
		},
		mounted() {
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {
			logout() {
				sessionStorage.clear();
				this.$router.push('/login')
			},
			clickHome(){
				if (this.userData.ucRole==2) {
					this.$router.push("/inquisitorHome");
				}else if(this.userData.ucRole==3){
					this.$router.push("/educationHome");
				}else if(this.userData.ucRole==4){
					this.$router.push("/byEducationHome");
				}else if(this.userData.ucRole==5){
					this.$router.push("/byParentsHome");
				}else if(this.userData.ucRole==1){
					this.$router.push("/adminHome");
				}
			}
		}

	}
</script>

<style lang="less" scoped>
.user_center{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	.user_main_bg{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 65%;
		background: url(../../assets/user_bg.png) no-repeat top left;
		background-size: 100% auto;
		.user_main{
			position: absolute;
			top: 50%;
			width: 100%;
			transform: translateY(-50%);
			-webkit-transform: translateY(-50%);
			.user_head{
				width: 2.4rem;
				height: 2.4rem;
				border-radius: 50%;
				margin:0 auto;
				padding: 0.1rem;
				.user_head_line{
					border: 1px solid #e4e4e4;
					width: 100%;
					height: 100%;
					border-radius: 50%;
					overflow: hidden;
					img{
						width: 100%;
					}
				}
			}
			.user_name{
				text-align: center;
				font-size: 0.32rem;
				color: #fff;
				margin-top: 0.2rem;
			}
		}
	}
	.login_out{
		position: absolute;
		bottom: 18%;
		width: 100%;
		left: 0;
		.login_out_btn{
			line-height: 0.8rem;
			font-size: 0.28rem;
			border-radius: 0.4rem;
			text-align: center;
			width: 90%;
			margin: 0 auto;
			color: #fff;
	    background: -webkit-gradient(linear, 100% 0, 0 0, from(#2ae0a7), to(#17d7d1));
	    background: -webkit-linear-gradient(to right, #2ae0a7, #17d7d1);
	    background: -moz-linear-gradient(to right, #2ae0a7, #17d7d1);
	    background: -o-linear-gradient(to right, #2ae0a7, #17d7d1);
	    background: linear-gradient(to right, #2ae0a7, #17d7d1);
		}
	}
}

.foot_out{
	height: 0.9rem;
}	
.foot_box{
	position: fixed;
	z-index: 100;
	width: 100%;
	background-color: #fff;
	left: 0;
	bottom: 0;
	border-top: 1px solid #F4F4F4;
	ul{
		overflow: hidden;
		li{
			float: left;
			width: 33.3%;
			text-align: center;
			padding: 0.07rem 0;
			font-size: 0.2rem;
			line-height: 0.3rem;
			.foot_icon{
				width: 0.45rem;
				margin: 0 auto;
				img{
					width: 100%;
				};
			}
			.foot_text.active{
				color: #19d5d7;
			}
		}
	}
}
</style>