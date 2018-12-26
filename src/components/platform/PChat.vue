<template>
	<div class="">
		<!--<group v-for="(messages, index) in $store.state.im.msgs['p2p-'+ who +'']" :key="index" :title="localDate(messages.time)">
			<cell primary="content" :title="messages.from+'：'" :value="messages.text"></cell>
		</group>-->
		
		<div class="messages_list_box">
			<div class="messages_list" >
				<div class="messages_data"><p>2018-11-27 10:22</p></div>
				<div class="messages_list_main messages_list_left">
					<div class="messages_img">
						<img src="../../assets/user_head.png" />
					</div>
					<div class="messages_text messages_text_left">
						<p>您好 在吗您好 在吗您好 在吗您好 在吗您好 在吗您好 在吗您好 在吗？</p>
					</div>
				</div>
				<div class="messages_list_main messages_list_right">
					<div class="messages_img">
						<img src="../../assets/user_head.png" />
					</div>
					<div class="messages_text messages_text_right">
						<p>您好 在吗？</p>
					</div>
				</div>
			</div>
		</div>
		

		<div class="foot_input_out">
			<div class="foot_input_main">
				<group>
		      <x-textarea placeholder="请输入消息内容" v-model="sendObj.text" :show-counter="false" :rows="1" autosize></x-textarea>
		    </group>
		    <div class="foot_input_btn" @click="sendMsg()">发送</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {XTextarea ,Group } from 'vux';
	export default {
		components: {
			Group,
			XTextarea 
		},
		props: ['who'],
		data() {
			return {
				// who:'wangjian',
				/**
				 *                 scene: obj.scene,
				    to: obj.to,
				    text: obj.text,
				 */
				sendObj: {
					scene: 'p2p',
					to: "",
					text: '',
					type: 'text'
				}
			}
		},
		mounted() {
			document.title='与 李杰 的通讯';
		},
		methods: {
			transRealTime(time) {
				return ''
			},
			sendMsg() {
				this.sendObj.to = this.who
				this.$store.dispatch('im/sendMsg', this.sendObj).then(() => {
					this.sendObj.text = ''
				})
			},
			localDate(date) {
				return new Date(date).toLocaleString().replace(/\//g, "-")
			}
		},
		computed: {

		}

	}
</script>

<style lang="less" scoped>
.messages_list_box{
	padding: 0.2rem;
	.messages_list{
		position: relative;
		.messages_data{
			text-align: center;
			p{
				display: inline-block;
				padding: 0 0.1rem;
				line-height: 0.34rem;
				background-color: #d8d8d8;
				color: #fff;
				font-size: 0.22rem;
				border-radius: 0.05rem;
			}
		}
		.messages_list_main{
			margin-top: 0.2rem;
			position: relative;
			.messages_img{
				position: absolute;
				top: 0;
				width: 0.8rem;
				height: 0.8rem;
				border-radius: 50%;
				overflow: hidden;
				img{
					width: 100%;
				}
			}
			.messages_text{
				p{
					max-width: 80%;
					display: inline-block;
					background-color: #fff;
					padding: 0.12rem;
					font-size: 0.24rem;
					border: 1px solid #eee;
					border-radius: 0.1rem;
					position: relative;
				}
				p:before{
					content: "";
					position: absolute;
					top: 0.2rem;
					width:0.2rem;
					height: 0.27rem;
				}
			}
			.messages_text_left{
				p:before{
					left: -0.2rem;
					background: url(../../assets/msg_icon1.png) no-repeat right center;
					background-size: 100% auto;
				}
			}
			.messages_text_right{
				text-align: right;
				p{
					text-align: left;
					background-color: #2ae0a7;
					border-color: #17bc85;
					color: #fff;
				}
				p:before{
					right: -0.2rem;
					background: url(../../assets/msg_icon2.png) no-repeat left center;
					background-size: 100% auto;
				}
			}
			
		}
		.messages_list_left{
			padding-left: 1.1rem;
			.messages_img{
				left: 0;
			}
		}
		.messages_list_right{
			padding-right: 1.1rem;
			.messages_img{
				right: 0;
			}
		}
	}
	
}
</style>
<style lang="less">
.foot_input_out{
	height: 0.9rem;
	.foot_input_main{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 30;
		width: 100%;
		border-top: 1px solid #eee;
		background-color: #fff;
		box-sizing: border-box;
		padding-right: 1rem;
	}
	.weui-cells{
		margin-top: 0;
		textarea{
			background-color: #f4f4f4;
			border-radius: 0.1rem;
			font-size: 0.26rem;
			padding: 0.1rem;
			box-sizing: border-box;
		}
	}
	.weui-cells:before,.weui-cells:after{
		border: 0 none;
	}
	.foot_input_btn{
		position: absolute;
		top: 0.25rem;
		right: 0.2rem;
		width: 1rem;
		text-align: center;
		font-size: 0.26rem;
	}
}
</style>