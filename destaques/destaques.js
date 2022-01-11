let iterable = new Map([["a", 3], ["b", 4], ["c", 5]]);

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

for (let [key, value] of iterable) {
  console.log(key);
  // console.log(value);
}
// 1
// 2
// 3
