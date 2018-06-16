//#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

// Copy potential hooks from root dependencies to app
const hooksSrc = '../../hooks';
const hooksDest = 'hooks';
console.info(`Copying ${hooksSrc} -> ${hooksDest}`);
fs.copySync(hooksSrc, hooksDest);

const beforeWatchSrc = 'tools/xplat-before-watch.js';
const beforeWatchDest = 'hooks/before-watchPatterns/xplat-before-watch.js';
console.info(`Copying ${beforeWatchSrc} -> ${beforeWatchDest}`);
fs.copySync(beforeWatchSrc, beforeWatchDest);
