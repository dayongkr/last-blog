import { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { cache } from 'react'
import { Post, PostDetail } from '@/types/type'

const postsPath = path.join(process.cwd(), '_posts')

function firstFourLines(file: { excerpt: any; content: string }) {
  file.excerpt = file.content.split('\n').slice(0, 4).join(' ')
}

export const getCategories = cache(() => {
  const categories = readdirSync(postsPath)
  return categories.filter((category) => !category.startsWith('.'))
})

export const getAllPosts = cache(() => {
  const categories = getCategories()
  const posts: { [key: string]: { [key: string]: PostDetail } } = {}
  categories.forEach((category) => {
    if (category.startsWith('.')) return
    const categoryPath = path.join(postsPath, category)
    const files = readdirSync(categoryPath)
    posts[category] = {}
    files.forEach((post) => {
      if (post.endsWith('.md')) {
        const postMatter = matter.read(path.join(categoryPath, post))
        posts[category][post.replace('.md', '')] = {
          title: postMatter.data.title,
          date: postMatter.data.date,
          category,
          content: postMatter.content
        }
      }
    })
  })
  return posts
})

export const getRecentPosts = cache(() => {
  const categories = getCategories()
  const posts: Post[] = []
  categories.forEach((category) => {
    if (category.startsWith('.')) return
    const categoryPath = path.join(postsPath, category)
    const files = readdirSync(categoryPath)
    files.forEach((post) => {
      if (post.endsWith('.md')) {
        const postMatter = matter.read(path.join(categoryPath, post), {
          excerpt: firstFourLines as unknown as boolean
        })
        posts.push({
          title: postMatter.data.title,
          date: postMatter.data.date,
          category,
          excerpt: postMatter.excerpt,
          slug: post.replace('.md', '')
        })
      }
    })
  })
  return posts.sort((a, b) => {
    return a.date > b.date ? -1 : 1
  })
})
