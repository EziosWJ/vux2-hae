<template>
	<!--S 制定方案-->
	<div class="bg_fff">
		<div class="deadline_box">
			<div class="deadline_text">帮教期限：</div>
			<group>
				<div class="fl deadline_list">
					<datetime v-model="starDate"  placeholder="请选择开始日期"></datetime>
				</div>
				<div class="deadline_line"></div>
				<div class="fl deadline_list">
					<datetime v-model="endDate"   placeholder="请选择结束日期"></datetime>
				</div>
			</group>
		</div>

		<div class="date_list_box" v-if="dateList.length">
			<div class="date_list_main pr" v-for="(el,index) in dateList">
				<div>
					<div class="date_list_text fl">
						{{el.startDate}}至{{el.endDate}}
					</div>
					<div class="fr date_list_btn main_linear" @click="clickAddScheme(index)">+添加项目</div>
					<div class="cl"></div>
				</div>
				<div class="scheme_list_box" v-if="el.schemeList.length">
					<ul>
						<li class="box_shadow radius10 bg_fff" v-for="(item,itemIndex) in el.schemeList">
							<div class="scheme_list_top ov pr b_bom_x">
								<div class="scheme_list_name f28">{{item.name}}</div>
								<img class="scheme_list_icon" src="../../assets/del_icon.png" @click="clickDelScheme(index,itemIndex)"/>
							</div>
							<group label-width="5em">
								<datetime title="截止日期" v-model="item.dieDate"  placeholder="请选择"></datetime>
							</group>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<from>
		<div class="popup_box">
			<popup-picker :show.sync="showPopupPicker" :show-cell="false"  popup-title="选择帮教方案" :data="selectScheme" :show-name="true" v-model="scheme" @on-change="onChange"></popup-picker>
		</div>
		</from>
		<div class="bom_btn_out">
			<div class="bom_btn" style="z-index: 30;" @click="subScheme">
				提交
			</div>
		</div>
		
	</div>
	<!--E 制定方案-->
</template>

<script>
	import { Group,Datetime } from 'vux'
	import { PopupPicker  } from 'vux';//引入Picker
	export default {
		data() {
			return {
				starDate:'',
				endDate:'',
				dateList:[],//时间轴
				dateListIndex:'',//需要添加方案对应时间的所以值
				scheme:[''],//选择的方案
				selectScheme:[],
				showPopupPicker: false,
				userData: {}, //ucRole2检察官  ucRole3帮教人  ucRole4被帮教人  ucRole5家长
				listArray:[],
				array:[]
			};
		},
		components: {
			Group,
			Datetime,
			PopupPicker
		},
		watch:{
			starDate(val){
				if (this.starDate !="" && this.endDate != "") {
					let starDate = new Date(this.starDate).getTime();
					let endDate = new Date(this.endDate).getTime();
					if(starDate-endDate>=0){
						alert("请选择正确的结束日期！");
					}else{
						this.getDateList();
					}
				}
			},
			endDate(val){
				if (this.starDate !="" && this.endDate != "") {
					let starDate = new Date(this.starDate).getTime();
					let endDate = new Date(this.endDate).getTime();
					if(starDate-endDate>=0){
						alert("请选择正确的结束日期！");
					}else{
						this.getDateList();
					}
				}
			}
		},
		mounted() {
			document.title = "制定2019010108的方案";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
			this.getSelectList()
			this.urId = this.$route.query.urId;
		},
		methods: {
			getSelectList(){
					this.$axios.post('/api/com/taskList').then(resp=>{
						this.selectScheme.push(resp.data)
					console.log(this.selectScheme)
					})
			},
			getDateList(){
				let start = new Date(this.starDate).getTime();
				let end = new Date(this.endDate).getTime();
				let num = Math.floor((end-start)/2592000000);
				let surplus =  Math.floor(((end-start)%2592000000)/86400000);
				this.dateList = [];
				if (num>0){
					for (let i = 0;i<num;i++) {
						let data ={};
						data.id = i;
						data.schemeList = [];
						if (i==0) {
							data.startDate =this.timestampToTime(start);
							data.endDate = this.timestampToTime(start+2592000000);
						}else{
							data.startDate = this.timestampToTime(start+2592000000*i+86400000);
							data.endDate =this.timestampToTime(start+2592000000*(i+1));
						}
						this.dateList.push(data);
					}
				}
				if(surplus>0){
					let data ={};
					if(num>0){
						data.id = num;
						data.startDate = this.timestampToTime(start+2592000000*num+86400000);
					}else{
						data.id = 0;
						data.startDate = this.timestampToTime(start);
					}
					data.endDate = this.timestampToTime(end);
					data.schemeList = [];
					this.dateList.push(data);
				}
			},
			clickDelScheme(el,index){
				//删除方法
				this.dateList[el].schemeList.splice(index,1);
			},
			clickAddScheme(index){
				//添加方案
				this.showPopupPicker = true;
				this.dateListIndex = index;
			},
			onChange(val){
				console.log(val)
				//方案选择
				let sel = this.selectScheme[0].filter(item => item.value==val[0])[0];
				sel.dieDate = "";
				this.dateList[this.dateListIndex].schemeList.push(sel);
			},
			subScheme(){
				let arr = [];
				let list = this.dateList;
				for(let i =0;i<list.length;i++){
					if(list[i].schemeList.length){
						for(let n =0;n<list[i].schemeList.length;n++){
							delete list[i].schemeList[n].value
							arr.push(list[i].schemeList[n]);
						}
					}
				}
				console.log(arr);
				this.$axios.post('/api/eduplan/putEduplan',{epCustom:JSON.stringify(arr),epStartTime:this.starDate,epEndTime:this.endDate,urId:this.urId}).then(resp=>{
						if(resp.data.code=="200"){
							alert("提交成功")
						}
				})
				
			},
			timestampToTime(timestamp,type) {//将时间戳转化为日期格式
		    //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		    if (timestamp.length==10){
		      var date = new Date(timestamp * 1000);
		    }else{
		      var date = new Date(timestamp);
		    }
		    
		    var Y = date.getFullYear() + '-';
		    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		    var D = (date.getDate() < 10 ? '0' + date.getDate(): date.getDate()) +' ';
		    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())+ ':';
		    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
		    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
		    if (type){
		      if (type == "date") {
		        return Y + M + D;
		      } else if (type == "dateTime") {
		        return Y + M + D + h + m + s;
		      } else if (type == "time") {
		        return h + m + s;
		      }
		    } else {
		      return Y + M + D;
		    }
		  },
		},

	};
