<template>
	<div>
		<view-box>
			<swipeout>
				<swipeout-item @click.native="pushChat(item)" @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow" v-for="(item, index) in chatList" :key="index">
					<!-- <router-link  :to=""> -->
					<!-- <div slot="right-menu">
                        <swipeout-button @click.native="onButtonClick('fav')" type="primary">确认</swipeout-button>
                        <swipeout-button @click.native="onButtonClick('delete')" type="warn">取消</swipeout-button>
                        </div> -->
					<div slot="content" class="demo-content vux-1px-t">
						<flexbox>
							<flexbox-item :span="10">
								<img class="pic" src="../../assets/60x60.gif" style="margin-right:10px" />
								<div style="padding-left:10px">
									<span class="user-name">{{item.ucAccid}}</span>
									<span class="user-msg">{{item.ucCustom}}</span>
								</div>
							</flexbox-item>
							<flexbox-item :span="2">
								<span class="user-time" style="float:left">
                                            
                                        </span>
								<!-- <badge text="1" style="float:right"></badge> -->
							</flexbox-item>
						</flexbox>
					</div>
					<!-- </router-link> -->
				</swipeout-item>
			</swipeout>
		</view-box>
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
				chatList: {}
			}
		},
		mounted() {
			this.getPersonList()
		},
		methods: {
			onButtonClick: (action) => {
				console.log(action);
			},
			handleEvents: (action) => {
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
			}
		},
		components: {
			Swipeout,
			SwipeoutItem,
			SwipeoutButton,
			ViewBox,
			Flexbox,
			FlexboxItem,
			Badge,
			Tabbar
		}
	}
</script>

<style scoped>
	.demo-content {
		padding: 10px;
		/* height: 26px; */
	}
	
	.pic {
		height: 44px;
		width: 44px;
		float: left;
	}
	
	.user-msg {
		font-size: 12px;
		color: gray;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	
	.user-time {
		font-size: 12px;
		color: gray;
	}
	
	span {
		display: block;
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