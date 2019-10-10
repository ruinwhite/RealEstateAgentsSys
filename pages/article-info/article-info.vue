<template>
	<view class="content">
		<uni-card is-full="true" title="详情内容" thumbnail="/static/article-info/Font-Book.png" :extra="createAt" >
		    <view>
				<view class="title">{{title}}</view>
				<view class="art-content">
					<rich-text class="richText" :nodes="strings"></rich-text>
				</view>
			</view>
			<uni-card title="留言区" note="true">
				<view class="ai-card-note-header">
					<view class="ai-card-note-btn-left">
						<view @click="starClick">收藏<uni-icons :type="icons.star" :color="icons.starColor"></uni-icons></view>
						<view @click="redoClick">分享<uni-icons :type="icons.redo" :color="icons.redoColor"></uni-icons></view>
					</view>
					<view @click="chatClick">评论<uni-icons :type="icons.chat" :color="icons.chatColor"></uni-icons></view>
				</view>
			    <template v-slot:footer>
			        <view class="footer-box">
					<view class="uni-form-item uni-column">
						<input class="uni-input" type="text" maxlength="100" placeholder="评论只能输入100个字哦" />
					</view>
					<view v-if="chatList.length == 0">现在还没有评论，快来评论哦~</view>
			        </view>
			    </template>
			</uni-card>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				title: '',
				createAt: '',
				strings : '',
				icons:{
					star: "star",
					starColor: "#ddd",
					redo: "redo",
					redoColor: "#ddd",
					chat: "chat",
					chatColor: "#ddd"
				},
				chatList:[
					{nickName:"张三",
					chatContent:"差评~",
					createAt:"2019-10-10 19:01:29",
					thumbsUpCount: "10"},
					{nickName:"张三",
					chatContent:"差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~",
					createAt:"2019-10-10 19:01:29",
					thumbsUpCount: "10"},
					{nickName:"张三",
					chatContent:"差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~",
					createAt:"2019-10-10 19:01:29",
					thumbsUpCount: "10"},
					{nickName:"张三",
					chatContent:"差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~",
					createAt:"2019-10-10 19:01:29",
					thumbsUpCount: "10"},
					{nickName:"张三",
					chatContent:"差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~",
					createAt:"2019-10-10 19:01:29",
					thumbsUpCount: "10"},
					{nickName:"张三",
					chatContent:"差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~",
					createAt:"2019-10-10 19:01:29",
					thumbsUpCount: "10"},
					{nickName:"张三",
					chatContent:"差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~",
					createAt:"2019-10-10 19:01:29",
					thumbsUpCount: "10"},
					{nickName:"张三",
					chatContent:"差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~",
					createAt:"2019-10-10 19:01:29",
					thumbsUpCount: "10"},
					]
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
					this.createAt = res.data.created_at;
					this.createAt = this.createAt.substr(5);
					uni.hideLoading();
				},
				fail: () => {
					console.log("获取文章详情失败！");
					uni.showToast({
					    icon: "none", 
						title: '获取文章详情失败！',
					    duration: 2000
					});
					uni.hideLoading();
				},
				complete: () => {}
			});
		},
		methods: {
			starClick : function(){
				//TODO 判断是否登录主要判断全局是否存在userid
				if(this.icons.star == "star"){
					uni.request({
						//TODO 替换为收藏请求
						url: 'http://www.baidu.com?type=star',
						method: 'GET',
						data: {},
						success: res => {
							this.icons.star = "star-filled";
							this.icons.starColor = "#FF0000"
							uni.showToast({
								icon: "none",
								title: '收藏成功',
								duration: 2000
							});
						},
						fail: () => {
							console.log("收藏失败！");
							uni.showToast({
							    icon: "none", 
								title: '收藏失败！',
							    duration: 2000
							});
						},
						complete: () => {}
					});
				}else{
					uni.request({
						//TODO 替换为收藏请求
						url: 'http://www.baidu.com?type=unstar',
						method: 'GET',
						data: {},
						success: res => {
							this.icons.star = "star";
							this.icons.starColor = "#ddd"
							uni.showToast({
								icon: "none",
								title: '取消收藏成功',
								duration: 2000
							});
						},
						fail: () => {
							console.log("收藏失败！");
							uni.showToast({
							    icon: "none", 
								title: '取消收藏失败！',
							    duration: 2000
							});
						}
					});
				}
			},
			redoClick : function(){
				uni.showToast({
					icon: "none",
					title: '分享',
					duration: 2000
				})
			},
			chatClick : function(){
				
			}
		}
	}
</script>

<style>
	.content{
		padding: 10rpx 2%;
		width: 96%;
		flex-wrap: wrap;
	}
	.title{
		line-height: 2em;
		font-weight: 700;
		font-size: 38rpx;
	}
	.art-content{
		line-height: 2em;
		font-size: 34rpx;
	}
	.ai-card-note-header {
		display: flex;
		justify-content: space-between;
	}
	
	.ai-card-note-btn-left{
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-content: space-between;
	}
</style>
