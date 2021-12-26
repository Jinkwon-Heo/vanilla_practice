const $day = document.querySelector(".day");
const $date = document.querySelector(".date");
const $month_year = document.querySelector(".month_year");
const $sun_to_sat = document.querySelector(".sun_to_sat");
const $date_main = document.querySelector(".date_main");
const $left_button = document.querySelector(".left_button");
const $right_button = document.querySelector(".right_button");
const $class_labeling = document.getElementsByClassName("labeling");
const $realdates = document.getElementsByClassName("realdates")

var now = new Date();
var today = now.getDay();
var month = now.getMonth();
var year = now.getFullYear();
var thismonth1st = new Date(now.getFullYear(), now.getMonth(), 1);
var diff = 0;
const date_list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//removedate() 화면에 나타나 있는 날짜들을 지움
function removedate(){
    // for(var i=0; i<$class_labeling.length; i++){
    //     console.log($class_labeling.length);
    //     $class_labeling[i].remove();
    // };
    while($class_labeling.length>0){
        $class_labeling[0].remove();
    };
};

//이번 달은 몇일인지 리턴
var dates_of_month = function(month) {
    switch(month){
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return 31;
            break;
        case 1:
            return 28;
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            return 30;
            break;
    };
    // if(now.getMonth()+1 === 12){
    //     return date_list[0];
    // }else if(now.getMonth()-1 === -1){
    //     return date_list[11];
    // }else{return date_list[now.getMonth()];}
};

//number_to_Day(): 숫자로 표현된 요일을 문자로 리턴
let number_to_Day = function (number){
    switch(number){
        case 0:
            return "SUN";
            break;
        case 1:
            return "MON";
            break;
        case 2:
            return "TUE";
            break;
        case 3:
            return "WEN";
            break;
        case 4:
            return "THU";
            break;
        case 5:
            return "FRI";
            break;
        case 6:
            return "SAT";
            break;
    };
};

//number_to_Month(): .getMonth()결과값인 숫자를 문자로 표현
let number_to_Month = function (number){
    switch(number){
        case 0:
            return "JAN";
            break;
        case 1:
            return "FEB";
            break;
        case 2:
            return "MAR";
            break;
        case 3:
            return "APR";
            break;
        case 4:
            return "MAY";
            break;
        case 5:
            return "JUN";
            break;
        case 6:
            return "JUL";
            break;
        case 7:
            return "AUG";
            break;
        case 8:
            return "SEP";
            break;
        case 9:
            return "OCT";
            break;
        case 10:
            return "NOV";
            break;
        case 11:
            return "DEC";
            break;
    }
};

$day.textContent = `${number_to_Day(now.getDay())}`;
$date.textContent = `${now.getDate()}`;
$month_year.textContent = `${number_to_Month(month)}` + "  " + `${now.getFullYear()}`;

//day_labeling(): 일~토 라벨링
var day_labeling = function() {
    var array_day = new Array();
    for(let i=0; i<7; i++){
        array_day.push(number_to_Day(i));
        const day_add = document.createElement("span");
        day_add.className = "labeling";
        day_add.style.fontWeight = "bold";
        day_add.textContent = `${array_day[i]}`;
        $sun_to_sat.appendChild(day_add);
    };
};day_labeling();


//day_of_first(): 입력한 달의 1일의 요일 리턴
var day_of_first = function() {
    var today_Date_div7 = now.getDate()%7;
    var today_index = now.getDay();
    var day_of_first = number_to_Day(now.getDay());
    var array_day = new Array();
    for(let i=0; i<7; i++){
        array_day.push(number_to_Day(i));
    };

    while(today_Date_div7 !== 1){
        today_Date_div7--;
        today_index--;
        if(today_index >= 0){
            day_of_first = array_day[today_index];
        }else{day_of_first = array_day[array_day.length-today_index]};
    }

    return day_of_first;
}

//day_to_number(): 문자로 표현된 요일을 숫자로 리턴
var day_to_number = function(day) {
    switch(day){
        case "SUN":
            return 0;
            break;
        case "MON":
            return 1;
            break;
        case "TUE":
            return 2;
            break;
        case "WEN":
            return 3;
            break;
        case "THU":
            return 4;
            break;
        case "FRI":
            return 5;
            break;
        case "SAT":
            return 6;
            break;
    };
};

//date_labeling(): 1일부터 마지막 날짜까지 라벨링
var date_labeling = function(firstday, month) {
    for(let i=0; i<day_to_number(firstday); i++){
        const blank_add = document.createElement("span");
        blank_add.className = "labeling realdates";
        blank_add.style.visibility = "hidden";
        $sun_to_sat.appendChild(blank_add);
    }
    for(let j=1; j<dates_of_month(month)+1; j++){
        const date_add = document.createElement("span");
        date_add.className = `labeling realdates`;
        date_add.textContent = `${j}`;
        $sun_to_sat.appendChild(date_add);
    };
    var div_element_count = $sun_to_sat.childElementCount;
    for(let k=0;k<7-div_element_count%7 ;k++){
        const blank_add = document.createElement("span");
        blank_add.className = "labeling realdates";
        blank_add.style.visibility = "hidden";
        $sun_to_sat.appendChild(blank_add);
    };
    return ;
};date_labeling(number_to_Day(thismonth1st.getDay()), now.getMonth());


function pre_month(){
    if(month>0){
        $month_year.textContent = `${number_to_Month(month-1)}` + " " + `${year}`;
        month--;
    }else{
        $month_year.textContent = `${number_to_Month(11)}`+ " " + `${year-1}`;
        month = 11;
        year--;
    };

    diff = diff-1;
    var pre_month_day = new Date(now.getFullYear(), now.getMonth()+diff, 1);
    $day.textContent = `${number_to_Day(pre_month_day.getDay())}`;
    $date.textContent = "1";

    removedate();
    day_labeling();
    date_labeling(number_to_Day(pre_month_day.getDay()), month);

    // for (var i = 0 ; i < $realdates.length; i++) {
    //     $realdates[i].addEventListener("click", function buttonclick(ev){
    //         alert(ev.target.textContent);
    //     } , false );
    //  };
};

function next_month(){
    if(month<11){
        $month_year.textContent = `${number_to_Month(month+1)}` + " " + `${year}`;
        month++;
    }else{
        $month_year.textContent = `${number_to_Month(0)}`+ " " + `${year+1}`;
        month = 0;
        year++;
    };

    diff = diff+1;
    var next_month_day = new Date(now.getFullYear(), now.getMonth()+diff, 1);
    $day.textContent = `${number_to_Day(next_month_day.getDay())}`;
    $date.textContent = "1";

    removedate();
    day_labeling();
    date_labeling(number_to_Day(next_month_day.getDay()), month);

    // for (var i = 0 ; i < $realdates.length; i++) {
    //     $realdates[i].addEventListener("click", function buttonclick(ev){
    //         alert(ev.target.textContent);
    //     } , false );
    //  };
};





//날짜 클릭 시 해당 날짜 인식까지는 만듦.
//인식한 날짜를 $date에 넣기.
//$day를 위해 요일 인식해서 넣기.

for (var i = 0 ; i < $realdates.length; i++) {
    $realdates[i].addEventListener("click", function buttonclick(ev){
        $date.textContent = ev.target.textContent;
    } , false );
 };

// $sun_to_sat.addEventListner("click", function buttonclick(ev){

// }, false);

    // var i = 0;
    // var get_date = new Array();
    // while($realdates.length-i>0){
    //     get_date[i] = $realdates[i].innerHTML;
    //     i++;
    // }
    // console.log(get_date);
    // $date.textContent = get_date[3];
