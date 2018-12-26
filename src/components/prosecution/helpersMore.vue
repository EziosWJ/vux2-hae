<template>
	<div>
		<div>
			<img class="wid100" src="../../assets/inquisitor_banner.jpg" v-if="userData.ucRole==2"/>
			<img class="wid100" src="../../assets/education_banner.jpg" v-else-if="userData.ucRole==3"/>
		</div>
		<div class="people_list pdlr20 pdb20 bg_fff ov">
			<ul>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12001</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12002</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12003</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12004</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看方案</router-link></div>
				</li>
				<li class="box_shadow f28 ov pd20 mt20 radius10">
					<div class="fl port">12005</div>	
					<div class="fr small_btn"><router-link :to="{path:'/seeResult',query:{type:'1'}}">查看方案</router-link></div>
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
			document.title = "帮教人王小二";
			let userData = JSON.parse(sessionStorage.getItem("userData"));
			this.userData = userData;
		},
		methods: {
			
		},

	};
</script>

<style lang="less" scoped>


</style>
