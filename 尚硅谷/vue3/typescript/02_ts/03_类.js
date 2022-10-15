//ts中书写js中的类,演示效果
(function () {
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            //更新属性数值
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + "_" + this.lastName;
        }
        return Person;
    }());
    //创建方法
    function showFullName(person) {
        // return this//window
        return person.firstName + "_" + person.lastName;
    }
    //实例化对象
    var person = new Person('hu', 'le');
    console.log(person.fullName);
    console.log(showFullName(person));
})();
