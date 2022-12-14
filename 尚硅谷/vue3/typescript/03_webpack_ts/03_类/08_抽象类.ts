//抽象类：抽象类中包含抽象方法(抽象方法中一般没有任何的具体内容的实现)，也可以包含实例方法，
//抽象类是不能被实例化，为了让子类进行实例化及实现内部的抽象方法
//抽象类的目的都是为了子类服务
(()=>{
    //定义一个类
    abstract class Animal{
        //抽象属性
        // abstract name:string
        //抽象方法
        abstract eat()
        //报错的,抽象方法不能有具体实现
        // abstract eat(){}
        //实例方法
        sayHi(){
            console.log('您好啊');
            
        }
    }
    //定义一个子类(派生类)Dog
    class Dog extends Animal{
        // name:string='小黄'
        //重新实现抽象类中的方法,此时这个方法就是当前Dog类的实例方法
        eat() {
            console.log("舔着吃");
            
        }

    }

    //不能实例化抽象类的对象
    // const ani:Animal = new Animal()
    //实例化Dog类对象
    const dog:Dog = new Dog()
    dog.eat()
    //调用的是抽象类中的实例方法
    dog.sayHi()
    // console.log(dog.name);
    
})()