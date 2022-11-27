let xhr = new XMLHttpRequest();
xhr.open("get", "1.txt", true)
//请求方式 地址 是否异步
xhr.send()

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        if (xhr.status === 200) {
            // console.log(xhr.responseURL, '3');
            console.log("success:", JSON.parse(xhr.responseText))
        } else {
            console.log("error", xhr.responseText)
        }
    }
    // console.log('tong;', xhr.readyState)
}
xhr.onload = () => {
    console.log(xhr.responseText)
}