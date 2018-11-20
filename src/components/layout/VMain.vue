<template>
	<div>
		<router-view></router-view>
		<div class="foot_out">
			<div class="foot_box">
				<ul>
					<li @click="active=0">
						<router-link to="/phome">
							<div class="foot_icon">
								<img src="../../assets/foot_icon1_2.png" v-if="active==0" />
								<img src="../../assets/foot_icon1.png" v-else />
							</div>
							<div class="foot_text" :class="{active:active==0}">首页</div>
						</router-link>
					</li>
					<li  @click="active=1">
						<router-link to="/pperson">
							<div class="foot_icon">
								<img src="../../assets/foot_icon2_2.png" v-if="active==1" />
								<img src="../../assets/foot_icon2.png" v-else />
							</div>
							<div class="foot_text" :class="{active:active==1}">通讯</div>
						</router-link>
					</li>
					<li  @click="active=2">
						<router-link to="/pmine">
							<div class="foot_icon">
								<img src="../../assets/foot_icon3_2.png" v-if="active==2" />
								<img src="../../assets/foot_icon3.png" v-else />
							</div>
							<div class="foot_text" :class="{active:active==2}">我的</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data(){
			return {
				active:0,//导航选中
			}
		}
	}
</script>

<style lang="less" scoped>
.foot_out{
	height: 0.9rem;
}	
.foot_box{
	position: fixed;
	z-index: 100;
	width: 100%;
	background-color: #fff;
	left: 0;
	bottom: 0;
	border-top: 1px solid #F4F4F4;
	ul{
		overflow: hidden;
		li{
			float: left;
			width: 33.3%;
			text-align: center;
			padding: 0.05rem 0;
			font-size: 0.2rem;
			.foot_icon{
				width: 0.45rem;
				margin: 0 auto;
				img{
					width: 100%;
				};
			}
			.foot_text.active{
				color: #19d5d7;
			}
		}
	}
}
</style>