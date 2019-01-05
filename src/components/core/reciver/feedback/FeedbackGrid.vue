<template>
	<!--S 反馈处理-->
	<div class="evaluation_out">
		<div class="evaluation_banner">
			<img src="../../../../assets/common-banner.png" />
		</div>
		<div class="evaluation_tab">
			<ul>
				<li @click="active=0" :class="{'active':active==0}">新反馈</li>
				<li @click="active=1" :class="{'active':active==1}">处理记录</li>
			</ul>
		</div>
		<!--S 评测内容-->
		<div class="evaluation_content" v-show="active==0">
			<div class="evaluation_list">
				<div class="feedback_data">2018年11月10日 共2条反馈</div>
				<ul>
					<li>
						<div class="evaluation_list_main ">
							<div class="feedback_title ov">
								<div class="evaluation_list_title fl">来自<span>李杰</span>的反馈</div>
								<div class="adjusted_btn fr">处理</div>
							</div>
							<div class="feedback_text">感谢静芳工作室的帮助！</div>
						</div>
					</li>
					<li>
						<div class="evaluation_list_main ">
							<div class="feedback_title ov">
								<div class="evaluation_list_title fl">来自<span>李杰</span>的反馈</div>
								<div class="adjusted_btn fr">处理</div>
							</div>
							<div class="feedback_text">感谢静芳工作室的帮助！</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="evaluation_list">
				<div class="feedback_data">2018年11月10日 共2条反馈</div>
				<ul>
					<li>
						<div class="evaluation_list_main ">
							<div class="feedback_title ov">
								<div class="evaluation_list_title fl">来自<span>李杰</span>的反馈</div>
								<div class="adjusted_btn fr">处理</div>
							</div>
							<div class="feedback_text">感谢静芳工作室的帮助！</div>
						</div>
					</li>
					<li>
						<div class="evaluation_list_main ">
							<div class="feedback_title ov">
								<div class="evaluation_list_title fl">来自<span>李杰</span>的反馈</div>
								<div class="adjusted_btn fr">处理</div>
							</div>
							<div class="feedback_text">感谢静芳工作室的帮助！</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--E 评测内容-->
		<!--S 已完成评测-->
		<div class="evaluation_content" v-show="active==1">
			<div class="feedback_list">
				<div class="feedback_data">2018年11月 共3条反馈</div>
				<ul>
					<li>
						<div class="feedback_list_title fl">来自<span>李杰</span>的反馈</div>
						<div class="fr color_999">2018-02-02</div>
					</li>
					<li>
						<div class="feedback_list_title fl">来自<span>李杰母亲</span>的反馈</div>
						<div class="fr color_999">2018-02-02</div>
					</li>
					<li>
						<div class="feedback_list_title fl">来自<span>李杰</span>的反馈</div>
						<div class="fr color_999">2018-02-02</div>
					</li>
				</ul>
			</div>
			<div class="feedback_list">
				<div class="feedback_data">2018年11月 共2条反馈</div>
				<ul>
					<li>
						<div class="feedback_list_title fl">来自<span>李杰</span>的反馈</div>
						<div class="fr color_999">2018-02-02</div>
					</li>
					<li>
						<div class="feedback_list_title fl">来自<span>李杰</span>的反馈</div>
						<div class="fr color_999">2018-02-02</div>
					</li>
				</ul>
			</div>
		</div>
		<!--E 已完成评测-->
	</div>
	<!--E 反馈处理-->
</template>

