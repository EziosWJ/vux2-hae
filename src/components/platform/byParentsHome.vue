<template>
	<div>
		<!--S 轮播-->
		<div>
			<img class="wid100" src="../../assets/persuasion_img.jpg"/>
		</div>
		<!--E 轮播-->
		
		<!--S 我的方案-->
		<div class="programme_box bg_fff">
			<!--S 暂无方案-->
			<!--<div class="programme_title line30 pd20 b_bom">
				<span class="f28">我的方案</span>
			</div>
			<div class="no_data_box mt40 pdb30" v-show="false">
				<img class="ma no_data_img" src="../../assets/no_data.png"/>
				<div class="text_center mt20 f26 c_999">该帮教人还有帮教方案</div>
				<div class="no_data_btn main_linear">
					<router-link to="">立即定制方案</router-link>
				</div>
			</div>-->
			<!--E 暂无方案-->
			
			<div class="programme_title line30 pd20 b_bom">
				<span class="f28">12001的方案</span><span class="f26 c_666 ml10">(共8条计划，已完成3条)</span>
			</div>
			<div class="evaluation_list pd20">
				<ul>
					<li>
						<div class="evaluation_list_main">
							<router-link :to="{path:'/commentsScheme',query:{type:4}}">
								<div class="evaluation_list_title pr">
									1、观看法制微电影
									<span class="type_text c_orange">已完成</span>
								</div>
								<div class="report_item_box pdb20 pr">
									<div class="c_999 mt10">帮教人评分：85分</div>
									<div class="c_999 mt10">完成日期：2018-11-20</div>
									<div class="c_999 mt10">截止日期：2018-11-25</div>
									<img class="gou_icon" src="../../assets/gou.png"/>
								</div>
							</router-link>
						</div>
					</li>
					<li>
						<div class="evaluation_list_main">
							<router-link to="/phome/mindTestResult">
								<div class="evaluation_list_title ellipsis pr">
									2、初次心理评测
									<span class="type_text c_orange">已完成</span>
								</div>
								<div class="report_item_box pdb20">
									<div class="c_999 mt10">测评得分：85分</div>
									<div class="c_999 mt10">完成日期：2018-11-20</div>
									<div class="c_999 mt10">截止日期：2018-11-25</div>
									<img class="gou_icon" src="../../assets/gou.png"/>
								</div>
							</router-link>
						</div>
					</li>
					<li>
						<div class="evaluation_list_main">
							<router-link :to="{path:'/commentsScheme',query:{type:3}}">
								<div class="evaluation_list_title ellipsis pr">
									3、晋源二社区劳动服务
									<span class="type_text c_red">未完成</span>
								</div>
								<div class="report_item_box pdb20">
									<div class="c_999 mt10">截止日期：2018-12-10</div>
								</div>
							</router-link>
						</div>
					</li>
					<li>
						<div class="evaluation_list_main">
							<router-link :to="{path:'/commentsScheme',query:{type:1}}">
								<div class="evaluation_list_title ellipsis pr">
									4、法律法规学习
									<span class="type_text main_color">进行中</span>
								</div>
								<div class="report_item_box pdb20">
									<div class="c_999 mt10">截止日期：2018-12-10</div>
								</div>
							</router-link>
						</div>
					</li>
				</ul>
			</div>
			<div class="pdb30">
				<div class="small_btn ma">
					<router-link to="/myProgramme">查看全部</router-link>
				</div>
			</div>
			
		</div>
			
		<!--E 我的方案-->
		
		
		<!--S 其他服务-->
		<div class="block_box">
			<div class="block_title">其他服务</div>
			<div class="other_main">
				<ul>
					<li v-for="item in otherList">
						<div class="other_list">
							<router-link :to="item.path">
								<div class="other_icon"><img :src="item.icon" /></div>
								<div class="other_text">{{item.name}}</div>
							</router-link>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--E 其他服务-->

		<!--S 联系检察官-->
		<div class="prosecution_phone">
			<a href="tel:0351-9999999">
				<p>联系检察官</p>
			</a>
		</div>
		<!--E 联系检察官-->

		<!--S 工作室介绍-->
		<div class="block_box">
			<div class="block_title">工作室介绍</div>
			<div class="introduction_box">
				<router-link to="/PHomeDetails">
					<div class="introduction_img">
						<img src="../../assets/introduction_img.png" />
					</div>
					<div class="introduction_text">
						静芳工作室是太原市晋源区人民检察院便民服务平台，主要功能是法制宣传、帮教等。在一代又一代未检人的接力下
						<span class="introduction_more bg_fff">详细》</span>
					</div>
				</router-link>
				<div class="introduction_list">
					<ul>
						<li class="introduction_list1">
							<a href="tel:0351-88866655">0351-88866655</a>
						</li>
						<li class="introduction_list2">jingfanggongzuoshi@163.com</li>
						<li class="introduction_list3">地址：太原市晋源区人民检察院</li>
					</ul>
				</div>
			</div>
		</div>
		<!--E 工作室介绍-->
		<!--S 底部导航-->
		<div class="foot_out">
			<div class="foot_box">
				<ul>
					<li>
						<div class="foot_icon">
							<img src="../../assets/foot_icon1_2.png" />
						</div>
						<div class="foot_text active">首页</div>
					</li>
					<li>
						<router-link to="/pperson">
							<div class="foot_icon">
								<img src="../../assets/foot_icon2.png" />
							</div>
							<div class="foot_text">通讯</div>
						</router-link>
					</li>
					<li>
						<router-link to="/pmine">
							<div class="foot_icon">
								<img src="../../assets/foot_icon3.png" />
							</div>
							<div class="foot_text">我的</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!--E 底部导航-->
	</div>
