
function sumFibs(num) {
  var val = 1;
  var fib_nums = [];
  for (var i=0; i<=num; i+val) {
    fib_nums.push(val);
    val += i;
  }
  return fib_nums;
}

sumFibs(4);
