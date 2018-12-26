<template>
<!--S 测试题-->
	<div>
		<div class="answer_box">
			<ul>
				<li v-for="(el,index) in dataList">
					<div class="answer_title">{{index+1}}、{{el.name}}</div>
					<div class="answer_btn">
						<label v-for="item in el.list" :class="{'active':el.curr==item.value}" @click="el.curr=item.value">{{item.text}}</label>
					</div>
				</li>				
			</ul>
		</div>
		<div class="answer_foot">
			<div class="answer_foot_mian">
				<div class="answer_foot_branch">总分数为：100分</div>
				<div class="answer_foot_btn">
					<router-link to="/testResult2">提交</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<!--S 测试题-->
<script>
	export default {
		data() {
			return {
				dataList:[
					{name:'我很喜欢参加社交活动，我感到这是交朋友的好机会。',list:[{text:'A、是',value:'0'},{text:'B、不确定',value:'1'}],curr:''},
					{name:'每到一个新地方，我第一天总数睡不好，就是在家里，只要换一张床，有时也会失眠。',list:[{text:'A、是',value:'0'},{text:'B、不确定',value:'1'}],curr:''},
					{name:'我情绪波动很大，常常被周围的人或事情影响心情。',list:[{text:'A、是',value:'0'},{text:'B、不确定',value:'1'}],curr:''},
					{name:'我最怕转学或转班级，每到一个新环境，我总要经过很长一段时间才能适应。',list:[{text:'A、是',value:'0'},{text:'B、不确定',value:'1'}],curr:''},
					{name:'在陌生人面前，我常无话可说，以至感到尴尬',list:[{text:'A、是',value:'0'},{text:'B、不确定',value:'1'}],curr:''},
					{name:'当被人攻击时，我不惜任何方法和代价令对方退缩。',list:[{text:'A、是',value:'0'},{text:'B、不确定',value:'1'}],curr:''}
				],//题列表
			}
		},
		mounted() {
			document.title = "心理测评";
		},
		methods: {
			
		},
	}
</script>

<style lang="less" scoped>
.answer_box{
	padding: 0 0.25rem;
	padding-bottom: 0.3rem;
	ul{
		li{
			box-shadow: 0 0 5px #ccc;
			background-color: #fff;
			margin-top: 0.25rem;
			padding: 0.2rem;
			border-radius: 0.1rem;
			.answer_title{
				font-size: 0.24rem;
			}
			.answer_btn{
				text-align: center;
				margin-top: 0.2rem;
				label{
					display: inline-block;
					width: 1.4rem;
					margin: 0 0.03rem;
					line-height: 0.52rem;
					text-align: center;
					border-radius: 0.3rem;
					border: 1px solid #666;
					position: relative;
					input{
						position: absolute;
						width: 100%;
						height: 100%;
					}
				}
				label.active{
					border-color: #2AE0A7;
					color: #fff;
					background-color: #2AE0A7;
				}
			}
		}
	}
}
.answer_foot{
	height: 0.8rem;
}
.answer_foot_mian{
	position: fixed;
	padding: 0 0.2rem;
	padding-right: 2rem;
	box-sizing: border-box;
	width: 100%;
	border-top: 1px solid #eee;
	z-index: 20;
	left: 0;
	bottom: 0;
	background-color: #fff;
	line-height: 0.8rem;
	font-size: 0.26rem;
	.answer_foot_btn{
		position: absolute;
		top: 0;
		right: 0;
		width: 2rem;
		text-align: center;
		color: #fff;
		background: -webkit-linear-gradient(left,#2ae0a7, #17d7d1); 
	  background: -o-linear-gradient(right,#2ae0a7, #17d7d1);
	  background: -moz-linear-gradient(right,#2ae0a7, #17d7d1); 
	  background: linear-gradient(to right,#2ae0a7, #17d7d1);
	  a{
	  	display: block;
	  	width: 100%;
	  }
	}
}
</style>