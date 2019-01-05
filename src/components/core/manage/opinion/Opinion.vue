<template>
	<!--S 评定意见-->
	<div class="evaluation_out leave_out">
		<div class="evaluation_banner">
			<img src="../../../../assets/assess_banner.jpg" />
		</div>
		<div class="evaluation_tab">
			<ul>
				<li @click="active=0" :class="{'active':active==0}">新建评定</li>
				<li @click="active=1" :class="{'active':active==1}">评定记录</li>
			</ul>
		</div>
		<div class="evaluation_content " v-show="active==0">			
			<group label-width="5em">
				<div class="diversion_results"><h3>信息填写</h3></div>
				<popup-picker title="被帮教人" :data="tutoredPersonsList" v-model="tutoredPersons" show-name  placeholder="请选择"></popup-picker>
				<x-input title="登记人"  v-model="registrant" text-align="right" placeholder="请输入登记人" disabled></x-input>
				<datetime title="日期选择" v-model="deductionDate" placeholder="请选择"></datetime>
			</group>
			<div class="diversion_results diversion_results_title ov">
				<div class="fl">评定意见</div>
				<div class="fr ov diversion_results_list">
					<ul>
						<li :class="{'active':diversionResultsList=='良好'}" @click="diversionResultsList='良好'">良好</li>
						<li :class="{'active':diversionResultsList=='一般'}" @click="diversionResultsList='一般'">一般</li>
						<li :class="{'active':diversionResultsList=='不合格'}" @click="diversionResultsList='不合格'">不合格</li>
					</ul>
				</div>
			</div>
			<div class="diversion_textarea">
				<textarea placeholder="请输入需要描述的详细情况" v-model="conment"></textarea>
			</div>
			<div class="persuasion_btn" @click='submitFrom'>提交</div>
		</div>
		<!--S 评定记录-->
		<div class="evaluation_content evaluation_content2" v-show="active==1">
			<div class="evaluation_num">共{{totalRow}}条内容</div>
			<div class="adjusted_list">
				<ul>
					<li v-for="el in evaluationRecordList">
						<router-link to="/phome/mindTestResult">
							<div class="adjusted_icon">
								<img src="../../../../assets/risk_icon1.png" v-if="el.orResult && el.orResult=='良好'" />
								<img src="../../../../assets/risk_icon2.png" v-else-if="el.orResult && el.orResult=='一般'" />
								<img src="../../../../assets/risk_icon3.png" v-else-if="el.orResult && el.orResult=='不合格'" />
							</div>
							<div class="adjusted_main">
								<div class="adjusted_text">被评定人：李杰</div>
								<div class="adjusted_name color_999">评估人：李杰</div>
							</div>
							<div class="ov adjusted_info">
								<div class="fl adjusted_time">{{el.orCreateDate}}</div>
								<div class="fr adjusted_btn">详细结果</div>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="no_text" v-if="isLast">没有了~</div>
			<div class="more_btn" @click="clickMoreList" v-else>点击加载更多</div>
		</div>
		<!--E 评定意见-->
		<div class="persuasion_btn_out"></div>
	</div>
	<!--E 评定意见-->
</template>

