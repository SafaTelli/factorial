const express = require('express')
const fact = require('./fact');

const app = express()
const port = 3000



app.get('/factorial/:n', (req, res) => {
    try {
        const input = req.params.n;

        if(input==0) {
            throw new Error('Input must be greater than zero.');
        }
        res.json({
            input: input,
            output: fact(input)
        });
    } catch(err) {
        res.status(500).send('the parameter for factorial must be an integer greater than zero.');
    }
})


app.listen(port, () => {
  console.log(`listening on  http://localhost:${port}`)
})