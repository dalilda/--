//类 类型:类的类型,类的类型可以通过接口来实现

(()=>{
    //定义一个接口
    interface IFly{
        //该方法没有任何的实现
        fly()
    }
    //定义一个类,这个类的类型就是上面定义的接口
    class Person implements IFly{
        fly() {
            console.log("i can fly");
            
        }

    }
    const person = new Person()
    person.fly()

    //定义一个接口
    interface ISwim{
        swim()
    }
    //定义一个类,这个类的类型就是IFly和ISwim(当前这个类可以实现多个接口,一个类同时可以被多个接口进行约束)
    //接口是个能力,一个类可以有多个能力
    class Person2 implements IFly,ISwim{
        fly() {
            console.log("flying...");
            
        }
        swim() {
            console.log("swim...");
            
        }
    }
    const person2 = new Person2()
    person2.fly()
    person2.swim()

    //总结:类可以通过接口的方式,来定义当前这个类的类型
    //类可以实现一个接口,类也可以实现多个接口,要注意,接口中的内容都要真正的实现
    interface flySwim extends IFly,ISwim{

    }

    class Person3 implements flySwim{
        fly() {
            console.log("fly3");
            
        }
        swim() {
            console.log("swim3");
            
        }
    }
    const person3 = new Person3()
    person3.fly()
    person3.swim()
    //总结: 接口和接口之间叫继承(extends关键字),类和接口之间叫实现(implements关键字)
    //关键字小写
})()