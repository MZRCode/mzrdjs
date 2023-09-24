<div align="center">
<p>
   <a href="https://nodei.co/npm/mzrdjs/"><img src="https://nodei.co/npm/mzrdjs.png?downloads=true&stars=true" alt="NPM info" /></a>
 </p>
<p>
    <a href="https://www.npmjs.com/package/mzrdjs"><img src="https://img.shields.io/npm/dt/mzrdjs.svg?style=flat-square" alt="Download" /></a>
    <a href="https://www.npmjs.com/package/mzrdjs"><img src="https://img.shields.io/npm/dw/mzrdjs.svg?style=flat-square" alt="Download" /></a>
    <a href="https://www.npmjs.com/package/mzrdjs"><img src="https://img.shields.io/npm/dm/mzrdjs.svg?style=flat-square" alt="Download" /></a>
    <a href="https://www.npmjs.com/package/mzrdjs"><img src="https://img.shields.io/npm/l/mzrdjs.svg?style=flat-square" alt="License" /></a>
 </p>
</div>

# What's new in 0.0.15?
- Added converting string time to milliseconds! 
- Fixed bugs in types!
- Fixed bugs in short ms!
- Fixed bugs in long ms!
- Re-named addNumberDot function to formatNumber!

# Features

```js
const mzr = require("mzrdjs")

mzr.version // reflects the version of mzrdjs.
mzr.calculate(20, 200) // It takes the percentage of the number A to the number B.
mzr.random(5, 10) // Generates a random number between 5 and 10, inclusive.
mzr.shortNumber(112394) // Represents 112394 as 112.3k; 112000 it would be represented as 112k.
mzr.mcmotd('serverIp') // Generates illustrated and colored MOTD for Minceraft servers.
mzr.timestamp(1695495014935) // Changed the normal timestamp to the timestamp for Discord.
mzr.formatNumber(12381248125) // The numbers will be more readable because it adds a dot.
mzr.ms(60000, { short: true, lang: 'en', ms: true }) // {} is not mandatory. Supports Turkish (TR) and English (EN) languages.
mzr.ms('1m') // Converts the time unit you specify to milliseconds.
```
If you have any questions, you can join my [Discord server](https://discord.gg/ktVdQYrtXF).

# Özellikler

```js
const mzr = require("mzrdjs")

mzr.version // mzrdjs sürümünü yansıtır.
mzr.calculate(20, 100) // A sayısının B sayısına yüzdesini alır.
mzr.random(5, 10) // 5 ile 10 arasında (5 ve 10 dahil) rastgele bir sayı oluşturur.
mzr.shortNumber(112394) // 112394'ü 112.3k şeklinde yansıtılır. 112000 olsaydı 112k olarak yansırdı.
mzr.mcmotd('serverIp') // Minecraft sunucuları için resimli ve renkli MOTD oluşturur.
mzr.timestamp(1695495014935) // Normal timestamp'i Discord için olan timestamp'e çevirir.
mzr.formatNumber(12381248125) // Sayılara düzgün bir şekilde olacak şekilde nokta ekler.
mzr.ms(60000, { short: true, lang: 'tr', ms: true }) // {} içinde olanlar zorunlu değildir. Türkçe (TR) ve İngilizce (EN) dillerini destekler.
mzr.ms('1dk') // Belirlediğiniz zaman birimini milisaniyeye çevirir.
```
Herhangi bir sorunuz varsa, [Discord sunucuma](https://discord.gg/ktVdQYrtXF) katılabilirsiniz.

# Examples
```js
const mzr = require('mzrdjs');
```
## Version
```js
console.log(mzr.version); // 0.0.14
```
## Calculate
```js
mzr.calculate(20, 200); // 10
```
## Random
```js
mzr.random(5, 10); // 5, 6, 7, 8, 9, 10
```
## Short Number
```js
mzr.shortNumber(28475); // 28.4k
mzr.shortNumber(28000); // 28k
```
## McMotd
```js
mzr.mcmotd('play.hypixel.net'); // Hypixel Motd
```
## Timestamp
```js
mzr.timestamp(1695495014935); // 1695495014, <t:1695495014:R> = x xxx ago
```
## Add Number Dot
```js
mzr.formatNumber(12381248125); // 12.381.248.125
```
## MS
```js
// Valid times: [ms, s, m, h, d, w, y]
// Geçerli Zamanlar: [ms, sn, dk, sa, g, hf, y] (sa = saat, g = gün, hf = hafta, y = yıl)

mzr.ms('1.5m') // 90000
mzr.ms('1.5dk') // 90000
mzr.ms(90300) // 1 minutes 30 seconds
mzr.ms(90300, { short: true }) // 1m 30s
mzr.ms(90300, { lang: 'tr' }) // 1 dakika 30 saniye
mzr.ms(90300, { ms: true }) // 1 minutes 30 seconds 300 milliseconds
mzr.ms(90300, { short: true, lang: 'tr', ms: true }) // 1dk 30sn 300ms
mzr.ms(90300, { short: true, lang: 'en', ms: true }) // 1m 30s 300ms
```
