const port = 3000;
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();


let selectedPlayer = 'Tree';
const players = [...fs.readdirSync('../../server/data/player/')]

const selectPlayer = (player) => {
    const selection = player;
    selectedPlayer = player;
    return selection
}

const changeFame = (req) => {
    const path = '../../server/data/player/' + selectedPlayer + '.json';
    const data = JSON.parse(fs.readFileSync(path));

    data.fame.bounty = parseInt(req.body.fame.bounty)
    
    data.fame.reputation = parseInt(req.body.fame.reputation);

    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

const changeProperties = (reqData) => {
    const path = '../../server/data/player/' + selectedPlayer + '.json';
    const data = JSON.parse(fs.readFileSync(path));
   
    data.settings = reqData;

    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

const changeAttributes = (reqData) => {
    const path = '../../server/data/player/' + selectedPlayer + '.json';
    const data = JSON.parse(fs.readFileSync(path));
   
    data.attributes = reqData;

    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

const changeSkills = (reqData) => {
    const path = '../../server/data/player/' + selectedPlayer + '.json';
    const data = JSON.parse(fs.readFileSync(path));
   
    data.skills = reqData;

    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

const changeFactions = (reqData) => {
    const path = '../../server/data/player/' + selectedPlayer + '.json';
    const data = JSON.parse(fs.readFileSync(path));
   
    data.clientVariables = reqData.clientVariables;
    data.factionExpulsion = reqData.factionExpulsion;

    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

const changeStats = (reqData) => {
    const path = '../../server/data/player/' + selectedPlayer + '.json';
    const data = JSON.parse(fs.readFileSync(path));
   
    data.stats = reqData;

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
    changeFame(req);
    res.send(JSON.parse(fs.readFileSync('../../server/data/player/' + selectedPlayer + '.json')));
})

app.put('/propertiesChange', (req, res) => {
    const reqData = req.body;
    changeProperties(reqData);
    res.send(JSON.parse(fs.readFileSync('../../server/data/player/' + selectedPlayer + '.json')));
})

app.put('/attributesChange', (req, res) => {
    const reqData = req.body;
    changeAttributes(reqData);
    res.send(JSON.parse(fs.readFileSync('../../server/data/player/' + selectedPlayer + '.json')));
})

app.put('/skillsChange', (req, res) => {
    const reqData = req.body;
    changeSkills(reqData);
    res.send(JSON.parse(fs.readFileSync('../../server/data/player/' + selectedPlayer + '.json')));
})

app.put('/factions', (req, res) => {
    const reqData = req.body;
    changeFactions(reqData);
    res.send(JSON.parse(fs.readFileSync('../../server/data/player/' + selectedPlayer + '.json')));
})

app.put('/statsChange', (req, res) => {
    const reqData = req.body;
    changeStats(reqData);
    res.send(JSON.parse(fs.readFileSync('../../server/data/player/' + selectedPlayer + '.json')));
})

