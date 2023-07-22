// app.js
const express = require('express');
const app = express();

// Import the data array from data.js
const largeDataArray = require('./data');

const itemsPerPage = 20; // Adjust the number of items per page as needed

app.get('/items', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = largeDataArray.slice(startIndex, endIndex);

  const totalPages = Math.ceil(largeDataArray.length / itemsPerPage);

  res.json({
    data: paginatedData,
    currentPage: page,
    totalPages: totalPages,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
