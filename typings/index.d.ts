interface msOptions {
    lang: 'tr' | 'en';
    short?: boolean;
    largest?: number;
    units?: string[];
}

interface genPasswordOptions {
    length: number;
    numbers?: boolean;
    lowercase?: boolean;
    uppercase?: boolean;
    symbols?: boolean;
    excludeSimilarCharacters?: boolean;
}

interface genCodeOptions {
    length?: number;
    range?: number;
    numbers: boolean;
    lowercase?: boolean;
    uppercase?: boolean;
    excludeSimilarCharacters?: boolean;
    symbol: string;
}

interface lbOptions {
    dot?: boolean;
}

interface AntiCrashOptions {
    url?: string;
}

export declare class AntiCrash {
    private hidden
    private hook;
    private checkWebhook;
    constructor(options: AntiCrashOptions);
    setHide: (hidden: 'console' | 'webhook') => this;
    setShow: (show: 'console' | 'webhook') => this;
    start: () => void;
}

declare const mzrdjs: {
    calculate: (value: number, value2: number) => number;
    random: (min: number, max: number) => number;
    shortNumber: (input: number) => string;
    mcmotd: (ip: string) => string;
    formatNumber: (input: number) => string;
    timestamp: (time: number) => number;
    ms: (value: string | number, options: msOptions) => string | number;
    version: string;
    tdk: (kelime: string) => string;
    leaderboard: (data: string, pageSize: number, options: lbOptions) => string;
    generatePassword: (options: genPasswordOptions) => string;
    generateCode: (options: genCodeOptions) => string;
}

export = mzrdjs;
