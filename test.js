const djs = require('./file/index');
const token = 'mzr';

setTimeout(() => {
    var sonuc = djs.divide(50, 10);
    console.log(sonuc + ' Divide ✔')
}, 1000);

setTimeout(() => {
    var sonuc = djs.raise(5, 5);
    console.log(sonuc + ' Raise ✔')
}, 2000);

setTimeout(() => {
    var sonuc = djs.calculate(10, 100);
    console.log('%' + sonuc + ' Percent ✔')
}, 3000);

setTimeout(() => {
    var sonuc = djs.random(10, 5);
    console.log(sonuc + ' Random ✔')
}, 4000);

setTimeout(() => {
    var sonuc = djs.shortNumber(7403);
    console.log(sonuc + ' ShortNumber ✔')
}, 5000);

setTimeout(() => {
    var sonuc = djs.mcmotd(`play.craftrise.tc`)
    console.log(sonuc)
}, 6000);

setTimeout(() => {
    djs.slashBuilder;
}, 7000);

setTimeout(() => {
    var sonuc = djs.version;
    console.log(sonuc)
}, 8000);