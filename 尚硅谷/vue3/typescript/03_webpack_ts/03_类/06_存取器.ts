//存取器:让我们可以有效的控制对 对象中成员的访问,通过getters和setters来进行操作
(()=>{
    //外部可以传入姓氏和名字数据,同时使用set和get控制姓名的数据,外部也可以进行修改操作
    class Person{
        firstName:string
        lastName:string
        constructor(firstName:string, lastName:string){
            this.firstName = firstName
            this.lastName = lastName
        }
        //姓名的成员属性(外部可以访问,也可以修改)
        //读取器,读取数据
        get fullName(){
            console.log("get中...");
            return this.firstName+"_"+this.lastName
        }
        //设置器,设置数据
        set fullName(val){
            console.log("set中...");
            //把姓名分开存放到firstName和lastName中
            let names = val.split("_")
            this.firstName = names[0]
            this.lastName = names[1]

        }
    }
    //实例化对象
    const person = new Person('东方','不败')
    console.log(person);
    //获取该属性成员数据
    console.log(person.fullName);
    person.fullName = "诸葛_孔明"
    console.log(person.fullName);
    
})()