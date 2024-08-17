module.exports = {
  calculate: function (value, value2) {
    if (value2 === 0) {
      throw new TypeError('Second value cannot be "0" for percentage calculation.');
    }
    return (value / value2) * 100;
  },

  random: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  shortNumber: function (number, locale = 'en-US') {
    return Intl.NumberFormat(locale, {
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(number);
  },

  mcmotd: function (ip) {
    if (ip.length < 10) {
      throw new Error("The typed Minecraft ip cannot be shorter than \"10\" characters.");
    }
    return `http://status.mclive.eu/${ip}/${ip}/25565/banner.png`
  },

  formatNumber: function (number) {
    const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    if (formattedNumber.length > 21) {
      throw new Error("The number is bigger than \"21\" digits!");
    } else {
      return formattedNumber;
    };
  },

  get slashBuilder() { // Only my youtube channel code you not use :)
    return console.log(`▀████▄     ▄███▀  ██▀▀▀████  ██▀▀▀██▄   ╋ Proje: YouTube için Altyapı\n  ████    ████   █▀   ███    ██   ▀██▄  ╋ Sahip: MZR\n  █ ██   ▄█ ██   ▀   ███     ██   ▄██   ╋ Kanal: MZR Development\n  █  ██  █▀ ██      ███      ███████    ╋ Copyright (c) 2023-2024. All rights reserved.\n  █  ██▄█▀  ██     ███   ▄   ██  ██▄    ╋ Bu kod mzrdev'in mülkiyetindedir ve paylaşılamaz ve sahiplenilemez.\n  █  ▀██▀   ██    ███   ▄█   ██   ▀██▄  ╋ Daha fazla bilgi için bizimle iletişime geçin\n▄███▄ ▀▀  ▄████  ▄█████████  ███▄ ▄███▄ ╋ https://discord.gg/ktVdQYrtXF`)
  },

  timestamp: function (time) {
    return parseInt(time / 1000);
  },

  ms: function (value, options) {
    options = options || {};
    let type = typeof value;
    let lang = options.lang || 'en';
    let showMS = options.ms || false;
    let largest = options.largest || Infinity;
    let units = options.units || ['y', 'year', 'years', 'yr', 'yrs', 'mo', 'month', 'months', 'ay', 'w', 'week', 'weeks', 'hafta', 'hf', 'd', 'day', 'days', 'gün', 'g', 'h', 'hour', 'hours', 'saat', 'sa', 'm', 'minute', 'minutes', 'dakika', 'dk', 's', 'second', 'seconds', 'saniye', 'sn'];

    if (largest < 1) {
      throw new Error("The minimum 'largest' must be 1!");
    };

    if (type === 'string' && value.length > 0) {
      return ayıkla(value)
    } else if (type === 'number' && isFinite(value)) {
      let shorts = options.short || false;
      return shorts ? short(value, lang, largest, units) : long(value, lang, largest, units);
    };

    throw new Error('value is not a non-empty string or a valid number! value = ' + JSON.stringify(value));
  },

  generatePassword: function (options) {
    let length = options.length ? parseFloat(options.length) : 15;
    const type = typeof length;
    let number = options.numbers || false;
    let lowercase = options.lowercase || true;
    let uppercase = options.uppercase || true;
    let symbol = options.symbols || false;
    let excludeSimilarCharacter = options.excludeSimilarCharacters || false;
    let allLowercase = options.allLowercase || false;
    let allUppercase = options.allUppercase || false;

    let lowercases = 'abcdefghijklmnopqrstuvwxyz';
    let uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';
    let excludeSimilarCharacters = /[ilLI|`oO0]/g;

    if (!length || length < 2) {
      throw new Error("The password length must be at least 2 character long.");
    };

    if (type === 'number' && isFinite(length)) {
      let words = '';

      if (number) {
        words += numbers;
      };

      if (lowercase) {
        words += lowercases;
      };

      if (uppercase) {
        words += uppercases;
      };

      if (symbol) {
        if (typeof symbol === 'string') {
          words += symbol;
        } else {
          words += symbols;
        };
      };

      if (!words) {
        throw new TypeError('At least one rule for pools must be true.');
      };

      if (allLowercase && allUppercase) {
        throw new TypeError('Are you serious? Just activate either All Lowercase or All Uppercase');
      };

      if (allLowercase) {
        words = words.toLowerCase();
      };

      if (allUppercase) {
        words = words.toUpperCase();
      };

      if (excludeSimilarCharacter) {
        words = words.replace(excludeSimilarCharacters, '');
      };

      const password = generate(options, words);

      return password;
    } else {
      throw new Error('Password length is not a non-empty string or a valid number!');
    };
  },

  generateCode: function (options) {
    let length = options.length ? parseFloat(options.length) : 16;
    let range = options.range ? parseFloat(options.range) : 4;
    const lengthType = typeof length;
    const rangeType = typeof range;
    let numbers = options.numbers || false;
    let lowercase = options.lowercase || false;
    let uppercase = options.uppercase || false;
    let excludeSimilarCharacters = options.excludeSimilarCharacters || false;
    let symbol = options.symbol || '-';
    let allLowercase = options.allLowercase || false;
    let allUppercase = options.allUppercase || true;

    if (!length || length < 1) {
      throw new Error("The code length must be at least 1 character long.");
    };

    if (lengthType === 'number' && rangeType === 'number' && isFinite(length) && isFinite(range)) {
      const str = this.generatePassword({ length, numbers, lowercase, uppercase, excludeSimilarCharacters, allLowercase, allUppercase });
      let result = "";

      for (let i = 0; i < str.length; i += range) {
        result += str.slice(i, i + range) + (i < str.length - range ? symbol : '');
      }

      return result;
    } else {
      throw new Error('Code length is not a non-empty string or a valid number!');
    };
  },
};

let s = 1000;
let m = s * 60;
let h = m * 60;
let d = h * 24;
let w = d * 7;
let mo = d * 30;
let y = d * 365;

function ayıkla(string) {
  string = String(string);
  if (string.length > 100) {
    return;
  }
  var desteklenen = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|milisaniye?|msecs?|ms|seconds?|saniye?|secs?|sn?|s|minutes?|dakika?|mins?|dk?|m|hours?|saat?|hrs?|sa?|h|days?|gün?|gun?|g?|d|weeks?|hafta?|hf?|w|months?|month?|mo?|ay|years?|yıl?|yil?|yrs?|yr?|y)?$/i.exec(
    string
  );
  if (!desteklenen) {
    return;
  }
  var n = parseFloat(desteklenen[1]);
  var type = (desteklenen[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yıl':
    case 'yil':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'months':
    case 'month':
    case 'mo':
    case 'ay':
      return n * mo;
    case 'weeks':
    case 'hafta':
    case 'week':
    case 'hf':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'gün':
    case 'gun':
    case 'gn':
    case 'd':
    case 'g':
      return n * d;
    case 'hours':
    case 'hour':
    case 'saat':
    case 'hrs':
    case 'hr':
    case 'sa':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'dakika':
    case 'mins':
    case 'min':
    case 'dk':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'saniye':
    case 'secs':
    case 'sec':
    case 'sn':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'milisaniye':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

function long(ms, lang, largest, units) {
  let msAbs = Math.abs(ms);
  let days = Math.floor(msAbs / d);
  let hours = Math.floor((msAbs % (d)) / (h));
  let minutes = Math.floor((msAbs % (h)) / (m));
  let seconds = Math.floor(msAbs % (m) / (s));
  let milliseconds = msAbs % (s);

  let süre = "";

  if (largest === undefined) {
    largest = Infinity;
  }

  if (units === undefined) {
    units = ['y', 'year', 'years', 'yr', 'yrs', 'mo', 'month', 'months', 'ay', 'w', 'week', 'weeks', 'hafta', 'hf', 'd', 'day', 'days', 'gün', 'g', 'h', 'hour', 'hours', 'saat', 'sa', 'm', 'minute', 'minutes', 'dakika', 'dk', 's', 'second', 'seconds', 'saniye', 'sn', 'ms', 'milliseconds', 'millisecond', 'milisaniye'];
  }

  if (largest > 0 && days > 0) {
    if (units.includes('d') || units.includes('day') || units.includes('days') || units.includes('g') || units.includes('gün')) {
      süre += sEkle(ms, msAbs, d, days + " gün", days + " day", lang) + " ";
      largest--;
    }
  }

  if (largest > 0 && hours > 0 && (units.includes('h') || units.includes('hour') || units.includes('hours') || units.includes('saat') || units.includes('sa'))) {
    süre += sEkle(ms, msAbs, h, hours + " saat", hours + " hour", lang) + " ";
    largest--;
  }

  if (largest > 0 && minutes && (units.includes('m') || units.includes('minute') || units.includes('minutes') || units.includes('dakika') || units.includes('dk'))) {
    süre += sEkle(ms, msAbs, m, minutes + " dakika", minutes + " minute", lang) + " ";
    largest--;
  }

  if (largest > 0 && seconds && (units.includes('s') || units.includes('second') || units.includes('seconds') || units.includes('saniye') || units.includes('sn'))) {
    süre += sEkle(ms, msAbs, s, seconds + " saniye", seconds + " second", lang) + " ";
    largest--;
  }

  if (largest > 0 && milliseconds > 0 && (units.includes('ms') || units.includes('millisecond') || units.includes('milliseconds') || units.includes('milisaniye'))) {
    süre += sEkle(ms, msAbs, ms, milliseconds + " milisaniye", milliseconds + " millisecond", lang) + " ";
    largest--;
  };

  süre = süre.trim().replace(/(^|\s)0\s\w+/g, "").replace(/\s+/g, " ");

  return süre;
}

function short(ms, lang, largest, units) {
  let msAbs = Math.abs(ms);
  let days = Math.floor(msAbs / d);
  let hours = Math.floor((msAbs % (d)) / (h));
  let minutes = Math.floor((msAbs % (h)) / (m));
  let seconds = Math.floor(msAbs % (m) / (s));
  let milliseconds = msAbs % (s);

  let süre = "";

  if (largest === undefined) {
    largest = Infinity;
  }

  if (units === undefined) {
    units = ['y', 'year', 'years', 'yr', 'yrs', 'mo', 'month', 'months', 'ay', 'w', 'week', 'weeks', 'hafta', 'hf', 'd', 'day', 'days', 'gün', 'g', 'h', 'hour', 'hours', 'saat', 'sa', 'm', 'minute', 'minutes', 'dakika', 'dk', 's', 'second', 'seconds', 'saniye', 'sn', 'ms', 'milliseconds', 'millisecond', 'milisaniye'];
  }

  if (days > 0 && largest > 0 && units.includes('d') || units.includes('day') || units.includes('days') || units.includes('g') || units.includes('gün')) {
    süre += sEkleme(ms, msAbs, d, days + "g", days + "d", lang) + " ";
    largest--;
  }

  if (largest > 0 && hours > 0 && (units.includes('h') || units.includes('hour') || units.includes('hours') || units.includes('saat') || units.includes('sa'))) {
    süre += sEkleme(ms, msAbs, h, hours + "sa", hours + "h", lang) + " ";
    largest--;
  }

  if (largest > 0 && minutes && (units.includes('m') || units.includes('minute') || units.includes('minutes') || units.includes('dakika') || units.includes('dk'))) {
    süre += sEkleme(ms, msAbs, m, minutes + "dk", minutes + "m", lang) + " ";
    largest--;
  }

  if (largest > 0 && seconds && (units.includes('s') || units.includes('second') || units.includes('seconds') || units.includes('saniye') || units.includes('sn'))) {
    süre += sEkleme(ms, msAbs, s, seconds + "sn", seconds + "s", lang) + " ";
    largest--;
  }

  if (largest > 0 && milliseconds > 0 && (units.includes('ms') || units.includes('millisecond') || units.includes('milliseconds') || units.includes('milisaniye'))) {
    süre += sEkleme(ms, msAbs, ms, milliseconds + "ms", milliseconds + "ms", lang) + " ";
    largest--;
  };

  süre = süre.replace(/(^|\s)0\w+/g, "").replace(/\s+/g, "");

  return süre;
}

function sEkle(ms, msAbs, n, nameTr, nameEn, lang) {
  if (lang === 'tr') {
    return nameTr;
  } else if (lang === 'en') {
    var isPlural = msAbs >= n * 1.5;
    return nameEn + (isPlural ? 's' : '');
  } else {
    return nameTr;
  };
}

function sEkleme(ms, msAbs, n, nameTr, nameEn, lang) {
  if (lang === 'tr') {
    return nameTr;
  } else if (lang === 'en') {
    return nameEn;
  } else {
    return nameTr;
  };
}

function generate(options, words) {
  let password = '';
  let optionsLength = options.length;
  let passLength = words.length;

  for (var i = 0; i < optionsLength; i++) {
    password += words[randomNumber(passLength)];
  }

  return password;
};

function randomNumber(max) {
  var rand = randomValue();
  while (rand >= 256 - (256 % max)) {
    rand = randomValue();
  }
  return rand % max;
};

function randomValue() {
  const crypto = require('crypto');

  var randomIndex;
  var randomBytes;

  if (randomIndex === undefined || randomIndex >= randomBytes.length) {
    randomIndex = 0;
    randomBytes = crypto.randomBytes(256);
  }

  var result = randomBytes[randomIndex];
  randomIndex += 1;

  return result;
};