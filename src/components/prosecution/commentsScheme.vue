<template>
	<!--S 点评方案-->
	<div>

				<!--完成任务-->
		<!-- <div v-if="(userData.ucRole==4  )&&  task.state=='1' && showInput"> -->
		<div v-if="(userData.ucRole==4)  && task.state==1"> 
			
			<div class="bg_fff mt20" >
				<div class="ov pd20 b_bom">
					<div class="fl f26">
						任务：{{task.name}}--
					</div>
				</div>
				<div class="pd20 comments_text">
					<textarea class="comments_textarea" placeholder="请输入完成内容" v-model="task.content"></textarea>
				</div>
			<div class="mt20 pd20 b_bom bg_fff">
				上传照片
			</div>
			<div class="job_img_box ov">
				<!-- <div class="job_img" >
					<div class="job_img_main">
						 <img :src="imgList.src"/> 
					</div>
				</div> -->
				<div class="job_img">
					<div class="job_img_add">
						<input type="file" id="upload_file" ref="file" @change="uploadFile"/>
					</div>
				</div>
			</div>
			<p id="imgs"></p>
			</div>
			<div class="comments_btn mt20 main_linear" @click="subTask">
				提交
			</div>
		</div>
		

		
		<!--E 未评价-->
		
		<!-- <div class="bom_btn_out" v-if="(userData.ucRole==3 || userData.ucRole==2 ) && task.state==2 && !showInput" @click="clickShowInput">
			<div class="bom_btn main_linear">
				帮教人评价
			</div>
		</div> -->
		
		<div  v-if="task.state==2">
			<div class="scheme_details_name f28 bg_fff b_bom pd20 pr">
				{{task.name}}
				<div class="scheme_type c_orange f26">已完成</div>
			</div>
			<div class="scheme_details bg_fff pd20">
				完成内容：<p>{{task.content}}</p>
				<img :src="item.orCustom" alt="" v-for="(item, index) in imges" :key="index">
				<p v-if="task.score!=null">分数：{{task.score}}</p>
				<div class="text_right f24 c_666">
					完成时间：{{task.finishedDate}}
				</div>
			</div>
		</div>


				<!--S 未评价-->
		<div v-if="(userData.ucRole==2 || userData.ucRole==3  )&& task.score=='' &&  task.state==2 ">
			<div class="bg_fff mt20" >
				<!-- <div class="ov pd20 b_bom">
					<div class="fl f26">
						整体评价
					</div>
				</div>
				<div class="pd20 comments_text">
					<textarea class="comments_textarea" placeholder="请输入点评内容"></textarea>
				</div> -->
				<div class="ov pd20">
					<div class="fl f26">
						评分
					</div>
					<div class="fl f26 fen_input">
						<input class="f26" type="number" placeholder="请输入分数"  v-model="score"/>
					</div>
				</div>
			</div>
			<div class="comments_btn mt20 main_linear" @click="subTask">
				提交评价
			</div>
		</div>
		<!--S 已评价-->
		<!-- <div class="bg_fff mt20" v-if="task.state==2">
			<div class="ov pd20 b_bom">
				<div class="fl f26">
					任务：{{task.name}}
				</div>
			</div>
			<div class="pd20 comments_text">
				分数：<span class="c_red">{{task.score}}</span><br><br>
				完成内容：{{task.content}}
			</div>
		</div> -->
		<!--E 已评价-->
		
		<!--S 其他情况-->
		<!-- <div class="no_data_box mt40 pdb30" v-if="(userData.ucRole==1 || userData.ucRole==2 || userData.ucRole==3) && task.state==1">
			<img class="ma no_data_img" src="../../assets/no_data.png"/>
			<div class="text_center mt20 f26 c_999">12001该计划未按时完成</div>
			<div class="no_data_btn main_linear">
				<router-link to="">立即沟通</router-link>
			</div>
		</div> -->
		<!--E 其他情况-->
		
		<!--S 其他情况-->
		<!-- <div class="no_data_box mt40 pdb30" v-if="(userData.ucRole==4 || userData.ucRole==5)  && type==3">
			<img class="ma no_data_img" src="../../assets/no_data.png"/>
			<div class="text_center mt20 f26 c_999">截止时间已过</div>
		</div> -->
		<!--E 其他情况-->
		
		<!--S 其他情况-->
		<!-- <div class="no_data_box pdb30" v-if="(userData.ucRole==4 || userData.ucRole==5) && type==1">
			<div class="scheme_details_name f28 bg_fff b_bom pd20 pr">
				1、法制电影观看
				<div class="scheme_type main_color f26">进行中</div>
			</div>
			<img class="ma no_data_img mt40" src="../../assets/no_data.png"/>
			<div class="text_center mt20 f26 c_999">目前还没有上传作业</div>
			<div class="no_data_btn main_linear" v-if="userData.ucRole==4">
				<router-link to="/uploadJob">立即上传作业</router-link>
			</div>
		</div> -->
		<!--E 其他情况-->
		
		<!--S 其他情况-->
		<div class="no_data_box mt40 pdb30" v-if="(userData.ucRole==1 || userData.ucRole==2 || userData.ucRole==3) && task.state==1">
			<img class="ma no_data_img" src="../../assets/no_data.png"/>
			<div class="text_center mt20 f26 c_999">暂时没有提交作业</div>
			<div class="no_data_btn main_linear">
				<router-link to="">立即沟通</router-link>
			</div>
		</div>
		<!--E 其他情况-->
	</div>
	<!--E 点评方案-->
