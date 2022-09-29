export function asyncWrap(promise) {
    return promise.then((result) => [null, result]).catch((err) => [err])
  }