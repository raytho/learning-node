const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hello world");
      } else {
        reject(new Error("Hello error"));
      }
    }, 200);
  });

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log("mensaje", msg);
  } catch (err) {
    console.log("error", err);
  }
}

asyncAwait();
