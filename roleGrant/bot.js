const Discord = require("discord.js");
const fs = require("fs");
const { Client, Attachment } = require("discord.js");
const client = new Discord.Client();
require("dotenv").config()
const prefix = ">";
const key = process.env;


client.on("ready", () => {
    console.log("I am ready!");
})

client.on("message", message => {
    if (message.content.substring(0, 1) == prefix) {
        var args = message.content.substring(1).split(" ")
        var cmd = args[0];
        var selection = args[1];
        var person = args[2];

        args = args.splice(1);

        switch (cmd) {
            case "role":
                
        }
    }

})



client.on('error', console.error)

client.login(key.BOT_TOKEN)