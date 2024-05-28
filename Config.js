const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['971562804817']
global.ownername = "Awanzada"//owner name
global.ytname = "www.youtube.com/@Englishtimepk"
global.socialm = "GitHub: Ayushpandey023"
global.location = "UAE"

global.botname = '◄⏤‌𝐈𝛕ᷟ‌𝚣⃪ꙴ➺𝄟⃝🦋 𝑩𝒊𝒍𝒂𝒍 𝑨𝒘𝒂𝒏𝒛𝒂𝒅𝒂🦋⃝𝄟' //name of the bot

//sticker details
global.stickername = '+971558510406-ᴠͥɪͣᴘͫ𝓑𝓲𝓵𝓪𝓵 𝓐𝔀𝓪𝓷𝔃𝓪𝓭𝓪'
global.packname = '+971558510406-ᴠͥɪͣᴘͫ𝓑𝓲𝓵𝓪𝓵 𝓐𝔀𝓪𝓷𝔃𝓪𝓭𝓪'
global.author = '𝄟≛⃝вιℓαℓ𓄂⍣⃝≛⃝αωαиzα∂α🕊𝄟≛⃝'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaRJYnw9Bb62DfrGXw3h'

//custom prefix
global.prefa = [',']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = false //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Bilal Bot 🎀*\n\n*🧩 Youtube link:* \nhttps://https://www.youtube.com/@Englishtimepk',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by Bilal-awanzada only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
