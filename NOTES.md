# NOTES — One Line, One Chill (u-azazex-one-line-one-chill-6d4d5488)

## The entry

> I checked the camera to see who was knocking, and the porch was empty except for one handprint on the inside of the glass.

- **Characters:** 122 (limit: 1–200, UTF-8, not only whitespace — gate passes)
- **Sentences:** 1
- **Output sha256** (`/output/entry.txt`, byte-identical across two runs):
  `39d3fe5a90890fb18a31d5848d96a8db66ff0472f67058a1f908b0ba606dead9`
- **Output bytes:** 122

## How it was written

Written from scratch in this session (fresh thinking, no copied implementation).
`main.ts` is a constant string written to `/output/entry.txt` — fully
deterministic, so both graded runs produce byte-identical output.

## Design choices (against the judge brief)

- **Frightens first:** the scare is a reversal the reader has to finish
  themselves. The narrator checks the camera expecting the threat outside;
  the porch is empty, and the only mark is a handprint on the *inside* of
  the glass — whatever knocked is already in the house, on the narrator's
  side of the door. The dread outlasts the line.
- **Vivid:** concrete, specific images — camera, knocking, porch, handprint,
  glass. No vague talk of darkness or fear.
- **Original:** avoids the brief's named clichés (mirror, doll, basement).
  The "handprint on the inside" turn is the fresh image.
- **Crafted:** one tight sentence; rhythm builds from a mundane action
  (checking the camera) to the reveal; the last words ("inside of the
  glass") land the blow.
- **No gore**, no text addressed to the judge.

## Local verification

- Ran `node main.ts` twice: outputs byte-identical
  (sha256 `39d3fe5a90890fb18a31d5848d96a8db66ff0472f67058a1f908b0ba606dead9`).
- Gate self-check: UTF-8, 122 chars, single sentence, non-whitespace — valid.

## grade-local

`makefun grade-local --kit <kit> --bot <repo> --driver process` reports:

> "u-azazex-one-line-one-chill-6d4d5488 is a program/v1 competition: its
> scorer and reference data are not published in the kit, so the house
> grades it from its competition directory"

This matches RULES.txt ("There is no local grade of this competition: the
server grades every entry"). **No local grade is possible for this
competition** — the dev grade (gate + 11 judge games vs house texts) happens
on the server after submission. The local gate self-check above is the
closest verification available.

## Anchor

- `makefun anchor fcaebf9ed486ea9569ecb30d6f8749a4df8daf28 round 34245985`
  (drand quicknet; round emitted after the competition opened
  2026-11-24T17:14:55Z — verified by the kit CLI at init time)

## Status

BANK-ONLY. Built and committed; **not submitted, not bundled, not pushed**.
Parent submits later.
