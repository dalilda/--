//继承:类与类之间的关系
//继承后类与类之间的叫法:
//A类继承了B类,那么A类叫子类,B类叫基类
//基类---->超类(父类)
//一旦发生了继承的关系,就出现了父子类的关系(叫法)
(()=>{
    //定义一个类
    class Human{
        
    }
    class Person{
        //定义属性
        name:string
        age:number
        gender:string
        //定义构造函数
        constructor(name:string="小明", age:number=18, gender:string="男"){
            //更新属性数据
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        //定义实例方法
        sayHi(str:string){
            console.log(`我是${this.name},${str}`);
        }
    }
    //定义一个类,继承自Person
    class Student extends Person{
        constructor(name:string, age:number, gender:string){
            //调用父类中的构造函数,使用的是super
            super(name,age,gender)
            // console.log("***");
            // console.log(this.name,this.age,this.gender);
            
        }
        //可以调用父类中的方法
        sayHi(str: string): void {
            console.log("我是学生类中的sayHi方法");
            super.sayHi(str)
        }
    }
    //实例化Person
    const person = new Person()
    person.sayHi('你好')
    const stu = new Student('小甜甜',16,'女')
    stu.sayHi('你好')

    //1.子类继承父类需要用extends关键字
    //2.子类可以使用父类的构造方法,需要使用super
    //3.构造方法可以使用默认值,直接在形参那里用=赋值就行
    //4.子类可以调用父类中的实例方法,也可以重写实例方法
})()