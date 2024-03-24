//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +2348129859507
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: WolfieWTF" //ur github or insta name
global.location = "Nigera, Imo, Owerri" //ur location

//new
global.botname = '𝙒𝞗𝙇𝙁𝞘𝞢-𝞛𝘿' //ur bot name
global.ownernumber = '2348129859507' //ur owner number
global.ownername = '🐺𝚆𝚘𝚕𝚏𝚒𝚎𝚆𝚃𝙵' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://chat.whatsapp.com/KCjYsehp9TT5KVRZHvZLbO"
global.themeemoji = '🐺'
global.wm = "𝚆𝚘𝚕𝚏𝚒𝚎𝚆𝚃𝙵 Inc."
global.botscript = 'https://github.com/WolfieWTF/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "𝚆𝚘𝚕𝚏𝚒𝚎𝚆𝚃𝙵🐺"
global.creator = "2348129859507@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2348129859507,2348144384997"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
