import { expect } from "chai";
import { findFile } from "../src/find-file.js"

describe("find-file", () => {
    it("index.ts dosyasının pathi dönmeli", async () => {
        const root = String.raw`C:\ts-example`;
        const expected = String.raw`C:\ts-example\src\index.ts`;

        expect(await findFile(root, "index.ts")).to.equal(expected);
    });
});