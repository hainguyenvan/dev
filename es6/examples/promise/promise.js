const promise01 = () => {
  return new Promise((fulfill, reject) => {
    setTimeout(function () {
      console.log("Promise01");
      fulfill(true);
    }, 3000);
  });
};

const promise02 = () => {
  return new Promise((fulfill, reject) => {
    console.log("Promise02");
    fulfill(true);
  });
};

const main = () => {
  console.log("Run example ...");
  // promise01();
  // promise02();
  // synchronize
  promise01()
    .then(data => {
      promise02();
    })
    .catch(err => {
      console.log(err);
    });
};

main();