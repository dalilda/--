let response = {data:{texts:null}}//null
const value = response?.data?.text
console.log(value);
// 用?.链判断运算符做非空判断
// 没有则返回undefined