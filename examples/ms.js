/*
Times: [ms, s, m, h, d, w, mo, y]

ms = millisecond
s = second (1s = 1000ms)
m = minute (1m = 60s)
h = hour (1h = 60m)
d = day (1d = 24h)
w = week (1w = 7d)
mo = month (1mo = 30d)
y = year (1y = 365d)
*/

const { ms } = require('mzrdjs');

const myTime = 2682061000; // 31d 1h 1m 1s

ms('1.5m') // 90000 (MS)
ms(90300) // 1 minutes 30 seconds
ms(90300, { short: true }) // 1m 30s
ms(90300, { units: ['ms', 's', 'm'] }) // 1 minutes 30 seconds 300 milliseconds
ms(90300, { short: true, units: ['ms', 's', 'm'] }) // 1m 30s 300ms
ms(myTime, { short: true, largest: 2 }) // 31d 1h


// For Turkish

/*
Zamanlar: [ms, sn, dk, sa, g, hf, ay, y]

ms = milisaniye
sn = saniye (1sn = 1000ms)
dk = dakika (1dk = 60sn)
sa = saat (1sa = 60dk)
g = gün (1g = 24sa)
hf = hafta (1hf = 7g)
ay = ay (1ay = 30g)
y = yıl (1y = 365g)
*/

const { ms } = require('mzrdjs');

const zaman = 2682061000; // 31g 1sa 1dk 1sn

ms('1.5m') // 90000 (MS)
ms(90300, { lang: 'tr' }) // 1 dakika 30 saniye
ms(90300, { short: true, lang: 'tr' }) // 1dk 30sn
ms(90300, { units: ['ms', 's', 'm'], lang: 'tr' }) // 1 dakika 30 saniye 300 milisaniye
ms(90300, { short: true, units: ['ms', 's', 'm'], lang: 'tr' }) // 1dk 30sn 300ms
ms(zaman, { short: true, largest: 2, lang: 'tr' }) // 31g 1sa