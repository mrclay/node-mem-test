import { report } from './common.mjs';

(async function test() {
  await new Promise(res => setTimeout(res, 2e3));

  const { data } = await import('./module-a.mjs');
  report('a', 'loaded');

  console.log(data.states.features.length);
  report('a', 'accessed');

  await new Promise(res => setTimeout(res, 10e3));
  report('a', 'after 10s pause');

  await new Promise(res => setTimeout(res, 20e3));
  report('a', 'after 20s pause');
})();
