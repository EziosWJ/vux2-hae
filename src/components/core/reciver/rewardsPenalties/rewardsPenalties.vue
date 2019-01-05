<template>
	<!--S 奖惩管理-->
	<div class="evaluation_out">
		<div class="evaluation_banner">
			<img src="../../../../assets/persuasion_img.jpg" />
		</div>

		<div class="evaluation_content">
			<div class="reward_title">奖惩管理<span>（共2条）</span></div>
			<div class="evaluation_list">
				<ul>
					<li>
						<div class="persuasion_top ov">
							<div class="fl persuasion_name">对2019010101的奖励</div>
							<div class="fr persuasion_by_name">帮教人：BJR001</div>
						</div>
						<div class="ov adjusted_info">
							<div class="fl adjusted_time">2018-02-02</div>
							<div class="fr adjusted_btn">
								<router-link to="/esultsVisit">详细结果</router-link>
							</div>
						</div>
					</li>
					<li>
						<div class="persuasion_top ov">
							<div class="fl persuasion_name">对2019010101的奖励</div>
							<div class="fr persuasion_by_name">帮教人：BJR001</div>
						</div>
						<div class="ov adjusted_info">
							<div class="fl adjusted_time">2018-02-05</div>
							<div class="fr adjusted_btn">
								<router-link to="/esultsVisit">详细结果</router-link>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!--E 奖惩管理-->
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
			}
		},
		mounted() {
			document.title = "奖惩管理"
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
		.reward_title {
			margin-top: 0.2rem;
			padding-left: 0.2rem;
			line-height: 1.2em;
			border-left: 4px solid #2AE0A7;
			span {
				color: #999;
				font-size: 0.22rem;
			}
		}
		.evaluation_list {
			ul {
				li {
					margin-top: 0.25rem;
					box-shadow: 0 0 5px #ccc;
					position: relative;
					border-radius: 0.1rem;
					padding: 0.2rem;
					padding-bottom: 0;
					.persuasion_top {
						font-size: 0.23rem;
						border-bottom: 1px dashed #eee;
						padding-bottom: 0.2rem;
						.persuasion_name {
							position: relative;
							padding-left: 0.2rem;
						}
						.persuasion_name:before {
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
						.persuasion_by_name {
							color: #999;
						}
					}
					.adjusted_info {
						padding: 0.15rem 0;
						line-height: 0.4rem;
						.adjusted_time {
							font-size: 0.22rem;
							color: #999;
						}
						.adjusted_btn {
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