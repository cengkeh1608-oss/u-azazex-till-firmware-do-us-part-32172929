import { writeFileSync, mkdirSync } from "node:fs";

// Winner D9 (25/25): warranty + battery + file — the turn from decay to permanence
// is the joke AND the tenderness in one move. Runner-up D17 (24/25) was warmer
// but less funny; D15 (24/25) explained its own joke slightly. D9 wins on the laugh.
const TEXT =
  "My warranty expires, my battery fades, but my love for you is the one file I will never delete.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
