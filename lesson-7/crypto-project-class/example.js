import express from 'express';

const app = express();

app.get('/endpoint', (req, res) => {
    console.log(req.query)

    res.status(200).send('WORKED!')
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})