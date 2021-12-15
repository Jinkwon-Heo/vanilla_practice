var images = new Array();
for(let i=0; i<5; i++){
    images[i] = `image-${i+1}.png`;
};

var number = 0;
const $div = document.getElementsByTagName("div");
const $getimage = document.getElementsByTagName("img");
const $input = document.getElementsByTagName("input");

$div[0].addEventListener("click", function onClick(ev){
    if(ev.target.tagName === "IMG"){
        return;
    }
    else if(ev.target.className === "mainbutton_left"){
        number -= 1;
        if(number === -1){
            number = 4;
            $getimage[0].src = `./images/${images[number]}`;
            $input[number].checked = "checked";
        }else {$getimage[0].src = `./images/${images[number]}`; $input[number].checked = "checked";};
    }
    if(ev.target.className === "mainbutton_right"){
        number += 1;
        if(number === 5){
            number = 0;
            $getimage[0].src = `./images/${images[number]}`;
            $input[number].checked="checked";
        }else {$getimage[0].src = `./images/${images[number]}`; $input[number].checked = "checked";};
    }
});

$input[0].addEventListener("click", function Click(ev){
    number = 0;
    $getimage[0].src = `./images/${images[number]}`;
});
$input[1].addEventListener("click", function Click(ev){
    number = 1;
    $getimage[0].src = `./images/${images[number]}`;
});
$input[2].addEventListener("click", function Click(ev){
    number = 2;
    $getimage[0].src = `./images/${images[number]}`;
});
$input[3].addEventListener("click", function Click(ev){
    number = 3;
    $getimage[0].src = `./images/${images[number]}`;
});
$input[4].addEventListener("click", function Click(ev){
    number = 4;
    $getimage[0].src = `./images/${images[number]}`;
});
//이 부분 반복문으로 짧게 할 수 있을 것 같은데.. 생각해보자