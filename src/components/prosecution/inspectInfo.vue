<template>
	<div>
		<div>
			<img class="wid100" src="../../assets/inquisitor_banner.jpg"/>
		</div>
		<!--S 选项卡-->
		<div class="by_help_out pdlr20 bg_fff ov" >
			<div class="by_help_box mt20 box_shadow radius10 pr by_help_box2">
				<img class="by_help_icon" src="../../assets/a001.png"/>
				<ul class="ov">
					<li v-for="el in ByTheHelperList" v-if="el.urState==null"><div class="by_help_list"><router-link :to="{path:'/fixedScheme',query:{urId:el.urId}}">{{el.urName}}</router-link></div></li>
					
				</ul>
			</div>
			<div class="by_help_box mt20 box_shadow radius10 pr by_help_box3">
				<img class="by_help_icon" src="../../assets/a003.png"/>
				<ul class="ov">
					<li v-for="el in ByTheHelperList" v-if="el.urState=='1'"><div class="by_help_list"><router-link :to="{path:'seeProgramme',query:{urId:el.urId}}">{{el.urName}}</router-link></div></li>
					
				</ul>
			</div>
			<div class="by_help_box mt20 box_shadow radius10 pr by_help_box4">
				<img class="by_help_icon" src="../../assets/a004.png"/>
			
				<ul class="ov">
					<li v-for="el in ByTheHelperList" v-if="el.urState=='2'"><div class="by_help_list"><router-link :to="{path:'/seeResult',query:{urId:el.urId}}">{{el.urName}}</router-link></div></li>
				
					<li>
						<div class="help_list_more">
							<!--<router-link to="/helpersMore">更多</router-link> -->
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userData: {}, //ucRole2检察官  ucRole3帮教人  ucRole4被帮教人  ucRole5家长
				current:0,
				ByTheHelperList:[],

			};
		},

		mounted() {
			document.title = "JCG001";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
			this.ucId = this.$route.query.ucId;
			this.ucRole = this.$route.query.ucRole;
			this.getByTheHelperList();
		},
		methods: {
				//被帮教人
			getByTheHelperList(){
				//let userData =JSON.parse(sessionStorage.getItem("userData"));
				console.log(this.ucId);
				console.log(this.ucRole);
				this.$axios.post('/api/com/getByTheHelperList',{ucId:this.ucId,ucRole:this.ucRole})
				.then(resp=>{
					this.ByTheHelperList = resp.data.content.list;
					console.log(resp.data);
				})
			}
		},

	};
</script>

<style lang="less" scoped>
	/*S 帮教人和被帮教人*/
	.helpers_main_info {
		width: 50%;
		color: #999;
	}
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
				font-size: 0.24rem;
				line-height: 0.48rem;
				border-radius: 0.24rem;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
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
	.by_help_out ul li{
		width: 33.3%;
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
	.lable_box {
		ul {
			background-color: #fff;
			overflow: hidden;
			li {
				float: left;
				width:33.3%;
				text-align: center;
				line-height: 0.8rem;
				font-size: 0.28rem;
				border-bottom: 1px solid #eee;
			}
			li.active {
				color: #28dfa6;
				border-bottom: 2px solid #28DFA6;
			}
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
	.help_statistics{
		position: absolute;
		right: 0.2rem;
		top: 0.26rem;
		font-size: 0.22rem;
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
<style lang="less">
	.J_helpers_pagination {
		bottom: 0!important;
		.swiper-pagination-bullet{
			width: 15px!important;
			height:4px!important;
			border-radius: 2px!important;
		}
		.swiper-pagination-bullet-active {
			background-color: #28DFA6;
		}
	}
	.vux-cell-box:not(:first-child):before{
		left: 0!important;
	}
</style>
