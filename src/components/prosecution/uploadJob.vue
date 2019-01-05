<template>
	<!--S 上传作业-->
	<div class="">
		<div class="pd20 b_bom bg_fff">
			1、法制电影观看，提交截图和观后感
		</div>
		<div class="job_text bg_fff">
			<textarea placeholder="请输入本次活动感悟"></textarea>
		</div>
		<div class="mt20 pd20 b_bom bg_fff">
			上传照片
		</div>
		<div class="job_img_box ov">
			<div class="job_img">
				<div class="job_img_main">
					<img src="../../assets/introduction_img.png"/>
				</div>
			</div>
			<div class="job_img">
				<div class="job_img_main">
					<img src="../../assets/introduction_img.png"/>
				</div>
			</div>
			<div class="job_img">
				<div class="job_img_add">
					<input type="file"/>
				</div>
			</div>
		</div>
		<div class="bom_btn_out">
			<div class="bom_btn">提交</div>
		</div>
	</div>
	<!--E 上传作业-->
</template>

<script>
	export default {
		data() {
			return {
				userData: {}, //ucRole2检察官  ucRole3帮教人  ucRole4被帮教人  ucRole5家长
				
			};
		},

		mounted() {
			document.title = "上传作业";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {
			
		},

	};
</script>

<style lang="less" scoped>
.job_text{
	textarea{
		width: 100%;
		box-sizing: border-box;
		padding: 0.2rem;
		line-height: 1.5em;
		height: 13.5em;
		border-radius:0.1rem;
		border:0;
	}
}
.job_img_box{
	padding: 0 0.1rem;
	padding-bottom: 0.2rem;
	background-color: #fff;
	.job_img{
		padding: 0 0.1rem;
		margin-top: 0.2rem;
		box-sizing: border-box;
		width: 33.3%;
		float: left;
    .job_img_main{
    	height: 1.8rem;
    	overflow: hidden;
    	display: -webkit-flex;
	    display: flex;
	    -webkit-justify-content: center;
	    justify-content: center;
	    align-items: center;
    }
		img{
			height: 100%;
		}
		.job_img_add{
			height: 1.8rem;
			background: url(../../assets/add_img.png) no-repeat center center;
			background-size: 0.6rem auto;
			border: 1px solid #eee;
			position: relative;
			input{
				position: absolute;
				width: 100%;
				height: 100%;
				opacity: 0;
			}
		}
	}
}

</style>
