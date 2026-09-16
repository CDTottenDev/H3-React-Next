import { writeFileSync } from 'node:fs';

writeFileSync('public/version.txt', `${Date.now()}\n`);
