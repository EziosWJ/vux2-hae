<template>
	<!--S 在线教育-->
	<div class="evaluation_out">
		<div class="evaluation_banner">
			<img src="../../../../assets/persuasion_img.jpg" />
		</div>
		<div class="evaluation_content">
			<div class="scheme_list">
				<ul>
					<li>
						<a href="http://www.tyjcywj.cn/videoList.html">
							<div class="scheme_img"><img src="../../../../assets/line_img.png" /></div>
							<div class="scheme_title">观看法制视频</div>
							<div class="scheme_text">观看在线视频，学习法制知识，提高自我保护意识和帮助别人的能力。</div>
						</a>
					</li>
					<li>
						<a href="http://mp.weixin.qq.com/mp/homepage?__biz=MzU1NzY5ODczOQ==&hid=1&sn=8c10b2aa4c5ba78bb9ee37151287c43b&scene=18#wechat_redirect">
							<div class="scheme_img"><img src="../../../../assets/line_img2.png" /></div>
							<div class="scheme_title">在线案例学习</div>
							<div class="scheme_text">通过真实案例，了解身边的法律知识，提高自我保护意识。</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
	<!--E 在线教育-->
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	mounted() {
		document.title="在线教育"
	},
	methods: {
		
	},
	
};
</script>
<style lang="less" scoped>
.color_orange{
	color: #ff991d;
}
.color_999{
	color: #999;
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

.evaluation_content{
	padding: 0 0.25rem;
	.evaluation_num{
		margin-top: 0.2rem;
	}
	.scheme_list{
		ul{
			li{
				box-shadow: 0 0 5px #ccc;
				margin-top: 0.2rem;
				border-radius: 0.1rem;
				padding: 0.2rem;
				padding-left: 1.8rem;
				position: relative;		
				min-height:1.4rem ;		
				.scheme_img{
					position: absolute;
					left: 0.2rem;
					top: 0.2rem;
					width: 1.4rem;
					height: 1.4rem;
					overflow: hidden;
					img{
						width: 100%;
					}
				}
				.scheme_title{
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					font-size: 0.28rem;
				}
				.scheme_text{
					margin-top: 0.15rem;
					font-size: 0.22rem;
					color: #999;
					line-height: 1.8em;
					height: 3.5em;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
			}
		}
	}
}


</style>