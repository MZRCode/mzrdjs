module.exports = {
  calculate: function(value, value2) {
    if (value2 === 0) {
      throw new TypeError("Second value cannot be \"0\" for percentage calculation.");
  }
  return (value / value2) * 100;
  },

  random: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  shortNumber: function(number) {
    if (number >= 1e36) {
        return parseFloat((number / 1e33).toFixed(0)) + 'Dc';
    } else if (number >= 1e30) {
        return parseFloat((number / 1e30).toFixed(0)) + 'N';
    } else if (number >= 1e27) {
        return parseFloat((number / 1e27).toFixed(0)) + 'Oc';
    } else if (number >= 1e24) {
        return parseFloat((number / 1e24).toFixed(0)) + 'Sp';
    } else if (number >= 1e21) {
        return parseFloat((number / 1e21).toFixed(0)) + 'Sx';
    } else if (number >= 1e18) {
        return parseFloat((number / 1e18).toFixed(0)) + 'Qn';
    } else if (number >= 1e15) {
        return parseFloat((number / 1e15).toFixed(0)) + 'Q';
    } else if (number >= 1e12) {
        return parseFloat((number / 1e12).toFixed(0)) + 'T';
    } else if (number >= 1e9) {
        return parseFloat((number / 1e9).toFixed(0)) + 'B';
    } else if (number >= 1e6) {
        return parseFloat((number/1e6).toFixed(1))+'M';
    } else if (number >= 10000 && number <= 999999) {
        return parseFloat((number / 1000).toFixed(1)) + 'k';
    }
    return number.toString();
  },

  mcmotd: function(ip) {
    if (ip.length < 10) {
      throw new Error("The typed Minecraft ip cannot be shorter than \"10\" characters.");
    }
    return `http://status.mclive.eu/${ip}/${ip}/25565/banner.png`
  },

  formatNumber: function(number) {
    const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    if (formattedNumber.length > 21) {
      throw new Error("The number is bigger than \"21\" digits!");
    } else {  
  return formattedNumber;
    };
  },

  get version() {
    try {
      const version = require('../../mzrdjs/package.json').version;

      return version;
    } catch (error) {
      if (error.code == 'MODULE_NOT_FOUND') {
        throw new Error("mzrdjs module is not installed! You can type 'npm i mzrdjs' to install it.")
      } else {
        throw new Error('An error occurred! Here is the error that occurred: ' + error.message);
      }
    }
  },

  timestamp: function(time) {
    return parseInt(time / 1000);
  },

  ms: function(value, options) {
    options = options || {};
    let type = typeof value;
    let lang = options.lang || 'en';
    let showMS = options.ms || false;
    if (type === 'string' && value.length > 0) {
      return ayıkla(value)
    } else if (type === 'number' && isFinite(value)) {
      let shorts = options.short || false;
      return shorts ? short(value, lang, showMS) : long(value, lang, showMS);
    }
    throw new Error('value is not a non-empty string or a valid number! value = ' + JSON.stringify(value));
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
  var desteklenen = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|milisaniye?|msecs?|ms|seconds?|saniye?|secs?|sn?|s|minutes?|dakika?|mins?|dk?|m|hours?|saat?|hrs?|sa?|h|days?|gün?|gun?|g?|d|weeks?|hafta?|hf?|w|months?|month?|mo?|ay|years?|yıl?|yil?|yrs?|y)?$/i.exec(
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

function long(ms, lang, showMS) {
  let msAbs = Math.abs(ms);
  let days = Math.floor(msAbs / d);
  let hours = Math.floor((msAbs % (d)) / (h));
  let minutes = Math.floor((msAbs % (h)) / (m));
  let seconds = Math.floor(msAbs % (m) / (s));
  let milliseconds = msAbs % (s);

  let süre = ""

  if (days > 0) {
    süre += sEkle(ms, msAbs, d, days + " gün", days + " day", lang) + " ";
  }

  if (hours > 0) {
    süre += sEkle(ms, msAbs, h, hours + " saat", hours + " hour", lang) + " ";
  }

  if (minutes > 0) {
    süre += sEkle(ms, msAbs, m, minutes + " dakika", minutes + " minute", lang) + " ";
  }

  if (seconds > 0 && !showMS) {
    süre += sEkle(ms, msAbs, s, seconds + " saniye", seconds + " second", lang) + " ";
  } else if (showMS && (msAbs > 0 || seconds > 0)) {
    if (milliseconds > 0) {
      süre += sEkle(ms, msAbs, 1, milliseconds + " milisaniye", milliseconds + " millisecond", lang) + " ";
    }
  }

  süre = süre.trim().replace(/(^|\s)0\s\w+/g, "").replace(/\s+/g, " ");

  return süre;
}

function short(ms, lang, showMS) {
  let msAbs = Math.abs(ms);
  let days = Math.floor(msAbs / d);
  let hours = Math.floor((msAbs % (d)) / (h));
  let minutes = Math.floor((msAbs % (h)) / (m));
  let seconds = Math.floor(msAbs % (m) / (s));
  let milliseconds = msAbs % (s);

  let süre = "";

  if (days > 0) {
    süre += sEkleme(ms, msAbs, d, days + "g", days + "d", lang) + " ";
  }

  if (hours > 0) {
    süre += sEkleme(ms, msAbs, h, hours + "sa", hours + "h", lang) + " ";
  }

  if (minutes > 0) {
    süre += sEkleme(ms, msAbs, m, minutes + "dk", minutes + "m", lang) + " ";
  }

  if (seconds > 0 && !showMS) {
    süre += sEkleme(ms, msAbs, s, seconds + "sn", seconds + "s", lang) + " ";
  } else if (showMS && (msAbs > 0 || seconds > 0)) {
    if (milliseconds > 0) {
      süre += sEkleme(ms, msAbs, 1, milliseconds + "ms", milliseconds + "ms", lang) + " ";
    }
  }

  return süre.trim();
}

function sEkle(ms, msAbs, n, nameTr, nameEn, lang) {
  if (lang === 'tr') {
    return nameTr;
  } else if (lang === 'en') {
    var isPlural = msAbs >= n * 1.5;
    return nameEn + (isPlural ? 's' : '');
  }
}

function sEkleme(ms, msAbs, n, nameTr, nameEn, lang) {
  if (lang === 'tr') {
    return nameTr;
  } else if (lang === 'en') {
    return nameEn;
  }
}
