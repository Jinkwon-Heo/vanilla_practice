describe('About Expects', function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {

    // Your journey begins here: Replace the word false with true  시작!
    expect(true).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.  진실을 이해하려면 예상과 진실을 비교해야한다.
  it('should expect equality', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.  같음을 주장하는 방법중에는 다른 것보다 나은 방법이 있을 수 있다.
  it('should assert equality a better way', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.  toEqula()은 common sense equliity를 통해 비교한다.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."  가끔 넌 "타입"(이 문제에서는 스트링과 숫자형 구분)을 정밀하게 구분해야한다.
  it('should assert equality with ===', function() {
    var expectedValue = '2';
    var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare. toBe()는 항상 ===를 사용해서 비교한다.
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values. 가끔 값을 채우라고 요구 할 수도 있다.
  it('should have filled in values', function() {
    expect(1 + 1).toEqual(2);
  });
});
