/**
 * STUDENT NOTES: Array Methods in JS
 * My "cheat sheet" for when I forget which one does what.
 */

const classmates = ['Alex', 'Blake', 'Casey', 'Drew'];
const scores = [85, 92, 78, 95, 88];

// --- 1. ADDING & REMOVING (The basics) ---

classmates.push('Emma');    // Adds to the end (like adding a new student to the list)
classmates.pop();           // Removes the last one (Emma left the class)
classmates.unshift('Zoe');  // Adds to the very front
classmates.shift();         // Removes the very first person

// --- 2. THE BIG ONES (Transforming data) ---

// .map() -> I use this to change EVERY item. Returns a NEW array.
const shoutNames = classmates.map(name => name.toUpperCase() + "!");

// .filter() -> I use this to "clean" my data. Keeps only what's true.
const highScores = scores.filter(score => score >= 90); // Only the A's

// .reduce() -> This one is a bit tricky. It squashes the whole array into one value.
const totalClassScore = scores.reduce((total, s) => total + s, 0);
const average = totalClassScore / scores.length;

// --- 3. FINDING STUFF ---

// .find() -> Just gives me the FIRST thing that matches.
const firstBName = classmates.find(name => name.startsWith('B'));

// .findIndex() -> Where is 'Casey' sitting? 
const caseyIndex = classmates.findIndex(name => name === 'Casey');

// .includes() -> Quick yes/no check.
const isAlexHere = classmates.includes('Alex'); // returns true

// --- 4. THE LOOPER ---

// .forEach() -> Just a loop. Doesn't return anything, just "does" stuff.
classmates.forEach(student => {
  console.log(`Checking attendance for: ${student}`);
});

// --- 5. CUTTING & REPLACING ---

// .slice() -> Takes a "slice" of the array. Doesn't ruin the original!
const firstTwo = classmates.slice(0, 2); 

// .splice() -> This one is "destructive." It cuts into the original array.
// (Start at index 1, remove 1 item, add 'NewStudent')
classmates.splice(1, 1, 'Taylor'); 

// --- 6. QUICK CHECKS ---

// .every() -> Did everyone pass? (Checks ALL)
const everyonePassed = scores.every(s => s > 60);

// .some() -> Did anyone get a perfect 100? (Checks ANY)
const anyonePerfect = scores.some(s => s === 100);

// --- 7. CLEANING UP ---

// .sort() -> Alphabetical order. 
// NOTE: Use [...arr] so you don't mess up the original list!
const sortedClass = [...classmates].sort();

// .join() -> Turns the array into a nice sentence.
const attendanceList = classmates.join(', ');

console.log("Study Session Done! Results:", { sortedClass, average });
/**
 * STUDENT NOTES: Array Looping
 * How to get through my lists without breaking everything.
 */

const gamers = ['Slayer', 'ProNoob', 'Ghost', 'X_Darkness'];


// I use this if I need total control, like skipping every other person
// or going backwards. It's a bit wordy though.
for (let i = 0; i < gamers.length; i++) {
  console.log(`Player ${i + 1}: ${gamers[i]}`);
}

// --- 2. FOR...OF LOOP (The Modern Go-To) ---
// This is the cleanest way. No index 'i' to track, 
// just "give me every item one by one."
for (const player of gamers) {
  if (player === 'Ghost') continue; // Easy to skip someone!
  console.log(`Logged in: ${player}`);
}

// --- 3. .forEach() METHOD (The Functional Way) ---
// I use this when I just want to run a function for every item.
// Note: You CANNOT "break" or "continue" inside a forEach!
gamers.forEach((player, index) => {
  console.log(`Rank #${index}: ${player}`);
});

// --- 4. FOR...IN LOOP (Watch Out!) ---
// NOTE: I mostly use this for OBJECTS, not arrays. 
// For arrays, it gives you the keys (indexes) as strings, 
// which can get messy. Stick to for...of for arrays!
for (const index in gamers) {
  console.log(`Index found: ${index}`); 
}

// --- 5. WHILE LOOP (The "Until" Loop) ---

let count = 0;
while (count < gamers.length) {
  console.log(`Checking... ${gamers[count]}`);
  count++; // Don't forget this or you'll crash your browser! lol
}

console.log("All players checked!");
