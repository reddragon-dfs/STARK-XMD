process.on("uncaughtException", console.error);
require('./settings');

const {
    default: makeWASocket,
    makeCacheableSignalKeyStore,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto,
    delay
} = require("@whiskeysockets/baileys");

const { color } = require('./lib/color');
const readline = require("readline");
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const { Low, JSONFile } = require('./lib/lowdb');
const yargs = require('yargs/yargs');
const fs = require('fs');
const chalk = require('chalk');
const FileType = require('file-type');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');
const util = require('util');
const moment = require('moment-timezone');
const PhoneNumber = require('awesome-phonenumber');

const {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid
} = require('./lib/exif');

const {
    smsg,
    await,
    clockString,
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
    getSizeMedia,
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

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
});

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());

// Bot Configuration
const BOT_NAME = "STARK XMD";
const BOT_OWNER = "DARKNESS FREENET SQUAD";
const OWNER_NUMBER = "27634988678";
const TELEGRAM_CHANNEL = "https://t.me/+c7x2pinDo99mMzA0";
const TELEGRAM_USERNAME = "@cyberwarriorrsa";
const BOT_VERSION = "1.0.0";

global.db = new Low(new JSONFile(`src/${tempatDB}`));
global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
    if (global.db.READ) {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                if (!global.db.READ) {
                    clearInterval(interval);
                    resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
                }
            }, 1000);
        });
    }

    if (global.db.data !== null) return;

    global.db.READ = true;

    try {
        await global.db.read();
        global.db.data = {
            users: {},
            database: {},
            chats: {},
            game: {},
            settings: {},
            message: {},
            ...(global.db.data || {})
        };
        global.db.chain = _.chain(global.db.data);
    } catch (err) {
        console.error('⚠️ Failed to read database:', err);
    } finally {
        global.db.READ = false;
    }
};

loadDatabase();

if (global.db) {
    setInterval(async () => {
        if (global.db.data && !global.db.READ) {
            try {
                await global.db.write();
            } catch (err) {
                console.error('⚠️ Failed to save database:', err);
            }
        }
    }, 30 * 1000);
}

// Configuration based on your details
const phoneNumber = OWNER_NUMBER;
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'));
const contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
const usePairingCode = true;
const session = `./src/jadibot/${m.sender.split("@")[0]}`;

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve)
    });
};

const client = {}

