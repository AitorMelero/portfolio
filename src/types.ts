export interface Page {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
  IMAGE: string
}

export type Links = Array<{
  TEXT: string
  HREF: string
}>

export type Socials = Array<{
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}>

export type Skills = Array<{
  TEXT: string
  ICON: string
  HREF: string
}>
