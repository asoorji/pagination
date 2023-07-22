// data.js
// Simulated data array
const largeDataArray = [];

// Generate sample data
for (let i = 1; i <= 1000; i++) {
  largeDataArray.push({ id: i, name: `Item ${i}` });
}

module.exports = largeDataArray;
