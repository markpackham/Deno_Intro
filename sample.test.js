// Learning about Deno from https://www.youtube.com/watch?v=Bkzem7vLjlA
// run "deno test"
import sum from "./sample.js";
import { assertEquals } from "./deps.js";

Deno.test("Testing sum", () => {
  assertEquals(sum(1, 2), 3);
});
