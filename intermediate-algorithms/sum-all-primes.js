//the function that checks if the number is prime
function isPrime(val) {
  for (var i=2; i < val; i++) {
    if(val%i===0) {
      return false;
    }
  }
  return true;
}

//the function that sums a set of primes
function sumPrimes(num) {
  var prime = [];
  for (var i=2; i<=num; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime.reduce(function(a,b){
    return a+b;
  });
}

sumPrimes(10);
