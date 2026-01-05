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
const os = require('os');
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

global.db = new Low(new JSONFile(`src/${global.tempatDB}`));

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
            rpg: {},
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

const usePairingCode = true;
const session = `./${global.sessionName}`;

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve)
    });
};

async function startSTARKXMD() {
    console.log(`
    ╔══════════════════════════════════════════╗
    ║           STARK XMD BOT v1.0             ║
    ║           Developed by:                  ║
    ║           DARKNESS FREENET SQUAD         ║
    ║           Owner: 27634988678             ║
    ║           Telegram: @cyberwarriorrsa     ║
    ╚══════════════════════════════════════════╝
    `);

    const { state, saveCreds } = await useMultiFileAuthState(session);
    const sock = makeWASocket({
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

    if (!sock.authState.creds.registered) {
        const phoneNumber = await question('\n\n\nEnter your phone number, example correct number input: 27634988678\n');
        const code = await sock.requestPairingCode(phoneNumber.trim());
        console.log(chalk.white.bold(`📱 Your WhatsApp Bot Pairing Code:`), chalk.red.bold(`${code}`));
    }

    sock.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === "close") {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;

            if (reason === DisconnectReason.badSession) {
                console.log("❌ Session error! Delete session and try again.");
                process.exit();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log("🔌 Connection closed... Trying to reconnect!");
                startSTARKXMD();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("📡 Connection to server lost! Trying to reconnect.");
                startSTARKXMD();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log("🔄 Session seems to be used elsewhere... Please restart the bot!");
                process.exit();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log("🚪 Device logged out... Delete session folder and scan QR again!");
                process.exit();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("🔄 Restarting connection...");
                startSTARKXMD();
            } else if (reason === DisconnectReason.timedOut) {
                console.log("⏳ Connection timeout! Trying to reconnect.");
                startSTARKXMD();
            } else {
                console.log(`❓ Unknown disconnect reason... (${reason} | ${connection}) Trying to reconnect!`);
                startSTARKXMD();
            }
        } else if (connection === "open") {
            console.log(chalk.white.bold('\n🎉 Successfully connected to number:'), chalk.yellow(JSON.stringify(sock.user, null, 2)));
            console.log('✅ Everything is ready! Enjoy your bot! 🥳🎈');
            
            // Auto-follow newsletter channels
            if (global.autoJoinNewsletter && global.saluran) {
                try {
                    await sleep(3000);
                    const newsletterData = await sock.newsletterMetadata("invite", global.saluran);
                    await sleep(3000);
                    await sock.newsletterFollow(newsletterData.id);
                    console.log('✅ Auto-followed newsletter channel');
                } catch (err) {
                    console.log('⚠️ Could not auto-follow newsletter channel:', err.message);
                }
            }
        }
    });

    sock.ev.on('creds.update', saveCreds);
    sock.ev.on("messages.upsert", () => {});

    function clearTmpFolder() {
        const tmpFolder = path.join(__dirname, "temp");
        fs.readdir(tmpFolder, (err, files) => {
            if (err) {
                console.error(chalk.red("Failed to read 'temp' folder:"), err);
                return;
            }
            if (files.length === 0) {
                return;
            }
            files.forEach(file => {
                const filePath = path.join(tmpFolder, file);
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        console.error(chalk.red("Failed to read file:"), filePath, err);
                        return;
                    }
                    if (stats.isFile()) {
                        fs.unlink(filePath, err => {
                            if (err) {
                                console.error(chalk.red("Failed to delete file:"), filePath, err);
                            }
                        });
                    } else if (stats.isDirectory()) {
                        fs.rmdir(filePath, { recursive: true }, err => {
                            if (err) {
                                console.error(chalk.red("Failed to delete folder:"), filePath, err);
                            }
                        });
                    }
                });
            });
        });
    }

    setInterval(clearTmpFolder, 60000);

    sock.ev.on('group-participants.update', async (anu) => {
        if (global.welcome) {
            try {
                let metadata = await sock.groupMetadata(anu.id);
                let participants = anu.participants;
                for (let num of participants) {
                    let ppuser, ppgroup;
                    try {
                        ppuser = await sock.profilePictureUrl(num, 'image');
                    } catch (err) {
                        ppuser = `https://example.com/default-avatar.jpg`;
                    }
                    try {
                        ppgroup = await sock.profilePictureUrl(anu.id, 'image');
                    } catch (err) {
                        ppgroup = `https://example.com/default-group.jpg`;
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
                                    body: `STARK XMD Bot | ${global.ownerName}`,
                                    previewType: "PHOTO",
                                    thumbnailUrl: ppgroup,
                                    sourceUrl: global.wagc
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
                                    body: `STARK XMD Bot | ${global.ownerName}`,
                                    previewType: "PHOTO",
                                    thumbnailUrl: ppgroup,
                                    sourceUrl: global.wagc
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

    sock.ev.on('call', async (call) => {
        if (global.anticall) {
            for (let id of call) {
                if (id.status === 'offer') {
                    await sock.sendMessage(id.from, {
                        text: `Sorry, we don't accept ${id.isVideo ? 'video' : 'voice'} calls.\n\nIf @${id.from.split('@')[0]} needs help, contact the owner directly!`,
                        mentions: [id.from]
                    });
                    await sock.rejectCall(id.id, id.from);
                }
            }
        }
    });

    sock.ev.on('messages.upsert', async chatUpdate => {
        if (global.autoswview) {
            mek = chatUpdate.messages[0];
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                await sock.readMessages([mek.key]);
            }
        }
    });

    sock.ev.on('group-participants.update', async (anu) => {
        if (global.adminevent) {
            console.log(anu);
            try {
                let participants = anu.participants;
                for (let num of participants) {
                    let ppuser, ppgroup;
                    try {
                        ppuser = await sock.profilePictureUrl(num, 'image');
                    } catch (err) {
                        ppuser = 'https://example.com/default-avatar.jpg';
                    }
                    try {
                        ppgroup = await sock.profilePictureUrl(anu.id, 'image');
                    } catch (err) {
                        ppgroup = 'https://example.com/default-group.jpg';
                    }

                    if (anu.action == 'promote') {
                        const time = moment.tz('Africa/Johannesburg').format('HH:mm:ss');
                        const date = moment.tz('Africa/Johannesburg').format('DD/MM/YYYY');
                        body = `🎉 *Congratulations @${num.split("@")[0]}!* You've been promoted to *admin* 🥳\n\nTime: ${time}\nDate: ${date}`;
                        sock.sendMessage(anu.id, {
                            text: body,
                            contextInfo: {
                                mentionedJid: [num],
                                "externalAdReply": {
                                    "showAdAttribution": true,
                                    "containsAutoReply": true,
                                    "title": global.botName,
                                    "body": global.ownerName,
                                    "previewType": "PHOTO",
                                    "thumbnailUrl": ppgroup,
                                    "sourceUrl": global.wagc
                                }
                            }
                        });
                    } else if (anu.action == 'demote') {
                        const time = moment.tz('Africa/Johannesburg').format('HH:mm:ss');
                        const date = moment.tz('Africa/Johannesburg').format('DD/MM/YYYY');
                        body = `📉 *Notice: @${num.split("@")[0]}* has been *demoted* from admin position.\n\nTime: ${time}\nDate: ${date}`;
                        sock.sendMessage(anu.id, {
                            text: body,
                            contextInfo: {
                                mentionedJid: [num],
                                "externalAdReply": {
                                    "showAdAttribution": true,
                                    "containsAutoReply": true,
                                    "title": global.botName,
                                    "body": global.ownerName,
                                    "previewType": "PHOTO",
                                    "thumbnailUrl": ppgroup,
                                    "sourceUrl": global.wagc
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

    sock.ev.on("groups.update", async (json) => {
        if (global.groupevent) {
            try {
                let ppgroup = 'https://example.com/default-group.jpg';
                try {
                    ppgroup = await sock.profilePictureUrl(json[0].id, 'image');
                } catch (err) {
                    console.warn('⚠️ Could not get group photo, using default.');
                }
                const res = json[0];
                if (res.announce === true) {
                    await sleep(2000);
                    sock.sendMessage(res.id, {
                        text: `🔒 *Group Announcement Enabled!*\n\nOnly *admins* can send messages now.`,
                    });
                } else if (res.announce === false) {
                    await sleep(2000);
                    sock.sendMessage(res.id, {
                        text: `🔓 *Group Announcement Disabled!*\n\nAll members can send messages again.`,
                    });
                }

                if (res.restrict === true) {
                    await sleep(2000);
                    sock.sendMessage(res.id, {
                        text: `🔐 *Group Info Restricted!*\n\nOnly *admins* can edit group info now.`,
                    });
                } else if (res.restrict === false) {
                    await sleep(2000);
                    sock.sendMessage(res.id, {
                        text: `🔓 *Group Info Opened!*\n\nAll members can edit group info.`,
                    });
                }

                if (res.desc) {
                    await sleep(2000);
                    sock.sendMessage(res.id, {
                        text: `📝 *New Group Description!*\n\n${res.desc}\n\n🤖 *STARK XMD Bot*`,
                    });
                }

                if (res.subject) {
                    await sleep(2000);
                    sock.sendMessage(res.id, {
                        text: `🖊️ *New Group Name!*\n\n*${res.subject}*\n\n🤖 *STARK XMD Bot*`,
                    });
                }

                if (res.memberAddMode === true) {
                    await sleep(2000);
                    sock.sendMessage(res.id, {
                        text: `🛡️ *Member Addition Restricted!*\n\nOnly *admins* can add members now.`,
                    });
                } else if (res.memberAddMode === false) {
                    await sleep(2000);
                    sock.sendMessage(res.id, {
                        text: `✅ *Member Addition Open!*\n\nAll members can add new people.`,
                    });
                }

                if (res.joinApprovalMode === true) {
                    await sleep(2000);
                    sock.sendMessage(res.id, {
                        text: `🛡️ *Join Approval Required!*\n\nNew members need *admin approval* to join.`,
                    });
                } else if (res.joinApprovalMode === false) {
                    await sleep(2000);
                    sock.sendMessage(res.id, {
                        text: `✅ *Open Joining!*\n\nNew members can join without admin approval.`,
                    });
                }

            } catch (error) {
                console.error('❌ Error processing group updates:', error);
            }
        }
    });

    sock.ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            m = smsg(sock, mek, store);
            require("./case")(sock, m, chatUpdate, mek, store);
        } catch (err) {
            console.log(chalk.yellow.bold("[ ERROR ] case.js :\n") + chalk.redBright(util.format(err)));
        }
    });

    sock.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    sock.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = sock.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            };
        }
    });

    sock.getName = (jid, withoutContact = false) => {
        id = sock.decodeJid(jid);
        withoutContact = sock.withoutContact || withoutContact;
        let v;
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {};
            if (!(v.name || v.subject)) v = sock.groupMetadata(id) || {};
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'));
        });
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === sock.decodeJid(sock.user.id) ? sock.user : (store.contacts[id] || {});
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international');
    };

    sock.sendContact = async (jid, contacts, quoted = '', opts = {}) => {
        let list = [];
        for (let i of contacts) {
            list.push({
                displayName: await sock.getName(i),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await sock.getName(i)}\nFN:${await sock.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
            });
        }
        sock.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted });
    };

    sock.public = true;

    sock.serializeM = (m) => smsg(sock, m, store);

    const uploadFile = {
        upload: sock.waUploadToServer
    };

    sock.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let button = [];
        for (let i = 0; i < buttons.length; i++) {
            button.push({
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
                        mentionedJid: parseMention(text),
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
                            buttons: button,
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

    sock.sendButtonImage = async (jid, image, buttons = [], text, footer, quoted = '', options = {}) => {
        let button = [];
        for (let i = 0; i < buttons.length; i++) {
            button.push({
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
                            buttons: button,
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

    sock.sendButtonVideo = async (jid, video, buttons = [], text, footer, quoted = '', options = {}) => {
        let button = [];
        for (let i = 0; i < buttons.length; i++) {
            button.push({
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
                            buttons: button,
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

    sock.sendButtonDocument = async (jid, document = {}, buttons = [], text, footer, quoted = '', options = {}) => {
        let button = [];
        for (let i = 0; i < buttons.length; i++) {
            button.push({
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
                            buttons: button,
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

    sock.sendText = (jid, text, quoted = '', options) => sock.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    });

    sock.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        return await sock.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        });
    };

    sock.sendTextWithMentions = async (jid, text, quoted, options = {}) => sock.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    });

    sock.sendFromOwner = async (jid, text, quoted, options = {}) => {
        for (const a of jid) {
            await sock.sendMessage(a + '@s.whatsapp.net', { text, ...options }, { quoted });
        }
    };

    sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
        } else {
            buffer = await imageToWebp(buff);
        }
        await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
            .then(response => {
                fs.unlinkSync(buffer);
                return response;
            });
    };

    sock.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        return await sock.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted });
    };

    sock.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        return await sock.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted });
    };

    sock.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }
        await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    sock.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
        let mime = '';
        let res = await axios.head(url);
        mime = res.headers['content-type'];
        if (mime.split("/")[1] === "gif") {
            return sock.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options });
        }
        let type = mime.split("/")[0] + "Message";
        if (mime === "application/pdf") {
            return sock.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options });
        }
        if (mime.split("/")[0] === "image") {
            return sock.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options });
        }
        if (mime.split("/")[0] === "video") {
            return sock.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options });
        }
        if (mime.split("/")[0] === "audio") {
            return sock.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options });
        }
    };

    sock.getFile = async (PATH, save) => {
        let res;
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0);
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        };
        filename = path.join(__dirname, '../temp/' + new Date * 1 + '.' + type.ext);
        if (data && save) fs.promises.writeFile(filename, data);
        return {
            res,
            filename,
            size: await getSizeMedia(data),
            ...type,
            data
        };
    };

    sock.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await sock.getFile(path, true);
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
        let opt = {
            filename
        };
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
            m = await sock.sendMessage(jid, message, { ...opt, ...options });
        } catch (e) {
            console.error(e);
            m = null;
        } finally {
            if (!m) m = await sock.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
            file = null;
            return m;
        }
    };

    sock.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
        return sock.sendMessage(jid, {
            poll: {
                name,
                values,
                selectableCount
            }
        });
    };

    sock.cMod = (jid, copy, text = '', sender = sock.user.id, options = {}) => {
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
        copy.key.fromMe = sender === sock.user.id;
        return proto.WebMessageInfo.fromObject(copy);
    };

    sock.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await sock.getFile(path, true);
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
        await sock.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options });
        return fs.promises.unlink(pathFile);
    };

    sock.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype;
        if (options.readViewOnce) {
            message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined);
            vtype = Object.keys(message.message.viewOnceMessage.message)[0];
            delete (message.message && message.message.ignore ? message.message.ignore : (message.message || undefined));
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
        await sock.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id });
        return waMessage;
    };

    sock.parseMention = (text = '') => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
    };

    sock.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? ('./temp/' + filename + '.' + type.ext) : './temp/' + filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };

    sock.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        return buffer;
    };

    return sock;
};

startSTARKXMD();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Updated ${__filename}`));
    delete require.cache[file];
    require(file);
});