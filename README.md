# MZR.djs

![Download](https://img.shields.io/npm/dt/mzrdjs.svg?style=flat-square) ![Download](https://img.shields.io/npm/dw/mzrdjs.svg?style=flat-square) ![Download](https://img.shields.io/npm/dm/mzrdjs.svg?style=flat-square) ![License](https://img.shields.io/npm/l/mzrdjs.svg?style=flat-square)
<div align="center">
<p>
    <a href="https://www.npmjs.com/package/mzrdjs"><img src="https://img.shields.io/npm/dt/mzrdjs.svg?style=flat-square" alt="Download" /></a>
    <a href="https://www.npmjs.com/package/mzrdjs"><img src="https://img.shields.io/npm/dw/mzrdjs.svg?style=flat-square" alt="Download" /></a>
    <a href="https://www.npmjs.com/package/mzrdjs"><img src="https://img.shields.io/npm/dm/mzrdjs.svg?style=flat-square" alt="Download" /></a>
    <a href="https://www.npmjs.com/package/mzrdjs"><img src="https://img.shields.io/npm/l/mzrdjs.svg?style=flat-square" alt="License" /></a>
 </p>
<p>
   <a href="https://nodei.co/npm/mzrdjs/"><img src="https://nodei.co/npm/selfbot-discord.png?downloads=true&stars=true" alt="NPM info" /></a>
 </p>
</div>

# What's new in 0.0.10?
- Fixed Bugs
- Removed Add [+] function
- Removed Substract [-] function
- Removed Multiply [*] function
- Added Minceraft illustrated + colored motd system!

# Features

```js
const mzr = require("mzrdjs")

mzr.divide(10, 5) // Divides 10 by 5.
mzr.raise(5, 5) // Takes the 5th power of 5.
mzr.calculate(20, 200) // What percentage is number A of number B?
mzr.random(5, 10) // Generates a random number between 5 and 10, inclusive.
mzr.shortNumber(112394) // Represents 112394 as 112.3k; if it were 112000, it would be represented as 112k.
mzr.mcmotd('serverIp') // Generates illustrated and colored MOTD for Minceraft servers.
// When using the McMotd function, i recommend writing it in the .setImage in the embed.
```
If you have any questions, you can join my [Discord server](https://discord.gg/mzrdev).


# Özellikler

```js
const mzr = require("mzrdjs")

mzr.divide(10, 5) // 10'u 5'e böler.
mzr.raise(5, 5) // 5'in 5. üssünü alır.
mzr.calculate(20, 100) // A sayısı, B sayısının yüzde kaçıdır?
mzr.random(5, 10) // 5 ile 10 arasında (5 ve 10 dahil) rastgele bir sayı oluşturur.
mzr.shortNumber(112394) // 112394'ü 112.3k şeklinde yansıtılır. Eğer ki 112000 olsaydı 112k olarak yansıtılırdı.
mzr.mcmotd('serverIp') // Minecraft sunucuları için resimli ve renkli MOTD oluşturur.
// McMotd fonksyonunu kullanırken, bunu embed içindeki .setImage içine yazmanızı öneririm.
```
Herhangi bir sorunuz varsa, [Discord sunucuma](https://discord.gg/mzrdev) katılabilirsiniz.

# Examples

## Divide
```js
const divide = mzr.divide(50, 5);
console.log(divide); // 10
```
## Raise
```js
const raise = mzr.raise(5, 5);
console.log(raise); // 3125
```
## Calculate
```js
const calculate = mzr.calculate(20, 200);
console.log(calculate); // 10
```
## Random
```js
const random = mzr.random(5, 10);
console.log(random); // 5, 6, 7, 8, 9, 10
```
## ShortNumber
```js
const shortNumber = mzr.shortNumber(28475);
console.log(shortNumber); // 28.4k

var shortNumber2 = mzr.shortNumber(28000);
console.log(shortNumber2); // 28k
```
## McMotd
```js
var serverIp = mzr.mcmotd('play.hypixel.net');
console.log(serverIp); // Hypixel's illustrated + colored MOTD
```
