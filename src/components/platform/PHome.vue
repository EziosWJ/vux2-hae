<template>
	<div>
		<!--S 轮播-->
		<div class="swiper-container J_banner_swiper">
	    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="el in imgList">
        	<a :href="el.url">
        		<img :src="el.img" />
        	</a>
        </div>
	    </div>
	    <div class="swiper-pagination J_banner_pagination"></div>
		</div>
		<!--E 轮播-->
		
		<!--S 导航按钮-->
		<div class="menu_list">
			<ul>
				<li>
					<router-link to="">
						<div class="menu_img"><img src="../../assets/login.png" /></div>
						<div class="menu_text">心理评测</div>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<div class="menu_img"><img src="../../assets/login.png" /></div>
						<div class="menu_text">心理评测</div>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<div class="menu_img"><img src="../../assets/login.png" /></div>
						<div class="menu_text">心理评测</div>
					</router-link>
				</li>
			</ul>
		</div>
			
		<!--E 导航按钮-->
	</div>
</template>

<script>
	import Swiper from 'swiper';//引入swiper
	export default {
		data() {
			return {
				imgList: [{//轮播图列表
						url: "javascript:",
						img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
						title: ""
					},
					{
						url: "javascript:",
						img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
						title: ""
					},
					{
						url: "javascript:",
						img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg", // 404
						title: ""
					}
				],
				mainMenu: []//导航按钮
			};
		},
		components: {
			Swiper
		},
		mounted() {
//			this.getMenu();
			this.bannerSwiper();
		},
		methods: {
			getMenu() {
				this.$axios
					.post(this.Url + "/api/menu", {
						role: this.$store.state.USER_ROLE
					})
					.then(resp => {
						console.log(resp.data);
						this.mainMenu = resp.data.content.mainMenu;
					})
					.catch(error => {
						console.log(error);
					});
			},
			bannerSwiper(){
			  new Swiper ('.J_banner_swiper', {
			    loop: true,
			     pagination: {
		        el: '.J_banner_pagination',
		      },
//			    autoplay: {
//		        delay: 2500,
//		        disableOnInteraction: false,
//		      },
			  })        
			}
		},
		
	};
</script>

<style lang="less" scoped>
.fa {
	display: block;
	font-size: 24px;
}
/*S 轮播*/
.J_banner_swiper{
	img{
		display: block;
		width: 100%;
	}
	.J_banner_pagination{
		bottom: 5px;
		.swiper-pagination-bullet{
			width: 10px;
			height: 10px;
		}
		.swiper-pagination-bullet-active{
			background: #23ddb6;
		}
	}
}
/*E 轮播*/

/*S 导航菜单*/
.menu_list{
	background-color: #fff;
	ul{
		overflow: hidden;
		li{
			float: left;
			width: 33.3%;
		}
	}
}
/*E 导航菜单*/

</style>