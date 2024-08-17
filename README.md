<div align="center">
<p>
   <a href="#"> <img width=500 src="https://raw.githubusercontent.com/MZRCode/mzrdjs/main/Utils/banner.png"></a>
</p>
<p>
   <a href="https://nodei.co/npm/mzrdjs/"><img src="https://nodei.co/npm/mzrdjs.png?downloads=true&stars=true" alt="NPM info" /></a>
</p>
<p>
    <img src="https://img.shields.io/npm/v/mzrdjs?style=for-the-badge">
    <img src="https://img.shields.io/npm/l/mzrdjs?style=for-the-badge">
    <a href="https://discord.gg/ktVdQYrtXF" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/Discord-%20Support%20Server-7289da?style=for-the-badge&logo=discord"></a>
    <a href="https://www.buymeacoffee.com/mzrdev" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee :)"></a>
 </p>
</div>

## What's new in 1.1.0?
- analyzeModuleUsage function added!
- Minecraft MOTD function moved to mzr-api module!
- Examples folder added to [Github](https://github.com/MZRCode/mzrdjs)!
- Kelime oyununun da bulunan hata fixlenmiştir!
- Kelime oyunundan 'anlam' verisi çıkarılmıştır!

# Features
```js
const mzr = require('mzrdjs');
const { AntiCrash } = require('mzrdjs');

mzr.version // reflects the version of mzrdjs.
mzr.calculate(20, 200) // It takes the percentage of the number A to the number B.
mzr.random(5, 10) // Generates a random number between 5 and 10, inclusive.
mzr.shortNumber(112394) // Represents 112394 as 112.3k; 112000 it would be represented as 112k.
mzr.timestamp(1695495014935) // Changed the normal timestamp to the timestamp for Discord.
mzr.formatNumber(12381248125) // The numbers will be more readable because it adds a dot.
mzr.ms(60000, { short: true, lang: 'en', largest: 2, units: ['ms', 's', 'm'] }) // {} is not mandatory. Supports Turkish (TR) and English (EN) languages.
mzr.ms('1m') // Converts the time unit you specify to milliseconds.
mzr.tdk('inek') // Ideal for a word game system and its usage is at the bottom. (Special for Turks)
new AntiCrash().start() // Initializes the system that prevents any error from shutting down your bot.
mzr.generatePassword({ length: 16, numbers: true }) // You can create a custom password generate with many settings.
mzr.generateCode({ length: 16, range: 4 }) // You can create a custom code generate with many settings.
mzr.analyzeModuleUsage() // Returns you of used, hidden, unused, hidden unused modules. (Only CommonJS)
```
If you have any questions, you can join my [Discord server](https://discord.gg/ktVdQYrtXF).

# Examples
```js
const mzr = require('mzrdjs');
```
## Version
```js
console.log(mzr.version); // 1.1.0
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
})

mzr.tdk('kelime').then((veri) => {
   console.log(veri) // { onay: true, not: null, kelime: 'kelime', ilkHarf: 'k', sonHarf: 'e', lisan: 'Arapça kelime' }
})
```
## Anti Crash
```js
const { AntiCrash } = require('mzrdjs');

// If you do any of the following, your bot will never shut down due to an error.
// Anti Crash system Writes briefly when it reflects an error on the console, but writes in detail when it reflects it on the webhook
new AntiCrash().start() // Initializes the system that prevents any error from shutting down your bot.
new AntiCrash().start() // If an error is received, it reflects the error on the console.
new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' }).setHide().start() // It reflects the error to the console and to the Webhook you wrote.
new AntiCrash({ url: 'DISCORD_WEBHOOK_URL' }).setHide('console').setShow('webhook').start() // It only reflects the error to the Webhook you are writing to.
new AntiCrash().setShow().start() // Reflects nothing to anywhere, acts as if it has never received any errors.
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
## Analyze Module Usage (Only CommonJS)
```js
const usages = mzr.analyzeModuleUsage();

console.log('Used Modules:', usages.usedModules); // Used Modules (Array)
console.log('Hidden Modules:', usages.hiddenModules); // Hidden Modules (Array)
console.log('Unused Modules:', usages.unusedModules); // Unused Modules (Array)
console.log('Hidden Unused Modules:', usages.hiddenUnusedModules); // Hidden Unused Modules (Array)
```
