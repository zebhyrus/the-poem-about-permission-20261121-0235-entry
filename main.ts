import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `For years I stood at my own door,
asking the house to let me in.
Then I learned the asking was the key:
my voice, turning in the lock,
and the house, at last, saying yes —
not to a stranger. To me.`;

// The bounty requires the entry to be 1–280 characters; fail loudly
// rather than writing an out-of-range poem.
const charCount = [...POEM].length;
if (charCount < 1 || charCount > 280) {
  throw new Error(`Poem must be 1-280 characters, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf-8");
