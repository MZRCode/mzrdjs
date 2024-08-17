const { generateCode } = require('mzrdjs');

generateCode({ length: 16 }) // UHAP-SAQX-ZNVT-QWJS
generateCode({ length: 16, range: 2 }) // UH-AP-SA-QX-ZN-VT-QW-JS
generateCode({ length: 16, numbers: true }) // AHE7-7FEX-1DWG-6PHQ
generateCode({ length: 16, lowercase: true }) // RCLI-VMKV-HJMO-ULYB
generateCode({ length: 16, uppercase: true }) // ZPWR-TSSC-YRKE-NMTL
generateCode({ length: 16, excludeSimilarCharacters: true }) // MZHM-VEJC-XBMR-STTF
generateCode({ length: 16, symbol: '/' }) // AGAW/QSZV/RIYJ/ZOQX
generateCode({ length: 16, allLowercase: true }) // asws-oyku-eheu-tmxc
generateCode({ length: 16, allUppercase: true }) // AXGW-PFGQ-HUJK-DQKS