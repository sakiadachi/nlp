import { checkBodyUrl } from '../server';

describe("checkBodyUrl", () => {
    test("check error request", () => {
        expect(checkBodyUrl({})).toEqual(false)
    });
    test("check true", () => {
        expect(checkBodyUrl({url: "hello"})).toEqual(true)
    });
});