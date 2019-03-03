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
                    console.log(res)
                    this.setData({ comment: res.comments.length })
                })
        }
    },

    
})