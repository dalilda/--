(()=>{
    function sayHi(str:string){
        return 'hello'+str
    }
    let text = 'hule'
    console.log(sayHi(text));
    
})()
//ts的文件中,如果直接书写js语法的代码,html文件直接引入ts文件,在谷歌浏览器中可以直接使用
//如果ts文件中有了ts的语法的代码,就需要把这个ts文件编译成js文件,html中引入js文件来使用

//ts文件中的函数中的形参,如果使用了某个类型进行修饰,那么最终在编译的js文件中没有这个类型的
//ts文件中的变量使用的是let进行修饰,编译的js文件中修饰符就变成了var了