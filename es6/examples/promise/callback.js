const funcA = callback => {
  setTimeout(function() {
    console.log("Function A");
    callback();
  }, 3000);
};

const funcB = callback => {
  console.log("Function B");
  callback();
};

const funcC = () => {
  console.log("Function C");
};

const main = () => {
  console.log("Run callback example ...");
  funcA(function() {
    funcB(function() {
      funcC();
    });
  });
};

main();
