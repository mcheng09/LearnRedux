console.log("Test")

function add(a, b) {
  return a + b;
};

expect(add(3, 5)).toBe(8);
expect(add(-3, 5)).toBeA('number');

function capitalizeWord(word) {
  if(!word || typeof word !== 'string') {
    word = '';
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

expect(capitalizeWord('mike')).toBe('Mike');
expect(capitalizeWord('karen')).toBeA('string');
expect(capitalizeWord()).toBe('');

console.log("All test have passed");
