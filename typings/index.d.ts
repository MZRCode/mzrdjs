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

export function calculate(value: number, value2: number): number;
export function random(min: number, max: number): number;
export function shortNumber(value: number): string;
export function mcmotd(ip: string): string;
export function formatNumber(value: number): string;
export function timestamp(value: number): number;
export function ms(value: string | number, options: msOptions | {}): string | number;
export const version: string;
export function tdk(kelime: string): Promise<string>;
export function leaderboard(data: string, size: number, options: lbOptions | {}): Promise<string>;
export function generatePassword(options: genPasswordOptions | {}): string;
export function generateCode(options: genCodeOptions | {}): string;

export class AntiCrash {
    private hidden;
    private hook;
    private checkWebhook;

    public constructor(options: AntiCrashOptions | string | null);
    public setHide?: (hidden: 'console' | 'webhook') => this;
    public setShow?: (show: 'console' | 'webhook') => this;
    public start: () => void;
}
