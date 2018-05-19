var bmap = require('../../js/bmap-wx.min.js');  

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ak: "OS9bl3b3wCMwxvOldXuLmy7dwe6NCL1i",
    city:"",
    today:"",
    todayInfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadInfo();
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
  loadInfo:function(){
    var page = this
    var BMap = new bmap.BMapWX({
      ak: page.data.ak
    });   
    var fail = function (data) {
      // console.log(data);
    };
    var success = function (data) {
      //返回数据内，已经包含经纬度  
      console.log(data);
      //使用wxMarkerData获取数据  
      var wxMarkerData = data.wxMarkerData;
      var city = data.originalData.result.addressComponent.city;
      city = city.replace("市","")
      //把所有数据放在初始化data内  
      page.setData({
        // markers: wxMarkerData,
        // latitude: wxMarkerData[0].latitude,
        // longitude: wxMarkerData[0].longitude,
        // address: wxMarkerData[0].address,
        city: city
      })
      page.loadWeather(city)
    };
    BMap.regeocoding({
      fail: fail,
      success: success,      
    }); 
    
  },
  loadWeather:function(city){
    var page = this;
    wx.request({
      url: 'http://wthrcdn.etouch.cn/weather_mini?city='+city,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        var future = res.data.data.forecast;
        var todayInfo = future.shift();
        var today = res.data.data;
        console.log(todayInfo)
        page.setData({ today: today, future: future, todayInfo: todayInfo});
      }
    })
  }
})