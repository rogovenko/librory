import { readFile, writeFile } from 'node:fs/promises'

const parts = await Promise.all(
  [1, 2].map(n => readFile(new URL(`../assets/duneloom/data.part${n}`, import.meta.url))),
)
await writeFile(new URL('../public/duneloom/play/Build/WebPortfolio.data.unityweb', import.meta.url), Buffer.concat(parts))
