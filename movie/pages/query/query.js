var subjuectUtil = require("../util/subjectUtil.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"",
    hiddenModal:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindKeyInput:function(e){
    this.setData({ inputValue: e.detail.value });
  },
  onConfirm:function(){
    this.setData({ hiddenModal: true });
  },
  search:function(){
    var that = this;
    if (this.data.inputValue == ""){
      this.setData({ hiddenModal:false});
      return
    }
    wx.request({
      url: 'http://t.yushu.im/v2/movie/search?q=' + that.data.inputValue,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        var subjects = res.data.subjects;
        subjuectUtil.processSubjects(subjects);
        that.setData({ movies: subjects })
      }
    })
  },
  detail: function (e) {
    getApp().detail(e);
  }
})