Component({
    properties: {
        title: String,
        content: Array
    },
    methods: {
        handleClick(e) {
            const key = e.currentTarget.dataset.key
            this.triggerEvent('onSearch', { value: key })
        }
    }
})