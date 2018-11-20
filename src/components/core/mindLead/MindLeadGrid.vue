<template>
	<!--S 心理测评-->
	<div class="evaluation_out">
		<div class="evaluation_banner">
			<img src="../../../assets/evaluation_banner.jpg" />
		</div>
		<div class="evaluation_tab">
			<ul>
				<li @click="active=0" :class="{'active':active==0}">评测内容</li>
				<li @click="active=1" :class="{'active':active==1}">已完成评测</li>
			</ul>
		</div>
		<div class="evaluation_content" v-show="active==0">
			<div class="evaluation_num">共5条内容</div>
			<div class="evaluation_list">
				<ul>
					<li>
						<div class="evaluation_list_main">
							<div class="evaluation_list_title">测试一：基础测评</div>
							<span>55人已完成</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!--E 心理测评-->
</template>

<script>
export default {
	data() {
		return {
			active:0,
			dataList:[],
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
//		this.getMindLeadList()
	}
};
</script>
<style lang="less" scoped>
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
	padding: 0 0.25rem;
	.evaluation_num{
		margin-top: 0.2rem;
	}
	.evaluation_list{
		ul{
			li{
				margin-top: 0.15rem;
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
			.evaluation_list_main{				
				line-height: 0.8rem;
				position: relative;
				padding: 0 0.2rem;
				border-radius: 0.1rem;
				font-size: 0.26rem;
				box-shadow: 0 0 5px #ccc;
				.evaluation_list_title{
					padding-right: 1.3rem;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				span{
					position: absolute;
					right: 0.2rem;
					top: 0;
					color: #999;
					font-size: 0.22rem;
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
				background:url(../../../assets/arrow_left.png) no-repeat right center;
				background-size: 100% auto;
			}
		}
	}
}
</style>