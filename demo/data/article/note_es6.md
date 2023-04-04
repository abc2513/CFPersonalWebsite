# ES6-ES11笔记

概念

ECMAScript是ECMA国际 标准化的脚本语言设计标准

#### let变量

```js
let a;
let a,b,c;
let a=1,b=2,h=[];
```

- let变量不能重复声明，var可以
- 块级作用域（其他还有 全局、函数、eval）
- 不存在变量提升（var 可以在声明前使用，内容是undefined）
- 不影响作用域链

```js
{
    let s='xxx';
    function fn(){
        console.log(s);//函数里找不到，会往上一级找
    }
    fn();//可以输出xxx
}
```

eg、点击元素变色

```js
let items = document.getElementsByClassname('item');
for(let i=0;i<items.length;i++){
    item[i].onclick=function(){
        //this.style.background='pick';
        item[i].style.background='pick';
        //let可以，var不行
    }
}
```

#### const常量

值不能修改

```js
const SCHOOL = 'xxx'
```

- 一定要赋初始值
- 一般常量名使用大写（不是语法规则）
- 常量的值不能修改
- 对于数组和对象的元素进行修改是允许的

#### 变量的解构赋值

按照一定的模式从数组和对象中提取值，对变量进行赋值

```js
//数组
const F =['1','2','3','4'];
let [a,b,c,d]=F;
//对象
const zhao={
    name:'赵本山',
    age:66,
    f: function(){
        ...;
    }
}
let {x,y,z}=zhao;
```

#### 模板字符串

```js
let str=`我是字符串`;
console.log(str,typrof str);
```

- 内容中可以直接出现换行符
- 变量拼接${变量}

#### 对象的简化写法

ES6允许在大括号内直接写入变量和函数，作为对象的属性和方法

```js
let name='xxx';
let fun=function(){xxx;};
let school1={
    name:name,
    fun:fun;
    fun2:function(){
        xxx;
    }
}
let school ={
    name,
    fun,
    fun2(){
        xxx;
    }
}
```

#### 箭头函数

ES6允许使用=>定义函数，省略了function

```js
let fn= (a,b)=>{
    xxx;
}
let fn2= a=>{
    xxx;
}
let fn3= ()=>{
    xxx;
}
```

- this是静态的，this始终指向函数声明时所在作用域下的this值（原来指向调用的实例对象）
- `function xxx(){}`
- 不能作为构造实例化对象
- 有且仅有一个形参可以省略()
- 唯一语句省略return

this栗子

![image-20230325152646714](ECMAScript笔记.assets/image-20230325152646714.png)

适合与this无关的回调、定时器/数组方法的回调，

不适合this有关的回调、事件回调、对象的方法

#### 函数参数默认值

```js
function aaa(a,b,c=0){
    
}
```

- 一般有默认值的参数放后
- 可以与解构赋值结合

```js
function fun({a=1,b,c}){
    a==1;
};
fun(object);
```



#### rest参数【】



#### 扩展运算符

```js
let arr1=[1,2]
```

