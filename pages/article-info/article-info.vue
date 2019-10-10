<template>
	<view class="content">
		<view class="title">{{title}}</view>
		<view class="art-content">
			<rich-text class="richText" :nodes="strings"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				title: '',
				strings : ''
			}
		},
		onLoad:function(e){
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.article_id,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data);
					this.title = res.data.title;
					this.strings = res.data.content;
					uni.hideLoading();
				},
				fail: () => {
					console.log("获取文章详情失败！");
					uni.showToast({
					    icon: "none", 
						title: '获取文章详情失败！',
					    duration: 2000
					});
					uni.hideToast();
					uni.hideLoading();
				},
				complete: () => {}
			});
		},
		methods: {
			
		}
	}
</script>

<style>
	.content{
		padding: 10upx 2%;
		width: 96%;
		flex-wrap: wrap;
	}
	.title{
		line-height: 2em;
		font-weight: 700;
		font-size: 38upx;
	}
	.art-content{
		line-height: 2em;
		font-size: 34upx;
	}
	.richText{
		
	}
</style>
