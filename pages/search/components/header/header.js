Component({

    data: {
        clearTime: null
    },
    methods: {
        handleInput(e) {
            clearTimeout(this.data.clearTime)
            this.data.clearTime = setTimeout(() => {
                this.triggerEvent('onSearch', e.detail)
            }, 500)
        }

    }

})