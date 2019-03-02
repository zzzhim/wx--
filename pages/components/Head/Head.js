Component({
    properties: {
        movieData: {
            type: Object
        }
    },
    data: {
        date: {},
        month: [ '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二' ]
    },
    ready() {
    },
    methods: {
        filtersData() {
            const obj = Object.keys(this.properties.movieData)
            if (obj.length > 0) {
                const arr = this.properties.movieData.pubdate.split('-')
                const year = arr[0]
                const month = parseInt(arr[1]) - 1
                const day = arr[2]
                this.setData({ date: { year, month, day } })
            }
        },
        onClick() {
            this.triggerEvent('on-click')
        }
    },
    observers: {
        movieData(val) {
            this.filtersData()
        }
    }
})