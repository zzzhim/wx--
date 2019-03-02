Component({
    properties: {
        movieData: Object,
        activeIndex: Number
    },

    methods: {
        onPrevious() {
            this.triggerEvent('on-previous')
        },

        onNext() {
            this.triggerEvent('on-next')
        }
    }
})