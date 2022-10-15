//readonly修饰符: 首先是一个关键字,对类中的属性成员进行修饰,修饰后,该属性成员,就不能在外部被随意的修改了
//构造函数中,可以对只读的属性进行修改
//如果构造函数空参,类中的属性已经使用readonly修饰了,那么外部也不能对这个属性值进行更改
//构造函数中的参数可以使用readonly修饰,一旦修饰了,那么该类中就有了这个只读的成员属性了,外部可以访问,但不能修改
//构造函数中的参数可以使用public,private,protected修饰,一旦修饰了,那么该类中就有了这个成员属性
(()=>{
//readonly修饰类中的属性
    // //定义一个类
    // class Person{
    //     readonly name:string='大甜甜'
    //     constructor(name:string='大甜甜'){
    //         this.name = name;
    //     }
    //     sayHi(){
    //         //类中的普通方法中,不能修改readonly修饰的成员属性值
    //         // this.name = 'hello'
    //         console.log('hello',this.name);
            
    //     }
    // }
    // //实例化对象
    // const person:Person = new Person('小甜甜')
    // console.log(person);
    // console.log(person.name);
    // // 外部不能修改name
    // // person.name = '大甜甜'
    // console.log(person.name);
    // //实例化对象
    // const person:Person = new Person('小甜甜')
    // console.log(person);
    // console.log(person.name);
    // // 外部不能修改name
    // // person.name = '大甜甜'
    // console.log(person.name);

//readonly修饰类中的构造函数中的参数(参数属性)
    //定义一个类
    class Person{

        //构造函数
        //构造函数中的name参数,一旦使用readonly修饰后,那么该name参数可以叫参数属性
        //构造函数中的name参数,一旦使用readonly修饰后,那么Person类中就有了一个name属性
        //构造函数中的name参数,一旦使用readonly修饰后,外部也是无法修改类中的name属性值的
        constructor(readonly name:string='大甜甜'){
            this.name = name;
        }
        //构造函数中的name属性,一旦使用public修饰后,那么Person类中就有了一个公共的name属性
        // constructor(public name:string='大甜甜'){
        //     this.name = name;
        // }
        // 构造函数中的name属性,一旦使用private修饰后,那么Person类中就有了一个公共的name属性
        // constructor(private name:string='大甜甜'){
        //     this.name = name;
        // }
        // 构造函数中的name属性,一旦使用protected修饰后,那么Person类中就有了一个受保护的name属性(只能在本类或者派生类中使用)
        // constructor(protected name:string='大甜甜'){
        //     this.name = name;
        // }
    }
    //实例化对象
    const person:Person = new Person('小甜甜')
    // person.name = '佐助'
    console.log(person);
    console.log(person.name);
})()