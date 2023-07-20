var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages }); // Pass messages to the view template
});

/* GET new message form page. */
router.get('/new', function(req, res, next) {
  res.render('form'); // Render the "form.ejs" template
});

/* POST new message form submission. */
router.post('/new', function(req, res, next) {
  // Extract form data from the request body
  const author = req.body.author;
  const text = req.body.message;

  // Add the new message to the messages array
  messages.push({
    text: text,
    user: author,
    added: new Date()
  });

  // Redirect to the home page after adding the message
  res.redirect('/');
});

module.exports = router;
