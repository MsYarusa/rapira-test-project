import type { Category } from '@/entities/blog/categories/@x/posts'
import type { Comment } from '@/entities/blog/comments/@x/posts'

export interface Post {
  id: number
  title: string
  description: string
  content: string
  date: Date
  readTime: number // В минутах
  imageUrl: string
  commentsCount: number // Запрашиваем комментарии только при необходимости
  categories: Category[]
}
