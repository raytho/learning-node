const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hello world");
    } else {
      reject(new Error("Hello error"));
    }
  }, 200);
});

promise
  .then((msg) => msg.toUpperCase())
  .then((msg) => console.log("mensaje", msg))
  .then(() => console.log("error", msg));
