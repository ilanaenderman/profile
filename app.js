// Setup libraries
const express	= require('express')
const pug		= require('pug')
const app 		= express()

// Setup pug views
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(express.static('static'))


// Route profile page
app.get('/', (req, res) => {
	res.render('profile')
})


// Listen port 8000
app.listen(8000, () => {
	console.log('server is running')
})