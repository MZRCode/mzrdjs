const { generatePassword } = require('mzrdjs');

generatePassword({ length: 16 }) // uHApSAqxZnVTQwJS
generatePassword({ length: 16, numbers: true }) // aHE77FEx1DWG6Phq
generatePassword({ length: 16, lowercase: true }) // rCLIvmkVhjMOuLyb
generatePassword({ length: 16, uppercase: true }) // ZpWrtSScyrKenMTL
generatePassword({ length: 16, symbols: true }) // cH]Uht=ypIK^@oKW
generatePassword({ length: 16, excludeSimilarCharacters: true }) // MZHMveJCXBmRsTtf
generatePassword({ length: 16, allLowercase: true }) // aswsoykueheutmxc
generatePassword({ length: 16, allUppercase: true }) // AXGWPFGQHUJKDQKS