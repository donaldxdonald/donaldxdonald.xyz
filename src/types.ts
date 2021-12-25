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

export type PostType = 'PROGRAMMING' | 'FILM'

export interface PostTitleItem {
  type: PostType
  content: string
}

export interface Frontmatter {
  title: string
  date?: string
}

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter?: Frontmatter
  }
}
