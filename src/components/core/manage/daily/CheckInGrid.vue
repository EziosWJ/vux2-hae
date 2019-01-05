<template>
	<!--S 日常报道-->
	<div class="evaluation_out">
		<div class="evaluation_banner">
			<img src="../../../../assets/report_banner.jpg" />
		</div>
		<div class="evaluation_tab">
			<ul>
				<li @click="active=0" :class="{'active':active==0}">报到登记</li>
				<li @click="active=1" :class="{'active':active==1}">报到记录</li>
			</ul>
		</div>
		<div class="evaluation_content" v-show="active==0">
			<div class="today_day">{{today}} 周{{week}}</div>
			<div class="report_block">
				<div class="adjusted_icon"><img src="../../../../assets/report_icon1.png" /></div>
				<ul class="report_list ov">
					<li class="active">李杰</li>
					<li>王海洋</li>
					<li class="active">李杰</li>
					<li>李木木</li>
					<li>李杰</li>
					<li class="active">王海洋</li>
					<li>李杰</li>
					<li class="active">李木木</li>
					<li class="active">李杰</li>
					<li>王海洋</li>					
				</ul>
			</div>
			<div class="report_block">
				<div class="adjusted_icon"><img src="../../../../assets/report_icon2.png" /></div>
				<div class="report_name">
					王森兰、王海洋、
					<div class="add_icon"><img src="../../../../assets/add_icon.png" /></div>
				</div>
			</div>
			<div class="report_block">
				<div class="adjusted_icon"><img src="../../../../assets/report_icon3.png" /></div>
				<div class="report_name">
					李木子
					<div class="add_icon"><img src="../../../../assets/add_icon.png" /></div>
				</div>
			</div>
			<div class="persuasion_btn_out">
				<div class="persuasion_btn">提交</div>
			</div>
		</div>
		<!--S 报到记录-->
		<div class="evaluation_content report_content" v-show="active==1">
			<group>
				<datetime v-model="todayOld" format="YYYY-MM-DD">
					<div class="registration_report">
						<div class="registration_text">{{todayOld}} 周{{weekOld}}</div>
					</div>
				</datetime>
			</group>
			<div class="evaluation_list">
				<ul>
					<li>
						<div class="evaluation_list_main">
							<div class="evaluation_list_title">报道（4人）</div>
							<div class="report_item_box">
								<div class="report_item">李杰</div>
								<div class="report_item">王海洋</div>
								<div class="report_item">李杰</div>
								<div class="report_item">王海洋</div>
								<div class="report_item">李杰</div>
								<div class="report_item">李杰</div>
								<div class="report_item">王海洋</div>
							</div>
						</div>
					</li>
					<li>
						<div class="evaluation_list_main">
							<div class="evaluation_list_title">请假（2人）</div>
							<div class="report_item_box">
								<div class="report_item">李杰</div>
								<div class="report_item">王海洋</div>
							</div>
						</div>
					</li>
					<li>
						<div class="evaluation_list_main">
							<div class="evaluation_list_title">未到（1人）</div>
							<div class="report_item_box">
								<div class="report_item">李杰</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--E 报到记录-->
	</div>
	<!--E 日常报道-->
</template>

