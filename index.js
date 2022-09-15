const app = require('express')()

app.get('/ishealthy', (req, res) => {
    res.send('I\'m Healthy')
})

app.listen('3000', () => {
    console.log('Nodejs app statred')
})