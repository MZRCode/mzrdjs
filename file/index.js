module.exports = {
  divide: function(value,value2) {
    return value/value2
  },
  raise: function(value,value2) {
    return value**value2
  },
  calculate: function(value,value2) {
    if (value2===0) {
      throw new TypeError("Second value cannot be \"0\" for percentage calculation.");
  }
  return (value/value2)*100;
  },
  random: function(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
  },
  shortNumber: function(number) {
    if (number>=1e36) {
        return parseFloat((number/1e33).toFixed(0))+'Dc';
    } else if (number>=1e30) {
        return parseFloat((number/1e30).toFixed(0))+'N';
    } else if (number>=1e27) {
        return parseFloat((number/1e27).toFixed(0))+'Oc';
    } else if (number>=1e24) {
        return parseFloat((number/1e24).toFixed(0))+'Sp';
    } else if (number>=1e21) {
        return parseFloat((number/1e21).toFixed(0))+'Sx';
    } else if (number>=1e18) {
        return parseFloat((number/1e18).toFixed(0))+'Qn';
    } else if (number>=1e15) {
        return parseFloat((number/1e15).toFixed(0))+'Q';
    } else if (number>=1e12) {
        return parseFloat((number/1e12).toFixed(0))+'T';
    } else if (number>=1e9) {
        return parseFloat((number/1e9).toFixed(0))+'B';
    } else if (number>=1e6) {
        return parseFloat((number/1e6).toFixed(1))+'M';
    } else if (number >= 10000 && number <= 999999) {
        return parseFloat((number / 1000).toFixed(1)) + 'k';
    }
    return number.toString();
  },
  mcmotd: function(ip) {
    if (ip.length<10) {
      throw new TypeError("The typed Minecraft ip cannot be shorter than \"10\" characters.");
    }
    return `http://status.mclive.eu/${ip}/${ip}/25565/banner.png`
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
}
