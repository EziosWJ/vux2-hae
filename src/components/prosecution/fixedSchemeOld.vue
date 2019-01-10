<template>
	<!--S 制定方案-->
	<div>
		<div class="scheme_list_box bg_fff">
			<ul>
				<li class="box_shadow radius10" v-for="el in schemeList">
					<div class="scheme_list_top ov pr b_bom_x" @click="el.select = !el.select">
						<div class="scheme_list_name f28">{{el.name}}</div>
						<img class="scheme_list_icon" v-if="!el.select"  src="../../assets/gou_icon1.png"/>
						<img class="scheme_list_icon" v-if="el.select" src="../../assets/gou_icon2.png"/>
					</div>
					<group label-width="5em">
						<datetime title="截止日期" v-model="el.date"  placeholder="请选择"></datetime>
					</group>
				</li>
			</ul>
		</div>
		<div class="bom_btn_out">
			<div class="bom_btn" @click="subScheme">
				提交
			</div>
		</div>
	</div>
	<!--E 制定方案-->
</template>

<script>
	import { Group,Datetime } from 'vux'
	export default {
		data() {
			return {
				deductionDate:'',
				schemeList:[
					{name:"1、观看法制微电影",date:'',select:false},
					{name:"2、法律法规学习",date:'',select:false},
					{name:"3、初次心理测评",date:'',select:false},
					{name:"4、晋源区二社区劳动服务",date:'',select:false},
					{name:"5、法制案例学习",date:'',select:false},
					{name:"6、在线学习心理常识",date:'',select:false},
					{name:"7、阅读学习未成年保护法",date:'',select:false},
					{name:"8、晋祠公园义务劳动服务",date:'',select:false},
					{name:"9、第二次心理评测",date:'',select:false},
					{name:"10、在线教育视频学习",date:'',select:false},
					{name:"11、思想心得汇报",date:'',select:false},
					{name:"12、志愿者服务",date:'',select:false},
					{name:"13、亲子互动",date:'',select:false},
					{name:"14、绿洲学法试题测试",date:'',select:false},
				],//方案列表
				userData: {}, //ucRole2检察官  ucRole3帮教人  ucRole4被帮教人  ucRole5家长
			};
		},
		components: {
			Group,
			Datetime
		},
		mounted() {
			document.title = "被帮教人张三的方法";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {
			subScheme(){
				alert("提交成功！")
			}
		},

	};
</script>

<style lang="less" scoped>
.scheme_list_box{
	padding: 0.2rem;
	ul{
		li{
			padding: 0.2rem;
			margin-top: 0.2rem;
			.scheme_list_top{
				padding-right: 0.4rem;
				padding-bottom: 0.2rem;
			}
			.scheme_list_icon{
				position: absolute;
				right: 0;
				top: 0.08rem;
				width: 0.3rem;
			}
		}
	}
}
</style>
<style lang="less">
.scheme_list_box{
	.weui-cells{
		margin-top: 0;
		margin-top: 0.2rem;
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
</style>