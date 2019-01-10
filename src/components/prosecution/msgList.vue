<template>
	<!--S 消息列表-->
	<div class="bg_fff">
		<div class="msg_table_out">
			<div class="msg_table">
				<ul>
					<li :class="{'active':current==0}" @click="current=0">未完成消息(6)</li>
					<li :class="{'active':current==1}" @click="current=1">完成帮教(2)</li>
				</ul>
			</div>
		</div>
		
		<div class="msg_list" v-show="current==0">
			<ul>
				<li>
					<div class="msg_list_icon">
						<img src="../../assets/msg_icon_blue.png"/>
					</div>
					<div class="msg_list_title ov pdr20 ">
						未按时完成提醒
						<div class="fr f24" style="margin-top: 0.05rem;">2019-01-05 10:55</div>
					</div>
					<div class="msg_list_small">帮教人201812120002未按时完成新项目帮教人201812120002未按时完成新项目</div>
				</li>
				<li>
					<div class="msg_list_icon">
						<img src="../../assets/msg_icon_blue.png"/>
					</div>
					<div class="msg_list_title ov pdr20">
						未按时完成提醒
						<div class="fr f24" style="margin-top: 0.05rem;">2019-01-05 10:55</div>
					</div>
					<div class="msg_list_small">帮教人201812120002未按时完成新项目帮教人201812120002未按时完成新项目</div>
				</li>
				<li class="is_see">
					<div class="msg_list_icon">
						<img src="../../assets/msg_icon_blue.png"/>
					</div>
					<div class="msg_list_title ov pdr20">
						未按时完成提醒
						<div class="fr f24" style="margin-top: 0.05rem;">2019-01-05 10:55</div>
					</div>
					<div class="msg_list_small">帮教人201812120002未按时完成新项目帮教人201812120002未按时完成新项目</div>
				</li>
			</ul>
		</div>
		<div class="msg_list" v-show="current==1">
			<ul>
				<li>
					<div class="msg_list_icon">
						<img src="../../assets/msg_icon_yellow.png"/>
					</div>
					<div class="msg_list_title ov pdr20">
						未按时完成提醒
						<div class="fr f24" style="margin-top: 0.05rem;">2019-01-05 10:55</div>
					</div>
					<div class="msg_list_small">帮教人201812120002未按时完成新项目帮教人201812120002未按时完成新项目</div>
				</li>
				<li>
					<div class="msg_list_icon">
						<img src="../../assets/msg_icon_yellow.png"/>
					</div>
					<div class="msg_list_title ov pdr20">
						未按时完成提醒
						<div class="fr f24" style="margin-top: 0.05rem;">2019-01-05 10:55</div>
					</div>
					<div class="msg_list_small">帮教人201812120002未按时完成新项目帮教人201812120002未按时完成新项目</div>
				</li>
			</ul>
		</div>
	</div>
	<!--E 消息列表-->
</template>

<script>
	export default {
		data() {
			return {
				current:0,
			}
		},

		mounted() {
			document.title = "消息列表";
			this.type = this.$route.query.type;
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {

		},

	};
</script>

<style lang="less" scoped>
	.msg_table_out{
		height: 0.88rem;
	}
	.msg_table{
		position: fixed;
		z-index: 10;
		left: 0;
		top: 0;
		background-color: #fff;
		width: 100%;
		ul{
			overflow: hidden;
			li{
				float: left;
				width: 50%;
				text-align: center;
				font-size: 0.28rem;
				line-height: 0.88rem;
			}
			.active{
				color: #2AE0A7;
				border-bottom: 2px solid #2AE0A7;
			}
		}
	}
	.msg_list{
		padding: 0.2rem;
		ul{
			li{
				border-radius: 0.1rem;
				padding: 0.2rem 0;
				padding-left: 1.2rem;
				position: relative;
				border-bottom: 1px solid #eee;
				margin-top: 0.2rem;
				box-shadow: 0 0 10px #ccc;
				.msg_list_icon{
					position: absolute;
					left: 0.2rem;
					top:0.2rem;
					img{
						width: 0.8rem;
					}
				}
				.msg_list_title{
					font-size: 0.28rem;
				}
				.msg_list_small{
					font-size: 0.24rem;
					color: #999;
				}
			}
			li.is_see{
				color: #ccc;
				.msg_list_small{
					color: #ccc;
				}
			}
		}
	}
</style>