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

## What's new in 1.0.0?
- Scratch from type definitions were written!
- Fixed were errors in the Anti Crash system
- Fixed wrere all potential errors!
- Reduced the number of modules required!

## What's planned for the future?
- Mongodb support will be added to the Leaderbord function

# Features
```js
const mzr = require('mzrdjs');
const { AntiCrash } = require('mzrdjs');

mzr.version // reflects the version of mzrdjs.
mzr.calculate(20, 200) // It takes the percentage of the number A to the number B.
mzr.random(5, 10) // Generates a random number between 5 and 10, inclusive.
mzr.shortNumber(112394) // Represents 112394 as 112.3k; 112000 it would be represented as 112k.
mzr.mcmotd('serverIp') // Generates illustrated and colored MOTD for Minceraft servers.
mzr.timestamp(1695495014935) // Changed the normal timestamp to the timestamp for Discord.
mzr.formatNumber(12381248125) // The numbers will be more readable because it adds a dot.
mzr.ms(60000, { short: true, lang: 'en', largest: 2, units: ['ms', 's', 'm'] }) // {} is not mandatory. Supports Turkish (TR) and English (EN) languages.
mzr.ms('1m') // Converts the time unit you specify to milliseconds.
mzr.tdk('inek') // Ideal for a word game system and its usage is at the bottom. (Special for Turks)
mzr.leaderboard('users', 10, { dot: true }) // It searches the users data and the number in the 2nd part is the maximum limit to be listed. If you are using "_", make it "dot: false"
new AntiCrash().start() // Initializes the system that prevents any error from shutting down your bot.
mzr.generatePassword({ length: 16, numbers: true }) // You can create a custom password generate with many settings.
mzr.generateCode({ length: 16, range: 4 }) // You can create a custom code generate with many settings.
```
If you have any questions, you can join my [Discord server](https://discord.gg/ktVdQYrtXF).

# Özellikler

```js
const mzr = require('mzrdjs');
const { AntiCrash } = require('mzrdjs');

mzr.version // mzrdjs sürümünü yansıtır.
mzr.calculate(20, 100) // A sayısının B sayısına yüzdesini alır.
mzr.random(5, 10) // 5 ile 10 arasında (5 ve 10 dahil) rastgele bir sayı oluşturur.
mzr.shortNumber(112394) // 112394'ü 112.3k şeklinde yansıtılır. 112000 olsaydı 112k olarak yansırdı.
mzr.mcmotd('serverIp') // Minecraft sunucuları için resimli ve renkli MOTD oluşturur.
mzr.timestamp(1695495014935) // Normal timestamp'i Discord için olan timestamp'e çevirir.
mzr.formatNumber(12381248125) // Sayılara düzgün bir şekilde olacak şekilde nokta ekler.
mzr.ms(60000, { short: true, lang: 'tr', largest: 2, units: ['ms', 'sn', 'dk'] }) // {} içinde olanlar zorunlu değildir. Türkçe (TR) ve İngilizce (EN) dillerini destekler.
mzr.ms('1dk') // Belirlediğiniz zaman birimini milisaniyeye çevirir.
mzr.tdk('inek') // Kelime oyunu sistemi için ideal ve kullanımı en aşağıda var.
mzr.leaderboard('users', 10, { dot: true }) // users verisinin içindikileri arar ve 2. kısımdaki sayı, maksimum listelencek limitdir. "_" kullanarak yapıyor iseniz "dot: false" yapınız.
new AntiCrash().start() // Herhangi bir hatanın botunuzu kapatmasını önleyen sistemi başlatır.
mzr.generatePassword({ length: 16, numbers: true }) // Bir çok ayar ile özel şifre oluşturabilirsiniz.
mzr.generateCode({ length: 16, range: 4 }) // Bir çok ayar ile özel kod oluşturabilirsiniz.
```
Herhangi bir sorunuz varsa, [Discord sunucuma](https://discord.gg/ktVdQYrtXF) katılabilirsiniz.

# Examples
```js
const mzr = require('mzrdjs');
```
## Version
```js
console.log(mzr.version); // 1.0.0
```
## Calculate
```js
mzr.calculate(20, 200); // 10
```
## Random
```js
mzr.random(5, 10); // 5 or 6 or 7 or 8 or 9 or 10
```
## Short Number
```js
mzr.shortNumber(28475); // 28.4k
mzr.shortNumber(28000); // 28k
```
## McMotd
```js
mzr.mcmotd('play.hypixel.net'); // https... (Hypixel Motd)
```
## Timestamp
```js
mzr.timestamp(1706218589689); // 1706218604 (Converts ms to seconds)
```
## Format Number
```js
mzr.formatNumber(12381248125); // 12.381.248.125
```
## MS
```js
// EN Time: [ms, s, m, h, d, w, mo, y]
// TR Zaman: [ms, sn, dk, sa, g, hf, ay, y]
const time = 2682061000; // 31d 1h 1m 1s

mzr.ms('1.5m') // 90000
mzr.ms('1.5dk') // 90000
mzr.ms(90300) // 1 minutes 30 seconds
mzr.ms(90300, { short: true }) // 1m 30s
mzr.ms(90300, { lang: 'tr' }) // 1 dakika 30 saniye
mzr.ms(90300, { units: ['ms', 's', 'm'] }) // 1 minutes 30 seconds 300 milliseconds
mzr.ms(90300, { short: true, lang: 'tr', units: ['ms', 'sn', 'dk'] }) // 1dk 30sn 300ms
mzr.ms(90300, { short: true, lang: 'en', units: ['ms', 's', 'm'] }) // 1m 30s 300ms
mzr.ms(time, { short: true, lang: 'en', largest: 2 }) // 31d 1h
mzr.ms(time, { short: true, lang: 'tr', largest: 3 }) // 31g 1sa 1dk
```
## Kelime Oyunu (TDK)
```js
mzr.tdk('kelime').then((veri) => {
   console.log(veri.onay) // true
   console.log(veri.not) // null
   console.log(veri.kelime) // kelime
   console.log(veri.ilkHarf) // k
   console.log(veri.sonHarf) // e
   console.log(veri.lisan) // Arapça kelime
   console.log(veri.anlam) // Bir veya birkaç heceden oluşan, anlamlı ses birliği; söz, sözcük, lügat
})

mzr.tdk('kelime').then((veri) => {
   console.log(veri) // { onay: true, not: null, kelime: 'kelime', ilkHarf: 'k', sonHarf: 'e', lisan: 'Arapça kelime', anlam: 'Bir veya birkaç heceden oluşan, anlamlı ses birliği; söz, sözcük, lügat' }
})
```
## Ledarboard (Only Croxydb)
```js
/* My Database; (I saved it as `users.${userId}`)
   {"users":{"701518625760346172":100,"688100345775521903":85}}
*/
mzr.ledaerboard('users', 10, { dot: true }) // If the number was 1, only mzrdev would appear
/* OutPut;
1.      100     mzrdev
2.      85     supraaa
*/

/* My Database; (I saved it as `users_${userId}`)
   {"users_701518625760346172":100,"users_688100345775521903":85}
*/
mzr.ledaerboard('users', 2) // or do not write this; { dot: false }
/* OutPut;
1.      100     mzrdev
2.      85     supraaa
*/
```
## Anti Crash
```js
// If you do any of the following, your bot will never shut down due to an error.
// Anti Crash system Writes briefly when it reflects an error on the console, but writes in detail when it reflects it on the webhook
new AntiCrash().start() // Initializes the system that prevents any error from shutting down your bot.
new AntiCrash().start() // If an error is received, it reflects the error on the console.
new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' }).setShow().start() // It reflects the error to the console and to the Webhook you wrote.
new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' }).setHide('console').setShow('webhook').start() // It only reflects the error to the Webhook you are writing to.
new AntiCrash().setHide().start() // Reflects nothing to anywhere, acts as if it has never received any errors.
```
## Generate Password
| Name                     | Description                                                           | Default Value |
|--------------------------|-----------------------------------------------------------------------|---------------|
| length                   | Integer, length of password                                           | 15            |
| numbers                  | Boolean, add numbers in password                                      | false         |
| symbols                  | Boolean or String, add symbols in password                            | false         |
| lowercase                | Boolean, add lowercase in password                                    | true          |
| uppercase                | Boolean, use uppercase letters in password                            | true          |
| excludeSimilarCharacters | Boolean, exclude similar chars, like 'i' and 'l'                      | false         |
| allLowercase             | Boolean, Write the password in lowercase                              | false         |
| allUppercase             | Boolean, Write the password in uppercase                              | false         |
```js
mzr.generatePassword({ length: 16 }) // uHApSAqxZnVTQwJS
mzr.generatePassword({ length: 16, numbers: true }) // aHE77FEx1DWG6Phq
mzr.generatePassword({ length: 16, lowercase: true }) // rCLIvmkVhjMOuLyb
mzr.generatePassword({ length: 16, uppercase: true }) // ZpWrtSScyrKenMTL
mzr.generatePassword({ length: 16, symbols: true }) // cH]Uht=ypIK^@oKW
mzr.generatePassword({ length: 16, excludeSimilarCharacters: true }) // MZHMveJCXBmRsTtf
mzr.generatePassword({ length: 16, allLowercase: true }) // aswsoykueheutmxc
mzr.generatePassword({ length: 16, allUppercase: true }) // AXGWPFGQHUJKDQKS
```
## Generate Code
| Name                     | Description                                                           | Default Value |
|--------------------------|-----------------------------------------------------------------------|---------------|
| length                   | Integer, length of code                                               | 16            |
| range                    | Integer, Adjusts the interval distance                                | 4             |
| numbers                  | Boolean, add numbers in code                                          | false         |
| lowercase                | Boolean, add lowercase in code                                        | false         |
| uppercase                | Boolean, use uppercase letters in code                                | false         |
| excludeSimilarCharacters | Boolean, exclude similar chars, like 'i' and 'l'                      | false         |
| symbol                   | String, You change the separation symbol                              | '-'           |
| allLowercase             | Boolean, Write the code in lowercase                                  | false         |
| allUppercase             | Boolean, Write the code in uppercase                                  | true          |
```js
mzr.generateCode({ length: 16 }) // UHAP-SAQX-ZNVT-QWJS
mzr.generateCode({ length: 16, range: 2 }) // UH-AP-SA-QX-ZN-VT-QW-JS
mzr.generateCode({ length: 16, numbers: true }) // AHE7-7FEX-1DWG-6PHQ
mzr.generateCode({ length: 16, lowercase: true }) // RCLI-VMKV-HJMO-ULYB
mzr.generateCode({ length: 16, uppercase: true }) // ZPWR-TSSC-YRKE-NMTL
mzr.generateCode({ length: 16, excludeSimilarCharacters: true }) // MZHM-VEJC-XBMR-STTF
mzr.generateCode({ length: 16, symbol: '/' }) // AGAW/QSZV/RIYJ/ZOQX
mzr.generateCode({ length: 16, allLowercase: true }) // asws-oyku-eheu-tmxc
mzr.generateCode({ length: 16, allUppercase: true }) // AXGW-PFGQ-HUJK-DQKS
```
