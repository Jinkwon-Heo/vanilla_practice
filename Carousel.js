var images = new Array();
for(let i=0; i<5; i++){
    images[i] = `image-${i+1}.png`;
};

var number = 0;
const $div = document.getElementsByTagName("div");
const $getimage = document.getElementsByTagName("img");

$div[0].addEventListener("click", function onClick(ev){
    if(ev.target.tagName === "IMG"){
        alert("123123");
    }
    else if(ev.target.className === "mainbutton_left"){
        number -= 1;
        if(number === -1){
            number = 4;
            $getimage[0].src = `./images/${images[number]}`;
        }else {$getimage[0].src = `./images/${images[number]}`};
    }
    if(ev.target.className === "mainbutton_right"){
        number += 1;
        if(number === 5){
            number = 0;
            $getimage[0].src = `./images/${images[number]}`;
        }else {$getimage[0].src = `./images/${images[number]}`};
    }
});