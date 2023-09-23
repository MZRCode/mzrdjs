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

# What's new in 0.0.13?
- Added mzrdjs module versioning!
- Added Discord Timestamp!!!
- Removed split function!
- raise function removed!
- addNumberDot function added!
- MS System added!!! (Turkish and English language supported)

# Features

```js
const djs = require("mzrdjs")

djs.version // reflects the version of mzrdjs.
djs.calculate(20, 200) // It takes the percentage of the number A to the number B.
djs.random(5, 10) // Generates a random number between 5 and 10, inclusive.
djs.shortNumber(112394) // Represents 112394 as 112.3k; 112000 it would be represented as 112k.
djs.mcmotd('serverIp') // Generates illustrated and colored MOTD for Minceraft servers.
djs.timestamp(1695495014935) // Changed the normal timestamp to the timestamp for Discord.
djs.addNumberDot(12381248125) // The numbers will be more readable because it adds a dot.
djs.ms(60000, { short: true, lang: 'en', ms: true }) // {} is not mandatory. Only supports turkish (tr) and english (en) languages.
```
If you have any questions, you can join my [Discord server](https://discord.gg/ktVdQYrtXF).

# Özellikler

```js
const djs = require("mzrdjs")

djs.version // mzrdjs sürümünü yansıtır.
djs.calculate(20, 100) // A sayısının B sayısına yüzdesini alır.
djs.random(5, 10) // 5 ile 10 arasında (5 ve 10 dahil) rastgele bir sayı oluşturur.
djs.shortNumber(112394) // 112394'ü 112.3k şeklinde yansıtılır. 112000 olsaydı 112k olarak yansırdı.
djs.mcmotd('serverIp') // Minecraft sunucuları için resimli ve renkli MOTD oluşturur.
djs.timestamp(1695495014935) // Normal timestamp'i Discord için olan timestamp'e çevirir.
djs.addNumberDot(12381248125) // Sayılara düzgün bir şekilde olacak şekilde nokta ekler.
djs.ms(60000, { short: true, lang: 'tr', ms: true }) // {} içinde olanlar zorunlu değildir. Sadece tr ve en dillerini destekler.
```
Herhangi bir sorunuz varsa, [Discord sunucuma](https://discord.gg/ktVdQYrtXF) katılabilirsiniz.

# Examples

## Version
```js
console.log(djs.version); // 0.0.13
```
## Calculate
```js
const calculate = djs.calculate(20, 200);
console.log(calculate); // 10
```
## Random
```js
const random = djs.random(5, 10);
console.log(random); // 5, 6, 7, 8, 9, 10
```
## Short Number
```js
const shortNumber = djs.shortNumber(28475);
console.log(shortNumber); // 28.4k

var shortNumber2 = djs.shortNumber(28000);
console.log(shortNumber2); // 28k
```
## McMotd
```js
var serverIp = djs.mcmotd('play.hypixel.net');
console.log(serverIp); // Hypixel Motd
```
## Timestamp
```js
var timestamp = djs.timestamp(1695495014935);
console.log(timestamp); // 1695495014, <t:1695495014:R> = x xxx ago
```
## Add Number Dot
```js
var addNumberDot = djs.addNumberDot(12381248125);
console.log(addNumberDot); // 12.381.248.125
```
## MS
```js
const time = 90300; // 1 minute 30 seconds (In milliseconds)

var ms1 = djs.ms(time) // 1 minutes 30 seconds
var ms2 = djs.ms(time, { short: true }) // 1m 30s
var ms3 = djs.ms(time, { lang: 'tr' }) // 1 dakika 30 saniye
var ms4 = djs.ms(time, { ms: true }) // 1 minutes 30 seconds 300 milliseconds
var ms5 = djs.ms(time, { short: true, lang: 'tr', ms: true }) // 1dk 30sn 300ms
var ms6 = djs.ms(time, { short: true, lang: 'en', ms: true }) // 1m 30s 300ms
```
