## JSONP解决跨域ajax的问题
- JSONP只能解决get类型请求的ajax跨域问题
- JSONP本质上不是ajax请求，只是一般的get请求
### 浏览器端:
- 1.动态生成script标签用来发送get请求。(src就是接口的URL地址);
```javascript
$('#btn').click(function(){
    // 动态创建script标签
    js = document.createElement('script');
    js.id = "js";
    js.src = "http://localhost:3000?callback=fn";   // 这是是要请求的
    $('body').append(js);
})
```
- 2. 定义好用于接收响应数据的函数，并将函数名通过请求参数提交给后台（如：callback=fn）
```javascript
function fn(data){  //必须要和js.src连接中的callBack=fn的fn名字一致
    console.log(data);
    var html = "";
    data.forEach(function(item){
        html += '<li>'+ item +'</li>'
    });
    $('#ul').html(html);
    $('#js').remove();//删除创建的script标签
}
```
### 服务器端:
    - 收到响应自动执行函数调用的js代码，也就执行了提前定义好的回调函数，并得到了需求的结果数据
```javascript
const express = require('express');
const e = require('express');
const app = express();
app.get('/',(req,res,next)=>{
    console.log(req.query);
    let callback = req.query.callback;
    if(callback){
        res.send(`${callback}&&${callback}(${JSON.stringify([1,2,3,4,5,6])})`)
    }else{
        res.send({
            code: 0,
            data: [1,2,3,4,5,6]
        })
    }
})
app.listen(3000,()=>{
    console.log("启动了")
})
```