<script>
export default {
	data() {
		return {
			active:0,
			dataList:[],//评测内容列表
			adjustedList:[],//已评测列表
			mindLeadList: []
		}
	},
	methods: {
		getMindLeadList() {
			this.$axios
				.post("/api/eduplan/getMindLeadList")
				.then(resp => {
					if(resp.data.code === 200) {
						console.log(resp.data.content.mindLeadList);
						this.mindLeadList = resp.data.content.mindLeadList
					}
				})
				.catch(error => {
					console.log(error);
				});
		}
	},
	mounted() {
		document.title="反馈处理";
//		this.getMindLeadList()
	}
};
</script>
<style lang="less" scoped>
.color_999{
	color: #999;
}
.evaluation_out{
	background-color: #fff;
	padding-bottom: 0.3rem;
}
.evaluation_banner{
	img{
		width: 100%;
	}
}
.evaluation_tab{
	margin-top: 0.3rem;
	padding: 0 0.25rem;
	ul{
		overflow: hidden;
		border: 1px solid #2ae0a7;
		border-radius: 0.1rem;
		li{
			float: left;
			width: 50%;
			text-align: center;
			box-sizing: border-box;
			line-height: 0.6rem;
			font-size: 0.26rem;
		}
		li.active{
			background-color: #2AE0A7;
			color: #fff;
		}
		li:first-child{
			border-right: 1px solid #2AE0A7;
		}
	}
}
.evaluation_content{
	.evaluation_num{
		margin-top: 0.2rem;
	}
	.feedback_data{
		margin-top: 0.25rem;
		padding: 0 0.25rem;
		background-color: #f4f4f4;
		line-height: 0.6rem;
	}
	.evaluation_list{
		ul{
			padding: 0 0.25rem;
			li{
				padding:0.16rem 0;
				padding-left: 0.7rem;
				position: relative;
			}
			li:before{
				content: "";
				position: absolute;
				left: 0;
				top: 50%;
				width: 0.16rem;
				height: 0.16rem;
				border-radius: 50%;
				background-color: #2AE0A7;
				margin-top: -0.08rem;
			}
			li:after{
				content: "";
				position: absolute;
				left: 0.08rem;
				top: 0;
				width: 1px;
				height: 100%;
				background-color: #2AE0A7;
			}
			li:first-child:after{
				height: 50%;
				top: auto;
				bottom: 0;
			}
			li:last-child:after{
				height: 50%;
				top: 0;
			}
			.evaluation_list_main{				
				
				position: relative;
				padding: 0 0.2rem;
				border-radius: 0.1rem;
				font-size: 0.26rem;
				box-shadow: 0 0 5px #ccc;
				.feedback_title{
					border-bottom: 1px dashed #eee;
					line-height: 0.4rem;
					padding: 0.14rem 0;
				}
				.evaluation_list_title{
					
					color: #666;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					span{
						color: #333;
						margin: 0 0.05rem;
					}
				}
				.adjusted_btn{
					border: 1px solid #2AE0A7;
					color: #2AE0A7;
					border-radius: 2rem;
					padding: 0 0.15rem;
				}	
			}
			.evaluation_list_main:before{
				content: "";
				width:0.26rem;
				height: 0.35rem;
				position: absolute;
				top: 50%;
				margin-top: -0.17rem;
				left: -0.26rem;
				background:url(../../../../assets/arrow_left.png) no-repeat right center;
				background-size: 100% auto;
			}
			.feedback_text{
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
				font-size: 0.24rem;
				color: #666;
				padding: 0.14rem 0;
			}
		}
	}
	.feedback_list{
		ul{
			
			padding: 0 0.25rem;
			li{
				box-shadow: 0 0 5px #ccc;
				padding: 0.2rem;
				overflow: hidden;
				margin-top: 0.25rem;
				border-radius: 0.1rem;
				padding-right: 0.4rem;
				background: url(../../../../assets/aorrow_right.png) no-repeat 98% center;
				background-size: 0.18rem;
				.feedback_list_title{
					color: #666;
					padding-left: 0.2rem;
					position: relative;
					span{
						color: #333;
						margin: 0 0.05rem;
					}
				}
				.feedback_list_title:before{
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					margin-top: -0.05rem;
					width: 0.1rem;
					height: 0.1rem;
					border-radius: 50%;
					background-color: #2AE0A7;
				}
			}
		}
	}
	
}
</style>