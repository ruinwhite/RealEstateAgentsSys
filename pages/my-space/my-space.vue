<template>
	<view class="container">
	  <view class="userinfo">
	    <image class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover"></image>
	    <text class="userinfo-nickname">{{userInfo.nickName}}</text>
	    <image src="/static/user-info/anonymous01.png" class="account-bg">
	    </image>
	  </view>
	 
	  <view class="separate"></view>
	 
	  <view class="order" catchtap="toOrder">
	    <text class="myorder-text">我的订单</text>
	    <text class="myorderlook-text">查看全部订单</text>
	    <image class="next-image" src="../../images/person/next.png"></image>
	  </view>
	  <view class="line"></view>
	 
	  <view class="navs">
	    <block v-for="(item,name) in orderItems" :key="name">
	      <view class="nav-item" catchtap="toOrder" :type="item.name" :typeid="item.typeId">
	        <image :src="item.imageurl" class="nav-image" />
	        <text>{{item.name}}</text>
	      </view>
	    </block>
	  </view>
	 
	  <view class="separate"></view>
	  <view class="person-list">
	    <view class="list-item">
	      <image class="item-image" src="../../images/person/personal_favorite.png"></image>
	      <text class="item-text">我的收藏</text>
	    </view>
	    <view class="person-line"></view>
	    <view class="list-item">
	      <image class="item-image" src="../../images/person/personal_site.png"></image>
	      <text class="item-text">收货地址</text>
	    </view>
	    <view class="person-line"></view>
	    <view class="list-item">
	      <image class="item-image" src="../../images/person/personal_sale_record.png"></image>
	      <text class="item-text">售后记录</text>
	    </view>
	    <view class="person-line"></view>
	    <view class="list-item">
	      <image class="item-image" src="../../images/person/personal_evaluated.png"></image>
	      <text class="item-text">我的评价</text>
	    </view>
	    <view class="person-line"></view>
	    <view class="list-item">
	      <image class="item-image" src="../../images/person/personal_share.png"></image>
	      <text class="item-text">推广邀请</text>
	    </view>
	  </view>
	  <view class="separate"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				motto: 'Hello World',
				// orderItems
				orderItems: [
				  {
				    typeId: 0,
				    name: '待付款',
				    url: 'bill',
				    imageurl: '../../images/person/personal_pay.png',
				  },
				  {
				    typeId: 1,
				    name: '待发货',
				    url: 'bill',
				    imageurl: '../../images/person/personal_shipped.png',
				  },
				  {
				    typeId: 2,
				    name: '待收货',
				    url: 'bill',
				    imageurl: '../../images/person/personal_receipt.png'
				  },
				  {
				    typeId: 3,
				    name: '待评价',
				    url: 'bill',
				    imageurl: '../../images/person/personal_comment.png'
				  }
				]
			}
		},
		//事件处理函数
		toOrder: function () {
			wx.navigateTo({
				url: '../order/order'
			})
		},
		onLoad: function () {
			console.log('onLoad')
			var that = this
			//调用应用实例的方法获取全局数据
			// app.getUserInfo(function (userInfo) {
			// 	//更新数据
			// 	that.setData({
			// 		userInfo: userInfo
			// 	})
			// })
		}
	}
</script>

<style>
	.userinfo {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  background: #f0145a;
	}
	.account-bg {
	  width: 100%;
	  height: 150rpx;
	}
	.userinfo-avatar {
	  width: 108rpx;
	  height: 108rpx;
	  margin: 20rpx;
	  border-radius: 50%;
	}
	.userinfo-nickname {
	  color: #fff;
	}
	/* 订单 */
	.order {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  width: 100%;
	  height: 90rpx;
	}
	.myorder-text {
	  font-size: 30rpx;
	  color: gray;
	  margin: 20rpx;
	  width: 40%;
	}
	.myorderlook-text {
	  font-size: 30rpx;
	  color: gray;
	  position: relative;
	  right: 20rpx;
	  width: 60%;
	  text-align: right;
	}
	.next-image {
	  width: 20rpx;
	  height: 25rpx;
	  position: relative;
	  right: 10rpx;
	}
	.navs {
	  display: flex;
	}
	.nav-item {
	  width: 25%;
	  display: flex;
	  align-items: center;
	  flex-direction: column;
	  padding: 20rpx;
	}
	.nav-item .nav-image {
	  width: 40rpx;
	  height: 40rpx;
	  margin: 5rpx;
	}
	.nav-item text {
	  margin-top: 20rpx;
	  font-size: 25rpx;
	  color: gray;
	}
	/* 列表 */
	.person-list {
	  display: flex;
	  flex-direction: column;
	  align-items: left;
	}
	.list-item {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  height: 80rpx;
	}
	.item-image {
	  width: 40rpx;
	  height: 40rpx;
	  margin: 20rpx;
	}
	.item-text {
	  color: gray;
	  font-size: 25rpx;
	  margin-left: 20rpx;
	}
	.person-line {
	  width: 100%;
	  height: 2rpx;
	  background: lightgray;
	  margin-left: 90rpx;
	}
</style>
