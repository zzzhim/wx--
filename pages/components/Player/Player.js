Component({
    properties: {
        movieData: Object
    },

    data: {
        music: null,
        play: false,
        bool: true
    },

    ready() {
        this.data.music = wx.getBackgroundAudioManager()
        this.data.music.title = this.properties.movieData.title

        // 监听背景音频播放事件
        this.data.music.onPlay(() => {
            console.log(this.data.music.title)
            this.setData({ play: true })
        })

        // 监听音乐停止
        this.data.music.onStop(() => {
            this.setData({ play: false })
        })


        // 监听背景音频暂停事件
        this.data.music.onPause(() => {
            this.setData({ play: false })
        })

        // 监听背景音频自然播放结束事件
        this.data.music.onEnded(() => {
            this.setData({ play: false })
        })

        // 监听背景音频播放错误事件
        this.data.music.onError(() => {
            this.setData({ play: false })
        })
    },
    
    methods: {
        onPlay() {
            if(this.data.bool) {
                this.data.music.src = this.properties.movieData.url
                this.setData({ bool: false })
            }

            this.data.music.play()
        },
        onOut() {
            console.log('stop')
            this.data.music.pause()
        }
    }
})