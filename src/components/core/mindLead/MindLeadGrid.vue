<template>
	<!--S 心理疏导-->
	<div class="evaluation_out">
		<div class="evaluation_banner">
			<img src="../../../assets/persuasion_img.jpg" />
		</div>
		<div class="evaluation_tab">
			<ul>
				<li @click="active=0" :class="{'active':active==0}">疏导进程</li>
				<li @click="active=1" :class="{'active':active==1}">疏导记录</li>
			</ul>
		</div>
		<div class="evaluation_content" v-show="active==0">
			<div class="evaluation_num">共3条内容</div>
			<div class="evaluation_list">
				<ul>
					<li>
						<div class="persuasion_top ov">
							<div class="fl persuasion_name">被疏导人：李杰</div>
							<div class="fr persuasion_by_name">帮教人：王梅</div>
						</div>
						<div class="persuasion_bom ov">
							<div class="fl persuasion_time">2018-02-02</div>
							<div class="fr color_orange">进行中</div>
						</div>
					</li>
					<li>
						<div class="persuasion_top ov">
							<div class="fl persuasion_name">被疏导人：李杰</div>
							<div class="fr persuasion_by_name">帮教人：王梅</div>
						</div>
						<div class="persuasion_bom ov">
							<div class="fl persuasion_time">2018-02-02</div>
							<div class="fr">准备开始</div>
						</div>
					</li>
					<li>
						<div class="persuasion_top ov">
							<div class="fl persuasion_name">被疏导人：李杰</div>
							<div class="fr persuasion_by_name">帮教人：王梅</div>
						</div>
						<div class="persuasion_bom ov">
							<div class="fl persuasion_time">2018-02-02</div>
							<div class="fr color_orange">进行中</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="persuasion_btn_out">
				<div class="persuasion_btn">
					<router-link to="/phome/mindLead/applyLead">新建疏导活动</router-link>
				</div>
			</div>
		</div>
		<!--S 疏导记录-->
		<div class="evaluation_content" v-show="active==1">
			<div class="evaluation_num">共3条内容</div>
			<div class="adjusted_list">
				<ul>
					<li>
						<router-link to="/phome/mindTestResult">
							<div class="adjusted_icon"><img src="../../../assets/persuasion_good.png" /></div>
							<div class="adjusted_main">
								<div class="adjusted_text">被疏导人：李杰</div>
								<div class="adjusted_name color_999">帮教人：王梅</div>
							</div>
							<div class="ov adjusted_info">
								<div class="fl adjusted_time">2018-02-02</div>
								<div class="fr adjusted_btn">详细结果</div>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="/phome/mindTestResult">
							<div class="adjusted_icon"><img src="../../../assets/persuasion_general.png" /></div>
							<div class="adjusted_main">
								<div class="adjusted_text">被疏导人：李杰</div>
								<div class="adjusted_name color_999">帮教人：王梅</div>
							</div>
							<div class="ov adjusted_info">
								<div class="fl adjusted_time">2018-02-02</div>
								<div class="fr adjusted_btn">详细结果</div>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="/phome/mindTestResult">
							<div class="adjusted_icon"><img src="../../../assets/persuasion_general.png" /></div>
							<div class="adjusted_main">
								<div class="adjusted_text">被疏导人：李杰</div>
								<div class="adjusted_name color_999">帮教人：王梅</div>
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
		<!--E 疏导记录-->
	</div>
	<!--E 心理疏导-->
</template>

<script>
export default {
	data() {
		return {
			active:0,
		}
	},
	mounted() {
		document.title="心理疏导"
	},
	methods: {
		
	},
	
};
</script>
<style lang="less" scoped>
.color_orange{
	color: #ff991d;
}
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
	padding: 0 0.25rem;
	.evaluation_num{
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
	.persuasion_btn_out{
		height: 0.7rem;
		.persuasion_btn{
			position: fixed;
			font-size: 0.26rem;
			width: 100%;
			left: 0;
			bottom: 0;
			text-align: center;
			color: #fff;
			line-height: 0.7rem;
			background: -webkit-linear-gradient(left,#2ae0a7, #17d7d1); 
		  background: -o-linear-gradient(right,#2ae0a7, #17d7d1);
		  background: -moz-linear-gradient(right,#2ae0a7, #17d7d1); 
		  background: linear-gradient(to right,#2ae0a7, #17d7d1);
		  a{
		  	display: block;
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
					padding-right: 1rem;
					padding-bottom: 0.1rem;
					.adjusted_text{
						font-size: 0.23rem;
						position: relative;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					.adjusted_name{
						font-size: 0.23rem;
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