<template>
	<div>
		<div>
			<img class="wid100" src="../../assets/inquisitor_banner.jpg" v-if="userData.ucRole==2 || userData.ucRole==1"/>
			<img class="wid100" src="../../assets/education_banner.jpg" v-else-if="userData.ucRole==3"/>
		</div>
		<div class="help_statistics pd20">
			优秀5人/良好2人/及格8人/不及格1人
		</div>
		<div class="people_list pdlr20 pdb20 bg_fff ov">
			<ul>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010101</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010102</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010103</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010104</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">2019010105</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看</router-link></div>
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
			document.title = "BJR002";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {
			
		},

	};
</script>

<style lang="less" scoped>
.help_statistics{
	font-size: 0.22rem;
}

</style>
