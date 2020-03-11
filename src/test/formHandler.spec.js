import { createFetchOptions } from '../client/js/formHandler';

describe("createFetchOptions", () => {
    test("it returns the fetch options", () => {
        const expected =    {
             "body": "{\"url\":\"https://example.com/\"}",
              "credentials": "same-origin",
               "headers": {
                 "Content-Type": "application/json",
               },
               "method": "POST",
             }
        expect(createFetchOptions("https://example.com/")).toEqual(expected)
    });
});

