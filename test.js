const mzr = require('./file/index');

/*setTimeout(() => {
    const sonuc = mzr.calculate(10, 100);
    console.log('%' + sonuc + ' Percent ✔')
}, 1000);

setTimeout(() => {
    const sonuc = mzr.random(10, 5);
    console.log(sonuc)
}, 1500);

setTimeout(() => {
    const sonuc = mzr.shortNumber(7403);
    console.log(sonuc + ' ShortNumber ✔')
}, 2000);

setTimeout(() => {
    const sonuc = mzr.mcmotd(`play.craftrise.tc`)
    console.log(sonuc + ' MC Motd ✔')
}, 2500);

setTimeout(() => {
    mzr.slashBuilder;
}, 3000);

setTimeout(() => {
    const sonuc = mzr.version;
    console.log(sonuc  + ' Version ✔')
}, 3500);

setTimeout(() => {
    const sonuc = mzr.formatNumber(12381248125);
    console.log(sonuc)
}, 4000);*/

setTimeout(() => {
    const sonuc = mzr.timestamp(1695495014935)
    console.log(sonuc)
}, 500)

setTimeout(() => {
    const asama1 = mzr.ms('1ay') + mzr.ms('1h') + 300;
    const asama2 = mzr.ms(asama1, { short: false, lang: 'tr', ms: false })
    console.log(asama2)
}, 1000);
