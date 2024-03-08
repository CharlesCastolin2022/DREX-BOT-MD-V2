//base by drex 
//re-upload? recode? copy code? give credit ya :)
//YouTube: @drexmose
//Instagram: drex_mose
//Telegram: t.me/dark_intent
//GitHub: @drexmose
//WhatsApp: +254102074064
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@drexmose

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"+N2BbFHCBoLj6fkONI1GWIuRC6rsC4UJzxI3n/xaPW0="},"public":{"type":"Buffer","data":"K4+HxOUqbBCIshDIyweCj/v7Zjs7utPlfV/cBwWAOHI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SHoW8GWc5Cumya6+8IjaAEVDSIJF6QA0HPNsC/jvoHw="},"public":{"type":"Buffer","data":"mhZgaXSn6qZWP/M2WZZEl9HH6TT8z1LR7nryyhqcDxM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"EJKZAcqdA9z41Gh4I4IYNl/gcY5MRjlj1l/qCyzRn30="},"public":{"type":"Buffer","data":"nK+twdGmT7HE4yr3aOrUQ4a80ehoF3D/HNn2OdGTiiA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"wK8Ss3iZ7UgiriR6DLjSjakgttiWGlT1DfnmotYJKko="},"public":{"type":"Buffer","data":"CqJOWUzbUiOfnTgkktP1JQUZ2ydNjkxcTfActSXVrUk="}},"signature":{"type":"Buffer","data":"CG8nuXOHvVjHgUGaNKgLh3EzmkR3SEPY6oCNNXg+Ek0IvBCGCYVWEuoW15zHcfKU1fI0ijBxD7b2aSkzvEIdAQ=="},"keyId":1},"registrationId":143,"advSecretKey":"XjgJo3WGCOVCxmQPLrH4BO93CuhkID1APDGMQXAR5ZU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"5t5zNaIFQAqF6llQpEkhnw","phoneId":"de39e1e5-0d26-4c53-9f81-b5918dd4be9c","identityId":{"type":"Buffer","data":"KJH+e3RdxtOeIcc3ql8M6+IGbuk="},"registered":true,"backupToken":{"type":"Buffer","data":"ATnN7+MwKKpiLkwamm6Vj+JRJw4="},"registration":{},"pairingCode":"4APG4MVK","me":{"id":"50937127612:13@s.whatsapp.net","lid":"253583861788729:13@lid","name":"MR G-CASTO"},"account":{"details":"CN7/+akDEIy9ra8GGAUgACgA","accountSignatureKey":"8cl0wEUBiRrFQiDl8NxufqT3R8AuwiW9Gst8zReKtyE=","accountSignature":"jd/TmCvRcrrjBAg8zXc01l66NZ4ZcY0F3vHI22/SUYmTKqNBaTY1mZRctHUfZWAStDCrcJrIUypFCvZKFmgjCA==","deviceSignature":"fuSihYQHQVxDgOjaRqegxByRZmSYNgb2F3ufItxi4CAf2swhIw3FznpWE1JEj087LdrLIgjV3cvSSlKXSF2vCA=="},"signalIdentities":[{"identifier":{"name":"50937127612:13@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfHJdMBFAYkaxUIg5fDcbn6k90fALsIlvRrLfM0Xirch"}}],"platform":"android","lastAccountSyncTimestamp":1709923983,"myAppStateKeyId":"AAAAAG2b"}'

//owmner v card
global.ytname = "YT: Drex" //ur yt chanel name
global.socialm = "GitHub: drexmose" //ur github or insta name
global.location = "Africa, Kenya, Nairobi" //ur location

//new
global.botname = '𝐃𝐑𝐄𝐗 𝐁𝐎𝐓 𝐌𝐃 𝐕2' //ur bot name
global.ownernumber = '254102074064' //ur owner number
global.ownername = '𝐃𝐑𝐄𝐗 𝐌𝐎𝐒𝐄' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://chat.whatsapp.com/Hf4W852NAroEgMCuQpLX1a"
global.themeemoji = '😁'
global.wm = "Drex Bot Inc."
global.botscript = 'its under development bruh😂' //script link
global.packname = "𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐛𝐲"
global.author = "𝐘𝐨𝐮𝐫 𝐏𝐚𝐩𝐚 𝐃𝐫𝐞𝐱\n\n+254102074064"
global.creator = "254102074064@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254102074064"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
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
