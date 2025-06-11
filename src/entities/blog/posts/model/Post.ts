import type { Category } from '@/entities/blog/categories/@x/posts'
import type { Comment } from '@/entities/blog/comments/@x/posts'

export interface Post {
  id: number
  title: string
  description: string
  content: string
  date: Date
  readTime: number // In minutes
  imageUrl: string
  categories: Category[]
  comments: Comment[]
}
