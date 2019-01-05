<template>
	<!--S 帮教回访-->
	<div>
		<div class="scheme_details b_bom">
			<div class="scheme_details_title">应急方案：做好应急措施，把好2道关做好应急措施，把好2道关</div>
			<div class="scheme_details_data">创建时间：2018-02-02</div>
			<div class="scheme_details_main">
				<p>在档案册里，还有去年3月在西湖边抢劫的音乐少年小力。当得知小力是来杭州报考音乐学院的时候，很多杭州人为之惋惜。小力的案子移交给西湖区检察院审查起诉后，小力认识到自己的错误，他的家人也代为赔偿了被害人的损失，得到了被害人的谅解……综合这些因素，同时考虑小力是初犯、偶犯，西湖区检察院对其定罪不捕。小力如期参加了考试，并最终考上了大学。</p>
				<p>虽然早已过了考察期，小力也如愿进了大学，但就在不久前，小力还是给“西子姐姐”写来了一封信，说他在大学的生活很充实，自己的表现也很不错，谢谢“西子姐姐”……</p>
				<p>检察院未检科负责人郑蕾说，从2017年未检科成立至今，他们已帮教了十多名涉罪未成年人。他们每个人的成长经历不同、引发犯罪的原因不同，所以，“西子姐姐”对他们的帮教方案也力求个性化，取得了很好的效果。</p>
			</div>
		</div>
		<div class="bg_fff pd20 ov">
			<div class="info_text main_linear fl">
				帮教人：BJR001
			</div>
			<div class="info_text main_linear fl ml20">
				被帮教人：2019010101
			</div>
		</div>
		
	</div>
	<!--E 帮教回访-->
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	mounted() {
		document.title="详细信息"
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