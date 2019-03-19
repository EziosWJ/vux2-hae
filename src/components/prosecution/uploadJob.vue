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
			<div class="job_img" >
				<div class="job_img_main">
					<!-- <img :src="imgList.src"/> -->
				</div>
			</div>
			<div class="job_img">
				<div class="job_img_add">
					<input type="file" id="upload_file" ref="file" @change="handlerFile"/>
				</div>
			</div>
		</div>
					<p id="imgs"></p>
		<div class="bom_btn_out">
			<div class="bom_btn" @click="uploadFile">提交</div>
		</div>
	</div>
	<!--E 上传作业-->
</template>

<script>
import axios from 'axios'
	export default {
		data() {
			return {
				imgList:[],
				file:''
			};
		},

		mounted() {
			document.title = "上传作业";

		},
		methods: {
			handlerFile(e){
				this.file = e.target.files[0];
			},
			uploadFile(){
				let formData = new FormData();
				formData.append("file",this.file);
				formData.append("id","name");
				console.log(formData.get("file"));
				// let instance = axios.create();
				// this.$upload.post('/api/com/upload',formData).then(resp=>{
				// 	console.log(resp.data);
				// })
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange=()=>{
					if (xhr.readyState==4 && xhr.status==200){
						console.log(xhr.response);
						document.getElementById("imgs").innerText = "上传成功！" + xhr.responseText;
					}
				}
				xhr.open('POST', '/api/com/upload', true);
				xhr.send(formData);
			}
		}

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
