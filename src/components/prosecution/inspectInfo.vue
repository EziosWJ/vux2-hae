<template>
	<div>
		<div>
			<img class="wid100" src="../../assets/inquisitor_banner.jpg"/>
		</div>
		<!--S 选项卡-->
		<div class="lable_box b_bom">
			<ul>
				<li :class="{'active':current==0}" @click="current=0">未帮教(4)</li>
				<li :class="{'active':current==1}" @click="current=1">帮教中(5)</li>
				<li :class="{'active':current==2}" @click="current=2">已帮教(6)</li>
			</ul>
		</div>
		<!--E 选项卡-->
		<div class="people_list pdlr20 pdb20 bg_fff ov" v-show="current==0">
			<ul>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12001</div>	
					<div class="fr small_btn"><router-link to="/fixedScheme">制定方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12002</div>	
					<div class="fr small_btn"><router-link to="/fixedScheme">制定方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12003</div>	
					<div class="fr small_btn"><router-link to="/fixedScheme">制定方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12004</div>	
					<div class="fr small_btn"><router-link to="/fixedScheme">制定方案</router-link></div>
				</li>
			</ul>
		</div>
		<div class="people_list pdlr20 pdb20 bg_fff ov" v-show="current==1">
			<ul>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12005</div>	
					<div class="fr small_btn"><router-link to="/seeProgramme">查看方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12006</div>	
					<div class="fr small_btn"><router-link to="/seeProgramme">查看方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12007</div>	
					<div class="fr small_btn"><router-link to="/seeProgramme">查看方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12008</div>	
					<div class="fr small_btn"><router-link to="/seeProgramme">查看方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12009</div>	
					<div class="fr small_btn"><router-link to="/seeProgramme">查看方案</router-link></div>
				</li>
			</ul>
		</div>
		<div class="people_list pdlr20 pdb20 bg_fff ov" v-show="current==2">
			<ul>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12010</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看结果</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12011</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'0'}}">查看结果</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12012</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'0'}}">查看结果</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12013</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'0'}}">查看结果</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12014</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'0'}}">查看结果</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12015</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'0'}}">查看结果</router-link></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userData: {}, //ucRole2检察官  ucRole3帮教人  ucRole4被帮教人  ucRole5家长
				current:0,
			};
		},

		mounted() {
			document.title = "检察官A";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {
			
		},

	};
</script>

<style lang="less" scoped>
/*E 选项卡*/
	.lable_box {
		ul {
			background-color: #fff;
			overflow: hidden;
			li {
				float: left;
				width: 33.3%;
				text-align: center;
				line-height: 0.8rem;
				font-size: 0.28rem;
			}
			li.active {
				color: #28dfa6;
				border-bottom: 2px solid #28DFA6;
			}
		}
	}
	/*E 选项卡*/

</style>
