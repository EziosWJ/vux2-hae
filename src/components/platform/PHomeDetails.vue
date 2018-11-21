<template>
	<div class="home_details">
		<div class="details_img"><img src="../../assets/introduction_img.png" /></div>
		<div class="details_text">
			<p>静芳工作室是太原市晋源区人民检察院便民服务平台，主要功能是法制宣传、帮教等。静芳工作室在未检工作中表现突出</p>
			<p>在档案册里，还有去年3月在西湖边抢劫的音乐少年小力。当得知小力是来杭州报考音乐学院的时候，很多杭州人为之惋惜。小力的案子移交给西湖区检察院审查起诉后，小力认识到自己的错误，他的家人也代为赔偿了被害人的损失，得到了被害人的谅解……综合这些因素，同时考虑小力是初犯、偶犯，西湖区检察院对其定罪不捕。小力如期参加了考试，并最终考上了大学。</p>
			<p>静芳工作室是太原市晋源区人民检察院便民服务平台，主要功能是法制宣传、帮教等。静芳工作室在未检工作中表现突出</p>
		</div>
		<div class="introduction_list">
			<div class="block_title">联系方式</div>
			<ul>
				<li class="introduction_list1">
					<a href="tel:0351-88866655">0351-88866655</a>
				</li>
				<li class="introduction_list2">jingfanggongzuoshi@163.com</li>
				<li class="introduction_list3">地址：太原市晋源区人民检察院</li>
			</ul>
		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				
			};
		},

		mounted() {
			document.title = "办公室介绍";
		},
		methods: {
			
		},

	};
</script>

<style lang="less" scoped>
	.home_details{
		background-color: #fff;
		padding-bottom: 0.3rem;
	}
	.details_img{
		img{
			width: 100%;
		}
	}
	/*S 工作室介绍*/
	.details_text{
		margin-top: 0.1rem;
		padding: 0 0.3rem;
		padding-bottom: 0.2rem;
		border-bottom: 1px solid #eee;
		p{
			text-indent: 2em;
			line-height: 1.8em;
			margin-top: 0.25rem;
			font-size: 0.22rem;
		}
	}

	.introduction_list {
		padding: 0 0.3rem;
		margin-top: 0.2rem;
		ul {
			li {
				margin-top: 0.14rem;
				font-size: 0.22rem;
				padding-left: 0.4rem;
				background: no-repeat left center;
				background-size: 0.3rem auto;
			}
			.introduction_list1 {
				background-image: url(../../assets/info_icon1.png);
			}
			.introduction_list2 {
				background-image: url(../../assets/info_icon2.png);
			}
			.introduction_list3 {
				background-image: url(../../assets/info_icon3.png);
			}
		}
	}
	/*E 工作室介绍*/
</style>
