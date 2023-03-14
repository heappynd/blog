# Gists

## 重试

```js
let count = 0;

function fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(count);
      count++;
      count > 5 ? resolve("ok") : reject("err");
    }, 1000);
  });
}
// load 函数接收一个 onError 回调函数
function load(onError) {
  // 请求接口，得到 Promise 实例
  const p = fetch();
  // 捕获错误
  return p.catch((err) => {
    // 当错误发生时，返回一个新的 Promise 实例，并调用 onError 回调，
    // 同时将 retry 函数作为 onError 回调的参数
    return new Promise((resolve, reject) => {
      // retry 函数，用来执行重试的函数，执行该函数会重新调用 load 函数并发送请求
      const retry = () => resolve(load(onError));
      const fail = () => reject(err);
      onError(retry, fail);
    });
  });
}
// test
load((retry) => {
  retry();
}).then((res) => {
  console.log(res);
});
```
