const fs = require('fs');
const path = require('path');
const config = require('../config')
const {cmd , commands} = require('../command')

//auto reply 
cmd({
  on: "body"
},    
async (robin, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../data/autoreply.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
  
            if (config.AUTO_REPLY === 'true') {
                //if (isOwner) return;        
                await m.reply(data[text])
            
            }
        }
    }                
});                  
