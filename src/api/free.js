// 接受最少一个成功回调函数，得到data：{url：XXX}
export const getPictureAPI = (success, error) => {
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://api.gmit.vip/Api/McImg');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var res = JSON.parse(xhr.responseText);
            // 状态码 200 表示请求成功
            if (res.code == 200) {
                success(res.data)
            } else {
                error ? error(res) : console.log(res)
            }
        }
    }
    xhr.send(JSON.stringify(
        {
            format: 'json',
        }
    ));
}
