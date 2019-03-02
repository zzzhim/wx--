import $request from "../../../utils/request.js"

Component({
    properties: {
        movieData: {
            type: Object,
            value: {
                like_status: 0,
                fav_nums: 0
            }
        }
    },

    data: {
        like_status: 0,
        fav_nums: 0
    },

    methods: {
        // 取消喜欢
        onClickCancel() {
            const art_id = this.properties.movieData.id
            const type = this.properties.movieData.type

            $request('/like/cancel', { art_id, type }, 'post')
                .then(res => {
                    // this.triggerEvent('on-click')
                    this.setData({
                        like_status: 0,
                        fav_nums: this.data.fav_nums - 1
                    })
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
                    // this.triggerEvent('on-click')
                    this.setData({
                        like_status: 1,
                        fav_nums: this.data.fav_nums + 1
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },

    observers: {
        movieData(val) {
            if (val != null) {
                const key = Object.keys(val)
                if (key.length != 0) {
                    this.setData({
                        like_status: val.like_status,
                        fav_nums: val.fav_nums
                    })
                }
            }
        }
    }
})