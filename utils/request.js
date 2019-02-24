const api = "http://bl.7yue.pro/v1"

// 封装一个自定义请求
// url: 请求地址
// data: 请求参数
// method: 请求方式
function $request(url, data, method = "get", header = {
            "content-type": "application/json",
            "appkey": "o5AWsnnl36o8SDE4"
        }
    ) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: api + url,
            method: method,
            header: header,
            success(res) {
                if(res.statusCode == 200) {
                    resolve(res.data)
                }else {
                    resolve(res.statusCode)
                }
            },
            fail(err) {
                fail(err)
            }
        })    
    })
}

export default $request