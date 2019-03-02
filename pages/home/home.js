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
    // 获取最新一期
    GteData() {
        $request('/classic/latest')
            .then(res => {
                this.setData({ activeIndex: res.index })
                this.setData({ movieData: res })
            })
    },
    // 获取上一期
    GetDataPrevious() {
        $request(`/classic/${this.data.movieData.index}/previous`, { index: this.data.movieData.index })
            .then(res => {
                console.log(res)
                this.setData({ movieData: res })
            })
    },

    // 获取下一期
    GetDataNext() {
        $request(`/classic/${this.data.movieData.index}/next`, { index: this.data.movieData.index })
            .then(res => {
                console.log(res)
                this.setData({ movieData: res })
            })
    },

    // 获取某一期详细信息
    GetCertain() {
        // $request(`/classic/8/1`, { id: 1, type: 100 })
        //     .then(res => {
        //         console.log('出来了')
        //         this.setData({ movieData: res })
        //     })
    }

})