import $request from "../../utils/request.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        hot: []
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
        this.getHot()

        // this.getSearch()
    },

    getHot() {
        $request('/book/hot_keyword')
            .then(res => {
                const { hot } = res
                this.setData({
                    hot: hot
                })
            })
            .catch(err => {
                console.log(err)
            })
    },

    getSearch({ value = '', start = 0, count = 20, summary = 0 }) {
        $request(
            `/book/search?q=${value}&start=${start}&count=${count}&summary=${summary}`
        )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    },

    onSearch({ detail }) {
        this.getSearch({
            value: detail.value
        })
    }
})