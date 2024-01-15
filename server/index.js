const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

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

const changeFame = (reqData) => {
    const path = '../../server/data/player/' + selectedPlayer + '.json';
    const data = JSON.parse(fs.readFileSync(path));
    
    data.fame.bounty = reqData.fame.bounty;
    data.fame.reputation = reqData.fame.bounty;

    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

const changeStats = (reqData) => {
    const path = '../../server/data/player/' + selectedPlayer + '.json';
    const data = JSON.parse(fs.readFileSync(path));
    
    data.stats = reqData.stats;

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

app.put('/fameChange', (req, res) => {
    const reqData = req.body;
    changeFame(reqData);
    res.send(JSON.parse(fs.readFileSync('../../server/data/player/' + selectedPlayer + '.json')));
})

app.put('/statsChange', (req, res) => {
    const reqData = req.body;
    changeStats(reqData);
    res.send(JSON.parse(fs.readFileSync('../../server/data/player/' + selectedPlayer + '.json')));
})



