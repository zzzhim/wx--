//app.js
App({
    onLaunch: function () {

        wx.setStorage({
            key: 'music',
            data: { index: -1 }
        })
    },
    globalData: {
        userInfo: null
    }
})