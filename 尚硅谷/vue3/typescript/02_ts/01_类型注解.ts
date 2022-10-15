//类型注解是一种轻量级的为函数或者变量添加的约束
(()=>{
    //str是string类型
    function showMsg(str:string){
        return '床前明月光,'+str
    }
    let msg = "疑是地上霜"
    // let msg = [1,2,3,4]

    console.log(showMsg(msg));
    
})()