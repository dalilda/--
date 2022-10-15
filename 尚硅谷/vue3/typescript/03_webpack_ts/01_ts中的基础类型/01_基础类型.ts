//基础内容
(()=>{
    // console.log('测试');
    //布尔类型 ----->boolean
    //基本语法
    //let 变量名:变量类型 = 值
    let isDone: boolean = false;
    console.log(isDone);

    //数字类型 ----->number
    let num1:number = 10;
    let num2:number = 0b10;
    let num3:number = 0o1010;
    let num4:number = 0x10a;
    console.log(num1,num2,num3,num4);

    //字符串类型 ----->string
    let str1:string = "床前明月光"
    let str2:string = "疑是地上霜"
    let str3:string = "举头望明月"
    let str4:string = "低头思故乡"
    console.log(str1,str2,str3,str4);
    console.log(`${str1},${str2},${str3},${str4}`);

    //字符串和数字拼接
    let str5:string = "ababa"
    let num5:number = 12010;
    console.log(num5+3+str5);
    
    //总结:ts中的变量一开始是什么类型,后期赋值的时候,只能用这个类型的数据,是不允许用其他类型的数据赋值给当前的这个变量中
    //如 let str:string = "bar" str = 1000,没有武德
    console.log("--------------");

    let und:undefined = undefined
    let nul:null = null
    console.log(und);
    console.log(nul);
        
    //undefined 和null 都可以作为其他类型的子类型
    //即可以把undefined和null赋值给其他类型
    //如: let num:number = 4 num = null
    // let numNum:number = 4
    // numNum = null//为什么这里会报错呢?
    //因为tsconfig.json里开了严格模式 把strict=true改成strict=false就行了
    // console.log(numNum);
    console.log("--------------");
    

    //数组类型
    //数组定义方式一
    //let 变量名:数据类型[] = [值1,值2...]
    let arr1:number[] = [1,2,3,4]
    console.log(arr1);
    
    //数组定义方式二:泛型的写法
    //let 变量名:Array<数据类型> = [值1,值2,值3...]
    let arr2:Array<number> = [1,2,3,4]
    console.log(arr2);

    //注意问题:数组定义后,里面的数据的类型必须和定义数组时的类型一致,否则会报错

    //元组类型
    let arr3:[number,string,boolean] = [1.23456,'胡乐',false]
    console.log(arr3);

    //注意问题:元素类型在使用的时候, 类型的顺序必须和定义的时候一致,个数也必须一致
    console.log(arr3[1].split(''));
    console.log(arr3[0].toFixed(2));
    
    console.log("--------------");
    //枚举类型,枚举类型里的每个数据值可以叫做元素,每个元素都有自己的编号,编号是从0开始,依次递增1
    //也可以手动改值

    //枚举类型
    enum Color{
        red=1,
        green,
        blue
        // red=19,
        // green=11,
        // blue=12
    }
    //定义一个Color的枚举类型的变量来接收枚举的值
    let color:Color = Color.red;
    console.log(Color.red,Color.green,Color.blue);
    console.log(Color[3]);

    //小例子,枚举中的元素可以是中文的数据值,但是不推荐
    // enum Gender{
    //     女,
    //     男
    // }
    // console.log(Gender.男);

    console.log("--------------");
    //any类型
    // let str:any = 100;
    // console.log(str);
    // str = '年少轻狂'
    // console.log(str);

    //当一个数组中要存储多个类型的数据,个数不确定,类型不确定,此时也可以使用any类型来定义数组
    let arr:any[] = [100,'年少轻狂']
    console.log(arr);
    //缺点
    // console.log(arr[0].split(''));//数字类型没有split方法,编译仍然通过了,没有报错提示  运行时才知道

    //void类型 在函数声明的时候,()后面使用:void代表该函数没有任何的返回值
    //我们可以在函数体里不写return,写return,写return undefined,写return null
    function showMsg():void{
        console.log("没有返回值");
        // return
        // return undefined
        // return null

    }
    console.log(showMsg());

    let vd:void = undefined //声明一个变量能存储undefined或者null
    // vd =null
    console.log(vd);

    console.log("--------------");


    //object类型
    //定义一个函数 ,参数是object类型,返回值也是object类型
    function getObj(obj:object):object{
        console.log(obj);
        

        return{
            name:'abc',
            age:12
        }
    }

    console.log(getObj({name:'hule'}));
    // console.log(getObj(123))//error
    console.log(getObj(String));
    console.log(getObj(new String('123')));
    
    console.log("--------------");
    //联合类型(Union Type)表示取值可以为多种类型中的一种
    //需求1: 定义一个函数得到一个数字或字符串值的字符串形式值

    // function getString(str:number|string):string{
        // return str.toString()
    // }
    // console.log(getString('1234'));
    // console.log(getString(123));

    //需求2:定义一个函数,得到数字或字符串的长度
    //类型断言,告诉编译器,我知道自己是什么类型,我知道自己在干什么
    //方式一:<类型>变量名
    //方式二:值 as 类型
    function getString(str:number|string):number{
        // return str.toString().length
        //如果number本身就是String类型,那么没必要调用toString方法
        if((<string>str).length){
            //str.length存在吗?存在就是string类型
            return (<string>str).length
            return (str as string).length
        }else{
            //str是number类型
            return str.toString().length
        }
    }
    console.log(getString("01234567"));
    console.log(getString(1234));
    
    //类型推断
    let txt= 100//没有明确类型时,推断出txt是number类型
    // txt = 'str'//string类型不能赋值给number类型,报错
    console.log(txt);
    
    let txt2;//推断出是any类型,下面就不会报错了
    txt2 = 100
    txt2 = 'str'
    console.log(txt2);
    
    
    

    
    

    
    
    


})()