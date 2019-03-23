<template>
	<!--S 帮教结果-->
	<div>
		<div class="result_img" >
			<img src="../../../../assets/persuasion_img.jpg" />
		</div>
		<div class="scheme_details" v-show="eduplan.epContent!=''&&eduplan.epContent!=null">
			<div class="scheme_details_title ov">
				<div class="fl">
					您的帮教结果
				</div>
							
			<div class="fr"><img style="width: 1.1rem;" src="../../../../assets/004.png" v-show="finalScore>=90"></div>
			<div class="fr"><img style="width: 1.1rem;" src="../../../../assets/003.png" v-show="finalScore>=80&&finalScore<90"></div>
			<div class="fr"><img style="width: 1.1rem;" src="../../../../assets/002.png" v-show="finalScore>=60&&finalScore<80"></div>
			<div class="fr"><img style="width: 1.1rem;" src="../../../../assets/001.png" v-show="finalScore<60"></div>
			</div>
			<!-- <div class="scheme_details_data">创建时间：2018-02-02</div> -->
			<div class="scheme_details_main">
				<p>评语：{{eduplan.epContent}}</p>
			</div>
		</div>
		<div v-show="eduplan.epContent==''||eduplan.epContent==null">
			请等待结果！
		</div>
		
	</div>
	<!--E 帮教结果-->
</template>

<script>
export default {
	data() {
		return {
			userData:{},
			eduplan:{},
			finalScore:0
		}
	},
	mounted() {
		document.title="帮教结果"
		let userData = JSON.parse(sessionStorage.getItem("userData"));
		this.userData = userData;
		let ucId = userData.ucId
		this.getEduplan(ucId)
	},
	methods: {
			getEduplan(ucId){
				this.$axios.post('/api/eduplan/getEduplanByUrId',{urId:ucId}).then(resp=>{
					this.eduplan = resp.data.content.record
					this.finalScore = this.eduplan.epTitle
				})
			},
	},
	
};
</script>
<style lang="less" scoped>
.result_icon{
	width: 1rem;
	margin-left: 0.2rem;
}
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

</style>