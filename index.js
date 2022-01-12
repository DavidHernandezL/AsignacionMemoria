const { red } = require('color-name');
const express = require('express');
const {engine} = require('express-handlebars');


var app = express();

const procs= [
  {
      "id":1,
      "duration":5,
      "size":46
  },
  {
      "id":2,
      "duration":6,
      "size":71
  },
  {
      "id":3,
      "duration":3,
      "size":35
  },
  {
    "id":4,
    "duration":10,
    "size":567
  },
  {
    "id":5,
    "duration":21,
    "size":473
  },
  {
      "id":6,
      "duration":4,
      "size":173
  },
  {
      "id":7,
      "duration":5,
      "size":271
  },
  {
      "id":8,
      "duration":12,
      "size":361
  },
  {
      "id":9,
      "duration":10,
      "size":351
  },
  {
      "id":10,
      "duration":21,
      "size":98
  },
  {
      "id":11,
      "duration":6,
      "size":110
  },
  {
      "id":12,
      "duration":14,
      "size":38
  },
  {
      "id":13,
      "duration":10,
      "size":67
  }

]

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
  res.render('index',{procs,partitions})
})

app.use('/public',express.static('public'));


app.listen(app.get('port'),() => {
  console.log('Listen on Port ' + app.get('port'))
});