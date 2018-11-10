const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "!"

// console

bot.on('ready', function () {
    
    console.log("Je suis connecté !")
    }) 


    bot.on('ready', function () {
        bot.user.setPresence({game:{name: 'Paroxysme',type: 0}})

        console.log("Je suis connecté !")
        }) 

        // message de bienvenue est  au revoir 

        bot.on('guildMemberAdd', function (member) {
            member.createDM().then(function(channels){
                return channels.send('Bienvenue sur le serveur Hysteria Acess je me présente je suis Chloé, je suis lopératrice du serveur, est de vos Futur mission dans lentreprise Paroxysme'+ member.displayName)

            })
         })
         bot.on('guildMemberAdd', async member => {
            const channel = member.guild.channels.find('name', 'information');
          
            if (!channel) return;
            channel.send(`Bienvenue sur le serveur Hysteria Acess je me présente je suis Chloé, je suis lopératrice du serveur, est de vos Futur mission dans lentreprise Paroxysme ${member}`);
            
        });
bot.on('guildMemberRemove', member=>{
    member.guild.channels.find('name','information').send(`Paroxysme vous  dit au revoir et j'espère a bientot dans le Pazolite !${member}`)
})


// message divers avec commandes

        
                bot.on('message',function (message)  {
                    if (message.content == '!ma waifu') {
                    message.reply('cest moi!')
                    }
                    })  

                    bot.on('message',function (message)  {
                        if (message.content == '!épouse moi') {
                        message.reply('mmmmh donne 500 euro a Paroxysme est  oui')
                        }
                        }) 
                   
bot.on('message',function (message)  {
                        if (message.content == '!tes choupie') {
                        message.reply('mer mer merci ba ba baka ^/////^')
                        }
                        }) 
                        bot.on('message',function (message)  {
                            if (message.content == '!je taime~') {
                            message.reply(' moi aussiii~~~~')
                            }
                            }) 
                
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
                                            message.reply(Math.floor(Math.random()*4 + 1))
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
            
                        
        bot.login(process.env.TOKEN)
