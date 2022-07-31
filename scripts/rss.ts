import fg from 'fast-glob'
import { Author, Feed, FeedOptions, Item } from 'feed'
import { constants } from 'fs'
import { access, mkdir, readFile, writeFile } from 'fs/promises'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import { dirname } from 'path'
import { Frontmatter } from '~/types'

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
})

const DOMAIN = 'https://donaldxdonald.xyz/'

const AUTHOR: Author = {
  name: 'Donald Mok',
  email: 'mzhlovefama@hotmail.com',
  link: 'https://donaldxdonald.xyz/',
}

const COPY_RIGHT = 'CC BY-NC-SA 4.0 2022 © Donald Mok'

async function buildBlogRSS() {
  const files = await fg('src/blog/*.md')

  const options: FeedOptions = {
    copyright: COPY_RIGHT,
    title: 'Donald x Blog',
    id: 'https://donaldxdonald.xyz/blog',
    link: 'https://donaldxdonald.xyz/blog',
    description: `It's all about Donald Mok's Blog`,
  }

  const posts: Item[] = (await Promise.all(
    files
      .map(async filePath => {
        const md = await readFile(filePath, 'utf-8')
        const { data, content } = matter(md)

        const { title, date = Date.now() } = data as Frontmatter

        const html = mdParser.render(content)

        return {
          title,
          date: new Date(date),
          author: [AUTHOR],
          content: html,
          link: DOMAIN + filePath
            .toLowerCase(),
        } as Item
      }),
  )).filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  await writeFeed('blog', posts, options)
}

async function buildWeeklyRSS() {
  const files = await fg('src/weekly/*.md')

  const options: FeedOptions = {
    copyright: COPY_RIGHT,
    title: 'Donald x Weekly',
    id: 'https://donaldxdonald.xyz/weekly',
    link: 'https://donaldxdonald.xyz/weekly',
    description: `What a Donald Mok's week!`,
  }

  const posts: Item[] = (await Promise.all(
    files
      .map(async filePath => {
        const md = await readFile(filePath, 'utf-8')
        const { data, content } = matter(md)

        const { title, date = Date.now() } = data as Frontmatter

        const html = mdParser.render(content)

        return {
          title,
          date: new Date(date),
          author: [AUTHOR],
          content: html,
          link: DOMAIN + filePath
            .toLowerCase(),
        } as Item
      }),
  )).filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  await writeFeed('weekly', posts, options)
}

async function writeFeed(name: string, items: Item[], options: FeedOptions) {
  options.author = AUTHOR
  options.feedLinks = {
    json: `https://donaldxdonald.xyz/${name}.json`,
    atom: `https://donaldxdonald.xyz/${name}.atom`,
    rss: `https://donaldxdonald.xyz/${name}.xml`,
  }

  const feed = new Feed(options)

  items.forEach(item => feed.addItem(item))

  await access(dirname(`./dist/${name}`), constants.F_OK).catch(() => {
    return mkdir(dirname(`./dist/${name}`))
  })
  await writeFile(`./dist/${name}.xml`, feed.rss2(), 'utf-8')
  await writeFile(`./dist/${name}.atom`, feed.atom1(), 'utf-8')
  await writeFile(`./dist/${name}.json`, feed.json1(), 'utf-8')
}

async function main() {
  await buildBlogRSS()
  await buildWeeklyRSS()
}

main()
