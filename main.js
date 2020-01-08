'use strict';

var fs = require("fs");
var path = require("path");
fs.readdir(__dirname,(err,files)=>{
    files.forEach((item,index)=>{
        fs.stat(path.join(__dirname,item),(err,stat)=>{
            if(stat.isFile()){
                console.log(item,'文件');
            }else if(stat.isDirectory()){
                console.log(item,'目录');
                

            }
        });
    });
});
// var reader = new FileReader();
// reader.onload();
var data = fs.readFileSync('input.txt');

var optionsObject;
console.log(data.toString());
console.log("程序执行结束");
var [a,b,c] = [1,2,3];
process.on('exit',function(code){//程序结束退出前触发，即所有语句执行完成之后最后执行
    console.log('about to exit with code:'+ code);
    if (code === 0){
        console.log('it runs ok');
    }else{
        console.log('it runs not ok:'+ code);
    }
});
const crypto = require('crypto');

const hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello, world!');//3f71594b0e079ecfb18ac06619bef27d
hash.update('Hello, nodejs!');

console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544
// process.exit(1000);程序会直接退出，不会执行后面的语句
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};
var {name, address: {city, zipcode:zip}} = person;

// name; // '小明'
console.log('name:'+name);
// city; // 'Beijing'
console.log('city:'+city);
// zip; // undefined, 因为属性名是zipcode而不是zip
console.log('zipcode:'+zip);
// 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
// address; // Uncaught ReferenceError: address is not defined


var count = 0;
var oldParseInt = parseInt; // 保存原函数

parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};
// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
console.log('count = ' + count); // 3

function product(arr) {
  return  arr.reduce(function(x,y){
        return x*y;
    });
}
console.log(product([1, 2, 3, 4]));

function  fd() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results =  fd();
console.log ( fd());
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1()); // 1
console.log(f2()); // 4
console.log(f3()); // 9

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
let s = JSON.stringify(xiaoming,null,' ');
console.log(s);

// var url = 'https://api.openweathermap.org/data/2.5/forecast?q=Beijing,cn&appid=800f49846586c3ba6e7052cfc89af16c';
// $.getJSON(url, function (data) {
//     var info = {
//         city: data.city.name,
//         weather: data.list[0].weather[0].main,
//         time: data.list[0].dt_txt
//     };
//     alert(JSON.stringify(info, null, '  '));
// });
function Cat(name) {
    this.name = name;
    
}
Cat.prototype.say=function(){
      return 'Hello,'+this.name+'!'; 
};

var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
console.log(kitty.say());
console.log(kitty.say===doraemon.say);
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}