export interface ProjectLink {
  label: string
  href: string
}

/**
 * Intrinsic size is required: it drives the stage aspect ratio and prevents
 * layout shift while the screenshot loads.
 */
export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface Project {
  slug: string
  title: string
  year: string
  role: string
  platforms: string
  tags: string[]
  description: string
  images: ProjectImage[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'deep-sand-maze',
    title: 'Duneloom Puzzle',
    year: '2026',
    role: 'Lead Developer, Original Concept',
    platforms: 'iOS, Android',
    tags: ['Puzzle', 'Wave Function Collapse', 'Level Generation', 'Mobile'],
    description:
      "A puzzle game inspired by the board game Labyrinth and Arabic mythology and culture: the player rearranges maze tiles to open a path for the hero through the labyrinth. I came up with the concept and wrote nearly all of the code, from the first prototype to the shipped game — art and 3D were handled by other artists on the team. The hardest part was the level-building system, driven by wave function collapse, plus the waypoint systems for the player and the mobs.",
    images: [
      {
        src: '/projects/sand/maze1.webp',
        alt: 'Duneloom Puzzle — lobby with the hooded hero and GO button',
        width: 662,
        height: 1440,
      },
      {
        src: '/projects/sand/maze2.webp',
        alt: 'Duneloom Puzzle — cave maze level with a treasure chest objective',
        width: 662,
        height: 1440,
      },
      {
        src: '/projects/sand/maze3.webp',
        alt: 'Duneloom Puzzle — maze worlds map screen for Ancient Temple',
        width: 662,
        height: 1440,
      },
      {
        src: '/projects/sand/maze4.webp',
        alt: 'Duneloom Puzzle — rotating maze tiles to open a path',
        width: 662,
        height: 1440,
      },
      {
        src: '/projects/sand/maze5.webp',
        alt: 'Duneloom Puzzle — pathfinding past an enemy on the board',
        width: 662,
        height: 1440,
      },
      {
        src: '/projects/sand/maze6.webp',
        alt: 'Duneloom Puzzle — palace maze with guards, traps and chests',
        width: 662,
        height: 1440,
      },
    ],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.nomirage.deepsand',
      },
    ],
  },
  {
    slug: 'sidus-heroes-nidum',
    title: 'Sidus Heroes: Nidum',
    year: '2022–2025',
    role: 'JavaScript Developer',
    platforms: 'Web',
    tags: ['JavaScript', 'Mechanics', 'UI', 'Arena Battler'],
    description:
      'A classic 3v3 arena battler: two players, up to six heroes each, turn-based rounds — and the real contest is whose build holds up better. I worked on the game mechanics, integrated the PlayCanvas visuals coming from the art team, and built the UI in Vue.js. The game runs entirely in the browser and fully in 3D with high-fidelity models, which meant spending a good part of the project on performance and optimization.',
    images: [
      {
        src: '/projects/nidum/nidum0.webp',
        alt: 'Sidus Heroes: Nidum — turn-based combat with an initiative order bar',
        width: 1600,
        height: 900,
      },
      {
        src: '/projects/nidum/nidum1.webp',
        alt: 'Sidus Heroes: Nidum — squad facing enemies in a swamp arena',
        width: 1600,
        height: 900,
      },
      {
        src: '/projects/nidum/nidum2.webp',
        alt: 'Sidus Heroes: Nidum — armor and loadout customization screen',
        width: 1600,
        height: 900,
      },
      {
        src: '/projects/nidum/nidum3.webp',
        alt: 'Sidus Heroes: Nidum — squad roster with power ratings',
        width: 1600,
        height: 900,
      },
    ],
    links: [{ label: 'Website', href: 'https://sidusheroes.com/nidum' }],
  },
  {
    slug: 'sidus-heroes-asterally',
    title: 'Sidus Heroes: Asterally',
    year: '2024',
    role: 'JavaScript Developer',
    platforms: 'Telegram Web',
    tags: ['JavaScript', 'UI', 'Backend', 'Anti-cheat', 'Arcade', 'Temporary event'],
    description:
      "An arcade space-survival runner: fly through an asteroid belt and dodge for as long as you can, racing everyone else on a massive leaderboard. My part was the UI end to end (integrating the artist's visuals and animations) and the backend behind the shop and the leaderboard, plus keeping all of it running. Since the leaderboard prize is real money, a good chunk of the work was building anti-cheat protection for it.",
    images: [
      {
        src: '/projects/asterally/aster1.webp',
        alt: 'Sidus Heroes: Asterally — ship lobby with tournament and prize fund',
        width: 1600,
        height: 556,
      },
      {
        src: '/projects/asterally/aster2.webp',
        alt: 'Sidus Heroes: Asterally — flying past an asteroid during a run',
        width: 1600,
        height: 556,
      },
      {
        src: '/projects/asterally/aster3.webp',
        alt: 'Sidus Heroes: Asterally — ship grazing a large asteroid',
        width: 1600,
        height: 556,
      },
      {
        src: '/projects/asterally/aster4.webp',
        alt: 'Sidus Heroes: Asterally — flying through a narrow rock canyon',
        width: 1600,
        height: 556,
      },
    ],
    links: [],
  },
  {
    slug: 'cosmic-gears',
    title: 'Cosmic Gears',
    year: '2025',
    role: 'JavaScript Developer',
    platforms: 'Telegram Web',
    tags: ['JavaScript', 'UI', 'Backend', 'Anti-cheat', 'Arcade', 'Temporary Event'],
    description:
      "An arcade flying game built around a math twist: while dodging through the tunnel, the player grabs arithmetic signs and numbers to land the running total inside a target range. Made as a limited-time event for the Franck Muller watch brand. The hard part was the backend — at least 4,000 active daily players — so I built it on Redis and Bull to keep responses fast under that load.",
    images: [
      {
        src: '/projects/cosmic/cosmic1.webp',
        alt: 'Cosmic Gears — start screen with score and a robot mascot',
        width: 606,
        height: 1079,
      },
      {
        src: '/projects/cosmic/cosmic2.webp',
        alt: 'Cosmic Gears — ship flying through a gear-lined tunnel, collecting multipliers',
        width: 606,
        height: 1079,
      },
      {
        src: '/projects/cosmic/cosmic3.webp',
        alt: 'Cosmic Gears — ship weaving past bonus orbs in the tunnel',
        width: 606,
        height: 1079,
      },
      {
        src: '/projects/cosmic/cosmic4.webp',
        alt: 'Cosmic Gears — leaderboard ranking',
        width: 606,
        height: 1079,
      },
    ],
    links: [],
  },
  {
    slug: 'gold-factory-manager',
    title: 'Gold Factory Manager',
    year: '2025',
    role: 'Lead Developer',
    platforms: 'Web, Android',
    tags: ['Unity 6', 'Management Simulator', 'Private client'],
    description:
      'A management sim about running a gold-mining complex, in the spirit of Fallout Shelter. The hard part was building it from scratch in three months — a team of three, and I was the only developer. We shipped on Unity for Web first, with Android as a second target, and managed to hit the deadline with a polished game that met the client’s brief.',
    images: [
      {
        src: '/projects/gold/gold1.webp',
        alt: 'Gold Factory Manager — open-pit mine and industrial yard overview',
        width: 1600,
        height: 765,
      },
      {
        src: '/projects/gold/gold2.webp',
        alt: 'Gold Factory Manager — workers arriving at the modular facility',
        width: 1600,
        height: 765,
      },
      {
        src: '/projects/gold/gold3.webp',
        alt: 'Gold Factory Manager — office interior with a character at work',
        width: 1600,
        height: 765,
      },
      {
        src: '/projects/gold/gold4.webp',
        alt: 'Gold Factory Manager — processing rooms with workers assigned',
        width: 1600,
        height: 765,
      },
    ],
    links: [],
  },
]
