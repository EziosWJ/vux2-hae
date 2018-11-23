<template>
	<div>
		<group>
			<cell>
				<img class="user-img" slot="icon" src="../../assets/vux_logo.png" alt="">
				<div slot="after-title">
					<span>{{this.$store.state.USER_NAME}}</span>
					<span class="user-cool">{{this.$store.state.UC_CUSTOM}}</span>
				</div>
			</cell>
		</group>
		<group>
			<cell title="更改信息" @click.native="edituserinfo">
				<i slot="icon" class="fa fa-edit"></i>
			</cell>
		</group>
		<group>
			<cell title="退出" @click.native="logout">
				<i slot="icon" class="fa fa-sign-out"></i>
			</cell>
		</group>
		<!--S 底部导航-->
		<div class="foot_out">
			<div class="foot_box">
				<ul>
					<li>
						<router-link to="/phome">
							<div class="foot_icon">
								<img src="../../assets/foot_icon1.png" />
							</div>
							<div class="foot_text">首页</div>
						</router-link>
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
	import { Cell, Group } from 'vux';
	export default {
		components: {
			Cell,
			Group
		},
		methods: {
			logout() {
				localStorage.clear();
				this.$router.push('/login')
			},
			edituserinfo() {
				this.$router.push('/phome/edituserinfo')
			}
		}

	}
</script>

<style scoped>
	
	.user-img {
		height: 60px;
		width: 60px;
	}
	
	.user-cool {
		font-size: 12px;
		color: gray;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		display: block;
	}
	
	i {
		padding-right: 10px
	}
</style>
<style lang="less" scoped>
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