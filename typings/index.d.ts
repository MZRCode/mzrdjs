interface msOptions {
    lang?: 'tr' | 'en';
    short?: boolean;
    largest?: number;
    units?: string[];
}

interface lbOptions {
    dot?: boolean;
}

interface genPasswordOptions {
    length?: number;
    numbers?: boolean;
    lowercase?: boolean;
    uppercase?: boolean;
    symbols?: boolean;
    excludeSimilarCharacters?: boolean;
}

interface genCodeOptions {
    length?: number;
    range?: number;
    numbers?: boolean;
    lowercase?: boolean;
    uppercase?: boolean;
    excludeSimilarCharacters?: boolean;
    symbol?: string;
}

interface AntiCrashOptions {
    url: string;
}

interface ModuleAnalysisResult {
    usedModules: string[];
    hiddenModules: string[];
    unusedModules: string[];
    hiddenUnusedModules: string[];
}

interface ConsoleModuleAnalysisResult {
    usedModules: string;
    hiddenModules: string;
    unusedModules: string;
    hiddenUnusedModules: string;
}

export const version: string;

/**
 * Calculates the percentage of two values.
 * @param {number} value - The dividend.
 * @param {number} value2 - The divisor (cannot be 0).
 * @returns {number} The percentage.
 * @example mzr.calculate(20, 200); // 10
 */
export function calculate(value: number, value2: number): number;

/**
 * Generates a random number between the specified range.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} The random number.
 * @example mzr.random(5, 10); // A number between 5-10
 */
export function random(min: number, max: number): number;

/**
 * Formats a number using compact notation.
 * @param {number} value - The number to format.
 * @returns {string} The formatted number.
 * @example mzr.shortNumber(112394); // 112.3k
 */
export function shortNumber(value: number): string;

/**
 * Generates a Minecraft server MOTD banner URL.
 * @param {string} ip - The Minecraft server IP address.
 * @returns {string} The MOTD banner URL.
 * @throws Will throw an error if the provided IP is less than 10 characters.
 * @example mzr.mcmod('serverIp');
 */
export function mcmotd(ip: string): string;

/**
 * Formats a number with a thousand separator.
 * @param {number} value - The number to format.
 * @returns {string} The formatted number.
 * @throws Will throw an error if the number has more than 21 digits.
 * @example mzr.formatNumber(12381248125); // 12.381.248.125
 */
export function formatNumber(value: number): string;

/**
 * Converts a timestamp in milliseconds to seconds.
 * @param {number} value - The timestamp in milliseconds.
 * @returns {number} The timestamp in seconds.
 * @example mzr.timestamp(1695495014935); // 1706218604
 */
export function timestamp(value: number): number;

/**
 * Converts milliseconds to a human-readable format.
 * @param {string | number} value - The time duration in milliseconds.
 * @param {msOptions} [options={}] - Optional configuration for formatting.
 * @returns {string | number} The formatted time duration.
 * @throws Will throw an error if the 'largest' option is less than 1.
 * @throws Will throw an error if the value is not a non-empty string or a valid number.
 * @example mzr.ms(60000, { short: true, lang: 'en' }); // 1m
 */
export function ms(value: string | number, options: msOptions): string | number;

/**
 * Retrieves information about a Turkish word from the Turkish Language Association (TDK).
 * @param {string} kelime - The word to look up.
 * @returns {Promise<string>} The information about the word.
 * @example mzr.tdK('inek'); // { onay: true, not: null,kelime: 'inek', ilkHarf: 'i', sonHarf: 'k', lisan: 'Türkçe', anlam: 'Dişi sığır; sarıkız' }
 */
export function tdk(kelime: string): Promise<string>;

/**
 * Generates a random password based on specified options.
 * @param {genPasswordOptions} [options={}] - Optional configuration for password generation.
 * @returns {string} The generated password.
 * @example mzr.generatePassword({ length: 16, numbers: true }); // aHE77FEx1DWG6Phq
 */
export function generatePassword(options: genPasswordOptions): string;

/**
 * Generates a random code based on specified options.
 * @param {genCodeOptions} [options={}] - Optional configuration for code generation.
 * @returns {string} The generated code.
 * @example mzr.generateCode({ length: 10, range: 2 }); // UH-AP-SA-QX-ZN
 */
export function generateCode(options: genCodeOptions): string;

/**
 * Analyzes the module usage of a project located at the specified path.
 * @supported __CommonJS__ ✅, __EsModules__ ❌
 * @param {'console' | 'json'} [returns = 'json'] - Specifies the return format: 'console' or 'json'. __(Optional)__
 * @param {string} [projectRoot = __dirname] - The path of the project. __(Optional)__
 * @returns {ModuleAnalysisResult | ConsoleModuleAnalysisResult} The analysis results.
 * @example
 * const result = mzr.analyzeModuleUsage();
 * console.log('Used Modules:', result.usedModules);
 * console.log('Hidden Modules:', result.hiddenModules);
 * console.log('Unused Modules:', result.unusedModules);
 * console.log('Hidden Unused Modules:', result.hiddenUnusedModules);
 */
export function analyzeModuleUsage(returns?: 'console' | 'json', projectRoot?: string): ModuleAnalysisResult | ConsoleModuleAnalysisResult;

export class AntiCrash {
    private hidden;
    private hook;
    private checkWebhook;

    /**
     * Anti Crash Setup
     * @example
     * const { AntiCrash } = require('mzrdjs')
     * 
     * new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' })
     * 
     * new AntiCrash() (Recommended)
     * @param {String} options - Webhook URL of a channel on Discord
    */
    public constructor(options: AntiCrashOptions | string | null);

    /**
     * @example
     * new AntiCrash()
     * .setHide() // Hide Console and Webhook notifications
     * 
     * new AntiCrash()
     * .setHide('console') // Hide console notifications
     * 
     * new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' })
     * .setHide('webhook') // Hide Webhook notifications (Defualt)
    */
    public setHide?: (hidden: 'console' | 'webhook') => this;

    /**
     * @example
     * new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' })
     * .setShow() // Show Console and Webhook notifications
     * 
     * new AntiCrash()
     * .setShow('console') // Show console notifications (Defualt)
     * 
     * new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' })
     * .setShow('webhook') // Show Webhook notifications
    */
    public setShow?: (show: 'console' | 'webhook') => this;

    /**
     * Starts the Anti Crash system
     * @example
     * new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' })
     * .start()
     * 
     * new AntiCrash()
     * .start() (Defualt)
    */
    public start: () => void;
}
