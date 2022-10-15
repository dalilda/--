//修饰符(类中成员的修饰符):主要是描述类中的成员(属性、方法、构造器)的可访问性
//类中的成员都有自己默认的访问修饰符,public
//public修饰符,类中的成员默认的修饰符,代表是公共的,任何位置都可以**通过对象**访问类中的成员
//private修饰符,类中的成员如果使用private来修饰,那么外部是无法访问这个成员数据的,子类中也无法访问该成员数据
//protected修饰符,类中的成员如果使用protected来修饰,那么外部是无法访问这个成员数据的,子类中可以访问该成员数据
(()=>{
    //定义一个类
    class Person{
        // public name:string
        // private name:string
        protected name:string
        public constructor(name:string) {
            //更新属性
            this.name = name;
        }
        //方法
        public eat(){
            console.log('嗯,这个饭真好好吃',this.name);
            
        }
    }
    //定义一个子类
    class Student extends Person{
        constructor(name:string){
            super(name)
        }
        play(){
            console.log('i\'m playing',this.name)
            
        }
        public eat(): void {
            
        }
    }

    //实例化对象
    const person = new Person('大蛇丸');
    // console.log(person.name);
    person.eat();
    const stu = new Student('红豆')
    stu.play()
    // console.log(stu.name);
    


    
})()