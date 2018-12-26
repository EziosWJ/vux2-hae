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
						<router-link to="/phome/educationList">
							<div class="scheme_img"><img src="../../../../assets/line_img.png" /></div>
							<div class="scheme_title">在线学习</div>
							<div class="scheme_text">在线学习是一个很好的渠道，大家都取得了很好的成绩。点击查看在线课</div>
						</router-link>
					</li>
					<li>
						<router-link to="/phome/educationList">
							<div class="scheme_img"><img src="../../../../assets/line_img.png" /></div>
							<div class="scheme_title">在线学习</div>
							<div class="scheme_text">在线学习是一个很好的渠道，大家都取得了很好的成绩。点击查看在线课</div>
						</router-link>
					</li>
					<li>
						<router-link to="/phome/educationList">
							<div class="scheme_img"><img src="../../../../assets/line_img.png" /></div>
							<div class="scheme_title">在线学习</div>
							<div class="scheme_text">在线学习是一个很好的渠道，大家都取得了很好的成绩。点击查看在线课</div>
						</router-link>
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