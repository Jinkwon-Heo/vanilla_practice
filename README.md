# vanilla_practice
Practice for vanilla_prep.

What I studied.
JS first experience
const header = document.querySelector(".header");
const input = document.querySelector(".input");
HTML요소들의 클래스명을 이용해서 요소들을 선택, 각각 header, input이라는 변수에 저장.
우변은 HTML요소들을 선택하는 과정, 좌변은 JS의 변수.

input.onkeydown = function changeHeader () {
  header.textContent = input.value;
};
키보드의 입력을 감지하는 onkeydown이벤트를 구독하고(input.onkeydown) 이벤트가 발생하면(키보드 입력) changeHeader 함수가 호출되고 input에 입력된 값을 저장한다.( function changeHeader ())
function changeHeader(){}를 통해 changeHeader라는 함수를 사용자가 정의했다.
input.onkeydown을 통해 들어온 값을 input.value에 저장하고 이 값을 .textContent이벤트를 통해 header변수의 값을 바꾼다.
header변수의 값이 바뀌었으므로 header태그의 컨텐츠도 바뀐다.

**예제에서 입력한 글자가 바로 띄워지지 않고 하나 전의 글자가 띄워지는데 이는 실시간이 아니라 하나씩 popup되기 때문인가요?
**함수를 선언하고 그 함수를 호출해야 실행이 되는건데 위의 코드는 함수선언 아닌가요?  - 이벤트이기 때문인가..?


Commenting in JavaScript
한 줄 주석은 //, 여러 줄 주석은 /* ... */
cf)HTML의 주석은 <!-- ... --> 


Variables
Identifiers는 숫자, 알파벳, $, _ 가 사용될 수 있으나 숫자로 시작해서는 안된다. 또한 예약어는 Identifiers가 될 수 없다.
var one = 1;은
var one;
one = 1; 을 하나로 합친 코드이다.
따라서 var one=1; 이라는 코드는 one이라는 변수를 만든 후에 1을 one에 대입하는 코드이다.

Boolean
Boolean은 True와 False 두가지 값만 가진다.
console.log란?
자바스크립트 console.log인수로 설정한 값을 디버거 콘솔에 표시하는 함수. 디버깅 시 강력하게 사용가능


null & undefined
undefined
"정의되지 않음" 을 뜻한다. 어떤 변수를 만들고 그 값을 정의해주지 않았을 때 사용. 값이 대입되지 않은 상태
var k;
console.log(k); // undefined

null은 의도적으로 값이 없음을 표현할 때 대입한다.
var obj;
obj = null;


Numbers
typeof 연산자 : 어떤 종류의 값인지를 판별할 때 사용됨.
var a = typeof 3; <-- 변수 a에 담기는 값은 "number"라는 문자열(string)임.

String(문자열)
공백 ( )도 문자로 치기 때문에 "abc"와 "abc "는 다른 문자열이다.
문자열 종류의 값들은 인덱스(위치, 순서) 정보를 이용할 수 있다. 인덱스는 항상 0부터 시작한다. 예를 들어, "abc"의 문자열에서 0번째 인덱스에는 a, 1번째 인덱스에는 b가 있다.

객체란? https://velog.io/@surim014/%EC%9B%B9%EC%9D%84-%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94-%EA%B7%BC%EC%9C%A1-JavaScript%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-part-7-Object-35k01xmdfp
객체에서 key/value를 삭제하려면 delete person.age; 같이 delete를 쓰면 되는데, 그냥 객체내의 값을 지우면 되지 않나요?

프로퍼티(Property) & 메서드(Method)
객체는 케이스를 이루는 말이고 실제 객체를 완성하는 구성품들은 데이터를 의미하는 '프로퍼티', 데이터를 참조하고 조작할 수 있는 동작(behavior)을 의미하는 '메서드'이다.
JS의 객체는 Key(키)와 value(값)으로 구성된 '프로퍼티'들의 집합이다. 프로퍼티의 값으로는 JS에서 사용할 수 있는 모든 값을 사용할 수 있다.
프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 '메서드'라고 부른다.
프로퍼티와 메서드란? https://velog.io/@canonmj/%ED%95%A8%EC%88%98%EC%99%80-%EB%A9%94%EC%84%9C%EB%93%9C%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94-object-%EC%8B%AC%ED%99%94%EC%9D%B4%ED%95%B4
slice() - Array.slice() 메서드는 배열의 일부분 혹은 부분 배열을 반환한다. 두 개의 전달인자를 받고 첫 번째 전달인자가 지정하는 위치부터 두 번째 전달인자가 지정하는 위치를 제외한 그 사이의 모든 원소를 포함. https://webclub.tistory.com/326


