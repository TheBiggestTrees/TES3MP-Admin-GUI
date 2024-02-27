# TES3MP Admin GUI

## Description
This program was made to be able to modify player data for TES3MP while that player is offline.

## Features
- Modify, add, or delete player data , i.e.
  - Faction Expulsions
  - Server Staff Rank
  - All Player Skills and Attributes

## Built-with
### Backend Server
- NodeJS
- ExpressJS

### Frontend Application
- React
- Tailwind CSS
- Javascript

## Installation
### Server
Installing the server requires that you have NodeJS installed on your system.

- Tested on RaspberryPi 3 and Windows 10/11

1. Download the server from the Releases page.
2. Extract the rar into the directory that the game server is running from.
3. Open a terminal of some sort and navigate to
```\TES3MP-Admin-GUI\server``` using ```cd X:\YOUR\GAME\DIRECTORY\TES3MP-Admin-GUI\server``` in CMD or Powershell, where YOUR\GAME\DIRECTORY\\ is the folder where the server executables are.
4. Run the npm command to install dependencies
```
npm install
```
5. Run index.js
```
node index.js
```
- Note: This does require the terminal window to be left open to be able to access the game server's data.

### Change Server Port
- Default Port is ```3000```

If you want to change the port the server runs on you will have to manually change it in the index.js file within ```\TES3MP-Admin-GUI\server\``` on line 1. 
```js
const port = 3000;
```

### Client
1. Download the latest execuatable from the Releases page.
2. Run the installer
3. Choose where you want to install the program.
4. Run TES3MP Admin GUI
5. Connect to your server running on the terminal using the IP and Port.
