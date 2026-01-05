const fs = require('fs');
const chalk = require('chalk');

// Bot Configuration
global.botName = 'STARK XMD'; // Your Bot Name
global.ownerNumber = '27634988678'; // Your Number
global.ownerName = 'DARKNESS FREENET SQUAD'; // Your Name/Group
global.website = 'https://t.me/+c7x2pinDo99mMzA0'; // Your Website/Channel
global.wagc = 'https://t.me/+c7x2pinDo99mMzA0'; // Your WhatsApp Group/Channel

// Branding
global.packname = global.botName; // Pack Name
global.author = global.ownerName; // Author Name
global.footer = '© STARK XMD | DARKNESS FREENET SQUAD';
global.creator = '27634988678@s.whatsapp.net'; // Creator Number
global.premium = ['27634988678']; // Premium Users
global.prefa = '/'; // Command Prefix
global.tempatDB = 'database.json'; // Database Location

// Channel Configuration
global.saluran = '120363388565127379@newsletter'; // Your Channel ID
global.saluranName = 'STARK XMD | DARKNESS FREENET SQUAD'; // Your Channel Name
global.sessionName = 'session'; // Session Folder Name

// API & Server Configuration
global.panel = 'https://example.com'; // Your Panel Link
global.cred = 'your_ptla_api_key_here'; // Your PTLA API Key
global.apiuser = 'your_ptlc_api_key_here'; // Your PTLC API Key
global.eggs = '15'; // Eggs Number (Recommended)
global.nets = '5'; // Nets Number (Recommended)
global.location = '1'; // Location Number (Recommended)

// Cloudflare Configuration
global.CF_API_KEY = "your_cloudflare_api_key"; // Your Cloudflare API Key
global.CF_ZONE_ID = "your_cloudflare_zone_id"; // Your Cloudflare Zone ID
global.CF_DOMAIN = "yourdomain.com"; // Your Domain Name

// Bot Settings
global.typemenu = 'v2'; // Menu Style v1-v5
global.typereply = 'v4'; // Reply Style v1-v4
global.autoblocknumber = '27'; // Auto Block Number (South Africa)
global.antiforeignnumber = '27'; // Anti Foreign Number
global.welcome = false; // Auto Welcome Message
global.anticall = false; // Anti Call
global.autoswview = true; // Auto View Status
global.adminevent = false; // Admin Event Messages
global.groupevent = false; // Group Event Messages
global.notifRegister = false; // Registration Notification
global.onlyRegister = false; // Registered Users Only
global.autoJoinNewsletter = false; // Auto Join Newsletter

// Payment Methods
global.payment = {
    bank: "27634988678",
    mobile: "27634988678",
    crypto: "your_wallet_address",
    qris: "https://your-qris-link.com"
};

// User Limits
global.limit = {
    free: 20, // Free User Limit
    premium: 1000, // Premium User Limit
    vip: "VIP" // VIP User Limit 👑
};

// User Balance
global.uang = {
    free: 1000, // Free User Balance
    premium: 1000000, // Premium User Balance
    vip: 1000000 // VIP User Balance 👑
};

// Bot Initial State
global.bot = {
    limit: 0, // Initial Bot Limit
    uang: 0 // Initial Bot Balance
};

// Game Sessions
global.game = {
    suit: {}, // Suit Game Session
    menfes: {}, // Confession Session
    tictactoe: {}, // Tic Tac Toe Session
    kuismath: {}, // Math Quiz Session
    tebakbom: {}, // Bomb Guessing Session
};

// Message Responses
global.mess = {
    admin: "This feature is only for admins!",
    botAdmin: "I need to be an admin first to run this! 😭",
    done: "Here you go! 😈",
    error: "Oops, something went wrong... please try again!",
    group: "This feature can only be used in groups! 🫡",
    limit: "Your usage limit has run out... 😢\n\nType .buy to purchase and increase your limit, or upgrade to premium for higher limits and special features! ✨",
    nsfw: "NSFW feature is disabled in this group, please ask admin permission first! 🫣",
    owner: "Only the owner can access this feature! 👑",
    premium: "This feature is only for premium users! 🌟",
    private: "This feature can only be used in private chat! 💌",
    wait: "Please wait a moment... I'm processing now! ⏳🤗"
};

// Media Files
global.imageDonasi = "https://example.com/donation.png"; // Donation Image URL
global.imageUrl = "https://example.com/default.png"; // Default Image URL
global.imageBuffer = fs.readFileSync("./media/imageBuffer.png"); // Buffer Image
global.videoBuffer = fs.readFileSync("./media/videoBuffer.mp4"); // Buffer Video
global.audioBuffer = fs.readFileSync("./media/audioBuffer.mp3"); // Buffer Audio

// Auto-reload on file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Updated '${__filename}'`));
    delete require.cache[file];
    require(file);
});

// Export configuration
module.exports = {
    botName: global.botName,
    ownerNumber: global.ownerNumber,
    ownerName: global.ownerName,
    website: global.website,
    wagc: global.wagc,
    packname: global.packname,
    author: global.author,
    footer: global.footer,
    creator: global.creator,
    premium: global.premium,
    prefa: global.prefa,
    tempatDB: global.tempatDB,
    saluran: global.saluran,
    saluranName: global.saluranName,
    sessionName: global.sessionName,
    panel: global.panel,
    cred: global.cred,
    apiuser: global.apiuser,
    eggs: global.eggs,
    nets: global.nets,
    location: global.location,
    CF_API_KEY: global.CF_API_KEY,
    CF_ZONE_ID: global.CF_ZONE_ID,
    CF_DOMAIN: global.CF_DOMAIN,
    typemenu: global.typemenu,
    typereply: global.typereply,
    autoblocknumber: global.autoblocknumber,
    antiforeignnumber: global.antiforeignnumber,
    welcome: global.welcome,
    anticall: global.anticall,
    autoswview: global.autoswview,
    adminevent: global.adminevent,
    groupevent: global.groupevent,
    notifRegister: global.notifRegister,
    onlyRegister: global.onlyRegister,
    autoJoinNewsletter: global.autoJoinNewsletter,
    payment: global.payment,
    limit: global.limit,
    uang: global.uang,
    bot: global.bot,
    game: global.game,
    mess: global.mess,
    imageDonasi: global.imageDonasi,
    imageUrl: global.imageUrl,
    imageBuffer: global.imageBuffer,
    videoBuffer: global.videoBuffer,
    audioBuffer: global.audioBuffer
};