<template>
	<view class="content">
		<uni-nav-bar>
			<view>
				<input class="searchInput" type="text" confirm-type="search" v-model="searchInputText" placeholder="找新房 找别墅 找商铺 找二手房" @focus="clearSearchInput"/>
			</view>
			<view slot="right">
				<view @tap="checkin">签到</view>
			</view>
		</uni-nav-bar>
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
		
	}
</style>
