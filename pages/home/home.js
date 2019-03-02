import $request from "../../utils/request.js"


Page({

    /**
     * 页面的初始数据
     */
    data: {
        movieData: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.GteData()
    },
    
    GteData() {
        $request('/classic/latest').then(res => {
            this.setData({ movieData: res })
        })
    }
})