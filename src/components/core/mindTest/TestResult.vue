<template>
<!--S 测试结果-->
	<div class="test_box" :class="isAdopt?'test_adopt':'test_no_adopt'">
		<div class="test_num_box">
			<div class="test_num_mian" :class="isAdopt?'num_adopt':'num_no_adopt'">
				<countup :start-val="0" :end-val="num" :duration="2" class="risk_per"></countup>
				<div class="test_num_btn" v-html="isAdopt?'通过':'未通过'"></div>
			</div>
			<div class="test_result_info">
				<p>本次测试共 20 题</p>
				<p>你答对了 17 题，答错 3 题</p>
				<p v-html="isAdopt?'恭喜你通过测试':'请继续努力'"></p>
			</div>
			<div class="back_home">
				<router-link to="/phome">
					返回首页
				</router-link>
			</div>
		</div>
		
	</div>
</template>
<!--S 测试结果-->
<script>
	import {Countup} from 'vux'
	export default {
		data() {
			return {
				isAdopt:true,//通过
				num:90
			}
		},
		components: {
	    Countup
	  },
		mounted(){
			document.title = "测试结果";
		},
		methods: {
			
		},
	}
</script>

<style lang="less" scoped>
.test_box{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: no-repeat top center;
	background-size: 100% auto;
	z-index: 3;
	.test_num_box{
		position: absolute;
		top:12%;
		left: 50%;
		transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
		.test_num_mian{
			color: #fff;
			width: 4rem;
			height: 4rem;
			font-size: 1.8rem;
			text-align: center;
			line-height: 4rem;
			background: no-repeat  center center;
			background-size: 100% auto;
			position: relative;
			.test_num_btn{
				position: absolute;
				left: 50%;
				bottom: 0;
				border: 1px solid #fff;
				border-radius: 0.3rem;
				line-height: 0.6rem;
				width: 2rem;
				font-size: 0.32rem;
				margin-left: -1rem;
			}
		}
		.num_adopt{
			background-image: url(../../../assets/test_num_bg.png);
		}
		.num_no_adopt{
			background-image: url(../../../assets/test_num_bg2.png);
		}
		.test_result_info{
			margin-top: 0.5rem;
			text-align: center;
			color: #fff;
			font-size: 0.26rem;
			p{
				margin-top: 0.16rem;
			}
		}
		.back_home{
			width: 3rem;
			border-radius: 0.3rem;
			margin: 0 auto;
			margin-top: 0.4rem;
			line-height: 0.6rem;
			border: 1px solid #fff;
			color: #fff;
			font-size: 0.28rem;
			text-align: center;
			a{
				display: block;
				width: 100%;
			}
		}
	}
}
.test_adopt{
	background-image: url(../../../assets/adopt_bg.jpg);
	background-color: #1cd9c7;
}
.test_no_adopt{
	background-image: url(../../../assets/adopt_bg2.jpg);
	background-color: #ff483e;
}
</style>