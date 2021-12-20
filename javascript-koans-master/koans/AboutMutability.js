describe("About Mutability", function() { //Mutuability : 가변성

  it("should expect object properties to be public and mutable", function () {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan");
  });

  it("should understand that constructed properties are public and mutable", function () { //만들어진 프로퍼티는 공용적이고 가변적이다.
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan");
  });

  it("should expect prototype properties to be public and mutable", function () { //프로토타입 이해하기.
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };

    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe("John Smith");

    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).toBe("Smith, John"); //프로토타입 객체에 존재하는 메서드와 같은 이름의 메서드를 객체에서 선언하면 해당 메서드는 지역변수처럼 해당 객체에서 작동하게 된다.
  });

  it("should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;

      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny"; //aPerson에 객체의 속성 형태로 firstname: "Penny"가 들어간다.
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).toBe("John"); //aPerson의 getFirstName()함수(메서드)를 호출하면 매개변수의 firstname이 리턴된다. firstname의 인자로는  var aPerson = new Person ("John", "Smith"); 을 선언할 때 사용된 "John"이 인자로 사용된다.
    expect(aPerson.getLastName()).toBe("Smith");
    expect(aPerson.getFullName()).toBe("John Smith");

    //여기서 console.log(aPerson.firstname)을 하면 "Penny"가 출력된다. 이는 메서드를 호출한 것이 아닌 aPerson에 들어있는 firstname속성의 값을 불러오기 때문이다.

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

    expect(aPerson.getFullName()).toBe("Andrews, Penny");
  });

});
