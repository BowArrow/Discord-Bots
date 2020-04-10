const Discord = require("discord.js");
const { Client } = require("discord.js");
const client = new Discord.Client();
require("dotenv").config()
const key = process.env;


client.on("ready", () => {
    console.log("I'm Rollo! Let's roll!");
})

client.on("message", message => {
    if (message.content.substring(0, 1) == "*") {
        let args = message.content.substring(1).split(" ")
        let cmd = args[0];

        args = args.splice(1);

        switch (cmd) {
            case "ping":
                message.channel.send("pong")
                break;
            case "pong":
                message.channel.send("ping")
                break;
            case "roll":
                let lastRoll = 0;
                for(i=0; i < args.length; i++){
                    if( !isNaN(args[i]) ){
                        let res = ranNum(args[i]);
                        message.channel.send(`d${args[i]}: roll ${res}`);
                        lastRoll = res;
                    } else if (args[i] == "+"){
                        let res = (parseInt(lastRoll)+parseInt(args[i+1]));
                        message.channel.send(`r${lastRoll} add ${args[i+1]}: ${res}`);
                        i++;
                    } else if (args[i] == "-" ){
                        let res = (parseInt(lastRoll)-parseInt(args[i+1]));
                        message.channel.send(`r${lastRoll} subt ${args[i+1]}: ${res}`);
                        i++;      
                    } else {
                        let author = message.author.username;
                        message.channel.send(`${author} is u dum? you need to just enter numbers like *roll 10 20 30`);
                    } if ( message.author.username == "Pintle"){
                        message.channel.send("You are Pintle and your roll is: " + (parseInt(args[i]) + 200))
                    }
                }
                // message.channel.send(`Total: ${diceTotal}`)
            }
        }

})
let ranNum = arg => {
    let min = Math.ceil(1);
    let max = Math.floor(arg);
    let ans = Math.floor(Math.random() * (max - min) + min);
    return ans;
}




client.on('error', console.error)

client.login(key.BOT_TOKEN)