</template>

<script>
	import { Group,Datetime } from 'vux'
	export default {
		data() {
			return {
				type:'',//类型
				showInput:false,//显示评价框
				deductionDate:'',
				userData: {}, //ucRole2检察官  ucRole3帮教人  ucRole4被帮教人  ucRole5家长
				id:'',//task的id 路由传入
				task:{},
				score:'',
				imges:[],
			};
		},
		components: {
			Group,
			Datetime
		},
		mounted() {
			document.title = "被帮教人A的方案";
			this.type = this.$route.query.type
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
			this.id = this.$route.query.id;
			// this.getTask('EDUP201902280003');
			this.getTask(this.id);
			this.getImges(this.id);
		},
		methods: {
			clickShowInput(){
				this.showInput = true;
				setTimeout(()=>{
					let hei  = document.body.offsetHeight+200;
					document.documentElement.scrollTop=hei;
				},500)
			},

			getTask(id){
				this.$axios.post('/api/record/getTaskRecord',{id:id}).then(resp => {
					console.log(resp.data);
					this.task = resp.data.content.record;
					console.log(this.task);
					
				})
			},
			getImges(id){
				this.$axios.post('/api/com/getImges',{id:id}).then(resp => {
					console.log(resp.data);
					this.imges = resp.data;
					console.log(this.task);
					
				})
			},
			subTask(){
				let task = this.task;
				task.score = this.score
				this.$axios.post('/api/record/finishedTask',task).then(resp => {
					console.log(resp.data);
					this.task = resp.data.content.record;
					console.log(this.task);
					if(resp.data.code==200){
						alert("提交成功！");
					}
					if(resp.data.code==555){
						alert("还未到完成时间！");
					}
				})
			},
			handlerFile(e){
				this.file = e.target.files[0];
			},
			uploadFile(e){
				this.file = e.target.files[0];
				let formData = new FormData();
				formData.append("file",this.file);
				formData.append("id",this.id);
				console.log(formData.get("file"));
				// let instance = axios.create();
				// this.$upload.post('/api/com/upload',formData).then(resp=>{
				// 	console.log(resp.data);
				// })
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange=()=>{
					if (xhr.readyState==4 && xhr.status==200){
						console.log(xhr.response);
						//document.getElementById("imgs").innerText = "上传成功！" + xhr.responseText;
						alert("上传成功！");
					}
				}
				xhr.open('POST', '/api/com/upload', true);
				xhr.send(formData);
			}
		},

	};
</script>

<style lang="less" scoped>
.scheme_details_name{
	padding-right: 1rem;
	.scheme_type{
		position: absolute;
		top: 0.2rem;
		right: 0.2rem;
	}
}
.scheme_details{
	overflow: hidden;
	padding-top: 0;
	font-size: 0.26rem;
	color: #666;
	p{
		margin-top: 0.2rem;
		text-indent: 2em;
		line-height: 1.8em;
	}
	img{
		width: 100%;
		margin-top: 0.2rem;
		
	}
}
.comments_btn{
	line-height: 0.7rem;
	color: #fff;
	text-align: center;
	font-size: 0.3rem;
}
.xing_box{
	margin-left: 0.3rem;
	img{
		float: left;
		width: 0.34rem;
	}
}
.comments_text{
	.comments_textarea{
		width: 100%;
		border: 0 none;
		box-sizing: border-box;
		border-radius: 0.1rem;
		line-height: 1.5em;
		height: 6em;
		font-size: 0.26rem;
	}
}
.fen_input{
	margin-left: 0.2rem;
	input{
		width: 2rem;
		border: 0 none;
		
	}
}
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