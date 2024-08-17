const { AntiCrash } = require('mzrdjs');

// Have Log + No Webhook Log + No Exit
new AntiCrash().start();

// Have Log + Have Webhook Log + No Exit
new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' }).setHide().start();

// No Log + Have Webhook Log + No Exit
new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' }).setHide('console').setShow('webhook').start();

// No Log + No Webhook Log + No Exit
new AntiCrash().setShow().start();