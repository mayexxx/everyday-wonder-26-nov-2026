import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const text = 'The refrigerator abruptly cuts its low, mechanical prayer, leaving a silence so sudden it feels like a heavy coat falling off your shoulders.';

if (text.includes('\r') || text.split('\n').length !== 1 || Array.from(text).length < 1 || Array.from(text).length > 199) {
  throw new Error('Invalid entry text');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text + '\n');
if (!readFileSync('/output/entry.txt').equals(Buffer.from(text + '\n', 'utf8'))) {
  throw new Error('Entry verification failed');
}
