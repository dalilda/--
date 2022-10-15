//函数重载:函数名字相同,函数的参数及个数不同
(()=>{
    //定义一个函数
    //需求:我们有一个add函数,可以接收2个string类型的参数进行拼接,也可以接收2个number类型的参数进行相加
    //函数重载声明
    function add(x:string,y:string):string
    function add(x:number,y:number):number
    //函数声明
    function add(x:string|number,y:string|number):string|number{
        if(typeof x === "string" && typeof y === "string"){
            return x+y
        }else if (typeof x === "number" && typeof y === "number"){
            return x+y
        }
    }

    //函数调用
    //两个参数都是字符串
    console.log(add('诸葛','孔明'));
    //两个参数都是number
    console.log(add(1,2));
    //非法数据,应该要报红才对
    // console.log(add('诸葛',1));
    // console.log(add(1,'孔明'));
    
    
    
    

})()