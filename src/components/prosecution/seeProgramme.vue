<template>
	<!--S 被帮教人方案-->
	<div class="bg_fff">
		<div class="evaluation_list pd20">
				<ul>
					<li v-for="el in schemeList" :class="{'no_star':el.type==0}">
						<div class="evaluation_list_main" v-if="el.type==0">
							<div class="evaluation_list_title pr">
								{{el.name}}
								<span class="type_text c_999">未开始</span>
							</div>
							<div class="report_item_box pdb20">
								<div class="c_999 mt10">截止日期：{{el.endDate}}</div>
							</div>
						</div>
						<div class="evaluation_list_main" v-else>
							<router-link :to="{path:'/commentsScheme',query:{type:el.type}}">
								<div class="evaluation_list_title pr">
									{{el.name}}
									<span class="type_text main_color" v-if="el.type==1">进行中</span>
									<span class="type_text c_orange" v-else-if="el.type==2 || el.type==4">已完成</span>
									<span class="type_text c_red " v-else-if="el.type==3">未完成</span>
								</div>
								<div class="report_item_box pdb20 pr">
									<div class="c_999 mt10" v-if="el.type==2 || el.type==4">帮教人评分：{{el.fen}}分</div>
									<div class="c_999 mt10">截止日期：{{el.endDate}}</div>
									<div class="c_999 mt10" v-if="el.type==2 || el.type==4">完成时间：{{el.subDate}}</div>
									<img v-if="el.type==2 || el.type==4" class="gou_icon" src="../../assets/gou.png"/>
								</div>
							</router-link>
						</div>
					</li>
				</ul>
			</div>
			
			<div class="no_data_box mt40 pdb30" v-show="false">
				<img class="ma no_data_img" src="../../assets/no_data.png"/>
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
				schemeList:[
					{name:"1、观看法制微电影",type:'2',endDate:'2018-11-02',subDate:'2018-11-01',fen:'90'},
					{name:"2、法律法规学习",type:'4',endDate:'2018-12-02',subDate:'2018-12-01',fen:'85'},
					{name:"3、初次心理测评",type:'3',endDate:'2018-12-05',subDate:'',fen:''},
					{name:"4、晋源区二社区劳动服务",type:'1',endDate:'2018-12-14',subDate:'',fen:''},
					{name:"5、法制案例学习",type:'0',endDate:'2018-12-20',subDate:'',fen:''},
					{name:"6、在线学习心理常识",type:'0',endDate:'2018-12-20',subDate:'',fen:''},
					{name:"7、阅读学习未成年保护法",type:'0',endDate:'2018-12-22',subDate:'',fen:''},
					{name:"8、晋祠公园义务劳动服务",type:'0',endDate:'2018-12-24',subDate:'',fen:''},
				],//方案列表
			};
		},

		mounted() {
			document.title = "被帮教人A的方案";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {
			
		},

	};
</script>

<style lang="less" scoped>
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
		li.no_star{
			color: #999;
		}
		li.no_star:before{
			border-color: #ccc;
		}
		li.no_star:after{
			background-color: #ccc;
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
		.gou_icon{
			position: absolute;
			width:0.6rem;
			right: 0.2rem;
			top:50%;
			margin-top: -0.3rem;
		}
	}
}

</style>
