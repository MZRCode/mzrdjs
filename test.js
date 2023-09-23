const mzr = require('./file/index');

setTimeout(() => {
    var sonuc = mzr.calculate(10, 100);
    console.log('%' + sonuc + ' Percent ✔')
}, 1000);

setTimeout(() => {
    var sonuc = mzr.random(10, 5);
    console.log(sonuc)
}, 1500);

setTimeout(() => {
    var sonuc = mzr.shortNumber(7403);
    console.log(sonuc + ' ShortNumber ✔')
}, 2000);

setTimeout(() => {
    var sonuc = mzr.mcmotd(`play.craftrise.tc`)
    console.log(sonuc + ' MC Motd ✔')
}, 2500);

setTimeout(() => {
    var sonuc = mzr.version;
    console.log(sonuc  + ' Version ✔')
}, 3000);

setTimeout(() => {
    var sonuc = mzr.addNumberDot(12381248125);
    console.log(sonuc)
}, 3500);

setTimeout(() => {
    const sure = 1695495014935;
    var sonuc = mzr.timestamp(sure)
    console.log(sonuc)
}, 4000)

setTimeout(() => {
    const sure = 90300;
    var sonuc = mzr.ms(sure, { short: true, lang: 'tr', ms: true });
    console.log(sonuc + ' MS ✔')
}, 4500);
