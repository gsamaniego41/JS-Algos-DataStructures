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

/* 
Better code === faster?
Rather than counting seconds which are so variable,
Count the number of simple operations the computer has to perform

n * (n + 1) / 2;
3 simple operations, regardless of the size of n
addition, multiplication, division
only 3 things that take time


for (let i = 1; i <= n; i++) {
  total += i;
}
n operations = if n is 1,000,000,000 then there's 1 billion operations
n additions, n assignments, i++, comparisons, assignments
many things that take time
*/
