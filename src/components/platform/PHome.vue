<template>
	<div>
		<!--S 轮播-->
		<div class="swiper-container J_banner_swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="el in imgList">
					<a :href="el.url">
						<img :src="el.img" />
					</a>
				</div>
			</div>
			<div class="swiper-pagination J_banner_pagination"></div>
		</div>
		<!--E 轮播-->

		<!--S 导航按钮-->
		<div class="menu_list"  v-if="userData.ucRole==2 || userData.ucRole==3">
			<ul>
				<li>
					<router-link to="/phome/mindTestGrid">
						<div class="menu_img"><img src="../../assets/nav_icon1.png" /></div>
						<div class="menu_text">心理评测</div>
					</router-link>
				</li>
				<li>
					<router-link to="/phome/mindLeadGrid">
						<div class="menu_img"><img src="../../assets/nav_icon2.png" /></div>
						<div class="menu_text">心理疏导</div>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<div class="menu_img"><img src="../../assets/nav_icon3.png" /></div>
						<div class="menu_text">帮教方案</div>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<div class="menu_img"><img src="../../assets/nav_icon4.png" /></div>
						<div class="menu_text">风险评估</div>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<div class="menu_img"><img src="../../assets/nav_icon5.png" /></div>
						<div class="menu_text">评定意见</div>
					</router-link>
				</li>
				<li>
					<router-link to="/phome/checkInGrid">
						<div class="menu_img"><img src="../../assets/nav_icon6.png" /></div>
						<div class="menu_text">日常报到</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="menu_list"  v-else-if="userData.ucRole==4 || userData.ucRole==5">
			<ul>
				<li>
					<router-link to="/phome/mindTestGrid">
						<div class="menu_img"><img src="../../assets/nav_icon1.png" /></div>
						<div class="menu_text">心理评测</div>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<div class="menu_img"><img src="../../assets/nav_icon7.png" /></div>
						<div class="menu_text">在线教育</div>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<div class="menu_img"><img src="../../assets/nav_icon3.png" /></div>
						<div class="menu_text">帮教方案</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="menu_list"  v-else-if="userData.ucRole==4 || userData.ucRole==5">
			<ul>
				<li>
					<router-link to="/phome/mindTestGrid">
						<div class="menu_img"><img src="../../assets/nav_icon1.png" /></div>
						<div class="menu_text">心理评测</div>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<div class="menu_img"><img src="../../assets/nav_icon7.png" /></div>
						<div class="menu_text">在线教育</div>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<div class="menu_img"><img src="../../assets/nav_icon3.png" /></div>
						<div class="menu_text">帮教方案</div>
					</router-link>
				</li>
			</ul>
		</div>
		<!--E 导航按钮-->

		<!--S 其他服务-->
		<div class="block_box">
			<div class="block_title">其他服务</div>
			<div class="other_main" v-if="userData.ucRole==2 || userData.ucRole==3">
				<ul>
					<li v-for="(item,index) in otherList" v-if="index<otherNum">
						<div class="other_list">
							<router-link :to="item.path">
								<div class="other_icon"><img :src="item.icon" /></div>
								<div class="other_text">{{item.name}}</div>
							</router-link>
						</div>
					</li>
					<li v-if="otherNum==7" @click="otherNum=9999">
						<div class="other_list">
							<div class="other_icon"><img src="../../assets/other_icon8.png" /></div>
							<div class="other_text">全部</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="other_main" v-else-if="userData.ucRole==4 || userData.ucRole==5">
				<ul>
					<li v-for="item in otherListBy">
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
		<div class="prosecution_phone" v-if="userData.ucRole==4 || userData.ucRole==5">
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
						<span class="introduction_more">详细》</span>
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
						<router-link to="/phome">
							<div class="foot_icon">
								<img src="../../assets/foot_icon1_2.png" />
							</div>
							<div class="foot_text active">首页</div>
						</router-link>
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
				userData:{},//ucRole2检察官  ucRole3帮教人  ucRole4被帮教人  ucRole5家长
				imgList: [],//轮播列表
				otherNum: 7, //其他服务显示数量
				otherList: [{
					name: '帮教回访',
					path: '',
					icon: require('../../assets/other_icon1.png')
				}, {
					name: '奖惩管理',
					path: '',
					icon: require('../../assets/other_icon2.png')
				}, {
					name: '考察意见',
					path: '',
					icon: require('../../assets/other_icon3.png')
				}, {
					name: '社区服务',
					path: '',
					icon: require('../../assets/other_icon4.png')
				}, {
					name: '劳动教育',
					path: '',
					icon: require('../../assets/other_icon5.png')
				}, {
					name: '谈话教育',
					path: '',
					icon: require('../../assets/other_icon6.png')
				}, {
					name: '外出请假',
					path: '/phome/goOutGrid',
					icon: require('../../assets/other_icon7.png')
				}, {
					name: '走访调查',
					path: '',
					icon: require('../../assets/other_icon9.png')
				}, {
					name: '违规违纪',
					path: '',
					icon: require('../../assets/other_icon10.png')
				}, {
					name: '反馈处理',
					path: '',
					icon: require('../../assets/other_icon11.png')
				}], //其他服务2检察官3帮教人列表
				otherListBy: [{//其他服务4被帮教人5家长列表
					name: '心理疏导',
					path: '',
					icon: require('../../assets/other_icon6.png')
				}, {
					name: '奖惩管理',
					path: '',
					icon: require('../../assets/other_icon2.png')
				}, {
					name: '考察意见',
					path: '',
					icon: require('../../assets/other_icon3.png')
				}, {
					name: '帮教回访',
					path: '',
					icon: require('../../assets/other_icon1.png')
				},{
					name: '违规违纪',
					path: '',
					icon: require('../../assets/other_icon10.png')
				}, {
					name: '报到请假',
					path: '/phome/goOutGrid',
					icon: require('../../assets/other_icon7.png')
				}, {
					name: '帮教反馈',
					path: '',
					icon: require('../../assets/other_icon11.png')
				}, {
					name: '帮教结果',
					path: '',
					icon: require('../../assets/other_icon9.png')
				}],
			};
		},
		components: {
			Swiper
		},
		mounted() {
			document.title = "静芳工作室";
			this.getBannerList();//获取banner列表
			
			let userData=JSON.parse(localStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {
			bannerSwiper() {
				new Swiper('.J_banner_swiper', {
					loop: true,
					observer:true,
    			observeParents:true,
					autoplay: 2000,
				})
			},
			getBannerList(){
				this.$axios.post("/api/com/getCarouselList").then(res=>{
					if (res.data.code==200 && res.data.content) {
						this.imgList = res.data.content.imgList || [];
						this.$nextTick(()=>{
							this.bannerSwiper();//初始化swiper
						})
					}
				})
			},
			getBannerList(){
				this.$axios.post("/api/com/getCarouselList").then(res=>{
					if (res.data.code==200 && res.data.content) {
						this.imgList = res.data.content.imgList || [];
						this.$nextTick(()=>{
							this.bannerSwiper();//初始化swiper
						})
					}
				})
			}
		},

	};
</script>

<style lang="less" scoped>
	.fa {
		display: block;
		font-size: 24px;
	}
	/*S 轮播*/
	
	.J_banner_swiper {
		img {
			display: block;
			width: 100%;
		}
		.J_banner_pagination {
			bottom: 5px;
			.swiper-pagination-bullet {
				width: 10px;
				height: 10px;
			}
			.swiper-pagination-bullet-active {
				background: #23ddb6;
			}
		}
	}
	/*E 轮播*/
	/*S 导航菜单*/
	
	.menu_list {
		background-color: #fff;
		ul {
			overflow: hidden;
			li {
				float: left;
				width: 33.3%;
				padding: 0.3rem 0;
				text-align: center;
				box-sizing: border-box;
				border-right: 1px solid #f7f7f7;
				border-bottom: 1px solid #f7f7f7;
				font-size: 0.28rem;
				.menu_img {
					margin: 0 auto;
					width: 50%;
					img {
						width: 100%;
					}
				}
				.menu_text {
					margin-top: 0.2rem;
				}
			}
			li:nth-child(3n) {
				border-right: 0 none;
			}
		}
	}
	/*E 导航菜单*/
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
				width: 25%;
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
	
	.prosecution_phone{
		border-top: 1px dashed #eee;
		line-height: 0.8rem;
		font-size: 0.26rem;
		text-align:center;
		background-color: #fff;
		a{
			display: block;
		}
		p{
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
	/*E 工作室介绍*/
</style>
<style lang="less" scoped>
.foot_out{
	height: 0.9rem;
}	
.foot_box{
	position: fixed;
	z-index: 100;
	width: 100%;
	background-color: #fff;
	left: 0;
	bottom: 0;
	border-top: 1px solid #F4F4F4;
	ul{
		overflow: hidden;
		li{
			float: left;
			width: 33.3%;
			text-align: center;
			padding: 0.07rem 0;
			font-size: 0.2rem;
			line-height: 0.3rem;
			.foot_icon{
				width: 0.45rem;
				margin: 0 auto;
				img{
					width: 100%;
				};
			}
			.foot_text.active{
				color: #19d5d7;
			}
		}
	}
}
</style>