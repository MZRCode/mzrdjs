class AntiCrash {
    constructor(options) {
        const ansi = require('ansi-colors');
        const { error } = require('../Utils/consoleTools');
        const { WebhookClient } = require('discord.js');
        const axios = require('axios');

        this.hiddenConsole = false;
        this.hiddenWebhook = true;

        if (options) {
            if (typeof options === 'string') {
                this.url = options;
                this.hook = new WebhookClient({ url: this.url });
            } else if (options && options.url) {
                this.url = options.url;
                this.hook = new WebhookClient({ url: this.url });
            };
        };

        try {
            axios.get('https://registry.npmjs.org/mzrdjs/latest').then(response => {
                const data = response.data;

                if (require('mzrdjs/package.json').version !== data.version) {
                    error(`You are using an old version. You can update the module by typing '${ansi.blueBright(`npm install mzrdjs@${data.version}`)}'`);
                };
            }).catch(() => { });
        } catch (err) { }
    }

    setHide(hidden) {
        if (hidden) {
            if (hidden === 'webhook') {
                this.hiddenWebhook = true;
            } else {
                this.hiddenConsole = true;
            };
        } else {
            this.hiddenWebhook = true;
            this.hiddenConsole = true;
        };

        return this;
    }

    setShow(show) {
        const ansi = require('ansi-colors');

        if (show) {
            if (show === 'webhook') {
                (async () => {
                    if (!this.hook) {
                        const errorMessage = `${ansi.red(`You must enter the Discord Webhook URL!\n${ansi.white('Info:')} ${ansi.blueBright('For support: https://discord.gg/ktVdQYrtXF')}`)}`;

                        throw new Error(errorMessage);
                    };
                })();

                this.hiddenWebhook = false;
            } else {
                this.hiddenConsole = false;
            };
        } else {
            if (!this.hook) {
                const errorMessage = `${ansi.red(`You must enter the Discord Webhook URL!\n${ansi.white('Info:')} ${ansi.blueBright('For support: https://discord.gg/ktVdQYrtXF')}`)}`;

                throw new Error(errorMessage);
            };

            this.hiddenWebhook = false;
            this.hiddenConsole = false;
        };

        return this;
    }

    start(options) {
        const { EmbedBuilder, codeBlock } = require('discord.js');
        const { info, error } = require('../Utils/consoleTools');
        const ansi = require('ansi-colors');

        if (!this.hiddenConsole) {
            info('The AntiCrash system is running.');
        };

        process.on('uncaughtException', async (err) => {
            if (!this.hiddenConsole) {
                error(`${err.message}`);
            };

            if (!this.hiddenWebhook) {
                const embed = new EmbedBuilder()
                    .setAuthor({ name: 'Unhandled Exception', iconURL: 'https://cdn.discordapp.com/emojis/1098632292378886224.png' })
                    .setDescription(codeBlock('ansi', `[${ansi.red(err.name)}] : ${err.message}`))
                    .addFields(
                        { name: '\u200B', value: codeBlock('js', err.stack), inline: false },
                    )
                    .setColor('Red')
                    .setTimestamp()

                await this.hook.send({ embeds: [embed] });
            };
        });

        process.on('unhandledRejection', async (err) => {
            if (!this.hiddenConsole) {
                error(`${err}`);
            };

            if (!this.hiddenWebhook) {
                let name = 'Error';
                if (err instanceof TypeError) {
                    name = 'TypeError';
                } else if (err instanceof ReferenceError) {
                    name = 'ReferenceError';
                } else if (err instanceof SyntaxError) {
                    name = 'SyntaxError';
                } else if (err instanceof RangeError) {
                    name = 'RangeError';
                } else if (err instanceof EvalError) {
                    name = 'EvalError';
                };

                const embed = new EmbedBuilder()
                    .setAuthor({ name: 'Unhandled Rejection', iconURL: 'https://cdn.discordapp.com/emojis/1098632292378886224.png' })
                    .setDescription(codeBlock('ansi', `[${ansi.red(name)}] : ${err}`))
                    .setColor('Red')
                    .setTimestamp()

                await this.hook.send({ embeds: [embed] });
            };
        });

        process.on('uncaughtExceptionMonitor', async (err) => {
            if (!this.hiddenConsole) {
                error(`${err.message}`);
            };

            if (!this.hiddenWebhook) {
                const embed = new EmbedBuilder()
                    .setAuthor({ name: 'Uncaught Exception Monitor', iconURL: 'https://cdn.discordapp.com/emojis/1098632292378886224.png' })
                    .setDescription(codeBlock('ansi', `[${ansi.red(err.name)}] : ${err.message}`))
                    .addFields(
                        { name: '\u200B', value: codeBlock('js', err.stack), inline: false },
                    )
                    .setColor('Red')
                    .setTimestamp()

                await this.hook.send({ embeds: [embed] });
            };
        });

        process.on('warning', async (err) => {
            if (!this.hiddenConsole) {
                error(`${err.message}`);
            };

            if (options.warn === true) return;

            if (!this.hiddenWebhook) {
                const embed = new EmbedBuilder()
                    .setAuthor({ name: 'Warning', iconURL: 'https://images.emojiterra.com/twitter/512px/26a0.png' })
                    .setDescription(codeBlock('ansi', `[${ansi.yellow('Warn')}] : ${err.message}`))
                    .addFields(
                        { name: '\u200B', value: err.stack, inline: false },
                    )
                    .setColor('Yellow')
                    .setTimestamp()

                await this.hook.send({ embeds: [embed] });
            };
        });
    }
}

module.exports = { AntiCrash };