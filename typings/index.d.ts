interface Options {
    lang: "tr" | "en";
    short?: boolean;
    ms?: boolean;
}

declare const mzrdjs: {
    calculate: (value: number, value2: number) => number;
    random: (min: number, max: number) => number;
    shortNumber: (input: number) => string;
    mcmotd: (ip: string) => string;
    addNumberDot: (input: number) => string;
    timestamp: (time: number) => number;
    ms: (value: string, options: Options) => string;
    version: string;
}
  
export = mzrdjs;
