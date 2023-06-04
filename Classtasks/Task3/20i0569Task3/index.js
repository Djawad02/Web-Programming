//Imports
const express = require('express')
const app = express()
const port = 3000


// Static Files
app.use(express.static('Dania'));
// Specific folder example
 app.use('/css', express.static(__dirname + 'Dania/css'))
 app.use('/images', express.static(__dirname + 'Dania/images'))
 app.use('/video', express.static(__dirname + 'Dania/video'))
// Set View's
// app.set('views', './views');
// app.set('view engine', 'html');

// Navigation
app.get('', (req, res) => {
    res.sendFile(__dirname + '/webHtml/index.html')
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/webHtml/index.html')
})
app.get('/mytimetable', (req, res) => {
    res.sendFile(__dirname + '/webHtml/mytimetable.html')
})

app.get('/coursevideos', (req, res) => {
    res.sendFile(__dirname + '/webHtml/coursevideos.html')
})


//listen on the port
app.listen(port, () => console.info(`Listening on port ${port}`))