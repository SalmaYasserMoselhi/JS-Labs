/*
Apply different styles over a paragraph according to checked radio button.
Implement the required functions in an external .js file to let TextStyle.html works properly
*/

var para = document.getElementById("PAR");
function ChangeFont(x){
    para.style.fontFamily = x;

}

function ChangeAlign(y){
    para.style.textAlign = y;
}

function ChangeHeight(x){
    para.style.lineHeight = x;
}

function ChangeLSpace(x){
    para.style.letterSpacing = x;
}

function ChangeIndent(x){
    para.style.textIndent = x;
}

function ChangeTransform(x){
    para.style.textTransform = x;
}

function ChangeDecorate(x){
    para.style.textDecoration = x;
}

function ChangeBorder(x){
    para.style.borderStyle = x;
}

function ChangeBorderColor(x){
    para.style.borderColor = x;
}




