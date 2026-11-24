// One Line, One Chill — entry program.
//
// Writes a single sentence of horror to /output/entry.txt.
//
// The line: a quiet, concrete scare built on a reversal. The narrator checks
// the camera expecting the threat to be outside on the porch; the porch is
// empty, and the only mark is a handprint on the *inside* of the glass —
// which means whatever knocked is already in the house, standing on the
// narrator's side of the door. The dread outlasts the sentence because the
// reader has to finish the thought themselves.
//
// One sentence, no gore, no mirror/doll/basement cliché, and the last words
// ("inside of the glass") land the blow.
//
// Word choice: "checked the camera" is mundane and modern, so the scare
// stays grounded; "except for one handprint" withholds the reveal until the
// final clause, letting the last words do the work.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I checked the camera to see who was knocking, and the porch was empty except for one handprint on the inside of the glass.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