</script>

<style lang="less" scoped>
.date_list_box{
	padding: 0 0.2rem;
	padding-bottom: 0.2rem;
	margin-top: 0.8rem;
	.date_list_main{
		line-height: 2em;
		font-size:0.26rem;
		padding-top:0.4rem;
		padding-left:0.6rem;
		.date_list_text{
			background-color: #f2f2f2;
			padding: 0 0.2rem;
			position: relative;
			border-radius: 0.06rem;
		}
		.date_list_text:before{
			content: "";
			position: absolute;
			left:-0.18rem ;
			width: 0.2rem;
			height: 100%;
			background: url(../../assets/arrow_left_gary.png) no-repeat right center;
			background-size: auto 0.2rem;
		}
		.date_list_btn{
			padding: 0 0.1rem;
			border-radius: 0.06rem;
			color: #fff;
		}
	}
	.date_list_main:before{
		content: "";
		position: absolute;
		width: 0.1rem;
		left: 0;
		top: 0.5rem;
		height: 0.1rem;
		background-color: #fff;
		border: 0.1rem solid #2AE0A7;
		border-radius: 50%;
		z-index: 10;
	}
	.date_list_main:after{
		content: "";
		position: absolute;
		width: 1px;
		top: 0;
		left:0.14rem;
		height: 100%;
		background-color: #2AE0A7;
	}
	
	.date_list_main:first-child:after{
		content: "";
		position: absolute;
		width: 1px;
		left:0.14rem;
		top: 0.5rem!important;
		bottom:0!important;
		background-color: #17BC85;
	}
	.date_list_main:last-child:after{
		content: "";
		position: absolute;
		width: 1px;
		left:0.14rem;
		top: 0;
		height:0.54rem;
		background-color: #17BC85;
	}
}
.scheme_list_box{
	ul{
		li{
			padding: 0.1rem 0.2rem;
			margin-top: 0.2rem;
			.scheme_list_top{
				padding-right: 0.4rem;
				padding-bottom: 0.1rem;
			}
			.scheme_list_icon{
				position: absolute;
				right: 0;
				top: 0.08rem;
				width: 0.4rem;
			}
		}
	}
}
</style>
<style lang="less">
.deadline_box{
	position: fixed;
	width: 100%;
	box-sizing: border-box;
	top: 0;
	left: 0;
	box-shadow: 0 0 10px #ccc;
	padding:0.2rem;
	background-color: #fff;
	padding-left: 1.5rem;
	line-height: 1.5em;
	z-index: 20;
	.deadline_text{
		position: absolute;
		left: 0.2rem;
		top: 0.2rem;
		font-size: 0.26rem;
	}
	.vux-cell-placeholder{
		text-align: center;
	}
	.deadline_list{
		width: 50%;
	}
	.weui-cell{
		padding: 0;
	}
	.weui-cells{
		margin-top: 0;
		font-size: 0.26rem;
		line-height: 1.5em;
	}
	.weui-cell__ft{
		text-align: center;
		padding: 0 10px!important;
	}
	.weui-cells:before,.weui-cells:after{
		border: 0 none;
	}
	.weui-cell__ft:after{
		height: 0!important;
		width: 0!important;
		border: 0!important;
	}
	.deadline_line{
		position: absolute;
		width: 15px;
		height: 1px;
		background-color: #CCCCCC;
		top: 50%;
		left: 50%;
		margin-left: -7px;
	}
}

.scheme_list_box{
	.weui-cells{
		margin-top: 0;
		margin-top: 0.1rem;
	}
	.weui-cell{
		padding: 0;
		font-size: 0.28rem;
	}
	.weui-cells:before{
		border-top: 0;
	}
	.weui-cells:after{
		border-bottom: 0;
	}
}
.popup_box{
	.vux-cell-box:not(:first-child):before{
		left: 0;
		border: 0;
		width: 0;
	}
}

</style>