import { ViteSSGContext } from 'vite-ssg'
export type UserModule = (ctx: ViteSSGContext) => void

export interface Contact {
  icon: string
  text: string
  link: string
}

export interface Keyword {
  text: string
  link?: string
}

export enum PostType {
  LATEST = 'Latest',
  PROGRAMMING = 'Programming',
  FILM = 'Film'
}

export enum CrossOverType {
  DONALD = 'Donald',
  BLOG = 'Blog',
  WEEKLY = 'Weekly'
}

export interface PostBlock {
  type: PostType
  label: string
  url: string
  limit: number
}

export type CrossOverItem = {
  type: CrossOverType
  href: string
}

export interface Frontmatter {
  title: string
  date?: string
  display?: string
}

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter?: Frontmatter
  }
}
