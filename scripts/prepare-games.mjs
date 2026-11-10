import { readFile, writeFile } from 'node:fs/promises'

for (const [game, build] of [['duneloom', 'WebPortfolio'], ['versatile-hero', 'WebBeta']]) {
  const parts = await Promise.all(
    [1, 2].map(n => readFile(new URL(`../assets/${game}/data.part${n}`, import.meta.url))),
  )
  await writeFile(new URL(`../public/${game}/play/Build/${build}.data.unityweb`, import.meta.url), Buffer.concat(parts))
}
