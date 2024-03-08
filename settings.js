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
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"YEWXyitmwnRPO6rY9eB02vB9EyS3SuyK1xG9sohQ1FY="},"public":{"type":"Buffer","data":"vNhLFIROGK8N3023/m9fGznu3X1ZwqBs3deFX7CBqS0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"kDlI6DIX5WiqZqS3896Bn7wIp7TmgAQ7ufYDaOM0C1U="},"public":{"type":"Buffer","data":"83jogif+dSHOZNP8vU3iMnlJbVyO5u+rFF7mLTj/+VQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"ENdSLeAuiv/RCBTNzvR45EXqZyzVYgml+xlYqVeRZU8="},"public":{"type":"Buffer","data":"VmeUjNX/jo1op8VyjiaNZpqh0beuy4n3OToO9XF++Rw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"WCdCrxhVC/CqY8Sn2m9kPfobDGZG9XX5lop2UCoBMUI="},"public":{"type":"Buffer","data":"N+lvD5+w9L5UsIXzfoi8cYj8/ujpWLgF4xx376WGoic="}},"signature":{"type":"Buffer","data":"2CL+9RKM/XTMgQ1qEGRVEtf4qR+u+u7yYKkt2cxVxvKJwhEjr2HTHIF3GlTkh2n1S+xEGIx8aT0lDqqgKPyVjQ=="},"keyId":1},"registrationId":237,"advSecretKey":"aqmVOJG/DUcfyp/x4zVe81cRkcB3sXXlvOtNR1MPVEg=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"zGi241sXQr6-FNoig1dDBw","phoneId":"4d2977f3-de55-42b8-a290-1d74795024e8","identityId":{"type":"Buffer","data":"iqAKEFg5EVvDvtB4Q1GraMXXw9U="},"registered":true,"backupToken":{"type":"Buffer","data":"NAuJr/HQCexMkpyU2+Oyn6Zy7sY="},"registration":{},"pairingCode":"W2SE9S8H","me":{"id":"50937127612:12@s.whatsapp.net","lid":"253583861788729:12@lid","name":"MR G-CASTO"},"account":{"details":"CN7/+akDEJe9rK8GGAQgACgA","accountSignatureKey":"8cl0wEUBiRrFQiDl8NxufqT3R8AuwiW9Gst8zReKtyE=","accountSignature":"79kLoWWFxBa+LpozLDaC/l+mRHIlJ3bEoQByzOsy+IfRrsVyAnAfuu2plM6QzxibTN4PJjxpviqwCxPIeAQoCg==","deviceSignature":"etIvooHlWpUBZ14hEjpb80d9viavnk/SifeJQpKcsqlr5BVmG616LArJanPK0cY+YGr7lKCPibQTF8vO7TLcgg=="},"signalIdentities":[{"identifier":{"name":"50937127612:12@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfHJdMBFAYkaxUIg5fDcbn6k90fALsIlvRrLfM0Xirch"}}],"platform":"android","lastAccountSyncTimestamp":1709907610,"myAppStateKeyId":"AAAAAG2b"}'

//owmner v card
global.ytname = "YT: Drex" //ur yt chanel name
global.socialm = "GitHub: drexmose" //ur github or insta name
global.location = "Africa, Kenya, Nairobi" //ur location

//new
global.botname = '𝐃𝐑𝐄𝐗 𝐁𝐎𝐓 𝐌𝐃 𝐕2' //ur bot name
global.ownernumber = '50835173605' //ur owner number
global.ownername = 'CHARLES CASTOLIN//ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://chat.whatsapp.com/Hf4W852NAroEgMCuQpLX1a"
global.themeemoji = '😁'
global.wm = "Drex Bot Inc."
global.botscript = 'its under development bruh😂' //script link
global.packname = "𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐛𝐲"
global.author = "VICKA🥰\n\n+50935173605"
global.creator = "254102074064@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254102074064"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
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
