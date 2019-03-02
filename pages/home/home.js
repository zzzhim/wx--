import $request from "../../utils/request.js"


Page({

    /**
     * 页面的初始数据
     */
    data: {
        movieData: {},
        activeIndex: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.GteData()
    },
    
    GteData() {
        $request('/classic/latest')
            .then(res => {
                this.setData({ activeIndex: res.index })
                this.setData({ movieData: res })
            })
    },

    GetDataPrevious() {
        $request(`/classic/${this.data.movieData.index}/previous`, { index: this.data.movieData.index })
            .then(res => {
                console.log(res)
                this.setData({ movieData: res })
            })
    },

    GetDataNext() {
        $request(`/classic/${this.data.movieData.index}/next`, { index: this.data.movieData.index })
            .then(res => {
                console.log(res)
                this.setData({ movieData: res })
            })
    }
})