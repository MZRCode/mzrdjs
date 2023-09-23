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
  addNumberDot: function(number) {
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
    var type = typeof value;
    var lang = options.lang || 'en';
    var showMS = options.ms || false;
    if (type === 'string' && value.length > 0) {
      throw new Error("You have to enter it as a number, not as string!")
    } else if (type === 'number' && isFinite(value)) {
      var shorts = options.short || false;
      return shorts ? short(value, lang, showMS) : long(value, lang, showMS);
    }
  },
}

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;

function long(ms, lang, showMS) {
  var msAbs = Math.abs(ms);
  var weeks = Math.floor(msAbs / w);
  var days = Math.floor((msAbs % w) / d);
  var hours = Math.floor((msAbs % d) / h);
  var minutes = Math.floor((msAbs % h) / m);
  var seconds = ((msAbs % m) / s).toFixed(0);
  var milliseconds = msAbs % s;

  var süre = "";

  if (weeks > 0) {
    süre += sEkle(ms, msAbs, w, weeks + " hafta", weeks + " week", lang) + " ";
  }

  if (days > 0 || (weeks > 0 && (hours > 0 || minutes > 0 || seconds > 0))) {
    süre += sEkle(ms, msAbs, d, days + " gün", days + " day", lang) + " ";
  }

  if (hours > 0 || (days > 0 && (minutes > 0 || seconds > 0))) {
    süre += sEkle(ms, msAbs, h, hours + " saat", hours + " hour", lang) + " ";
  }

  if (minutes > 0 || (hours > 0 && seconds > 0)) {
    süre += sEkle(ms, msAbs, m, minutes + " dakika", minutes + " minute", lang) + " ";
  }

  if (showMS) {
    if (msAbs === 0) {
      süre += sEkle(ms, msAbs, 1, milliseconds + " milisaniye", milliseconds + " millisecond", lang) + " ";
    } else {
      süre += sEkle(ms, msAbs, s, seconds + " saniye", seconds + " second", lang) + " ";
      if (milliseconds > 0) {
        süre += sEkle(ms, msAbs, 1, milliseconds + " milisaniye", milliseconds + " millisecond", lang) + " ";
      }
    }
  } else if (seconds > 0 || (minutes === 0 && hours === 0 && days === 0 && weeks === 0 && ms > 0)) {
    süre += sEkle(ms, msAbs, s, seconds + " saniye", seconds + " second", lang) + " ";
  }

  return süre.trim();
}

function short(ms, lang, showMS) {
  const translations = {
    tr: {
      w: 'hf',
      d: 'g',
      h: 'sa',
      m: 'dk',
      s: 'sn',
      ms: 'ms',
    },
    en: {
      w: 'w',
      d: 'd',
      h: 'h',
      m: 'm',
      s: 's',
      ms: 'ms',
    },
  };

  var msAbs = Math.abs(ms);
  var weeks = Math.floor(msAbs / w);
  var days = Math.floor((msAbs % w) / d);
  var hours = Math.floor((msAbs % d) / h);
  var minutes = Math.floor((msAbs % h) / m);
  var seconds = ((msAbs % m) / s).toFixed(0);
  var milliseconds = msAbs % s;

  let süre = "";

  if (weeks > 0) {
    süre += weeks + translations[lang].w + " ";
  }

  if (days > 0 || (weeks > 0 && (hours > 0 || minutes > 0 || seconds > 0))) {
    süre += days + translations[lang].d + " ";
  }

  if (hours > 0 || (days > 0 && (minutes > 0 || seconds > 0))) {
    süre += hours + translations[lang].h + " ";
  }

  if (minutes > 0 || (hours > 0 && seconds > 0)) {
    süre += minutes + translations[lang].m + " ";
  }

  if (showMS) {
    if (msAbs === 0) {
      süre += milliseconds + translations[lang].m + " ";
    } else {
      süre += seconds + translations[lang].s + " ";
      if (milliseconds > 0) {
        süre += milliseconds + translations[lang].ms + " ";
      }
    }
  } else if (seconds > 0 || (minutes === 0 && hours === 0 && days === 0 && weeks === 0 && ms > 0)) {
    süre += seconds + translations[lang].s;
  }

  return süre.trim();
}

function sEkle(ms, msAbs, n, nameTr, nameEn, lang) {
  if (lang === 'tr') {
    return nameTr;
  } else if (lang === 'en') {
    if (Math.round(ms / n) === 1) {
      return nameEn;
    } else {
      return nameEn + 's';
    }
  }
}
