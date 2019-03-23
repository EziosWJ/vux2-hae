<template>
	<!--S 消息列表-->
	<div class="bg_fff">
		<div class="msg_table_out">
			<div class="msg_table">
				<ul>
					<li :class="{'active':current==0}" @click="current=0">未完成任务({{reminderUnCompletedList.length}})</li>
					<li :class="{'active':current==1}" @click="current=1">完成任务({{reminderCompletedList.length}})</li>
				</ul>
			</div>
		</div>
		
		<div class="msg_list" v-show="current==0">
			<ul>
				<li v-for="(item, index) in reminderUnCompletedList" :key="index">
					<div class="msg_list_icon">
						<img src="../../assets/msg_icon_blue.png"/>
					</div>
					<div class="msg_list_title ov pdr20 ">
						未按时完成提醒
						<div class="fr f24" style="margin-top: 0.05rem;"></div>
					</div>
					<div class="msg_list_small">被帮教人：{{item.urName}}</div>
					<div class="msg_list_small">未按时完成：{{item.name}}</div>
					<div class="msg_list_small">截止日期：{{item.dieDate}}</div>
				</li>
				<!-- <li class="is_see">
					<div class="msg_list_icon">
						<img src="../../assets/msg_icon_blue.png"/>
					</div>
					<div class="msg_list_title ov pdr20">
						未按时完成提醒
						<div class="fr f24" style="margin-top: 0.05rem;">2019-01-05 10:55</div>
					</div>
					<div class="msg_list_small">帮教人201812120002未按时完成新项目帮教人201812120002未按时完成新项目</div>
				</li> -->
			</ul>
		</div>
		<div class="msg_list" v-show="current==1">
			<ul>
				<li v-for="(item, index) in reminderCompletedList" :key="index">
					<div class="msg_list_icon">
						<img src="../../assets/msg_icon_yellow.png"/>
					</div>
					<div class="msg_list_title ov pdr20">
						完成提醒
						<div class="fr f24" style="margin-top: 0.05rem;">{{item.finishedDate}}</div>
					</div>
					<div class="msg_list_small">被帮教人：{{item.urName}}</div>
					<div class="msg_list_small">完成任务：{{item.name}}</div>
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
				reminderCompletedList : [],
				reminderUnCompletedList : []
			}
		},

		mounted() {
			document.title = "消息列表";
			this.type = this.$route.query.type;
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
			this.reminderCompleted();
			this.reminderUnCompleted();
		},
		methods: {
			reminderCompleted(){
				let userData = this.userData
				this.$axios.post('/api/com/reminderCompleted',userData).then(resp=>{
					console.log(resp.data.content.list)
					if(resp.data.code==200){
						this.reminderCompletedList = resp.data.content.list
						// alert("查询成功！")
					}else if(resp.data.code==555){
						//alert("失败！")
					}
				})
			},
			reminderUnCompleted(){
				let userData = this.userData
				this.$axios.post('/api/com/reminderUnCompleted',userData).then(resp=>{
					console.log(resp.data.content.list)
					if(resp.data.code==200){
						this.reminderUnCompletedList = resp.data.content.list
						// alert("查询成功！")
					}else if(resp.data.code==555){
						//alert("失败！")
					}
				})
			}
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