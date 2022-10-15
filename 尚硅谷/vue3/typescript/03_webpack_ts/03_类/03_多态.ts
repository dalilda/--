//多态:父类型的引用指向子类型的对象,不同类型的对象针对相同的方法产生了不同的行为
(()=>{
    //定义一个父类
    class Animal{
        //定义一个属性
        name:string
        //定义一个构造函数
        constructor(name:string='小动物'){
            this.name = name
        }
        //定义实例方法
        run(distance:number=0){
            console.log(`跑了${distance}米这么远的距离`);
        }
    }
    //定义一个子类
    class Dog extends Animal{
        constructor(name:string='小黑'){
            //调用父类的构造函数,实现子类中属性的初始化操作
            super(name)
        }
        //实例方法,重写父类中的实例方法
        run(distance:number=5): void {
            console.log(`${this.name}跑了${distance}米这么远的距离.`);
        }
    }
    //定义一个子类
    class Bird extends Animal{
        //构造函数
        constructor(name:string='小白'){
            super(name)
        }
        //实例方法
        run(distance:number=10){
            console.log(`${this.name}飞了${distance}米这么远的距离.`);
            
        }
        shout(){
            console.log(`${this.name}shout`);
            
        }
    }
    const ani:Animal = new Animal()
    ani.run()
    const dog:Dog = new Dog('啸天犬')
    dog.run()
    const bird:Bird = new Bird('凤凰')
    bird.run()
    bird.shout()

    //父类和子类的关系:父子关系,此时,父类类型创建子类的对象
    const dog1:Animal = new Dog('小啸天犬')//父类引用指向子类对象,对象都是new出来的,所以右是子类,左是父类
    dog1.run()
    const bird1:Animal = new Bird('金乌')
    bird1.run()
    // bird1.shout()//父类引用只能使用父类中的实例方法

    console.log("===============");
    
    //该函数需要的参数是Animal类型的
    function showRun(ani:Animal){
        ani.run()
    }
    showRun(dog1)
    showRun(bird1)
    
})()