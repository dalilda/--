//静态成员:在类中通过static修饰的属性或者方法,那么就是静态的属性及静态的成员,也称之为:静态成员
//静态成员在使用的时候是通过类名.的方法来调用的
(()=>{
    //定义一个类
    class Person{
        //静态属性
        //类中有一个内置的name属性,所以呢,此时会出现错误的提示信息
        static name1:string='小甜甜'
        //构造函数是不能通过static来修饰的
        constructor(){
            //此时this是实例对象,name是静态属性,不能通过实例对象直接调用静态属性
            // this.name = name
        }
        //静态方法
        static sayHi(){
            console.log("萨瓦迪卡");
            
        }
    }
    // //实例化对象
    // const person = new Person('小甜甜')
    // //通过实例化对象调用的属性(实例属性)
    // console.log(Person.name);
    // //通过实例化对象调用的方法(实例方法)
    // person.sayHi()
    

    //通过类名.静态属性的方式来访问该成员数据
    console.log(Person.name1);
    //通过类名.静态属性的方式来设置该成员数据
    Person.name1 = '佐助'
    console.log(Person.name1);

    //同过类名.静态方法的方式来调用内部的静态方法
    Person.sayHi()
    
    
    
    
})()