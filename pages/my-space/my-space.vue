<template>
	<view class="container">
	  <view class="userinfo">
	    <image class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover"></image>
		<button v-if="userInfo.nickName == ''" class="xs cu-btn bg-red shadow" @tap="showModal" data-target="bottomModal">登陆</button>
	    <text v-if="userInfo.nickName != ''" class="userinfo-nickname  bg-gradual-orange radius text-center shadow-blur" :data-nickname="userInfo.nickName">{{userInfo.nickName}}</text>
	  </view>
	 
	  <view class="cu-list menu card-menu margin-top margin-bottom">
	  	<view class="cu-item" v-if="isAdmin">
	  		<view class="content">
	  			<text class="cuIcon-btn text-yellow"></text>
	  			<text class="text-grey">首页视频</text>
	  		</view>
	  		<view class="action">
	  			<button class="cu-btn round bg-green shadow" @click="videoUpload">
	  				<text class="cuIcon-upload"></text> 上传</button>
	  		</view>
	  	</view>
		<view class="cu-item arrow">
	  		<navigator class="content" hover-class="active" url="../book/new-books/new-books">
	  			<text class="cuIcon-discoverfill text-orange"></text>
	  			<text class="text-grey">预约看房</text>
	  		</navigator>
	  	</view>
		<view class="cu-item arrow">
			<navigator class="content" hover-class="none" url="../book/old-books/old-books">
				<text class="cuIcon-list text-green"></text>
				<text class="text-grey">预约记录</text>
			</navigator>
		</view>
		
		<view class="cu-item arrow" v-if="isAdmin">
			<navigator class="content" hover-class="none" url="../article-edit/article-edit?type=0">
				<text class="cuIcon-text text-red"></text>
				<text class="text-grey">发布文章</text>
			</navigator>
		</view>
		<view class="cu-item arrow" v-if="isAdmin">
			<navigator class="content" hover-class="none" url="../article-edit/article-edit?type=1">
				<text class="cuIcon-writefill text-green"></text>
				<text class="text-grey">编辑文章</text>
			</navigator>
		</view>
		<view class="cu-item arrow" v-if="isAdmin">
			<navigator class="content" hover-class="none" url="../article-edit/article-edit?type=3">
				<text class="cuIcon-sound text-blue"></text>
				<text class="text-grey">编辑公告</text>
			</navigator>
		</view>
		<view class="cu-item arrow">
			<navigator class="content" hover-class="none" url="../article-edit/article-edit?type=1">
				<text class="cuIcon-favorfill text-red"></text>
				<text class="text-grey">我的收藏</text>
			</navigator>
		</view>
		<view class="cu-item arrow">
			<navigator class="content" hover-class="none" url="../article-edit/article-edit?type=1">
				<text class="cuIcon-commentfill text-orange"></text>
				<text class="text-grey">我的评论</text>
			</navigator>
		</view>
		<view class="cu-item arrow">
			<navigator class="content" hover-class="none" url="../article-edit/article-edit?type=1">
				<text class="cuIcon-share text-yellow"></text>
				<text class="text-grey">我的分享</text>
			</navigator>
		</view>
		<view class="cu-item arrow">
			<navigator class="content" hover-class="none" url="../login/login">
				<text class="cuIcon-read text-blue"></text>
				<text class="text-grey">我的浏览</text>
			</navigator>
		</view>
	  	
	  	<view class="cu-item arrow">
	  		<button class="cu-btn content" open-type="contact">
	  			<text class="cuIcon-phone text-olive"></text>
	  			<text class="text-grey">联系我们</text>
	  		</button>
	  	</view>
		
		<view class="cu-item arrow">
			<button class="cu-btn content" open-type="contact">
				<text class="cuIcon-questionfill text-gray"></text>
				<text class="text-grey">开发团队</text>
			</button>
		</view>
	  </view>
	  <view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
	  	<view class="cu-dialog">
	  		<view class="cu-bar bg-white">
				<navigator class="action text-green" hover-class="none" url="../login/login">
					<text>登陆</text>
				</navigator>
	  			<view class="action text-blue" @tap="hideModal">取消</view> 
	  		</view>
	  		<view class="padding-xl">
	  			Modal 内容。
	  		</view>
	  	</view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAdmin: true,
				modalName: "",
				userInfo: {
					avatarUrl: "/static/user-info/anonymous01.png",
					nickName: ""
				}
			}
		},
		onLoad: function () {
			var that = this
			//调用应用实例的方法获取全局数据
			// app.getUserInfo(function (userInfo) {
			// 	//更新数据
			// 	that.setData({
			// 		userInfo: userInfo
			// 	})
			// })
		},
		methods:{
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			//事件处理函数
			login: function(e){
				wx.navigateTo({
					url: '../login/login' 
				})
			},
			videoUpload: function(){
				uni.showModal({
					content: "上传视频",
					showCancel: false
				});
			},
			myFavor: function(){
				uni.showModal({
					content: '我的收藏',
					showCancel: false
				});
			},
			myComment: function(){
				uni.showModal({
					content: '我的评论',
					showCancel: false
				});
			},
			myShare: function(){
				uni.showModal({
					content: '我的分享',
					showCancel: false
				});
			},
			myRead: function(){
				uni.showModal({
					content: '我的阅读',
					showCancel: false
				});
			},
		}
	}
</script>

<style>
	.container {
		font-size: 30px;
	}
	.userinfo {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	  color: #ffffff;
	  height: 300rpx;
	}
	.userinfo-avatar {
	  width: 160rpx;
	  height: 160rpx;
	  margin: 20rpx;
	  background-color: #ccc;
	  border-radius: 50%;
	  border: #E1D7F0 1rpx solid;
	}
	.userinfo-nickname {
	  color: #fff;
	  padding: 2px 5px;
	  font-weight: 600;
	}
	
	/** 使用ColorUI示例改造所需的CSS **/

</style>
