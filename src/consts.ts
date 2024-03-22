import type { Site, Page, Links, Socials, Skills } from '@types'

// Global
export const SITE: Site = {
  TITLE: 'aitormelero.dev',
  DESCRIPTION: 'Portfolio personal de Aitor Melero',
  AUTHOR: 'Aitor Melero'
}

// Work Page
export const WORK: Page = {
  TITLE: 'Trabajo',
  DESCRIPTION: 'Lugares donde he trabajado.'
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.'
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Proyectos',
  DESCRIPTION: 'Proyectos recientes en los que he trabajado.'
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Buscar',
  DESCRIPTION: 'Busca entre mis proyectos.'
}

// Links
export const LINKS: Links = [
  {
    TEXT: 'Inicio',
    HREF: '/'
  },
  {
    TEXT: 'Trabajos',
    HREF: '/work'
  },
  {
    TEXT: 'Proyectos',
    HREF: '/projects'
  }
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'meleropiconaitor@gmail.com',
    HREF: 'mailto:meleropiconaitor@gmail.com'
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'AitorMelero',
    HREF: 'https://github.com/AitorMelero'
  },
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    TEXT: 'Aitor Melero Picón',
    HREF: 'https://www.linkedin.com/in/aitor-melero-pic%C3%B3n-678105293/'
  }
]

// Skills
export const SKILLS: Skills = [
  {
    TEXT: 'Astro',
    ICON: 'astro',
    HREF: 'https://astro.build'
  },
  {
    TEXT: 'Javascript',
    ICON: 'javascript',
    HREF: 'https://www.javascript.com'
  },
  {
    TEXT: 'Typescript',
    ICON: 'typescript',
    HREF: 'https://www.typescriptlang.org'
  },
  {
    TEXT: 'Tailwind',
    ICON: 'tailwind',
    HREF: 'https://tailwindcss.com'
  },
  {
    TEXT: 'React',
    ICON: 'react',
    HREF: 'https://react.dev/'
  },
  {
    TEXT: 'HTML',
    ICON: 'html',
    HREF: 'https://developer.mozilla.org/es/docs/Web/HTML'
  }
]
