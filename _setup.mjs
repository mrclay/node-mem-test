import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { memoryUsage } from 'node:process';

const headers = [
  'test',
  'report-name',
  ...Object.keys(memoryUsage()),
];
mkdirSync('build', { recursive: true });
writeFileSync('build/report.csv', headers.join(',') + '\n');

const countries = JSON.parse(readFileSync('countries.json').toString());
const states = JSON.parse(readFileSync('states.json').toString());
const data = {
  countries,
  states,
  countries1: countries,
  states1: states,
  countries2: countries,
  states2: states,
  countries3: countries,
  states3: states,
};

const json = JSON.stringify(data);

writeFileSync('build/module-a.mjs', `export const data = ${json};`);
writeFileSync('build/module-b.mjs', `export function getData() { return ${json}; }`);
writeFileSync('build/module-c.mjs', `export function getData() { return JSON.parse(${JSON.stringify(json)}); }`);
