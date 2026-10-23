const { mkdirSync } = require('fs');
const path = require('path');
const {LOG_DIR} = require('../config/logs');
const {AVATAR_IMG_DIR} = require('../config/uploader');
const logsFolderPath = path.resolve(__dirname, '..', '..', LOG_DIR);
const avatarFolderPath = path.resolve(__dirname, '..', '..', AVATAR_IMG_DIR);

module.exports = () => {
    try {
        mkdirSync(logsFolderPath, { recursive: true });
        mkdirSync(avatarFolderPath, { recursive: true });
    } catch (error) {
        console.error(`Error. Cannot create logs directory: ${logsFolderPath}`, error.message);
    }
}