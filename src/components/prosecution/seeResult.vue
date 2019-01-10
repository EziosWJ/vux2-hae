<template>
	<!--S 被帮教人方案-->
	<div class="bg_fff">
		<div class="pd20 b_bom">
			帮教期限：2019-01-05至2019-06-04
		</div>
		
		<div >
			<div class="see_scheme_list pd20">
				<div class="ov">
					<div class="main_linear see_scheme_date fl">2019-01-05至2019-02-04</div>
				</div>
				<div class="evaluation_list">
					<ul>
						<li v-for="el in schemeList" v-if="type==1">
							<div class="evaluation_list_main" v-if="el.pin">
								<router-link :to="{path:'/phome/mindTestResult',query:{type:'55'}}">
									<div class="evaluation_list_title pr">
										{{el.name}}
										<span class="type_text c_orange">已完成</span>
									</div>
									<div class="report_item_box pdb20 pr">
										<div class="c_999 mt10">测评得分：{{el.fen}}分</div>
										<div class="c_999 mt10">截止日期：{{el.endDate}}</div>
										<div class="c_999 mt10">完成时间：{{el.subDate}}</div>
										<img class="gou_icon" src="../../assets/gou.png" />
									</div>
								</router-link>
							</div>
							<div class="evaluation_list_main" v-else>
								<router-link :to="{path:'/commentsScheme',query:{type:el.type}}">
									<div class="evaluation_list_title pr">
										{{el.name}}
										<span class="type_text c_orange">已完成</span>
									</div>
									<div class="report_item_box pdb20 pr">
										<div class="c_999 mt10">帮教人评分：{{el.fen}}分</div>
										<div class="c_999 mt10">截止日期：{{el.endDate}}</div>
										<div class="c_999 mt10">完成时间：{{el.subDate}}</div>
										<img class="gou_icon" src="../../assets/gou.png" />
									</div>
								</router-link>
							</div>
						</li>
						<li v-for="el in schemeList2" v-if="type==0">
							<div class="evaluation_list_main" v-if="el.pin">
								<router-link :to="{path:'/phome/mindTestResult',query:{type:'55'}}">
									<div class="evaluation_list_title pr">
										{{el.name}}
										<span class="type_text c_orange">已完成</span>
									</div>
									<div class="report_item_box pdb20 pr">
										<div class="c_999 mt10">测评得分：{{el.fen}}分</div>
										<div class="c_999 mt10">截止日期：{{el.endDate}}</div>
										<div class="c_999 mt10">完成时间：{{el.subDate}}</div>
										<img class="gou_icon" src="../../assets/gou.png" />
									</div>
								</router-link>
							</div>
							<div class="evaluation_list_main" v-else>
								<router-link :to="{path:'/commentsScheme',query:{type:el.type}}">
									<div class="evaluation_list_title pr">
										{{el.name}}
										<span class="type_text c_orange">已完成</span>
									</div>
									<div class="report_item_box pdb20 pr">
										<div class="c_999 mt10">帮教人评分：{{el.fen}}分</div>
										<div class="c_999 mt10">截止日期：{{el.endDate}}</div>
										<div class="c_999 mt10">完成时间：{{el.subDate}}</div>
										<img class="gou_icon" src="../../assets/gou.png" />
									</div>
								</router-link>
							</div>
						</li>
						<li>
							<div class="evaluation_list_main">
								<router-link :to="{path:'/phome/mindTestResult',query:{type:'90'}}">
									<div class="evaluation_list_title pr">
										7、二次心理测评
										<span class="type_text c_orange">已完成</span>
									</div>
									<div class="report_item_box pdb20 pr">
										<div class="c_999 mt10">测评得分：90分</div>
										<div class="c_999 mt10">截止日期：2018-12-15</div>
										<div class="c_999 mt10">完成时间：2018-12-10</div>
										<img class="gou_icon" src="../../assets/gou.png" />
									</div>
								</router-link>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="see_scheme_list pd20">
				<div class="ov">
					<div class="main_linear see_scheme_date fl">帮教结果</div>
				</div>
				<div class="evaluation_list">
					<ul>
						<li>
							<router-link to="/helpResults">
								<div class="evaluation_list_main">
									<div class="evaluation_list_title pr">
										帮教结果
									</div>
									<div class="report_item_box pdb20 pr" v-if="type==1">
										<div class="c_999 mt10">帮教均分：86.7分</div>
										<img class="result_icon" src="../../assets/004.png" />
									</div>
									<div class="report_item_box pdb20 pr" v-else>
										<div class="c_999 mt10">帮教均分：75分</div>
										<img class="result_icon" src="../../assets/003.png" />
									</div>
								</div>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="no_data_box mt40 pdb30" v-show="false">
			<img class="ma no_data_img" src="../../assets/no_data.png" />
			<div class="text_center mt20 f26 c_999">该帮教人还没有有帮教方案</div>
			<div class="no_data_btn main_linear">
				<router-link to="">立即定制方案</router-link>
			</div>
		</div>
	</div>
	<!--E 被帮教人方案-->
</template>

