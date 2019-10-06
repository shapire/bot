const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "!"

// console

bot.on('ready', function () {
    
    console.log("Je suis connecté !")
    }) 

 bot.login(process.env.TOKEN);
           
    bot.on('ready', function () {
        bot.user.setPresence({game:{name: 'I.A.D.C.H',type: 0}})

        console.log("Je suis connecté !")
        }) 

        // message de bienvenue est  au revoir 

        bot.on('guildMemberAdd', function (member) {
            member.createDM().then(function(channels){
                return channels.send('Bienvenue sur le serveur Hybride je me présente je suis Grille Serveur'+ member.displayName)

            })
         })
         bot.on('guildMemberAdd', async member => {
            const channel = member.guild.channels.find('name', 'information');
          
            if (!channel) return;
            channel.send(`Bienvenue sur le serveur Hybride je me présente je suis Grille Serveur ${member}`);
            
        });
bot.on('guildMemberRemove', member=>{
    member.guild.channels.find('name','information').send(` Bye Bye~!${member}`)
})


// message divers avec commandes

        bot.on('message' ,function(message){
    if(message.content.charAt(0) == prefix) message.reply(reponse.get(message.content))
}) 
var reponse = new Map
reponse.set('!coucou','bijour');
reponse.set('!épouse moi','mmmh donne 500 euro a shapire est pourquoi pas');
reponse.set('!tes choupie','mer mer mer merci ba ba baka ^////^');
reponse.set('!je taime~','moi aussiiii~~~~');
                
                        // lanceur de dé 

                        bot.on('message',function (message)  {
                            if (message.content == '!1d100') {
                            message.reply(Math.floor(Math.random()*100 + 1))
                            }
                            }) 

                            bot.on('message',function (message)  {
                                if (message.content == '!1d20') {
                                message.reply(Math.floor(Math.random()*20 + 1))
                                }
                                })  
                                bot.on('message',function (message)  {
                                    if (message.content == '!1d6') {
                                    message.reply(Math.floor(Math.random()*6 + 1))
                                    }
                                    }) 
                                    bot.on('message',function (message)  {
                                        if (message.content == '!1d10') {
                                        message.reply(Math.floor(Math.random()*10 + 1))
                                        }
                                        })  
                                        bot.on('message',function (message)  {
                                            if (message.content == '!1d4') {
                                            message.reply(Math.floor(Math.random()*4 + 1))
                                            }
                                            }) 
                                            bot.on('message',function (message)  {
                                            if (message.content == '!1d2') {
                                            message.reply(Math.floor(Math.random()*2 + 1))
                                            }
                                            }) 
                                            bot.on('message',function (message)  {
                                            if (message.content == '!1d8') {
                                            message.reply(Math.floor(Math.random()*8 + 1))
                                            }
                                            }) 






// fiche joueur 
bot.on('message',function (message)  {
    if (message.content == '!fiche joueur') {
    message.reply('! aucune fiche disponible pour le moment...')
    }
    })
    bot.on('message',function (message)  {
        if (message.content == '!fiche pnj') {
        message.reply('! aucune fiche disponible pour le moment...')
        }
        })  
        bot.on('message',function (message)  {
            if (message.content == '!fiche mob') {
            message.reply('! aucune fiche disponible pour le moment...')
            }
            }) 
            
                        

