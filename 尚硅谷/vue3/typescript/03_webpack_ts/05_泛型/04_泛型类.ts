//泛型类:

(() => {
    //定义一个类,类中的属性值的类型是不确定的,方法中的参数和返回值类型也是不确定的
    class GenericNumber<T>{
        defaultValue: T
        add: (x: T, y: T) => T
    }

    //实例化对象的时候,再确定类型
    const g1 = new GenericNumber<number>()
    g1.defaultValue = 100
    g1.add = function (x: number, y: number) {
        return x + y
    }
    console.log(g1.add(1, 2));


    const g2 = new GenericNumber<string>()
    g2.defaultValue = '123'
    g2.add = function(x: string, y: string) {
        return x+y
    }
    console.log(g2.add('12','12'));
    


})()