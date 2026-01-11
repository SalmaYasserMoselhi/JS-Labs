// var h2 = document.createElement("h2");
// h2.textContent = "my new header";
// document.body.insertBefore(h2,document.body.firstElementChild);

// var arrNames = ["menna","hassan","hamada","ahmed"];
// var arrAges = [20,25,26,30];


// for(var i=0;i<arrNames.length;i++){
//     var tr = document.createElement("tr");
//     tr.innerHTML = " <td>"+arrNames[i]+"</td><td>"+arrAges[i]+"</td>";
//     document.querySelector("tbody").append(tr);
// }

// document.querySelector("table").style.display = "table";

//////============================//////////////////////

//Events

function eventHandler(ele,e){
    console.log(e.target);//html element
    console.log(ele);
   // console.log(x);
   // var div= document.querySelector("div");
    // ele.textContent = "hello ";
    ele.style.backgroundColor = "red";
}


// //event property
// var div = document.querySelector("div");
// function test(e){
//     console.log(e.target);
// }
// div.onclick=function(){

// }
// div.onclick = test //callbackfunction


//addEventListiner
//  var div = document.querySelector("div");
//  div.addEventListener("click",function(e){
//     if(e.target != this){
//         alert(e.target.textContent);
//     }
//  })
//  function test(ele){
//     alert(ele.textContent);

//  }

//  div.addEventListener("click",function(e){
//         console.log(e.target);
//         console.log(this);//static
//  });
// for(var i=0;i<div.children.length;i++){
//    (function(x){
//    // var x = i;//0 1 2 3
  
//     div.children[i].addEventListener("click",function(){
//         //console.log(i);
       
//         alert(div.children[x].textContent);//19 13
//     })

//     })(i);
    // div.children[i].addEventListener("click",function(){
    //     //console.log(i);
       
    //     alert(this.textContent);//19 13
    // })

   
// }

//handeler(button1)//var x=0
//handler(button2)//var x=1
//var x=2


///timing events
// var x;
// setTimeout(function(){
//     x= 10;
//     console.log(x);
//   //  alert("hello");

// },2000);

// var clearInt = setInterval(function(){
//     console.log("hello")
// },2000);

// //clear interval

// function stopInt(){
//     clearInterval(clearInt);

// }