'use strict';

const { version } = require('../package.json');
const { __exportStar } = require('tslib');
const axios = require('axios');

versionCheck(version);

__exportStar(require('./index'), exports);
__exportStar(require('./AntiCrash'), exports);
__exportStar(require('./kelime-oyunu'), exports);
__exportStar(require('./analyzeModuleUsage'), exports);

exports.version = version;

function versionCheck(version) {
    try {
        axios.get('https://registry.npmjs.org/mzrdjs/latest').then((response) => {
            const data = response.data;

            if (version !== data.version) console.warn(`[MZRDJS] It seems like you are using an outdated version of mzrdjs. Run 'npm install mzrdjs@latest' to update the module. Need help? Join my Discord server: https://discord.gg/ktVdQYrtXF`);
        });
    } catch (err) { }
}