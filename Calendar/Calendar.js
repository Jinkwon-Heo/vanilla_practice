const $day = document.querySelector(".day");
const $date = document.querySelector(".date");
const $month_year = document.querySelector(".month_year");
const $sun_to_sat = document.querySelector(".sun_to_sat");
const $date_main = document.querySelector(".date_main");
const $left_button = document.querySelector(".left_button");
const $right_button = document.querySelector(".right_button");

var now = new Date();

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
    }
};

let number_to_Month = function (number){
    switch(number){
        case 1:
            return "JAN";
            break;
        case 2:
            return "FEB";
            break;
        case 3:
            return "MAR";
            break;
        case 4:
            return "APR";
            break;
        case 5:
            return "MAY";
            break;
        case 6:
            return "JUN";
            break;
        case 7:
            return "JUL";
            break;
        case 8:
            return "AUG";
            break;
        case 9:
            return "SEP";
            break;
        case 10:
            return "OCT";
            break;
        case 11:
            return "NOV";
            break;
        case 12:
            return "DEC";
            break;
    }
};

$day.textContent = `${number_to_Day(now.getDay())}`;
$date.textContent = `${now.getDate()}`;
$month_year.textContent = `${number_to_Month(now.getMonth()+1)}` + "  " + `${now.getFullYear()}`;

var array_day = new Array();
for(let i=0; i<7; i++){
    array_day.push(number_to_Day(i));
    const day_labeling = document.createElement("span");
    day_labeling.textContent = `${array_day[i]}`;
    $sun_to_sat.appendChild(day_labeling);
};

console.log(array_day);

var day_of_first = function() {
    var today_Date_div7 = now.getDate()%7;
    var today_index = now.getDay();
    var day_of_first = number_to_Day(now.getDay());

    while(today_Date_div7 !== 1){
        today_Date_div7--;
        today_index--;
        if(today_index >= 0){
            day_of_first = array_day[today_index];
        }else{day_of_first = array_day[array_day.length-today_index]};
    }

    return day_of_first;
}

console.log(day_of_first());