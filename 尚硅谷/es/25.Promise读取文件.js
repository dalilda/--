//1.引入 fs模块
const { log } = require('console');
const fs = require('fs');
//2. 调用方法读取文件
// fs.readFile('./resources/为学.md',(err,data)=>{//data中是buffer
//     //如果失败 抛异常
//     if(err) throw err;
//     //没有出错  则输出内容
//     console.log(data.toString());//buffer用tostring转成字符串
// })

// 3. 使用Promise封装
const p = new Promise(function(resolve,reject){
    fs.readFile("./resources/为学1.md",(err,data)=>{
        //如果失败
        if(err) reject(err);
        //如果成功
        resolve(data);
    })
});
p.then(function(value){
    console.log(value.toString());
},function(reason){
    console.log(reason);
})