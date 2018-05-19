var subjuectUtil = require("../util/subjectUtil.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      "/asset/img/img.jpg", "/asset/img/img1.jpg", "/asset/img/img2.jpg"
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    //所有图片的高度  
    imgheights: [],
    //图片宽度  
    imgwidth: 750,
    //默认  
    current: 0,
    movies:{},
    cast:"",
    dir:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie();
    console.log(options);
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
  imageLoad: function (e) {
    //获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    console.log(imgwidth, imgheight)
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight
    var imgheights = this.data.imgheights
    //把每一张图片的高度记录到数组里  
    imgheights.push(imgheight)
    this.setData({
      imgheights: imgheights,
    })
  },
  bindchange: function (e) {
    this.setData({ current: e.detail.current })
  },
  loadMovie:function(){
    var that = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        var subjects = res.data.subjects;
        subjuectUtil.processSubjects(subjects);
        that.setData({ movies: subjects})
      }
    })
  },
  detail:function(e){
    getApp().detail(e);
  }
})