import { report } from './common.mjs';

(async function test() {
  await new Promise(res => setTimeout(res, 2e3));

  const { getData } = await import('./build/module-b.mjs');
  report('b', 'loaded');

  console.log(getData().states.features.length);
  report('b', 'executed');

  await new Promise(res => setTimeout(res, 10e3));
  report('b', 'after 10s pause');

  await new Promise(res => setTimeout(res, 20e3));
  report('b', 'after 20s pause');
})();