const startBot = async (sock, m, from) => {
    const { state, saveCreds } = await useMultiFileAuthState(session);
    
    client[from] = makeWASocket({
        printQRInTerminal: !usePairingCode,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }

            return message;
        },
        version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
        browser: ["Windows", "Chrome", "20.0.04"],
        logger: pino({ level: 'fatal' }),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino().child({
                level: 'silent',
                stream: 'store'
            })),
        }
    });

    console.log(`
    ╔══════════════════════════════════════════╗
    ║           STARK XMD BOT v${BOT_VERSION}             ║
    ║           Developed by:                  ║
    ║           ${BOT_OWNER.padEnd(36)}║
    ║           Owner: ${OWNER_NUMBER.padEnd(27)}║
    ║           Telegram: ${TELEGRAM_USERNAME.padEnd(25)}║
    ╚══════════════════════════════════════════╝
    `);

    if (usePairingCode && !client[from].user && !client[from].authState.creds.registered) {
        setTimeout(async () => {
            code = await client[from].requestPairingCode(m.sender.split("@")[0]);
            code = code?.match(/.{1,4}/g)?.join("-") || code;

            let text = `🔐 *Pairing Code for @${m.sender.split("@")[0]}*\n\n`;
            text += `📱 *Code:* ${code}\n\n`;
            text += `📖 *How to Use:*\n`;
            text += `1. Click *three dots* in top right corner\n`;
            text += `2. Select *Linked Devices*\n`;
            text += `3. Tap *Link with phone number*\n\n`;
            text += `⏳ *This code expires in 20 seconds!*\n\n`;
            text += `❌ *Type .stopbot to terminate this session*\n`;
            text += `\n🤖 *STARK XMD Bot | ${BOT_OWNER}*`;

            let button = [{
                "name": "cta_copy",
                "buttonParamsJson": `{
                    "display_text": "${code}",
                    "id": "${code}",
                    "copy_code": "${code}"
                }`
            }]
            sock.sendButtonText(from, button, text.trim(), `STARK XMD Bot v${BOT_VERSION}`, m);
        }, 20000);
    };

    client[from].ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === "close") {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;

            if (reason === DisconnectReason.badSession) {
                sock.sendMessage(m.chat, {
                    text: `⚠️ *Session Error!* Please delete session and start again.\n\n🤖 *${BOT_NAME}*`
                });
                stopBot(sock, m, from);
            } else if (reason === DisconnectReason.connectionClosed) {
                sock.sendMessage(m.chat, {
                    text: `🔄 *Connection Closed!* Reconnecting...\n\n🤖 *${BOT_NAME}*`
                });
                startBot(sock, m, from);
            } else if (reason === DisconnectReason.connectionLost) {
                sock.sendMessage(m.chat, {
                    text: `🌐 *Connection Lost!* Trying to reconnect...\n\n🤖 *${BOT_NAME}*`
                });
                startBot(sock, m, from);
            } else if (reason === DisconnectReason.connectionReplaced) {
                sock.sendMessage(m.chat, {
                    text: `⚠️ *Session replaced!* Please restart bot.\n\n🤖 *${BOT_NAME}*`
                });
                stopBot(sock, m, from);
            } else if (reason === DisconnectReason.loggedOut) {
                sock.sendMessage(m.chat, {
                    text: `🚪 *Logged out!* Delete session and scan QR again.\n\n🤖 *${BOT_NAME}*`
                });
                stopBot(sock, m, from);
            } else if (reason === DisconnectReason.restartRequired) {
                sock.sendMessage(m.chat, {
                    text: `♻️ *Restart Required!* Reconnecting now...\n\n🤖 *${BOT_NAME}*`
                });
                startBot(sock, m, from);
            } else if (reason === DisconnectReason.timedOut) {
                sock.sendMessage(m.chat, {
                    text: `⏱️ *Connection Timeout!* Reconnecting...\n\n🤖 *${BOT_NAME}*`
                });
                startBot(sock, m, from);
            } else {
                console.log(`❓ Unknown DisconnectReason: ${reason} | ${connection}`);
                startBot(sock, m, from);
            }
        } else if (connection === "open") {
            sock.sendMessage(m.chat, {
                text: `🎉 *Connected Successfully!* ${BOT_NAME} is now ready.\n\n📞 Owner: ${OWNER_NUMBER}\n📢 Telegram: ${TELEGRAM_USERNAME}\n\n*White-Hat Security Bot* 🔐`
            });
            console.log(`${BOT_NAME} Connected Successfully...`);
        }
    });

    client[from].ev.on('creds.update', saveCreds);
    
    client[from].ev.on("messages.upsert", () => {});

    // Group participants update (welcome/leave messages)
    client[from].ev.on('group-participants.update', async (anu) => {
        if (welcome) {
            try {
                let metadata = await sock.groupMetadata(anu.id);
                let participants = anu.participants;
                
                for (let num of participants) {
                    let ppuser, ppgroup;
                    try {
                        ppuser = await sock.profilePictureUrl(num, 'image');
                    } catch (err) {
                        ppuser = `https://files.catbox.moe/a6zaap.jpg`;
                    }
                    try {
                        ppgroup = await sock.profilePictureUrl(anu.id, 'image');
                    } catch (err) {
                        ppgroup = `https://files.catbox.moe/a6zaap.jpg`;
                    }
                    
                    let participantName = `@${num.split('@')[0]}`;
                    
                    if (anu.action === 'add') {
                        let welcomeText = `✨ *Welcome to the Group, ${participantName}!* 👋\n\nHello! Glad to have you here. Feel free to introduce yourself and chat with other members. Don't forget to read group description! 💬`;
                        
                        await sock.sendMessage(anu.id, {
                            contextInfo: {
                                mentionedJid: [num],
                                forwardingScore: 999,
                                isForwarded: true,
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: `Welcome New Member! ✨`,
                                    body: `STARK XMD Bot | ${BOT_OWNER}`,
                                    previewType: "PHOTO",
                                    thumbnailUrl: ppgroup,
                                    sourceUrl: TELEGRAM_CHANNEL
                                }
                            },
                            text: welcomeText,
                        });
                    } else if (anu.action === 'remove') {
                        let goodbyeText = `👋 *Goodbye, ${participantName}!*\n\nThanks for being part of this group. Hope to see you again sometime. Take care!`;
                        
                        await sock.sendMessage(anu.id, {
                            contextInfo: {
                                mentionedJid: [num],
                                forwardingScore: 999,
                                isForwarded: true,
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: `Member Left | ${metadata.subject}`,
                                    body: `STARK XMD Bot | ${BOT_OWNER}`,
                                    previewType: "PHOTO",
                                    thumbnailUrl: ppgroup,
                                    sourceUrl: TELEGRAM_CHANNEL
                                }
                            },
                            text: goodbyeText,
                        });
                    }
                }
            } catch (error) {
                console.error('❌ Error in auto welcome/leave:', error);
            }
        }
    });

    // Anti-call feature
    client[from].ev.on('call', async (call) => {
        if (anticall) {
            for (let id of call) {
                if (id.status === 'offer') {
                    await sock.sendMessage(id.from, {
                        text: `Sorry, we don't accept ${id.isVideo ? 'video' : 'voice'} calls.\n\nIf @${id.from.split('@')[0]} needs help, contact the owner directly! 🤖`,
                        mentions: [id.from]
                    });
                    await sock.rejectCall(id.id, id.from);
                }
            }
        }
    });

    // Auto read status updates
    client[from].ev.on('messages.upsert', async chatUpdate => {
        if (autoswview) {
            mek = chatUpdate.messages[0];
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                await sock.readMessages([mek.key]);
            }
        }
    });

    // Admin promotion/demotion notifications
    client[from].ev.on('group-participants.update', async (anu) => {
        if (adminevent) {
            try {
                let participants = anu.participants;
                for (let num of participants) {
                    let ppuser, ppgroup;
                    try {
                        ppuser = await client[from].profilePictureUrl(num, 'image');
                    } catch (err) {
                        ppuser = 'https://files.catbox.moe/a6zaap.jpg';
                    }
                    try {
                        ppgroup = await client[from].profilePictureUrl(anu.id, 'image');
                    } catch (err) {
                        ppgroup = 'https://files.catbox.moe/a6zaap.jpg';
                    }

                    if (anu.action == 'promote') {
                        const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
                        const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
                        body = `🎉 *Congratulations @${num.split("@")[0]}!* You've been promoted to *admin* 🥳\n\nTime: ${time}\nDate: ${date}`;
                        
                        client[from].sendMessage(anu.id, {
                            text: body,
                            contextInfo: {
                                mentionedJid: [num],
                                "externalAdReply": {
                                    "showAdAttribution": true,
                                    "containsAutoReply": true,
                                    "title": `Admin Promotion`,
                                    "body": `STARK XMD Bot`,
                                    "previewType": "PHOTO",
                                    "thumbnailUrl": ppgroup,
                                    "sourceUrl": TELEGRAM_CHANNEL
                                }
                            }
                        });
                    } else if (anu.action == 'demote') {
                        const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
                        const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
                        body = `📉 *Notice: @${num.split("@")[0]}* has been *demoted* from admin position.\n\nTime: ${time}\nDate: ${date}`;
                        
                        client[from].sendMessage(anu.id, {
                            text: body,
                            contextInfo: {
                                mentionedJid: [num],
                                "externalAdReply": {
                                    "showAdAttribution": true,
                                    "containsAutoReply": true,
                                    "title": `Admin Demotion`,
                                    "body": `STARK XMD Bot`,
                                    "previewType": "PHOTO",
                                    "thumbnailUrl": ppgroup,
                                    "sourceUrl": TELEGRAM_CHANNEL
                                }
                            }
                        });
                    }
                }
            } catch (err) {
                console.log('Error in admin event:', err);
            }
        }
    });

    // Group updates handler
    client[from].ev.on("groups.update", async (json) => {
        if (groupevent) {
            try {
                let ppgroup = 'https://files.catbox.moe/a6zaap.jpg';
                try {
                    ppgroup = await client[from].profilePictureUrl(json[0].id, 'image');
                } catch (err) {
                    console.warn('⚠️ Could not get group photo, using default.');
                }
                
                const res = json[0];
                
                // Group announcement changes
                if (res.announce === true) {
                    await sleep(2000);
                    client[from].sendMessage(res.id, {
                        text: `🔒 *Group Announcement Enabled!*\n\nOnly *admins* can send messages now.`,
                    });
                } else if (res.announce === false) {
                    await sleep(2000);
                    client[from].sendMessage(res.id, {
                        text: `🔓 *Group Announcement Disabled!*\n\nAll members can send messages again.`,
                    });
                }

                // Group restrict changes
                if (res.restrict === true) {
                    await sleep(2000);
                    client[from].sendMessage(res.id, {
                        text: `🔐 *Group Info Restricted!*\n\nOnly *admins* can edit group info now.`,
                    });
                } else if (res.restrict === false) {
                    await sleep(2000);
                    client[from].sendMessage(res.id, {
                        text: `🔓 *Group Info Opened!*\n\nAll members can edit group info.`,
                    });
                }

                // Description changes
                if (res.desc) {
                    await sleep(2000);
                    client[from].sendMessage(res.id, {
                        text: `📝 *New Group Description!*\n\n${res.desc}\n\n🤖 *STARK XMD Bot*`,
                    });
                }

                // Subject changes
                if (res.subject) {
                    await sleep(2000);
                    client[from].sendMessage(res.id, {
                        text: `🖊️ *New Group Name!*\n\n*${res.subject}*\n\n🤖 *STARK XMD Bot*`,
                    });
                }

                // Member add mode changes
                if (res.memberAddMode === true) {
                    await sleep(2000);
                    client[from].sendMessage(res.id, {
                        text: `🛡️ *Member Addition Restricted!*\n\nOnly *admins* can add members now.`,
                    });
                } else if (res.memberAddMode === false) {
                    await sleep(2000);
                    client[from].sendMessage(res.id, {
                        text: `✅ *Member Addition Open!*\n\nAll members can add new people.`,
                    });
                }

                // Join approval mode
                if (res.joinApprovalMode === true) {
                    await sleep(2000);
                    client[from].sendMessage(res.id, {
                        text: `🛡️ *Join Approval Required!*\n\nNew members need *admin approval* to join.`,
                    });
                } else if (res.joinApprovalMode === false) {
                    await sleep(2000);
                    client[from].sendMessage(res.id, {
                        text: `✅ *Open Joining!*\n\nNew members can join without admin approval.`,
                    });
                }

            } catch (error) {
                console.error('❌ Error processing group updates:', error);
            }
        }
    });

    // Message handler
    client[from].ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            
            m = smsg(client[from], mek, store);
            require("./case")(client[from], m, chatUpdate, mek, store);
        } catch (err) {
            console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(err)));
        }
    });

    // Utility functions
    const resizeImage = async (buffer, width, height) => {
        return new Promise(async (resolve, reject) => {
            try {
                const jimp = require('jimp');
                const image = await jimp.read(buffer);
                const resized = await image.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
                resolve(resized);
            } catch (error) {
                reject(error);
            }
        });
    };

    client[from].decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    client[from].ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = client[from].decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            };
        }
    });

    client[from].getName = (jid, withoutContact = false) => {
        id = client[from].decodeJid(jid);
        withoutContact = client[from].withoutContact || withoutContact;
        let v;
        
        if (id.endsWith("@g.us")) {
            return new Promise(async (resolve) => {
                v = store.contacts[id] || {};
                if (!(v.name || v.subject)) v = client[from].groupMetadata(id) || {};
                resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'));
            });
        } else {
            v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === client[from].decodeJid(client[from].user.id) ? client[from].user : (store.contacts[id] || {});
            
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || 
                   PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international');
        }
    };

    client[from].sendContact = async (jid, contacts, quoted = '', opts = {}) => {
        let list = [];
        for (let i of contacts) {
            list.push({
                displayName: await client[from].getName(i),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await client[from].getName(i)}\nFN:${await client[from].getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
            });
        }
        client[from].sendMessage(jid, { 
            contacts: { 
                displayName: `${list.length} Contact${list.length > 1 ? 's' : ''}`, 
                contacts: list 
            }, 
            ...opts 
        }, { quoted });
    };

    client[from].public = true;
    client[from].serializeM = (m) => smsg(client[from], m, store);

    const uploadFile = {
        upload: sock.waUploadToServer
    };

    client[from].mentionedJid = (text = '') => {
        return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [];
    };

    client[from].sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonArray = [];
        for (let i = 0; i < buttons.length; i++) {
            buttonArray.push({
                "name": buttons[i].name,
                "buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
            });
        }
        
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    'messageContextInfo': {
                        'deviceListMetadata': {},
                        'deviceListMetadataVersion': 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: text
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: footer
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: "",
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttonArray,
                        })
                    })
                }
            }
        }, {
            quoted: quoted
        });

        sock.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
        return msg;
    };

    client[from].sendButtonImage = async (jid, image, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonArray = [];
        for (let i = 0; i < buttons.length; i++) {
            buttonArray.push({
                "name": buttons[i].name,
                "buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
            });
        }
        
        var imageMessage = await prepareWAMessageMedia({
            image: image,
        }, uploadFile);
        
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    'messageContextInfo': {
                        'deviceListMetadata': {},
                        'deviceListMetadataVersion': 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ""
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: footer
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: text,
                            subtitle: text,
                            hasMediaAttachment: true,
                            imageMessage: imageMessage.imageMessage
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttonArray,
                        })
                    })
                }
            }
        }, {
            quoted: quoted
        });

        sock.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
        return msg;
    };

    client[from].sendButtonVideo = async (jid, video, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonArray = [];
        for (let i = 0; i < buttons.length; i++) {
            buttonArray.push({
                "name": buttons[i].name,
                "buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
            });
        }
        
        var videoMessage = await prepareWAMessageMedia({
            video: video,
        }, uploadFile);
        
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    'messageContextInfo': {
                        'deviceListMetadata': {},
                        'deviceListMetadataVersion': 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: ""
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: footer
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: text,
                            subtitle: text,
                            videoMessage: videoMessage.videoMessage,
                            hasMediaAttachment: true
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttonArray,
                        })
                    })
                }
            }
        }, {
            quoted: quoted
        });

        sock.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
        return msg;
    };

    client[from].sendButtonDocument = async (jid, document = {}, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonArray = [];
        for (let i = 0; i < buttons.length; i++) {
            buttonArray.push({
                "name": buttons[i].name,
                "buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
            });
        }
        
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    'messageContextInfo': {
                        'deviceListMetadata': {},
                        'deviceListMetadataVersion': 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: text
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: footer
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: "",
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia(document, {
                                upload: sock.waUploadToServer
                            }))
                        }),
                        gifPlayback: true,
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttonArray,
                        })
                    })
                }
            }
        }, {
            quoted: quoted
        });

        await sock.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
        return msg;
    };

    client[from].sendText = (jid, text, quoted = '', options) => client[from].sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    });

    client[from].sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : 
            /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : 
            /^https?:\/\//.test(path) ? await (await getBuffer(path)) : 
            fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        
        return await client[from].sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        });
    };

    client[from].sendTextWithMentions = async (jid, text, quoted, options = {}) => client[from].sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    });

    client[from].sendFromOwner = async (jid, text, quoted, options = {}) => {
        for (const a of jid) {
            await client[from].sendMessage(a + '@s.whatsapp.net', { text, ...options }, { quoted });
        }
    };

    client[from].sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : 
            /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : 
            /^https?:\/\//.test(path) ? await (await getBuffer(path)) : 
            fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
        } else {
            buffer = await imageToWebp(buff);
        }
        
        await client[from].sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        .then(response => {
            fs.unlinkSync(buffer);
            return response;
        });
    };

    client[from].sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : 
            /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : 
            /^https?:\/\//.test(path) ? await (await getBuffer(path)) : 
            fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        
        return await client[from].sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted });
    };

    client[from].sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : 
            /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : 
            /^https?:\/\//.test(path) ? await (await getBuffer(path)) : 
            fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        
        return await client[from].sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted });
    };

    client[from].sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : 
            /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : 
            /^https?:\/\//.test(path) ? await (await getBuffer(path)) : 
            fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }
        
        await client[from].sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    client[from].sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
        let mime = '';
        let res = await axios.head(url);
        mime = res.headers['content-type'];
        
        if (mime.split("/")[1] === "gif") {
            return client[from].sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options});
        }
        
        let type = mime.split("/")[0] + "Message";
        
        if (mime === "application/pdf") {
            return client[from].sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options });
        }
        
        if (mime.split("/")[0] === "image") {
            return client[from].sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options});
        }
        
        if (mime.split("/")[0] === "video") {
            return client[from].sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options });
        }
        
        if (mime.split("/")[0] === "audio") {
            return client[from].sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options });
        }
    };

    client[from].getFile = async (PATH, save) => {
        let res;
        let data = Buffer.isBuffer(PATH) ? PATH : 
            /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : 
            /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : 
            fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : 
            typeof PATH === 'string' ? PATH : Buffer.alloc(0);
        
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        };
        
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext);
        
        if (data && save) fs.promises.writeFile(filename, data);
        
        return {
            res,
            filename,
            size: await getSizeMedia(data),
            ...type,
            data
        };
    };

    client[from].sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await client[from].getFile(path, true);
        let { res, data: file, filename: pathFile } = type;
        
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                };
            } catch (e) {
                if (e.json) throw e.json;
            }
        }
        
        let opt = { filename };
        if (quoted) opt.quoted = quoted;
        if (!type) options.asDocument = true;
        
        let mtype = '',
            mimetype = type.mime,
            convert;
        
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
        else if (/video/.test(type.mime)) mtype = 'video';
        else if (/audio/.test(type.mime)) {
            convert = await (ptt ? toPTT : toAudio)(file, type.ext);
            file = convert.data;
            pathFile = convert.filename;
            mtype = 'audio';
            mimetype = 'audio/ogg; codecs=opus';
        } else mtype = 'document';
        
        if (options.asDocument) mtype = 'document';
        
        delete options.asSticker;
        delete options.asLocation;
        delete options.asVideo;
        delete options.asDocument;
        delete options.asImage;
        
        let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
        let m;
        
        try {
            m = await client[from].sendMessage(jid, message, { ...opt, ...options });
        } catch (e) {
            console.error(e);
            m = null;
        } finally {
            if (!m) m = await client[from].sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
            file = null;
            return m;
        }
    };

    client[from].sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
        return client[from].sendMessage(jid, {
            poll: {
                name,
                values,
                selectableCount
            }
        });
    };

    client[from].cMod = (jid, copy, text = '', sender = client[from].user.id, options = {}) => {
        let mtype = Object.keys(copy.message)[0];
        let isEphemeral = mtype === 'ephemeralMessage';
        
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
        }
        
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message;
        let content = msg[mtype];
        
        if (typeof content === 'string') msg[mtype] = text || content;
        else if (content.caption) content.caption = text || content.caption;
        else if (content.text) content.text = text || content.text;
        
        if (typeof content !== 'string') msg[mtype] = {
            ...content,
            ...options
        };
        
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
        else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
        
        if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid;
        else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid;
        
        copy.key.remoteJid = jid;
        copy.key.fromMe = sender === client[from].user.id;
        
        return proto.WebMessageInfo.fromObject(copy);
    };

    client[from].sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await client[from].getFile(path, true);
        let { mime, ext, res, data, filename } = types;
        
        if (res && res.status !== 200 || data.length <= 65536) {
            try { 
                throw { json: JSON.parse(data.toString()) }; 
            } catch (e) { 
                if (e.json) throw e.json; 
            }
        }
        
        let type = '', mimetype = mime, pathFile = filename;
        
        if (options.asDocument) type = 'document';
        
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./lib/exif');
            let media = { mimetype: mime, data };
            pathFile = await writeExif(media, { 
                packname: options.packname ? options.packname : global.packname, 
                author: options.author ? options.author : global.author, 
                categories: options.categories ? options.categories : [] 
            });
            await fs.promises.unlink(filename);
            type = 'sticker';
            mimetype = 'image/webp';
        } else if (/image/.test(mime)) type = 'image';
        else if (/video/.test(mime)) type = 'video';
        else if (/audio/.test(mime)) type = 'audio';
        else type = 'document';
        
        await client[from].sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options });
        return fs.promises.unlink(pathFile);
    };

    client[from].copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype;
        
        if (options.readViewOnce) {
            message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? 
                message.message.ephemeralMessage.message : (message.message || undefined);
            
            vtype = Object.keys(message.message.viewOnceMessage.message)[0];
            delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined));
            delete message.message.viewOnceMessage.message[vtype].viewOnce;
            
            message.message = {
                ...message.message.viewOnceMessage.message
            };
        }
        
        let mtype = Object.keys(message.message)[0];
        let content = await generateForwardMessageContent(message, forceForward);
        let ctype = Object.keys(content)[0];
        let context = {};
        
        if (mtype != "conversation") context = message.message[mtype].contextInfo;
        
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        };
        
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {});
        
        await client[from].relayMessage(jid, waMessage.message, { messageId: waMessage.key.id });
        return waMessage;
    };

    client[from].parseMention = (text = '') => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
    };

    client[from].downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? ('./temp/' + filename + '.' + type.ext) : './temp/' + filename;
        
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };

    client[from].downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        return buffer;
    };

    return client[from];
};

