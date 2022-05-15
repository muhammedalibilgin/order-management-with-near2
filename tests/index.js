import assert from "assert";
import { add, multi } from "../build/debug.js";

assert.strictEqual(add(1, 2), 3);
console.log("ok");

assert.strictEqual(multi(3, 3), 9);
console.log("okey");
