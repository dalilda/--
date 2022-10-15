//多个泛型参数的函数:函数中有多个泛型的参数

(()=>{
    function getMsg<K,V>(value:K,value2:V):[K,V]{
        return [value,value2]
    }

    const arr1 = getMsg(1.23456,'3123')
    console.log(arr1[0].toFixed(2),arr1[1].split(''));
    
})()