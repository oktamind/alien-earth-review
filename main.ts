// Alien Field Notes: The Two Day Earth Review — make.fun entry.
// Writes one line to /output/entry.txt: a review of planet Earth left
// by an alien tourist. Deterministic: the same bytes every run.
//
// Why this line: it reads as a real tourist review ("Visited Earth...
// Four stars, would pet again"), with one clean joke — the alien's
// sincere complaint is that Earth's best locals, the dogs, somehow
// aren't in charge — instead of the obvious angles (traffic, gravity,
// money, weather). The verdict and closing remark are the review form,
// and the punch lands at the end. 103 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Visited Earth. Best part: the dogs. Worst part: the dogs aren't in charge. Four stars, would pet again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
