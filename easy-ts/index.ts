//类型推断
let str1 = "abc"
// str = 10 // error

// 类型注解
let str2:string = "abc";
// str2 = 10 //error

// 类型断言
let numarr = [1,2,3]
// const res = numarr.find(i => i>2) as number
// res*5


//基本类型
let v1:string ="abc"
let v2:number=10
let v3:boolean= true
let nu:null=null
let un:undefined=undefined

//联合类型
let v4:string|null = null
let v5:1|2|5 = 2


//数组、元组、枚举
let arr:number[] = [1,2,3]
let arr1:Array<number>=[1,2,3]
//元组
let t1:[number,string,number]=[1,"2",3]
t1[1]="22"
let t2:[number,string,number?]=[1,"2"]
t1[1]="22"
//枚举
enum MyEnum{
    A,B,C
}
console.log(MyEnum.A)
console.log(MyEnum[0])


// 函数
function myFun(a:number,b:number):number{
    return a+b
}
function myFun1(a=10,b:string,c?:boolean,...res:number[]):number{
    return 100
}

const f = myFun1(20,"abc",true,1,2,3)

//接口
interface Obj {
    name:string,
    age:number
}
const obj1:Obj={
    name:"obj1",
    age:10
}
const obj2:Obj={
    name:"obj2",
    age:10
}
//类型别名
type MyUserName = string|number
//let a:string|number=10
let a:MyUserName = 10

//泛型

function myFun_t<T>(a:T,b:T):T[]{
    return [a,b]
}

myFun_t<number>(1,2)
myFun_t<string>("hello","world")
myFun_t("hello","")