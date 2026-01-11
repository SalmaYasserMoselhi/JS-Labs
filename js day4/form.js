var inpName = document.querySelector("input");
var span = document.querySelector("span");
function validate(e){
   // e.preventDefault();
//
    if(inpName.value === ""){
         e.preventDefault();
        // span.textContent = "*this filed is required";
        // span.style.display = "inline";
     
    }
    else if(isFinite(inpName.value)){
          e.preventDefault();
        // span.textContent = "name should be characters";
        // span.style.display = "inline";

    }

}
function inputData(){
    if(isFinite(inpName.value)){
        span.textContent = "name should be characters";
        span.style.display = "inline";
        inpName.classList.add("invalid");
    }
    else{
        inpName.classList.remove("invalid");
        span.style.display = "none";


    }

}

// window.addEventListener("contextmenu",function(e){
//     e.preventDefault();

// })