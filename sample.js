// Learn about Deno from https://www.youtube.com/watch?v=Bkzem7vLjlA

// export default function sum(a, b) {
//   return a + b;
// }

import print from "./library.js";
// external import only works when running off a server
// import print from "http://127.0.0.1:5501/library.js";
print();

// "deno run sample.js"
