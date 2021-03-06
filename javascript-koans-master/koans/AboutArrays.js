describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe('object'); //A mistake? - http://javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(0);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);  //이 부분 다시 찾아보기. 왜 답이 5일까? 배열만드는 방법 찾아보자.
    expect(multiTypeArray[5][0]).toBe(6);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(10); //undefined로 채워진 배열이 생성됨.

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5); //.length보다 긴 배열을 위와같이 입력하면 이후의 요소는 삭제된다.
  });

  it("should slice arrays", function () {  //slice는 array.slice(begin, end)이며 begin부터 포함하고 end는 포함하지 않는 배열을 복사해서 반환한다. 만약 end가 array.length보다 큰 값이면 배열의 끝까지 추출한다. 원본 배열은 바뀌지 않는다.
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]); //end의 기준은 0번째 인덱스이다. 따라서 end로 0을 입력하면 start에 어떤 값을 넣어도 빈 배열이 추출된다.
    expect(array.slice(3, 100)).toEqual(["jelly"]); //100번 돌아서 0번째 인덱스로 왔다. 그러나 0을 입력한 결과와는 차이가 있다.
    expect(array.slice(5, 1)).toEqual([]);
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toBe("changed in function"); //배열은 reference타입이기 때문에 배개변수로 배열이 저장된 주소를 넘겨주게된다. 따라서 베열의 값이 바뀌게된다.

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe("changed in assignedArray"); //위와같음.

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe("three");  //배열의 메서드를 변수에 넣었다. 따라서 배열에는 영향이 없다.
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop();
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1, 2]);
  });

  it("should know about shifting arrays", function () { 
    var array = [1, 2];

    array.unshift(3);  //unshift()는 새로운 요소를 배열의 맨 앞쪽에 추가하고 새로운 길이를 반환한다.
    expect(array).toEqual([3, 1, 2]);

    var shiftedValue = array.shift(); //shift()는 배열에서 첫번째 요소를 제거하고 제거된 요소를 반환한다.
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });
});
