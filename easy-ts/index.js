//类型推断
var str1 = "abc";
// str = 10 // error
// 类型注解
var str2 = "abc";
// str2 = 10 //error
// 类型断言
var numarr = [1, 2, 3];
// const res = numarr.find(i => i>2) as number
// res*5
//基本类型
var v1 = "abc";
var v2 = 10;
var v3 = true;
var nu = null;
var un = undefined;
//联合类型
var v4 = null;
var v5 = 2;
//数组、元组、枚举
var arr = [1, 2, 3];
var arr1 = [1, 2, 3];
//元组
var t1 = [1, "2", 3];
t1[1] = "22";
var t2 = [1, "2"];
t1[1] = "22";
//枚举
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["A"] = 0] = "A";
    MyEnum[MyEnum["B"] = 1] = "B";
    MyEnum[MyEnum["C"] = 2] = "C";
})(MyEnum || (MyEnum = {}));
console.log(MyEnum.A);
console.log(MyEnum[0]);
// 函数
function myFun(a, b) {
    return a + b;
}
function myFun1(a, b, c) {
    if (a === void 0) { a = 10; }
    var res = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        res[_i - 3] = arguments[_i];
    }
    return 100;
}
var f = myFun1(20, "abc", true, 1, 2, 3);
var obj1 = {
    name: "obj1",
    age: 10
};
var obj2 = {
    name: "obj2",
    age: 10
};
//let a:string|number=10
var a = 10;
//泛型
function myFun_t(a, b) {
    return [a, b];
}
myFun_t(1, 2);
myFun_t("hello", "world");
myFun_t("hello", "");
