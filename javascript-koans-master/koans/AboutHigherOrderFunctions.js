var _; //globals

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */
describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 }); //.filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

    expect(odd).toEqual([1, 3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 }); //.map()메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

    expect(numbersPlus1).toEqual([2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);
            //.reduce()메서드는 배열의 각 요소에 대해 주어진 리듀서함수를 실행하고 하나의 결과값을 반환한다.
            //initial 부분은 optional이다. 만약 초기값을 지정해주지 않으면 reduce메서드의 초기값은 배열의 첫번째 값이다.

    expect(reduction).toBe(6);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'forEach' for simple iteration", function () { //iteration : 반복
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven); //.foreach()메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다.

    expect(msg).toEqual("falsetruefalse");
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'all' to test whether all items pass condition", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toBe(true); //.all()메서드는 배열의 모든 요소들이 참인지 검사하고 모두 참이면true, 하나라도 false면 false를 반환한다.
    expect(_(mixedBag).all(isEven)).toBe(false);
  });

  it("should use 'any' to test if any items passes condition" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(true); //.any()메서드는 배열의 요소 중 하나이상의 요소가 참인지 검사하고 true, false를 반환.
    expect(_(mixedBag).any(isEven)).toBe(true);
  });

  it("should use range to generate an array", function() { //.range([start], stop, [step])는 지정한 값을 바탕으로 배열을 생성한다.
      expect(_.range(3)).toEqual([0, 1, 2]);
      expect(_.range(1, 4)).toEqual([1, 2, 3]);
      expect(_.range(0, -4, -1)).toEqual([0, -1, -2, -3]);
  });

  it("should use flatten to make nested arrays easy to work with", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1, 2, 3, 4]); //이 예제에서는 flat()대신 flatten()이 쓰였는데 flat은 flatten으로부터 유래되었다.
  });

  it("should use chain() ... .value() to use multiple higher order functions", function() {
      var result = _([ [0, 1], 2 ]).chain() //여러개의 고차함수를 쓰려면 .chain()메서드를 쓴 후에 사용해야한다.
                       .flatten() //[0, 1, 2]
                       .map(function(x) { return x+1 } ) //[1, 2, 3]
                       .reduce(function (sum, x) { return sum + x }) //6 
                       .value();

      expect(result).toEqual(6);
  });

});

