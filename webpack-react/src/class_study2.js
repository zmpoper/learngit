class Person{
    constructor(name,age) {
       this.name = name
       this.age = age 
    }
    say(){
        console.log('这是Person中的say方法')
    }
    static info = 123;
}
//使用extends实现继承，extends 前面的是子类，
class Chinese extends Person{
    constructor(name,age,color,language) {
        //注意：当使用extends 关键字实现了继承，子类的constructor必须显示调用super()
        super(name,age)
        this.color = color
        this.language = language
    }
}
var c1 = new Chinese('张三',22,'yellow','chinese')

console.log(c1)
c1.say()
