const express = require('express')
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
            output: factorial(input)
        });
    } catch(err) {
        res.status(500).send('the parameter for factorial must be an integer greater than zero.');
    }
})

function factorial(n) {
    let f = 1 ;

    for(var i = n; i >= 1; i--){
        f = f * i;
      }
    return f;
}
app.listen(port, () => {
  console.log(`listening on  http://localhost:${port}`)
})