import $request from "../../utils/request.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: null,
        type: null,
        movieData: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const { id, type } = options
        this.setData({
            id,
            type
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.getDetail()
    },

    getDetail() {
        $request(`/classic/${this.data.type}/${this.data.id}`)
            .then(res => {
                this.setData({
                    movieData: res
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
})