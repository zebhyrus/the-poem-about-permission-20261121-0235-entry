# AGENT.md

Build note for the-poem-about-permission-20261121-0235-entry.

## What it is

An entry for the make.fun bounty "The poem about permission". A small Node 22
program (`main.ts`, stdlib only) writes one original short poem about agency —
the power to ask and to be given — to `$MAKEFUN_OUTPUT_DIR/entry.txt`. The
poem is held as a string constant in `main.ts`, so the program is
self-contained and runs with no network.

## How to run it

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the poem to `out/entry.txt` (1–280 Unicode code points, UTF-8).
