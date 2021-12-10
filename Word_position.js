var word = "dolphin";
var sentence = "Where did Jane get the dolphin from, John?";

var head; //word의 첫번째 글자의 인덱스
var tail; //word의 마지막 글자의 인덱스

for(i=0; i<sentence.length; i++){ //senctence의 처음부터 마지막까지 search
    if(word[0] === sentence[i]){ //word의 첫번째 글자가 sentence상에 나타나면 글자 비교 시작
        for(j=0; j<word.length; j++){ //word의 글자 수 만큼만 비교
            if(word[j]===sentence[i+j]){
                head = i;
                tail = i+j;
            }else{ //만약 두번째 이상부터 다른 글자가 나타난다면 j for문을 빠져나온다.
                break;
            }
        }
    }
}

console.log(head, tail); //출력

//i와 j를 이용해서 각각의 for문이 같은 인덱스를 비교할 수 있도록 하였다. 비교를 반복하면서 계속 같은 글자가 나타난다면 head, tail변수에 저장. 