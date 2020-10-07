import express from 'express';


const app = express();

app.get('/', (req, res) => {
    return res.send('Oi mundinho gostosinho');
})

app.listen(4444);
