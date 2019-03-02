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
        const music = wx.getStorageSync('music')

        this.data.music = wx.getBackgroundAudioManager()

        if(music.index == this.data.movieData.index) {
            const play = wx.getStorageSync('play')

            if (play.play) {
                this.data.music.src = this.properties.movieData.url
                this.data.music.title = this.properties.movieData.title

                this.data.music.startTime = music.time
            }

            this.setData({ play: play.play })
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

            const obj = wx.getStorageSync('play')
            obj.play = false
            wx.setStorage({
                key: 'play',
                data: obj
            })
        })

        // 监听背景音频自然播放结束事件
        this.data.music.onEnded(() => {
            this.setData({ bool: true, play: false })
        })

        // 监听背景音频播放错误事件
        this.data.music.onError(() => {
            this.setData({ bool: true, play: false })
        })
        
        // 监听背景音频播放进度更新事件
        this.data.music.onTimeUpdate(() => {
            const play = wx.getStorageSync('play')

            const obj = {
                index: play.index,
                time: this.data.music.currentTime
            }

            wx.setStorage({
                key: 'music',
                data: obj
            })
        })

    },
    
    methods: {
        onPlay() {
            if(this.data.bool) {
                this.data.music.title = this.properties.movieData.title
                this.data.music.src = this.properties.movieData.url

                wx.setStorage({
                    key: 'play',
                    data: {
                        index: this.data.movieData.index,
                        play: true
                    }
                })

                this.data.music.play()
            }else {
                this.data.music.play()
            }
        },
        onOut() {
            this.data.music.pause()
        }
    }
})