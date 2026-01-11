// function b() {
//     var myvar = 1;
//     console.log(myvar);//1
// }
// //var x;
// console.log(x);//undefiend
// a();
// b();
// function a() {
//     var myvar = 2;
//     console.log(myvar);//2
// }
// var x = 5;

// function f1(x, y) {
//     //var z var zz
//     var zz ;
//     if (x > 3) {
//         var z = 3;
//     }
//     else {
//         var zz = 3;
//     }
//     //zz=20
//     console.log(z, zz)//undefiend 3
//     console.log(zzz);
//     zzz = 300;
// }
//  f1(1, 3);
//  alert(zzz);//300
// //console.log(x);
//  x = 20;
//  console.log(x);

// function a() {
//     var myvar = 2;//;local
//     console.log(myvar);//2
//     b();
// }
// var myvar = 1;
// console.log(myvar);//1
// a();
// console.log(myvar);//1


// function square(num) {
//     total = num * num;
//     return total;
// }
// var total = 50;
// var number = square(20);
// alert(total);//13==>50  19==>400

////////////////////////
//var i;
// (function(){
//     for(var i=0;i<5;i++){
//         console.log(i);
//     }
// })();
// console.log(i);

// (function(){
//     var hamada = 5;


// })();

// function sum(x,y){
//     // console.log(x);//function body of num1
//     // console.log(y);//function body num2
//     return x("menna")+y();
// }
// function num1(a){
//     console.log(arguments);
//     return 5;
// }

// function num2(){
// //console.log("hello num2");
//     return 10;
// }
// // var num1 = 5;
// // var num2=10;
// console.log(sum(num1,num2));//callback as a parameter

// var arr = [200,30,50];
// var sum = 0;
// function test(el,i){ 
  
//     if(i!==1){
//         sum+=el;
//     }
    
//     //console.log(el);
// }
// //test(200,0,arr);//arr[i]
// //test(30,1,arr);
// //test(50,2,arr);
// // arr.forEach(test);
// arr.forEach(function(el,i){
//     console.log(arguments);
//       if(i!==1){
//         sum+=el;
//     }
    
// })
// console.log(sum);

// function myForEach(arr,callBackFunc){
//     for(var i=0;i<arr.length;i++){
//         callBackFunc(arr[i],i,arr);
//     }

// }

// console.log(window);
// window.alert();
// var x = 10;
// console.log(x);
// console.log(window.x);

// console.log(window.document);//html
//select el element elawl
// console.log(document.children[0].firstElementChild);
// var body = document.children[0].children[1];
// console.log(body.children);
// var div = body.firstElementChild;
// console.log(div.nextElementSibling.parentElement);

//shrotcut
// var divs = document.getElementsByTagName("div");
// var className = document.getElementsByClassName("myClass");
// var div = document.getElementById("myDiv");
// console.log(div);
// console.log(className[1]);
// divs[0].textContent = "hamada";

// console.log(document.querySelector(".myClass"));
// console.log(document.querySelectorAll(".myClass"));
var div = document.getElementById("myDiv");
//add or delete attr
// div.setAttribute("class","myClass");
// div.setAttribute("id","hello");

// //document.querySelector("span").setAttribute("class","bgcolor");
//  document.querySelector("span").classList.add("bgcolor");

 //modify css
//  div.style.backgroundColor = "red";
//  div.style.paddingTop = "12px";
//  div.style.width = "200px";

// div.classList.add("bgcolor");

//create add non exisitng element
//select parent

//div.textContent = "<h2>hamada</h2>";
// div.innerHTML +="<h2 style='color:red'>hamada</h2>" ;

// var newEle = document.createElement("h2");
// console.log(newEle);//html element
// newEle.style.color = "red";
// newEle.style.backgroundColor = "green";
// newEle.textContent = "hello new element";
// div.append(newEle);

//clone element

var span = document.querySelector("span");
var h3 = document.createElement("h3");
h3.textContent = "hello h3";
div.append(h3);
document.body.append(h3.cloneNode(true));
document.body.append(span.cloneNode(true));
