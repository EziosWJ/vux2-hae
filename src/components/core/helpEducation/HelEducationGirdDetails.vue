<template>
	<!--S 帮教方案详情-->
	<div class="scheme_details">
		<div class="scheme_details_title">{{schemeDat.epName || ''}}</div>
		<div class="scheme_details_data">创建时间：{{schemeDat.epCreateDate || ''}}</div>
		<div class="scheme_details_main">
			<p v-html="schemeDat.epCustom"></p>
		</div>
	</div>
	<!--E 帮教方案详情-->
</template>

<script>
export default {
	data() {
		return {
			epId:'',//方案ID
			schemeDat:{}
		}
	},
	mounted() {
		document.title="帮教方案";
		if(this.$route.query.epId){
			this.epId = this.$route.query.epId;
		}
		this.getProgramDetails();
	},
	methods: {
		getProgramDetails(){//获取被帮教人列表
			this.$axios.post("/api/eduplan/getEduplanById", {epId:this.epId}, ).then(res => {
				let code = res.data.code;
				if(code === 200){
					this.schemeDat = res.data.content.eduplan || {}
				} else {
					alert("请求错误！")
				}
			}).catch(error => {
				console.log(error);
			});
		},
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

</style>