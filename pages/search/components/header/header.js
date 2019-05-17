Component({
    properties: {
        key: String
    },
    data: {
        clearTime: null
    },
    methods: {
        handleInput(e) {
            clearTimeout(this.data.clearTime)
            // this.data.clearTime = setTimeout(() => {
                this.triggerEvent('onSearch', e.detail)
            // }, 300)
        },
        onClick() {
            wx.switchTab({
                url: '/pages/book/book',
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {},
            })
        }
    }
})