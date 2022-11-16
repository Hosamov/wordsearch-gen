const express = require('express');
const wordsearch = require('wordsearch-generator');

const words = ['milk', 'silk', 'gill', 'lid', 'trip', 'slit', 'slip', 'skip', 'fin', 'skin'];
let puzzleGrid = wordsearch.createPuzzle(10,10,'en', words);
puzzleGrid = wordsearch.hideWords(puzzleGrid, 'en');
let lines = wordsearch.printGrid(puzzleGrid);
const linesArr = [];
for(let i = 0; i < lines.length; i++) {
  console.log(lines[i]);
  linesArr.push(lines[i]);
}

const app = express();

app.set('view engine', 'pug');

//setup static middleware to serve static files in the public folder
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('generator', { linesArr });
});

//! Port //
app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000...');
});