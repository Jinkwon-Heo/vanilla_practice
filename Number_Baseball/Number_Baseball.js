const button = document.getElementById("startbutton");
let span = document.querySelector(".result");
const start = document.querySelector(".start");
const numberinput = document.getElementById("numberinput");
const inputDiv = document.querySelector(".inputDiv");

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

numberinput.addEventListener("keypress", function pressenter(e){
    var strike=0;
    var ball=0;
    var user_number = new Array(0);
    if(e.key === "Enter"){
        var userInput = document.getElementById("numberinput").value;
        if(userInput.length !==3){
            alert("잘못된 숫자를 입력하였습니다. 세 자리 숫자를 입력해주세요");
        }else{
            for(let i=0; i<userInput.length; i++){
                user_number.push(userInput[i]);}
                for(let i=0; i<gen_number.length; i++){
                    for(let j=0; j<user_number.length; j++){
                        if(i===j){
                            if(gen_number[i] === user_number[j]){
                                strike++;
                            }
                        }else if(i!==j){
                            if(gen_number[i] === user_number[j]){
                                ball++;
                            }
                        }
                    }
                }
        }
        alert(`입력 된 숫자 = ${user_number} 생성 된 숫자 = ${gen_number}|| ${strike}스트라이크 ${ball}볼`);
    }
})