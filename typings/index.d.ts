interface Options {
    lang: "tr" | "en";
    short?: boolean;
    largest?: number;
    units?: string[];
}

declare const mzrdjs: {
    calculate: (value: number, value2: number) => number;
    random: (min: number, max: number) => number;
    shortNumber: (input: number) => string;
    mcmotd: (ip: string) => string;
    formatNumber: (input: number) => string;
    timestamp: (time: number) => number;
    ms: (value: string | number, options: Options) => string | number;
    version: string;
    tdk: (kelime: string) => string;
}
  
export = mzrdjs;
