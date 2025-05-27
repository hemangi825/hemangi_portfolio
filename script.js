const developerNames = [
"JavaScript Developer",
"Electron JS Developer",
"NodeJS Developer",
"React JS Developer",
"Angular JS Developer",
"HTML & CSS Developer",
"WPF Developer",
"C# Developer",
"Figma Designer",
"Youtuber"
];

const developerRole = document.getElementById('developer-role');

let nameIndex = 0;
let charIndex = 0;

function typeText() {
const currentText = developerNames[nameIndex];

// Append one character at a time
developerRole.textContent += currentText[charIndex];
charIndex++;

if (charIndex < currentText.length) {
setTimeout(typeText, 100); // Typing speed
} else {
// Wait 2s before showing the next title
setTimeout(() => {
charIndex = 0;
nameIndex = (nameIndex + 1) % developerNames.length;
developerRole.textContent = ""; // Clear before typing next
typeText();
}, 2000);
}
}

// Start typing on load
typeText();


  