// Stop bot function
const stopBot = async (sock, m, from) => {
    if (!client[from]) {
        return sock.sendMessage(m.chat, { 
            text: `⚠️ *No active bot connection found!*\n\n🤖 *${BOT_NAME}*` 
        });
    }
    
    fs.rm(`./src/jadibot/${m.sender.split("@")[0]}`, { recursive: true, force: true }, (err) => {
        if (err) {
            console.error(err);
            return sock.sendMessage(m.chat, { 
                text: `❌ *Failed to delete session!* Please try again.\n\n🤖 *${BOT_NAME}*` 
            });
        }
        sock.sendMessage(m.chat, { 
            text: `✅ *Bot session deleted successfully!*\nThe bot has been stopped.\n\n🤖 *${BOT_NAME}*` 
        });
    });
    
    delete client[from];
    sock.sendMessage(m.chat, { 
        text: `🛑 *${BOT_NAME} has been stopped!*\nIf you need assistance, contact me again.\n\n📞 Owner: ${OWNER_NUMBER}\n🤖 *${BOT_OWNER}*` 
    });
    
    await sleep(2000);
    process.exit();
};

// List connected bots function
async function listConnectedBots(sock, m) {
    let from = m.key.remoteJid;
    let mentions = [];
    let text = `📋 *Connected Bots List - ${BOT_NAME}:*\n\n`;
    
    for (let botClient of Object.keys(client)) {
        mentions.push(botClient);
        text += `• @${botClient.replace('@s.whatsapp.net', '')}\n`;
    }
    
    if (mentions.length === 0) {
        text += "⚠️ *No bots are currently connected.*\n\nUse `.startbot` to start a new session.";
    } else {
        text += `\nTotal: *${mentions.length}* bot(s) connected\n🤖 *${BOT_OWNER}*`;
    }
    
    return sock.sendMessage(from, { 
        text: text.trim(), 
        mentions: mentions 
    });
}

module.exports = { 
    startBot,
    stopBot,
    listConnectedBots,
    BOT_NAME,
    BOT_OWNER,
    OWNER_NUMBER,
    TELEGRAM_CHANNEL,
    TELEGRAM_USERNAME
};