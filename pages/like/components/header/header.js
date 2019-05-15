import $request from "../../../../utils/request.js"

Component({
    data: {
        count: 0
    },

    ready() {
        $request('/book/favor/count')
            .then(res => {
                this.setData({ count: res.count })
            })
            .catch(err => {
                console.log(err)
            })
    }
})