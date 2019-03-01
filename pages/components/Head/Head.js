Component({
    // properties: ['fav', 'pubdate', 'index', 'id' ]
    properties: {
        id: {
            type: String
        },
        fav: {
            type: String
        },
        index: {
            type: String
        },
        pubdate: {
            type: String
        },
    },
    data: {
        date: {},
        month: [ '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二' ]
    },
    ready() {
        this.filtersData()
    },
    methods: {
        filtersData() {
            // pubdate:"2018-06-22"
            const arr = this.properties.pubdate.split('-')
            const year = arr[0]
            const month = parseInt(arr[1]) - 1
            const day = arr[2]
            this.setData({ date: { year, month, day } })
        }
    }
})