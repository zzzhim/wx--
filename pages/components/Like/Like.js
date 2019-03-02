import $request from "../../../utils/request.js"

Component({
    properties: {
        movieData: Object
    },
    methods: {
        // 取消喜欢
        onClickCancel() {
            const art_id = this.properties.movieData.id
            const type = this.properties.movieData.type

            $request('/like/cancel', { art_id, type }, 'post')
                .then(res => {
                    this.triggerEvent('on-click')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // 喜欢
        onClickLike() {
            const art_id = this.properties.movieData.id
            const type = this.properties.movieData.type

            $request('/like', { art_id, type }, 'post')
                .then(res => {
                    this.triggerEvent('on-click')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
})