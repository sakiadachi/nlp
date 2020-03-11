import { checkBodyUrl } from '../server';

describe("checkBodyUrl", () => {
    test("check error request", () => {
        const falseExpected = false;
    });
    expect (checkBodyUrl()).toEqual(falseExpected)
});

describe("checkBodyUrl", () => {
    test("check true", () => {
        const trueExpected = "{\"url\":\"https://example.com/\"}";
    });
    expect (checkBodyUrl().toEqual(trueExpected))
})