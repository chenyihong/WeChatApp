// pages/firstComp/firstComp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    innerText: "文本测试abcdefghijklmnopqrstuvwxyz"
  },
  jump: function(event) {
    console.log('---click---', event);
    wx.navigateTo({
      url: '../pageJump/pageJump',
      success: function() {
        console.log('ok');
      },
      fail: function() {
        console.log('fail');
      },
      complete: function() {
        console.log('done');
      }
    }, )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})