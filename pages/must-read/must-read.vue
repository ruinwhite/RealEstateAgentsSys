<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in mustReadList" :key="index" @tap="openinfo" :data-article_id="item.post_id">
				<uni-card
					class="mr-card"
				    mode="style"
				    :is-shadow="true"
				    :thumbnail="item.author_avatar"
				    :extra="item.created_at"
				    :note="item.type"
				>
					<view class="uni-title">{{item.title}}</view>
					<view class="mr-card-summary"><text class="uni-h5">摘要:</text>{{item.summary}}</view>
				</uni-card>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mustReadList: []
			}
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			
			uni.request({
				//TODO 替换成查询文章列表的url
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data);
					this.mustReadList = res.data;
					uni.hideLoading();
				},
				fail: () => {
					console.log("获取列表失败！");
					uni.showToast({
					    icon: "none", 
						title: '获取列表失败！',
					    duration: 2000
					});
					uni.hideToast();
					uni.hideLoading();
				},
				complete: () => {}
			});
		},
		methods: {
			openinfo(e){
				var article_id = e.currentTarget.dataset.article_id;
				uni.navigateTo({
					url: '/pages/article-info/article-info?article_id='+article_id,
				});
			}
		}
	}
</script>

<style>
	.mr-card {
		width: 100%;
		text-shadow:1px 1px 1px #000;
	}
	
	.mr-card-title {
		
	}
	
	.mr-card-summary {
		text-shadow: none;
	}
	
	.uni-media-list-body{height: auto;}
	.uni-media-list-text-top{line-height: 1.6em;}
</style>

