//ts中书写js中的类,演示效果
(()=>{
    //定义一个接口
    interface IPerson{
        firstName: string
        lastName: string
    }
    class Person{
        //定义公共的字段(属性)
        firstName: string
        lastName: string
        fullName: string
        constructor(firstName: string, lastName: string){
            //更新属性数值
            this.firstName = firstName
            this.lastName = lastName
            this.fullName = this.firstName + "_" + this.lastName
        }
    }
    //创建方法
    function showFullName(person:IPerson){
        // return this//window
        return person.firstName + "_" + person.lastName;
    }

    //实例化对象
    const person = new Person('hu','le')
    console.log(person.fullName);
    console.log(showFullName(person));
    
    
})()