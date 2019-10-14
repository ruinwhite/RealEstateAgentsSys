<template>
	<view class="content">
		<uni-card is-full="true" title="详情内容" thumbnail="/static/article-info/Font-Book.png" :extra="readString" >
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
					</view>
					<view class="ai-card-note-count-right">
						<view>
							<label class="ai-card-foot-label">已收藏</label>
							<uni-badge text="2333" type="primary"></uni-badge>
						</view>
						<view class="ai-cart-note-empty"></view>
						<view>
							<label class="ai-card-foot-label">已分享</label>
							<uni-badge text="2" type="success"></uni-badge>
						</view>
					</view>
				</view>
			    <template v-slot:footer>
			        <view class="footer-box">
						<view class="ai-card-foot-wrapper">
							<input class="ai-card-foot-input" type="text" maxlength="100" :value="chatContent" placeholder="评论只能输入100个字哦~" confirm-type="send" @confirm="chatConfirm"/> 
						</view>
						<view v-if="chatList.length == 0">现在还没有评论，快来评论哦~</view>
						<view class="ai-card-foot-chatlist" v-if="chatList.length > 0">
							<uni-list v-for="(item,index) in chatList" :key="index">
								<uni-list-item-custom 
								:title="item.nickName"
								:note="item.chatContent" 
								:thumb="item.userHeadUrl" 
								show-extra-icon="true">
								</uni-list-item-custom>
							</uni-list>
						</view>
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
				articleId: -1,
				authorAvatar: "",
				title: '', //文章标题
				summary: '',
				createAt: '', //文章创建时间
				strings : '', //文章内容
				starCount: 0,
				redoCount: 0,
				readCount: 0,
				readString: "人浏览",
				chatContent: "",
				isStar: false,
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
					userHeadUrl: "/static/article-info/anonymous01.png",
					agreeCount: 101,
					thumbsUpCount: "10"},
					{nickName:"张三",
					chatContent:"差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~差评~",
					createAt:"2019-10-10 19:01:29",
					agreeCount: 101,
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
					thumbsUpCount: "10"}
					]
			}
		},
		onLoad:function(e){
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			this.articleId = e.article_id;
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+this.articleId,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data);
					this.authorAvatar = res.data.author_avatar;
					this.title = res.data.title;
					this.strings = res.data.content;
					this.createAt = res.data.created_at.substr(5);
					this.readCount = 123;
					this.summary = res.data.summary;
					this.readString = this.readCount + this.readString;
					// this.isStar = ...;
					// this.redoCount = ...;
					// this.chatList = ...;
					// this.starList = ...;
					if(this.isStar){
						this.icons.star = "star-filled";
						this.icons.starColor = "#FF0000"
					}
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
		onPullDownRefresh(){
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+this.articleId,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data);
					this.authorAvatar = res.data.author_avatar;
					this.title = res.data.title;
					this.strings = res.data.content;
					this.createAt = res.data.created_at.substr(5);
					this.readCount = 123;
					this.summary = res.data.summary;
					this.readString = this.readCount + this.readString;
					// this.isStar = ...;
					// this.redoCount = ...;
					// this.chatList = ...;
					// this.starList = ...;
					if(this.isStar){
						this.icons.star = "star-filled";
						this.icons.starColor = "#FF0000"
					}
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
		onShareAppMessage(res){
			return {
				title: this.title,
				path: '/pages/article-info/article-info?article_id='+this.articleId,
				imageUrl: this.authorAvatar,
				success: function(){
					uni.showToast({
					    icon: "none", 
						title: '分享成功！',
					    duration: 2000
					});
				},
				fail: function(){
					uni.showToast({
					    icon: "none", 
						title: '分享失败！',
					    duration: 2000
					});
				}
			}		
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
							this.starCount = this.starCount++
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
							this.starCount = this.starCount--
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
				
			},
			chatConfirm : function(e){
				if(e.detail.value == ""){
					uni.showToast({
						icon: "none",
						title: '评论内容不能为空~',
						duration: 2000
					});
					return;
				}
				uni.request({
					//TODO 替换为评论请求
					url: 'http://www.baidu.com',
					method: 'GET',
					data: {},
					success: res => {
						uni.showToast({
							icon: "none",
							title: '评论成功',
							duration: 2000
						});
						this.chatList.push({nickName:"狗蛋",
							chatContent: e.detail.value,
							createAt:"2019-10-10 19:01:29",
							userHeadUrl: "/static/article-info/anonymous01.png"}
						);
						//TODO将最新的评论添加到列表中
						this.chatContent = "";
						uni.startPullDownRefresh();
					},
					fail: () => {
						uni.showToast({
						    icon: "none", 
							title: '评论失败！',
						    duration: 2000
						}); 
					}
				});
			}
			// chatClick : function(){
			// 	uni.request({
			// 		//TODO 替换为评论请求
			// 		url: 'http://www.baidu.com?type=unstar',
			// 		method: 'GET',
			// 		data: {
			// 			userid: 1,
			// 			chatContent: 
			// 		},
			// 		success: res => {
			// 			this.icons.star = "star";
			// 			this.icons.starColor = "#ddd"
			// 			uni.showToast({
			// 				icon: "none",
			// 				title: '评论成功',
			// 				duration: 2000
			// 			});
			// 		},
			// 		fail: () => {
			// 			console.log("评论失败！");
			// 			uni.showToast({
			// 			    icon: "none", 
			// 				title: '评论失败！',
			// 			    duration: 2000
			// 			});
			// 		}
			// 	});
			// }
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
	}
	
	.ai-card-note-count-right {
		display: flex;
		flex-wrap: wrap;
	}
	
	.ai-cart-note-empty {
		width: 5rpx;
	}
	
	.ai-card-foot-wrapper {
		display: flex;
		align-items: center;
		justify-content:center;		
	}
	
	.ai-card-foot-input {
		border: 1rpx solid #555555;
		border-radius: 5px;
		width: 90%;
	}
	
	.ai-card-foot-label {
		padding: 0 8rpx;
	}
	
	.ai-card-foot-chatlist {
		margin: 20rpx 0;
	}
</style>
