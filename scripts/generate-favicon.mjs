import fs from 'node:fs'
import sharp from 'sharp'

// Same colours and proportions as DiamondMark.vue, just rasterised for
// favicons/app icons where an inline SVG component isn't an option.
const ACCENT_LIGHT = '#5b7a6b'
const ACCENT_DARK = '#8fae9c'
const BG_DARK = '#191918'

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <style>
    .diamond { fill: ${ACCENT_LIGHT}; }
    @media (prefers-color-scheme: dark) {
      .diamond { fill: ${ACCENT_DARK}; }
    }
  </style>
  <polygon class="diamond" points="16,2 30,16 16,30 2,16" />
</svg>
`

fs.writeFileSync('public/favicon.svg', faviconSvg)

const flatFaviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <polygon fill="${ACCENT_LIGHT}" points="16,2 30,16 16,30 2,16" />
</svg>`

const favicon32 = await sharp(Buffer.from(flatFaviconSvg)).resize(32, 32).png().toBuffer()
fs.writeFileSync('public/favicon-32x32.png', favicon32)

// PNG-in-ICO: modern browsers/OSes accept a raw PNG payload inside the ICO
// container, so no extra dependency is needed just to satisfy /favicon.ico.
const iconDir = Buffer.alloc(6)
iconDir.writeUInt16LE(0, 0)
iconDir.writeUInt16LE(1, 2)
iconDir.writeUInt16LE(1, 4)

const entry = Buffer.alloc(16)
entry.writeUInt8(32, 0)
entry.writeUInt8(32, 1)
entry.writeUInt8(0, 2)
entry.writeUInt8(0, 3)
entry.writeUInt16LE(1, 4)
entry.writeUInt16LE(32, 6)
entry.writeUInt32LE(favicon32.length, 8)
entry.writeUInt32LE(iconDir.length + entry.length, 12)

fs.writeFileSync('public/favicon.ico', Buffer.concat([iconDir, entry, favicon32]))

const appleTouchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="${BG_DARK}" />
  <polygon fill="${ACCENT_DARK}" points="90,42 138,90 90,138 42,90" />
</svg>`

const appleTouch = await sharp(Buffer.from(appleTouchSvg)).resize(180, 180).png().toBuffer()
fs.writeFileSync('public/apple-touch-icon.png', appleTouch)

console.log('Generated favicon.svg, favicon-32x32.png, favicon.ico, apple-touch-icon.png')
