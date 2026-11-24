import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Grandma — the single word my grandma would text about AI.
//
// "robut": the way she'd type "robot". Warm, a little baffled, and funny
// in a single typo — exactly how grandma texts her grandchild about the
// strange new machine that answers questions.
const WORD = "robut";

// The gate only takes 1–30 characters of non-blank UTF-8 text, so the
// program checks its own word before writing it out.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim() === "") {
  throw new Error("word must be 1-30 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
