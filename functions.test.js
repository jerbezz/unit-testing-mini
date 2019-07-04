const {
    greeting,
    add,
    returnTwo,
    subtract,
    multiply,
    divide
} = require('./functions')

test("greeting() should return a dynamic greeting based on name.", () => {
    expect(greeting('James') ).toEqual('Hello, James.');
    expect(greeting('Jill') ).toEqual('Hello, Jill.');
  });

test("returnTwo() should return 2.", () => {
    expect(returnTwo() ).toEqual( 2 );
  });

  describe('Math functions', () => {

    test("add() should 3.", () => {
        expect(add( 1, 2 ) ).toEqual( 3 );
      });

      test("multiply() should return 100.", () => {
        expect(multiply( 10, 10 ) ).toBe( 100 );
      });

      test("subtract() should return 3.", () => {
        expect(subtract( 5, 2 ) ).toEqual( 3 );
      });

      test("divide() should return 2.", () => {
        expect(divide( 8, 4 ) ).toEqual( 2 );
      });
  })