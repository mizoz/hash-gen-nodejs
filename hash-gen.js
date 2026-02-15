#!/usr/bin/env node
/** Hash generator */
const crypto=require('crypto'),fs=require('fs');
const a=process.argv.slice(2);
if(!a[0]){console.log('Usage: hash-gen.js <string|file> [--algo md5|sha1|sha256]');process.exit(1);}
let algo='sha256';if(a.includes('--algo=')){algo=a.find(x=>x.startsWith('--algo=')).split('=')[1];}
const data=fs.existsSync(a[0])?fs.readFileSync(a[0]):a[0];
console.log(`${algo}: ${crypto.createHash(algo).update(data).digest('hex')}`);
