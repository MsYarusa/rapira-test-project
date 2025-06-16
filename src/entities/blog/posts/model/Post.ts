import type { Category } from '@/entities/blog/categories/@x/posts'

export interface Post {
  id: number
  title: string
  description: string
  content: string
  date: Date
  readTime: number // В минутах
  imageUrl: string
  // Запрашиваем комментарии только при необходимости. Храним только их количество
  commentsCount: number
  categories: Category[]
}
