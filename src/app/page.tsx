import logo from '@public/profile.png'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { getRecentPosts } from '@/lib/api'
import dayjs from 'dayjs'

export default function Home() {
  const posts = getRecentPosts()
  return (
    <>
      <Bio />
      <div className="grid grid-cols-1 gap-8">
        <h2 className="border-b border-b-border pb-3 font-bold">
          Recent posts
        </h2>
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              href={`post/${post.category}/${post.slug}`}
              key={post.title}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <Badge className="uppercase">{post.category}</Badge>
                <h3 className="text-lg font-bold">{post.title}</h3>
              </div>
              <p className="line-clamp-2 text-sm opacity-60">{post.excerpt}</p>
              <p className="text-sm opacity-60">
                {dayjs(post.date).format('YYYY년 MM월 DD일')}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

function Bio() {
  return (
    <section className="flex w-full items-center md:gap-6">
      <Image
        className="scale-75 md:scale-100"
        src={logo}
        alt="Dayong Lee"
        width={125}
        height={125}
      />
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="text-2xl font-bold md:text-4xl">이다용 / Dayong Lee</h1>
        <p>
          <b>세상에 도움이 되는 것</b>들을 만들고 싶고 <b>생각하는 것</b>을
          좋아하는 대학생입니다!
        </p>
        <div className="flex gap-2">
          <Badge variant="outline">#frontend engineer</Badge>
          <Badge variant="outline">#undergrauate</Badge>
        </div>
      </div>
    </section>
  )
}
