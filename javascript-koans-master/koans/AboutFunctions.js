describe("About Functions", function() {

  it("should declare functions", function() { //declare: 선언하다

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

  it("should know internal variables override outer variables", function () { //내부변수가 외부변수를 override함을 알아야한다. -> 내부변수(지역변수)는 외부변수(전역변수)보다 우선해서 함수 내에서 사용된다!
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

    expect(getMessage()).toBe("Outer");
    expect(overrideMessage()).toBe("Inner"); //함수 overrideMessage에서 var message라고 새로 '선언'하였으므로 message는 지역변수로 동작한다.
    expect(message).toBe("Outer"); //만약 위의 코드에서 var message가 아닌 그냥 message로 선언만 하였으면 결과는 "Inner"이다.
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe("local");
  });

  it("should use lexical scoping to synthesise functions", function () { //함수를 합성할때는 lexical scoping을 사용해야한다.

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);

  });
});
