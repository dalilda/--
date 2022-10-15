//接口:是一种能力,一种约束而已

(()=>{
    //定义一个接口
    interface IPerson{
        firstName:string
        lastName:string
    }

    //在形参后面加类型,里面.的时候会提示属性
    function showFullName(person){
        return person.firstName + " " + person.lastName
    }
    const person={
        firstName:'东方',
        lastName:'不败',
        // age:'1'
    }
    console.log(showFullName(person))
    
})()