<template>
	<div>
		<swipeout>
			<swipeout-item @click.native="pushChat(item)" @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow" v-for="(item, index) in chatList" :key="index">
				<div slot="right-menu">
					<swipeout-button @click.native="onButtonClick(item)" type="warn">删除</swipeout-button>
				</div>
				<div slot="content" class="message_list" @click.stop="pushChat(item)">
					<div class="message_head"><img src="../../assets/user_head.png" /></div>
					<div class="message_title ov">
						<div class="message_name fl">被帮教人 {{item.ucAccid}}</div>
						<div class="message_data fr color_999">12:24</div>
					</div>
					<div class="message_text">孩子今天劳动教育的怎么样孩子今天劳动教育的怎么样孩子今天劳动教育的怎么样？</div>
				</div>
			</swipeout-item>
		</swipeout>

		<!--S 底部导航-->
		<div class="foot_out">
			<div class="foot_box">
				<ul>
					<li @click="clickHome">
						<div class="foot_icon">
							<img src="../../assets/foot_icon1.png" />
						</div>
						<div class="foot_text">首页</div>
					</li>
					<li>
						<router-link to="/pperson">
							<div class="foot_icon">
								<img src="../../assets/foot_icon2_2.png" />
							</div>
							<div class="foot_text active">通讯</div>
						</router-link>
					</li>
					<li>
						<router-link to="/pmine">
							<div class="foot_icon">
								<img src="../../assets/foot_icon3.png" />
							</div>
							<div class="foot_text">我的</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!--E 底部导航-->
	</div>
</template>

<script>
	import { Swipeout, SwipeoutItem, SwipeoutButton, ViewBox, Flexbox, FlexboxItem, Badge, Tabbar } from 'vux'

	export default {
		data() {
			return {
				userData:{},
				chatList: {}
			}
		},
		mounted() {
			this.getPersonList();
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {
			onButtonClick: (action) => {
				console.log(action);
			},
			getPersonList() {
				let ucAccid = this.$store.state.USER_NAME
				this.$axios.post('/api/userCase/getChatList', {
					ucAccid
				}).then(resp => {
					let data = resp.data.content
					this.chatList = data.chatList
				}).catch(error => {
					console.log(error);

				})
			},
			pushChat(item) {
				this.$router.push('/pchat/' + item.ucAccid)
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
		},
		components: {
			Swipeout,
			SwipeoutItem,
			SwipeoutButton,
		}
	}
</script>

<style lang="less" scoped>
	.color_999 {
		color: #999;
	}
	
	.message_list {
		border-bottom: 1px solid #eee;
		position: relative;
		padding: 0.2rem;
		padding-left: 1.1rem;
		min-height: 0.8rem;
		.message_head {
			position: absolute;
			left: 0.2rem;
			top: 0.2rem;
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 50%;
			overflow: hidden;
			img {
				width: 100%;
			}
		}
		.message_title {
			.message_name {
				font-size: 0.24rem;
			}
			.message_data {
				font-size: 0.22rem;
			}
		}
		.message_text {
			margin-top: 0.05rem;
			color: #999;
			font-size: 0.23rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
<style lang="less" scoped>
	.foot_out {
		height: 0.9rem;
	}
	
	.foot_box {
		position: fixed;
		z-index: 100;
		width: 100%;
		background-color: #fff;
		left: 0;
		bottom: 0;
		border-top: 1px solid #F4F4F4;
		ul {
			overflow: hidden;
			li {
				float: left;
				width: 33.3%;
				text-align: center;
				padding: 0.07rem 0;
				font-size: 0.2rem;
				line-height: 0.3rem;
				.foot_icon {
					width: 0.45rem;
					margin: 0 auto;
					img {
						width: 100%;
					}
					;
				}
				.foot_text.active {
					color: #19d5d7;
				}
			}
		}
	}
</style>