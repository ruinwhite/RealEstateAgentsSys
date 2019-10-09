<template>
	<view class="content">
		<uni-nav-bar>
			<view>
				<input class="searchInput" type="text" confirm-type="search" v-model="searchInputText" placeholder="找新房 找别墅 找商铺 找二手房" />
			</view>
			<view slot="right">
				<view @tap="checkin">签到</view>
			</view>
		</uni-nav-bar>
		<uni-card is-full="true" title="DCloud" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" extra="2018.12.12" >
		    <view class="uni-list">
		    	<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index" @tap="openinfo" :data-newsid="item.post_id">
		    		<view class="uni-media-list">
		    			<image class="uni-media-list-logo" :src="item.author_avatar"></image>
		    			<view class="uni-media-list-body">
		    				<!-- <view class="uni-media-list-text-top">{{item.title}}</view> -->
		    				<!-- <view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view> -->
							<view class="uni-media-list-text-top">123456</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">123</view> 
		    			</view>
		    		</view>
		    	</view>
		    </view>
		</uni-card>
		<uni-card
		    title="标题文字"
		    mode="style"
		    :is-shadow="true"
		    thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"
		    extra="Dcloud 2019-05-20 12:32:19"
		    note="Tips"
		>
		        那是一个秋意盎然、金风送爽的日子，我和父母一起来到了位于上师大旁的康健园。一踏进公园，一股浓郁的桂香扑鼻而来，泌人心脾,让我心旷神怡，只见一朵朵开得正烈的金色桂花，迎风而立，仿佛在向我招手。我们追着这桂香，走进了清幽的公园。
		</uni-card>

		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
		<view @tap="openlist">文章列表</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				searchInputText: ''
			}
		}, 
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data);
					this.news = res.data;
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		},
		onReachBottom() {
			console.log("到底了~");
		},
		methods: {
			checkin(){
				uni.showToast({
				    title: '签到成功+1',
				    duration: 2000,
					icon: "none"
				});
			},
			openlist(e){
				uni.navigateTo({
					url: '../article-list/article-list',
				});
			}
		}
	}
</script>

<style>
	.searchInput{
		border: 1px #4CD964 solid;
		border-radius: 5px;
		width: 480rpx;
	}
</style>
