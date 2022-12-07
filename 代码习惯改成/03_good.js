var response = 1
response = {data:{texts:1}}//undefined
response = {data:{text:undefined}}//undefined
response = {data:{text:null}}//null
// response = {data:{text:0}}//0
// response = {data:{text:false}}//false
// response = {data:{text:''}}//空字符串




//上面无关----
const value = response.data.text??"hello world"
console.log(value)
// ||将前面的值转换为布尔值,当布尔值为true时,显示前面的值;为false时否则显示后面的值
// 所以前面的值为null,undefined,0,false,空字符串时,显示后面的值
// 而我们想要前面仅为null,undefined的时候才显示后面的值

// ??表达式需要新的node来运行
// 去查看node.green上支持它的版本