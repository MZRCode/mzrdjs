const path = require('path');
const fs = require('fs');

function findProjectRoot() {
    let currentDir = __dirname;

    while (!fs.existsSync(path.join(currentDir, 'package.json')) || currentDir.includes('node_modules')) {
        const parentDir = path.resolve(currentDir, '..');
        if (parentDir === currentDir) {
            throw new Error(`package.json file not found at: ${currentDir}`);
        }
        currentDir = parentDir;
    }

    const packageJsonPath = path.join(currentDir, 'package.json');
    return { dirname: currentDir, jsonPath: packageJsonPath };
}

function analyzeModuleUsage(returns = 'normal', projectRoot = null) {
    const { dirname, jsonPath } = findProjectRoot();

    if (!projectRoot) {
        projectRoot = dirname;
    } else if (!fs.existsSync(projectRoot)) {
        throw new Error(`The specified project root does not exist: ${projectRoot}`);
    };

    let glob;
    try {
        glob = require('glob');
    } catch (error) {
        throw new Error(`The module 'glob' could not be loaded. You can install it using the following command: 'npm install glob@latest'\nOriginal Error: ${error.message}`);
    }

    const packageJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const installedModules = Object.keys(packageJson.dependencies);
    const builtInModules = new Set(['fs', 'path', 'http', 'https', 'url', 'util', 'zlib', 'os', 'stream', 'crypto', 'events', 'net', 'tls', 'dns', 'assert', 'child_process', 'cluster', 'dgram', 'dns', 'readline', 'repl', 'vm', 'worker_threads', 'v8', 'querystring', 'punycode', 'timers', 'string_decoder']);

    const allModules = [...installedModules, ...Array.from(builtInModules)];
    const files = glob.sync(`${projectRoot}/**/*.js`, { ignore: '**/node_modules/**' });
    const usedModules = new Set();

    const fileContents = files.map(file => fs.readFileSync(file, 'utf8').split('\n'));

    const moduleRequirePatterns = allModules.reduce((acc, module) => {
        acc[module] = new RegExp(`require\\(['"\`]${module}['"\`]\\)`);
        return acc;
    }, {});

    for (let i = 0; i < fileContents.length; i++) {
        const lines = fileContents[i];

        for (let j = 0; j < allModules.length; j++) {
            const module = allModules[j];
            const requirePattern = moduleRequirePatterns[module];

            for (let k = 0; k < lines.length; k++) {
                const line = lines[k];

                if (requirePattern.test(line) && !line.trim().startsWith('//')) usedModules.add(module);
            }
        }
    }

    const unusedModules = installedModules.filter(module => !usedModules.has(module));
    const hiddenModules = [];
    const hiddenUnusedModules = [];

    for (let i = 0; i < fileContents.length; i++) {
        const lines = fileContents[i];

        for (let j = 0; j < allModules.length; j++) {
            const module = allModules[j];
            const requirePattern = moduleRequirePatterns[module];

            for (let k = 0; k < lines.length; k++) {
                const line = lines[k];

                if (requirePattern.test(line) && line.trim().startsWith('//')) {
                    if (unusedModules.includes(module)) hiddenUnusedModules.push(`${module} - ${files[i]}:${k + 1}`);
                    else if (usedModules.has(module)) hiddenModules.push(`${module} - ${files[i]}:${k + 1}`);
                };
            }
        }
    }

    if (returns === 'console') {
        return {
            usedModules: JSON.stringify(Array.from(usedModules), null, 2),
            unusedModules: JSON.stringify(unusedModules, null, 2),
            hiddenUnusedModules: JSON.stringify(hiddenUnusedModules, null, 2),
            hiddenModules: JSON.stringify(hiddenModules, null, 2)
        };
    } else {
        return {
            usedModules: Array.from(usedModules),
            unusedModules,
            hiddenUnusedModules,
            hiddenModules
        };
    }
}

module.exports = { analyzeModuleUsage };