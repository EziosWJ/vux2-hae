<template>
	<div>
		<group label-width="5em">
			<popup-picker title="被疏导人" :data="tutoredPersonsList" v-model="tutoredPersons" placeholder="请选择" ></popup-picker>
			<popup-picker title="疏导人" :data="channelPeopleList" v-model="channelPeople" placeholder="请选择" ></popup-picker>
			<datetime title="日期选择" v-model="deductionDate" placeholder="请选择"></datetime>
		</group>
		<group>
			<div class="diversion_results ov">
				<div class="fl">疏导结果</div>
				<div class="fr ov diversion_results_list">
					<ul>
						<li :class="{'active':diversionResultsList==0}" @click="diversionResultsList=0">良好</li>
						<li :class="{'active':diversionResultsList==1}" @click="diversionResultsList=1">一般</li>
						<li :class="{'active':diversionResultsList==2}" @click="diversionResultsList=2">不合格</li>
					</ul>
				</div>
			</div>
		</group>
		<div class="diversion_textarea">
			<textarea placeholder="请输入需要描述的详细情况"></textarea>
		</div>
		<div class="persuasion_btn_out">
			<div class="persuasion_btn">提交</div>
		</div>
	</div>
</template>

<script>
	import {Group, PopupPicker, Datetime } from 'vux'

	export default {
		components: {
			Group,
			PopupPicker,
			Datetime
		},
		data() {
			return {
				tutoredPersons:[],//被疏导人
				tutoredPersonsList:[['张三','李四','张三','李四']],//被疏导人列表
				channelPeople:[],//疏导人
				channelPeopleList:[['张三','李四','张三','李四']],//疏导人列表
				deductionDate:'',//疏导日期
				diversionResultsList:null,//疏导结果
			}
		},
		methods: {
			getByTheHelperList() {
				this.$store.dispatch('setByTheHelperList');
			}
		},
		computed: {

		},
		mounted() {
		}
	}
</script>
<style lang="less" scoped>
.diversion_results{
	padding: 10px 15px;
	font-size: 17px;
	
	.diversion_results_list{
		line-height: 26px;
		ul{
			li{
				float: left;
				font-size: 15px;
				padding: 0 10px;
				margin-left:10px;
				background-color: #f2f2f2;
				color: #999999;
				border-radius: 13px;
			}
			li.active{
				background-color: #2AE0A7;
				color: #fff;
			}
		}
	}
}
.diversion_textarea{
	textarea{
		width: 100%;
		box-sizing: border-box;
		border: 0 none;
		background-color: #fff;
		padding: 0.2rem;
		font-size: 0.26rem;
		line-height: 1.5em;
		height: 7.5em;
		min-height:7.5em;
	}
	
}
.persuasion_btn_out{
	height: 0.7rem;
	.persuasion_btn{
		position: fixed;
		font-size: 0.26rem;
		width: 100%;
		left: 0;
		bottom: 0;
		text-align: center;
		color: #fff;
		line-height: 0.7rem;
		background: -webkit-linear-gradient(left,#2ae0a7, #17d7d1); 
	  background: -o-linear-gradient(right,#2ae0a7, #17d7d1);
	  background: -moz-linear-gradient(right,#2ae0a7, #17d7d1); 
	  background: linear-gradient(to right,#2ae0a7, #17d7d1);
	  a{
	  	display: block;
	  }
	}
}
</style>