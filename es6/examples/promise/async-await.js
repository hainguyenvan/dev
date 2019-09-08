const promise01 = () => {
  return new Promise((fulfill, reject) => {
    setTimeout(function() {
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

const main = async () => {
  let a = 10;
  let b = `string ${a}`;
  console.log("Run examples...");
  await promise01();
  promise02();
};

main();
