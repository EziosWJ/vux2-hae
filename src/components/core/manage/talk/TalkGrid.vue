<template>
	<!--S 谈话教育-->
	<div class="evaluation_out leave_out">
		<div class="evaluation_banner">
			<img src="../../../../assets/inquisitor_banner.jpg" v-if="userData.ucRole==2 || userData.ucRole==1" />
			<img src="../../../../assets/education_banner.jpg" v-else-if="userData.ucRole==3" />
		</div>
		<div class="evaluation_tab">
			<ul>
				<li @click="active=0" :class="{'active':active==0}">新建谈话</li>
				<li @click="active=1" :class="{'active':active==1}">谈话记录</li>
			</ul>
		</div>
		<div class="evaluation_content " v-show="active==0">			
			<group label-width="5em">
				<div class="diversion_results"><h3>信息填写</h3></div>
				<popup-picker title="被帮教人" :data="tutoredPersonsList" v-model="tutoredPersons" placeholder="请选择"></popup-picker>
				<popup-picker title="登记人" :data="channelPeopleList" v-model="channelPeople" placeholder="请选择"></popup-picker>
				<datetime title="日期选择" v-model="deductionDate" placeholder="请选择"></datetime>
			</group>
			<div class="diversion_results diversion_results_title ov">
				<div class="fl">谈话记录</div>
			</div>
			<div class="diversion_textarea">
				<textarea placeholder="请输入谈话记录"></textarea>
			</div>
			<div class="persuasion_btn">提交</div>
		</div>
		<!--S 谈话记录-->
		<div class="evaluation_content evaluation_content2" v-show="active==1">
			<div class="evaluation_num">共3条内容</div>
			<div class="evaluation_list">
				<ul>
					<li>
						<div class="persuasion_top ov">
							<div class="fl persuasion_name">被帮教人：12001</div>
						</div>
						<div class="persuasion_bom ov">
							<div class="fl persuasion_time">2018-02-02</div>
							<div class="fr adjusted_btn"><router-link to="/esultsVisit">谈话记录</router-link></div>
						</div>
					</li>
					<li>
						<div class="persuasion_top ov">
							<div class="fl persuasion_name">被帮教人：12002</div>
						</div>
						<div class="persuasion_bom ov">
							<div class="fl persuasion_time">2018-02-02</div>
							<div class="fr adjusted_btn"><router-link to="/esultsVisit">谈话记录</router-link></div>
						</div>
					</li>
					<li>
						<div class="persuasion_top ov">
							<div class="fl persuasion_name">被帮教人：12003</div>
						</div>
						<div class="persuasion_bom ov">
							<div class="fl persuasion_time">2018-02-02</div>
							<div class="fr adjusted_btn"><router-link to="/esultsVisit">谈话记录</router-link></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--E 谈话记录-->
		<div class="persuasion_btn_out"></div>
	</div>
	<!--E 谈话教育-->
</template>

