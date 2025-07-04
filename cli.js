const add = require('./src/stringCalculator');
const input = process.argv[2] || "";
try {
  const result = add(input);
  console.log("Result:", result);
} catch (e) {
  console.error("Error:", e.message);
}