<script>
	import { Group,XInput, PopupPicker, Datetime } from 'vux'
	export default {
		data() {
			return {
				page:1,
				size:10,
				totalRow:0,//总数
				isLast:false,//是否是最后一页
				userData:{},//用户信息
				active: 0,
				tutoredPersons:[], //被帮教人
				tutoredPersonsList: [[{name:'',value:''}]], //被帮教人列表
				registrant:'',//帮教人
				tutoredPersonsId:'',//
				deductionDate: '', //请假日期
				diversionResultsList: null, //疏导结果
				conment:'',//内容
				evaluationRecordList:[],//评定记录
			}
		},
		components: {
			Group,
			XInput,
			PopupPicker,
			Datetime
		},
		mounted() {
			document.title = "评定意见";
			let userData=JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
			this.registrant = userData.ucAccid;
			this.tutoredPersonsId = userData.ucId;
			this.getByPeopleList();
			this.getEvaluationRecord();
		},
		methods: {
			getByPeopleList(){//获取被帮教人列表
				this.$axios.post("/api/com/getByTheHelperList", {ucId:this.userData.ucId,role:this.userData.ucRole}).then(res => {
					let code = res.data.code;
					if(code === 200){
						this.tutoredPersonsList=[res.data.content.byTheHelperList || [] ];
						
					} else {
						alert("请求错误！");
					}
				}).catch(error => {
					console.log(error);
				});
			},
			getEvaluationRecord(){//获取评定记录
				this.$axios.post("/api/record/getOpinionRecordList", {pageNum:this.page,pageSize:this.size}).then(res => {
					let code = res.data.code;
					if(code === 200){
						this.evaluationRecordList =this.evaluationRecordList.concat( res.data.content.page.list) || [];
						this.totalRow = res.data.content.page.totalRow || 0;
						this.isLast = res.data.content.page.lastPage || false;
					} else {
						alert("请求错误！");
					}
				}).catch(error => {
					console.log(error);
				});
			},
			submitFrom(){//提交评定				
				if (!this.tutoredPersons[0] || this.tutoredPersons[0]==''){
					alert('请选择被帮教人')
				}else if(this.deductionDate==''){
					alert('请选择日期')
				}else if(!this.diversionResultsList || this.diversionResultsList==''){
					alert('请选择评定意见')
				}else if(!this.conment){
					alert('请输入评定内容')
				}else{
					this.$axios.post("/api/record/putOpinionRecord", {orId:'',orLeader:this.tutoredPersonsId,orReciver:this.tutoredPersons[0],orCreateDate:this.deductionDate,orContent:this.conment,orResult:this.diversionResultsList}).then(res => {
						let code = res.data.code;
						if(code === 200){
							this.$MessageBox.alert('操作成功').then(() => {
							 	this.$router.push('/phome');
							});
						} else {
							alert("请求错误！");
						}
					}).catch(error => {
						console.log(error);
					});
				}
			},
			clickMoreList(){
				this.page++;
				this.getEvaluationRecord();//获取帮教方案列表
			}
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
	.evaluation_list{
		ul{
			li{
				margin-top: 0.25rem;
				box-shadow: 0 0 5px #ccc;
				position: relative;
				border-radius: 0.1rem;
				padding: 0.2rem;
				.adjusted_btn{
					border: 1px solid #2AE0A7;
					color: #2AE0A7;
					border-radius: 2rem;
					padding: 0 0.15rem;
				}
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
	.persuasion_btn_out {
		height: 0.7rem;
	}
	.persuasion_btn {
		position: fixed;
		font-size: 0.26rem;
		width: 100%;
		left: 0;
		bottom: 0;
		text-align: center;
		color: #fff;
		line-height: 0.7rem;
		background: -webkit-linear-gradient(left, #2ae0a7, #17d7d1);
		background: -o-linear-gradient(right, #2ae0a7, #17d7d1);
		background: -moz-linear-gradient(right, #2ae0a7, #17d7d1);
		background: linear-gradient(to right, #2ae0a7, #17d7d1);
		a {
			display: block;
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
						font-size: 0.26rem;
						position: relative;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					.adjusted_name{
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

.evaluation_content2{
	background-color: #fff;
	padding:0.25rem!important;
	padding-top: 0!important;
	overflow: hidden;
	border-top: 1px solid #eee;
}
.diversion_results {
	background-color: #fff;
	padding: 10px 15px;
	font-size: 0.24rem;
	h3{
		padding-left: 0.16rem;
		line-height: 1.2em;
		border-left: 4px solid #2AE0A7;
		font-size: 0.24rem;
	}
	.diversion_results_list{
		ul{
			li{
				float: left;
				padding: 0 10px;
				margin-left:10px;
				background-color: #f2f2f2;
				color: #999999;
				border-radius: 0.25rem;
			}
			li.active{
				background-color: #2AE0A7;
				color: #fff;
			}
		}
	}
}
.diversion_results_title{
	margin-top: 0.25rem;
	border-bottom: 1px solid #eee;
}

.diversion_textarea {
	textarea {
		width: 100%;
		box-sizing: border-box;
		border: 0 none;
		background-color: #fff;
		padding: 0.2rem;
		font-size: 0.24rem;
		line-height: 1.5em;
		height: 7.5em;
		min-height: 7.5em;
	}
}

.leave_out{
	background-color: inherit;
	.evaluation_content{
		padding: 0;
	}
	.evaluation_tab{
		margin-top: 0;
		padding: 0.25rem;
		background-color: #fff;
	}
}

.more_btn{
	margin-top: 0.2rem;
	text-align: center;
	line-height: 0.6rem;
	background-color: #f2f2f2;
	border-radius: 0.1rem;
	font-size: 0.24rem;
}
.no_text{
	text-align: center;
	margin-top: 0.2rem;
	line-height: 0.6rem;
	font-size: 0.24rem;
	color: #666;
}
</style>
<style lang="less">
.leave_out{
	.vux-no-group-title{
		margin-top: 0;
	}
	.weui-cells{
		font-size: 0.24rem;
	}
}
</style>