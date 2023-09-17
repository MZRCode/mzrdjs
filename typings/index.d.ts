declare const mzrdjs: {
    divide: (key: number, value: number) => number;
    raise: (key: number, value: number) => number;
    calculate: (key: number, value: number) => number;
    random: (key: number, value: number) => number;
    shortNumber: (key: number) => number;
    mcmotd: (key: string) => string;
}
  
export = mzrdjs;