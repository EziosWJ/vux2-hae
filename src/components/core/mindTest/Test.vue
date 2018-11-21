<template>
<!--S 测试题-->
	<div>
		<div class="answer_box">
			<ul>
				<li>
					<div class="answer_title">1.我很喜欢参加社交活动，我感到这是交朋友的好机会。</div>
					<div class="answer_btn">
						<label class="active"><input type="radio" name="1" />A.是	</label>
						<label><input type="radio" name="1" />B.不确定	</label>
					</div>
				</li>
				<li>
					<div class="answer_title">2.我很喜欢参加社交活动，我感到这是交朋友的好机会。</div>
					<div class="answer_btn">
						<label><input type="radio" name="1" />A.是	</label>
						<label class="active"><input type="radio" name="1" />B.不确定	</label>
					</div>
				</li>
				<li>
					<div class="answer_title">3.我很喜欢参加社交活动，我感到这是交朋友的好机会。</div>
					<div class="answer_btn">
						<label class="active"><input type="radio" name="1" />A.是	</label>
						<label><input type="radio" name="1" />B.不确定	</label>
					</div>
				</li>
				<li>
					<div class="answer_title">4.我很喜欢参加社交活动，我感到这是交朋友的好机会。</div>
					<div class="answer_btn">
						<label><input type="radio" name="1" />A.是	</label>
						<label class="active"><input type="radio" name="1" />B.不确定	</label>
					</div>
				</li>
				<li>
					<div class="answer_title">5.我很喜欢参加社交活动，我感到这是交朋友的好机会。</div>
					<div class="answer_btn">
						<label class="active"><input type="radio" name="1" />A.是	</label>
						<label><input type="radio" name="1" />B.不确定	</label>
					</div>
				</li>
				
			</ul>
		</div>
		<div class="answer_foot">
			<div class="answer_foot_mian">
				<div class="answer_foot_branch">总分数为：99分</div>
				<div class="answer_foot_btn">提交</div>
			</div>
		</div>
	</div>
</template>
<!--S 测试题-->
<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {
			document.title = "基础测试";
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
					margin: 0 0.1rem;
					width: 1.8rem;
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