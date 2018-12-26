<template>
	<!--S 帮教方案-->
	<div class="evaluation_out">
		<div class="evaluation_banner">
			<img src="../../../assets/scheme_banner.jpg" />
		</div>
		<div class="evaluation_content">
			<div class="evaluation_num">共{{allList}}条内容</div>
			<div class="scheme_list">
				<ul>
					<li v-for="el in dataList">
						<router-link :to="{path:'/phome/HelEducationGirdDetails',query:{epId:el.epId}}">
							<div class="scheme_img"><img src="../../../assets/scheme_img.png" /></div>
							<div class="scheme_title">{{el.epName}}</div>
							<div class="scheme_text" v-html="el.epContent"></div>
							<div class="scheme_data">创建时间：{{el.epCreateDate}}</div>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="no_text" v-if="isLast">没有了~</div>
			<div class="more_btn" @click="clickMoreList" v-else>点击加载更多</div>
		</div>
		
	</div>
	<!--E 帮教方案-->
</template>

<script>
export default {
	data() {
		return {
			page:1,
			size:10,
			allList:0,
			dataList:[],
			isLast:false
		}
	},
	mounted() {
		document.title="帮教方案";
		this.getProgramList();//获取帮教方案列表
	},
	methods: {
		getProgramList(){//获取帮教方案列表
			this.$axios.post("/api/eduplan/getEduplanList", {pageNum:this.page,pageSize:this.size}, ).then(res => {
				let code = res.data.code;
				if(code === 200){
					this.dataList= this.dataList.concat(res.data.content.page.list) || [];
					this.isLast = res.data.content.page.lastPage || 0;
					this.allList = res.data.content.page.totalRow || 0;
				} else {
					alert("请求错误！")
				}
			}).catch(error => {
				console.log(error);
			});
		},
		clickMoreList(){
			this.page++;
			this.getProgramList();//获取帮教方案列表
		}
	},
	
};
</script>
<style lang="less" scoped>
.color_orange{
	color: #ff991d;
}
.color_999{
	color: #999;
}
.evaluation_out{
	background-color: #fff;
	padding-bottom: 0.3rem;
}
.evaluation_banner{
	img{
		width: 100%;
	}
}

.evaluation_content{
	padding: 0 0.25rem;
	.evaluation_num{
		margin-top: 0.2rem;
	}
	.scheme_list{
		ul{
			li{
				box-shadow: 0 0 5px #ccc;
				margin-top: 0.2rem;
				border-radius: 0.1rem;
				padding: 0.2rem;
				padding-left: 1.8rem;
				position: relative;		
				min-height:1.4rem ;		
				.scheme_img{
					position: absolute;
					left: 0.2rem;
					top: 0.2rem;
					width: 1.4rem;
					height: 1.4rem;
					overflow: hidden;
					img{
						width: 100%;
					}
				}
				.scheme_title{
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					font-size: 0.26rem;
				}
				.scheme_text{
					font-size: 0.22rem;
					color: #999;
					line-height: 1.5em;
					height: 2.8em;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				.scheme_data{
					line-height: 1.2em;
					color: #999;
					font-size: 0.22rem;
					margin-top: 0.1rem;
				}
			}
			.scheme_small{
				padding-left: 0.2rem;
			}
		}
	}
}
.more_btn{
	margin-top: 0.2rem;
	text-align: center;
	line-height: 0.6rem;
	background-color: #f2f2f2;
	border-radius: 0.1rem;
	font-size: 0.24rem;
}
.no_text{
	text-align: center;
	margin-top: 0.2rem;
	line-height: 0.6rem;
	font-size: 0.24rem;
	color: #666;
}
</style>