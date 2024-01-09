const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.port || 3000;

let selectedPlayer = 'Tree';
const players = [...fs.readdirSync('../../server/data/player/')]

const selectPlayer = (player) => {
    const selection = player;
    selectedPlayer = player;
    return selection
}

const changeName = (reqData) => {
    const path = '../../server/data/player/' + selectedPlayer + '.json';
    const data = JSON.parse(fs.readFileSync(path));
    data.login.name = reqData.login.name;
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server Listeneing on port ${port}`);
})

app.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync('../../server/data/player/' + selectedPlayer + '.json'));
    res.send(data);
});

app.get('/players', (req, res) => {
    res.send(players);
})



app.put('/selectPlayer', (req, res) => {
    const reqData = req.body;
    selectPlayer(reqData.player);
    res.send(reqData.player);
})

app.put('/nameChange', (req, res) => {
    
    const reqData = req.body;
    changeName(reqData);
    res.send(JSON.parse(fs.readFileSync('../../server/data/player/' + selectedPlayer + '.json')));
})




