const express = require('express')
const app = express()
const port = 3001
const allEvents = [
    {
        name: 'Palestra X', 
        data: ['24/04/2017', '25/04/2017', '26/04/2017'],
        link: 'http://palestrax.com'
    },
    {
        name: 'Palestra Y',
        data: ['01/07/2017'],
        link: 'http://www.palestray.com.br'
    },
    {
        name: 'Palestra Z',
        data: ['16/07/2017'],
        link: 'https://www.palestraz.com.br/'
    }
]

app.get('/allevents', (req, res) => res.json(allEvents))

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
    console.log('To shutdown the server: ctrl + c')
})