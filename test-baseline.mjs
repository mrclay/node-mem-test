import { report } from './common.mjs';
import { writeFileSync } from 'node:fs';
import { memoryUsage } from 'node:process';

const headers = [
  'test',
  'report-name',
  ...Object.keys(memoryUsage()),
];
writeFileSync('report.csv', headers.join(',') + '\n');

(async function test() {
  await new Promise(res => setTimeout(res, 2e3));

  //const { data } = await import('./module-a.mjs');
  report('baseline', 'not loaded');

  await new Promise(res => setTimeout(res, 10e3));

  report('baseline','after 10s pause');
})();
