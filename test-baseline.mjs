import { report } from './common.mjs';

(async function test() {
  await new Promise(res => setTimeout(res, 2e3));

  //const { data } = await import('./build/module-a.mjs');
  report('baseline', 'not loaded');

  await new Promise(res => setTimeout(res, 10e3));

  report('baseline','after 10s pause');
})();
