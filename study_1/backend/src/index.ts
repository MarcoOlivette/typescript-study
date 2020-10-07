import express from 'express';


const app = express();

app.get('/', (req, res) => {
    return res.send('Oi mundinho gostosinho');
})

app.get('/jenifer', (req, res) => res.send('oie jenifer'))

app.listen(4444);
