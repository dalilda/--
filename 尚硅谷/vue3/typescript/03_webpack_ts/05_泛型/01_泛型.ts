//泛型:定义函数/接口/类的时候,不能预先确定要使用的数据的类型,而是在使用函数/接口/类的时候才能确定数据的类型

(()=>{
    //需求:定义一个函数,传入两个参数,第一个参数是数据,第二个参数是数量,函数的作用:根据数量,产生对应个数的数据,存放到数组中
    function getArr(value:number,count:number):number[]{
        //根据数据和数量产生数组
        const arr:number[]=[]
        for(let i = 0;i<count;i++){
            arr.push(value)
        }
        return arr
    }
    const arr1 = getArr(12,13)
    console.log(arr1);
    //定义一个函数,同上,只不过传入的是字符串类型
    function getArr2(value:string,count:number):string[]{
        //根据数据和数量产生数组
        const arr:string[]=[]
        for(let i = 0;i<count;i++){
            arr.push(value)
        }
        return arr
    }
    const arr2 = getArr2('123',13)
    console.log(arr2);
    
    //可以传入任意类型的数据,返回来的是存储这个类型的数据的数组
    function getArr3(value:any,count:number):any[]{
        //根据数据和数量产生数组
        const arr:any[]=[]
        for(let i = 0;i<count;i++){
            arr.push(value)
        }
        return arr
    }
    
    const arr3 =getArr3(1.23456,2)
    const arr4 =getArr3('123',2)
    console.log(arr3);
    console.log(arr4);

    console.log(arr3[0].toFixed(2));//没有提示
    console.log(arr4[0].split(''));//没有提示
    
    
    function getArr4<T>(value:T,count:number):T[]{
        //根据数据和数量产生数组
        const arr:T[]=[]
        for(let i = 0;i<count;i++){
            arr.push(value)
        }
        return arr
    }
    const arr5 = getArr4(2.3456,2);
    const arr6 =getArr4('123',3);
    console.log(arr5,arr6);
    console.log(arr5[0].toFixed(2));
    console.log(arr6[0].split(''))
       
    
    
    
    
    
})()