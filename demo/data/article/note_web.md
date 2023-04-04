# JS

### 函数库：

#### JQuery库

[[JQuery]]


## 初识

三种书写位置：行内、内嵌、外部

1. 行内

```html
<input type="button" value="test" onclick="alert('123')">
```

- 可以将单行/少量JS代码写在HTML标签的事件属性中（以on开头的属性）
- HTML建议双引号，JS建议单引号
- 特殊情况使用

2. 内嵌

```html
<script>
        alert("12345")
</script>
```

- 常用
- 多行JS代码写在\<script\>中

3. 外部

```html
<script src="main.js"></script>
```

- script标签中间不可写代码
- 适用大量JS代码

注释：

- 单行：//
- 多行/**/

## 输入输出

| 方法             | 说明               | 归属   |
| ---------------- | ------------------ | ------ |
| alert(msg)       | 浏览器弹出警示框   | 浏览器 |
| console.log(msg) | 控制台打印输出信息 | 浏览器 |
| prompt(info)     | 弹出输入框         | 浏览器 |

## 变量与数据类型

### 变量

```javascript
var age;
age = 10;
```

```javascript
var age = prompt('输入年龄：');
```

变量名规范：

1. 字母数字下划线，美元符号$
2. 驼峰规范：首字母小写，后面单词的首字母大写

name在一些浏览器有特殊含义，一般不用作变量

### 数据类型

JS是一种弱类型或动态语言，不用提前声明变量类型，在程序运行过程中，类型会被自动确定，同时意味着相同的变量可以存不同类型的值

类型分类

| 简单数据类型 | 说明                                                     | 默认值    |
| ------------ | -------------------------------------------------------- | --------- |
| Number       | 数字（包括整形和浮点型）（可以表示二、八、十、十六进制） | 0         |
| Boolean      | true，false                                              | false     |
| String       | 字符串                                                   | ""        |
| Undefined    | var a; 未给a赋值                                         | undefined |
| Null         | var a = null;                                            | null      |

1. Number

   1. 八进制：数字前面加0，例：010

   2. 十六进制：数字前加0x

   3. 范围：

      ```javascript
      alert(Number.MAX_VALUE);
      alert(Number.MIN_VALUE);
      ```

   4. 三个特殊值

      1. Infinity，无穷大
      2. -Infinity，无穷小
      3. NaN，Not a number，代表非数值
         1. isNaN()

2. String

   1. .length
   2. 字符串+如何类型-->新字符串

3. 1


## DOM

getElementById

根据元素ID返回元素，如果多个ID只返回首次出现的元素

getElementsByTagName

根据标签名返回元素数组

getElementsByName

根据元素name返回元素数组

getElementsByClassName

根据类名返回元素数组

```html
<html>  
<head>  
	<script>  
		function validateForm() {  
			var username = document.forms["loginForm"]["username"].value;  
			if(username == "") {  
				alert('用户名不能为空！ ');  
				return false;  
			}  
		}  
	</script>  
</head>  
<body>  
	<form name="loginForm" action="" method="post" onsubmit="return validate()">  
		用户名： <input type="text" name="username"/><br/>  
		<button type="submit">登录</button>  
	</form>  
</body>  
</html>
```

可以传参

```html
<html>  
<head>  
	<script>  
		function validateForm(f) {  
			var username = f.username.value;  
			if(username == "") {  
				alert('用户名不能为空！ ');  
				return false;  
			}  
		}  
	</script>  
</head>  
<body>  
	<form name="loginForm" action="" method="post" onsubmit="return validate(this)">  
		用户名： <input type="text" name="username"/><br/>  
		<button type="submit">登录</button>  
	</form>  
</body>  
</html>
```


## DOM

## BOM

[w3school](https://www.w3school.com.cn/js/js_window.asp)

Browser Object Model

JS通过BOM对象来访问、控制、修改客户端

包含DOM

使用方法：

>windows.+xxx

- window
- screen
- location
	- >window.location.href
		- 返回当前页面的URL
	- >window.location.hostname
		- 返回当前页面的因特网主机名
	- 
- history
- navigator
- 弹出框
- timing
- cookies
	- cookie是计算机上存储在小的文本文件中的数据

## AJAX

- 不刷新页面更新网页
- 在页面加载后从服务器请求数据
- 在页面加载后从服务器接收数据
- 在后台向服务器发送数据!
- 
- 

![[ajax.gif]]

XMLHttpRequest属性
- readyState
	- 0：请求未初始化
	- 1：服务器连接已建立
	- 2：请求已收到
	- 3：正在处理请求
	- 4：请求已完成且响应已就绪
- onreadystatechange
- status、statusText
- responseText、responseXML
方法
- open(method, url, async, user, psw)
- setRequestHeader
- getAllResponseHeaders
- getResponseHeader
- send
- send(string)
- abort


## JSON