</template>

<script>
	import Swiper from 'swiper'; //引入swiper
	export default {
		data() {
			return {
				userData: {}, //ucRole2检察官  ucRole3帮教人  ucRole4被帮教人  ucRole5家长
				imgList: [], //轮播列表
				otherList: [{
					name: '奖惩记录',
					path: '/phome/rewardsPenalties/rewardsPenalties',
					icon: require('../../assets/other_icon2.png')
				}, {
					name: '帮教结果',
					path: '/phome/result',
					icon: require('../../assets/other_icon9.png')
				}], 
			};
		},
		components: {
			Swiper
		},
		mounted() {
			document.title = "12001的家长";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {

		},

	};
</script>

<style lang="less" scoped>

	.gou_icon{
		position: absolute;
		width:0.6rem;
		right: 0.2rem;
		top:50%;
		margin-top: -0.3rem;
	}
	/*S 公用*/
	
	.block_box {
		margin-top: 0.2rem;
		background-color: #fff;
		padding: 0.2rem;
		.block_title {
			padding-left: 0.2rem;
			line-height: 1.2em;
			border-left: 4px solid #2ae0a7;
			font-size: 0.28rem;
		}
	}
	/*E 公用*/
	/*S 其他服务*/
	
	.other_main {
		ul {
			overflow: hidden;
			li {
				float: left;
				width: 50%;
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
	
	.prosecution_phone {
		border-top: 1px dashed #eee;
		line-height: 0.8rem;
		font-size: 0.26rem;
		text-align: center;
		background-color: #fff;
		a {
			display: block;
		}
		p {
			display: inline-block;
			padding-left: 0.4rem;
			background: url(../../assets/phone.png) no-repeat left center;
			background-size: 0.26rem auto;
		}
	}
	/*S 工作室介绍*/
	
	.introduction_box {
		margin-top: 0.25rem;
		.introduction_img {
			border-radius: 0.1rem;
			overflow: hidden;
			img {
				width: 100%;
			}
		}
		.introduction_text {
			margin-top: 0.25rem;
			font-size: 0.22rem;
			display: -webkit-box;
			line-height: 1.5em;
			height: 2.9em;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			position: relative;
			border-bottom: 1px solid #eee;
			padding-bottom: 0.25rem;
			.introduction_more {
				position: absolute;
				right: 0;
				bottom: 0.23rem;
				color: #fbb03b;
			}
		}
		.introduction_list {
			ul {
				li {
					margin-top: 0.14rem;
					font-size: 0.22rem;
					padding-left: 0.4rem;
					background: no-repeat left center;
					background-size: 0.3rem auto;
				}
				.introduction_list1 {
					background-image: url(../../assets/info_icon1.png);
				}
				.introduction_list2 {
					background-image: url(../../assets/info_icon2.png);
				}
				.introduction_list3 {
					background-image: url(../../assets/info_icon3.png);
				}
			}
		}
	}
	.evaluation_list{
			ul{
				li{
					padding:0.16rem 0;
					padding-left: 0.5rem;
					position: relative;
				}
				li:before{
					content: "";
					position: absolute;
					left: 0;
					top: 30%;
					width: 0.1rem;
					height: 0.1rem;
					border: 0.06rem solid #2AE0A7;
					border-radius: 50%;
					background-color: #fff;
					margin-top: -0.05rem;
					z-index: 10;
				}
				li:after{
					content: "";
					position: absolute;
					left: 0.11rem;
					top: 0;
					width: 1px;
					height: 100%;
					background-color: #2AE0A7;
				}
				li:first-child:after{
					height: 70%;
					top: auto;
					bottom: 0;
				}
				li:last-child:after{
					height: 30%;
					top: 0;
				}
				.evaluation_list_main{				
					position: relative;
					padding:0 0.2rem;
					border-radius: 0.1rem;
					font-size: 0.23rem;
					box-shadow: 0 0 5px #ccc;
					.evaluation_list_title{
						padding: 0.15rem 0;
						font-size: 0.26rem;
						padding-right: 1rem;
						background: url(../../assets/aorrow_right.png) no-repeat right 0.22rem;
						background-size: 0.14rem;
						border-bottom: 1px dashed #eee;
						.type_text{
							position: absolute;
							right:0.2rem;
							top: 0.15rem;
							font-size: 0.24rem;
						}
					}
					.report_item_box{
						padding-top: 0.1rem;
					}
					.xing_img{
						float: left;
						margin-left: 0.1rem;
						overflow: hidden;
						img{
							float: left;
							width: 0.3rem;
						}
					}
				}
				.evaluation_list_main:before{
					content: "";
					width:0.26rem;
					height: 0.35rem;
					position: absolute;
					top: 30%;
					margin-top: -0.17rem;
					left: -0.26rem;
					background:url(../../assets/arrow_left.png) no-repeat right center;
					background-size: 100% auto;
				}
			}
		}
	/*E 工作室介绍*/
</style>
<style lang="less" scoped>
	.foot_out {
		height: 0.9rem;
	}
	
	.foot_box {
		position: fixed;
		z-index: 100;
		width: 100%;
		background-color: #fff;
		left: 0;
		bottom: 0;
		border-top: 1px solid #F4F4F4;
		ul {
			overflow: hidden;
			li {
				float: left;
				width: 33.3%;
				text-align: center;
				padding: 0.07rem 0;
				font-size: 0.2rem;
				line-height: 0.3rem;
				.foot_icon {
					width: 0.45rem;
					margin: 0 auto;
					img {
						width: 100%;
					}
					;
				}
				.foot_text.active {
					color: #19d5d7;
				}
			}
		}
	}
</style>