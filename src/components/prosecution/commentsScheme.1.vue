<template>




	<!--S 点评方案-->
	<div>

				<!--完成任务-->
		<!-- <div v-if="(userData.ucRole==4  )&&  task.state=='1' && showInput"> -->
		<div v-if="(userData.ucRole==4)  && task.state==1"> 
			<div class="bg_fff mt20" >
				<div class="ov pd20 b_bom">
					<div class="fl f26">
						{{task.name}}
					</div>
				</div>
				<div class="pd20 comments_text">
					<textarea class="comments_textarea" placeholder="请输入完成内容" v-model="task.content"></textarea>
				</div>
				<div class="ov pd20">
					<div class="fl f26">
						评分
					</div>
					<div class="fl f26 fen_input">
						<input class="f26" type="number" placeholder="请输入分数" v-model="task.score"/>
					</div>
				</div>
			</div>
			<div class="comments_btn mt20 main_linear" @click="subTask">
				提交
			</div>
		</div>












		<div  v-if="type==2 || type==4">
			<div class="scheme_details_name f28 bg_fff b_bom pd20 pr">
				1、法制电影观看
				<div class="scheme_type c_orange f26">已完成</div>
			</div>
			<div class="scheme_details bg_fff pd20">
				<p>据英国《卫报》12月7日晚间报道，美国宇航局（NASA）前不久发射的洞察号（InSight）探测器首次捕捉到了火星上的风声。10天前，洞察号降落在这颗红色星球上，在运营的第一周就收集到了低频的隆隆声。</p>
	<img src="../../assets/report_banner.jpg"/>
	<p>周五（12月7日）晚上，NASA喷气推进实验室（JPL）发布了火星风声的音频片段。据估计，风速在每小时10到15英里之间。根据研究人员的说法，这些声音是来自火星的第一批可以被人类耳朵探测到的声音。</p>
	<p>据英国《卫报》12月7日晚间报道，美国宇航局（NASA）前不久发射的洞察号（InSight）探测器首次捕捉到了火星上的风声。10天前，洞察号降落在这颗红色星球上，在运营的第一周就收集到了低频的隆隆声。</p>
	<img src="../../assets/report_banner.jpg"/>
	<p>周五（12月7日）晚上，NASA喷气推进实验室（JPL）发布了火星风声的音频片段。据估计，风速在每小时10到15英里之间。根据研究人员的说法，这些声音是来自火星的第一批可以被人类耳朵探测到的声音。</p>
				<div class="text_right f24 c_666">
					完成时间：2018-12-25 10：56
				</div>
			</div>
		</div>
		
		<!--S 未评价-->
		<div v-if="(userData.ucRole==2 || userData.ucRole==3  )&&  type==2 && showInput">
			<div class="bg_fff mt20" >
				<div class="ov pd20 b_bom">
					<div class="fl f26">
						整体评价
					</div>
				</div>
				<div class="pd20 comments_text">
					<textarea class="comments_textarea" placeholder="请输入点评内容"></textarea>
				</div>
				<div class="ov pd20">
					<div class="fl f26">
						帮教人评分
					</div>
					<div class="fl f26 fen_input">
						<input class="f26" type="number" placeholder="请输入分数" />
					</div>
				</div>
			</div>
			<div class="comments_btn mt20 main_linear" @click="subFen">
				提交评价
			</div>
		</div>
		
		<!--E 未评价-->
		
		<div class="bom_btn_out" v-if="(userData.ucRole==3 || userData.ucRole==2 ) && type==2 && !showInput" @click="clickShowInput">
			<div class="bom_btn main_linear">
				帮教人评价
			</div>
		</div>
		
		
		<!--S 已评价-->
		<div class="bg_fff mt20" v-if="type==4">
			<div class="ov pd20 b_bom">
				<div class="fl f26">
					帮教人点评：<span class="c_red">90分</span>
				</div>
			</div>
			<div class="pd20 comments_text">
				李同学观看细致，读后感写的很用心，继续加油！
			</div>
		</div>
		<!--E 已评价-->
		
		<!--S 其他情况-->
		<div class="no_data_box mt40 pdb30" v-if="(userData.ucRole==1 || userData.ucRole==2 || userData.ucRole==3) && type==3">
			<img class="ma no_data_img" src="../../assets/no_data.png"/>
			<div class="text_center mt20 f26 c_999">12001该计划未按时完成</div>
			<div class="no_data_btn main_linear">
				<router-link to="">立即沟通</router-link>
			</div>
		</div>
		<!--E 其他情况-->
		
		<!--S 其他情况-->
		<div class="no_data_box mt40 pdb30" v-if="(userData.ucRole==4 || userData.ucRole==5)  && type==3">
			<img class="ma no_data_img" src="../../assets/no_data.png"/>
			<div class="text_center mt20 f26 c_999">截止时间已过</div>
		</div>
		<!--E 其他情况-->
		
		<!--S 其他情况-->
		<div class="no_data_box pdb30" v-if="(userData.ucRole==4 || userData.ucRole==5) && type==1">
			<div class="scheme_details_name f28 bg_fff b_bom pd20 pr">
				1、法制电影观看
				<div class="scheme_type main_color f26">进行中</div>
			</div>
			<img class="ma no_data_img mt40" src="../../assets/no_data.png"/>
			<div class="text_center mt20 f26 c_999">目前还没有上传作业</div>
			<div class="no_data_btn main_linear" v-if="userData.ucRole==4">
				<router-link to="/uploadJob">立即上传作业</router-link>
			</div>
		</div>
		<!--E 其他情况-->
		
		<!--S 其他情况-->
		<div class="no_data_box mt40 pdb30" v-if="(userData.ucRole==1 || userData.ucRole==2 || userData.ucRole==3) && type==1">
			<img class="ma no_data_img" src="../../assets/no_data.png"/>
			<div class="text_center mt20 f26 c_999">帮教人A暂时没有提交作业</div>
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
			this.getTask('EDUP201902280003');
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
			subTask(){
				this.$axios.post('/api/record/finishedTask',this.task).then(resp => {
					console.log(resp.data);
					this.task = resp.data.content.record;
					console.log(this.task);
					
				})
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
</style>