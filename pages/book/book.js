import $request from "../../utils/request.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookData: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.GetBookData()
    },

    // 获取热门书籍(概要)
    GetBookData() {
        $request('/book/hot_list')
            .then(res => {
                this.setData({ bookData: res })
            })
    }

})