import $request from "../../utils/request.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        hot: [],
        his: [],
        list: [],
        key: '',
        show: false,
        start: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getHot()
    },

    onShow() {
        this.onGetStorage()
    },

    onGetStorage() {
        const that = this
        const his = wx.getStorage({
            key: 'his',
            success: function (res) {
                console.log(res)
                that.setData({
                    his: res.data
                })
            }
        })
    },

    getHot() {
        $request('/book/hot_keyword')
            .then(res => {
                const { hot } = res
                this.setData({
                    hot
                })
            })
            .catch(err => {
                console.log(err)
            })
    },

    getSearch({ value = '', count = 20, summary = 0 }) {
        wx.showLoading({
            title: '加载中'
        })

        const his = this.data.his

        his.includes(value) ? null : his.push(value)
        wx.setStorage({
            key: 'his',
            data: his,
        })

        $request(
            `/book/search?q=${value}&start=${this.data.start}&count=${count}&summary=${summary}`
        )
            .then(res => {
                let show;

                wx.hideLoading()
                show = res.books.length === 0 ? true : false

                this.setData({
                    list: [ ...this.data.list, ...res.books],
                    show,
                    start: res.start + 1
                })
            })
            .catch(err => {
                wx.hideLoading()
                console.log(err)
            })
    },

    onSearch({ detail }) {
        this.setData({
            key: detail.value
        })
        this.getSearch({
            value: detail.value
        })
    },

    onScrollBottom() {
        this.getSearch({
            value: this.data.key
        })
    }
})