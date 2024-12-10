// Create web server
const express = require('express');
const app = express();

// Create comment
app.post('/comment', (req, res) => {
  res.send('Create comment');
});

// Read comment
app.get('/comment', (req, res) => {
  res.send('Read comment');
});

// Update comment
app.put('/comment', (req, res) => {
  res.send('Update comment');
});

// Delete comment
app.delete('/comment', (req, res) => {
  res.send('Delete comment');
});

// Start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});