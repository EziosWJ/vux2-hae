<template>
	<!--S 在线教育2-->
	<div class="evaluation_out">
		<div class="evaluation_content">
			<div class="scheme_list">
				<ul>
					<li>
						<router-link to="">
							<div class="scheme_img"><img src="../../../../assets/teacher_img.png" /></div>
							<div class="scheme_title">必备基础心理学知识，找回更好的必备基础心理学知识，找回更好的</div>
							<div class="scheme_name">周晓鹏</div>
							<div class="scheme_text">在线学习是一个很好的渠道，大家都取得了很好的成绩。点击查看在线课</div>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<div class="scheme_img"><img src="../../../../assets/teacher_img.png" /></div>
							<div class="scheme_title">必备基础心理学知识，找回更好的必备基础心理学知识，找回更好的</div>
							<div class="scheme_name">周晓鹏</div>
							<div class="scheme_text">在线学习是一个很好的渠道，大家都取得了很好的成绩。点击查看在线课</div>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<div class="scheme_img"><img src="../../../../assets/teacher_img.png" /></div>
							<div class="scheme_title">必备基础心理学知识，找回更好的必备基础心理学知识，找回更好的</div>
							<div class="scheme_name">周晓鹏</div>
							<div class="scheme_text">在线学习是一个很好的渠道，大家都取得了很好的成绩。点击查看在线课</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
	<!--E 在线教育2-->
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
	padding-bottom: 0.3rem;
}

.evaluation_content{
	.evaluation_num{
		margin-top: 0.2rem;
	}
	.scheme_list{
		ul{
			li{
				background-color: #fff;
				margin-top: 0.2rem;
				border-radius: 0.1rem;
				padding: 0.2rem;
				padding-left: 1.8rem;
				position: relative;		
				min-height:2rem ;		
				.scheme_img{
					box-shadow: 0 0 10px #ccc;
					position: absolute;
					left: 0.2rem;
					top: 0.2rem;
					width: 1.4rem;
					height: 1.95rem;
					border-radius: 0.1rem;
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
				.scheme_name{
					margin-top: 0.2rem;
					color: #999;
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