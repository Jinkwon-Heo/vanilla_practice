const hex = "01233456789ABCDEF";
var hex_color = "";

const $span = document.querySelector("span");
const button = document.querySelector("button");
const $html = document.querySelector("html");

button.addEventListener("click", function buttonclick() {
    for(let i=0; i<6; i++){
        hex_color += hex[Math.floor(Math.random()*hex.length)];
        console.log(hex_color);
        $span.textContent = "HEX COLOR: " + hex_color;
        $html.style = `background-color: #${hex_color}`; //벡틱을 이용한 문자열에 변수 넣기
    };
    hex_color = "";
});
console.log(hex_color);