const { tdk } = require('mzrdjs');

tdk('kelime').then((veri) => {
    console.log(veri.onay); // true
    console.log(veri.not); // null
    console.log(veri.kelime); // kelime
    console.log(veri.ilkHarf); // k
    console.log(veri.sonHarf); // e
    console.log(veri.lisan); // Arapça kelime
});