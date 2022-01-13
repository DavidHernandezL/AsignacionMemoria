const { red } = require('color-name');
const express = require('express');
const {engine} = require('express-handlebars');
const multer = require('multer');
const path = require('path')
const fs = require('fs-extra')
var app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(multer({ dest: path.join(__dirname, '/public') }).single('procFile'));

const partitions = [
  {
    partition: 1,
    size: 300,
    sizePart: 399
  },
  {
    partition: 2,
    size: 100,
    sizePart: 50
  },
  {
    partition: 3,
    size: 200,
    sizePart: 150
  },
  {
    partition: 4,
    size: 150,
    sizePart: 75
  },
  {
    partition: 5,
    size: 299,
    sizePart: 350
  }

]

app.set('port',process.env.PORT || 3000);
app.engine('hbs',engine({
  extname:'.hbs',
  helpers:{
    generateColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var rgbColor = `rgb(${r},${g},${b})`
      return rgbColor
    }
  }
}));
app.set('view engine','hbs')

app.get('/',(req, res) => {
  res.render('index')
})

app.post('/procedures',async (req, res) => {
  const procedures = await fs.readJSONSync(path.join(__dirname,`/public/${req.file.filename}`));
  await fs.unlinkSync(path.join(__dirname,`/public/${req.file.filename}`));
  res.render('procedures',{procedures,partitions})
})

app.use('/public',express.static('public'));


app.listen(app.get('port'),() => {
  console.log('Listen on Port ' + app.get('port'))
});