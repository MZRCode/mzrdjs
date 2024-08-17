const { analyzeModuleUsage } = require('mzrdjs');

const result = analyzeModuleUsage();
console.log('Used Modules:', result.usedModules);
console.log('Hidden Modules:', result.hiddenModules);
console.log('Unused Modules:', result.unusedModules);
console.log('Hidden Unused Modules:', result.hiddenUnusedModules);