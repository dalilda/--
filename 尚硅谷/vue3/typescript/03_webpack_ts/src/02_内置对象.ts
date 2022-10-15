//js、bom、dom中的内置对象能在ts中使用
(()=>{
    //ECMAScript的内置对象
    let b:Boolean = new Boolean(1);
    let n:Number = new Number(1);
    let s:String = new String('abc');
    let d:Date = new Date()
    let r:RegExp = /^1/
    let e:Error = new Error('error message')
    //上面都是对象,不是基本类型
    // b = true
    console.log(b);
    // let bb:boolean = new Boolean(1)//error

    //BOM和DOM的内置对象
    const div:HTMLElement = document.getElementById('test')
    const divs:NodeList = document.querySelectorAll('div')
    document.addEventListener('click',(event:MouseEvent)=>{
        console.dir(event.target);
    })
})()