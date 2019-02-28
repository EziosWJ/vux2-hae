<template>
	<!--S 被帮教人方案-->
	<div>
		<!--S 其他服务-->
		<div class="block_box" style="margin-top: 0;">
			<div class="block_title">功能服务</div>
			<div class="other_main">
				<ul>
					<!--<li >
						<div class="other_list">
							<router-link to="/phome/mindTest">
								<div class="other_icon"><img src="../../assets/other_icon12.png" /></div>
								<div class="other_text">心理评测</div>
							</router-link>
						</div>
					</li>-->
					<li >
						<div class="other_list">
							<router-link to="/phome/talkGrid">
								<div class="other_icon"><img src="../../assets/other_icon6.png" /></div>
								<div class="other_text">谈话教育</div>
							</router-link>
						</div>
					</li>
					<li >
						<div class="other_list">
							<router-link to="/phome/rewardPunishGrid">
								<div class="other_icon"><img src="../../assets/other_icon2.png" /></div>
								<div class="other_text">奖惩管理</div>
							</router-link>
						</div>
					</li>
					<li >
						<div class="other_list">
							<router-link to="/phome/revisitGrid">
								<div class="other_icon"><img src="../../assets/other_icon1.png" /></div>
								<div class="other_text">帮教回访</div>
							</router-link>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--E 其他服务-->
		<div class="mt20 bg_fff">
			<div class="ov pd20 b_bom">
				<div class="block_title fl">帮教方案</div>
				
			</div>
			<div >
				<div class="see_scheme_list pd20">
					
					<div class="evaluation_list">
						<ul>
							<li v-for="el in EduplanList" :class="{'no_star':el.state==1}">
								<div class="evaluation_list_main" v-if="el.state==null">
									<div class="evaluation_list_title pr">
										{{el.name}}
										<span class="type_text c_999">未完成</span>
									</div>
									<div class="report_item_box pdb20">
										<div class="c_999 mt10">截止日期：{{el.dieDate}}</div>
									</div>
								</div>
								<div class="evaluation_list_main" v-else>
									<router-link :to="{path:'/commentsScheme',query:{state:el.state,id:el.id}}">
										<div class="evaluation_list_title pr">
											{{el.name}}
										
											<span class="type_text c_orange" v-if="el.state==2">已完成</span>
											<span class="type_text c_red " v-else-if="el.state==1">未完成</span>
										</div>
										<div class="report_item_box pdb20 pr">
										
											<div class="c_999 mt10">截止日期：{{el.dieDate}}</div>
											<div class="c_999 mt10" v-if="el.state==2">完成时间：{{el.finishedDate}}</div>
											<img v-if="el.state==2" class="gou_icon" src="../../assets/gou.png" />
										</div>
									</router-link>
								</div>
							</li> 
						</ul>
					</div>
					
				</div>
				
			</div>
			
		</div>
		
		<div class="no_data_box mt40 pdb30" v-show="false">
			<img class="ma no_data_img" src="../../assets/no_data.png" />
			<div class="text_center mt20 f26 c_999">该帮教人还有帮教方案</div>
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
				schemeList: [{
						name: "1、观看法制微电影",
						type: '2',
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
						type: '3',
						endDate: '2018-12-05',
						subDate: '',
						fen: ''
					},
					{
						name: "4、晋源区二社区劳动服务",
						type: '1',
						endDate: '2018-12-14',
						subDate: '',
						fen: ''
					},
					{
						name: "5、法制案例学习",
						type: '0',
						endDate: '2018-12-20',
						subDate: '',
						fen: ''
					},
					{
						name: "6、在线学习心理常识",
						type: '0',
						endDate: '2018-12-20',
						subDate: '',
						fen: ''
					},
					{
						name: "7、阅读学习未成年保护法",
						type: '0',
						endDate: '2018-12-22',
						subDate: '',
						fen: ''
					},
					{
						name: "8、晋祠公园义务劳动服务",
						type: '0',
						endDate: '2018-12-24',
						subDate: '',
						fen: ''
					},
				], //方案列表
				EduplanList:[],
			};
		},

		mounted() {
			document.title = "被帮教人A的方案";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
			this.urId = this.$route.query.urId;
			this.getEduplanListByUrId();
		},
		methods: {
			getEduplanListByUrId(){
				let urId=this.urId;
				console.log(urId);
				this.$axios.post('/api/eduplan/getEduplanListByUrId',{urId:urId}).then(resp=>{
					this.EduplanList=resp.data.content.list;
					console.log(resp.data);
				})
			}

		},

	};
</script>

<style lang="less" scoped>
	.see_scheme_list{
		padding-left: 0.7rem;
		overflow: hidden;
		position: relative;
		.see_scheme_date{
			border-radius: 0.06rem;
			padding: 0 0.2rem;
			color: #fff;
			line-height: 0.5rem;
			margin-bottom: 0.1rem;
		}
	}
	.see_scheme_list:before{
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
	.see_scheme_list:after{
		content: "";
		position: absolute;
		width: 1px;
		top: 0;
		left:0.34rem;
		height: 100%;
		background-color: #2AE0A7;
	}

	.see_scheme_list:nth-child(1):after{
		top: 0.35rem;
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
		}
	}
	/*S 公用*/
	
	.block_box {
		margin-top: 0.2rem;
		background-color: #fff;
		padding: 0.2rem;
	}
	.block_title {
		padding-left: 0.2rem;
		line-height: 1.2em;
		border-left: 4px solid #2ae0a7;
		font-size: 0.28rem;
	}
	/*E 公用*/
	
	/*S 其他服务*/
	
	.other_main {
		ul {
			overflow: hidden;
			li {
				float: left;
				width: 33.3%;
				box-sizing: border-box;
				padding: 0 0.1rem;
				text-align: center;
				margin-top: 0.2rem;
				font-size: 0.24rem;
				.other_list {
					background-color: #f4f4f4;
					padding: 0.2rem 0;
				}
				.other_text {
					margin-top: 0.05rem;
				}
				.other_icon img {
					width: 56%;
					margin: 0 auto;
				}
			}
		}
	}
	/*E 其他服务*/
</style>