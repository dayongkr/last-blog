import { Badge } from '@/components/ui/badge'
import { getAllPosts } from '@/lib/api'
import { PostDetail } from '@/types/type'
import dayjs from 'dayjs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import markdownStyle from './markdown.module.css'
import Comment from './_components/Comment'

interface PostProps {
  params: {
    category: string
    slug: string
  }
}

export const metadata = {
  title: 'Dayong Blog'
}

export default function Post({ params }: PostProps) {
  const { category, slug } = params
  const post: PostDetail = getAllPosts()[category][slug]
  metadata.title = `${post.title} - Dayong Blog`
  return (
    <section className="w-full max-w-screen-md">
      <section className="border-b border-border">
        <h1 className="text-4xl font-bold leading-snug md:text-5xl md:leading-snug">
          {post.title}
        </h1>
        <div className="my-6 flex items-center gap-3">
          <Badge className="uppercase">{post.category}</Badge>
          <p className="font-bold">
            Dayong Lee
            <span className="font-normal opacity-70">
              {' '}
              · {dayjs(post.date).format('YYYY년 MM월 DD일')}
            </span>
          </p>
        </div>
      </section>
      <article className={markdownStyle.markdown}>
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              format: 'md'
            }
          }}
        />
      </article>
      <Comment />
    </section>
  )
}
