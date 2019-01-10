<template>
	<div>
		<div class="ov pd20 bg_fff">
			<div class="fl f26">20181202002帮教得分：86分</div>
			<div class="fr"><img style="width: 1.1rem;" src="../../assets/004.png"/></div>
		</div>
		<div class="bg_fff pdlr20">
			<div class="pdb20 b_bom">帮教点评</div>
			<textarea class="comments_text" placeholder="请输入点评内容"></textarea>
		</div>
		<div class="bom_btn_out">
			<div class="bom_btn" style="z-index: 30;">
				提交
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userData: {}, //ucRole2检察官  ucRole3帮教人  ucRole4被帮教人  ucRole5家长
				current:0,
			};
		},

		mounted() {
			document.title = "帮教结果";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {
			
		},

	};
</script>

<style lang="less" scoped>
.comments_text{
	border: 0 none;
	line-height: 1.5em;
	width: 100%;
	margin-top: 0.2rem;
	height: 10em;
	font-size: 0.26rem;
	box-sizing: border-box;
}

</style>
