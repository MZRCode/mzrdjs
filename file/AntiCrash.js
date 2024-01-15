const { WebhookClient, EmbedBuilder, codeBlock } = require('discord.js');
const ansi = require('ansi-colors');
const sneaks = require('sneaks');
const axios = require('axios');

class AntiCrash {
    /**
     * Anti Crash Kurulumu
        * @example
        * const { AntiCrash } = require('mzrdjs')
        * new AntiCrash({ url: "DISCORD_WEBHOOK_URL" })
     * @param {String} Webhook URL - Discorddaki bir kanalın webhook urlsi
     */
    constructor(options) {
        this.hiddenConsole = false;
        this.hiddenWebhook = true;

        if (options) {
            if (typeof options === 'string') {
                this.url = options;
                this.checkWebhook(this.url);
            } else if (options && options.url) {
                this.url = options.url;
                this.checkWebhook(this.url);
            };
        };

        try {
            axios.get('https://registry.npmjs.org/mzrdjs/latest').then(response => {
                const data = response.data;
                if (require('../package.json').version !== data.version) {
                    sneaks.console.error(`You are using an old version. You can update the module by typing '${ansi.blueBright(`npm install mzrdjs@${data.version}`)}'`);
                };
            }).catch(error => { });
        } catch (err) {

        }
    }

    async checkWebhook(url) {
        if (!url) return;

        try {
            const response = await axios.head(url);

            if (response.status === 200) {
                this.hook = new WebhookClient({ url });
            } else {
                sneaks.console.error(`Beklenmeyen bir durum oluştu. Hata kodu: ${ansi.red(response.status)}`);
            };
        } catch (error) {
            if (error.response) {
                sneaks.console.error('Webhook URL\'si yanlış!');
            } else if (error.request) {
                sneaks.console.error('Webhook URL\'si yanlış!');
            } else {
                sneaks.console.error(`Webhook URL\'sinde bir sorun mevcut. Hata kodu: ${ansi.red(error.message)}`);
            };
        };
    }

    /**
        * @example
        * new AntiCrash({ url: "DISCORD_WEBHOOK_URL" })
        * .setHide() // Konsol ve Webhook bildirimlerini gizler.
        * 
        * new AntiCrash({ url: "DISCORD_WEBHOOK_URL" })
        * .setHide('console') // Konsol bildirimlerini gizler.
        * 
        * new AntiCrash({ url: "DISCORD_WEBHOOK_URL" })
        * .setHide('webhook') // Webhook bildirimlerini gizler. (Defualt)
     */
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

    /**
        * @example
        * new AntiCrash({ url: "DISCORD_WEBHOOK_URL" })
        * .setShow() // Konsol ve Webhook bildirimlerini gösterir.
        * 
        * new AntiCrash({ url: "DISCORD_WEBHOOK_URL" })
        * .setShow('console') // Konsol bildirimlerini gösterir. (Defualt)
        * 
        * new AntiCrash({ url: "DISCORD_WEBHOOK_URL" })
        * .setShow('webhook') // Webhook bildirimlerini gösterir.
     */
    setShow(show) {
        if (show) {
            if (show === 'webhook') {
                (async () => {
                    await this.checkWebhook(this.url);
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

    /**
     * Anti Crash sistemini başlatır.
        * @example
        * new AntiCrash({ url: "DISCORD_WEBHOOK_URL" }).start()
     */
    start(options) {
        if (!this.hiddenConsole) {
            sneaks.console.info('The AntiCrash system is running.');
        };

        process.on('uncaughtException', async (error) => {
            if (!this.hiddenConsole) {
                sneaks.console.error(`${error.message}`);
            };

            if (!this.hiddenWebhook) {
                await this.checkWebhook(this.url);

                const embed = new EmbedBuilder()
                    .setAuthor({ name: 'Unhandled Exception', iconURL: 'https://cdn.discordapp.com/emojis/1098632292378886224.png' })
                    .setDescription(codeBlock('ansi', `[${ansi.red(error.name)}] : ${error.message}`))
                    .addFields(
                        { name: '\u200B', value: codeBlock('js', error.stack), inline: false },
                    )
                    .setColor('Red')
                    .setTimestamp()

                await this.hook.send({ embeds: [embed] });
            };
        });

        process.on('unhandledRejection', async (error) => {
            if (!this.hiddenConsole) {
                sneaks.console.error(`${error}`);
            };

            if (!this.hiddenWebhook) {
                await this.checkWebhook(this.url);

                let name;
                if (error instanceof TypeError) {
                    name = 'TypeError';
                } else if (error instanceof ReferenceError) {
                    name = 'ReferenceError';
                } else if (error instanceof SyntaxError) {
                    name = 'SyntaxError';
                } else if (error instanceof RangeError) {
                    name = 'RangeError';
                } else if (error instanceof EvalError) {
                    name = 'EvalError';
                } else {
                    name = 'Error';
                };

                const embed = new EmbedBuilder()
                    .setAuthor({ name: 'Unhandled Rejection', iconURL: 'https://cdn.discordapp.com/emojis/1098632292378886224.png' })
                    .setDescription(codeBlock('ansi', `[${ansi.red(name)}] : ${error}`))
                    .setColor('Red')
                    .setTimestamp()

                await this.hook.send({ embeds: [embed] });
            };
        });

        process.on('uncaughtExceptionMonitor', async (error) => {
            if (!this.hiddenConsole) {
                sneaks.console.error(`${error.message}`);
            };

            if (!this.hiddenWebhook) {
                await this.checkWebhook(this.url);

                const embed = new EmbedBuilder()
                    .setAuthor({ name: 'Uncaught Exception Monitor', iconURL: 'https://cdn.discordapp.com/emojis/1098632292378886224.png' })
                    .setDescription(codeBlock('ansi', `[${ansi.red(error.name)}] : ${error.message}`))
                    .addFields(
                        { name: '\u200B', value: codeBlock('js', error.stack), inline: false },
                    )
                    .setColor('Red')
                    .setTimestamp()

                await this.hook.send({ embeds: [embed] });
            };
        });

        process.on('warning', async (error) => {
            if (!this.hiddenConsole) {
                sneaks.console.error(`${error.message}`);
            };

            if (options.warn === true) return;

            if (!this.hiddenWebhook) {
                await this.checkWebhook(this.url);

                const embed = new EmbedBuilder()
                    .setAuthor({ name: 'Warning', iconURL: 'https://images.emojiterra.com/twitter/512px/26a0.png' })
                    .setDescription(codeBlock('ansi', `[${ansi.yellow('Warn')}] : ${error.message}`))
                    .addFields(
                        { name: '\u200B', value: error.stack, inline: false },
                    )
                    .setColor('Yellow')
                    .setTimestamp()

                await this.hook.send({ embeds: [embed] });
            };
        });
    }
}

module.exports = { AntiCrash };