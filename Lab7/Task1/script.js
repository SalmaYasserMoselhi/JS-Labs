var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const isAllStrings = fruits.every(fruit => typeof fruit === 'string');
console.log('Are all elements are strings? ', isAllStrings);

const startsWithA = fruits.some(fruit => fruit.startsWith('a'));
console.log('Is there elements start with a?', startsWithA);

const filteredFruits = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
console.log('Fruits start with b or s:', filteredFruits);

const likedFruits = fruits.map(fruit => `I like ${fruit}`);
console.log('Fruits that i like:', likedFruits.join(', '));