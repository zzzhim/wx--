Component({
    properties: {
        detail: Object
    },
    methods: {
        onClick() {
            const detail = this.properties.detail

            wx.navigateTo({
                url: `/pages/likeDetail/likeDetail?id=${detail.id}&type=${detail.type}`
            })
        }
    }
})