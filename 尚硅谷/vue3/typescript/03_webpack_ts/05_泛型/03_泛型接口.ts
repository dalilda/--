//泛型接口:在定义接口时,为接口中的属性或方法定义泛型类型,在使用接口时,再指定具体的泛型类型
(() => {
    //需求:定义一个类,用来存储用户的相关信息(id,age,name)
    //通过一个类的实例对象,调用相关方法,可以添加多个用户信息对象,调用getUserId方法可以根据id获取某个指定的用户信息对象


    //定义一个泛型接口
    interface IBaseCRUD<T> {
        data: T[]
        add: (t: T) => T
        getUserId: (id: number) => T
    }

    //定义一个用户信息的类
    class User {
        id?: number
        age: number
        name: string
        constructor(age:number,name:string){
            this.age = age;
            this.name= name;
        }
    }

    //定义一个类,可以针对用户的信息对象进行增加及查询的操作
    //CRUD:create,read,update,delete
    class UserCRUD implements IBaseCRUD<User>{
        data: Array<User> = []
        add(user: User): User {
            //产生id
            user.id = Date.now() + Math.random()
            //把用户信息对象添加到data数组中
            this.data.push(user)
            return user
        }
        getUserId(id: number): User {
            return this.data.find(user => user.id === id)
        }
    }

    //实例化添加用户信息对象的类,UserCRUD对象
    const userCRUD = new UserCRUD()
    userCRUD.add(new User(25,"hule"))
    userCRUD.add(new User(26,"hule1"))
    userCRUD.add(new User(27,"hule2"))
    const {id}=userCRUD.add(new User(28,"hule3"))
    console.log(userCRUD.data);
    console.log(userCRUD.getUserId(id));
    
    
})()