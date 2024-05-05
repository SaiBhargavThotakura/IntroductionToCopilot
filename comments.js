// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Create a variable to store the comments
let comments = [];

// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route to post a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Path: index.js
// Create a function to post a comment
function postComment(comment) {
  fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  .then(response => response.json())
  .then(data => console.log(data));
}

// Create a function to get all comments
function getComments() {
  fetch('http://localhost:3000/comments')
  .then(response => response.json())
  .then(data => console.log(data));
}

postComment({ name: 'Alice', comment: 'Hello, world!' });
getComments();