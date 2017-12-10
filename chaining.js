let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let sorted = integers.sort(function(a, b){return b-a}).filter(number => number < 20).map(x => (x * 1.5)-1).reduce(function(prev, curr){return prev + curr;});
console.log(sorted);

output = document.getElementById("output");
output.innerHTML = sorted;