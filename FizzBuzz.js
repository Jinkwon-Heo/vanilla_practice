for(i=1; i<101; i++){ //for문으로 1~100까지 찍어준다.
    if(i%3===0){ //첫번째 if문으로 3의배수를 인식하고 fizz를 찍는다.
        if(i%5===0){ //3의배수의 if문 안에 if문을 중첩시켜서 15의 배수를 구하고 fizzbuzz를 찍는다.
            console.log("FizzBuzz");
            continue; //continue문으로 3의배수와 5의배수의 숫자는 출력되지 않고 for조건식으로 돌아간다.
        }
        console.log("Fizz");
        continue;
    }else if(i%5===0){
        console.log("Buzz");
        continue;
    }
    console.log(i); //3의 배수와 5의 배수를 제외한 숫자를 찍어준다.  
}