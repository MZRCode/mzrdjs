const mzr = require('./file/index');
const kontr = require('./file/kelime-oyunu');

setTimeout(() => {
    const sonuc = mzr.calculate(10, 100);
    console.log('%' + sonuc + ' Percent ✔')
}, 500);

setTimeout(() => {
    const sonuc = mzr.random(10, 5);
    console.log(sonuc)
}, 1000);

setTimeout(() => {
    const sonuc = mzr.shortNumber(7403);
    console.log(sonuc + ' ShortNumber ✔')
}, 1500);

setTimeout(() => {
    const sonuc = mzr.mcmotd(`play.craftrise.tc`)
    console.log(sonuc + ' MC Motd ✔')
}, 2000);

setTimeout(() => {
    mzr.slashBuilder;
}, 2500);

/*setTimeout(() => {
    const sonuc = mzr.version;
    console.log(sonuc + ' Version ✔')
}, 3000);*/

setTimeout(() => {
    const sonuc = mzr.formatNumber(12381248125);
    console.log(sonuc)
}, 3000);

setTimeout(() => {
    const sonuc = mzr.timestamp(1695495014935)
    console.log(sonuc)
}, 3500)

setTimeout(() => {
    const asama1 = '1g';
    const asama2 = mzr.ms(asama1);
    const asama3 = mzr.ms(asama2, { lang: 'tr', short: true, units: ['g', 'h', 'dk', 'sn'] })
    console.log(asama3)
}, 4000);

setTimeout(() => {
    kontr.tdk('otobüs').then((veri) => {
        console.log('Onay: ' + veri.onay);
        console.log('Not: ' + veri.not);
        console.log('Kelime: ' + veri.kelime);
        console.log('İlk Harf: ' + veri.ilkHarf);
        console.log('Son Harf: ' + veri.sonHarf);
        console.log('Lisân: ' + veri.lisan);
        console.log('Anlam: ' + veri.anlam);
    });
}, 4500);
