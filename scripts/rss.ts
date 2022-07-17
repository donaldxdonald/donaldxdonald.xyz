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

const DOMAIN = 'https://donaldxdonald.xyz'

const AUTHOR: Author = {
  name: 'Donald Mok',
  email: 'mzhlovefama@hotmail.com',
  link: 'https://donaldxdonald.xyz/',
}

async function buildBlogRSS() {
  const files = await fg('src/posts/*.md')

  const options: FeedOptions = {
    author: AUTHOR,
    title: 'DonaldxBlog',
    id: 'https://donaldxdonald.xyz/',
    link: 'https://donaldxdonald.xyz/',
    description: `It's all about Donald Mok's Blog`,
    copyright: 'CC BY-NC-SA 4.0 2022 © Donald Mok',
    feedLinks: {
      json: 'https://donaldxdonald.xyz/feed.json',
      atom: 'https://donaldxdonald.xyz/feed.atom',
      rss: 'https://donaldxdonald.xyz/feed.xml',
    },
  }

  const posts: Item[] = (await Promise.all(
    files
      .filter(fp => !fp.toLowerCase().includes('weekly'))
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
            .replace(/^src\/posts\/(.+)\.md$/, '/post/$1')
            .toLowerCase(),
        } as Item
      }),
  )).filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  await writeFeed('feed', posts, options)
}

async function writeFeed(name: string, items: Item[], options: FeedOptions) {
  options.author = AUTHOR

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
}

main()
