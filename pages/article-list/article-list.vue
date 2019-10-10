<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in articleList" :key="index" @tap="openinfo" :data-article_id="item.post_id">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.author_avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleList: [],
				articleType: ""
			}
		},
		onLoad:function(e) {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.articleType = e.type;
			if(this.articleType == "" ){
				console.log("文章类型为空,获取列表失败！");
				uni.showToast({
				    icon: "none", 
					title: '文章类型为空,获取列表失败！',
				    duration: 2000
				});
				uni.hideToast();
				uni.hideLoading();
				return;
			}
			uni.request({
				//TODO 替换成查询文章列表的url
				url: 'https://unidemo.dcloud.net.cn/api/news?articleType='+this.articleType,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data);
					this.articleList = res.data;
					uni.hideLoading();
				},
				fail: () => {
					console.log("获取历史文章列表失败！");
					uni.showToast({
					    icon: "none", 
						title: '获取住历史文章列表失败！',
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
	.uni-media-list-body{height: auto;}
	.uni-media-list-text-top{line-height: 1.6em;}
</style>
