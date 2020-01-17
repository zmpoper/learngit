// class    实现面向对象的新形式
function Person (name,age){ 
    this.name = name 
    this.age = age
 }
 Person.prototype.say = function () {
     console.log('11111');
     
 }
 Person.info = 123
//  var p1 = new Person('zs',20)
//  console.log(p1);
class Per{
    //每个class的内部，都有一个constructor构造器，如果没有显示定义 构造器，那么类
    //内部默认都有个看不见的constructor
    //每当，使用new关键字，创建class类实例的时候，必然会有限调用 constructor 构造器

    constructor(name,age) {
        this.name = name
        this.age = age
        
    }
    say(){
        console.log('ok a');
    }
    static info = 123
    static sayHello(){
        console.log('hello');
    }
}
var p2 = new Per('大聪明',22)
Per.sayHello()
console.log(p2);