for(i=1; i<101; i++){
    if(i%3===0){
        if(i%5===0){
            console.log("FizzBuzz");
            continue;
        }
        console.log("Fizz");
        continue;
    }else if(i%5===0){
        console.log("Buzz");
        continue;
    }
    console.log(i);
}

//continue문을 통해 3의배수와 5의배수의 수를 출력시키지 않고 fizz buzz만을 출력이 가능해졌다.