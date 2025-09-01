import { hello } from "./hello.js";
import { findFile } from "./find-file.js";

(async () => {
    const root = String.raw`C:\\`;
    console.log(await findFile(root, "index.ts"));
})();

console.log(hello('Ali'));