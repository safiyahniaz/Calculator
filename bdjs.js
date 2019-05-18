const ages = [10, 12, 14];

let sum = 0;

for (let value of ages) {
  sum = sum + value;
}

let result = sum / ages.length
console.log (result)