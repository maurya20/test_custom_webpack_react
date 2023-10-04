const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first");
    reject(new Error("Error occured here!!!!"));
  }, 3000);
});
promise
  .then((val) => {
    console.log(val);
    return val + "Second";
  })
  .then((res) => console.log("sec>>>>>>>>", res));

const myThenable = {
  then: (onFulfilled) => {
    promise.then(val=> onFulfilled(val));
    
  },
};

myThenable.then((val) => console.log("thenable>>>>>>", val));