<script>
	export default {
		data() {
			return {
				userData: {}, //ucRole2检察官  ucRole3帮教人  ucRole4被帮教人  ucRole5家长
				type: '',
				schemeList: [{
						name: "1、观看法制微电影",
						type: '4',
						endDate: '2018-11-02',
						subDate: '2018-11-01',
						fen: '90'
					},
					{
						name: "2、法律法规学习",
						type: '4',
						endDate: '2018-12-02',
						subDate: '2018-12-01',
						fen: '85'
					},
					{
						name: "3、初次心理测评",
						type: '4',
						endDate: '2018-12-05',
						subDate: '2018-12-02',
						fen: '55',
						pin: true
					},
					{
						name: "4、法律法规学习",
						type: '4',
						endDate: '2018-12-14',
						subDate: '2018-12-03',
						fen: '85'
					},
					{
						name: "5、在线学习心理常识",
						type: '4',
						endDate: '2018-12-20',
						subDate: '2018-12-04',
						fen: '85'
					},
					{
						name: "6、晋祠公园义务劳动服务",
						type: '4',
						endDate: '2018-12-20',
						subDate: '2018-12-05',
						fen: '85'
					},
				], //方案列表
				schemeList2: [{
						name: "1、观看法制微电影",
						type: '4',
						endDate: '2018-11-02',
						subDate: '2018-11-01',
						fen: '80'
					},
					{
						name: "2、法律法规学习",
						type: '4',
						endDate: '2018-12-02',
						subDate: '2018-12-01',
						fen: '75'
					},
					{
						name: "3、初次心理测评",
						type: '4',
						endDate: '2018-12-05',
						subDate: '2018-12-02',
						fen: '55',
						pin: true
					},
					{
						name: "4、法律法规学习",
						type: '4',
						endDate: '2018-12-14',
						subDate: '2018-12-03',
						fen: '85'
					},
					{
						name: "5、在线学习心理常识",
						type: '4',
						endDate: '2018-12-20',
						subDate: '2018-12-04',
						fen: '75'
					},
					{
						name: "6、晋祠公园义务劳动服务",
						type: '4',
						endDate: '2018-12-20',
						subDate: '2018-12-05',
						fen: '75'
					},
				], //方案列表
			};
		},

		mounted() {
			document.title = "被帮教人A的评测结果";
			this.type = this.$route.query.type;
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {

		},

	};
</script>

<style lang="less" scoped>
	.see_scheme_list {
		padding-left: 0.7rem;
		overflow: hidden;
		position: relative;
		.see_scheme_date {
			border-radius: 0.06rem;
			padding: 0 0.2rem;
			color: #fff;
			line-height: 0.5rem;
			margin-bottom: 0.1rem;
		}
	}
	
	.see_scheme_list:before {
		content: "";
		position: absolute;
		width: 0.1rem;
		left: 0.2rem;
		top: 0.3rem;
		height: 0.1rem;
		background-color: #fff;
		border: 0.1rem solid #2AE0A7;
		border-radius: 50%;
		z-index: 2;
	}
	
	.see_scheme_list:after {
		content: "";
		position: absolute;
		width: 1px;
		top: 0;
		left: 0.34rem;
		height: 100%;
		background-color: #2AE0A7;
	}
	
	.see_scheme_list:nth-child(1):after {
		top: 0.35rem;
	}
	.see_scheme_list:last-child:after {
		top: 0;
		height:1.4rem;
	}
	.evaluation_list {
		ul {
			li {
				padding: 0.16rem 0;
				position: relative;
			}
			li:before {
				content: "";
				position: absolute;
				left: -0.41rem;
				top: 30%;
				width: 0.12rem;
				height: 0.12rem;
				background-color: #2AE0A7;
				border-radius: 50%;
				margin-top: 0;
				z-index: 10;
			}
			li.no_star {
				color: #999;
			}
			li.no_star:before {
				border-color: #ccc;
			}
			li.no_star:after {
				background-color: #ccc;
			}
			.evaluation_list_main {
				position: relative;
				padding: 0 0.2rem;
				border-radius: 0.1rem;
				font-size: 0.23rem;
				box-shadow: 0 0 5px #ccc;
				.evaluation_list_title {
					padding: 0.15rem 0;
					font-size: 0.26rem;
					padding-right: 1rem;
					background: url(../../assets/aorrow_right.png) no-repeat right 0.22rem;
					background-size: 0.14rem;
					border-bottom: 1px dashed #eee;
					.type_text {
						position: absolute;
						right: 0.2rem;
						top: 0.15rem;
						font-size: 0.24rem;
					}
				}
				.report_item_box {
					padding-top: 0.1rem;
				}
				.xing_img {
					float: left;
					margin-left: 0.1rem;
					overflow: hidden;
					img {
						float: left;
						width: 0.3rem;
					}
				}
			}
			.evaluation_list_main:before {
				content: "";
				width: 0.26rem;
				height: 0.35rem;
				position: absolute;
				top: 30%;
				margin-top: -0.17rem;
				left: -0.26rem;
				background: url(../../assets/arrow_left.png) no-repeat right center;
				background-size: 100% auto;
			}
			.gou_icon {
				position: absolute;
				width: 0.6rem;
				right: 0.2rem;
				top: 50%;
				margin-top: -0.3rem;
			}
			.result_icon {
				position: absolute;
				width: 1rem;
				right: 0rem;
				top: 50%;
				transform: translateY(-50%);
				-webkit-transform: translateY(-50%);
			}
		}
	}
</style>