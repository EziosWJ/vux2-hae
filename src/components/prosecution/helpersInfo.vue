<template>
	<div>
		<div>
			<img class="wid100" src="../../assets/inquisitor_banner.jpg"/>
		</div>
		<!--S 选项卡-->
		<div class="lable_box b_bom">
			<ul>
				<li :class="{'active':current==0}" @click="current=0">制定方案(4)</li>
				<li :class="{'active':current==1}" @click="current=1">帮教中(5)</li>
				<li :class="{'active':current==2}" @click="current=2">已帮教(6)</li>
			</ul>
		</div>
		<!--E 选项卡-->
		<div class="people_list pdlr20 pdb20 bg_fff ov" v-show="current==0">
			<ul>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010101</div>	
					<div class="fr small_btn"><router-link to="/fixedScheme">制定</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010102</div>	
					<div class="fr small_btn"><router-link to="/fixedScheme">制定</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010103</div>	
					<div class="fr small_btn"><router-link to="/fixedScheme">制定</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010104</div>	
					<div class="fr small_btn"><router-link to="/fixedScheme">制定</router-link></div>
				</li>
			</ul>
		</div>
		<div class="people_list pdlr20 pdb20 bg_fff ov" v-show="current==1">
			<ul>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010105</div>	
					<div class="fr small_btn"><router-link to="/seeProgramme">查看</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010106</div>	
					<div class="fr small_btn"><router-link to="/seeProgramme">查看</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010107</div>	
					<div class="fr small_btn"><router-link to="/seeProgramme">查看</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010108</div>	
					<div class="fr small_btn"><router-link to="/seeProgramme">查看</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010109</div>	
					<div class="fr small_btn"><router-link to="/seeProgramme">查看</router-link></div>
				</li>
			</ul>
		</div>
		<div class="people_list pdlr20 pdb20 bg_fff ov" v-show="current==2">
			<ul>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010110</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">优秀</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010111</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'0'}}">良好</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010112</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'0'}}">良好</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010113</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'0'}}">良好</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010114</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'0'}}">良好</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010115</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'0'}}">良好</router-link></div>
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
			document.title = "BJR001";
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
