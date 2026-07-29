export interface ProfileLink {
  label: string
  href: string
}

export interface ProfileFact {
  label: string
  value: string
}

export interface Profile {
  name: string
  role: string
  location: string
  available: boolean
  availabilityNote: string
  intro: string
  about: string[]
  facts: ProfileFact[]
  notes: string[]
  email: string
  links: ProfileLink[]
}

export const profile: Profile = {
  name: 'Librory',
  role: 'Game developer',
  location: 'Bangkok · Remote',
  available: true,
  availabilityNote: 'Open to new projects',
  intro:
    'Full-stack game developer focused on Unity and JavaScript. I ship complete products — gameplay, UI, networking, backend and the parts that keep them online.',
  about: [
    'I have five-plus years in game development and have contributed to more than ten shipped titles across web, mobile and desktop. Most of my recent work sits in Unity, WebGL and Telegram Mini Apps — covering everything from the client to payments, leaderboards and deployment.',
    'Beyond the code I care about game marketing and product validation — content, acquisition experiments, and testing ideas early. I like rapid prototypes that turn into playable products fast, then finishing what we start: shipping on time, working through the hard parts, and delivering something that holds up once it’s live.',
  ],
  facts: [
    {
      label: 'Stack',
      value:
        'Unity · PlayCanvas · Babylon.js · Three.js · Phaser · Node.js · Express · PostgreSQL · Redis',
    },
    {
      label: 'Focus',
      value: 'Unity · Web · Mobile · Multiplayer · Backend',
    },
    { label: 'Shipped', value: '10+ titles across web, mobile and desktop' },
    { label: 'Based in', value: 'Thailand, Bangkok · ICT (UTC+7) · Remote' },
  ],
  notes: [
    'Spent ten years working as a librarian and love sci-fi',
    'Favourite games — Chrono Cross, RimWorld, SOMA',
  ],
  email: 'hello@librory.org',
  links: [
    { label: 'GitHub', href: 'https://github.com/rogovenko' },
    { label: 'itch.io', href: 'https://librory.itch.io/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rogovenko/' },
  ],
}
