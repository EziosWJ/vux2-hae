<template>
	<div>
		<div class="ov pd20 bg_fff">
			<div class="fl f26">被帮教人：{{eduplan.urId}}最后的帮教得分：{{finalScore}}分</div>
			<div class="fr"><img style="width: 1.1rem;" src="../../assets/004.png" v-show="finalScore>=90"></div>
			<div class="fr"><img style="width: 1.1rem;" src="../../assets/003.png" v-show="finalScore>=80&&finalScore<90"></div>
			<div class="fr"><img style="width: 1.1rem;" src="../../assets/002.png" v-show="finalScore>=60&&finalScore<80"></div>
			<div class="fr"><img style="width: 1.1rem;" src="../../assets/001.png" v-show="finalScore<60"></div>
		</div>
		<div class="bg_fff pdlr20">
			<div class="pdb20 b_bom">帮教点评</div>
			<textarea class="comments_text" placeholder="请输入点评内容" v-model="eduplan.epContent"></textarea>
		</div>
		<div class="bom_btn_out">
			<div class="bom_btn" style="z-index: 30;" @click="updateEduplan">
				<span v-show="epContent==''||epContent==null">提交</span>
				<span v-show="epContent!=''&&epContent!=null">修改</span>
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
				score:0,
				eduplan:{},
				epContent:''
			};
		},

		mounted() {
			document.title = "帮教结果";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
			let epId = this.$route.query.epId
			this.score = this.$route.query.score
			console.log(epId);
			this.getEduplan(epId)
			
		},
		methods: {
			getEduplan(epId){
				this.$axios.post('/api/eduplan/getEduplanByEpId',{epId:epId}).then(resp=>{
					this.eduplan = resp.data.content.record
					this.eduplan.epTitle = this.finalScore
					this.epContent = this.eduplan.epContent
				})
			},
			updateEduplan(){
				this.$axios.post('/api/eduplan/updateEduplan',this.eduplan).then(resp=>{
					console.log(resp.data);
					if(resp.data.code==200){
						alert("提交成功！")
					}else if(resp.data.code==555){
						alert("提交失败！")
					}
					setTimeout(() => {
						this.$router.go(-1)
					}, 1000);
				})
			},
		},
		computed:{
			finalScore:{
				get(){
					return this.score;
				}
			}
		}

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
