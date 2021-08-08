var a = 0;
var b = document.getElementById("num");
var tot=document.getElementById("total");
var e = 0;
var c = 0;
var d = 0;
var flo= 0;

var char = "";
var buttonc=0;


function plus() {
    
    if (buttonc == 0) {
        a = parseInt(b.innerText);
        buttonc = 1;
        
    }
    else if (buttonc != 0) {
        d = parseFloat(b.innerText);
        if(c==1){
            a+=d;
        }
        else if(c==2){
            a-=d;
        }
        else if(c==3){
            a*=d;
        }
        else if(c==4){
            a/=d;
        }
        flo=a;
    }
    tot.innerText=`${a}`
    console.log(a);
    b.innerText = "";
    c=1;

}
function minus() {
    
    if (buttonc == 0) {
        a = parseInt(b.innerText);
        buttonc = 1;
    }
    else if (buttonc != 0) {
        d = parseFloat(b.innerText);
        if(c==1){
            a+=d;
        }
        else if(c==2){
            a-=d;
        }
        else if(c==3){
            a*=d;
        }
        else if(c==4){
            a/=d;
        }
        flo=a;
    }
    tot.innerText=`${a}`
    console.log(a);
    b.innerText = "";
    c=2;
    
}
function multi() {
    if (buttonc == 0) {
        a = parseInt(b.innerText);
        buttonc = 1;
    }
    else if (buttonc != 0) {
        d = parseFloat(b.innerText);
        if(c==1){
            a+=d;
        }
        else if(c==2){
            a-=d;
        }
        else if(c==3){
            a*=d;
        }
        else if(c==4){
            a/=d;
        }
        flo=a;
    }
    tot.innerText=`${a}`
    console.log(a)
    b.innerText = "";
    c=3;
}
function divide() {
    if (buttonc == 0) {
        a = parseInt(b.innerText);
        buttonc = 1;
    }
    else if (buttonc != 0) {
        d = parseFloat(b.innerText);
        if(c==1){
            a+=d;
        }
        else if(c==2){
            a-=d;
        }
        else if(c==3){
            a*=d;
        }
        else if(c==4){
            a/=d;
        }
        flo=a;
    }
    tot.innerText=`${a}`
    console.log(a)
    b.innerText = "";
    c=4;
}
function equalsto() {
    d = parseFloat(b.innerText)
    if(c==1){
        a+=d;
    }
    else if(c==2){
        a-=d;
    }
    else if(c==3){
        a*=d;
    }
    else if(c==4){
        a/=d;
    }
    flo=a;
    console.log(a);
    b.innerText = `${a}`;
    a=0;
    tot.innerText="";
}






function nine() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '9';
}
function eight() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '8';
}
function seven() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '7';
}



function four() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '4';
}
function five() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '5';
}
function six() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '6';
}


function one() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '1';
}
function two() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '2';
}
function three() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '3';
}



function zero() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '0';
}
function dot() {
    if (e == 0) {
        b.innerText = "";
        e = 1;
    }
    b.innerText += '.';
}
function zeroe() {
    b.innerText = "0";
    tot.innerText='';
    e = 0;
    a=0;
}

 