<script>
	import { Group, PopupPicker, Datetime } from 'vux'
	export default {
		data() {
			return {
				userData: {},
				active: 0,
				tutoredPersons: [], //被帮教人
				tutoredPersonsList: [
					['12001', '12002', '12003', '12004']
				], //被帮教人列表
				channelPeople: [], //登记人
				channelPeopleList: [
					['帮教人A', '帮教人B', '帮教人C', '帮教人D']
				], //登记人列表
				deductionDate: '', //请假日期
				diversionResultsList: null, //疏导结果
			}
		},
		components: {
			Group,
			PopupPicker,
			Datetime
		},
		mounted() {
			document.title = "谈话教育";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {

		},

	};
</script>
<style lang="less" scoped>
.color_orange {
	color: #ff991d;
}

.color_999 {
	color: #999;
}

.evaluation_out {
	background-color: #fff;
	padding-bottom: 0.3rem;
}

.evaluation_banner {
	img {
		width: 100%;
	}
}

.evaluation_tab {
	margin-top: 0.3rem;
	padding: 0 0.25rem;
	ul {
		overflow: hidden;
		border: 1px solid #2ae0a7;
		border-radius: 0.1rem;
		li {
			float: left;
			width: 50%;
			text-align: center;
			box-sizing: border-box;
			line-height: 0.6rem;
			font-size: 0.26rem;
		}
		li.active {
			background-color: #2AE0A7;
			color: #fff;
		}
		li:first-child {
			border-right: 1px solid #2AE0A7;
		}
	}
}

.evaluation_content {
	padding: 0 0.25rem;
	.evaluation_num {
		margin-top: 0.2rem;
	}
	.evaluation_list{
		ul{
			li{
				margin-top: 0.25rem;
				box-shadow: 0 0 5px #ccc;
				position: relative;
				border-radius: 0.1rem;
				padding: 0.2rem;
				.adjusted_btn{
					border: 1px solid #2AE0A7;
					color: #2AE0A7;
					border-radius: 2rem;
					padding: 0 0.15rem;
				}
				.persuasion_top{
					font-size: 0.23rem;
					border-bottom: 1px dashed #eee;
					padding-bottom: 0.2rem;
					.persuasion_name{
						position: relative;
						padding-left: 0.2rem;
					}
					.persuasion_name:before{
						content: "";
						position: absolute;
						left: 0;
						top: 50%;
						margin-top: -0.05rem;
						width: 0.1rem;
						height: 0.1rem;
						background-color: #2AE0A7;
						border-radius: 50%;
					}
					.persuasion_by_name{
						color: #999;
					}
				}
				.persuasion_bom{
					font-size: 0.22rem;
					margin-top: 0.2rem;
					.persuasion_time{
						color: #999;
					}
				}
			}
		}
	}
	.persuasion_btn_out {
		height: 0.7rem;
	}
	.persuasion_btn {
		position: fixed;
		font-size: 0.26rem;
		width: 100%;
		left: 0;
		bottom: 0;
		text-align: center;
		color: #fff;
		line-height: 0.7rem;
		background: -webkit-linear-gradient(left, #2ae0a7, #17d7d1);
		background: -o-linear-gradient(right, #2ae0a7, #17d7d1);
		background: -moz-linear-gradient(right, #2ae0a7, #17d7d1);
		background: linear-gradient(to right, #2ae0a7, #17d7d1);
		a {
			display: block;
		}
	}
	.adjusted_list{
		ul{
			li{
				margin-top: 0.25rem;
				box-shadow: 0 0 5px #ccc;
				border-radius: 0.1rem;
				padding: 0 0.2rem;
				padding-top: 0.7rem;
				position: relative;
				.adjusted_icon{
					position: absolute;
					left: -0.12rem;
					top: 0.2rem;
					img{
						width: 1.2rem;
					}
				}
				.adjusted_main{
					border-bottom: 1px dashed #eee;
					position: relative;
					padding-right: 1rem;
					padding-bottom: 0.1rem;
					.adjusted_text{
						font-size: 0.26rem;
						position: relative;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					.adjusted_name{
						position: absolute;
						right: 0;
						top: 0;
					}
				}
				.adjusted_info{
					padding: 0.15rem 0;
					line-height: 0.4rem;
					.adjusted_time{
						font-size: 0.22rem;
						color: #999;
					}
					.adjusted_btn{
						border: 1px solid #2AE0A7;
						color: #2AE0A7;
						border-radius: 2rem;
						padding: 0 0.15rem;
					}
				}
			}
		}
	}
}

.evaluation_content2{
	background-color: #fff;
	padding:0.25rem!important;
	padding-top: 0!important;
	overflow: hidden;
	border-top: 1px solid #eee;
}
.diversion_results {
	background-color: #fff;
	padding: 10px 15px;
	font-size: 0.24rem;
	h3{
		padding-left: 0.16rem;
		line-height: 1.2em;
		border-left: 4px solid #2AE0A7;
		font-size: 0.24rem;
	}
	.diversion_results_list{
		ul{
			li{
				float: left;
				padding: 0 10px;
				margin-left:10px;
				background-color: #f2f2f2;
				color: #999999;
				border-radius: 0.25rem;
			}
			li.active{
				background-color: #2AE0A7;
				color: #fff;
			}
		}
	}
}
.diversion_results_title{
	margin-top: 0.25rem;
	border-bottom: 1px solid #eee;
}

.diversion_textarea {
	textarea {
		width: 100%;
		box-sizing: border-box;
		border: 0 none;
		background-color: #fff;
		padding: 0.2rem;
		font-size: 0.24rem;
		line-height: 1.5em;
		height: 7.5em;
		min-height: 7.5em;
	}
}

.leave_out{
	background-color: inherit;
	.evaluation_content{
		padding: 0;
	}
	.evaluation_tab{
		margin-top: 0;
		padding: 0.25rem;
		background-color: #fff;
	}
}
</style>
<style lang="less">
.leave_out{
	.vux-no-group-title{
		margin-top: 0;
	}
	.weui-cells{
		font-size: 0.24rem;
	}
}
</style>