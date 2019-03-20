<template>
	<!--S 帮教回访-->
	<div>
		<div class="scheme_details b_bom">
			<div class="scheme_details_title">留言主题：{{talk.teName}}</div>
			<div class="scheme_details_data">创建时间：{{talk.teDate}}</div>
			<div class="scheme_details_main">
				<p>{{talk.teContent}}</p>
			</div>
		</div>
		<div class="bg_fff pd20 ov">
			<!-- <div class="info_text main_linear fl">
				帮教人：{{talk.te}}
			</div> -->
			<div class="info_text main_linear fl ml20">
				被帮教人{{talk.urId}}的家长
			</div>
		</div>
		
	</div>
	<!--E 帮教回访-->
</template>

<script>
export default {
	data() {
		return {
			talk:{}
		}
	},
	mounted() {
		document.title="详细信息"
		let id = this.$route.query.id
		this.$axios.post('/api/record/getTalk',{id:id}).then(resp=>{
			this.talk = resp.data.content.record
		})

	},
	methods: {
		
	},
	
};
</script>
<style lang="less" scoped>
.result_img{
	img{
		width: 100%;
	}
}
.color_orange{
	color: #ff991d;
}
.color_999{
	color: #999;
}
.scheme_details{
	background-color: #fff;
	padding: 0.2rem;
	padding-bottom: 0.3rem;
	.scheme_details_title{
		font-size: 0.28rem;
	}
	.scheme_details_data{
		font-size: 0.22rem;
		color: #999;
		margin-top: 0.14rem;
	}
	.scheme_details_main{
		p{
			text-indent: 2em;
			margin-top: 0.2rem;
			line-height: 1.8em;
		}
	}
}
.info_text{
	color: #fff;
	padding: 0 0.2rem;
	line-height: 0.4rem;
	border-radius: 0.2rem;
}
</style>