<script>
import {Group, Datetime } from 'vux'
export default {
	components: {
		Group,
		Datetime
	},
	data() {
		return {
			active: 0,
			today: '',//今天日期
			week:'',//今天周几
			todayOld:'2018-11-22',//记录日期
			weekOld:'四',//记录周
		}
	},
	watch:{
		todayOld(val){
			let arys1 = new Array();
	  	arys1 = val.split('-'); 
	   	let ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
	   	let  week1=String(ssdate.getDay()).replace("0","日").replace("1","一").replace("2","二").replace("3","三").replace("4","四").replace("5","五").replace("6","六")
	   	this.weekOld = week1 ;
		}
	},
	mounted() {
		document.title = "日常报到";
		this.getNowFormatDate();//获取今日日期
//		this.getDateStr();//获取前一天
	},
	methods: {
		getNowFormatDate(){
			let date = new Date();
			let seperator1 = "-";
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let strDate = date.getDate();
			if(month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if(strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			let currentdate = year + seperator1 + month + seperator1 + strDate;
			this.today = currentdate;
			//星期几计算
			let arys1 = new Array();
	  	arys1 = currentdate.split('-'); //日期为输入日期，格式为 2013-3-10
	   	let ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
	   	let  week1=String(ssdate.getDay()).replace("0","日").replace("1","一").replace("2","二").replace("3","三").replace("4","四").replace("5","五").replace("6","六")
	   	this.week = week1 ;
		},
		getDateStr() {//获取前一天
			let dd = new Date();
	   	dd.setDate(dd.getDate()-1); 
	    let year = dd.getFullYear();
	    let mon = dd.getMonth()+1;        
   		let day = dd.getDate();
   		let todayOld = year + "-" + mon + "-" + day;
      this.todayOld = todayOld;
      //星期几计算
			let arys1 = new Array();
	  	arys1 = todayOld.split('-'); //日期为输入日期，格式为 2013-3-10
	   	let ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
	   	let week1=String(ssdate.getDay()).replace("0","日").replace("1","一").replace("2","二").replace("3","三").replace("4","四").replace("5","五").replace("6","六")
	   	this.weekOld = week1 ;
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
		.today_day {
			text-align: center;
			padding-top: 0.25rem;
		}
		.persuasion_btn_out {
			height: 0.7rem;
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
		}
		.report_block{
			margin-top: 0.25rem;
			box-shadow: 0 0 5px #ccc;
			border-radius: 0.1rem;
			padding: 0 0.2rem;
			padding-top: 0.7rem;
			padding-bottom: 0.2rem;
			position: relative;
			.adjusted_icon {
				position: absolute;
				left: -0.12rem;
				top: 0.2rem;
				img {
					width: 1.2rem;
				}
			}
			.report_list{
				li{
					float: left;
					font-size: 0.24rem;
					margin-top: 0.2rem;
					width: 25%;
					box-sizing: border-box;
					padding-left: 0.3rem;
					background:url(../../../../assets/gou_icon1.png) no-repeat left center;
					background-size: 0.22rem;
					color: #999;
				}
				li.active{
					color: #333;
					background-image: url(../../../../assets/gou_icon2.png);
				}
			}
			.report_name{
				font-size: 0.24rem;
				padding-right: 0.3rem;
				position: relative;
				.add_icon{
					position: absolute;
					width: 0.3rem;
					height: 0.3rem;
					right: 0;
					bottom: 0;
					img{
						width: 100%;
					}
				}
			}
		}
		.evaluation_list{
			ul{
				li{
					padding:0.16rem 0;
					padding-left: 0.7rem;
					position: relative;
				}
				li:before{
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					width: 0.16rem;
					height: 0.16rem;
					border-radius: 50%;
					background-color: #2AE0A7;
					margin-top: -0.08rem;
				}
				li:after{
					content: "";
					position: absolute;
					left: 0.08rem;
					top: 0;
					
					width: 1px;
					height: 100%;
					background-color: #2AE0A7;
				}
				li:first-child:after{
					height: 50%;
					top: auto;
					bottom: 0;
				}
				li:last-child:after{
					height: 50%;
					top: 0;
				}
				.evaluation_list_main{				
					position: relative;
					padding:0 0.2rem;
					border-radius: 0.1rem;
					font-size: 0.23rem;
					box-shadow: 0 0 5px #ccc;
					.evaluation_list_title{
						line-height: 0.6rem;
						border-bottom: 1px dashed #eee;
					}
					.report_item_box{
						padding-bottom: 0.2rem;
						overflow: hidden;
						.report_item{
							float: left;
							width: 20%;
							color: #666;
							font-size: 0.23rem;
							margin-top: 0.1rem;
						}
					}
					
				}
				.evaluation_list_main:before{
					content: "";
					width:0.26rem;
					height: 0.35rem;
					position: absolute;
					top: 50%;
					margin-top: -0.17rem;
					left: -0.26rem;
					background:url(../../../../assets/arrow_left.png) no-repeat right center;
					background-size: 100% auto;
				}
			}
		}
		.registration_report{
			width: 100%;
			text-align: center;
			line-height: 1.2em;
			font-size: 0.24rem;
			.registration_text{
				display: inline-block;
				padding-right: 0.24rem;
				background: url(../../../../assets/arrow_bottom.png) no-repeat right center;
				background-size: 0.16rem;
			}
		}
	}
</style>
<style lang="less">
.report_content{
	.weui-cells:after{
		border-bottom: 0 none;
	}
	.weui-cells:before{
		border-top: 0 none;
	}
}
	
</style>