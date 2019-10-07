const Discord = require('discord.js')
const bot = new Discord.Client()

var reponse = new Map;
reponse.set('!coucou','bijour');
reponse.set('!épouse moi','mmmmh donne 500 euro a Shapire est pourquoi pas');
reponse.set('!tes choupie','mer mer merci ba ba baka ^/////^');
reponse.set('!je taime~',' moi aussiii~~~~');

var fiche = new Map;
fiche.set('Maliwan','https://drive.google.com/open?id=1acfDlLpjHvVF7yZXMfKNBiDviQb6Tfw7' );

var commandePrenium = new Map;
commandePrenium.set('!gainxp','1');
commandePrenium.set('!gaingold','2');


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
      
bot.on('message',function (message)  
{
    
    if(reponse.has(message.content)) message.reply(reponse.get(message.content))
    else if(fiche.has(message.content)) message.reply(fiche.get(message.content))
        else 
        {
            var x = message.content.split(' ');
            if(commandePrenium.has(x[0]) && (message.member.id == '265079904675037184' || message.member.id == '510599453569187860'))         
            {
                if(x[0].charAt(5) == 'g')
                {
                    var fs = require('fs'); 
                    var contenu = fs.readFileSync('./bd/gold'+x[1]+'.txt','utf8');
                  contenu = parseInt(contenu,10) + parseInt(x[2],10);
                  fs.writeFileSync('./bd/gold'+x[1]+'.txt',contenu,function(err){
                    if(err){
                        return console.log(err);
                    }
                    console.log("the file was saved !");
                });
                }
                else if(x[0].charAt(5) == 'x')
                {
                    var fs = require('fs');
                    var contenu = fs.readFileSync('./bd/xp'+x[1]+'.txt','utf8');
                    contenu = parseInt(contenu,10) + parseInt(x[2],10);
                    fs.writeFileSync('./bd/xp'+x[1]+'.txt',contenu,function(err){
                        if(err){
                            return console.log(err);
                        }
                        console.log("the file was saved !");
                    });
                } 
            }
        }
})

// lanceur de dé

bot.on('message',function (message)  {
    var x1 = "";
    for (var i= 0; i < 3 ; i++){
        x1 = x1 + message.content.charAt(i);
        
    }
    if (x1 == '!1d') {
        var x = "";
        for(var i = 3; i < message.content.length ; i++){
            x = x + message.content.charAt(i);
        }
        message.reply(Math.floor(Math.random() * x + 1))
    }
})
