function completeDate(time) {
    const str = `${time}`;

    return str.length === 1 ? `0${str}` : str;
}

function getDate(date) {
    const ansi = require('ansi-colors');

    const [year, month, day, hour, minute, second] = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ].map((time) => completeDate(time));
    const dmy = ansi.greenBright(`${day}.${month}.${year}`);
    const hms = ansi.greenBright(`${hour}:${minute}:${second}`);

    return `[${dmy}] [${hms}]`;
}

function info(...message) {
    const ansi = require('ansi-colors');

    return console.log(`${getDate(new Date())} [${ansi.blueBright('Info')}]: ${message}`);
}

function error(...message) {
    const ansi = require('ansi-colors');

    return console.log(`${getDate(new Date())} [${ansi.redBright('Error')}]: ${message}`);
}

module.exports = { info, error };
