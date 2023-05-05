import { report } from './common.mjs';

(async function test() {
  await new Promise(res => setTimeout(res, 2e3));

  const { getData } = await import('./build/module-c.mjs');
  report('c', 'loaded');

  console.log(getData().states.features.length);
  report('c', 'executed');

  await new Promise(res => setTimeout(res, 10e3));
  report('c', 'after 10s pause');

  await new Promise(res => setTimeout(res, 20e3));
  report('c', 'after 20s pause');
})();
