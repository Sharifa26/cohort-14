const {add} = require('../src/sample');


describe("Test add of 2 nums",()=>{
    test("should add 2 nums", () => { 
        expect(add(4, 6)).toBe(10);
    });

    test("should add 2 negative nums", () => { 
        expect(add(-4, -6)).toBe(-10);
    });

    test("should not add strings", () => { 
        expect(add('hello', 'hello')).toBe(-1);
    });

    it("should have 2 parameters", () => { 
        expect(add()).toBe(-1);
    });
});