**자바에서 ==와 ===는 다르다!
==는 양 쪽의 값이 같은지를 비교한다.(값만 같다면 true. 예를들어 0 == fales -> true)
===는 strict Equal Operator로써 값 뿐만 아니라 데이터 타입까지 모두 같은지를 비교한다.
null과 undefined는 둘 다 값이 없음을 뜻하지만 null == undefined; // true
null === undefined; // false 데이터타입이 다르기 때문에 false로 나온다.
https://velog.io/@filoscoder/-%EC%99%80-%EC%9D%98-%EC%B0%A8%EC%9D%B4-oak1091tes

**graph-ql이란?
페이스북에서 만든 쿼리 언어로 최근 인기가 올라가고 있다.
SQL과 같은 쿼리언어지만 언어적 구조 차이는 매우 크다. sql은 DB시스템에 저장된 데이터를 효율적으로 가져오는 것이 목적.
gql은 웹 클라이언트가 데이터를 서버로부터 효율적으로 가져오는 것이 목적.


Logical operators
JS에는 세가지 논리 연산자가 있다. !(not), ||(or), &&(and)
! 은 1. 피연산자를 true나 false인 boolean 타입으로 변환함. 2. 피연산자의 값을 바꿔서 리턴함.  ** !! not을 두 번 쓰면 boolean 타입으로 값을 변환하려고 사용한다.
|| 는 true, flase가 아닌 피연산자값이 반환된다. 1. 연산자를 기준으로 왼쪽부터 Truthy 값을 찾는다. 2. Truthy값을 찾은 경우 연산을 중지하고 해당 값을 반환. 3. 마지막까지 Truthy값을 찾지 못 한 경우, 마지막에 위치한 값을 반환.
&&도 피연산자값이 반환. 1. 연산자를 기준으로 왼쪽부터 Falsy값을 찾는다. 2. Falsy값을 찾은 경우 연산을 중지하고 해당값을 반환. 3. 마지막까지 flasy값을 찾지 못 한 경우, 마지막에 위치한 값을 반환.

**Falsy값
0, -0, false, undefined, null, "", '', '', NaN
위에 나열되지 않은 값들은 모두 Truhty값. 즉 true로 변환되는 값


조건문
if, else-if 구문은 여러가지 조건이 참이라고 해도 한가지만 실행된다. 


반복문
continue: 반복구문 종료
console.log('before for loop');

for (var i = 1; i < 11; i += 2) {
  if (i === 7) {
    continue;
  }

  console.log(i);
}

console.log('after for loop');

위와 같이 continue 문을 쓰면 해당 조건을 만족할 때 당회의 반복구문을 종료하고 다음 반복회차로 넘어가게 된다.


Exercise
1. FizzBuzz 
아이디어
1) 1~100까지 출력은 for문으로 작성
2) 3의 배수와 5의 배수에서 출력되는 문자는 for문 안에 if문을 사용해서 작성. 조건식은 3과 5로 나누어서 나머지가 0이 되면 true가 되도록.
3) 3과 5의 공배수는 3의 배수 if문에서 중첩 if문을 사용해서 5로도 나누어지는 수가 나오면 fizzbuzz가 출력되도록 작성.
결과 : 1 2 fizz 3 4 buzz 5 ... 와 같이 3과 5의 배수에서 fizz buzz를 출력하는 결과가 나와서 if문 안에 continue를 작성했더니 정상작동하였다.

2. Biggest Number
아이디어
1) a와b를 비교해서 이 중 큰 수를 c와 다시 비교해서 마지막으로 가장 큰 수를 찾아낸다.
2) 첫번째 if문은 a와 b를 비교하는 조건식을 사용한다. 그 안에 중첩된 if문을 사용해서 c와 비교한다.
3) else if문을 사용해서 c와 비교하는 구문을 하나 더 만든다.
결과 : a, b, c값을 콘솔창에서 입력받아서 비교하는 프로그램을 만들고싶은데 JS는 c언어의 scanf처럼 간단한 방법이 없다... 공부해서 만들어보자.

3. Word Position
아이디어
1) word[0]의 글자가 sentence에서 나타나면 검사를 시작. 이 때 검사하는 글자가 sentence의 몇번 째 글자인지 저장(head). - for문 안에 if를 사용해서 같은 글자가 나오면 검사시작
2) word[1] .. word[2].. 를 두번째 세번째 글자와 비교하다 만약 다른 글자가 나오면 검사중단. - if문 안에 for문을 사용해서 두번째 세번째... 글자들을 검사. continue를 사용해서 반복구문 중단
3) sentence의 중단 된 글자 다음부터 다시 검사시작. -> 1, 2, 3 반복
4) word[word.length-1] 까지 비교해서 글자가 모두 같은 단어가 나오면 검사를 중단하고 sentence의 몇번 째 글자인지 저장(tail).
5) 출력.
결과 : word와 sentence의 글자를 비교할 때 서로 다른 for문으로 돌아가기 때문에 같은 인덱스를 비교할 방법이 떠오르지 않아서 고생했다. i로 돌아가는 for문 안에 있는 j의 for문이 있으므로 j가 돌아갈 동안은 i값이 고정되어있다. 따라서 i와 j값을 더해서 for문을 반복하였다