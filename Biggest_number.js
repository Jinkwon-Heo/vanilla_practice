var a = 30;
var b = 20;
var c = 10;

if(a<b){
    if(b<c){
        console.log(c);
    }else if(b>c){
        console.log(b);
    }
}else if(a>b){
    if(a<c){
        console.log(c);
    }else if(a>c){
        console.log(a);
    }
}