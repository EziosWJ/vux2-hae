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
		<div class="menu_list">
			<ul>
				<li>
					<router-link to="/phome/mindTestGrid">
						<div class="menu_img"><img src="../../assets/nav_icon1.png" /></div>
						<div class="menu_text">心理评测</div>
					</router-link>
				</li>
				<li>
					<router-link to="">
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
					<router-link to="">
						<div class="menu_img"><img src="../../assets/nav_icon6.png" /></div>
						<div class="menu_text">日常报道</div>
					</router-link>
				</li>
			</ul>
		</div>
		<!--E 导航按钮-->
		
		<!--S 其他服务-->
		<div class="block_box">
			<div class="block_title">其他服务</div>
			<div class="other_main">
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
		</div>
		<!--E 其他服务-->
		
		<!--S 工作室介绍-->
		<div class="block_box">
			<div class="block_title">工作室介绍</div>
			
				<div class="introduction_box">
					<router-link to="">
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
							<li class="introduction_list1"><a href="tel:0351-88866655">0351-88866655</a></li>
							<li class="introduction_list2">jingfanggongzuoshi@163.com</li>
							<li class="introduction_list3">地址：太原市晋源区人民检察院</li>
						</ul>
					</div>
				</div>
			
			
		</div>
		<!--E 工作室介绍-->
	</div>
</template>

<script>
	import Swiper from 'swiper';//引入swiper
	export default {
		data() {
			return {
				imgList: [{//轮播图列表
						url: "javascript:",
						img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
						title: ""
					},
					{
						url: "javascript:",
						img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
						title: ""
					},
					{
						url: "javascript:",
						img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg", // 404
						title: ""
					}
				],
				
				mainMenu: [],//导航按钮
				otherNum:7,//其他服务显示数量
				otherList:[{name:'帮教回访',path:'',icon:require('../../assets/other_icon1.png')},{name:'奖惩管理',path:'',icon:require('../../assets/other_icon2.png')},{name:'考察意见',path:'',icon:require('../../assets/other_icon3.png')},{name:'社区服务',path:'',icon:require('../../assets/other_icon4.png')},{name:'劳动教育',path:'',icon:require('../../assets/other_icon5.png')},{name:'谈话教育',path:'',icon:require('../../assets/other_icon6.png')},{name:'外出请假',path:'',icon:require('../../assets/other_icon7.png')},{name:'走访调查',path:'',icon:require('../../assets/other_icon9.png')},{name:'违规违纪',path:'',icon:require('../../assets/other_icon10.png')},{name:'申诉处理',path:'',icon:require('../../assets/other_icon11.png')}],//其他服务列表
			};
		},
		components: {
			Swiper
		},
		mounted() {
			this.bannerSwiper();
		},
		methods: {
			getMenu() {
				this.$axios
					.post(this.Url + "/api/menu", {
						role: this.$store.state.USER_ROLE
					})
					.then(resp => {
						console.log(resp.data);
						this.mainMenu = resp.data.content.mainMenu;
					})
					.catch(error => {
						console.log(error);
					});
			},
			bannerSwiper(){
			  new Swiper ('.J_banner_swiper', {
			    loop: true,
//			    pagination: {
//		        el: '.J_banner_pagination',
//		      },
			    autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		      },
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
.J_banner_swiper{
	img{
		display: block;
		width: 100%;
	}
	.J_banner_pagination{
		bottom: 5px;
		.swiper-pagination-bullet{
			width: 10px;
			height: 10px;
		}
		.swiper-pagination-bullet-active{
			background: #23ddb6;
		}
	}
}
/*E 轮播*/

/*S 导航菜单*/
.menu_list{
	background-color: #fff;
	ul{
		overflow: hidden;
		li{
			float: left;
			width: 33.3%;
			padding: 0.3rem 0;
			text-align: center;
			box-sizing: border-box;
			border-right: 1px solid #f7f7f7;
			border-bottom: 1px solid #f7f7f7;
			font-size: 0.28rem;
			.menu_img{
				margin: 0 auto;
				width: 50%;
				img{
					width: 100%;
				}
			}
			.menu_text{
				margin-top: 0.2rem;
			}
		}
		li:nth-child(3n){
			border-right: 0 none;
		}
	}
}
/*E 导航菜单*/

/*S 公用*/
.block_box{
	margin-top: 0.2rem;
	background-color: #fff;
	padding: 0.2rem;
	.block_title{
		padding-left: 0.2rem;
		line-height: 1.2em;
		border-left: 4px solid #2ae0a7;
		font-size: 0.28rem;
	}
}
/*E 公用*/

/*S 其他服务*/
.other_main{
	ul{
		overflow: hidden;
		li{
			float: left;
			width: 25%;
			box-sizing: border-box;
			padding: 0 0.1rem;
			text-align: center;
			margin-top: 0.2rem;
			font-size: 0.24rem;
			.other_list{
				background-color: #f4f4f4;
				padding: 0.2rem 0;
			}
			.other_text{
				margin-top: 0.05rem;
			}
			.other_icon img{
				width: 56%;
				margin: 0 auto;
			}
		}
	}
}
/*E 其他服务*/

/*S 工作室介绍*/
.introduction_box{
	margin-top: 0.25rem;
	.introduction_img{
		border-radius: 0.1rem;
		overflow: hidden;
		img{
			width: 100%;
		}
	}
	.introduction_text{
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
		.introduction_more{
			position: absolute;
			right: 0;
			bottom: 0.23rem;
			color: #fbb03b;
		}
	}
	.introduction_list{
		ul{
			li{
				margin-top: 0.14rem;
				font-size: 0.22rem;
				padding-left: 0.4rem;
				background: no-repeat left center;
				background-size: 0.3rem auto;
			}
			.introduction_list1{
				background-image: url(../../assets/info_icon1.png);
			}
			.introduction_list2{
				background-image: url(../../assets/info_icon2.png);
			}
			.introduction_list3{
				background-image: url(../../assets/info_icon3.png);
			}
		}
	}
}
/*E 工作室介绍*/
</style>