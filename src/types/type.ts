export interface Post {
  title: string
  date: Date
  category: string
  excerpt?: string
  slug?: string
}

export interface PostDetail extends Post {
  content: string
}
