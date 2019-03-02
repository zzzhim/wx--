//app.js
App({
    onLaunch: function () {
        wx.clearStorage()
    },
    globalData: {
        userInfo: null
    }
})