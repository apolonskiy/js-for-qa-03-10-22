import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    console.log(req.query)
    res.send('Hello World')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("|Listening on port " + port);
})