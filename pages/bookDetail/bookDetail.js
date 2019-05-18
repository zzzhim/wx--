import $request from "../../utils/request.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: null,
        detail: {},
        comments: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id: options.id
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.onGetDetail()
        this.onGetComment()
    },

    onGetDetail() {
        $request(`/book/${this.data.id}/detail`)
            .then(res => {
                this.setData({
                    detail: res
                })
            })
            .catch(err => {
                console.log(err)
            })
    },

    onGetComment() {
        $request(`/book/${this.data.id}/short_comment`)
            .then(res => {
                this.setData({
                    comments: res.comments
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

})