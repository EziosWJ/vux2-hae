<template>
	<!--S 报到请假-->
	<div class="evaluation_out">
		<div class="evaluation_banner">
			<img src="../../../../assets/common-banner.png" />
		</div>
		<div class="evaluation_tab">
			<ul>
				<li @click="active=0" :class="{'active':active==0}">报到记录</li>
				<li @click="active=1" :class="{'active':active==1}">请假记录</li>
			</ul>
		</div>
		<!--S 评测内容-->
		<div class="evaluation_content" v-show="active==0">
			<div class="feedback_list">
				<div class="feedback_data">2018年11月</div>
				<ul>
					<li>
						<div class="feedback_list_title feedback_list_title1 fl width19">报到</div>
						<div class="fl color_999 feedback_list_text width81">共25天</div>
					</li>
					<li>
						<div class="feedback_list_title feedback_list_title2 fl width19">请假</div>
						<div class="fl color_999 feedback_list_text width81">共3天</div>
					</li>
					<li>
						<div class="feedback_list_title feedback_list_title3 fl width19">未到</div>
						<div class="fl color_999 feedback_list_text width81">
							<span>2018-02-02、2018-02-02、2018-02-02、2018-02-02、2018-02-02</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="feedback_list">
				<div class="feedback_data">2018年10月</div>
				<ul>
					<li>
						<div class="feedback_list_title feedback_list_title1 fl width19">报到</div>
						<div class="fl color_999 feedback_list_text width81">共25天</div>
					</li>
					<li>
						<div class="feedback_list_title feedback_list_title2 fl width19">请假</div>
						<div class="fl color_999 feedback_list_text width81">共3天</div>
					</li>
					<li>
						<div class="feedback_list_title feedback_list_title3 fl width19">未到</div>
						<div class="fl color_999 feedback_list_text width81">
							<span>2018-02-02、2018-02-02、2018-02-02、2018-02-02、2018-02-02</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--E 评测内容-->
		<!--S 已完成评测-->
		<div class="evaluation_content" v-show="active==1">
			<div class="feedback_list">
				<div class="feedback_data">2018年11月</div>
				<ul>
					<li>
						<div class="feedback_list_title feedback_list_title2 fl">2018-11-05</div>
						<div class="adjusted_btn fr">请假理由</div>
					</li>
					<li>
						<div class="feedback_list_title feedback_list_title2 fl">2018-11-03</div>
						<div class="adjusted_btn fr">请假理由</div>
					</li>
					<li>
						<div class="feedback_list_title feedback_list_title2 fl">2018-11-01</div>
						<div class="adjusted_btn fr">请假理由</div>
					</li>
				</ul>
			</div>
			<div class="feedback_list">
				<div class="feedback_data">2018年10月</div>
				<ul>
					<li>
						<div class="feedback_list_title feedback_list_title2 fl">2018-10-05</div>
						<div class="adjusted_btn fr">请假理由</div>
					</li>
					<li>
						<div class="feedback_list_title feedback_list_title2 fl">2018-10-03</div>
						<div class="adjusted_btn fr">请假理由</div>
					</li>
					<li>
						<div class="feedback_list_title feedback_list_title2 fl">2018-10-01</div>
						<div class="adjusted_btn fr">请假理由</div>
					</li>
				</ul>
			</div>
		</div>
		<!--E 已完成评测-->
	</div>
	<!--E 报到请假-->
</template>

<script>
export default {
	data() {
		return {
			active:0,
			dataList:[],//评测内容列表
			adjustedList:[],//已评测列表
			mindLeadList: []
		}
	},
	methods: {
		getMindLeadList() {
			this.$axios
				.post("/api/eduplan/getMindLeadList")
				.then(resp => {
					if(resp.data.code === 200) {
						console.log(resp.data.content.mindLeadList);
						this.mindLeadList = resp.data.content.mindLeadList
					}
				})
				.catch(error => {
					console.log(error);
				});
		}
	},
	mounted() {
		document.title="报到请假";
//		this.getMindLeadList()
	}
};
</script>
<style lang="less" scoped>
.color_999{
	color: #999;
}
.width19{
	width: 19%;
}
.width81{
	width: 81%;
}
.evaluation_out{
	background-color: #fff;
	padding-bottom: 0.3rem;
}
.evaluation_banner{
	img{
		width: 100%;
	}
}
.evaluation_tab{
	margin-top: 0.3rem;
	padding: 0 0.25rem;
	ul{
		overflow: hidden;
		border: 1px solid #2ae0a7;
		border-radius: 0.1rem;
		li{
			float: left;
			width: 50%;
			text-align: center;
			box-sizing: border-box;
			line-height: 0.6rem;
			font-size: 0.26rem;
		}
		li.active{
			background-color: #2AE0A7;
			color: #fff;
		}
		li:first-child{
			border-right: 1px solid #2AE0A7;
		}
	}
}
.evaluation_content{
	.evaluation_num{
		margin-top: 0.2rem;
	}
	.feedback_data{
		margin-top: 0.25rem;
		padding: 0 0.25rem;
		background-color: #f4f4f4;
		line-height: 0.6rem;
	}
	.feedback_list{
		ul{
			padding: 0 0.25rem;
			li{
				box-shadow: 0 0 5px #ccc;
				padding: 0.2rem;
				overflow: hidden;
				margin-top: 0.25rem;
				border-radius: 0.1rem;
				.feedback_list_title{
					color: #666;
					padding-left: 0.2rem;
					box-sizing: border-box;
					position: relative;
					span{
						color: #333;
						margin: 0 0.05rem;
					}
				}
				.feedback_list_title:before{
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					margin-top: -0.05rem;
					width: 0.1rem;
					height: 0.1rem;
					border-radius: 50%;
					
				}
				.feedback_list_title1:before{
					background-color: #2AE0A7;
				}
				.feedback_list_title2:before{
					background-color: #ffa435;
				}
				.feedback_list_title3:before{
					background-color: #ff6060;
				}
				.adjusted_btn {
					border: 1px solid #2AE0A7;
					color: #2AE0A7;
					border-radius: 2rem;
					padding: 0 0.15rem;
				}
			}
		}
	}
	
}
</style>