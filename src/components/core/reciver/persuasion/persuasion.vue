<template>
	<!--S 心理疏导-->
	<div class="evaluation_out">
		<div class="evaluation_banner">
			<img src="../../../../assets/persuasion_img.jpg" />
		</div>
		<div class="evaluation_tab">
			<ul>
				<li @click="active=0" :class="{'active':active==0}">疏导进程</li>
				<li @click="active=1" :class="{'active':active==1}">疏导记录</li>
			</ul>
		</div>
		<!--S 评测内容-->
		<div class="evaluation_content" v-show="active==0">
			<div class="evaluation_list">
				<ul>
					<li>
						<router-link to="">
							<div class="evaluation_list_main">
								<div class="evaluation_list_title">准备开始</div>
								<span>2018-02-02</span>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<div class="evaluation_list_main ">
								<div class="evaluation_list_title color_orange">进行中</div>
								<span>2018-02-02</span>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<div class="evaluation_list_main">
								<div class="evaluation_list_title">准备开始</div>
								<span>2018-02-02</span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!--E 评测内容-->
		<!--S 已完成评测-->
		<div class="evaluation_content" v-show="active==1">
			<div class="evaluation_num">共3条内容</div>
			<div class="adjusted_list">
				<ul>
					<li>
						<router-link to="/phome/mindTestResult">
							<div class="adjusted_icon"><img src="../../../../assets/risk_icon1.png" /></div>
							<div class="adjusted_main">
								<div class="adjusted_text">帮教人：李梅</div>
							</div>
							<div class="ov adjusted_info">
								<div class="fl adjusted_time">2018-02-02</div>
								<div class="fr adjusted_btn">详细结果</div>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="/phome/mindTestResult">
							<div class="adjusted_icon"><img src="../../../../assets/risk_icon2.png" /></div>
							<div class="adjusted_main">
								<div class="adjusted_text">帮教人：李梅</div>
							</div>
							<div class="ov adjusted_info">
								<div class="fl adjusted_time">2018-02-02</div>
								<div class="fr adjusted_btn">详细结果</div>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!--E 已完成评测-->
	</div>
	<!--E 心理疏导-->
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
		document.title="心理疏导";
//		this.getMindLeadList()
	}
};
</script>
<style lang="less" scoped>
.color_orange{
	color: #FF991D;
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
	padding: 0 0.25rem;
	.evaluation_num{
		margin-top: 0.2rem;
	}
	.evaluation_list{
		
		ul{
			margin-top: 0.2rem;
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
				line-height: 0.8rem;
				position: relative;
				padding: 0 0.2rem;
				border-radius: 0.1rem;
				font-size: 0.26rem;
				box-shadow: 0 0 5px #ccc;
				.evaluation_list_title{
					padding-right: 1.3rem;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				span{
					position: absolute;
					right: 0.2rem;
					top: 0;
					color: #999;
					font-size: 0.22rem;
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
					padding-bottom: 0.1rem;
					.adjusted_text{
						padding-left: 0.14rem;
						font-size: 0.26rem;
						position: relative;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					.adjusted_text:after{
						content: "";
						position: absolute;
						width: 0.06rem;
						height: 0.06rem;
						background-color: #333;
						top: 50%;
						margin-top: -0.03rem;
						left: 0;
						border-radius: 50%;
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
</style>