// News-image entry for 24 November 2026 (Node 22, standard library only):
// the poster is the entry.png beside this file, and the program copies it
// to /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB
// and 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const out = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), out);
// Self-check: the gate needs at most 1 MiB; log the copied size for the record.
console.error(`entry.png copied to ${out} (${statSync(out).size} bytes)`);
