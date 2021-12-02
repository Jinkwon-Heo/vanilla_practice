var word = "dolphin";
var sentence = "Where did Jane get the dolphin from, John?";

var head;
var tail;

for(i=0; i<sentence.length; i++){
    if(word[0] === sentence[i]){
        for(j=0; j<word.length; j++){
            if(word[j]===sentence[i+j]){
                head = i;
                tail = i+j;
            }else{
                break;
            }
        }
    }
}

console.log(head, tail);