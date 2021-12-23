const button = document.getElementById("startbutton");
const start = document.querySelector(".start");
const numberinput = document.getElementById("numberinput");
const inputDiv = document.querySelector(".inputDiv");
const result = document.querySelector(".result");
const restartbutton = document.getElementById("restartbutton");

start.textContent = "버튼을 누르면 숫자야구가 시작됩니다."

var gen_number = new Array();

// var input_init = function() {
//     var j=0;
//     var userInput;
//     var user_number = new Array();
//     do{
//         userInput = prompt(`1이닝! 세 자리 숫자를 입력해주세요.`);
//         if(userInput.length !== 3){alert("잘못된 숫자를 입력하였습니다. 세 자리 숫자를 입력해주세요.")};
//         j++;
//     } while(userInput.length !== 3);
//     for(let i=0; i<userInput.length; i++){
//         user_number.push(userInput[i])
//     };
//     return user_number;
// };

// var input = function(count) {
//     var j=0;
//     var userInput;
//     var user_number = new Array();
//     do{
//         userInput = prompt(`${count+1}이닝! 세 자리 숫자를 입력해주세요.`);
//         if(userInput.length !== 3){alert("잘못된 숫자를 입력하였습니다. 세 자리 숫자를 입력해주세요.")};
//         j++;
//     } while(userInput.length !== 3);
//     for(let i=0; i<userInput.length; i++){
//         user_number.push(userInput[i])
//     };
//     return user_number;
// };

var make_num = function () {
    let make = new Array();
    for(let i=0; i<3; i++){
        make.push(`${Math.floor(Math.random()*10)}`);
    };
    return make;
};

button.addEventListener("click", function buttonclick() {

    start.textContent = undefined;
    gen_number = make_num();
    button.style.display = "none";
    inputDiv.style.display = "block";

    // var strike=0;
    // var ball=0;
    // for(let count=0; count<9; count++){
    //     if(count === 0){
    //         var user_number = input_init();
            // for(let i=0; i<gen_number.length; i++){
            //     for(let j=0; j<user_number.length; j++){
            //         if(i===j){
            //             if(gen_number[i] === user_number[j]){
            //                 strike++;
            //             }
            //         }else if(i!==j){
            //             if(gen_number[i] === user_number[j]){
            //                 ball++;
            //             }
            //         }
            //     }
            // }
    //         span.textContent = "입력한 숫자: " + user_number + "생성된 숫자: " + gen_number + ` || ${count+1}이닝 : ${strike}스트라이크 ${ball}볼`;
    //     }
    //     else if(count!==9){
    //         user_number = input(count);
    //         for(let i=0; i<gen_number.length; i++){
    //             for(let j=0; j<user_number.length; j++){
    //                 if(i===j){
    //                     if(gen_number[i] === user_number[j]){
    //                         strike++;
    //                     }
    //                 }else if(i!==j){
    //                     if(gen_number[i] === user_number[j]){
    //                         ball++;
    //                     }
    //                 }
    //             }
    //         }
    //         span.textContent = "입력한 숫자: " + user_number + "생성된 숫자: " + gen_number + ` || ${count+1}이닝 : ${strike}스트라이크 ${ball}볼`;
    //     }
    // }
});


// for(let count=0; count<10; count++){
//     (function(m){
// numberinput.addEventListener("keypress", function pressenter(e){
//     var strike=0;
//     var ball=0;
//     var user_number = new Array(0);
//     var userInputvalue = document.getElementById("numberinput").value;
//     if(e.key === "Enter"){
//         if(userInputvalue.length !==3){
//             alert("잘못된 숫자를 입력하였습니다. 세 자리 숫자를 입력해주세요");
//             // numberinput.value = "";
//             // console.log(count);
//             console.log(userInputvalue);
//             console.log("이 메세지가 나오면 안됩니다");
//         }else{
//             for(let i=0; i<userInputvalue.length; i++){
//                 user_number.push(userInputvalue[i]);} //비교하기 위해 형태를 배열로 바꿈
//                 for(let i=0; i<gen_number.length; i++){
//                     for(let j=0; j<user_number.length; j++){
//                         if(i===j){
//                             if(gen_number[i] === user_number[j]){
//                                 strike++;
//                                 if(strike ===3){
//                                     alert("3스트라이크! 게임종료");
//                                     inputDiv.style.display = "none";
//                                     restartbutton.style.display = "inline-block";
//                                 }
//                             }
//                         }else if(i!==j){
//                             if(gen_number[i] === user_number[j]){
//                                 ball++;
//                             }
//                         }
//                     }
//                 }
//                 const addresult = document.createElement("li");
//                 addresult.textContent = `${m+1}회 | 입력 된 숫자 = ${user_number} 생성 된 숫자 = ${gen_number}|| ${strike}스트라이크 ${ball}볼    !`;
//                 document.body.appendChild(addresult);
//                 console.log(count);
//                 }
//     }
// })
// })(count);
// }

var count = 0;
numberinput.addEventListener("keypress", function pressenter(e){
    var strike=0;
    var ball=0;
    var user_number = new Array(0);
    var userInputvalue = document.getElementById("numberinput").value;
    if(e.key === "Enter"){
        if(userInputvalue.length !==3){
            alert("잘못된 숫자를 입력하였습니다. 세 자리 숫자를 입력해주세요");
            numberinput.value = "";
            console.log(userInputvalue);
            console.log("이 메세지가 나오면 안됩니다");
        }else{
            for(let i=0; i<userInputvalue.length; i++){
                user_number.push(userInputvalue[i]);} //비교하기 위해 형태를 배열로 바꿈
                console.log(user_number);
                for(let i=0; i<gen_number.length; i++){
                    for(let j=0; j<user_number.length; j++){
                        if(i===j){
                            if(gen_number[i] === user_number[j]){
                                strike++;
                                if(strike ===3){
                                    // alert("3스트라이크! 축하합니다");
                                    // const addresult = document.createElement("li");
                                    // addresult.textContent = `${count+1}회 | 입력 된 숫자 = ${user_number} 생성 된 숫자 = ${gen_number}|| ${strike}스트라이크!`;
                                    // document.body.appendChild(addresult);
                                    inputDiv.style.display = "none";
                                    restartbutton.style.display = "inline-block";
                                }
                            }
                        }else if(i!==j){
                            if(gen_number[i] === user_number[j]){
                                ball++;
                            }
                        }
                    }
                }
                if(strike !==3){
                const addresult = document.createElement("li");
                addresult.textContent = `${count+1}회 | 입력 된 숫자 = ${user_number} || ${strike}스트라이크 ${ball}볼    !`;
                document.body.appendChild(addresult);
                console.log(count);
                numberinput.value = "";
                count++;
                }else if(strike === 3){                                    
                    alert("***** 3스트라이크! 축하합니다 *****");
                const addresult = document.createElement("li");
                addresult.textContent = `${count+1}회 | 입력 된 숫자 = ${user_number} 생성 된 숫자 = ${gen_number}|| ${strike}스트라이크! 게임을 재시작해주세요!`;
                document.body.appendChild(addresult);}
                if(count===10){
                    alert("10회시도 종료! 아쉽네요");
                    const addresult = document.createElement("p");
                    addresult.textContent = `생성 된 숫자는 ${gen_number} 이었습니다`;
                    document.body.appendChild(addresult);
                    inputDiv.style.display = "none";
                    restartbutton.style.display = "inline-block";
                }
                }
    }
})