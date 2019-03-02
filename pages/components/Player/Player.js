Component({
    properties: {
        movieData: {
            type: Object,
        }
    },

    data: {
        music: null,
        play: false,
        bool: true
    },

    ready() {
        const play = wx.getStorageSync('play')

        this.data.music = wx.getBackgroundAudioManager()

        if (play.index == this.data.movieData.index) {
            if (play.play) {
                this.setData({ play: true })
            }else {
                this.setData({ play: false })
            }
        }

        // 监听背景音频播放事件
        this.data.music.onPlay(() => {
            this.setData({ play: true, bool: false })
        })

        // 监听音乐停止
        this.data.music.onStop(() => {
            this.setData({ bool: true,play: false })
        })


        // 监听背景音频暂停事件
        this.data.music.onPause(() => {
            this.setData({ play: false })
        })

        // 监听背景音频自然播放结束事件
        this.data.music.onEnded(() => {
            this.setData({ bool: true, play: false })
        })

        // 监听背景音频播放错误事件
        this.data.music.onError(() => {
            this.setData({ bool: true, play: false })
        })
    },
    
    methods: {
        onPlay() {
            if(this.data.bool) {
                this.data.music.src = this.properties.movieData.url
                this.data.music.title = this.properties.movieData.title

                wx.setStorage({
                    key: 'play',
                    data: {
                        index: this.data.movieData.index,
                        play: true
                    },
                    success() {
                        this.data.music.play()
                    }
                })
            }else {
                this.data.music.play()
            }
        },

        onOut() {
            this.data.music.pause()
        }
    },
    
    observers: {
        play(val) {
            const obj = wx.getStorageSync('play')
            obj.play = val
            wx.setStorage({
                key: 'play',
                data: obj
            })
        }
    }
})