import { expect } from "chai";
import { hello } from "../src/hello.js"

describe("hello", () => {
    it("Hello isim şeklinde dönmeli", () => {
        expect(hello("Ali")).to.equal("Hello Ali!");
    });
});