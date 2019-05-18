import $request from "../../../utils/request.js"

Component({
    properties: {
        book: Object
    },

    data: {
        comment: 0
    },

    ready() {
        this.GetComment()
    },

    methods: {
        GetComment() {
            $request(`/book/${this.properties.book.id }/short_comment`)
                .then(res => {
                    this.setData({ comment: res.comments.length })
                })
        },
        onClick() {
            const id = this.properties.book.id
            wx.navigateTo({
                url: `/pages/bookDetail/bookDetail?id=${id}`
            })
        }
    }
})