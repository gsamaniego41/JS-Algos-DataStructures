function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

function AddUpTo(n) {
  return (n * (n + 1)) / 2;
}

let time1 = performance.now();
console.log(AddUpTo(1000000000));
let time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds`);
