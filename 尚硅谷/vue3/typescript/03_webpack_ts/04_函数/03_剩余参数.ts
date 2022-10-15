//剩余参数(rest参数)
(()=>{
    //...args:string[]剩余的参数放到字符串的数组args里面
    function showMsg(str:string,str2:string,...args:string[]){
        console.log(str);
        console.log(str2);
        
        console.log(args);
        
        
    }
    showMsg('a','b','c','d','e','f','g','h','i')
})()