function foo(a, b) {
  if (a === null && b === null) {
    return null; // Handle both null values explicitly
  } else if (a === null || b === null) {
    return 0; // Handle cases where one value is null
  } else {
    return a + b; // Standard addition
  }
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); // Output: null 