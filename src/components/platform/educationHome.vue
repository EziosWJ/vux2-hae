<template>
	<div>
		<!--S 轮播-->
		<div>
			<img class="wid100" src="../../assets/education_banner.jpg"/>
		</div>
		<div class="pd20 bg_fff b_bom">
			共{{HelperList.length}}位被帮教人
		</div>
		<!--S 被帮教人-->
		<div class="by_help_out pdlr20 bg_fff ov">
			<div class="by_help_box mt20 box_shadow radius10 pr by_help_box2">
				<img class="by_help_icon" src="../../assets/a001.png"/>
				<ul class="ov">
					<li v-for="el in HelperList" v-if="el.urState==0"><div class="by_help_list" ><router-link :to="{path:'/fixedScheme',query:{urId:el.urId}}">{{el.urName}}</router-link></div></li>
					
				</ul>
			</div>
			<div class="by_help_box mt20 box_shadow radius10 pr by_help_box3">
				<img class="by_help_icon" src="../../assets/a003.png"/>
				<ul class="ov">
					<li v-for="el in HelperList" v-if="el.urState==1"><div class="by_help_list" ><router-link :to="{path:'/seeProgramme',query:{urId:el.urId}}">{{el.urName}}</router-link></div></li>
				</ul>
			</div>
			<div class="by_help_box mt20 box_shadow radius10 pr by_help_box4">
				<img class="by_help_icon" src="../../assets/a004.png"/>
				<div class="help_statistics">
					<!-- 优秀5人/良好2人/及格8人/不及格1人 -->
				</div>
				<ul class="ov">
					<li v-for="el in HelperList" v-if="el.urState==2"><div class="by_help_list" ><router-link :to="{path:'/seeResult',query:{urId:el.urId}}">{{el.urName}}</router-link></div></li>
				</ul>
			</div>
		</div>
		<!--E 被帮教人-->
		

		
		<!--S 联系检察官-->
		<div class="prosecution_phone">
			<a href="tel:0351-9999999">
				<p>联系检察官</p>
			</a>
		</div>
		<!--E 联系检察官-->
		
		<!--S 消息提醒-->
		<div class="block_box">
			<div class="pdb20 b_bom">
				<div class="block_title">消息提醒</div>
			</div>
			<div class="msg_box">
				<ul>
					<li>
						<router-link to="/msgList">
							<div class="msg_icon">
								<img src="../../assets/msg_icon_blue.png" />
								<!-- <div class="msg_num">3</div> -->
							</div>
							<div class="msg_big_title">被帮教人未按时完成情况</div>
							<div class="msg_small_text">点击查看</div>
						</router-link>
					</li>
					<li>
						<router-link to="/msgList">
							<div class="msg_icon">
								<img src="../../assets/msg_icon_yellow.png" />
								<!-- <div class="msg_num">2</div> -->
							</div>
							<div class="msg_big_title">被帮教人已完成所有情况</div>
							<div class="msg_small_text">点击查看</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!--E 消息提醒-->
		
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
				educateNum:7,//已帮教显示的数量
				people:[''],//安排帮教人
				peopleList:[[{name:'帮教人A',value:'0'},{name:'帮教人B',value:'1'},{name:'帮教人C',value:'2'}]],//选择帮教人列表
				showPopupPicker: false,
				HelperList:[]
			};
		},
		components: {
			Swiper 
		},
		mounted() {
			document.title = "帮教人";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
			this.getByTheHelperList();
		},
		methods: {
			getByTheHelperList(){
				let userData = JSON.parse(sessionStorage.getItem("userData"))
				console.log(userData)
				this.$axios.post("/api/com/getByTheHelperList",{ucId:userData.ucId,ucRole:userData.ucRole})
				.then(resp=>{
					this.HelperList = resp.data.content.list;
					console.log(this.HelperList)
				})
			}
			
		},

	};
</script>

<style lang="less" scoped>
	/*S 帮教人和被帮教人*/
	.by_help_out{
		padding-bottom: 0.3rem;
	}
	.by_help_box{
		padding: 0 0.1rem;
		padding-bottom: 0.2rem;
		padding-top: 0.6rem;
		.by_help_icon{
			position: absolute;
			left: -0.12rem;
			top: 0.2rem;
			width: 1.3rem;
		}
		ul li{
			padding: 0 0.1rem;
			margin-top: 0.2rem;
			float: left;
			width: 25%;
			box-sizing: border-box;
			.by_help_list{
				text-align: center;
				width: 100%;
				font-size: 0.26rem;
				line-height: 0.48rem;
				border-radius: 0.24rem;
			}
			.help_list_more{
				text-align: center;
				width: 100%;
				font-size: 0.26rem;
				line-height: 0.46rem;
				border-radius: 0.24rem;
				background-color: #FD9921;
				color: #fff;
			}
		}
	}
	.by_help_out{
		ul li{
			width: 33.3%;
		}
	}
	.help_statistics{
		position: absolute;
		right: 0.2rem;
		top: 0.26rem;
		font-size: 0.22rem;
	}
	.by_help_box1{
		.by_help_list{
			background-color: #efefef;
		}
	}
	.by_help_box2{
		.by_help_list{
			background-color: #feeef1;
		}
	}
	.by_help_box3{
		.by_help_list{
			background-color: #e8fafa;
		}
	}
	.by_help_box4{
		.by_help_list{
			background-color: #fff5e9;
		}
	}
	/*E 帮教人和被帮教人*/
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
	/*S 消息*/
	.msg_box{
		ul{
			li{
				padding: 0.2rem 0;
				padding-left: 1rem;
				position: relative;
				border-bottom: 1px solid #eee;
				background: url(../../assets/aorrow_right.png) no-repeat right center;
				background-size: 0.16rem auto;
				.msg_icon{
					position: absolute;
					left: 0;
					top:0.2rem;
					img{
						width: 0.8rem;
					}
				}
				.msg_big_title{
					font-size: 0.28rem;
				}
				.msg_num{
					background-color: #ee1c25;
					color: #fff;
					position: absolute;
					top: 0;
					right: 0;
					line-height: 0.3rem;
					min-width: 0.3rem;
					text-align: center;
					border-radius: 0.15rem;
					font-size: 0.24rem;
				}
				.msg_small_text{
					font-size: 0.24rem;
					color: #999;
				}
			}
			li:last-child{
				padding-bottom: 0;
				border-bottom: 0;
			}
		}
	}
	/*E 消息*/
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

