'use client'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export default function Comment() {
  const { theme } = useTheme()
  console.log(theme)
  return (
    <Giscus
      id="comments"
      repo="dayongkr/blog-comment"
      repoId="R_kgDOJzIJ3Q"
      category="giscus"
      categoryId="DIC_kwDOJzIJ3c4CXa0g"
      mapping="title"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme}
      lang="ko"
      loading="lazy"
    />
  )
}
