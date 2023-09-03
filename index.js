const express = require('express')
const app = express()
const map = require('./router/map')


app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(express.json())
app.set('view engine', 'ejs')

app
.route('/')
.get((req, res) => {
  res.redirect('/map/test')
})

app
.route('/login')
.get((req, res) => {
  res.redirect('/map/test1')
})


app.use('/map', map)

app.listen('3000', () => {
  console.log('Server started on port 3000');
});