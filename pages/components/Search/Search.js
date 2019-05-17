Component({

    methods: {
        handleFocus() {
            wx.redirectTo({
                url: '/pages/search/search',
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {},
            })
        }
    }
})