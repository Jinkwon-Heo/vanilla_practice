var a = 30; //a, b, c를 코드에 직접 입력하는 버전.
var b = 20;
var c = 10;

if(a<b){ //a와 b중 b가 큰 경우의 분기. 이후 중첩된 if문으로 b와 c중 큰 수를 출력.
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