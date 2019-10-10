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
		
		<uni-card is-full="false" title="别墅精选" thumbnail="/static/index/house.png" note="tips" is-shadow="true">
		    <view class="uni-list">
		    	<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in villaList" v-if="index<5" :key="index" @tap="openinfo" :data-article_id="item.post_id">
		    		<view class="uni-media-list">
		    			<image class="uni-media-list-logo" :src="item.author_avatar"></image>
		    			<view class="uni-media-list-body">
		    				<view class="uni-media-list-text-top">{{item.title}}</view>
		    				<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
		    			</view>
		    		</view>
		    	</view>
		    </view>
			<template v-slot:footer>
				<navigator hover-class="navigator-hover" url="/pages/article-list/article-list?type=villaList">
					<button type="default">查看全部</button>
				</navigator>
			</template>
		</uni-card>
		
		<uni-card is-full="false" title="精品公寓" thumbnail="/static/index/apartmanlife.png" note="tips" is-shadow="true">
		    <view class="uni-list">
		    	<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in apartmentList" v-if="index<5" :key="index" @tap="openinfo" :data-article_id="item.post_id">
		    		<view class="uni-media-list">
		    			<image class="uni-media-list-logo" :src="item.author_avatar"></image>
		    			<view class="uni-media-list-body">
		    				<view class="uni-media-list-text-top">{{item.title}}</view>
		    				<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
		    			</view>
		    		</view>
		    	</view>
		    </view>
			<template v-slot:footer>
				<navigator hover-class="navigator-hover" url="/pages/article-list/article-list?type=apartmentList">
					<button type="default">查看全部</button>
				</navigator>
			</template>
		</uni-card>
		<uni-card is-full="false" title="优选住宅" thumbnail="/static/index/park.png" note="tips" is-shadow="true">
		    <view class="uni-list">
		    	<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in residenceList" v-if="index<5" :key="index" @tap="openinfo" :data-article_id="item.post_id">
		    		<view class="uni-media-list">
		    			<image class="uni-media-list-logo" :src="item.author_avatar"></image>
		    			<view class="uni-media-list-body">
		    				<view class="uni-media-list-text-top">{{item.title}}</view>
		    				<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
		    			</view>
		    		</view>
		    	</view>
		    </view>
			<template v-slot:footer>
				<navigator hover-class="navigator-hover" url="/pages/article-list/article-list?type=residenceList">
					<button type="default">查看全部</button>
				</navigator>
			</template>
		</uni-card>
		
		<uni-card is-full="false" title="不限购" thumbnail="/static/index/coffee.png" note="tips" is-shadow="true">
		    <view class="uni-list">
		    	<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in noQuotaList" v-if="index<5" :key="index" @tap="openinfo" :data-article_id="item.post_id">
		    		<view class="uni-media-list">
		    			<image class="uni-media-list-logo" :src="item.author_avatar"></image>
		    			<view class="uni-media-list-body">
		    				<view class="uni-media-list-text-top">{{item.title}}</view>
		    				<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
		    			</view>
		    		</view>
		    	</view>
		    </view>
			<template v-slot:footer>
				<navigator hover-class="navigator-hover" url="/pages/article-list/article-list?type=noQuotaList">
					<button type="default">查看全部</button>
				</navigator>
			</template>
		</uni-card>
		
		<uni-card is-full="false" title="热门商铺" thumbnail="/static/index/hot.gif" note="tips" is-shadow="true">
		    <view class="uni-list">
		    	<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in hotShopsList" v-if="index<5" :key="index" @tap="openinfo" :data-article_id="item.post_id">
		    		<view class="uni-media-list">
		    			<image class="uni-media-list-logo" :src="item.author_avatar"></image>
		    			<view class="uni-media-list-body">
		    				<view class="uni-media-list-text-top">{{item.title}}</view>
		    				<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
		    			</view>
		    		</view>
		    	</view>
		    </view>
			<template v-slot:footer>
				<navigator hover-class="navigator-hover" url="/pages/article-list/article-list?type=hotShopsList">
					<button type="default">查看全部</button>
				</navigator>
			</template>
		</uni-card>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				searchInputText: '',
				villaList:[],
				apartmentList:[],
				residenceList:[],
				noQuotaList:[],
				hotShopsList:[]
			}
		}, 
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			uni.request({
				//TODO 替换为别墅精选查询
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					this.villaList = res.data;
					uni.hideLoading();
				},
				fail: () => {
					console.log("获取别墅精选文章列表失败！");
					uni.showToast({
						icon: "none", 
					    title: '获取别墅精选列表失败！',
					    duration: 2000
					});
					uni.hideToast();
					uni.hideLoading();
				}
			});
			
			uni.request({
				//TODO 替换为公寓精选查询
				url: '',
				method: 'GET',
				data: {},
				success: res => {
					this.apartmentList = res.data;
					uni.hideLoading();
				},
				fail: () => {
					console.log("获取公寓精选文章列表失败！");
					uni.showToast({
						icon: "none", 
					    title: '获取公寓精选列表失败！',
					    duration: 2000
					});
					uni.hideToast();
					uni.hideLoading(); 
				}
			});
			
			uni.request({
				//TODO 替换为住宅优选查询
				url: '',
				method: 'GET',
				data: {},
				success: res => {
					this.residenceList = res.data;
					uni.hideLoading();
				},
				fail: () => {
					console.log("获取住宅优选列表失败！");
					uni.showToast({
					    icon: "none", 
						title: '获取住宅优选文章列表失败！',
					    duration: 2000
					});
					uni.hideLoading();
				}
			});
			
			uni.request({
				//TODO 替换为住宅不限购查询
				url: '',
				method: 'GET',
				data: {},
				success: res => {
					this.noQuotaList = res.data;
					uni.hideLoading();
				},
				fail: () => {
					console.log("获取住宅不限购列表失败！");
					uni.showToast({
					    icon: "none",
						title: '获取住宅不限购文章列表失败！',
					    duration: 2000
					});
					uni.hideLoading();
				}
			});
			
			uni.request({
				//TODO 替换为热门商铺查询
				url: '',
				method: 'GET',
				data: {},
				success: res => {
					this.hotShopsList = res.data;
					uni.hideLoading();
				},
				fail: () => {
					console.log("获取热门商铺列表失败！");
					uni.showToast({
					    icon: "none",
						title: '获取热门商铺文章列表失败！',
					    duration: 2000
					});
					uni.hideLoading();
				}
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
			},
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
	.searchInput{
		border: 1px #4CD964 solid;
		border-radius: 5px;
		width: 480rpx;
	}
	
	/* 精品别墅card 内部样式*/
	
	.uni-media-list-body{height: auto;}
	.uni-media-list-text-top{line-height: 1.6em;}
	
</style>
