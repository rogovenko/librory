import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const dirs = [
  'public/projects/nidum',
  'public/projects/asterally',
  'public/projects/gold',
  'public/projects/cosmic',
]

for (const dir of dirs) {
  const files = fs.readdirSync(dir).filter((file) => file.toLowerCase().endsWith('.png'))

  for (const file of files) {
    const src = path.join(dir, file)
    const dest = path.join(dir, file.replace(/\.png$/i, '.webp'))
    const before = fs.statSync(src).size
    const info = await sharp(src)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(dest)

    console.log(
      `${file} ${Math.round(before / 1024)}KB -> ${path.basename(dest)} ${Math.round(info.size / 1024)}KB ${info.width}x${info.height}`,
    )
  }
}
