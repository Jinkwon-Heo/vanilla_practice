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