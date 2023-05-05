import { memoryUsage } from 'node:process';
import { appendFileSync } from 'node:fs';

const baseline = memoryUsage();
// console.log('baseline', baseline);

export function report(test, name) {
  const now = memoryUsage();

  const values = [
    test,
    name,
    ...Object.keys(now).map(key => (now[key] - baseline[key]) / 1024),
  ];

  appendFileSync('report.csv', values.join(',') + '\n' );
}
