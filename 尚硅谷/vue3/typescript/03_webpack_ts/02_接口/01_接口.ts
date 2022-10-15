//接口
//接口:是一种类型,是一种规范,是一种能力,是一种约束
(()=>{
    //需求:创建人的对象,需要对人的属性进行一定的约束
    //id是number类型,必须要有,只读的
    //name是string类型,必须有
    //age是number类型,必须有
    //sex是string类型,可有可无

    //定义一个接口,该接口作为对象person的类型使用,可以限定/约束该对象中的属性数据
    interface IPerson{
        readonly id:number
        name: string
        age:number
        sex?:string
        
    }

    //定义一个对象,该对象的类型就是我定义的接口IPerson
    const Person:IPerson={
        id:1,
        name:"hule",
        age:25,
        // sex:"male"
    }
    console.log(Person);
    // Person.id = 100
    Person.sex = "male"
    console.log(Person);
    
    
})()